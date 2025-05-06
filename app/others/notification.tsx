import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Notification({ navigation }) {
  const todayNotifications = [
    "You missed the attendance window for DBMS.",
    "Your have attended PSQ Class.",
    "Daily attendance summary is ready.",
    "Low attendance alert for PSQ.",
    "Your have attended OOPS Class.",
    "Your have attended DSA Class.",
  ];

  const yesterdayNotifications = [
    "You missed the attendance window for DBMS.",
    "Your have attended PSQ Class.",
    "Daily attendance summary is ready.",
    "Low attendance alert for PSQ.",
    "Your have attended OOPS Class.",
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('/main/home')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Today Section */}
        <Text style={styles.sectionHeader}>Today</Text>
        {todayNotifications.map((note, idx) => (
          <View key={`today-${idx}`} style={styles.notificationCard}>
            <Text style={styles.notificationText}>{note}</Text>
          </View>
        ))}

        {/* Yesterday Section */}
        <Text style={styles.sectionHeader}>Yesterday</Text>
        {yesterdayNotifications.map((note, idx) => (
          <View key={`yesterday-${idx}`} style={styles.notificationCard}>
            <Text style={styles.notificationText}>{note}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  notificationCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
});
