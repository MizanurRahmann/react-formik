import React from 'react';
import './App.css';
// import EnrollForm from './components/ReusableFormik/EnrollForm';
// import RegistrationForm from './components/ReusableFormik/RegistrationForm';
// import FormikContainer from './components/ReusableFormik/FormikContainer';
// import YoutubeForms from './components/ReactFormik/YoutubeForms';
import LoginForm from './components/ReusableFormik/LoginForm';

import { theme, ThemeProvider } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <YoutubeForms /> */}

        {/* <FormikContainer /> */}

        <LoginForm />

        {/* <RegistrationForm /> */}

        {/* <EnrollForm /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
