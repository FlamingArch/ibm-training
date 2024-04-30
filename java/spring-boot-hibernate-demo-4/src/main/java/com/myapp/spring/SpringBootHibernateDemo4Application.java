package com.myapp.spring;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.myapp.spring.domain.Product;
import com.myapp.spring.repository.ProductRepository;

import jakarta.transaction.Transactional;

@SpringBootApplication
public class SpringBootHibernateDemo4Application /*implements CommandLineRunner*/ {

	// @Autowired
	// private ProductRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootHibernateDemo4Application.class, args);
	}
	
	

	@Bean
	@Transactional
	CommandLineRunner runner(ProductRepository repository) {
		return args -> {
			repository.save(new Product("oneplus13", 55456.5, "http://oneplus.com", "oneplus11R", LocalDate.now(), 4.7));
			repository.findAll().forEach(System.out::println);
			
			Product product = repository.findById(2).get();
			product.setDescription("SamsungGalaxyNote");
			product.setImageUrl("https://samsing.com");
			product.setProductAvailable(LocalDate.of(2023, 05, 03));
			product.setStarRating(4.9);
			product.setPrice(96456.5);
			
			repository.save(product);
			repository.delete(product);
		};
	}


	// @Override
	// public void run(String... args) throws Exception {
	// 	repository.save(new Product("oneplus13", 55456.5, "http://oneplus.com", "oneplus11R", LocalDate.now(), 4.7));
	// 	repository.findAll().forEach(System.out::println);
	// }
}
