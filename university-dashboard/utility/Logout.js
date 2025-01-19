// Logout.js
export const handleLogout = (navigation) => {
  // Perform any session cleanup (e.g., clearing AsyncStorage, removing tokens, etc.)
  console.log('User logged out.');

  // Redirect to the login screen
  navigation.replace('LoginPage');
};
