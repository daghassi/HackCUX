<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $question1 = $_POST["question1"];

    $data = "Question 1: $question1\n";

    file_put_contents("form_data.txt", $data, FILE_APPEND | LOCK_EX);
}
?>