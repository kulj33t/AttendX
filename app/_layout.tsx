import { Slot } from 'expo-router';
import React, { useState } from 'react';
import SplashScreen from './others/splash';

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return <Slot />;
}
