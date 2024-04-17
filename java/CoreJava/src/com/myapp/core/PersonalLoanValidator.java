package com.myapp.core;

public class PersonalLoanValidator implements LoanValidator {
	double balance;

	public PersonalLoanValidator(double balance) {
		this.balance = balance;
	}

	@Override
	public boolean validate(double amount) {
		if (balance > 5000.0) {
			return true;
		}
		return false;
	}

}
