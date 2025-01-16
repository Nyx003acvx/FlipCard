document.addEventListener('DOMContentLoaded', () => {
    const flashcard = [
        {
            question: 'What is the capital of Bangladesh?',
            answer: 'Dhaka'
        },
        {
            question: 'What is the capital of Japan?',
            answer: 'Tokyo'
        },
        {
            question: 'What is the capital of India?',
            answer: 'Delhi'
        },
        {
            question: 'What is the capital of Pakistan?',
            answer: 'Islamabad'
        },
        {
            question: 'What is Farhan?',
            answer: 'Pervert'
        }
    ];
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

    // document.getElementById('prev').addEventListener('click', () => {
    //     currentCard = (currentCard - 1 + flashcard.length) % flashcard.length;
    //     displayCard();
    // });
    document.getElementById('flashcard').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    })

    displayCard();
})


