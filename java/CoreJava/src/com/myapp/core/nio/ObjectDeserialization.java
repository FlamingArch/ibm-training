package com.myapp.core.nio;

import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class ObjectDeserialization {
	public static void main(String[] args) {
		try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("tmp.obj"))) {
			Product products[] = (Product[]) ois.readObject();
			for (Product product: products) System.out.println(products);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
