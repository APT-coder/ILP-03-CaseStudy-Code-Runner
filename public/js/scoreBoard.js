fetch('http://localhost:3000/api/scores/')
.then(response => response.json())
.then(scores => {
    const scoresBody = document.getElementById('scoresBody');
    scoresBody.innerHTML = '';

    scores.forEach(score => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${score.user_name}</td>
            <td>${score.score}</td>`;
        scoresBody.appendChild(row);
    });
})
.catch(error => console.error('Error fetching scores:', error));