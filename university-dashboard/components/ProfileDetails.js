import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated } from 'react-native';

const ProfileDetails = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0); // Initial opacity value for fade-in effect

  // Trigger fade-in animation on component mount
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity value
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Improves performance
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Student Profile</Text>

        {/* Profile Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>
            <Text style={styles.label}>Name:</Text> unzela
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Student ID:</Text> 123
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Gender:</Text> Female
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Email:</Text> unzela@example.com
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Department:</Text> Software Engineering
          </Text>
        </View>

        {/* Go Back Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8} // Adds a subtle touch effect
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF', // Blue color for the button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileDetails;