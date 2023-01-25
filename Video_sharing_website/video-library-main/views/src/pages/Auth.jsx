import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { signIn, signUp } from '../actions/AuthAction' 

const theme = createTheme()

const Auth = () => {

    const dispatch = useDispatch()
    const loading = useSelector((state)=> state.authReducer.lodaing)
    const [isSignUp, setIsSignUp] = useState(true)
    const [formData, setFormData] = useState({ username: "", fullName: "", email: "", password: ""})
  
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if(isSignUp) {
        dispatch(signUp(formData))
      } else {
        dispatch(signIn(formData))
      }
    }

    const resetForm = () => {
        setFormData({ username: "", fullName: "", email: "", password: ""})
    }

    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3}
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
              { isSignUp ? 'Sign Up' : 'Sign In'}
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  { isSignUp && <Grid item xs={12}>
                    <TextField
                      autoComplete="full-name"
                      name="fullName"
                      required
                      fullWidth
                      id="fullName"
                      label="Full Name"
                      autoFocus
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </Grid> }
                  { isSignUp && <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Grid> }
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disable={loading}
                >
                { isSignUp ? 'Sign Up' : 'Sign In'}
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Typography variant="body2" style={{cursor: 'pointer', color: 'blue'}} onClick={()=> {setIsSignUp((prev)=> !prev); resetForm()}}>
                    {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Container>
        </ThemeProvider>
      );
}

export default Auth