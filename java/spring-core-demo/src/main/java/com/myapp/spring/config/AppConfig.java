package com.myapp.spring.config;

import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.myapp.spring.model.Product;

@Configuration
@ComponentScan(basePackages="com.myapp.spring")
public class AppConfig {
	@Bean
	Map<Integer, Product> map() {
		return Map.of(1, new Product(1, "iPhone15", 75456.5), 2, new Product(1, "OnePlus12R", 65456.5),3, new Product(1, "SamsungFlip", 105456.5));
	}
}
