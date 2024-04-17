package com.myapp.core;
import static java.util.Arrays.stream;


public class ArrayMinMax {
	
	static int[] minMax(int[] arr) {
		int min = Integer.MIN_VALUE;
		int max = Integer.MIN_VALUE;
		
		min = stream(arr).reduce((n1, n2)-> Integer.min(n1, n2)).getAsInt();
		max = stream(arr).reduce((n1, n2)-> Integer.max(n1, n2)).getAsInt();
		
		return new int[]{min, max};
	}
	
	static double[] minMax(double[] arr) {
		double min = Double.MIN_VALUE;
		double max = Double.MIN_VALUE;
		
		min = stream(arr).reduce((n1, n2)-> Double.min(n1, n2)).getAsDouble();
		max = stream(arr).reduce((n1, n2)-> Double.max(n1, n2)).getAsDouble();
		
		return new double[]{min, max}; 
	}

	public static void main(String[] args) {
		int[] arr = {45, 65, 76};
		double[] arr2 = {78.5, 7.9, 8.0};
		
		int[] intResult = minMax(arr);
		double[] doubleResult = minMax(arr2);
		
		System.out.println("Min Int: " + intResult[0]);
		System.out.println("Max Int: " + intResult[1]);
		System.out.println("Min Double: " + doubleResult[0]);
		System.out.println("Max Double: "+ doubleResult[1]);
	}

}
