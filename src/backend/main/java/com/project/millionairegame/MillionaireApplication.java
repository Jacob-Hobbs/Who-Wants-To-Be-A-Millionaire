package com.project.millionairegame;

import com.project.millionairegame.repository.QuestionRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MillionaireApplication {

	public static void main(String[] args) {
		SpringApplication.run(MillionaireApplication.class, args);
		QuestionRepository questionRepository = new QuestionRepository();
		questionRepository.getRandomQuestion("100");
		System.out.println("HELLO!");
	}

}
