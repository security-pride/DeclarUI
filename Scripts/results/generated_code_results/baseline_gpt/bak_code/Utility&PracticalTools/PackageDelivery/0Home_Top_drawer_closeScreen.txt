import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home_Top_drawer_closeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.timeText}>9:41</Text>
        </View>
        <View style={styles.headerMid}>
          <Text style={styles.titleText}>Track parcel</Text>
          <Icon name="chevron-down-outline" size={20} color="black" />
        </View>
        <View style={styles.headerRight}>
          <Image
            style={styles.profileIcon}
            source={require('../assets/snack-icon.png')}
          />
        </View>
      </View>
      
      {/* Content */}
      <ScrollView>
        <Text style={styles.sectionTitle}>My parcels</Text>

        {parcelData.map((parcel, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.parcelNumber}>{parcel.number}</Text>
              <Image
                style={styles.logo}
                source={require('../assets/snack-icon.png')}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.statusText}>{parcel.status}</Text>
              <Text style={styles.updateText}>Last update: {parcel.update}</Text>
              <View style={styles.progressBarBackground}>
                <View style={{ ...styles.progressBarFill, width: parcel.progress }} />
              </View>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsText}>Details</Text>
                <Icon name="chevron-forward-outline" size={16} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Icon name="mail-outline" size={28} color="black" />
          <Text style={styles.footerText}>My parcels</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="cube-outline" size={28} color="#B0B0B0" />
          <Text style={styles.footerTextInactive}>Send parcel</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="home-outline" size={28} color="#B0B0B0" />
          <Text style={styles.footerTextInactive}>Parcel center</Text>
        </View>
      </View>
    </View>
  );
};

const parcelData = [
  {
    number: '00359007738060313786',
    status: 'In transit',
    update: '3 hours ago',
    progress: '70%',
  },
  {
    number: '00806031378690077312',
    status: 'Left the parcel center',
    update: '21 hours ago',
    progress: '50%',
  },
  {
    number: '00690077312806031378',
    status: 'Delivered',
    update: '2 days ago',
    progress: '100%',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    backgroundColor: '#FFDD33',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerLeft: {
    flex: 1,
  },
  headerMid: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 14,
    color: 'black',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#292929',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  parcelNumber: {
    fontSize: 16,
    fontWeight: '500',
  },
  logo: {
    width: 60,
    height: 20,
  },
  cardContent: {
    marginTop: 4,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
  },
  updateText: {
    fontSize: 14,
    color: '#8E8E8E',
    marginVertical: 4,
  },
  progressBarBackground: {
    backgroundColor: '#EEE',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginVertical: 8,
  },
  progressBarFill: {
    backgroundColor: '#FFDD33',
    height: 6,
    borderRadius: 3,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  detailsText: {
    fontSize: 14,
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
  },
  footerTextInactive: {
    fontSize: 12,
    color: '#B0B0B0',
    marginTop: 4,
  },
});

export default Home_Top_drawer_closeScreen;