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
//@Scope("prototype")
@Scope("singleton")
public class ProductRepositoryImpl implements ProductRepository,  BeanNameAware, BeanPostProcessor, ApplicationContextAware{
	
	//@Autowired	//very important //we r telling spring container to inject this dependency because i depend on Map
	private Map<Integer, Product> products;	//map is not initialized yet so we get a null pointer exception
	//autowiring by type
	
	public ProductRepositoryImpl(Map<Integer, Product> products) {	//adding this part and commenting @autowired when we made 2 map in AppConfig.java
		this.products = products;
	}//autowiring by constructor
	
	
	@Override
	public List<Product> findAll() {
		// TODO Auto-generated method stub
		return products.values().stream().toList();
	}
	
	@Override
	public Product add(Product product) {
		// TODO Auto-generated method stub
		return products.put(product.getProductId(), product);
	}
	@Override
	public Product findByKey(String key) {
		// TODO Auto-generated method stub
		return products.getOrDefault(key, new Product(0,"",0.0));
	}
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println("Inside Application Context");
		
	}
	@Override
	public void setBeanName(String name) {
		// TODO Auto-generated method stub
		System.out.println("Inside setBeanName");		
	}
	
	@PostConstruct
	public void init() {
		System.out.println("Inside the init method");
	}
	
	@PreDestroy
	public void destroy() {
		System.out.println("Inside destroy method");
	}
	
	@Override
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println("Inside Bean Post Process Before");
		return BeanPostProcessor.super.postProcessBeforeInitialization(bean, beanName);
	}
	
	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println("Inside Bean Post Process After");
		return BeanPostProcessor.super.postProcessAfterInitialization(bean, beanName);
	}
	
}