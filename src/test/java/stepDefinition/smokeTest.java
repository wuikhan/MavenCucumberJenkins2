package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class smokeTest {
	WebDriver driver;

	@Given("^Open Chrome and start application$")
	public void open_Chrome_and_start_application()  {
//		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver2");
//		 driver = new ChromeDriver();
//		driver.get("");
		System.out.println("Chrome browser is open");
	
	}

	@When("^I enter valid username and password$")
	public void i_enter_valid_username_and_password()  {
		System.out.println("Chrome browser is open");
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws InterruptedException  {

		System.out.println("I am logged in");
		
	}

	@Then("^application should be closed$")
	public void application_should_be_closed() {
		System.out.println("I am logged in");
		}

}
