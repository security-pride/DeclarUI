import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchCategoryScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const [showTotalPrice, setShowTotalPrice] = useState(false);
const handleCategoryPress = (category) => {
navigation.navigate('Search', { category });
};
const handleListingPress = () => {
navigation.navigate('Details');
};
const handleFilterPress = () => {
// Implement filter functionality
};
const handleMapPress = () => {
// Implement map view functionality
};
return (
<View style={styles.container}>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="任何地方" value={searchQuery} onChangeText={setSearchQuery} />
<Text style={styles.filterText}>添加日期</Text>
<Text style={styles.filterText}>添加人数</Text>
<TouchableOpacity onPress={handleFilterPress} style={styles.filterButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />
</TouchableOpacity>
</View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
    <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress('海景民宿')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>海景民宿</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress('魅力泳池')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>魅力泳池</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress('湖区')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>湖区</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress('近滑雪场')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>近滑雪场</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress('OMG妙')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>OMG妙</Text>
    </TouchableOpacity>
  </ScrollView>

  <View style={styles.toggleContainer}>
    <Text style={styles.toggleText}>显示总价</Text>
    <Text style={styles.toggleSubtext}>税前价格，包含所有费用</Text>
    <Switch
      value={showTotalPrice}
      onValueChange={setShowTotalPrice}
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={showTotalPrice ? "#f5dd4b" : "#f4f3f4"}
    />
  </View>

  <ScrollView style={styles.listingsContainer}>
    <TouchableOpacity style={styles.listingCard} onPress={handleListingPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.listingImage} />
      <View style={styles.listingBadge}>
        <Text style={styles.badgeText}>房客推荐</Text>
      </View>
      <TouchableOpacity style={styles.heartButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
      </TouchableOpacity>
      <View style={styles.listingInfo}>
        <Text style={styles.listingLocation}>英国 多塞特(Dorset)</Text>
        <Text style={styles.listingName}>Man O'War海滩</Text>
        <Text style={styles.listingDate}>9月2日至7日</Text>
        <Text style={styles.listingPrice}>¥2,424 /晚</Text>
        <View style={styles.listingRating}>
          <Text style={styles.ratingText}>4.8</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
        </View>
      </View>
    </TouchableOpacity>
  </ScrollView>

  <TouchableOpacity style={styles.mapButton} onPress={handleMapPress}>
    <Text style={styles.mapButtonText}>地图</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.mapIcon} />
  </TouchableOpacity>

  <View style={styles.bottomNavigation}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>探索</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>心愿单</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>行程</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的</Text>
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
padding: 10,
backgroundColor: '#f2f2f2',
borderRadius: 25,
margin: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
},
filterText: {
marginLeft: 10,
color: '#666',
},
filterButton: {
padding: 5,
},
filterIcon: {
width: 20,
height: 20,
},
categoriesContainer: {
paddingVertical: 10,
},
category: {
alignItems: 'center',
marginHorizontal: 15,
},
categoryIcon: {
width: 40,
height: 40,
},
categoryText: {
marginTop: 5,
},
toggleContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 10,
backgroundColor: '#f8f8f8',
},
toggleText: {
fontWeight: 'bold',
},
toggleSubtext: {
fontSize: 12,
color: '#666',
},
listingsContainer: {
flex: 1,
},
listingCard: {
margin: 10,
borderRadius: 10,
overflow: 'hidden',
},
listingImage: {
width: '100%',
height: 200,
},
listingBadge: {
position: 'absolute',
top: 10,
left: 10,
backgroundColor: 'white',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
},
badgeText: {
fontWeight: 'bold',
},
heartButton: {
position: 'absolute',
top: 10,
right: 10,
},
heartIcon: {
width: 24,
height: 24,
},
listingInfo: {
padding: 10,
},
listingLocation: {
fontSize: 14,
fontWeight: 'bold',
},
listingName: {
fontSize: 16,
},
listingDate: {
fontSize: 14,
color: '#666',
},
listingPrice: {
fontSize: 16,
fontWeight: 'bold',
},
listingRating: {
flexDirection: 'row',
alignItems: 'center',
},
ratingText: {
marginRight: 5,
},
starIcon: {
width: 16,
height: 16,
},
mapButton: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#000',
padding: 10,
borderRadius: 20,
position: 'absolute',
bottom: 70,
alignSelf: 'center',
},
mapButtonText: {
color: '#fff',
fontWeight: 'bold',
marginRight: 5,
},
mapIcon: {
width: 16,
height: 16,
tintColor: '#fff',
},
bottomNavigation: {
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
},
navText: {
fontSize: 12,
marginTop: 5,
},
});
export default SearchCategoryScreen;