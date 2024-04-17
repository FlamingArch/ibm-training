package com.myapp.core;

public class Triangle extends Shape {

	public Triangle(double base, double height) {
		super(base, height);
	}

	@Override
	public double calculateArea() {
		return .5 * getWidth() * getHeight();
	}

}
