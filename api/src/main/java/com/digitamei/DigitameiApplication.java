package com.digitamei;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DigitameiApplication {

    public static void main(String[] args) {
        SpringApplication.run(DigitameiApplication.class, args);
    }
}
