package com.alacriti.virtualcardpayments.dao;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.alacriti.virtualcardpayments.controller.PaymentsController;
import com.alacriti.virtualcardpayments.model.PaymentDetails;

@Repository
public class PaymentsDao {
	private static final Logger log = LoggerFactory.getLogger(PaymentsController.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	LocalDateTime today = LocalDateTime.now();

	public void updateVirtualCardTable(PaymentDetails details) throws Exception {
		log.info("PaymentsDao.updateVirtualCardTable(details) dao started");
		try {
			String queryUpdateVcTable = "insert into AL364_vc_virtual_card_details (card_id,user_id,virtual_card_number,amount_limit,creation_time,expiry_date) values (?,?,?,?,?,?)";
			jdbcTemplate.update(queryUpdateVcTable, new Object[] { details.getCardId(), details.getUserId(),
					details.getVirtualCardNumber(), details.getAmountLimit(), today, details.getExpiryDate() });
		} catch (Exception e) {
			log.error("Exception Occurred ");
			throw e;
		}
	}

	public int updateVirtualCardId(String virtualCardNumber) throws Exception {
		log.info("PaymentsDao.updateVirtualCardId(virtualCardNumber) method");
		try {
			String queryGetVcId = "select virtual_card_id from AL364_vc_virtual_card_details where virtual_card_number=?";
			int vcId = jdbcTemplate.queryForObject(queryGetVcId, new Object[] { virtualCardNumber }, Integer.class);
			return vcId;
		} catch (Exception e) {
			log.error("Exception Occurred ");
			throw e;
		}
	}

	public void updatePaymentsTable(PaymentDetails details, int vcId) throws Exception {
		log.info("PaymentsDao.updatePaymentsTable(details,vcId) method");
		try {
			String queryUpdatePaymentsTable = "insert into AL364_vc_payment_details (user_id,card_id,virtual_card_id,business_id,payment_amount,payment_date,creation_time) values (?,?,?,?,?,?,?)";
			jdbcTemplate.update(queryUpdatePaymentsTable, new Object[] { details.getUserId(), details.getCardId(), vcId,
					details.getBusinessId(), details.getPaymentAmount(), today, today });
		} catch (Exception e) {
			log.error("Exception Occurred ");
			throw e;
		}
	}

	public List<Map<String, Object>> getAnalyticsWithId(int userId) throws Exception {
		log.info("PaymentsDao.getAllVirtualCardDetails(userId) method");
		try {
			String queryGetDetails = "select vc.virtual_card_number, vc.amount_limit,vc.virtual_card_status,"
					+ "vc.expiry_date,pd.payment_id,pd.payment_status,pd.payment_amount,pd.payment_date,"
					+ "cd.card_number,bt.business_method\n"
					+ "from AL364_vc_payment_details as pd\n" + "    inner join\n"
					+ "    AL364_vc_virtual_card_details as vc\n" + "    on pd.virtual_card_id = vc.virtual_card_id\n"
					+ "    inner join\n" + "    AL364_vc_card_details as cd\n" + "    on pd.card_id = cd.card_id\n"
					+ "    inner join\n" + "    AL364_business_types as bt\n"
					+ "    on pd.business_id = bt.business_id\n" + "where pd.user_id = ?";

			List<Map<String, Object>> details = jdbcTemplate.queryForList(queryGetDetails, new Object[] { userId });
			return details;
		} catch (Exception e) {
			log.error("Exception Occurred ");
			throw e;
		}
	}

}
