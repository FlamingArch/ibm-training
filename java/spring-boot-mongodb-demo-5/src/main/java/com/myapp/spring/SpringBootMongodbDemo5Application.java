package com.myapp.spring;

import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.myapp.spring.domain.Product;
import com.myapp.spring.domain.ProductRepository;

@SpringBootApplication
public class SpringBootMongodbDemo5Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootMongodbDemo5Application.class, args);
	}
	
	@Bean
	CommandLineRunner runner(ProductRepository repository) {
		return args -> {
			String productId = "66165e905012a4215c28aa69";
			Product product1 = repository.findById(productId).get();
			System.out.println("\nProduct for ProductID: " + productId + " is \n" + product1);
			
			Product newProduct = new Product(69, "Sample", 69696.9, "https;//example.com", "Sample Product To Be Deleted", LocalDate.now(), 5.0);
			repository.save(newProduct);
			
//			Product product2 = repository.findBy("productId", 69);
//			
//			repository.delete(product2);
			
			System.out.println("\nAll the products in the collection: ");
			repository.findAll().forEach(System.out::println);
		};
	};

}
