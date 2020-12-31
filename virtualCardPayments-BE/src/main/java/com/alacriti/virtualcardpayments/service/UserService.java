package com.alacriti.virtualcardpayments.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alacriti.virtualcardpayments.dao.UserDao;
import com.alacriti.virtualcardpayments.model.LoginUser;
import com.alacriti.virtualcardpayments.model.User;
import com.alacriti.virtualcardpayments.validators.UserValidators;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	@Autowired
	private UserValidators userValidators;

	private static final Logger log = LoggerFactory.getLogger(UserService.class);

	public Boolean addUser(User user) throws Exception {
		log.info("UserService.addUser(user) method");
		try {
			Boolean isValidUser = userValidators.checkForValidUser(user);
			Boolean isExistingUser = userValidators.isExistingUser(user);
			if (isValidUser && !isExistingUser) {
				userDao.addUser(user);
				int id = userDao.updateUserId(user.getEmail());
				user.setUserId(id);		
			}
			return isExistingUser;
		} catch (Exception e) {
			log.error("Exception occcured ");
			throw e;
		}
	}

	public void loginUser(LoginUser login) throws Exception {
		log.info("UserService.loginUser(login) method");
		try {
			Boolean isValidLogin = userValidators.isValidLogin(login);
			if (isValidLogin) {
				userDao.loginUser(login);
			}
		} catch (Exception e) {
			log.error("Exception Occured ");
			throw e;
		}
	}
}
