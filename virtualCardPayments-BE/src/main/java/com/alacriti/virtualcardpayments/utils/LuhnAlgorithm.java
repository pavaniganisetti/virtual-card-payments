package com.alacriti.virtualcardpayments.utils;

public class LuhnAlgorithm {

	public static boolean validCardNumber(String cardNo) {
		int sum = 0, s = 0, remainder = 0, quotient = 0;
		for (int i = cardNo.length() - 1; i >= 0; i--) {
			int d = cardNo.charAt(i) - '0';
			if (i % 2 != 0) // index%2 != 0 then it is odd position
			{
				sum = sum + d;
			} else {
				s = d * 2; // index%2 == 0 ie., for even digit multiply and if sum > 9 add those digits
				remainder = s % 10;
				quotient = s / 10;
				s = remainder + quotient;
				sum = sum + s;
			}
		}
		return sum % 10 == 0;
	}
}
