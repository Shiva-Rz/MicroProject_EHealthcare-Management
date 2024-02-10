package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class UpdateDoctor {
	
	WebDriver driverDoctor;
	
	@Test
	public void update() {
		
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
		
		driverDoctor.findElement(By.name("edit")).click();
		System.out.println(driverDoctor.getTitle());
		
		driverDoctor.findElement(By.name("userId")).sendKeys("2");

		driverDoctor.findElement(By.name("userMobileNumber")).clear();
		driverDoctor.findElement(By.name("userMobileNumber")).sendKeys("9918887770");
		
		
		driverDoctor.findElement(By.name("insertbutton")).click();
		System.out.println(driverDoctor.getTitle());
		
	}

	public static void main(String[] args) {

		UpdateDoctor obj = new UpdateDoctor();
		obj.update();

	}
}
