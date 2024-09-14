import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Travel = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const navigateToHome = () => {
navigation.navigate('Home');
};
const navigateToGroupTravel = () => {
navigation.navigate('GroupTravel');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToHome}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<View style={styles.tabContainer}>
<TouchableOpacity style={styles.activeTab}>
<Text style={styles.activeTabText}>精选</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.tab}>
<Text>国内游</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.tab}>
<Text>出境游</Text>
</TouchableOpacity>
</View>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.messageIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <View style={styles.searchBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="烟台出发"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <TouchableOpacity style={styles.searchButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.destinationButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.destinationIcon} />
      <Text>目的地</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.visaSection}>
    <Text style={styles.sectionTitle}>免签落地签:</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.visaItem}>
        <Text>泰国</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.visaItem}>
        <Text>新加坡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.visaItem}>
        <Text>马尔代夫</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.visaItem}>
        <Text>马来西亚</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.visaItem}>
        <Text>巴厘</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>

  <View style={styles.categoryGrid}>
    <TouchableOpacity style={styles.categoryItem} onPress={navigateToGroupTravel}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>跟团游</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>私家团</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>当地参团</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>邮轮</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.categoryItem, styles.highlighted]}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>自由行</Text>
      <Text style={styles.promotionText}>暑期大促</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>定制旅行</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>包车游</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>一日游</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>门票·玩乐</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.subCategorySection}>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Text>高端游</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Text>亲子游</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Text>公司团建</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Text>老友精选</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Text>周边</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Text>更多玩法 ></Text>
    </TouchableOpacity>
  </View>

  <Image source={require('../assets/snack-icon.png')} style={styles.banner} />

  <View style={styles.nearbyStores}>
    <Image source={require('../assets/snack-icon.png')} style={styles.storeIcon} />
    <Text>附近有3家携程门店</Text>
    <TouchableOpacity>
      <Text style={styles.moreLink}>最近距您3.5km ></Text>
    </TouchableOpacity>
  </View>

  <View style={styles.destinationSection}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>国内游</Text>
      <TouchableOpacity>
        <Text style={styles.moreLink}>更多 ></Text>
      </TouchableOpacity>
    </View>
    <View style={styles.destinationGrid}>
      <TouchableOpacity style={styles.destinationItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.destinationImage} />
        <Text>烟台</Text>
        <Text>莲莱阁</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.destinationItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.destinationImage} />
        <Text>新疆</Text>
        <Text>探访我的阿勒泰</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.destinationItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.destinationImage} />
        <Text>威海</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.destinationItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.destinationImage} />
        <Text>山东</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.destinationSection}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>出境游</Text>
      <TouchableOpacity>
        <Text style={styles.moreLink}>更多 ></Text>
      </TouchableOpacity>
    </View>
    <View style={styles.destinationGrid}>
      <TouchableOpacity style={styles.destinationItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.destinationImage} />
        <Text>日本</Text>
        <Text>东京</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.destinationItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.destinationImage} />
        <Text>韩国</Text>
        <Text>首尔</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.destinationItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.destinationImage} />
        <Text>仙本那</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.destinationItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.destinationImage} />
        <Text>泰国</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.bottomNavBar}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>旅游首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>目的地</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>浏览历史</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>我的收藏</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>我的订单</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: 'white',
},
backIcon: {
width: 24,
height: 24,
},
tabContainer: {
flexDirection: 'row',
flex: 1,
justifyContent: 'center',
},
tab: {
paddingHorizontal: 15,
paddingVertical: 5,
},
activeTab: {
backgroundColor: '#007AFF',
borderRadius: 15,
paddingHorizontal: 15,
paddingVertical: 5,
},
activeTabText: {
color: 'white',
},
messageIcon: {
width: 24,
height: 24,
marginHorizontal: 10,
},
moreIcon: {
width: 24,
height: 24,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'white',
margin: 10,
borderRadius: 20,
padding: 5,
},
locationIcon: {
width: 20,
height: 20,
marginRight: 5,
},
searchInput: {
flex: 1,
},
searchButton: {
padding: 5,
},
searchIcon: {
width: 20,
height: 20,
},
destinationButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 15,
paddingHorizontal: 10,
paddingVertical: 5,
marginLeft: 10,
},
destinationIcon: {
width: 20,
height: 20,
marginRight: 5,
},
visaSection: {
backgroundColor: 'white',
padding: 10,
},
sectionTitle: {
fontWeight: 'bold',
marginBottom: 10,
},
visaItem: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
marginRight: 10,
},
categoryGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
backgroundColor: 'white',
padding: 10,
},
categoryItem: {
width: '25%',
alignItems: 'center',
marginBottom: 15,
},
categoryIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
highlighted: {
backgroundColor: '#FFF5E6',
borderRadius: 10,
padding: 5,
},
promotionText: {
color: '#FF6600',
fontSize: 12,
},
subCategorySection: {
flexDirection: 'row',
flexWrap: 'wrap',
backgroundColor: 'white',
padding: 10,
marginTop: 10,
},
subCategoryItem: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
marginRight: 10,
marginBottom: 10,
},
banner: {
width: '100%',
height: 150,
resizeMode: 'cover',
},
nearbyStores: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'white',
padding: 10,
marginTop: 10,
},
storeIcon: {
width: 24,
height: 24,
marginRight: 10,
},
moreLink: {
color: '#007AFF',
marginLeft: 10,
},
destinationSection: {
backgroundColor: 'white',
padding: 10,
marginTop: 10,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
destinationGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
},
destinationItem: {
width: '