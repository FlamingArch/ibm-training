package com.myapp.core.nio;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

public class ReadingFiles {

	public static void main(String[] args) {
		// TODO Auto-generated constructor stub
		
		Path path = Path.of("data/file1-ISO.txt");
		boolean exists = Files.exists(path);
		System.out.println("File exists " + exists);
		
//		BufferedReader reader = null;
//		try {
//			try reader = Files.newBufferedReader(path);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} finally {
//			reader.close();
//		}
		
		try (BufferedReader reader = Files.newBufferedReader(path, StandardCharsets.ISO_8859_1)) {
			String line = reader.readLine();
			while(line!= null) {
				System.out.println("Line=" + line);
				line = reader.readLine();
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
