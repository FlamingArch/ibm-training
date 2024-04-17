package com.myapp.core;

import java.util.Objects;

public class Product implements Comparable<Product> {
	private int productID;
	private String productName;
	private Double price;
	
	public Product() {
		// TODO Auto-generated constructor stub
	}

	public Product(int productID, String productName, double price) {
		this.productID = productID;
		this.productName = productName;
		this.price = price;
	}

	public int getProductID() {
		return productID;
	}

	public void setProductID(int productID) {
		this.productID = productID;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public int hashCode() {
		return Objects.hash(price, productID, productName);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return Double.doubleToLongBits(price) == Double.doubleToLongBits(other.price) && productID == other.productID
				&& Objects.equals(productName, other.productName);
	}
	
	@Override
	public int compareTo(Product other) {
		return price.compareTo(other.price);
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Product [productID=");
		builder.append(productID);
		builder.append(", productName=");
		builder.append(productName);
		builder.append(", price=");
		builder.append(price);
		builder.append("]");
		return builder.toString();
	}
	
	
}
