package com.project.millionairegame.service;

import com.project.millionairegame.repository.QuestionRepository;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    public QuestionService(QuestionRepository questionRepository) {

    }

    public String getNewQuestion(String amount) {
        return "New Question";
    }
}
