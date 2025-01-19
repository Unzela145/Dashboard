import React from 'react';
import { Modal, Text, StyleSheet, View, Pressable } from 'react-native';
import PropTypes from 'prop-types';

const ContactUs = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.contactModalContent}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <Text style={styles.contactInfo}>📞 Phone: (021) 111 264 264</Text>
          <Text style={styles.contactInfo}>📧 Email: info@iqra.edu.pk</Text>
          <Text style={styles.contactInfo}>📍 Location: Iqra University Main Campus, Defence View</Text>
          <Text style={styles.contactDescription}>
            We are here to help you with any questions or concerns. Feel free to reach out!
          </Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

ContactUs.propTypes = {
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
  contactModalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contactInfo: {
    fontSize: 16,
    marginVertical: 5,
  },
  contactDescription: {
    fontSize: 14,
    marginVertical: 10,
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

export default ContactUs;
