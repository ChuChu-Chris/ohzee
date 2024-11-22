document.getElementById('requestForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form); // Collects all form fields, including the file

    try {
        const response = await fetch('/api/requests', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('statusMessage').textContent = 'Request submitted successfully!';
            form.reset();
        } else {
            document.getElementById('statusMessage').textContent = `Error: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('statusMessage').textContent = 'Submission failed. Please try again.';
    }
});
