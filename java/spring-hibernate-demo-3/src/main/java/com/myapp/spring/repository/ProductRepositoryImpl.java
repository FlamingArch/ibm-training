package com.myapp.spring.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.myapp.spring.domain.Product;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
// import jakarta.persistence.PersistenceUnit;

@Repository
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)	// (AOP) Ensures that every method runs in a transaction
public class ProductRepositoryImpl implements ProductRepository {
	
	//@PersistenceUnit	// Inject dependencies in an EntityManager
	@PersistenceContext
	@Qualifier
	private EntityManager jpa;
	
	@Override
	public List<Product> findAll() {
		return jpa.createQuery("from Product").getResultList();
	}

	@Override
	public Product save(Product product) {
		jpa.persist(product);
		return product;
	}

}
