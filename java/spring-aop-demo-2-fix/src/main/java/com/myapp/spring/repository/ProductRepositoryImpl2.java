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
		return products.getOrDefault(key, new Product(0,"",0.0));
	}

}
