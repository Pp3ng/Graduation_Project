import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        axios.post('http://localhost:18080/api/register', { username, password })
            .then(response => {
                alert('Registration successful');
            })
            .catch(error => {
                setError('Registration failed');
                console.error("There was an error registering!", error);
            });
    };

    const handleLogin = () => {
        axios.post('http://localhost:18080/api/login', { username, password })
            .then(response => {
                setIsLoggedIn(true);
                setError('');
            })
            .catch(error => {
                setError('Login failed');
                console.error("There was an error logging in!", error);
            });
    };

    if (!isLoggedIn) {
        return (
            <Container maxWidth="xs">
                <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h1" variant="h5">
                        Login or Register
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{ mb: 2 }}
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                        {error && <Alert severity="error">{error}</Alert>}
                    </Box>
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome, {username}
            </Typography>
            {/*TODO*/}
        </Container>
    );
}

export default App;