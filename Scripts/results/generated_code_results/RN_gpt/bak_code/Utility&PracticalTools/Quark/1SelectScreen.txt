import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const SelectScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>11:30</Text>
        <View style={styles.statusIcons}>
          <Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
          <Text style={styles.batteryText}>65</Text>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>精选</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="输入网址或网站名，网站访问一触即达" placeholderTextColor="#999" />
          <TouchableOpacity style={styles.searchIconContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.updateCloseIconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>常用</Text>
          <View style={styles.iconsRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Bookmark')} style={styles.iconContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>书签</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Weibo')} style={styles.iconContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>微博</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tencent')} style={styles.iconContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>腾讯</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Netease')} style={styles.iconContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>网易</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sina')} style={styles.iconContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>新浪网</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>全网热点实时更新</Text>
          {/* Add more content here if needed */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  timeText: {
    color: '#fff',
    fontSize: 16,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
  },
  batteryText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 5,
    borderColor: '#555',
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    flex: 3,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    height: 40,
  },
  searchIconContainer: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  updateCloseIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  iconButton: {
    marginLeft: 10,
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
  scrollView: {
    flex: 1,
  },
  sectionContainer: {
    padding: 10,
  },
  sectionHeader: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconLabel: {
    color: '#fff',
    marginTop: 5,
  },
});

export default SelectScreen;