import React from 'react';

//* Components
import Header from './components/header';
import Home from './views/home';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home name={'rober'} edad={2} />
    </div>
  );
}
