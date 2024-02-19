package net.nra.candb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
public class CandbBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CandbBackendApplication.class, args);
	}

}
