
import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import { ThemeProvider } from 'styled-components'
// import {lightTheme , darkTheme} from '../src/Styles/theme.js'

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>

    


        <Header />
        <Home />
        <Footer />
   
    </>
  )
}

export default App
