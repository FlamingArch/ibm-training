package com.myapp.spring.controller.advice;

import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class APIExceptionHandler {
	@ExceptionHandler
	public ErrorResponse notFound(NoSuchElementException ex) {
		return ErrorResponse.create(ex, HttpStatus.NOT_FOUND, ex.getMessage());
	}
}
