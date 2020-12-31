package com.alacriti.virtualcardpayments.controller;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alacriti.virtualcardpayments.model.PaymentDetails;
import com.alacriti.virtualcardpayments.service.CookieService;
import com.alacriti.virtualcardpayments.service.PaymentsService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class PaymentsController {

	private static final Logger log = LoggerFactory.getLogger(PaymentsController.class);

	@Autowired
	private PaymentsService paymentsService;

	@Autowired
	private CookieService cookieService;

	@RequestMapping(method = RequestMethod.POST, value = "/updatePaymentDetails")
	public ResponseEntity<Object> updatePaymentDetails(HttpServletRequest request,@RequestBody PaymentDetails details) {
		log.info("PaymentsController.updatePaymentDetails(details) method");
		try {
			int userId = cookieService.validateCookie(request.getCookies()); // return userId if cookie exists else 0
			if (userId != 0) {
				details.setUserId(userId);
				paymentsService.updatePaymentDetails(details);
				return ResponseEntity.ok(200);
			} else {
				return ResponseEntity.badRequest().body("Session Expired!");
			}
		} catch (Exception e) {
			log.error("Exception Occured " + e.toString());
		}
		return ResponseEntity.badRequest().body("Payment Failed");
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getAnalyticsWithId") 
	public ResponseEntity<Object> getAnalyticsWithId(HttpServletRequest request) { 																								// userId
		log.info("PaymentsController.getAnalyticsWithId() method");
		List<Map<String, Object>> details;
		try {
			int userId = cookieService.validateCookie(request.getCookies()); // return userId if cookie exists else 0
			if (userId != 0) {
				details = paymentsService.getAnalyticsWithId(userId);
				return ResponseEntity.ok(details);
			} else {
				return ResponseEntity.badRequest().body("Session Expired!");
			}
		} catch (Exception e) {
			log.error("Exception Occurred " + e.toString());
		}
		return ResponseEntity.badRequest().body("Internal Server error");

	}

}
