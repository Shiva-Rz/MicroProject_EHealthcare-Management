package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class RegisterSelenium {
	
	WebDriver driverRegister;
	
	@Test
	public void register() {
		
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverRegister = new ChromeDriver();
		driverRegister.navigate().to("http://localhost:4200/");
		
		driverRegister.findElement(By.name("register")).click();
		System.out.println(driverRegister.getTitle());
		
		
		driverRegister.findElement(By.name("userId")).sendKeys("10");
		driverRegister.findElement(By.name("userType")).sendKeys("Patient");
		driverRegister.findElement(By.name("userEmail")).sendKeys("Bala@gmail.com");
		driverRegister.findElement(By.name("userPassword")).sendKeys("bala");
		driverRegister.findElement(By.name("userName")).sendKeys("Bala");
		driverRegister.findElement(By.name("userMobileNumber")).sendKeys("9998887770");
		
		driverRegister.findElement(By.name("registerbutton")).click();
		System.out.println(driverRegister.getTitle());
		
	}

	public static void main(String[] args) {

		RegisterSelenium obj = new RegisterSelenium();
		obj.register();

	}

}
