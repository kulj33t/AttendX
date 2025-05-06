import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
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
  const router = useRouter();

  const handleContinue = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (isValidEmail) {
      router.push({
        pathname: '/auth/otp',
        params: { email },
      });
    } else {
      alert('Please enter a valid email address.');
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

          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.label}>Enter E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="you@example.com"
                placeholderTextColor="#888"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
              <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  logoX: {
    color: '#e55373',
  },
  cardContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#eaeaea',
    padding: 20,
    borderRadius: 24,
  },
  label: {
    marginBottom: 8,
    color: '#000',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#c5c5c5',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    backgroundColor: '#e55373',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
