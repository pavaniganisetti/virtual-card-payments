package com.alacriti.virtualcardpayments.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alacriti.virtualcardpayments.model.LoginUser;
import com.alacriti.virtualcardpayments.model.User;
import com.alacriti.virtualcardpayments.service.CookieService;
import com.alacriti.virtualcardpayments.service.UserService;
import com.alacriti.virtualcardpayments.utils.CookieUtils;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private CookieService cookieService;

	private static final Logger log = LoggerFactory.getLogger(UserController.class);

	@RequestMapping(method = RequestMethod.GET,value = "/check")
	public String check()
	{
		return "Hello!";
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/signUp", produces = "application/json")
	public ResponseEntity<Object> addUser(HttpServletResponse response, HttpServletRequest request, @RequestBody User user)
			throws Exception {
		log.info("UserController.addUser(user) method");
		try {
			Boolean doesUserExists = userService.addUser(user);
			if (user.getUserId() != 0 && !doesUserExists) {
				Cookie cookie = CookieUtils.generateCookie();
				response.addCookie(cookie);
				cookieService.insertCookie(cookie, user.getUserId());
				return ResponseEntity.ok(1); //user.getUserId()
			} else {
				return ResponseEntity.badRequest().body("Email already exists!");
			}
		} catch (Exception e) {
			log.error("Exception occured " + e.toString());
		}
		return ResponseEntity.badRequest().body("Internal Server error!");
	}

	@RequestMapping(method = RequestMethod.POST, value = "/login")
	public ResponseEntity<Object> loginUser(HttpServletResponse response, HttpServletRequest request,
			@RequestBody LoginUser login) {
		log.info("UserController.loginUser(login) method ");
		try {
			int userId = cookieService.validateCookie(request.getCookies());
			if (userId != 0) {
				userService.loginUser(login);
			} else {
				Cookie cookie = CookieUtils.generateCookie();
				response.addCookie(cookie);
				userService.loginUser(login);
				cookieService.insertCookie(cookie, login.getUserId());
			}
			return ResponseEntity.ok(login);
		} catch (Exception e) {
			log.error("Exception occured " + e.toString());
			return ResponseEntity.badRequest().body("Invalid Credentials!");
		}
	}

	@RequestMapping(method = RequestMethod.GET, value = "/logout")
	public ResponseEntity<Object> setSessionExpired(HttpServletRequest request) { 
		log.info("UserController.setSessionExpired(userId) method");
		try {
			int userId = cookieService.validateCookie(request.getCookies());
			if (userId != 0) {
				String cookieValue = CookieUtils.getCookieValue(request.getCookies());
				cookieService.setSessionExpired(cookieValue);
				return ResponseEntity.ok(1);
			}
		} catch (Exception e) {
			log.error("Exception occured " + e.toString());
		}
		return ResponseEntity.badRequest().body("Session Expired!");
	}
}
