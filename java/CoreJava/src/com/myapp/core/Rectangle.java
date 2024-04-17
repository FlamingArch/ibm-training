package com.myapp.core;

public class Rectangle extends Shape {

	public Rectangle(double width, double height) {
		super(width, height);
	}

	@Override
	public double calculateArea() {
		return getWidth() * getHeight();
	}

}
