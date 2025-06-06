import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const router = useRouter();

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    const valid = /\S+@\S+\.\S+/.test(email);
    setIsValidEmail(valid);
  }, [email]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: isValidEmail ? 1 : 0.95,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: isValidEmail ? 1 : 0.7,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isValidEmail]);

  const handleContinue = () => {
    if (isValidEmail) {
      router.push({
        pathname: '/auth/otp',
        params: { email },
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>
              Attend<Text style={styles.logoX}>X</Text>
            </Text>
          </View>

          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Text style={styles.label}>Enter E-mail Id</Text>
              <TextInput
                style={styles.input}
                placeholder="xxxxxxxx@email.com"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
              <Animated.View
                style={[
                  styles.animatedButton,
                  {
                    opacity: opacityAnim,
                    transform: [{ scale: scaleAnim }],
                    backgroundColor: isValidEmail ? '#e55373' : 'rgba(229, 83, 115, 0.7)',
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={handleContinue}
                  disabled={!isValidEmail}
                  style={styles.touchable}
                >
                  <Text style={styles.buttonText}>Send OTP</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
  },
  logoContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  logoX: {
    color: '#e55373',
  },
  cardWrapper: {
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: '#eaeaea',
    padding: 30,
    paddingBottom: 40,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  label: {
    marginBottom: 12,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    padding:10,
  },
  input: {
    backgroundColor: '#bdbdbd',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 28,
    fontSize: 16,
    color: '#000',
  },
  animatedButton: {
    borderRadius: 28,
  },
  touchable: {
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 28,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
