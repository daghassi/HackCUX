<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $time = $_POST["question1"];
    $activity = $_POST["question2"];
    $budget = $_POST["question3"];
    $distance = $_POST["question4"];

    
    $data = "Time: $time\nActivity: $activity\nBudget: $budget\nDistance: $distance\n\n";

    
    $file = "form_entries.txt";
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);


    $contents = file_get_contents($file);
    echo nl2br($contents);
}
?>