package com.myapp.core;

public class MarkerImpl implements Marker{
	
	public void checkInterface() {
		if (Marker.class.isInstance(this)) { 
			System.out.println("It implements Marker");
		} else System.out.println("It doesn't implement Marker");
	}

	public static void main(String[] args) {
		MarkerImpl marker = new MarkerImpl();
		marker.checkInterface();
	}

}
