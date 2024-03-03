document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();


    var question1 = document.querySelector('input[name="question1"]:checked').value;
    var question2 = document.querySelector('input[name="question2"]:checked').value;
    var question3 = document.querySelector('input[name="question3"]:checked').value;
    var question4 = document.querySelector('input[name="question4"]:checked').value;

    var data = "Question 1: " + question1 + "\n" +
        "Question 2: " + question2 + "\n" +
        "Question 3: " + question3 + "\n" +
        "Question 4: " + question4 + "\n";

    var blob = new Blob([data], { type: 'text/plain' });

    var downloadLink = document.createElement("a");

    downloadLink.download = "form_data.txt";

    downloadLink.href = URL.createObjectURL(blob);

    downloadLink.click();
});