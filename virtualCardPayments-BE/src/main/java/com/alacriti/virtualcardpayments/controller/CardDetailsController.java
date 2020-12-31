package com.alacriti.virtualcardpayments.controller;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alacriti.virtualcardpayments.model.Card;
import com.alacriti.virtualcardpayments.service.CardService;
import com.alacriti.virtualcardpayments.service.CookieService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class CardDetailsController {

	@Autowired
	private CardService cardService;

	@Autowired
	private CookieService cookieService;

	private static final Logger log = LoggerFactory.getLogger(CardDetailsController.class);

	@RequestMapping(method = RequestMethod.POST, value = "/registerCard")
	public ResponseEntity<Object> addCard(HttpServletRequest request, @RequestBody Card card) {
		log.info("CardDetailsController.addCard(Card) method");
		try {
			int userId = cookieService.validateCookie(request.getCookies()); // return userId if cookie exists else 0
			if (userId != 0) {
				card.setUserId(userId);
				Boolean doesCardExists = cardService.addCard(card);
				if (doesCardExists) {
					return ResponseEntity.badRequest().body("Card already Exists!");
				}
				return ResponseEntity.ok(200);
			} else {
				return ResponseEntity.badRequest().body("Session Expired!");
			}
		} catch (Exception e) {
			log.error("Exception occured " + e.toString());
		}
		return ResponseEntity.badRequest().body("Invalid details!");
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getCard", produces = { "application/json" })
	public ResponseEntity<Object> getCardsWithId(HttpServletResponse response, HttpServletRequest request) {
		log.info("CardDetailsController.getCardsWithId(userId) method");
		List<Map<String, Object>> Cards = null;
		try {
			int userId = cookieService.validateCookie(request.getCookies()); // return userId if cookie exists else 0
			if (userId != 0) {
				Cards = cardService.getCardsWithId(userId);
				return ResponseEntity.ok(Cards);
			} else {
				return ResponseEntity.badRequest().body("Session Expired!");
			}
		} catch (Exception e) {
			log.error("Exception occured " + e.toString());
		}
		return ResponseEntity.badRequest().body("Internal Server Error");
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getVirtualCard/{cardNumber}", produces = {
			"application/json" })
	public ResponseEntity<Object> getVirtualCard(HttpServletRequest request, @PathVariable String cardNumber) { 
		log.info("CardDetailsController.getVirtualCard(userId,cardNumber) method");
		String virtualCard = "";
		try {
			int userId = cookieService.validateCookie(request.getCookies()); // return userId if cookie exists else 0
			if (userId != 0) {
				virtualCard = cardService.getVirtualCard(cardNumber);
				return ResponseEntity.ok(virtualCard);
			} else {
				return ResponseEntity.badRequest().body("Session Expired!");
			}
		} catch (Exception e) {
			log.error("Exception Occured " + e.toString());
		}
		return ResponseEntity.badRequest().body("Internal Server Error");
	}
}
