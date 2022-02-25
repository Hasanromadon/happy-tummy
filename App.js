import React from 'react';
import { StatusBar, View } from 'react-native';
import RootNavigation from './navigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor='transparent' translucent />
      <RootNavigation />
    </>
  );
};



export default App;
