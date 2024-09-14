import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, Image, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SortScreen = () => {
const navigation = useNavigation();
const [modalVisible, setModalVisible] = useState(true);
const [selectedSort, setSelectedSort] = useState('Date (new to old)');
const sortOptions = [
'Date (new to old)',
'Date (old to new)',
'Size (large to small)',
'Size (small to large)',
'Name (from A to Z)',
'Name (from Z to A)'
];
const handleSortSelection = (option) => {
setSelectedSort(option);
setModalVisible(false);
navigation.navigate('home', { sortOption: option });
};
const renderSortOption = ({ item }) => (
<TouchableOpacity
style={styles.sortOption}
onPress={() => handleSortSelection(item)}
>
<Text style={styles.sortOptionText}>{item}</Text>
{item === selectedSort && (
<Image
source={require('../assets/snack-icon.png')}
style={styles.checkmark}
/>
)}
</TouchableOpacity>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.title}>PDF file management</Text>
<TouchableOpacity onPress={() => navigation.navigate('search')}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => setModalVisible(true)}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <FlatList
    data={[1, 2, 3, 4, 5, 6]}
    keyExtractor={(item) => item.toString()}
    renderItem={({ item }) => (
      <View style={styles.fileItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />
        <View style={styles.fileDetails}>
          <Text style={styles.fileName}>Travel plan_America.pdf</Text>
          <Text style={styles.fileInfo}>Oct 22,2022    98KB</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('more', { fileId: item })}>
          <Text style={styles.moreOptions}>⋮</Text>
        </TouchableOpacity>
      </View>
    )}
  />

  <TouchableOpacity
    style={styles.addButton}
    onPress={() => navigation.navigate('select')}
  >
    <Text style={styles.addButtonText}>+</Text>
  </TouchableOpacity>

  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Sort by</Text>
        <FlatList
          data={sortOptions}
          renderItem={renderSortOption}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  </Modal>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
icon: {
width: 24,
height: 24,
},
fileItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
pdfIcon: {
width: 40,
height: 40,
marginRight: 10,
},
fileDetails: {
flex: 1,
},
fileName: {
fontSize: 16,
fontWeight: 'bold',
},
fileInfo: {
fontSize: 14,
color: '#888',
},
moreOptions: {
fontSize: 20,
paddingHorizontal: 10,
},
addButton: {
position: 'absolute',
right: 20,
bottom: 20,
width: 60,
height: 60,
borderRadius: 30,
backgroundColor: 'red',
justifyContent: 'center',
alignItems: 'center',
},
addButtonText: {
color: '#fff',
fontSize: 30,
},
modalContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
backgroundColor: '#fff',
borderRadius: 10,
padding: 20,
width: '80%',
},
modalTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
sortOption: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 10,
},
sortOptionText: {
fontSize: 16,
},
checkmark: {
width: 20,
height: 20,
},
});
export default SortScreen;