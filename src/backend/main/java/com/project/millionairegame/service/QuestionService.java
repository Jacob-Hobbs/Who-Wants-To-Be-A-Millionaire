package backend.main.java.com.project.millionairegame.service;

import backend.main.java.com.project.millionairegame.pojo.Question;
import backend.main.java.com.project.millionairegame.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService() {
        this.questionRepository = new QuestionRepository();
    }

    //Implements business logic behind cleansing csv lines and converting to JSON-compatible Question objects
    public Question getNewQuestion(String amount) throws IOException {
        String csvLine = "";
        Question newQuestion = null;
        try {
            //Retrieve csv line from QuestionRepository and convert it to String type
            csvLine = questionRepository.getRandomQuestion(amount).toString();
            //Split csvLine based on commas using custom RegEx
            String[] parts = csvLine.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
            //For each index of parts[], remove whitespace, remove outer quotes, and remove double quotes
            for (int i = 0; i < parts.length; i++) {
                parts[i] = parts[i].trim();
                parts[i] = removeOuterQuotes(parts[i]);
                parts[i] = removeDoubleQuotes(parts[i]);
            }
            //Parts of cleansed csvLine are mapped to a Question object from parts[] array
            newQuestion = new Question(parts[0], parts[1], parts[2], parts[3], parts[4]);
        } catch (IOException ioException) {
            System.out.println(ioException.getMessage());
        }
        return newQuestion;
    }

    //Method to remove outer quotes from csv line (ex: "Hello" -> Hello)
    private static String removeOuterQuotes(String string) {
        //If parameterized string begins and starts with quotation marks...
        if ((string.startsWith("\"")) && (string.endsWith("\""))) {
            return string.substring(1, string.length() -1);
        }
        return string;
    }

    //Method to remove double quotes from csv line (ex: ""Hello"" -> "Hello")
    private static String removeDoubleQuotes(String string) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < string.length(); i++) {
            String currentChar = String.valueOf(string.charAt(i));
            //If parameterized string contains a subsequence consisting of double quotes...
            if (currentChar.equals("\"") && String.valueOf(string.charAt(i + 1)).equals("\"")) {
                i++;
            }
            stringBuilder.append(currentChar);
        }
        return String.valueOf(stringBuilder);
    }
}