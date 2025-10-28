# Question-Answering-System

# Overview

This is a web-based Question Answering System that allows users to input a passage (context) and ask related questions. The system uses a Flask backend integrated with Hugging Face Transformers (BERT model) to extract accurate answers from the given text. It demonstrates how Natural Language Processing (NLP) can be applied to real-time text comprehension.

# Features

- Accepts user input for context and question

- Uses BERT (bert-large-uncased-whole-word-masking-finetuned-squad) for answer prediction

- Flask-based backend for API handling

- Interactive web interface built with HTML, CSS, and JavaScript

- Displays model status and predicted answer dynamically

# Tech Stack

- Frontend: HTML, CSS, JavaScript

- Backend: Python (Flask)

- Machine Learning Model: Hugging Face Transformers (BERT-based QA model)

# How It Works

- User enters a context and a question.

- The frontend sends the data to Flask (/answer endpoint).

- Flask processes the request using the BERT QA model.

- The model predicts the most likely answer from the passage.

- The answer is displayed dynamically on the webpage.
<img width="1508" height="945" alt="image" src="https://github.com/user-attachments/assets/99499f91-6ce5-4df6-be9c-ebf851e69b60" />
