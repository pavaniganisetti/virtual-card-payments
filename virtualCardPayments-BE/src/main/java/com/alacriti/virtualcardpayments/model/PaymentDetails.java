package com.alacriti.virtualcardpayments.model;

import java.util.Date;

public class PaymentDetails {
	
	private String amountLimit;
	private int businessId ;
	private int cardId;
	private Date expiryDate;
	private String paymentAmount;
	private int userId;
	private String virtualCardNumber;
	

	public PaymentDetails() {
	}


	public PaymentDetails(String amountLimit, int businessId, int cardId, Date expiryDate, String paymentAmount,
			int userId, String virtualCardNumber) {
		super();
		this.amountLimit = amountLimit;
		this.businessId = businessId;
		this.cardId = cardId;
		this.expiryDate = expiryDate;
		this.paymentAmount = paymentAmount;
		this.userId = userId;
		this.virtualCardNumber = virtualCardNumber;
	}


	public String getAmountLimit() {
		return amountLimit;
	}


	public void setAmountLimit(String amountLimit) {
		this.amountLimit = amountLimit;
	}


	public int getBusinessId() {
		return businessId;
	}


	public void setBusinessId(int businessId) {
		this.businessId = businessId;
	}


	public int getCardId() {
		return cardId;
	}


	public void setCardId(int cardId) {
		this.cardId = cardId;
	}


	public Date getExpiryDate() {
		return expiryDate;
	}


	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}


	public String getPaymentAmount() {
		return paymentAmount;
	}


	public void setPaymentAmount(String paymentAmount) {
		this.paymentAmount = paymentAmount;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getVirtualCardNumber() {
		return virtualCardNumber;
	}


	public void setVirtualCardNumber(String virtualCardNumber) {
		this.virtualCardNumber = virtualCardNumber;
	}

	




	
	
	
	
}
