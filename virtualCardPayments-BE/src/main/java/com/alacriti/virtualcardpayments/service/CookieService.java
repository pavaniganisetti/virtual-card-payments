package com.alacriti.virtualcardpayments.service;

import javax.servlet.http.Cookie;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.alacriti.virtualcardpayments.dao.CookieDao;
import com.alacriti.virtualcardpayments.utils.CookieUtils;

@Service
public class CookieService {

	private static final Logger log = LoggerFactory.getLogger(CookieService.class);

	@Autowired
	private CookieDao cookieDao;

	public void insertCookie(Cookie cookie, int userId) throws Exception {
		log.info("CookieService.insertCookie(cookie,userId) method");
		try {
			cookieDao.insertCookie(cookie, userId);
		} catch (Exception e) {
			log.debug("Exception occurred");
			throw e;
		}
	}

	public void setSessionExpired(String cookieValue) throws Exception {
		log.info("CookieService.setSessionExpired(cookieValue) method");
		try {
			cookieDao.setSessionExpired(cookieValue);
		} catch (Exception e) {
			log.debug("Exception occured");
			throw e;
		}
	}

	public int validateCookie(Cookie[] cookieArray) throws Exception { //return userId if cookie exists else 0
		log.info("CookieService.validateCookie(cookieArray) method");
		try {
			String cookieValue = CookieUtils.getCookieValue(cookieArray);
			int id = cookieDao.checkForCookie(cookieValue); 
			if (cookieValue != null && id !=0 ) {
				return id;
			} else {
				return 0;
			}
		}
		catch(EmptyResultDataAccessException e)
		{
			return 0;  //this exception occures when there is no cookie and we want to return userid
		}
		catch (Exception e) {
			log.error("Exception occured ");
			throw e;
		}
	}
}
