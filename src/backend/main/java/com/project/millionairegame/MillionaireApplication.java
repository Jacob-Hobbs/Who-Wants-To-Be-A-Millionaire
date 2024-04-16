package backend.main.java.com.project.millionairegame;

import backend.main.java.com.project.millionairegame.repository.QuestionRepository;
import backend.main.java.com.project.millionairegame.service.QuestionService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class MillionaireApplication {

	public static void main(String[] args) {
		SpringApplication.run(MillionaireApplication.class, args);

		QuestionService questionService = new QuestionService();

		try {

			String value = questionService.getNewQuestion("2000");
			System.out.println(value);

		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}

}
