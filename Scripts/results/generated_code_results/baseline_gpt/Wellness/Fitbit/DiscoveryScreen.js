import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiscoveryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>发现</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>特色</Text>
        <View style={styles.card}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.premiumBadge}>premium</Text>

          <View style={styles.cardContent}>
            <Text style={styles.duration}>45 MIN</Text>
            <Text style={styles.title}>Nature rain on leaves</Text>
            <TouchableOpacity>
              <Text style={styles.playButton}>
                <Icon name="play-outline" size={16} /> 播放
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>锻炼</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>查看全部</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.horizontalScroll}>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />
            <Text style={styles.premiumBadge}>premium</Text>

            <View style={styles.cardContent}>
              <Text style={styles.duration}>27 MIN</Text>
              <Text style={styles.title}>Total body barre: bodyweight</Text>
              <Text style={styles.language}>英语</Text>
              <TouchableOpacity>
                <Text style={styles.playButton}>
                  <Icon name="play-outline" size={16} /> 播放
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />

            <View style={styles.cardContent}>
              <Text style={styles.duration}>16 MIN</Text>
              <Text style={styles.title}>Cardio groove dance</Text>
              <Text style={styles.language}>英语</Text>
              <TouchableOpacity>
                <Text style={styles.playButton}>
                  <Icon name="play-outline" size={16} /> 播放
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  premiumBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 16,
  },
  duration: {
    fontSize: 12,
    color: '#AAAAAA',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  language: {
    fontSize: 12,
    color: '#AAAAAA',
    marginBottom: 5,
  },
  playButton: {
    fontSize: 16,
    color: '#008080',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  viewAll: {
    fontSize: 14,
    color: '#008080',
  },
  horizontalScroll: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
});

export default DiscoveryScreen;