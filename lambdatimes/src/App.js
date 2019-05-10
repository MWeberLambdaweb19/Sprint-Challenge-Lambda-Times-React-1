import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import withAuthorize from './components/Authorize.js';
import Login from './components/Login.js';

const ComponentFromWithAuthorize = withAuthorize(Content)(Login)

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ComponentFromWithAuthorize />
    </div>
  );
}

export default App;