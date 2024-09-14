import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const Travel = ({ navigation }) => {
  const navigateToPage = (pageId) => {
    navigation.navigate(pageId);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateToPage('Home')}>
          <Text style={styles.link}>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToPage('GroupTravel')}>
          <Text style={styles.link}>Go to Group Travel</Text>
        </TouchableOpacity>
        {/* Existing redirection logic for other pages */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  link: {
    color: 'blue',
    marginVertical: 10,
    fontSize: 18,
  },
});

export default Travel;