import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CloudStorageListViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cloud Storage List View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CloudStorageListViewScreen;