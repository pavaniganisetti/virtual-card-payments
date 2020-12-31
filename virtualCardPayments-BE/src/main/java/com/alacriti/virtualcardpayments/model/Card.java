package com.alacriti.virtualcardpayments.model;


//import org.springframework.boot.autoconfigure.domain.EntityScan;


public class Card {

	private int cardId;
	private int userId;
	private String cardNumber;
	private String expiryDate;

	public Card() {
		
	}
	public Card(int cardId, int userId, String cardNumber, String expiryDate) {
		super();
		this.cardId = cardId;
		this.userId = userId;
		this.cardNumber = cardNumber;
		this.expiryDate = expiryDate;
	}
	public int getCardId() {
		return cardId;
	}
	public void setCardId(int cardId) {
		this.cardId = cardId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	public String getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}
	
	
	
	
}
