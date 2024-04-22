package com.myapp.multithreading;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class CallableDemo1 {

	public static void main(String[] args) {
		Callable<Integer> callable = () -> {
			int count = 0;
			for (int i = 0; i < 10; i++) {
				Thread.sleep(500);   
				count += i;
			}
			return count;
		};
		
		ExecutorService executors = Executors.newScheduledThreadPool(10);
		Future<Integer> future = executors.submit(callable);
		
		try {
			Integer value = future.get();
			System.out.println("Value, " + value);
		} catch (InterruptedException | ExecutionException e) {
			e.printStackTrace();
		}
		executors.shutdown();
	}

}
