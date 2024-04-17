package com.myapp.core;

public class BusinessLoanValidator implements LoanValidator {
	double balance;

	public BusinessLoanValidator(double balance) {
		this.balance = balance;
	}

	@Override
	public boolean validate(double amount) {
		if (balance > 10000.0) {
			return true;
		}
		return false;
	}

}
