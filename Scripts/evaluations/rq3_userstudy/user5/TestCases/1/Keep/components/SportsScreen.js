import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SportsScreen = () => {
const navigation = useNavigation();
const [selectedRunType, setSelectedRunType] = useState('轻松跑');
const handleCustomize = () => {
navigation.navigate('SearchSports');
// Handle customization logic
};
const handleRefresh = () => {
// Handle refresh logic
};
const handleGoPress = () => {
// Handle GO button press
};
const handleRoutePress = () => {
// Handle route button press
};
const handleShoesPress = () => {
// Handle shoes button press
};
const handleBottomNavPress = (screenName) => {
navigation.navigate(screenName);
};
return (
<View style={styles.container}>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.logo}>
<Text style={styles.headerText}>为你推荐更适合的跑步方式</Text>
<TouchableOpacity style={styles.customizeButton} onPress={handleCustomize}>
<Text style={styles.customizeButtonText}>开始定制 💡</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
<Image source={require('../assets/snack-icon.png')} style={styles.refreshIcon} />
</TouchableOpacity>
</ImageBackground>
  <View style={styles.contentContainer}>
    <Text style={styles.coachText}>Hi~ 我是你的轻松跑教练</Text>
    <Text style={styles.distanceText}>帮你轻松面对 3 公里</Text>
    <View style={styles.tagsContainer}>
      <Text style={styles.tag}>#高效减脂</Text>
      <Text style={styles.tag}>#不窒气</Text>
      <Text style={styles.tag}>#轻松跑更远</Text>
    </View>
    <View style={styles.freeTrialContainer}>
      <Text style={styles.freeTrialText}>限时免费，剩余 3 次 ></Text>
    </View>
  </View>

  <ScrollView horizontal style={styles.runTypesContainer}>
    {['目标跑', '自由跑', '轻松跑', '课程跑', '自定义'].map((type) => (
      <TouchableOpacity
        key={type}
        style={[styles.runTypeButton, selectedRunType === type && styles.selectedRunType]}
        onPress={() => setSelectedRunType(type)}
      >
        <Text style={[styles.runTypeText, selectedRunType === type && styles.selectedRunTypeText]}>{type}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <View style={styles.actionButtonsContainer}>
    <TouchableOpacity style={styles.actionButton} onPress={handleRoutePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
      <Text style={styles.actionText}>路线</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.goButton} onPress={handleGoPress}>
      <Text style={styles.goButtonText}>GO</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton} onPress={handleShoesPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
      <Text style={styles.actionText}>跑鞋</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    {['运动日历', '户外跑步', '户外行走', '跳绳'].map((item) => (
      <TouchableOpacity
        key={item}
        style={styles.bottomNavItem}
        onPress={() => handleBottomNavPress(item)}
      >
        <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
        <Text style={styles.bottomNavText}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
logo: {
height: 200,
justifyContent: 'flex-end',
padding: 20,
},
headerText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
customizeButton: {
position: 'absolute',
top: 20,
right: 20,
backgroundColor: 'rgba(255,255,255,0.3)',
padding: 10,
borderRadius: 20,
},
customizeButtonText: {
color: '#fff',
},
refreshButton: {
position: 'absolute',
top: 20,
left: 20,
},
refreshIcon: {
width: 24,
height: 24,
},
contentContainer: {
padding: 20,
},
coachText: {
fontSize: 24,
fontWeight: 'bold',
},
distanceText: {
fontSize: 18,
marginTop: 10,
},
tagsContainer: {
flexDirection: 'row',
marginTop: 10,
},
tag: {
backgroundColor: '#f0f0f0',
padding: 5,
borderRadius: 10,
marginRight: 10,
},
freeTrialContainer: {
marginTop: 20,
},
freeTrialText: {
color: '#666',
},
runTypesContainer: {
flexDirection: 'row',
marginTop: 20,
},
runTypeButton: {
padding: 10,
marginRight: 10,
},
selectedRunType: {
borderBottomWidth: 2,
borderBottomColor: '#4CAF50',
},
runTypeText: {
fontSize: 16,
},
selectedRunTypeText: {
color: '#4CAF50',
},
actionButtonsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
marginTop: 20,
paddingHorizontal: 20,
},
actionButton: {
alignItems: 'center',
},
actionIcon: {
width: 40,
height: 40,
},
actionText: {
marginTop: 5,
},
goButton: {
backgroundColor: '#4CAF50',
width: 80,
height: 80,
borderRadius: 40,
justifyContent: 'center',
alignItems: 'center',
},
goButtonText: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
bottomNavItem: {
alignItems: 'center',
},
bottomNavIcon: {
width: 24,
height: 24,
},
bottomNavText: {
fontSize: 12,
marginTop: 5,
},
});
export default SportsScreen;