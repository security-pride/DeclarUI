import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ContributionsScreen = () => {
const navigation = useNavigation();
const [userInfo, setUserInfo] = useState({
name: 'muyi Li',
reviewCount: 1,
});
const contributionOptions = [
{ name: '添加地点', icon: 'plus-location' },
{ name: '更新地点', icon: 'edit-location' },
{ name: '添加评价', icon: 'edit-review' },
{ name: '添加照片', icon: 'add-photo' },
{ name: '更新道路', icon: 'edit-road' },
{ name: '更新地址', icon: 'edit-address' },
];
const achievementTasks = [
{ name: '发布 2 张照片', progress: '0/2' },
{ name: '撰写 2 条评价', progress: '1/2' },
{ name: '回答 2 个问题', progress: '0/2' },
];
const renderContributionOption = (option) => (
<TouchableOpacity key={option.name} style={styles.contributionOption}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.optionIcon} />
<Text style={styles.optionText}>{option.name}</Text>
</TouchableOpacity>
);
const renderAchievementTask = (task) => (
<View key={task.name} style={styles.taskItem}>
<Text style={styles.taskText}>{task.name}</Text>
<Text style={styles.taskProgress}>{task.progress}</Text>
</View>
);
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />
<View style={styles.userInfo}>
<Text style={styles.userName}>{userInfo.name}</Text>
<Text style={styles.reviewCount}>{userInfo.reviewCount} 条评价</Text>
</View>
</View>
  <Text style={styles.sectionTitle}>贡献</Text>

  <View style={styles.contributionOptionsContainer}>
    {contributionOptions.map(renderContributionOption)}
  </View>

  <View style={styles.achievementSection}>
    <View style={styles.badgeIcon}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.badgeImage} />
    </View>
    <Text style={styles.achievementTitle}>为自己赢得"新贡献者"徽章</Text>
    <Text style={styles.achievementSubtitle}>从这些简单的更新入手</Text>
    {achievementTasks.map(renderAchievementTask)}
  </View>

  <TouchableOpacity style={styles.suggestionButton}>
    <Text style={styles.suggestionButtonText}>再接再厉</Text>
    <Text style={styles.suggestionLinkText}>查看建议</Text>
  </TouchableOpacity>

  <View style={styles.bottomNavigation}>
    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>探索</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Departure')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>出行</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Savings')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>已保存</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>贡献</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>最新动态</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
},
avatar: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 16,
},
userInfo: {
flex: 1,
},
userName: {
fontSize: 18,
fontWeight: 'bold',
},
reviewCount: {
fontSize: 14,
color: '#666',
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
padding: 16,
},
contributionOptionsContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
padding: 16,
},
contributionOption: {
alignItems: 'center',
marginBottom: 16,
},
optionIcon: {
width: 40,
height: 40,
marginBottom: 8,
},
optionText: {
textAlign: 'center',
},
achievementSection: {
backgroundColor: '#f0f0f0',
padding: 16,
margin: 16,
borderRadius: 8,
},
badgeIcon: {
alignItems: 'center',
marginBottom: 16,
},
badgeImage: {
width: 60,
height: 60,
},
achievementTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 8,
},
achievementSubtitle: {
fontSize: 14,
color: '#666',
marginBottom: 16,
},
taskItem: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 8,
},
taskText: {
fontSize: 16,
},
taskProgress: {
fontSize: 16,
color: '#666',
},
suggestionButton: {
backgroundColor: '#f0f0f0',
padding: 16,
margin: 16,
borderRadius: 8,
alignItems: 'center',
},
suggestionButtonText: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 8,
},
suggestionLinkText: {
color: 'blue',
textDecorationLine: 'underline',
},
bottomNavigation: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 16,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
navIcon: {
width: 24,
height: 24,
alignSelf: 'center',
},
navText: {
fontSize: 12,
marginTop: 4,
},
});
export default ContributionsScreen;