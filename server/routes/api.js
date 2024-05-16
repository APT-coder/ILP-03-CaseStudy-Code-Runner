const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all users
router.get('/users', (req, res) => {
    pool.query('SELECT * FROM users;', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(result.rows);
        }
    });
});

// User login and signup check
router.get('/users/:userName/:password', (req, res) => {
    const userName = req.params.userName;
    const password = req.params.password;
   
    pool.query('SELECT * FROM users WHERE user_name = $1 AND user_password = $2', [userName, password], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).json({ error: 'Internal server error' });
        } else {
            if (result.rowCount === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(result.rows[0]);
        }
    });
});

// Create a new user
router.post('/users/:userName/:email/:password/:initialScore', (req, res) => {
    const userName = req.params.userName;
    const email = req.params.email;
    const password = req.params.password;
    const initialScore = req.params.initialScore;

    if (!userName || !password || !initialScore) {
        return res.status(400).json({ error: 'Name and password are required' });
    }
    pool.query('BEGIN', (err) => {
        if (err) {
            console.error('Error beginning transaction', err.stack);
            return res.status(500).json({ error: 'Internal server error' });
        }
        pool.query('INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *', [userName, email, password], (err, userResult) => {
            if (err) {
                console.error('Error inserting user', err.stack);
                pool.query('ROLLBACK', (rollbackErr) => {
                    if (rollbackErr) {
                        console.error('Error rolling back transaction', rollbackErr.stack);
                    }
                    return res.status(500).json({ error: 'Internal server error' });
                });
            } else {
                pool.query('INSERT INTO user_score (user_name, score) VALUES ($1, $2)', [userName, initialScore], (err, scoreResult) => {
                    if (err) {
                        console.error('Error inserting user score', err.stack);
                        pool.query('ROLLBACK', (rollbackErr) => {
                            if (rollbackErr) {
                                console.error('Error rolling back transaction', rollbackErr.stack);
                            }
                            return res.status(500).json({ error: 'Internal server error' });
                        });
                    } else {
                        pool.query('COMMIT', (commitErr) => {
                            if (commitErr) {
                                console.error('Error committing transaction', commitErr.stack);
                                return res.status(500).json({ error: 'Internal server error' });
                            }
                            res.status(201).json({ user: userResult.rows[0], initialScore });
                        });
                    }
                });
            }
        });
    });
});

// Get user scores
router.get('/scores/:userName', (req, res) => {
    const userName = req.params.userName;
    pool.query('SELECT * FROM user_score WHERE user_name = $1', [userName], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(result.rows);
        }
    });
});

// Update user score
router.post('/user_score/:userName/:score', (req, res) => {
    const userName = req.params.userName;
    const score = req.params.score;

    if (!score || isNaN(score)) {
        return res.status(400).json({ error: 'Score must be a valid number' });
    }

    pool.query('UPDATE user_score SET score = $1 WHERE user_name = $2', [score, userName], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).json({ error: 'Internal server error' });
        } else {
            if (result.rowCount === 0) {
                return res.status(404).json({ error: 'User not found' });
            } else {
                return res.status(200).json({ message: 'User score updated successfully' });
            }
        }
    });
});

// Add feedback
router.post('/user_feedback/:userName/:feedbackDesc/:createdOn', (req, res) => {
    const userName = req.params.userName;
    const feedbackDesc = req.params.feedbackDesc;
    const createdOn = req.params.createdOn;

    if (!userName || !feedbackDesc || !createdOn) {
        return res.status(400).json({ error: 'User name, feedback description and created date are required' });
    }
    pool.query('INSERT INTO user_feedback (user_name, feedback_description, created_on) VALUES ($1, $2, $3) RETURNING *', [userName, feedbackDesc, createdOn], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(201).json(result.rows[0]);
        }
    });
});

//Get scores in decreasing order for leaderboard
router.get('/scores', (req, res) => {
    pool.query('SELECT * from user_score order by score desc ;', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(result.rows);
        }
    });
});

module.exports = router;