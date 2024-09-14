import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const [recentSearches, setRecentSearches] = useState(['Designers', 'Dasha Taran', 'Billie Eilish']);
const renderRecentSearch = ({ item }) => (
<View style={styles.recentSearchItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<Text style={styles.recentSearchText}>{item}</Text>
<TouchableOpacity onPress={() => removeRecentSearch(item)}>
<Text style={styles.removeIcon}>×</Text>
</TouchableOpacity>
</View>
);
const removeRecentSearch = (item) => {
setRecentSearches(recentSearches.filter(search => search !== item));
};
const clearAllRecentSearches = () => {
setRecentSearches([]);
};
return (
<View style={styles.container}>
<View style={styles.searchBarContainer}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<TextInput style={styles.searchInput} placeholder="Search..." value={searchQuery} onChangeText={setSearchQuery} />
</View>
  <View style={styles.filterContainer}>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>Chats</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>Photos</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>Videos</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.recentSearchesHeader}>
    <Text style={styles.recentSearchesTitle}>Recent searches</Text>
    <TouchableOpacity onPress={clearAllRecentSearches}>
      <Text style={styles.clearAllButton}>Clear all</Text>
    </TouchableOpacity>
  </View>

  <FlatList
    data={recentSearches}
    renderItem={renderRecentSearch}
    keyExtractor={(item) => item}
  />

  <View style={styles.keyboardContainer}>
    {/* Simulated keyboard layout */}
    <View style={styles.keyboardRow}>
      {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
        <TouchableOpacity key={key} style={styles.key}>
          <Text style={styles.keyText}>{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
    {/* Add more keyboard rows as needed */}
  </View>

  <View style={styles.inputMethodsContainer}>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.inputMethodIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.spaceButton}>
      <Text style={styles.spaceButtonText}>space</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.inputMethodIcon} />
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
searchBarContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
backIcon: {
width: 24,
height: 24,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
borderRadius: 20,
backgroundColor: '#f0f0f0',
paddingHorizontal: 15,
},
filterContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
},
filterButton: {
paddingVertical: 5,
paddingHorizontal: 15,
borderRadius: 15,
backgroundColor: '#f0f0f0',
},
filterButtonText: {
fontSize: 14,
},
recentSearchesHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
recentSearchesTitle: {
fontSize: 16,
fontWeight: 'bold',
},
clearAllButton: {
color: '#007AFF',
},
recentSearchItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
recentSearchText: {
flex: 1,
},
removeIcon: {
fontSize: 18,
color: '#888',
},
keyboardContainer: {
position: 'absolute',
bottom: 50,
left: 0,
right: 0,
backgroundColor: '#D1D5DB',
},
keyboardRow: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 5,
},
key: {
width: 30,
height: 40,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FFFFFF',
borderRadius: 5,
},
keyText: {
fontSize: 16,
},
inputMethodsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#D1D5DB',
},
inputMethodIcon: {
width: 24,
height: 24,
},
spaceButton: {
flex: 1,
height: 40,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FFFFFF',
borderRadius: 5,
marginHorizontal: 10,
},
spaceButtonText: {
fontSize: 16,
},
});
export default SearchScreen;