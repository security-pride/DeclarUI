import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const handleGasStationPress = () => {
navigation.navigate('GasInformation');
};
const handleTrainTicketPress = () => {
navigation.navigate('TicketService');
};
const renderQuickAccessButton = (name, icon) => (
<TouchableOpacity style={styles.quickAccessButton}>
<Image source={{ uri: ../assets/${icon}.png }} style={styles.icon} />
<Text style={styles.buttonText}>{name}</Text>
</TouchableOpacity>
);
const renderBottomToolbarButton = (name, icon) => (
<TouchableOpacity
style={styles.toolbarButton}
onPress={name === '优惠加油' ? handleGasStationPress : name === '火车票机票' ? handleTrainTicketPress : null}
>
<Image source={{ uri: ../assets/${icon}.png }} style={styles.icon} />
<Text style={styles.buttonText}>{name}</Text>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.searchBar}>
<Image source={{ uri: '../assets/search-icon.png' }} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="查找地点、公交、地铁" value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity>
<Image source={{ uri: '../assets/mic-icon.png' }} style={styles.micIcon} />
</TouchableOpacity>
</View>
  <ScrollView style={styles.mapContainer}>
    <Image source={{ uri: '../assets/map.png' }} style={styles.map} />
    <Text style={styles.mapLabel}>高德地图</Text>
    <Text style={styles.locationLabel}>虹口大酒店</Text>
    <Text style={styles.locationLabel}>虹口大厦</Text>
    <Text style={styles.locationLabel}>中国农业银行</Text>
    <Text style={styles.locationLabel}>航院社区</Text>
    <Text style={styles.locationLabel}>高德地图特殊教育学校</Text>
  </ScrollView>

  <View style={styles.quickAccessContainer}>
    {renderQuickAccessButton('回家', 'home-icon')}
    {renderQuickAccessButton('去单位', 'work-icon')}
  </View>

  <ScrollView horizontal style={styles.bottomToolbar}>
    {renderBottomToolbarButton('驾车', 'car-icon')}
    {renderBottomToolbarButton('公交', 'bus-icon')}
    {renderBottomToolbarButton('优惠加油', 'gas-icon')}
    {renderBottomToolbarButton('打车', 'taxi-icon')}
    {renderBottomToolbarButton('订酒店', 'hotel-icon')}
    {renderBottomToolbarButton('火车票机票', 'ticket-icon')}
    {renderBottomToolbarButton('代驾', 'steering-wheel-icon')}
    {renderBottomToolbarButton('步行', 'walking-icon')}
    {renderBottomToolbarButton('实时公交', 'bus-clock-icon')}
    {renderBottomToolbarButton('更多工具', 'more-icon')}
  </ScrollView>

  <View style={styles.bottomNavigation}>
    <TouchableOpacity style={styles.navButton}>
      <Image source={{ uri: '../assets/home-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={{ uri: '../assets/nearby-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>附近</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={{ uri: '../assets/message-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={{ uri: '../assets/taxi-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>打车</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={{ uri: '../assets/profile-icon.png' }} style={styles.navIcon} />
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
backgroundColor: '#f0f0f0',
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
backgroundColor: '#fff',
borderRadius: 20,
paddingHorizontal: 10,
},
micIcon: {
width: 20,
height: 20,
marginLeft: 10,
},
mapContainer: {
flex: 1,
},
map: {
width: '100%',
height: '100%',
},
mapLabel: {
position: 'absolute',
top: 10,
left: 10,
backgroundColor: 'rgba(255, 255, 255, 0.7)',
padding: 5,
borderRadius: 5,
},
locationLabel: {
position: 'absolute',
backgroundColor: 'rgba(255, 255, 255, 0.7)',
padding: 5,
borderRadius: 5,
},
quickAccessContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
},
quickAccessButton: {
alignItems: 'center',
},
bottomToolbar: {
flexDirection: 'row',
backgroundColor: '#f0f0f0',
paddingVertical: 10,
},
toolbarButton: {
alignItems: 'center',
marginHorizontal: 10,
},
icon: {
width: 24,
height: 24,
marginBottom: 5,
},
buttonText: {
fontSize: 12,
},
bottomNavigation: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
navButton: {
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
export default Home;