package backend.main.java.com.project.millionairegame.service;

import backend.main.java.com.project.millionairegame.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class QuestionService {

    private QuestionRepository questionRepository;

    public QuestionService() {

    }

    // TODO: Implement such that this service method returns a JsonObject when called.
    public String getNewQuestion(String amount) throws IOException {
        try {
            StringBuilder sb1 = questionRepository.getRandomQuestion(amount);





        } catch (IOException ioException) {
            System.out.println(ioException.getMessage());
        }


        return "New Question";
    }
}
