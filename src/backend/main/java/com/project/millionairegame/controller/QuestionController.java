package backend.main.java.com.project.millionairegame.controller;

import backend.main.java.com.project.millionairegame.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController("question")
public class QuestionController {

    private QuestionService questionService;

    // REST endpoint to retrieve new question
    @GetMapping("/new")
    public void getNewQuestion(String amount) throws IOException {
        String newQuestion = questionService.getNewQuestion(amount);

    }
}
