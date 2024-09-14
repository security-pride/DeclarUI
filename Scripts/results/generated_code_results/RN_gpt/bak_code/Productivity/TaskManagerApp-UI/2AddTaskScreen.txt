import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function AddTaskScreen() {
  return (
    <View style={styles.teamMemberContainer}>
      <View style={styles.teamMember}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <Text style={styles.teamMemberName}>John</Text>
      </View>
      <View style={styles.teamMember}>
        {/* Other components */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teamMemberContainer: {
    // styles here
  },
  teamMember: {
    // styles here
  },
  avatar: {
    // styles here
  },
  teamMemberName: {
    // styles here
  }
});

export default AddTaskScreen;