import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
const Home = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Flight');
  const [tripType, setTripType] = useState('One Way');
  const handleSearch = () => {
    navigation.navigate('SearchResult');
  };
  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };
  const handleTripTypeChange = (type) => {
    setTripType(type);
  };
  const handleNotification = () => {
    navigation.navigate('Notification');
  };
  const handleProfile = () => {
    navigation.navigate('Profile');
  };
  const handleSettings = () => {
    navigation.navigate('Setting');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.userName}>Mosarraf H.</Text>
              <Text style={styles.userLocation}>London, UK</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSettings}
            style={styles.settingsButton}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Welcome to GoBook</Text>
        <Text style={styles.subTitle}>Largest Online Ticket Destination</Text>

        <View style={styles.tabContainer}>
          {['Flight', 'Bus', 'Train', 'Launch'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, selectedTab === tab && styles.selectedTab]}
              onPress={() => handleTabPress(tab)}>
              <Image
                source={require('../assets/snack-icon.png')}
                style={styles.tabIcon}
              />
              <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tripTypeContainer}>
          {['One Way', 'Round Way', 'Multi City'].map((type) => (
            <TouchableOpacity
              key={type}
              style={styles.tripTypeButton}
              onPress={() => handleTripTypeChange(type)}>
              <View
                style={[
                  styles.radio,
                  tripType === type && styles.radioSelected,
                ]}
              />
              <Text style={styles.tripTypeText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formRow}>
            <View style={styles.formField}>
              <Text style={styles.label}>From</Text>
              <Text style={styles.value}>France</Text>
              <Text style={styles.subValue}>CDG, Paris Airport</Text>
            </View>
            <TouchableOpacity style={styles.switchButton}>
              <Image
                source={require('../assets/snack-icon.png')}
                style={styles.switchIcon}
              />
            </TouchableOpacity>
            <View style={styles.formField}>
              <Text style={styles.label}>To</Text>
              <Text style={styles.value}>Switzerland</Text>
              <Text style={styles.subValue}>ZRH, Zurich Airport</Text>
            </View>
          </View>

          <View style={styles.formRow}>
            <View style={styles.formField}>
              <Text style={styles.label}>Journey Date</Text>
              <Text style={styles.value}>30 Jul 23</Text>
              <Text style={styles.subValue}>Friday 18:25</Text>
            </View>
            <View style={styles.formField}>
              <Text style={styles.label}>Return Date</Text>
              <Text style={styles.subValue}>Save more on return flight...</Text>
            </View>
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Traveler & Class</Text>
            <Text style={styles.value}>2 Traveler</Text>
            <Text style={styles.subValue}>Economy</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleNotification}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleProfile}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userLocation: {
    fontSize: 14,
    color: '#666',
  },
  settingsButton: {
    padding: 8,
  },
  settingsIcon: {
    width: 24,
    height: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  tab: {
    alignItems: 'center',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
  },
  tripTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  tripTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: '#007AFF',
  },
  tripTypeText: {
    fontSize: 14,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  formField: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subValue: {
    fontSize: 12,
    color: '#666',
  },
  switchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  switchIcon: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  searchButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    marginRight: 8,
  },
  searchButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
  },
});
export default Home;
