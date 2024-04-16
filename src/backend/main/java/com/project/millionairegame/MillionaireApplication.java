package backend.main.java.com.project.millionairegame;

import com.project.millionairegame.repository.QuestionRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class MillionaireApplication {

	public static void main(String[] args) {
		SpringApplication.run(MillionaireApplication.class, args);
		QuestionRepository questionRepository = new QuestionRepository();
		try {
			StringBuilder value = questionRepository.getRandomQuestion("1000000");
			System.out.println(value);
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}

}
