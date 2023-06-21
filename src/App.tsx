import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import UserContainer from './components/UserContainer';
import AboutUs from './components/AboutUs';
import './App.css';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <>
      <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            // Define default options
            className: '',
            duration: 3000,
            // style: {
            //   background: '#363636',
            //   color: '#fff',
            // },
            // Default options for specific types
            success: {
              duration: 3000,
              // theme: {
              //   primary: 'green',
              //   secondary: 'black',
              // },
            },
          }}
        />
      <Header />
      <Routes>
        <Route path="/" element={<UserContainer />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
