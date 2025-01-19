import React from 'react';
import { Modal, Text, StyleSheet, View, Pressable } from 'react-native';
import PropTypes from 'prop-types';

const AboutUs = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.aboutModalContent}>
          <Text style={styles.aboutTitle}>About Us</Text>
          <Text style={styles.aboutInfo}>
            📚 Iqra University is one of the leading universities in Pakistan, offering quality 
            education and state-of-the-art facilities to students. It is recognized for its 
            outstanding programs in business, engineering, and computer sciences.
          </Text>
          <Text style={styles.aboutInfo}>
            🌟 Our mission is to provide a nurturing environment for intellectual and professional 
            growth while fostering innovation and leadership.
          </Text>
          <Text style={styles.aboutInfo}>
            🏛 Location: Main Campus, Karachi, Pakistan.
          </Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

AboutUs.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  aboutModalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  aboutInfo: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
    color: '#555',
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
});

export default AboutUs;
