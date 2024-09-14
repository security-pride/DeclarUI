import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const NewsScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const [selectedTab, setSelectedTab] = useState('For You');
const newsCategories = ['For You', 'Local', 'Top Stories', 'US'];
const newsItems = [
{
id: '1',
source: 'The Associated Press',
time: '4h',
title: 'Argentina wins record 16th Copa America title, beats Colombia 1-0 after Messi gets hurt',
likes: 178,
dislikes: 47,
comments: 9,
image: require('../assets/snack-icon.png'),
},
{
id: '2',
source: 'Athlon Sports',
time: '11h',
title: 'Caitlin Clark Goes Viral for Dropping Player to Floor in Fever-Lynx',
likes: 73,
dislikes: 29,
comments: 3,
image: require('../assets/snack-icon.png'),
},
{
id: '3',
source: 'Southern Living',
time: '6d',
title: 'This 740-Square-Foot Bungalow Proves Just The Right Fit For A Family Of Seven',
likes: 18,
dislikes: 5,
comments: 1,
image: require('../assets/snack-icon.png'),
},
{
id: '4',
source: 'Moneywise',
time: '22h',
title: 'How big is the average Social Security check of a middle-class retiree?',
likes: 113,
dislikes: 86,
comments: 64,
image: require('../assets/snack-icon.png'),
},
];
const renderNewsItem = ({ item }) => (
<View style={styles.newsItem}>
<View style={styles.newsContent}>
<Text style={styles.newsSource}>{item.source} · {item.time}</Text>
<Text style={styles.newsTitle}>{item.title}</Text>
<View style={styles.newsActions}>
<TouchableOpacity style={styles.actionButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
<Text>{item.likes}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.actionButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
<Text>{item.dislikes}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.actionButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
<Text>{item.comments}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.moreButton}>
<Text>...</Text>
</TouchableOpacity>
</View>
</View>
<Image source={item.image} style={styles.newsImage} />
</View>
);
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<View style={styles.searchBar}>
<TextInput style={styles.searchInput} placeholder="Search news" value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.micIcon} />
</TouchableOpacity>
</View>
<TouchableOpacity>
<Text style={styles.moreIcon}>•••</Text>
</TouchableOpacity>
</View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
    <TouchableOpacity style={styles.menuButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
    </TouchableOpacity>
    {newsCategories.map((category) => (
      <TouchableOpacity
        key={category}
        style={[
          styles.tabButton,
          selectedTab === category && styles.selectedTabButton,
        ]}
        onPress={() => setSelectedTab(category)}
      >
        <Text
          style={[
            styles.tabButtonText,
            selectedTab === category && styles.selectedTabButtonText,
          ]}
        >
          {category}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <Text style={styles.headlinesTitle}>Headlines</Text>

  <FlatList
    data={newsItems}
    renderItem={renderNewsItem}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
  />

  <TouchableOpacity style={styles.seeMoreButton}>
    <Text style={styles.seeMoreText}>See more</Text>
  </TouchableOpacity>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Weather')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Weather</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Chat</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tabs')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Tabs</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>4</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Apps')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Apps</Text>
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
padding: 10,
},
backIcon: {
width: 24,
height: 24,
},
searchBar: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#FFFFFF',
borderRadius: 20,
marginHorizontal: 10,
paddingHorizontal: 10,
},
searchInput: {
flex: 1,
height: 40,
},
micIcon: {
width: 20,
height: 20,
},
moreIcon: {
fontSize: 20,
},
tabBar: {
flexDirection: 'row',
paddingVertical: 10,
},
menuButton: {
paddingHorizontal: 15,
},
menuIcon: {
width: 24,
height: 24,
},
tabButton: {
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
},
selectedTabButton: {
backgroundColor: '#4285F4',
},
tabButtonText: {
color: '#000000',
},
selectedTabButtonText: {
color: '#FFFFFF',
},
headlinesTitle: {
fontSize: 24,
fontWeight: 'bold',
padding: 15,
},
newsItem: {
flexDirection: 'row',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
newsContent: {
flex: 1,
marginRight: 10,
},
newsSource: {
fontSize: 12,
color: '#666666',
},
newsTitle: {
fontSize: 16,
fontWeight: 'bold',
marginVertical: 5,
},
newsActions: {
flexDirection: 'row',
alignItems: 'center',
},
actionButton: {
flexDirection: 'row',
alignItems: 'center',
marginRight: 15,
},
actionIcon: {
width: 16,
height: 16,
marginRight: 5,
},
moreButton: {
marginLeft: 'auto',
},
newsImage: {
width: 100,
height: 100,
borderRadius: 10,
},
seeMoreButton: {
alignItems: 'center',
padding: 15,
},
seeMoreText: {
color: '#4285F4',
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
badge: {
position: 'absolute',
top: -5,
right: -5,
backgroundColor: 'red',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
badgeText: {
color: 'white',
fontSize: 12,
},
});
export default NewsScreen;