import React, { useState } from 'react';
import * as Font from 'expo-font';
import Login from './screens/login';
import AppLoading from 'expo-app-loading';

const getFonts = () => {
  return Font.loadAsync({
    'ZillaSlab-Bold': require('./assets/fonts/ZillaSlab-Bold.ttf'),
    'ZillaSlab-Light': require('./assets/fonts/ZillaSlab-Light.ttf')
  });
};



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false); 

  if (fontsLoaded) {
    return (
      <Login />
    );
  } else {
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
}



