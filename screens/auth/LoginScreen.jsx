import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Logo section */}
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>
              Attend<Text style={styles.logoX}>X</Text>
            </Text>
          </View>

          {/* Card section */}
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.label}>Enter E-mail Id</Text>
              <TextInput
                style={styles.input}
                placeholder="xxxxxxxx@email.com"
                placeholderTextColor="#888"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send OTP</Text>
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
