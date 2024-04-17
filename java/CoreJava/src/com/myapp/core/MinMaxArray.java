package com.myapp.core;

import static java.util.Arrays.stream;

public class MinMaxArray<T extends Comparable> implements GenericMinMax<T> {

	private T values[];

	public MinMaxArray(T ... values) {
		this.values = values;
	}

	@Override
	public T min() {
		T min = values[0];
		
		for (T value : values) {
			if (value.compareTo(min) < 0) min = value;
		}
		return min;
	}

	@Override
	public T max() {
		T max = values[0];
		
		for (T value : values) {
			if (value.compareTo(max) > 0) max = value;
		}
		return max;
	}

	public static void main(String[] args) {
		GenericMinMax<Integer> intArray = new MinMaxArray<>(12,34,56,78,99);
		System.out.println("Min Value: " + intArray.min());
		System.out.println("Min Value: " + intArray.max());

		GenericMinMax<Double> doubleArray = new MinMaxArray<>(1.2,3.4,56.5,78.6,9.59);
		System.out.println("Min Value: " + doubleArray.min());
		System.out.println("Min Value: " + doubleArray.max());
	}
}
