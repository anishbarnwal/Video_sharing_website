import axios from 'axios'

const API = axios.create({baseURL: "https://video-library-jade.vercel.app/api/v1"})

export const signIn = (formData) => API.post('/auth/signin', formData)
export const signUp = (formData) => API.post('/auth/signup', formData)