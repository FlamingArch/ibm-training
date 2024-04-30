package com.myapp.spring.config;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import com.myapp.spring.model.Product;
import com.opencsv.bean.CsvToBeanBuilder;

@Configuration
@ComponentScan(basePackages = "com.myapp.spring")
@EnableAspectJAutoProxy
public class AppConfig {
	@Bean
	Map<Integer, Product> map() {
		Map<Integer, Product> productMap = new HashMap<>();
		productMap.put(1, new Product(1, "Iphone15", 75456.5));
		productMap.put(2, new Product(2, "Oneplus12R", 65456.5));
		productMap.put(3, new Product(3, "SamsungFlip", 105456.5));
		return productMap;
	}

	@Bean("products1")
	Map<Integer, Product> map1() {
		Map<Integer, Product> productMap = new HashMap<>();
		productMap.put(1, new Product(1, "Iphone15", 75456.5));
		productMap.put(2, new Product(2, "Oneplus12R", 65456.5));
		productMap.put(3, new Product(3, "SamsungFlip", 105456.5));
		return productMap;
	}

	@Bean("products")
	Map<Integer, Product> map2() throws IllegalStateException, FileNotFoundException {
		List<Product> products = new CsvToBeanBuilder(new FileReader("products.csv")).withType(Product.class).build()
				.parse();

		return products.stream().collect(Collectors.toMap(Product::getProductId, item -> item));
	}
}
