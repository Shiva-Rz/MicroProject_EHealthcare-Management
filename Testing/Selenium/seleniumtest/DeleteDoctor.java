package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class DeleteDoctor {

	WebDriver driverDoctor;

	@Test
	public void delete() {

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

		driverDoctor.findElement(By.name("delete")).sendKeys("11");
		driverDoctor.findElement(By.name("delete")).click();
		
//		driverDoctor.findElement(By.name("userId")).sendKeys("11");
		

	}

	public static void main(String[] args) {

	}
}
