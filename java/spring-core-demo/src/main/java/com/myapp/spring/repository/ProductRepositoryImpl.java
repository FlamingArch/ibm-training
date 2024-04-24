package com.myapp.spring.repository;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.myapp.spring.model.Product;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

	@Autowired
	private Map<Integer, Product> products;
	
	@Override
	public List<Product> findAll() {
		// TODO Auto-generated method stub
		return products.values().stream().toList();
	}

	@Override
	public Product add(Product product) {
		// TODO Auto-generated method stub
		return products.put(product.productId(), product);
	}

	@Override
	public Product findByKey(String key) {
		// TODO Auto-generated method stub
		return products.getOrDefault(key, new Product(0, "", 0.0));
	}

}
