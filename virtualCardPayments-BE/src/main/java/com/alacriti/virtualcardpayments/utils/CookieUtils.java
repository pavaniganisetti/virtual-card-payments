package com.alacriti.virtualcardpayments.utils;

import javax.servlet.http.Cookie;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CookieUtils {

	private static final Logger log = LoggerFactory.getLogger(CookieUtils.class);

	public static Cookie generateCookie() {
		log.info("CookieUtils.generateCookieValue() method");
		String cookieValue = "";
		final String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "abcdefghijklmnopqrstuvxyz";
		StringBuilder sb = new StringBuilder(8);

		for (int i = 0; i < 8; i++) {
			int index = (int) (AlphaNumericString.length() * Math.random());
			sb.append(AlphaNumericString.charAt(index));
		}
		cookieValue = sb.toString();
		Cookie cookie = new Cookie(Constants.COOKIE_KEY, cookieValue);
		return cookie;
	}

	public static String getCookieValue(Cookie[] cookieArray) {
		log.info("CookieUtils.getCookieValue() method");
		if (cookieArray != null) {
			for (Cookie cookie : cookieArray) {
				if (cookie.getName().equals(Constants.COOKIE_KEY) && cookie.getValue() != null) {
					return cookie.getValue();
				}
			}
		}
		return null;
	}
}
