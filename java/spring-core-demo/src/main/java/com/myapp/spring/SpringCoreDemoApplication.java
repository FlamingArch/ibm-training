package com.myapp.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.myapp.spring.config.AppConfig;
import com.myapp.spring.repository.ProductRepository;

public class SpringCoreDemoApplication {

	public static void main(String[] args) {
		ApplicationContext ioContainer = new AnnotationConfigApplicationContext(AppConfig.class);
		ProductRepository repository = ioContainer.getBean(ProductRepository.class);
		repository.findAll().forEach(System.out::println);
	}

}
