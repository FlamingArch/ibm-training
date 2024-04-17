package com.myapp.core;

public class JavaDemo1 {
	static void display(Shape shape) {
		System.out.println("Area of shape " + shape.getClass().getSimpleName() + ": " + shape.calculateArea());
	}

	public static void main(String[] args) {
		System.out.println("Welcome to the world of Java!");
		display(new Rectangle(23.4, 234.5));
		display(new Triangle(23.4, 234.5));
		
		// display("");	// Invalid argument: Type Mismatch
		// display(new Shape(34,23)) // Can't create an instance of an abstract class
	}

}
