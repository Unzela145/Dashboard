import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header'; // Ensure Header is implemented or imported correctly
import SearchBar from './SearchBar'; // Ensure SearchBar supports 'searchQuery' and 'onSearch' props
import { useNavigation, useRoute } from '@react-navigation/native';

const StudentProfile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { studentName } = route.params;

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <Header title="Student Dashboard" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Welcome Section */}
        <View style={styles.section}>
          <Text style={styles.welcomeText}>Welcome back, {studentName}!</Text>
          <Text style={styles.subText}>
            Manage your academic profile, access resources, and stay updated on your enrolled courses.
          </Text>
        </View>

        {/* Search Bar Section */}
        <View style={styles.section}>
          <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
        </View>

        {/* Profile Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Details</Text>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ProfileDetails')}
          >
            <Text style={styles.cardText}>View Profile Details</Text>
          </TouchableOpacity>
        </View>

        {/* Courses Enrolled Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Courses Enrolled</Text>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('CourseEnrolled')}
          >
            <Text style={styles.cardText}>View Enrolled Courses</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#27ae60',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
    marginVertical: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
  },
});

export default StudentProfile;
