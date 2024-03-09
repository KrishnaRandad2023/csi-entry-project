function addQuestion() {
    const questionsDiv = document.getElementById('questions');
    const questionNumber = questionsDiv.childElementCount + 1;

    const newQuestionDiv = document.createElement('div');
    newQuestionDiv.classList.add('question');

    newQuestionDiv.innerHTML = `
        <label for="question${questionNumber}">Question:</label>
        <input type="text" id="question${questionNumber}" name="question" required>
        <label for="option1">Option 1:</label>
        <input type="text" id="option1" name="options[]" required>
        <label for="option2">Option 2:</label>
        <input type="text" id="option2" name="options[]" required>
        <label for="option3">Option 3:</label>
        <input type="text" id="option3" name="options[]" required>
        <label for="option4">Option 4:</label>
        <input type="text" id="option4" name="options[]" required>
        <label for="correctOption">Correct Option:</label>
        <input type="number" id="correctOption" name="correct_option" min="1" max="4" required>
    `;
    questionsDiv.appendChild(newQuestionDiv);
}

