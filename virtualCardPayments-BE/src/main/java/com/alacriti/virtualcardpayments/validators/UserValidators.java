package com.alacriti.virtualcardpayments.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.alacriti.virtualcardpayments.model.LoginUser;
import com.alacriti.virtualcardpayments.model.User;

@Service
public class UserValidators {
	private static final Logger log = LoggerFactory.getLogger(UserValidators.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public boolean isExistingUser(User user) throws Exception {
		log.info("UserValidators.isExistingUser(user) method");
		Boolean exists = false;
		try {
			String queryIsExistingUserUser = "SELECT EXISTS(SELECT * FROM AL364_vc_user_details WHERE email=?)";

			int count = jdbcTemplate.queryForObject(queryIsExistingUserUser, new Object[] { user.getEmail() },
					Integer.class);
			if (count > 0) {
				exists = true;
				log.info("User with email id already exists");
			}
		} catch (Exception e) {
			log.error("Exception occcured ");
			throw e;
		}
		return exists;
	}

	public boolean checkForValidUser(User user) {
		log.info("UserValidators.checkValidUser(user) method");

		Pattern emailRegex = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[a-z]{2,}$", Pattern.CASE_INSENSITIVE);
		Matcher emailMatcher = emailRegex.matcher(user.getEmail());

		Pattern passwordRegex = Pattern.compile(
				"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", Pattern.CASE_INSENSITIVE);
		Matcher passwordMatcher = passwordRegex.matcher(user.getPassword());

		Pattern phoneNumberRegex = Pattern.compile("^[0-9]{10}$");
		Matcher phoneNumberMatcher = phoneNumberRegex.matcher(user.getPhoneNumber());

		Boolean validDetails = false;

		if (user.getFirstName() != null && user.getLastName() != null && user.getPhoneNumber() != null
				&& user.getEmail() != null && user.getPassword() != null) {
			if (emailMatcher.matches() && phoneNumberMatcher.matches() && passwordMatcher.matches()) {
				validDetails = true;
				log.info("checkForValidUser(user) :" + validDetails);
			}
		}
		return validDetails;

	}

	public Boolean isValidLogin(LoginUser login) {
		log.info("UserValidators.isValidLogin(login) method");

		Pattern emailRegex = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[a-z]{2,}$", Pattern.CASE_INSENSITIVE);
		Matcher emailMatcher = emailRegex.matcher(login.getEmail());

		Pattern passwordRegex = Pattern.compile(
				"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", Pattern.CASE_INSENSITIVE);
		Matcher passwordMatcher = passwordRegex.matcher(login.getPassword());

		Boolean validCredentials = false;

		if (login.getEmail() != null & login.getPassword() != null) {
			if (emailMatcher.matches() && passwordMatcher.matches()) {
				validCredentials = true;
				log.info("isValidLogin(login) :" + validCredentials);

			}
		}
		return validCredentials;
	}
}
