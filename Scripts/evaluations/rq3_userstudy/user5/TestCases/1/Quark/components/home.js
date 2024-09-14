import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
const HomePage = ({ navigation }) => {
const renderQuickAccessButton = (icon, label, onPress) => (
<TouchableOpacity style={styles.quickAccessButton} onPress={onPress}>
<Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
<Text style={styles.quickAccessLabel}>{label}</Text>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<Text style={styles.time}>11:28</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />
</View>
</View>
  <Text style={styles.logo}>Quark</Text>

  <View style={styles.searchBar}>
    <TextInput
      style={styles.searchInput}
      placeholder=""
      placeholderTextColor="#666"
    />
    <TouchableOpacity style={styles.searchIcon}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.searchIcon}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>

  <View style={styles.quickAccessContainer}>
    {renderQuickAccessButton('../assets/snack-icon.png', '夸克日报', () => navigation.navigate('夸克日报'))}
    {renderQuickAccessButton('../assets/snack-icon.png', '精选', () => navigation.navigate('精选'))}
    {renderQuickAccessButton('../assets/snack-icon.png', '夸克学习', () => {})}
    {renderQuickAccessButton('../assets/snack-icon.png', '夸克扫描王', () => navigation.navigate('夸克扫描王'))}
    {renderQuickAccessButton('../assets/snack-icon.png', '夸克网盘', () => navigation.navigate('夸克网盘'))}
    {renderQuickAccessButton('../assets/snack-icon.png', '夸克文档', () => {})}
    {renderQuickAccessButton('../assets/snack-icon.png', '更多', () => {})}
    {renderQuickAccessButton('../assets/snack-icon.png', '省钱集市', () => {})}
    {renderQuickAccessButton('../assets/snack-icon.png', 'AI工具', () => {})}
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
paddingTop: 40,
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
},
time: {
color: '#fff',
fontSize: 16,
},
statusIcons: {
flexDirection: 'row',
},
statusIcon: {
width: 20,
height: 20,
marginLeft: 5,
},
batteryIcon: {
width: 30,
height: 20,
marginLeft: 5,
},
logo: {
color: '#fff',
fontSize: 36,
fontWeight: 'bold',
textAlign: 'center',
marginVertical: 40,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#333',
borderRadius: 20,
marginHorizontal: 20,
paddingHorizontal: 15,
height: 40,
},
searchInput: {
flex: 1,
color: '#fff',
},
searchIcon: {
padding: 5,
},
icon: {
width: 20,
height: 20,
tintColor: '#fff',
},
quickAccessContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
marginTop: 40,
},
quickAccessButton: {
alignItems: 'center',
width: '20%',
marginBottom: 20,
},
quickAccessIcon: {
width: 50,
height: 50,
borderRadius: 25,
},
quickAccessLabel: {
color: '#fff',
marginTop: 5,
fontSize: 12,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
height: 60,
backgroundColor: '#222',
},
navButton: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
tintColor: '#fff',
},
});
export default HomePage;