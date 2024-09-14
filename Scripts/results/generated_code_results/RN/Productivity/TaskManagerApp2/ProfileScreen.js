import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
const navigation = useNavigation();
const TaskCategory = ({ icon, title, count, color }) => (
<View style={[styles.categoryCard, { backgroundColor: color }]}>
<Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
<Text style={styles.categoryTitle}>{title}</Text>
<Text style={styles.categoryCount}>{count} Task</Text>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<View style={styles.avatarContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
<View style={styles.userInfo}>
<Text style={styles.userName}>Steve Job</Text>
<Text style={styles.userEmail}>SteveJob@gmail.com</Text>
</View>
</View>
<Pressable style={styles.ellipsisButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.ellipsisIcon} />
</Pressable>
</View>
  <View style={styles.categoriesContainer}>
    <TaskCategory icon="personal" title="Personal" count="6" color="#E7E2FF" />
    <TaskCategory icon="work" title="Work" count="8" color="#E7F3FF" />
    <TaskCategory icon="private" title="Private" count="3" color="#FFE9E9" />
    <TaskCategory icon="meeting" title="Meeting" count="4" color="#E7FFE9" />
    <TaskCategory icon="events" title="Events" count="4" color="#FFF2E5" />
    <TouchableOpacity style={styles.createBoardButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.createBoardIcon} />
      <Text style={styles.createBoardText}>Create Board</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 20,
},
avatarContainer: {
flexDirection: 'row',
alignItems: 'center',
},
avatar: {
width: 60,
height: 60,
borderRadius: 30,
},
userInfo: {
marginLeft: 15,
},
userName: {
fontSize: 20,
fontWeight: 'bold',
},
userEmail: {
fontSize: 14,
color: '#888888',
},
ellipsisButton: {
padding: 10,
},
ellipsisIcon: {
width: 24,
height: 24,
},
categoriesContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 20,
},
categoryCard: {
width: '48%',
aspectRatio: 1,
borderRadius: 10,
padding: 15,
marginBottom: 15,
justifyContent: 'center',
alignItems: 'center',
},
categoryIcon: {
width: 40,
height: 40,
marginBottom: 10,
},
categoryTitle: {
fontSize: 16,
fontWeight: 'bold',
},
categoryCount: {
fontSize: 14,
color: '#888888',
},
createBoardButton: {
width: '48%',
aspectRatio: 1,
borderRadius: 10,
padding: 15,
marginBottom: 15,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FFF2E5',
},
createBoardIcon: {
width: 40,
height: 40,
marginBottom: 10,
},
createBoardText: {
fontSize: 16,
fontWeight: 'bold',
color: '#FF9500',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
paddingVertical: 10,
},
navIcon: {
width: 24,
height: 24,
},
addButton: {
backgroundColor: '#4A3780',
width: 50,
height: 50,
borderRadius: 25,
justifyContent: 'center',
alignItems: 'center',
},
addButtonText: {
color: '#FFFFFF',
fontSize: 24,
fontWeight: 'bold',
},
});
export default ProfileScreen;