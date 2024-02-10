package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class InsertPatient {
	
	WebDriver driverPatient;
	
	@Test
	public void insert() {
		
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverPatient = new ChromeDriver();
		driverPatient.navigate().to("http://localhost:4200/");
		    
		driverPatient.findElement(By.name("login")).click();
		System.out.println(driverPatient.getTitle());
		
		driverPatient.findElement(By.name("email")).sendKeys("rajesh@gmail.com");
		driverPatient.findElement(By.name("password")).sendKeys("rajesh");
		driverPatient.findElement(By.name("loginbutton")).click();
		System.out.println(driverPatient.getTitle());
		
		driverPatient.findElement(By.name("patient")).click();
		System.out.println(driverPatient.getTitle());
		
		driverPatient.findElement(By.name("insert")).click();
		System.out.println(driverPatient.getTitle());
		
		driverPatient.findElement(By.name("userId")).sendKeys("1");
		driverPatient.findElement(By.name("userType")).sendKeys("Patient");
		driverPatient.findElement(By.name("userEmail")).sendKeys("madhan@gmail.com");
		driverPatient.findElement(By.name("userPassword")).sendKeys("madhan");
		driverPatient.findElement(By.name("userName")).sendKeys("Madhan");
		driverPatient.findElement(By.name("userMobileNumber")).sendKeys("7779997770");
		
		driverPatient.findElement(By.name("insertbutton")).click();
		System.out.println(driverPatient.getTitle());
		
	}

	public static void main(String[] args) {

		InsertPatient obj = new InsertPatient();
		obj.insert();

	}
}
