package com.myapp.spring;

import java.time.LocalDate;
// import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.myapp.spring.config.AppConfig;
import com.myapp.spring.domain.Product;
import com.myapp.spring.repository.ProductRepository;

@SpringBootApplication
public class SpringHibernateDemo3Application {

	public static void main(String[] args) {
		// SpringApplication.run(SpringHibernateDemo3Application.class, args);
		AbstractApplicationContext ioc = new AnnotationConfigApplicationContext(AppConfig.class);
		
		ProductRepository productRepository = ioc.getBean(ProductRepository.class);
		productRepository.save(new Product("iPhone 15", 756456.5, "http://apple.com", "iPhone 15 Pro", LocalDate.now(), 4.5));
		// productRepositoty.findAll().stream().
		
		ioc.close();
	}

}
