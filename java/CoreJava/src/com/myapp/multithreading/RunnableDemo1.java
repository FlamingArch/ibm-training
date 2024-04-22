package com.myapp.multithreading;

public class RunnableDemo1 {

	public static void main(String[] args) {
		// Anonymous Inner Class
		// Runnable runnable = new Runnable() {
		// @Override
		// public void run() { }
		// }

		// Lambda Functions
		Runnable runnable = () -> {
			for (int i = 0; i < 10; i++) {
				System.out.println("Current Thread: " + Thread.currentThread().getName() + " Iteration: " + i);
				try {
					Thread.sleep(500);
				} catch (InterruptedException e) {
					e.printStackTrace();
					Thread.currentThread().interrupt();
					break;
				}
			}
		};
		
		Thread worker1 = new Thread(runnable, "Worker 1");
		Thread worker2 = new Thread(runnable, "Worker 2");
		
		worker1.start();
		worker2.start();
		
		worker1.run();
		worker2.run();
		
		try {
			worker1.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
