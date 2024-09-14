import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
const Trends = ({ navigation }) => {
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.navigate('Menu')}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
</TouchableOpacity>
<TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate('Search')}>
<Feather name="search" size={20} color="#657786" />
<Text style={styles.searchText}>Search Twitter</Text>
</TouchableOpacity>
<TouchableOpacity>
<Feather name="settings" size={24} color="#1DA1F2" />
</TouchableOpacity>
</View>
  <Text style={styles.trendsTitle}>Trends for you</Text>

  <View style={styles.noTrendsContainer}>
    <Text style={styles.noTrendsText}>No new trends for you</Text>
    <Text style={styles.noTrendsDescription}>
      It seems like there's not a lot to show you right now, but you can see trends for other areas
    </Text>
    <TouchableOpacity style={styles.changeLocationButton}>
      <Text style={styles.changeLocationText}>Change location</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.floatingButton}>
    <Feather name="plus" size={24} color="#fff" />
  </TouchableOpacity>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Feather name="home" size={24} color="#657786" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Feather name="search" size={24} color="#1DA1F2" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Feather name="bell" size={24} color="#657786" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Feather name="mail" size={24} color="#657786" />
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#E1E8ED',
},
profileIcon: {
width: 32,
height: 32,
borderRadius: 16,
},
searchBar: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#E1E8ED',
borderRadius: 20,
paddingHorizontal: 15,
paddingVertical: 8,
marginHorizontal: 10,
},
searchText: {
marginLeft: 10,
color: '#657786',
},
trendsTitle: {
fontSize: 20,
fontWeight: 'bold',
padding: 15,
},
noTrendsContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 20,
},
noTrendsText: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
noTrendsDescription: {
textAlign: 'center',
color: '#657786',
marginBottom: 20,
},
changeLocationButton: {
backgroundColor: '#1DA1F2',
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 20,
},
changeLocationText: {
color: '#fff',
fontWeight: 'bold',
},
floatingButton: {
position: 'absolute',
right: 20,
bottom: 80,
width: 56,
height: 56,
borderRadius: 28,
backgroundColor: '#1DA1F2',
justifyContent: 'center',
alignItems: 'center',
elevation: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#E1E8ED',
paddingVertical: 10,
},
});
export default Trends;