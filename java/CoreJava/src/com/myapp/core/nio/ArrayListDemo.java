package com.myapp.core.nio;

import java.util.ArrayList;
import java.util.stream.Stream;

public class ArrayListDemo {
	public static void main(String[] args) {
		ArrayList<Product> products = new ArrayList<>();
		
		products.add(new Product(1, "iPhone 15", 75456.5)); 
		products.add(new Product(2, "OnePlus 11R", 55456.5));
		products.add(new Product(2, "Galaxy S24", 95456.5));
		
		System.out.println("Size: " + products.size());
		System.out.println("Remove: " + products.remove(0));
		System.out.println("Get:" + products.get(0));
		
		Stream<Product> stream = products.stream();
		
		stream.filter(product -> product.price() > 50000.0).forEach(System.out::println);
		
		double totalPrice = 0;
		Product localMinima = products.get(0);
		Product localMaxima = products.get(0);
		for (int i = 0; i < products.size(); i++) {
			totalPrice += products.get(i).price();
			if (localMinima.price() < products.get(i).price()) localMinima = products.get(i);
			if (localMaxima.price() > products.get(i).price()) localMinima = products.get(i);
		}
		
		System.out.println("Cheapest: " + localMinima.productName() + " with price of " + localMinima.price());
		System.out.println("Sum of all Prices: " + totalPrice);
		System.out.println("Average of all Prices: " + totalPrice / products.size());
	}
}
