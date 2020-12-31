package com.alacriti.virtualcardpayments.dao;

import java.time.LocalDate;
import java.time.LocalDateTime;
//import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.alacriti.virtualcardpayments.model.Card;
import com.alacriti.virtualcardpayments.utils.CreateRandomNumber;

@Repository
public class CardDao {

	private static final Logger log = LoggerFactory.getLogger(CardDao.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public void addCard(Card card) throws Exception {
		LocalDateTime today = LocalDateTime.now();

		log.info("CardDao.addCard(card) method");

		String date = card.getExpiryDate();
		int month = Integer.parseInt(date.substring(0, 2));
		int year = Integer.parseInt("20" + date.substring(3, date.length()));
		LocalDate localdate = LocalDate.of(year, month, 01);

		try {
			String queryToAddCard = "insert into AL364_vc_card_details (creation_time,card_id,user_id,card_number,expiry_date) values(?,?,?,?,? )";
			jdbcTemplate.update(queryToAddCard,
					new Object[] { today, card.getCardId(), card.getUserId(), card.getCardNumber(), localdate });
		} catch (Exception e) {
			log.error("Exception Occurred ");
			throw e;
		}
	}

	public int updateCardId(String cardNumber) throws Exception {
		log.info("CardDao.updateCardId(cardNumber) method");
		try {
			String queryUpdateCardId = "select card_id from AL364_vc_card_details where card_number=?";
			int id = jdbcTemplate.queryForObject(queryUpdateCardId, new Object[] { cardNumber }, Integer.class);
			return id;
		} catch (Exception e) {
			log.error("Exception occured ");
			throw e;
		}
	}

	public List<Map<String, Object>> getCardsWithId(int userId) throws Exception {

		log.info("CardDao.getCardsWithId(userId) method");
		try {
			String queryToGetCards = "select card_number,card_id,expiry_date from AL364_vc_card_details where user_id = ?";
			List<Map<String, Object>> cardDetails = jdbcTemplate.queryForList(queryToGetCards, new Object[] { userId });
			return cardDetails;
		} catch (Exception e) {
			log.error("Exception occured ");
			throw e;
		}
	}

	public String getVirtualCard(int sequenceNumber, String cardNumber) {

		log.info("CardDao.getVirtualCard(sequenceNumber,cardNumber) method");
		try {
			Long randomNumber = CreateRandomNumber.getNumber();
			String virtualCard = cardNumber.substring(0, 2) + "" + randomNumber + "" + sequenceNumber;
			return virtualCard;
		} catch (Exception e) {
			log.error("Exception occured ");
			throw e;
		}
	}

	public void generateSequenceNumber() throws Exception {
		log.info("CardDao.generateSequenceNumber() method");
		try {
			String queryToGenerateSequenceNumber = "insert into AL364_sequence_table values ()";
			jdbcTemplate.update(queryToGenerateSequenceNumber);
		} catch (Exception e) {
			log.error("Exception occured ");
			throw e;
		}
	}

	public int getSequenceNumber() throws Exception {
		log.info("CardDao.getSequenceNumber() method");
		try {
			String queryToGetSequenceNumber = "select * from AL364_sequence_table order by sequence_number desc limit 1";
			int sequenceNumber = jdbcTemplate.queryForObject(queryToGetSequenceNumber, new Object[] {}, Integer.class);
			return sequenceNumber;
		} catch (Exception e) {
			log.error("Exception occured ");
			throw e;
		}
	}
}
