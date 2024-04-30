package com.myapp.spring.rest.api;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.domain.Product;
import com.myapp.spring.repository.ProductRepository;

@RestController
@RequestMapping("api/products")
public class ProductAPI {
	private ProductRepository repository;

	public ProductAPI(ProductRepository respository) {
		this.repository = respository;
	}
	
	@GetMapping
	public ResponseEntity<List<Product>> findAll() {
		return new ResponseEntity<List<Product>>(repository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/find/{price}")
	public ResponseEntity<List<Product>> findByPrice(@PathVariable("price") double price) {
		return new ResponseEntity<List<Product>>(repository.findByPriceGreaterThanEquals(price).get(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Product> save(@RequestBody Product product) {
		return new ResponseEntity<Product>(repository.save(product), HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Product> update(@PathVariable("id") String id, @RequestBody Product product) {
		Product existingProduct = repository.findById(id).orElseThrow(()->new NoSuchElementException("Product with code " + id + " not found!"));
		product.setId(id);
		BeanUtils.copyProperties(product, existingProduct);
		return new ResponseEntity<Product>(repository.save(product), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") String id) {
		Product existingProduct = repository.findById(id).orElseThrow(()->new NoSuchElementException("Product with code " + id + " not found!"));
		repository.delete(existingProduct);
		
		return new ResponseEntity<String>("Product Deleted", HttpStatus.OK);
	}
}
