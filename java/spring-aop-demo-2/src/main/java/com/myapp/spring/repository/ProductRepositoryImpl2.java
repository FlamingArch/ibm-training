package com.myapp.spring.repository;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;
import com.myapp.spring.model.Product;
@Repository
@Scope("prototype")
public class ProductRepositoryImpl2 implements ProductRepository {
	
	@Autowired	//very important //we r telling spring container to inject this dependency because i depend on Map
	private Map<Integer, Product> products;	//map is not initialized yet so we get a null pointer exception
	
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
}