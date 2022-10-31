
import './App.css';

import Home from './Pages/Home';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import Profile from './Pages/Profile';
import Detail from './Pages/Detail';
import Search from './Pages/Search';



import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';



import { blue, grey } from '@mui/material/colors';


/*
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});*/



const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...blue,
      ...(mode === 'dark' && {
        main: '#0A1929',
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: '#0A1929',
        paper: "#243B55",
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});



const App = () => {

  const mode = useSelector(state =>state.theme);

  const ThemeObject= createTheme(getDesignTokens(mode));
  return (
    <div  >

      <>
        <ThemeProvider theme={ThemeObject}>
            
            <CssBaseline/>

            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id" element={<Profile />} />

              <Route path="/post-comment-detail/:id" element={<Detail />} />

              <Route path='/search' element={<Search />} />
            </Routes>


            <Footer/>
         


        </ThemeProvider>

      </>

    </div>
  );
}

export default App;
