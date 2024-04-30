package com.myapp.spring.repository;

import java.util.List;
import java.util.Map;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

import com.myapp.spring.model.Product;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

@Repository
@Scope("singleton")
public class ProductRepositoryImpl implements ProductRepository, BeanNameAware, BeanPostProcessor, ApplicationContextAware {

	@Autowired
	private Map<Integer, Product> products;
	
	@Override
	public List<Product> findAll() {
		return products.values().stream().toList();
	}

	@Override
	public Product add(Product product) {
		return products.put(product.getProductId(), product);
	}

	@Override
	public Product findByKey(String key) {
		return products.getOrDefault(key, new Product(0, "", 0.0));
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		System.out.println("Inside setBeanName");
	}

	@Override
	public void setBeanName(String name) {
		System.out.println("Inside setBeanName");
	}

	@PostConstruct
	public void init() {
		System.out.println("Inside Init Method");
	}
	
	@PreDestroy
	public void destroy() {
		System.out.println("Inside Destroy Method");
	}
	
	@Override
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("Inside Bean Post Process Before");
		return BeanPostProcessor.super.postProcessBeforeInitialization(bean, beanName);
	}
	
	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("Inside Bean Post Process After");
		return BeanPostProcessor.super.postProcessAfterInitialization(bean, beanName);
	}
}
