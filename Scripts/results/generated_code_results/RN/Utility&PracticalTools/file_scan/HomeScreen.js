import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomePage = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const handleScanPress = () => {
navigation.navigate('StartScan');
};
const handleMenuPress = () => {
navigation.navigate('Menu');
};
const handleSortPress = () => {
navigation.navigate('SortBy');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <View style={styles.navbar}>
    <TouchableOpacity onPress={handleMenuPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
    </TouchableOpacity>
    <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
  </View>

  <View style={styles.searchBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search your files"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <TouchableOpacity onPress={handleSortPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.sortIcon} />
    </TouchableOpacity>
  </View>

  <ScrollView>
    <View style={styles.scanCategories}>
      <Text style={styles.sectionTitle}>My Scans</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See All</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.folderContainer}>
      <View style={styles.folder}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.folderIcon}>
          <Text style={styles.folderName}>Personal</Text>
          <Text style={styles.itemCount}>32 items</Text>
        </ImageBackground>
      </View>
      <View style={styles.folder}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.folderIcon}>
          <Text style={styles.folderName}>Official</Text>
          <Text style={styles.itemCount}>163 items</Text>
        </ImageBackground>
      </View>
      <View style={styles.folder}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.folderIcon}>
          <Text style={styles.folderName}>Others</Text>
          <Text style={styles.itemCount}>26 items</Text>
        </ImageBackground>
      </View>
    </View>

    <Text style={styles.sectionTitle}>Recent scans</Text>

    <View style={styles.recentScan}>
      <Image source={require('../assets/snack-icon.png')} style={styles.documentPreview} />
      <View style={styles.scanInfo}>
        <Text style={styles.documentTitle}>Address proof</Text>
        <Text style={styles.timestamp}>12/01/2021 • 12:21 PM</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>Print</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <View style={styles.recentScan}>
      <Image source={require('../assets/snack-icon.png')} style={styles.documentPreview} />
      <View style={styles.scanInfo}>
        <Text style={styles.documentTitle}>License copy</Text>
        <Text style={styles.timestamp}>12/01/2021 • 12:21 PM</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>Print</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ScrollView>

  <View style={styles.bottomButtons}>
    <TouchableOpacity style={styles.stopButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.stopIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.scanButton} onPress={handleScanPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.scanIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 10,
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
navbar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
menuIcon: {
width: 30,
height: 30,
},
logo: {
width: 100,
height: 30,
marginLeft: 10,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
borderRadius: 20,
margin: 10,
padding: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
},
sortIcon: {
width: 20,
height: 20,
},
scanCategories: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
seeAllText: {
color: '#00BFA5',
},
folderContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginBottom: 20,
},
folder: {
alignItems: 'center',
},
folderIcon: {
width: 80,
height: 80,
justifyContent: 'flex-end',
padding: 5,
},
folderName: {
color: '#000000',
fontWeight: 'bold',
},
itemCount: {
color: '#888888',
},
recentScan: {
flexDirection: 'row',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
documentPreview: {
width: 60,
height: 60,
marginRight: 10,
},
scanInfo: {
flex: 1,
},
documentTitle: {
fontWeight: 'bold',
},
timestamp: {
color: '#888888',
fontSize: 12,
},
actionButtons: {
flexDirection: 'row',
marginTop: 5,
},
actionButton: {
flexDirection: 'row',
alignItems: 'center',
marginRight: 20,
},
actionIcon: {
width: 20,
height: 20,
marginRight: 5,
},
actionText: {
color: '#00BFA5',
},
bottomButtons: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding: 20,
},
stopButton: {
backgroundColor: '#FFFFFF',
padding: 10,
borderRadius: 25,
marginRight: 20,
},
stopIcon: {
width: 30,
height: 30,
},
scanButton: {
backgroundColor: '#00BFA5',
padding: 20,
borderRadius: 35,
},
scanIcon: {
width: 40,
height: 40,
},
});
export default HomePage;