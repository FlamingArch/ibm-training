package com.myapp.core.nio;

import java.util.List;

public record FlightSearch() {
	public List<Flight> search(String sourceCity, String destinationCity) {
		return null;
	}
	
	public static void main(String[] args) {
		FlightSearch flightSearch = new FlightSearch();
		flightSearch.search("Bengaluru", "Mumbai");
	}
}
