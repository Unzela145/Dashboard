import React, { Component } from 'react';
import { 
  TextInput, 
  TouchableOpacity, 
  View, 
  Text, 
  StyleSheet, 
  Alert, 
  ActivityIndicator 
} from 'react-native';
import PropTypes from 'prop-types';
import { fetchStudentData } from '../services/api'; // Ensure this is implemented

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: '',
      studentId: '',
      loading: false,
    };
  }

  handleLogin = async () => {
    this.setState({ loading: true });
    const { navigation } = this.props;

    try {
      const studentData = await fetchStudentData();

      const matchedStudent = studentData.find(
        (student) =>
          this.state.studentName.trim().toLowerCase() === student.name.toLowerCase() &&
          this.state.studentId.trim() === String(student.id)
      );

      if (matchedStudent) {
        navigation.replace('StudentProfile', {
          studentName: matchedStudent.name,
          studentId: matchedStudent.id,
        });
      } else {
        Alert.alert('Login Failed', 'Invalid name or student ID. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while logging in.');
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { studentName, studentId, loading } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Student Portal</Text>
        <Text style={styles.subtitle}>Login to access your dashboard</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={studentName}
          onChangeText={(text) => this.setState({ studentName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your student ID"
          value={studentId}
          onChangeText={(text) => this.setState({ studentId: text })}
          keyboardType="numeric"
        />

        {loading ? (
          <ActivityIndicator size="large" color="#4CAF50" />
        ) : (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.footer}>Iqra University © 2025</Text>
      </View>
    );
  }
}

LoginPage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#999',
  },
});

export default LoginPage;
