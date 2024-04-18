package com.myapp.core;

public class MarkerImpl implements Marker{
	
	public void checkInterface() throws InterfaceNotFoundException {
		if (Marker.class.isInstance(this)) { 
			System.out.println("It implements Marker");
		} else throw new InterfaceNotFoundException("It doesn't implement Marker");
	}

	public static void main(String[] args) {
		MarkerImpl marker = new MarkerImpl();
		try {
			marker.checkInterface();
		} catch (InterfaceNotFoundException e){
			e.printStackTrace();
		} finally {
			System.out.println("Inside Finally");
		}
	}

}
