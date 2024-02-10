package com.hms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class DeletePatient {

	WebDriver driverPatient;

	@Test
	public void delete() {

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

		driverPatient.findElement(By.name("delete")).sendKeys("200");
		driverPatient.findElement(By.name("delete")).click();


	}

	public static void main(String[] args) {

	}
}
