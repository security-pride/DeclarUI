import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
return (
<View style={styles.container}>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="搜索任何物品" value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.cartIcon} />
</TouchableOpacity>
</View>
  <View style={styles.tabContainer}>
    <TouchableOpacity style={styles.activeTab}>
      <Text style={styles.activeTabText}>最近</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>已保存</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.emptyStateContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.magnifyingGlassIcon} />
    <Text style={styles.emptyStateTitle}>搜索 eBay</Text>
    <Text style={styles.emptyStateDescription}>发现下一件您最喜爱的物品。</Text>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>主页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的 eBay</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>搜索</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>通知</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>出售物品</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f2f2f2',
borderRadius: 8,
margin: 10,
paddingHorizontal: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
},
cameraIcon: {
width: 20,
height: 20,
marginLeft: 10,
},
cartIcon: {
width: 20,
height: 20,
marginLeft: 10,
},
tabContainer: {
flexDirection: 'row',
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
tab: {
flex: 1,
paddingVertical: 10,
alignItems: 'center',
},
activeTab: {
flex: 1,
paddingVertical: 10,
alignItems: 'center',
borderBottomWidth: 2,
borderBottomColor: '#0000FF',
},
tabText: {
color: '#888',
},
activeTabText: {
color: '#0000FF',
fontWeight: 'bold',
},
emptyStateContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
magnifyingGlassIcon: {
width: 100,
height: 100,
marginBottom: 20,
},
emptyStateTitle: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
emptyStateDescription: {
fontSize: 16,
color: '#888',
textAlign: 'center',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default SearchScreen;