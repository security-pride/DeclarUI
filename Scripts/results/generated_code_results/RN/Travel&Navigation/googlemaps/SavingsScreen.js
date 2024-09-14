import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SavingsScreen = () => {
const navigation = useNavigation();
const savedItems = [
{ id: '1', name: '收藏的地点', icon: 'heart', count: 0, visibility: '不公开列表' },
{ id: '2', name: '想去的地点', icon: 'flag', count: 0, visibility: '不公开列表' },
{ id: '3', name: '旅行计划', icon: 'suitcase', count: 0, visibility: '不公开列表' },
{ id: '4', name: '已加标签', icon: 'tag', count: 0, visibility: '不公开列表' },
{ id: '5', name: '已加星标的地点', icon: 'star', count: 0, visibility: '不公开列表' },
];
const additionalOptions = ['时间轴', '已关注', '地图'];
const renderSavedItem = ({ item }) => (
<TouchableOpacity style={styles.savedItem}>
<Image source={{ uri: ../assets/${item.icon}.png }} style={styles.icon} />
<View style={styles.itemTextContainer}>
<Text style={styles.itemName}>{item.name}</Text>
<Text style={styles.itemDetails}>{item.visibility} · {item.count} 个地点</Text>
</View>
<TouchableOpacity style={styles.moreButton}>
<Image source={{ uri: '../assets/more.png' }} style={styles.moreIcon} />
</TouchableOpacity>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<Text style={styles.title}>已保存</Text>
  <TouchableOpacity style={styles.newListButton}>
    <Text style={styles.newListButtonText}>+ 新建列表</Text>
  </TouchableOpacity>

  <FlatList
    data={savedItems}
    renderItem={renderSavedItem}
    keyExtractor={item => item.id}
    style={styles.list}
  />

  <View style={styles.additionalOptionsContainer}>
    {additionalOptions.map((option, index) => (
      <TouchableOpacity key={index} style={styles.additionalOption}>
        <Image source={{ uri: `../assets/${option}.png` }} style={styles.optionIcon} />
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <Text style={styles.findMoreText}>查找更多您在 Google 上保存的项目</Text>

  <TouchableOpacity style={styles.viewCollectionButton}>
    <Text style={styles.viewCollectionButtonText}>查看您的集合</Text>
  </TouchableOpacity>

  <View style={styles.bottomNavigation}>
    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
      <Image source={{ uri: '../assets/explore.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>探索</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Destination')}>
      <Image source={{ uri: '../assets/travel.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>出行</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/saved.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>已保存</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Contributions')}>
      <Image source={{ uri: '../assets/contribute.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>贡献</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/updates.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>最新动态</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 16,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 16,
},
newListButton: {
backgroundColor: '#e8f0fe',
padding: 12,
borderRadius: 20,
alignItems: 'center',
marginBottom: 16,
},
newListButtonText: {
color: '#1a73e8',
fontWeight: 'bold',
},
list: {
flex: 1,
},
savedItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 12,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
icon: {
width: 24,
height: 24,
marginRight: 16,
},
itemTextContainer: {
flex: 1,
},
itemName: {
fontSize: 16,
fontWeight: 'bold',
},
itemDetails: {
fontSize: 14,
color: '#5f6368',
},
moreButton: {
padding: 8,
},
moreIcon: {
width: 16,
height: 16,
},
additionalOptionsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginVertical: 16,
},
additionalOption: {
alignItems: 'center',
},
optionIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
optionText: {
fontSize: 12,
color: '#1a73e8',
},
findMoreText: {
textAlign: 'center',
marginBottom: 16,
},
viewCollectionButton: {
backgroundColor: '#1a73e8',
padding: 12,
borderRadius: 20,
alignItems: 'center',
},
viewCollectionButtonText: {
color: '#fff',
fontWeight: 'bold',
},
bottomNavigation: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 8,
},
navIcon: {
width: 24,
height: 24,
alignSelf: 'center',
},
navText: {
fontSize: 12,
textAlign: 'center',
},
});
export default SavingsScreen;