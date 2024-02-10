package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class InsertDoctor {
	
	WebDriver driverDoctor;
	
	@Test
	public void insert() {
		
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverDoctor = new ChromeDriver();
		driverDoctor.navigate().to("http://localhost:4200/");
		    
		driverDoctor.findElement(By.name("login")).click();
		System.out.println(driverDoctor.getTitle());
		
		driverDoctor.findElement(By.name("email")).sendKeys("rajesh@gmail.com");
		driverDoctor.findElement(By.name("password")).sendKeys("rajesh");
		driverDoctor.findElement(By.name("loginbutton")).click();
		System.out.println(driverDoctor.getTitle());
		
		driverDoctor.findElement(By.name("doctor")).click();
		System.out.println(driverDoctor.getTitle());
		
		driverDoctor.findElement(By.name("insert")).click();
		System.out.println(driverDoctor.getTitle());
		
		driverDoctor.findElement(By.name("userId")).sendKeys("11");
		driverDoctor.findElement(By.name("userType")).sendKeys("Doctor");
		driverDoctor.findElement(By.name("userEmail")).sendKeys("bharath@gmail.com");
		driverDoctor.findElement(By.name("userPassword")).sendKeys("bharath");
		driverDoctor.findElement(By.name("userName")).sendKeys("bharath");
		driverDoctor.findElement(By.name("userMobileNumber")).sendKeys("7778887770");
		
		driverDoctor.findElement(By.name("insertbutton")).click();
		System.out.println(driverDoctor.getTitle());
		
	}

	public static void main(String[] args) {

		InsertDoctor obj = new InsertDoctor();
		obj.insert();

	}
}
