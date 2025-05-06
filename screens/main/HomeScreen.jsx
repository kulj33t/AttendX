import Svg, { Circle, G, Text as TextSvg } from 'react-native-svg';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const subjects = [
  { id: 1, name: 'DBMS', subcode: 'SUBCODE', professor: 'Prof. Name', total: 22, present: 17 },
  { id: 2, name: 'Maths', subcode: 'MATH101', professor: 'Prof. Math', total: 25, present: 20 },
  { id: 3, name: 'OS', subcode: 'OS201', professor: 'Prof. OS', total: 30, present: 26 },
  { id: 4, name: 'CN', subcode: 'CN301', professor: 'Prof. CN', total: 28, present: 25 },
  { id: 5, name: 'AI', subcode: 'AI401', professor: 'Prof. AI', total: 18, present: 15 },
];

export default function HomeScreen() {
  const [expandedId, setExpandedId] = useState(subjects[0].id); // One always expanded

  const toggleExpand = (id) => {
    setExpandedId(id); // Force always expanded one
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Hello, Kuljeet</Text>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="notifications-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      {subjects.map((subject) => (
        <SubjectTile
          key={subject.id}
          subject={subject}
          expanded={expandedId === subject.id}
          onPress={() => toggleExpand(subject.id)}
        />
      ))}
    </ScrollView>
  );
}

function SubjectTile({ subject, expanded, onPress }) {
  const { name, subcode, professor, total, present } = subject;
  const absent = total - present;
  const percentage = Math.round((present / total) * 100);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const chartSize = expanded ? 100 : 60;
  const strokeWidth = expanded ? 20 : 20;
  const dashArray = (absent / total) * circumference;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.tileWrapper}>
      <View style={styles.tile}>
        <View style={styles.tileHeader}>
          <View style={styles.leftSection}>
            <Text style={styles.subjectName}>{name}</Text>
            <Text style={styles.subDetails}>{subcode}</Text>
            <Text style={styles.subDetails}>{professor}</Text>

            {expanded && (
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.rightSection}>
            <Svg height={chartSize} width={chartSize} viewBox="0 0 100 100">
              <G rotation={-90} origin="50, 50">
                <Circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#d3d3d3"
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                <Circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#e55373"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${dashArray} ${circumference}`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  fill="none"
                />
              </G>
<TextSvg
  x="42"
  y="56"
  fontSize={expanded ? '20' : '18'}
  fill="#000"
  textAnchor="middle"
  fontWeight="bold"
  dominantBaseline="middle"
>
  {percentage}%
</TextSvg>


            </Svg>

            {expanded && (
              <View style={styles.attendanceDetails}>
                <Text style={styles.detailText}>Total Classes : {total}</Text>
                <Text style={styles.detailText}>Present : {present}</Text>
                <Text style={styles.detailText}>Absent : {absent}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 46,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  tileWrapper: {
    marginBottom: 16,
  },
  tile: {
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  tileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
  },
  rightSection: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  subjectName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  subDetails: {
    color: '#555',
    fontSize: 13,
  },
  attendanceDetails: {
    alignItems: 'center',
    marginTop: 8,
  },
  detailText: {
    fontSize: 12,
    color: '#000',
  },
  viewButton: {
    backgroundColor: '#e55373',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
