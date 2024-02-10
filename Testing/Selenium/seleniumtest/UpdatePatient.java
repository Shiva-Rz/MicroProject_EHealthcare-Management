package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class UpdatePatient {

	WebDriver driverPatient;

	@Test
	public void update() {

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

		driverPatient.findElement(By.name("edit")).click();
		System.out.println(driverPatient.getTitle());

		driverPatient.findElement(By.name("userId")).sendKeys("1");

		driverPatient.findElement(By.name("userEmail")).clear();
		driverPatient.findElement(By.name("userEmail")).sendKeys("kumar@gmail.com");

		driverPatient.findElement(By.name("insertbutton")).click();
		System.out.println(driverPatient.getTitle());
	}

	public static void main(String[] args) {

		UpdatePatient obj = new UpdatePatient();
		obj.update();

	}
}
