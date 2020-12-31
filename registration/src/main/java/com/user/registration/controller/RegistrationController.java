package com.user.registration.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.user.registration.model.User;
import com.user.registration.service.IRegistrationService;
import com.user.registration.service.RegistrationService;

@RestController
@CrossOrigin
public class RegistrationController {
	private static final Logger log = LoggerFactory.getLogger(RegistrationController.class);
	
//	@Autowired
//	private RegistrationService service;
	@Autowired
	@Qualifier("regService")
	private IRegistrationService service;
	
	@RequestMapping(method=RequestMethod.GET,value="/check")
	public String check() {
		return "Hello";
	}
	
	
	@RequestMapping(method=RequestMethod.POST,value="/addUser")
	public String addUser(@RequestBody User user) throws Exception
	{
		log.debug("RegistrationController: addUser");
		try {
			service.addUser(user);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			return "Failure";
		}
		return "Success";
	}
	
	@RequestMapping(method = RequestMethod.GET,value = "/getAllUsers")
	public List<Map<String, Object>> getAllUsers() 
	{
		log.debug("RegistrationController.getAllUsers");
		List<Map<String, Object>> users = null;
		try {
			users = service.getAllUsers();
		}
		catch(Exception e) {
			log.error(e.getMessage());
		}
		return users;
	}
	
	@RequestMapping(method = RequestMethod.DELETE,value="/deleteUser/{email}")
	public String deleteUser(@PathVariable String email) {
		log.debug("RegistrationController.deleteUser");
		try {
			service.deleteUser(email);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			return "failed to delete";
		}
		return "successfully deleted";
	}
}
