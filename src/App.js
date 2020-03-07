import React from 'react';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';

const App = () => {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
}

export default App;
