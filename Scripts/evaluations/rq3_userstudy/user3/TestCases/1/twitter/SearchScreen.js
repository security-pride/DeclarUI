import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, Keyboard, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
const Search = ({ navigation }) => {
const [searchQuery, setSearchQuery] = useState('');
const [showKeyboard, setShowKeyboard] = useState(true);
const recentSearches = [
{ id: '1', name: 'Sab Khasanov', handle: '@s_khasanov', image: require('../assets/snack-icon.png') },
{ id: '2', name: 'Martha Craig', handle: '@craig_love', image: require('../assets/snack-icon.png') },
{ id: '3', name: 'Tibitha Potter', handle: '@mis_potter', image: require('../assets/snack-icon.png'), verified: true },
{ id: '4', name: 'Figma', handle: '@figmadesign', image: require('../assets/snack-icon.png'), verified: true },
{ id: '5', name: 'Figma', handle: '@figma', image: require('../assets/snack-icon.png') },
];
const renderRecentSearch = ({ item }) => (
<TouchableOpacity style={styles.recentSearchItem}>
<Image source={item.image} style={styles.profileImage} />
<View style={styles.recentSearchInfo}>
<Text style={styles.recentSearchName}>{item.name}</Text>
<Text style={styles.recentSearchHandle}>{item.handle}</Text>
</View>
{item.verified && <Feather name="check-circle" size={16} color="#1DA1F2" />}
</TouchableOpacity>
);
const handleSearch = () => {
setShowKeyboard(false);
navigation.navigate('Trends');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TextInput
style={styles.searchInput}
placeholder="Search Twitter"
value={searchQuery}
onChangeText={setSearchQuery}
onFocus={() => setShowKeyboard(true)}
/>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
<Text style={styles.cancelButtonText}>Cancel</Text>
</TouchableOpacity>
</View>
  <View style={styles.recentSearchesHeader}>
    <Text style={styles.recentSearchesTitle}>Recent searches</Text>
    <TouchableOpacity>
      <Feather name="x" size={18} color="#657786" />
    </TouchableOpacity>
  </View>

  <FlatList
    data={recentSearches}
    renderItem={renderRecentSearch}
    keyExtractor={(item) => item.id}
    style={styles.recentSearchesList}
  />

  {showKeyboard && (
    <View style={styles.keyboard}>
      <View style={styles.keyboardRow}>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
          <TouchableOpacity key={key} style={styles.key}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.keyboardRow}>
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
          <TouchableOpacity key={key} style={styles.key}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.keyboardRow}>
        <TouchableOpacity style={[styles.key, styles.specialKey]}>
          <Feather name="arrow-up" size={18} color="#000" />
        </TouchableOpacity>
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
          <TouchableOpacity key={key} style={styles.key}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.key, styles.specialKey]}>
          <Feather name="delete" size={18} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.keyboardRow}>
        <TouchableOpacity style={[styles.key, styles.specialKey]}>
          <Text style={styles.keyText}>123</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.key, styles.spaceKey]}>
          <Text style={styles.keyText}>space</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.key, styles.specialKey]} onPress={handleSearch}>
          <Text style={styles.keyText}>Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
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
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#E1E8ED',
},
searchInput: {
flex: 1,
height: 36,
backgroundColor: '#E1E8ED',
borderRadius: 18,
paddingHorizontal: 15,
marginRight: 10,
},
cancelButton: {
paddingVertical: 5,
},
cancelButtonText: {
color: '#1DA1F2',
fontSize: 16,
},
recentSearchesHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
},
recentSearchesTitle: {
fontSize: 16,
fontWeight: 'bold',
},
recentSearchesList: {
flex: 1,
},
recentSearchItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#E1E8ED',
},
profileImage: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
recentSearchInfo: {
flex: 1,
},
recentSearchName: {
fontWeight: 'bold',
},
recentSearchHandle: {
color: '#657786',
},
keyboard: {
backgroundColor: '#D1D5DA',
padding: 5,
},
keyboardRow: {
flexDirection: 'row',
justifyContent: 'center',
marginBottom: 5,
},
key: {
width: 32,
height: 45,
backgroundColor: '#fff',
borderRadius: 5,
justifyContent: 'center',
alignItems: 'center',
marginHorizontal: 2,
},
keyText: {
fontSize: 16,
},
specialKey: {
width: 42,
},
spaceKey: {
flex: 1,
marginHorizontal: 5,
},
});
export default Search;