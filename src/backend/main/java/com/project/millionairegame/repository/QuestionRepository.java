package com.project.millionairegame.repository;

import org.springframework.stereotype.Repository;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Random;

/* Question REST API Repository. Retrieves random question based on amount and
passes to service layer for processing.
*/
@Repository
public class QuestionRepository {

    public QuestionRepository() {

    }

    public void getRandomQuestion(String amount) {
        try {
            // Produce random int to represent random question line
            Random random = new Random();
            int chosenLine = random.nextInt(3, 28);


            BufferedReader bufferedReader = new BufferedReader(new FileReader("../repository/100.csv"));
            System.out.println("File open successful!");
            String line = "";
            System.out.println(bufferedReader.readLine());
        } catch (IOException ioException) {
            System.out.println("ERROR!");
        }
    }
}
