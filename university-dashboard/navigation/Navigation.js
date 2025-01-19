import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../components/LoginPage';
import StudentProfile from '../components/StudentProfile';
import CourseEnrolled from '../components/CourseEnrolled'; // Import CourseEnrolled if needed
import ProfileDetails from '../components/ProfileDetails'; // Import ProfileDetails if needed

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} options={{ title: 'Student Dashboard' }} />
        <Stack.Screen name="CourseEnrolled" component={CourseEnrolled} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
