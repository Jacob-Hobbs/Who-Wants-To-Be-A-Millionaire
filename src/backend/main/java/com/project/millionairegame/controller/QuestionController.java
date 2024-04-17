package backend.main.java.com.project.millionairegame.controller;

import backend.main.java.com.project.millionairegame.pojo.Question;
import backend.main.java.com.project.millionairegame.service.QuestionService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    // REST endpoint to retrieve new random question based on amount passed in URL
    @GetMapping("/getQuestion/{amount}")
    @ResponseBody
    public ResponseEntity<Object> getNewQuestion(@PathVariable(name ="amount") int amount) {
        try {
            Question newQuestion = questionService.getNewQuestion(String.valueOf(amount));
            if (newQuestion != null) {
                // return success ResponseEntity and random Question object
                return ResponseEntity.ok(newQuestion);
            } else {
                // return failed ResponseEntity
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            // return failed ResponseEntity
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error has occurred");
        }
    }
}
