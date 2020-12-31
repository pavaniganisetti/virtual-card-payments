package com.alacriti.virtualcardpayments.utils;

import java.util.Random;

public class CreateRandomNumber {

	public static Long getNumber() {
		int START = 1000000000;
		long END = 9999999999L;

		Random random = new Random();

		if (START > END) {
			throw new IllegalArgumentException("Start cannot exceed End.");
		}
		// get the range, casting to long to avoid overflow problems
		long range = END - (long) START + 1;

		// compute a fraction of the range, 0 <= frac < range
		long fraction = (long) (range * random.nextDouble());

		long randomNumber = fraction + (long) START;

		return randomNumber;

	}
}
