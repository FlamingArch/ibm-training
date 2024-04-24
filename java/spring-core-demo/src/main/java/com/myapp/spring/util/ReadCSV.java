package com.myapp.spring.util;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

import org.springframework.core.io.ClassPathResource;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

public class ReadCSV {
	public <T> List<T> convertToList(Class<T> type, String fileName){
		CsvSchema bootStrapSchema = CsvSchema.emptySchema().withHeader();
		CsvMapper csvMapper = new CsvMapper();
		
		try {
			File file = new ClassPathResource(fileName).getFile();
			MappingIterator<T> iterator = csvMapper.reader(type).with(bootStrapSchema).readValues(file);
			return iterator.readAll();
		} catch (IOException e) {
			e.printStackTrace();
			return Collections.emptyList();
		}
	}
}
