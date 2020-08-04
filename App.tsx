import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
