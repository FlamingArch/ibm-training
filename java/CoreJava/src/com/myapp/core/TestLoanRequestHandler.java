package com.myapp.core;

public class TestLoanRequestHandler {

	public static void main(String[] args) {
		double balance = 2500.0;
		
		LoanRequestHandler loanRequestHandler = new LoanRequestHandler(balance);
		
		boolean result_business = loanRequestHandler.approveLoan(new BusinessLoanValidator(balance));
		boolean result_personal = loanRequestHandler.approveLoan(new PersonalLoanValidator(balance));

		if (result_business) {
			System.out.println("Business Loan: Loan Approved");
		} else {
			System.out.println("Business Loan: Loan Rejected, Gareeb Detected.");
		}

		System.out.println(result_personal ? "Personal Loan: Loan Approved"
				: "Personal Loan: Loan Rejected, Bhot Zyada Gareeb Detected.");
	}

}
