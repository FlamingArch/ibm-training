package com.myapp.core.nio;

import java.util.function.Predicate;
import java.util.stream.Stream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * 
 */

//class Product {
//	int id;
//	String name;
//	double price;
//	public Product(int id, String name, double price) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.price = price;
//	}
//}

public class AnalyzeCSVFiles {

	public static void main(String[] args) {
		// TODO Auto-generated constructor stub
		
		Path path = Path.of("data/products.csv");
		boolean exists = Files.exists(path);
		System.out.println("File exists " + exists);
		
//		BufferedReader reader = null;
//		try {
//			try reader = Files.newBufferedReader(path);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} finally {
//			reader.close();
//		}
		
		try (Stream<String> lines = Files.lines(path)) {
			Predicate<String> predicate = line -> !line.startsWith("#");
			
			lines
			.filter(predicate)
//			.forEach(line -> System.out.println(line));
			.flatMap(AnalyzeCSVFiles::lineToProduct)
			.filter(p -> p.price() > 55000)
			.forEach(System.out::println);
			
//			Product[] data = lines
//					.filter(line -> !line.startsWith("#"))
//					.map(line -> line.split(","))
//					.forEach(arr -> new Product(arr[0], arr[1], arr[2]));
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private static Stream<Product> lineToProduct(String line) {
		try {
			String elements[] = line.split("/");
			return Stream
					.of(new Product(Integer.parseInt(elements[0]), elements[1], Double.parseDouble(elements[2])));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Stream.empty();
	}
}
