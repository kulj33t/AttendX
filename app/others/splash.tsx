import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';

const { height } = Dimensions.get('window');

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const yAnim = useRef(new Animated.Value(height)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Step 1: "X" rises up
    Animated.timing(yAnim, {
      toValue: height / 2 - 50,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      setShowText(true);

      // Step 2: Pulsing animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      ).start();

      // Step 3: Finish after delay
      setTimeout(() => {
        onFinish();
      }, 2500);
    });
  }, []);

  return (
    <View style={styles.container}>
      {!showText ? (
        <Animated.Text style={[styles.xText, { transform: [{ translateY: yAnim }] }]}>
          X
        </Animated.Text>
      ) : (
        <Animated.Text style={[styles.logoText, { transform: [{ scale: scaleAnim }] }]}>
          Attend
          <Text style={styles.pinkX}>X</Text>
        </Animated.Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xText: {
    fontSize: 60,
    color: '#FD346D',
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  pinkX: {
    color: '#FD346D',
  },
});
