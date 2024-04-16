package backend.main.java.com.project.millionairegame.repository;

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

    // Repository method to retrieve a random question from specified csv file
    public StringBuilder getRandomQuestion(String amount) throws IOException {
        // Initialize new StringBuilder object to store question line in.
        StringBuilder sb1 = new StringBuilder();
        // Produce random int to represent random question line
        Random random = new Random();
        int chosenLine = random.nextInt(3, 28);

        // Try-Catch block to handle IOException for retrieving random question from chosen csv
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(
                "src/backend/main/resources/static/" + amount + ".csv"))) {

            // Try-Catch block to handle IOException for getting total number of lines in chosen csv
            int lines = 0;
            try {
                BufferedReader lineReader = new BufferedReader(new FileReader(
                        "src/backend/main/resources/static/" + amount + ".csv"));
                while (lineReader.readLine() != null) {
                    lines++;
                }
                lineReader.close();
            } catch (IOException ioException){
                System.out.println(ioException.getMessage());
            }

            bufferedReader.readLine();
            for (int i = 3; i < lines + 1; i++) {
                bufferedReader.readLine();
                if (i == chosenLine) {
                    sb1.append(bufferedReader.readLine());
                }
            }
        } catch (IOException ioException) {
            System.out.println(ioException.getMessage());
        }
        // return StringBuilder object (random question)
        return sb1;
    }
}
