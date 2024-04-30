package com.myapp.spring.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariDataSource;

import jakarta.persistence.EntityManagerFactory;

@Configuration
@ComponentScan(basePackages="com.myapp.spring")
@EnableTransactionManagement
public class AppConfig {
	//Create a Database Connection Pool
	@Bean // It is a spring bean added in a container.
	DataSource dataSounce() {
		// DataSource is a specification given by oracle (like HikariDataSource, Database Connection Pool (DBPC) by Apache)
		HikariDataSource dataSource = new HikariDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");	// Driver class connecting java to database and vice versa.
		
		dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/cloudfsd");	// Type 4 Driver (Pure Java Driver) Connection Protocol
		dataSource.setUsername("root");
		dataSource.setPassword("pass");
		
		dataSource.setAutoCommit(false);	// Every operation should go through a transaction.
		dataSource.setMaximumPoolSize(10);  // Max 10 connections in the pool
		return dataSource;
	}
	
	LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
		LocalContainerEntityManagerFactoryBean emf = new LocalContainerEntityManagerFactoryBean();
		emf.setDataSource(dataSource);
		emf.setPackagesToScan("com.myapp.spring.domain");
		emf.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
		return emf;
	}
	
	Properties jpaProperties() {
		Properties props = new Properties();
		props.put("hibernate.hbm2ddl.auto", "update");	// Hibernate Mapping to Data Definition Language, Update will give two options, create and alter the table
		props.put("hibernate.show_sql", "true");
		return props;
	}
	
	@Bean
	PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
		return new JpaTransactionManager(emf);
	}
	
}
