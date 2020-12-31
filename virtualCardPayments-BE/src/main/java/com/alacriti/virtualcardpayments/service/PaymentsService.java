package com.alacriti.virtualcardpayments.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alacriti.virtualcardpayments.controller.PaymentsController;
import com.alacriti.virtualcardpayments.dao.PaymentsDao;
import com.alacriti.virtualcardpayments.model.PaymentDetails;

@Service
public class PaymentsService {

	private static final Logger log = LoggerFactory.getLogger(PaymentsController.class);

	@Autowired
	private PaymentsDao paymentsDao;

	public void updatePaymentDetails(PaymentDetails details) throws Exception {
		log.info("PaymentsService.updatePaymentDetails(details) method ");
		try {
			paymentsDao.updateVirtualCardTable(details);
			int id = paymentsDao.updateVirtualCardId(details.getVirtualCardNumber());
			paymentsDao.updatePaymentsTable(details, id);
		} catch (Exception e) {
			log.error("Exception Occured ");
			throw e;
		}
	}

	public List<Map<String, Object>> getAnalyticsWithId(int userId) throws Exception {

		log.info("PaymentsService.getAnalyticsWithId(userId) method");
		List<Map<String, Object>> details;
		try {
			details = paymentsDao.getAnalyticsWithId(userId);
			return details;
		} catch (Exception e) {
			log.error("Exception Occured ");
			throw e;
		}
	}
}
