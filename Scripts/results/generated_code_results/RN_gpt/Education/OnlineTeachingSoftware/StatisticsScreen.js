import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/snack-icon.png')}
        style={styles.chartBackground}
      >
        <View style={styles.learningProgressChart}>
          {/* Your chart or other components can go here */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  learningProgressChart: {
    // Define the styles for the chart container here
  },
});

export default StatisticsScreen;