document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    
    var formData = new FormData(this);

    
    var formParams = new URLSearchParams([...formData]);

    try {
        
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            body: formParams
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        
        window.location.href = 'results.html';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
});