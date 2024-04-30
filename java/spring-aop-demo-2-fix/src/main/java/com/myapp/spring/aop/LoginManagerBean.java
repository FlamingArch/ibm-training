package com.myapp.spring.aop;

import org.springframework.stereotype.Component;

@Component
public class LoginManagerBean {
	private static ThreadLocal<LoginBean> threadLocal = new ThreadLocal<>();

	public void login(String username, String password) {
		LoginBean loginBean = threadLocal.get();

		if (loginBean == null) {
			threadLocal.set(new LoginBean(username, password));
		}
	}

	public void logout() {
		LoginBean loginBean = threadLocal.get();

		if (loginBean != null) {
			threadLocal.remove();
		}
	}
	
	public LoginBean getLoggedInUser() {
		return threadLocal.get();
	}
}
