package com.myapp.core;

public class LoanRequestHandler {
	double balance;

	public LoanRequestHandler(double balance) {
		this.balance = balance;
	}
	
	public boolean approveLoan(LoanValidator loanValidator) {
		return loanValidator.validate(balance);
	}

}
