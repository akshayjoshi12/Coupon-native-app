import React, { useState } from 'react';
import { StyleSheet} from 'react-native';

import CouponNavigator from './navigation/CouponNavigation';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-italic' : require('./assets/fonts/OpenSans-Italic.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-extrabold' : require('./assets/fonts/OpenSans-ExtraBold.ttf')
  });
};

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded) {
    return (
      <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn} />
    )
  }
  
  return <CouponNavigator />;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
  },
  contentCss: {
    flex: 1,
    width:'100%',
  }
});
