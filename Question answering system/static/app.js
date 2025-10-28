const askBtn = document.getElementById('askBtn');
const answerDiv = document.getElementById('answer');
const status = document.getElementById('status');

askBtn.addEventListener('click', async () => {
  const question = document.getElementById('question').value.trim();
  const context = document.getElementById('context').value.trim();

  if (!question || !context) {
    alert('Please provide both question and context.');
    return;
  }

  status.textContent = 'Processing...';
  answerDiv.textContent = 'Thinking...';

  try {
    const res = await fetch('/answer', {   // ✅ no need for full URL now
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, context })
    });

    const data = await res.json();

    if (!res.ok) {
      answerDiv.textContent = `Error: ${data.error || res.statusText}`;
      status.textContent = 'Error';
      return;
    }

    answerDiv.textContent = data.answer || '—';
    status.textContent = 'Done';
  } catch (err) {
    answerDiv.textContent = 'Request failed — is the backend running?';
    status.textContent = 'Network error';
    console.error(err);
  }
});
