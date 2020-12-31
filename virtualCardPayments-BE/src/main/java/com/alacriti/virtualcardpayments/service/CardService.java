package com.alacriti.virtualcardpayments.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alacriti.virtualcardpayments.dao.CardDao;
import com.alacriti.virtualcardpayments.model.Card;
import com.alacriti.virtualcardpayments.validators.CardValidators;

@Service
public class CardService {

	private static final Logger log = LoggerFactory.getLogger(CardService.class);

	@Autowired
	private CardValidators cardValidators;

	@Autowired
	private CardDao cardDao;

	public Boolean addCard(Card card) throws Exception {

		log.info("CardService.addCard(card) method");
		try {
			Boolean isValidCard = cardValidators.isValidCard(card);
			Boolean isExistingCard = cardValidators.isExistingCard(card);
			if (isValidCard && !isExistingCard) {
				cardDao.addCard(card);
				int id = cardDao.updateCardId(card.getCardNumber());
				card.setCardId(id);
			} 
			return isExistingCard;
		} catch (Exception e) {
			log.error("Exception occurred ");
			throw e;
		}
	}

	public List<Map<String, Object>> getCardsWithId(int userId) throws Exception {

		log.info("CardService.getCardsWithId(userId)  method");
		try {
			return cardDao.getCardsWithId(userId);
		} catch (Exception e) {
			log.error("Exception Occured ");
			throw e;
		}
	}

	public String getVirtualCard(String cardNumber) throws Exception {
		log.info("CardService.getVirtualCard(userId,cardNumber)  method");
		try {
//			Boolean checkExpiryDateForCard()
			cardDao.generateSequenceNumber();
			int sequenceNumber = cardDao.getSequenceNumber();
			String virtualCard = cardDao.getVirtualCard(sequenceNumber, cardNumber);
			return virtualCard;
		} catch (Exception e) {
			log.error("Exception Occured ");
			throw e;
		}
	}

}
