import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ElectionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Elections</Text>
      </View>

      {/* Main News Item */}
      <View style={styles.newsCard}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.newsImage}
        />
        <View style={styles.newsContent}>
          <Text style={styles.newsTitle}>
            43 seconds of chaos: How the assassination attempt on Trump unfolded
          </Text>
          <Text style={styles.newsTime}>5h ago</Text>
        </View>
      </View>

      {/* Other News Items */}
      <View style={styles.otherNewsContainer}>
        {otherNewsItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.newsItem}>
            <Text style={styles.newsItemText}>{item.title}</Text>
            {item.isVideo && <View style={styles.videoLabel}>
              <Icon name="play-circle-outline" size={20} color="black" />
              <Text style={styles.videoText}>VIDEO</Text>
            </View>}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const otherNewsItems = [
  { title: 'Minute-by-minute: Visual timeline of the Trump assassination attempt' },
  { title: '‘Let me get my shoes’: What was said on stage in the seconds after Trump was shot' },
  { title: 'Gunman was a few hundred feet away from Trump, CNN analysis shows' },
  { title: '‘He’s got a gun!’: Listen to audio of rally attendees as gunman is spotted', isVideo: true },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsCard: {
    margin: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsContent: {
    padding: 16,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsTime: {
    color: '#777',
  },
  otherNewsContainer: {
    paddingHorizontal: 16,
  },
  newsItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  newsItemText: {
    fontSize: 14,
    marginBottom: 4,
  },
  videoLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default ElectionsScreen;