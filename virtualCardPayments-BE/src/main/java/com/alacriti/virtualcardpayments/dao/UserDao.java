package com.alacriti.virtualcardpayments.dao;

import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.alacriti.virtualcardpayments.model.LoginUser;
import com.alacriti.virtualcardpayments.model.User;

@Repository
public class UserDao {

	private static final Logger log = LoggerFactory.getLogger(UserDao.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	LocalDateTime today = LocalDateTime.now();

	public void addUser(User user) throws Exception {

		log.info("UserDao.addUser(user) method");
		try {
			String queryToAddUser = "insert into AL364_vc_user_details values(?,?,?,?,?,?,?,?)";
			jdbcTemplate.update(queryToAddUser, user.getUserId(), user.getFirstName(), user.getLastName(),
					user.getPhoneNumber(), user.getEmail(), user.getPassword(), today, today);
		} catch (Exception e) {
			log.error("Exception Occurred ");
			throw e;
		}
	}

	public int updateUserId(String email) {
		log.info("UserDao.updateUserId(email) method");
		try {
			String queryUpdateUserId = "select user_id from AL364_vc_user_details where email=?";
			int id = jdbcTemplate.queryForObject(queryUpdateUserId, new Object[] { email }, Integer.class);
			return id;
		} catch (Exception e) {
			log.error("Exception occured ");
		}
		return 0;
	}

	public void loginUser(LoginUser login) throws Exception {
		log.info("UserDao.loginUser(login) method");
		try {
			String queryForLogin = "select user_id from AL364_vc_user_details where email=? and password=?";
			int id = jdbcTemplate.queryForObject(queryForLogin, new Object[] { login.getEmail(), login.getPassword() },
					Integer.class);
			if (id > 0 && id != 0) {
				login.setUserId(id);
			}
		} catch (Exception e) {
			log.error("Exception occured ");
			throw e;
		}
	}
	
	public int getUserId(String cookieValue) throws Exception
	{
		log.info("GetUserId.getUserId(cookieValue) method");
		try
		{
			String queryGetUserId = "select user_id from AL364_vc_session_table where session_id=?";
			int id = jdbcTemplate.queryForObject(queryGetUserId, new Object[] { cookieValue },Integer.class);
			return id;
		}
		catch(Exception e)
		{
			log.error("Exception occured ");
			throw e;
		}
	}

}
