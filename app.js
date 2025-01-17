document.addEventListener('DOMContentLoaded', () => {

    // fetch('question.json')
    // .then(response => response.json())
    // .then(data => {
    //     flashcard = data.data;
    //     displayCard();
    // })
    // .catch(error => console.error(error));

    fetchQuestions();
    async function fetchQuestions() {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzejQV3xH2bZzB6qp21I9EWWee3lhDJLl4CIM0E2-3bBx8O87kDYwMans90mLTEC8fWjQ/exec');
            const data = await response.json();
            flashcard = data.data;
            displayCard();
        } catch (error) {
            console.error(error);
        }
    }
    
    let currentCard = 0;

    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');

    function displayCard() {
        let card = flashcard[currentCard];
        questionElement.textContent = card.question;
        answerElement.textContent = card.answer;
        flashcardElement.classList.remove('is-flipped');
    }

    
    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });

    document.getElementById('next').addEventListener('click', () => {
        currentCard = (currentCard + 1) % flashcard.length;
        displayCard();
    });

    document.getElementById('previous').addEventListener('click', () => {
        currentCard = (currentCard - 1 + flashcard.length) % flashcard.length;
        displayCard();
    });
    document.getElementById('flashcard').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    })

    displayCard();
})

