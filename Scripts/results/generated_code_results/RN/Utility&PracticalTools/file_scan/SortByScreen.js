import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Modal, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SortByPage = () => {
const navigation = useNavigation();
const [selectedSort, setSelectedSort] = useState('By modified date');
const handleSortSelection = (option) => {
setSelectedSort(option);
// Apply sorting logic here
navigation.navigate('Home');
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <View style={styles.navbar}>
    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
    </TouchableOpacity>
    <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
    <Text style={styles.logoText}>scaney.</Text>
  </View>

  <View style={styles.searchBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search your files"
      placeholderTextColor="#888"
    />
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.folderIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.refreshIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.content}>
    <Text style={styles.title}>My Scans</Text>
    <TouchableOpacity>
      <Text style={styles.seeAll}>See All</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.folders}>
    {['Personal', 'Official', 'Others'].map((folder, index) => (
      <View key={index} style={styles.folderItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.folderImage} />
        <Text style={styles.folderName}>{folder}</Text>
        <Text style={styles.itemCount}>{index === 0 ? '32' : index === 1 ? '163' : '26'} items</Text>
      </View>
    ))}
  </View>

  <Text style={styles.recentScans}>Recent scans</Text>

  <View style={styles.recentItem}>
    <Image source={require('../assets/snack-icon.png')} style={styles.documentImage} />
    <View>
      <Text style={styles.documentName}>Address proof</Text>
      <Text style={styles.documentDate}>12/01/2021 • 12:21 PM</Text>
    </View>
  </View>

  <Modal
    animationType="slide"
    transparent={true}
    visible={true}
  >
    <View style={styles.modalView}>
      <Text style={styles.modalTitle}>Sort</Text>
      {['By modified date', 'By modified time', 'By name A - Z', 'By name Z - A'].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.sortOption}
          onPress={() => handleSortSelection(option)}
        >
          <View style={[styles.radioButton, selectedSort === option && styles.radioButtonSelected]} />
          <Text style={styles.sortOptionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </Modal>
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
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
height: 44,
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
navbar: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 20,
paddingVertical: 10,
},
menuIcon: {
width: 24,
height: 24,
},
logo: {
width: 30,
height: 30,
marginLeft: 15,
},
logoText: {
fontSize: 20,
fontWeight: 'bold',
marginLeft: 5,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#FFFFFF',
borderRadius: 20,
margin: 20,
paddingHorizontal: 15,
height: 40,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
fontSize: 16,
},
folderIcon: {
width: 20,
height: 20,
marginLeft: 10,
},
refreshIcon: {
width: 20,
height: 20,
marginLeft: 10,
},
content: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
},
title: {
fontSize: 22,
fontWeight: 'bold',
},
seeAll: {
color: '#00BFA5',
fontSize: 16,
},
folders: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 20,
},
folderItem: {
alignItems: 'center',
},
folderImage: {
width: 60,
height: 60,
marginBottom: 5,
},
folderName: {
fontSize: 16,
fontWeight: 'bold',
},
itemCount: {
color: '#888',
},
recentScans: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 20,
},
recentItem: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#FFFFFF',
margin: 20,
padding: 15,
borderRadius: 10,
},
documentImage: {
width: 50,
height: 50,
marginRight: 15,
},
documentName: {
fontSize: 16,
fontWeight: 'bold',
},
documentDate: {
color: '#888',
marginTop: 5,
},
modalView: {
marginTop: 'auto',
backgroundColor: 'white',
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
padding: 35,
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5
},
modalTitle: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 20,
},
sortOption: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
radioButton: {
height: 24,
width: 24,
borderRadius: 12,
borderWidth: 2,
borderColor: '#00BFA5',
alignItems: 'center',
justifyContent: 'center',
marginRight: 10,
},
radioButtonSelected: {
backgroundColor: '#00BFA5',
},
sortOptionText: {
fontSize: 18,
},
});
export default SortByPage;