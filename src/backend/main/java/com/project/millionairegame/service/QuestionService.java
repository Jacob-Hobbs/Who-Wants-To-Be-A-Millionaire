package backend.main.java.com.project.millionairegame.service;

import backend.main.java.com.project.millionairegame.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService() {
        this.questionRepository = new QuestionRepository();
    }

    // TODO: Implement such that this service method returns a Json Object when called.
    public String getNewQuestion(String amount) throws IOException {
        String csvLine = "";
        try {
            csvLine = questionRepository.getRandomQuestion(amount).toString();
            System.out.println("csvLine:" + csvLine);


        } catch (IOException ioException) {
            System.out.println(ioException.getMessage());
        }


        return csvLine;
    }
}