import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const handleCategoryPress = (category) => {
navigation.navigate('SearchCategory', { category });
};
const handleListingPress = () => {
navigation.navigate('Details');
};
return (
<View style={styles.container}>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="任何地方" value={searchQuery} onChangeText={setSearchQuery} />
<Text style={styles.filterText}>添加日期</Text>
<Text style={styles.filterText}>添加人数</Text>
</View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
    <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress('王牌')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>王牌</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress('小木屋')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>小木屋</Text>
    </TouchableOpacity>
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
  </ScrollView>

  <ScrollView style={styles.listingsContainer}>
    <TouchableOpacity style={styles.listingCard} onPress={handleListingPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.listingImage} />
      <View style={styles.carouselIndicator}>
        {[0, 1, 2, 3, 4].map((_, index) => (
          <View key={index} style={[styles.indicatorDot, index === 0 && styles.activeDot]} />
        ))}
      </View>
      <TouchableOpacity style={styles.uploadButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.uploadIcon} />
      </TouchableOpacity>
      <View style={styles.listingInfo}>
        <Text style={styles.listingTitle}>在 X 学院参加训练</Text>
        <Text style={styles.listingHost}>房东：Jubilee</Text>
        <Text style={styles.listingStatus}>预订通道已关闭</Text>
      </View>
    </TouchableOpacity>
  </ScrollView>

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
carouselIndicator: {
flexDirection: 'row',
position: 'absolute',
bottom: 10,
alignSelf: 'center',
},
indicatorDot: {
width: 6,
height: 6,
borderRadius: 3,
backgroundColor: '#fff',
marginHorizontal: 3,
},
activeDot: {
backgroundColor: '#000',
},
uploadButton: {
position: 'absolute',
top: 10,
right: 10,
backgroundColor: 'rgba(255, 255, 255, 0.7)',
borderRadius: 15,
padding: 5,
},
uploadIcon: {
width: 20,
height: 20,
},
listingInfo: {
padding: 10,
},
listingTitle: {
fontSize: 16,
fontWeight: 'bold',
},
listingHost: {
fontSize: 14,
color: '#666',
},
listingStatus: {
fontSize: 14,
color: '#ff4d4f',
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
export default SearchScreen;