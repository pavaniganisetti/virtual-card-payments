package com.alacriti.virtualcardpayments.model;

public class LoginUser {
	
	private String email;
	private String password;
	private int userId;
	
	public LoginUser() {	
	}
	public LoginUser(String email, String password, int userId) {
		super();
		this.email = email;
		this.password = password;
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}

	
}
