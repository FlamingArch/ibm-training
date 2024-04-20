package com.myapp.core.nio;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

public class ObjectSerialization {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Product products[] = {new Product(1, "iPhone 15", 75456.5), new Product(2,"OnePlus 11R", 55456.5)};
		try(ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("tmp.obj"))) {
			oos.writeObject(products);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
