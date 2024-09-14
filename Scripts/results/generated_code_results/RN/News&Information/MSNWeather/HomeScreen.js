import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<SafeAreaView style={styles.container}>
<ScrollView>
<View style={styles.header}>
<TouchableOpacity onPress={() => handleNavigation('PersonalCentral')}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
</TouchableOpacity>
<Text style={styles.time}>9:10</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
<View style={styles.dealsContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.dealsIcon} />
<Text style={styles.dealsText}>Deals</Text>
</View>
</View>
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Ask me anything..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.cameraButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.micButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>

    <View style={styles.widgetsContainer}>
      <View style={styles.weatherWidget}>
        <Text style={styles.location}>Mountain View, CA</Text>
        <Text style={styles.temperature}>60°F</Text>
        <Text style={styles.weatherInfo}>Low UV today</Text>
        <Text style={styles.humidity}>81%</Text>
      </View>

      <View style={styles.rewardsWidget}>
        <Text style={styles.rewardsTitle}>Rewards</Text>
        <Text style={styles.rewardsInfo}>Earn Microsoft Rewards points by searching</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.rewardsIcon} />
      </View>

      <View style={styles.stocksWidget}>
        <Text style={styles.stocksTitle}>Stocks</Text>
        <Text style={styles.stockItem}>DJI</Text>
        <Text style={styles.stockItem}>AAPL</Text>
        <Text style={styles.stockItem}>AMZN</Text>
        <Text style={styles.stockItem}>TSLA</Text>
      </View>
    </View>
  </ScrollView>

  <View style={styles.navbar}>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Weather')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Weather</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Chat')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Chat</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Tabs')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Tabs</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Apps')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Apps</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F0F0F0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 10,
},
profileIcon: {
width: 30,
height: 30,
borderRadius: 15,
},
time: {
fontSize: 16,
},
signalIcon: {
width: 20,
height: 20,
},
dealsContainer: {
flexDirection: 'row',
alignItems: 'center',
},
dealsIcon: {
width: 20,
height: 20,
marginRight: 5,
},
dealsText: {
fontSize: 14,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'white',
borderRadius: 20,
margin: 10,
paddingHorizontal: 10,
},
searchInput: {
flex: 1,
height: 40,
},
cameraButton: {
padding: 5,
},
micButton: {
padding: 5,
},
icon: {
width: 20,
height: 20,
},
widgetsContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
padding: 10,
},
weatherWidget: {
backgroundColor: '#1E3A5F',
borderRadius: 10,
padding: 15,
width: '45%',
},
location: {
color: 'white',
fontSize: 16,
},
temperature: {
color: 'white',
fontSize: 36,
fontWeight: 'bold',
},
weatherInfo: {
color: 'white',
fontSize: 14,
},
humidity: {
color: 'white',
fontSize: 14,
},
rewardsWidget: {
backgroundColor: '#E6E6FA',
borderRadius: 10,
padding: 15,
width: '45%',
},
rewardsTitle: {
fontSize: 18,
fontWeight: 'bold',
},
rewardsInfo: {
fontSize: 14,
},
rewardsIcon: {
width: 40,
height: 40,
alignSelf: 'flex-end',
},
stocksWidget: {
backgroundColor: '#F0FFF0',
borderRadius: 10,
padding: 15,
width: '45%',
marginTop: 10,
},
stocksTitle: {
fontSize: 18,
fontWeight: 'bold',
},
stockItem: {
fontSize: 14,
marginTop: 5,
},
navbar: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: 'white',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 2,
},
});
export default HomeScreen;