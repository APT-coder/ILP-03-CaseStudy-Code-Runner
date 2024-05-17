document.getElementById('feedbackForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    
    const formData = new FormData(this);
    const userName = formData.get('name');
    const userEmail = formData.get('email');
    const userFeedback = formData.get('feedback');
    const createdOn = new Date().toISOString().split('T')[0]; 
    console.log(createdOn);
    if (!userName || !userEmail || !userFeedback) {
        alert("Please fill in all fields");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/user_feedback/${encodeURIComponent(userName)}/${encodeURIComponent(userFeedback)}/${encodeURIComponent(createdOn)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: userName,
                email: userEmail,
                feedback_description: userFeedback,
                created_on: createdOn 
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send feedback to the server');
        }

        const emailResponse = await emailjs.send('service_ltdo6fc', 'template_5834he9', {
            to_name: "CodeRunner",
            from_name: userName,
            message: userFeedback
        });
        
        console.log('Email Sent:', emailResponse);

        alert("Feedback sent successfully!!!");
    } catch (error) {
        console.error('Error:', error);
        alert("Failed to send feedback. Please try again later.");
    }
});
