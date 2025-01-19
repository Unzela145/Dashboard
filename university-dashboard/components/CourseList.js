// CourseList.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CourseList = ({ courses, onCourseClick }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Courses Enrolled</Text>
      {courses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={styles.courseCard}
          onPress={() => onCourseClick(course)}  // Trigger onClick with the course data
        >
          <Text style={styles.courseText}>{course.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4CAF50',
  },
  courseCard: {
    backgroundColor: '#e8f5e9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  courseText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2e7d32',
  },
});

export default CourseList;
