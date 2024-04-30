package com.myapp.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.myapp.spring.aop.LoginManagerBean;
import com.myapp.spring.config.AppConfig;
import com.myapp.spring.model.Product;
import com.myapp.spring.repository.ProductRepository;

//@SpringBootApplication
public class SpringAopDemo2Application {

	public static void main(String[] args) {
//		SpringApplication.run(SpringAopDemo2Application.class, args);
		
		AbstractApplicationContext ioContainer = new AnnotationConfigApplicationContext(AppConfig.class);
		ProductRepository repository = ioContainer.getBean(ProductRepository.class);
		ProductRepository repository1 = ioContainer.getBean(ProductRepository.class);
		System.out.println(repository == repository1);
		
		LoginManagerBean loginManagerBean = ioContainer.getBean(LoginManagerBean.class);
		loginManagerBean.login("admin", "admin");
		
		repository.add(new Product(6, "Vivo17", 35456.5));	
		repository.findAll().forEach(System.out::println);
		
		ioContainer.close();
	}
}
