import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Tickets = () => {
const [searchText, setSearchText] = useState('三周年');
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>淘票票大麦</Text>
<TouchableOpacity style={styles.headerButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
<TouchableOpacity style={styles.headerButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
</View>
  <View style={styles.searchBar}>
    <Text>烟台 ></Text>
    <View style={styles.searchInputContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="搜索"
      />
    </View>
    <TouchableOpacity style={styles.searchButton}>
      <Text style={styles.searchButtonText}>搜索</Text>
    </TouchableOpacity>
  </View>

  <ScrollView>
    <ImageBackground source={require('../assets/snack-icon.png')} style={styles.promotionBanner}>
      <Text style={styles.promotionText}>淘麦VIP电影演出优等生</Text>
      <Text style={styles.promotionSubText}>暑期超级夏令营！</Text>
      <Text style={styles.promotionPriceText}>19.9元起优惠购票</Text>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>立即加入</Text>
      </TouchableOpacity>
    </ImageBackground>

    <View style={styles.categories}>
      <CategoryItem icon={require('../assets/snack-icon.png')} label="电影/影院" />
      <CategoryItem icon={require('../assets/snack-icon.png')} label="脱口秀" />
      <CategoryItem icon={require('../assets/snack-icon.png')} label="展览休闲" />
      <CategoryItem icon={require('../assets/snack-icon.png')} label="剧场演出" />
      <CategoryItem icon={require('../assets/snack-icon.png')} label="音乐现场" />
    </View>

    <View style={styles.movieSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>热映影片</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>全部 ></Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MovieItem 
          image={require('../assets/snack-icon.png')}
          title="神偷奶爸4"
          rating="9.2"
          format="IMAX 2D"
        />
        <MovieItem 
          image={require('../assets/snack-icon.png')}
          title="抓娃娃"
          rating="9.5"
          format="IMAX 2D"
        />
        <MovieItem 
          image={require('../assets/snack-icon.png')}
          title="默杀"
          rating="9.3"
          format="IMAX 2D"
        />
        <MovieItem 
          image={require('../assets/snack-icon.png')}
          title="落凡尘"
          rating="9.5"
          format="中国巨幕 2D"
        />
      </ScrollView>
    </View>

    <View style={styles.movieSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>即将上映</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>全部 ></Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MovieItem 
          image={require('../assets/snack-icon.png')}
          title="《封神》导演"
          format="IMAX 2D"
        />
        <MovieItem 
          image={require('../assets/snack-icon.png')}
          title="新片1"
          format="IMAX 2D"
        />
        <MovieItem 
          image={require('../assets/snack-icon.png')}
          title="新片2"
          format="IMAX 2D"
        />
      </ScrollView>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>想看</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>会员</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>票夹</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const CategoryItem = ({ icon, label }) => (
<View style={styles.categoryItem}>
<Image source={icon} style={styles.categoryIcon} />
<Text style={styles.categoryLabel}>{label}</Text>
</View>
);
const MovieItem = ({ image, title, rating, format }) => (
<View style={styles.movieItem}>
<Image source={image} style={styles.movieImage} />
<Text style={styles.movieFormat}>{format}</Text>
<Text style={styles.movieTitle}>{title}</Text>
{rating && <Text style={styles.movieRating}>评分 {rating}</Text>}
<TouchableOpacity style={styles.buyButton}>
<Text style={styles.buyButtonText}>购票</Text>
</TouchableOpacity>
</View>
);
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#1e90ff',
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
color: 'white',
},
headerButton: {
padding: 5,
},
headerIcon: {
width: 24,
height: 24,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: 'white',
},
searchInputContainer: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 20,
marginHorizontal: 10,
paddingHorizontal: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 5,
},
searchInput: {
flex: 1,
height: 40,
},
searchButton: {
backgroundColor: '#1e90ff',
paddingHorizontal: 15,
paddingVertical: 8,
borderRadius: 20,
},
searchButtonText: {
color: 'white',
},
promotionBanner: {
height: 200,
justifyContent: 'center',
alignItems: 'center',
padding: 20,
},
promotionText: {
fontSize: 18,
fontWeight: 'bold',
color: 'white',
marginBottom: 5,
},
promotionSubText: {
fontSize: 16,
color: 'white',
marginBottom: 5,
},
promotionPriceText: {
fontSize: 14,
color: 'white',
marginBottom: 10,
},
joinButton: {
backgroundColor: 'orange',
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 20,
},
joinButtonText: {
color: 'white',
fontWeight: 'bold',
},
categories: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 15,
backgroundColor: 'white',
},
categoryItem: {
alignItems: 'center',
},
categoryIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
categoryLabel: {
fontSize: 12,
},
movieSection: {
marginTop: 15,
backgroundColor: 'white',
padding: 15,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
},
seeAllText: {
color: '#888',
},
movieItem: {
width: 120,
marginRight: 15,
},
movieImage: {
width: 120,
height: 160,
borderRadius: 5,
},
movieFormat: {
position: 'absolute',
top: 5,
left: 5,
backgroundColor: 'rgba(0,0,0,0.5)',
color: 'white',
padding: 2,
borderRadius: 3,
fontSize: 10,
},
movieTitle: {
marginTop: 5,
fontSize: 14,
fontWeight: 'bold',
},
movieRating: {
fontSize: 12,
color: '#ff9900',
marginTop: 2,
},
buyButton: {
backgroundColor: '#ff4d4f',
borderRadius: 15,
paddingVertical: 5,
marginTop: 5,
alignItems: 'center',
},
buyButtonText: {
color: 'white',
fontSize: 12,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
backgroundColor: 'white',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
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
export default Tickets;