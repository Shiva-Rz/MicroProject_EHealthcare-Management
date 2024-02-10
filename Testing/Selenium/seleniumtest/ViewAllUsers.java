package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class ViewAllUsers {
	
	WebDriver driverUser;

	@Test
	public void viewall() {

		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverUser = new ChromeDriver();
		driverUser.navigate().to("http://localhost:4200/");

		driverUser.findElement(By.name("login")).click();
		System.out.println(driverUser.getTitle());

		driverUser.findElement(By.name("email")).sendKeys("rajesh@gmail.com");
		driverUser.findElement(By.name("password")).sendKeys("rajesh");
		driverUser.findElement(By.name("loginbutton")).click();
		System.out.println(driverUser.getTitle());

		driverUser.findElement(By.name("alluser")).click();
//		System.out.println(driverUser.getTitle());

	}

	public static void main(String[] args) {

		ViewAllUsers obj = new ViewAllUsers();
		obj.viewall();

	}
}
