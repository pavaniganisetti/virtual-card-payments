package com.alacriti.virtualcardpayments.dao;

import java.time.LocalDateTime;

import javax.servlet.http.Cookie;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CookieDao {

	private static final Logger log = LoggerFactory.getLogger(CookieDao.class);

	LocalDateTime today = LocalDateTime.now();

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public void insertCookie(Cookie cookie, int userId) throws Exception {
		log.info("CookieDao.insertCookie(cookie,userId) method");
		try {
			String queryInsertCookie = "insert into AL364_vc_session_table (user_id,session_id,status,login_time,creation_time) values (?,?,?,?,?) ";
			jdbcTemplate.update(queryInsertCookie, new Object[] { userId, cookie.getValue(), "active", today, today });

		} catch (Exception e) {
			log.error("Exception Occured ");
			throw e;
		}
	}

	public void setSessionExpired(String cookieValue) throws Exception {
		log.info("CookieDao.setSessionExpired(cookieValue) method");
		try {
			String querySetSessionExpired = "update AL364_vc_session_table set status = ? where session_id = ?";
			jdbcTemplate.update(querySetSessionExpired, new Object[] { "expired", cookieValue });
		} catch (Exception e) {
			log.error("Exception Occured ");
			throw e;
		}
	}
	
	
	public int checkForCookie(String cookieValue) throws Exception {
		log.info("CookieDao.checkForCookie(cookieValue) method"); //if Cookie Present returns userId else 0;
		int id = 0;
		try {
			String queryCheckForCookie = "select user_id FROM AL364_vc_session_table where session_id = ?";
			id = jdbcTemplate.queryForObject(queryCheckForCookie, new Object[] { cookieValue }, Integer.class);
			log.info("checkForCookie(cookieValue) :" + (id > 0));
		} 
		catch(EmptyResultDataAccessException e)
		{
			log.error("EmptyResultDataAccessException checkForCookie(cookieValue) "+(id>0));
			return 0; //exception occurs when there is no session 
		}
		catch (Exception e) {
			log.error("Exception Occured ");
			throw e;
		}
		return id;
	}
}
