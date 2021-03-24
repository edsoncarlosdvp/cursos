package com.eventapp.eventapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.eventapp.repository")
@SpringBootApplication
@ComponentScan({"com.eventapp.controllers"})
public class EventappApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventappApplication.class, args);
	}

}
