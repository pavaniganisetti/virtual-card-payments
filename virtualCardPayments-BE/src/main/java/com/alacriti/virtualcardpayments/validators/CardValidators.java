package com.alacriti.virtualcardpayments.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.alacriti.virtualcardpayments.model.Card;
import com.alacriti.virtualcardpayments.utils.LuhnAlgorithm;

@Service
public class CardValidators {

	private static final Logger log = LoggerFactory.getLogger(CardValidators.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public boolean isExistingCard(Card card) throws Exception {
		log.info("CardValidators.isExistingCard(card) method");
		Boolean exists = false;
		try {
			String queryIsExistingCard = "SELECT EXISTS(SELECT * FROM AL364_vc_card_details WHERE card_number=?)";

			int count = jdbcTemplate.queryForObject(queryIsExistingCard, new Object[] { card.getCardNumber() },
					Integer.class);
			if (count > 0) {
				exists = true;
			}
			log.info("Card already exists!");

		} catch (Exception e) {
			log.error("Exceptin occcured ");
			throw e;
		}
		return exists;
	}

	public Boolean isValidCard(Card card) {

		log.info("CardValidators.isValidCard(card) Method");

		Pattern cardNumberRegex = Pattern.compile("^[0-9]{16}$");
		Matcher cardNumberMatcher = cardNumberRegex.matcher(card.getCardNumber());

		Pattern cardExpiryRegex = Pattern.compile("^(0[1-9]|1[0-2])+\\/+?([0-9]{2})$");
		Matcher cardExpiryMatcher = cardExpiryRegex.matcher(card.getExpiryDate());

		Boolean isValidCard = false;
		if (!(card.getCardNumber() == null) && !(card.getExpiryDate() == null) && !(card.getCardNumber() == "")
				&& !(card.getExpiryDate() == "")) {
			if (cardNumberMatcher.matches() && cardExpiryMatcher.matches()
					&& LuhnAlgorithm.validCardNumber(card.getCardNumber())) {
				isValidCard = true;
				log.info("isValidCard(card) :" + isValidCard);
			}
		}
		return isValidCard;
	}

}
