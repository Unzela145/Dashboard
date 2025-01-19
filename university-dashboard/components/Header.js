import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, TouchableOpacity, Modal, Pressable, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure this package is installed
import { handleLogout } from '../utility/Logout'; // Import the Logout utility
import ContactUs from './ContactUs'; // Import the ContactUs component
import AboutUs from './AboutUs'; // Import the AboutUs component
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Manage theme state
  const navigation = useNavigation(); // Use navigation hook

  const toggleMenu = () => {
    setMenuModalVisible(!menuModalVisible);
  };

  const handleMenuOption = (option) => {
    if (option === 'Log Out') {
      handleLogout(navigation); // Call the logout utility
    } else if (option === 'Contact Us') {
      setContactModalVisible(true); // Open ContactUs modal
    } else if (option === 'About Us') {
      setAboutModalVisible(true); // Open AboutUs modal
    }
    setMenuModalVisible(false); // Close menu modal
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dynamic styles based on theme
  const themeStyles = isDarkMode
    ? styles.darkTheme
    : styles.lightTheme;

  const textStyles = isDarkMode
    ? styles.darkText
    : styles.lightText;

  return (
    <View style={[styles.header, themeStyles]}>
      {/* Menu Icon */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Ionicons name="menu" size={28} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.headerText, textStyles]}>{title}</Text>

      {/* Menu Modal */}
      <Modal
        visible={menuModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleMenu}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, themeStyles]}>
            <Pressable onPress={() => handleMenuOption('Log Out')} style={styles.menuOption}>
              <Text style={[styles.menuText, textStyles]}>Log Out</Text>
            </Pressable>
            <Pressable onPress={() => handleMenuOption('Contact Us')} style={styles.menuOption}>
              <Text style={[styles.menuText, textStyles]}>Contact Us</Text>
            </Pressable>
            <Pressable onPress={() => handleMenuOption('About Us')} style={styles.menuOption}>
              <Text style={[styles.menuText, textStyles]}>About Us</Text>
            </Pressable>

            {/* Dark Mode Toggle */}
            <View style={styles.menuOption}>
              <Text style={[styles.menuText, textStyles]}>Dark Mode</Text>
              <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                thumbColor={isDarkMode ? '#4CAF50' : '#ede1ed'}
                trackColor={{ false: '#7e7a82', true: '#657d72' }}
              />
            </View>

            <Pressable onPress={toggleMenu} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Contact Us Modal */}
      <ContactUs
        visible={contactModalVisible}
        onClose={() => setContactModalVisible(false)}
      />

      {/* About Us Modal */}
      <AboutUs
        visible={aboutModalVisible}
        onClose={() => setAboutModalVisible(false)}
      />
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  menuButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  menuOption: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '100%',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // Light Theme
  lightTheme: {
    backgroundColor: '#cfc7d1',
    borderBottomColor: '#ddd',
  },
  lightText: {
    color: '#000',
  },
  // Dark Theme
  darkTheme: {
    backgroundColor: '#333',
    borderBottomColor: '#444',
  },
  darkText: {
    color: '#fff',
  },
});

export default Header;
