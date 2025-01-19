import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, ScrollView, TouchableOpacity, Animated, Modal } from 'react-native';
import SearchBar from './SearchBar'; // Ensure you have a SearchBar component

const CourseEnrolled = ({ navigation }) => {
  const allCourses = [
    { id: 1, name: 'Introduction to Computer', timing: '10:00 AM - 12:00 PM', day: 'Monday, Wednesday', description: 'Learn the basics of computers, hardware, and software.' },
    { id: 2, name: 'Full Stack', timing: '1:00 PM - 3:00 PM', day: 'Tuesday, Thursday', description: 'Comprehensive course on front-end and back-end web development.' },
    { id: 3, name: 'Mobile Application', timing: '9:00 AM - 11:00 AM', day: 'Monday, Friday', description: 'Design and develop modern mobile applications.' },
    { id: 4, name: 'Programming Fundamentals', timing: '9:00 AM - 11:00 AM', day: 'Monday', description: 'Learn basic programming fundamentals in C/C++.' },
    { id: 5, name: 'Linear Algebra', timing: '9:00 AM - 11:00 AM', day: 'Friday', description: 'Practice algebraic methods and numericals.' },
    { id: 6, name: 'Introduction to Java', timing: '11:00 AM - 12:30 PM', day: 'Monday, Friday', description: 'Design and develop modern Java applications.' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = allCourses.filter((course) =>
      course.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  // Show course details in modal
  const handleCardPress = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>Courses Enrolled</Text>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />

          {/* Course List */}
          {filteredCourses.map((course) => (
            <TouchableOpacity
              key={course.id}
              onPress={() => handleCardPress(course)}
              style={styles.cardWrapper}
            >
              <Animated.View style={styles.card}>
                <Text style={styles.cardTitle}>{course.name}</Text>
                <Text style={styles.cardDetail}>Timing: {course.timing}</Text>
                <Text style={styles.cardDetail}>Day: {course.day}</Text>
              </Animated.View>
            </TouchableOpacity>
          ))}

          {/* Back Button */}
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>

      {/* Course Details Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedCourse && (
              <>
                <Text style={styles.modalTitle}>{selectedCourse.name}</Text>
                <Text style={styles.modalDetail}>Timing: {selectedCourse.timing}</Text>
                <Text style={styles.modalDetail}>Day: {selectedCourse.day}</Text>
                <Text style={styles.modalDescription}>{selectedCourse.description}</Text>
              </>
            )}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardWrapper: {
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  cardDetail: {
    fontSize: 16,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  modalDescription: {
    fontSize: 16,
    marginTop: 10,
    color: '#777',
  },
});

export default CourseEnrolled;
