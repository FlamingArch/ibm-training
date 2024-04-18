package com.myapp.core;

public class ArrayDemo2 {

	public static void main(String[] args) {
		double []leftvals = {100.0d, 25.0d, 225.0d, 11.0d};
		double []rightvals = {50.0d, 92.0d, 17.0d, 3.0d};
		
		char []opcodes = {'d', 'a', 's', 'm'};
		
		double []results = new double[opcodes.length];
		
		for(int i = 0; i < opcodes.length; i++) {
			switch (opcodes[i]) {
			case 'a': {
				results[i] = leftvals[i] + rightvals[i];
				break;
			}
			case 's': {
				results[i] = leftvals[i] - rightvals[i];
				break;
			}
			case 'd': {
				results[i] = rightvals[i]!= 0 ? leftvals[i] / rightvals[i] : 0.0d;
				break;
			}
			case 'm': {
				results[i] = leftvals[i] * rightvals[i];
				break;
			}
			default:
				results[i] = 0.0d;
				break;
			}
		}
	}
}
