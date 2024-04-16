package backend.main.java.com.project.millionairegame;

import backend.main.java.com.project.millionairegame.pojo.Question;
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

			Question newQuestion = questionService.getNewQuestion("125000");
			System.out.println(newQuestion);

		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}

}
