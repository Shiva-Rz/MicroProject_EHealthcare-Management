package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class LoginSeleniumTest {
		
	WebDriver driverLogin;
	
	@Test
	public void login() {
		
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverLogin = new ChromeDriver();
		driverLogin.navigate().to("http://localhost:4200/");
		
		driverLogin.findElement(By.name("login")).click();
		System.out.println(driverLogin.getTitle());
		
		driverLogin.findElement(By.name("email")).sendKeys("shiva@gmail.com");
		driverLogin.findElement(By.name("password")).sendKeys("shiva");
		driverLogin.findElement(By.name("loginbutton")).click();
		System.out.println(driverLogin.getTitle());
		
	}

	public static void main(String[] args) {

		LoginSeleniumTest obj = new LoginSeleniumTest();
		obj.login();

	}

}
