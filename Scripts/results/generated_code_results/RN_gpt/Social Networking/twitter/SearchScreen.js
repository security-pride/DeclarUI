import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleGoButtonPress = () => {
    navigation.navigate('Trends');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.timeDisplay}>9:41</Text>
        <Image style={styles.statusIcon} source={require('../assets/snack-icon.png')} />
        <Image style={styles.batteryIcon} source={require('../assets/snack-icon.png')} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Twitter"
        />
        <Button title="Cancel" onPress={() => {}} />
      </View>
      <Text style={styles.recentSearchesLabel}>Recent searches</Text>
      <ScrollView horizontal={true} style={styles.recentSearchesIconsContainer}>
        <View style={styles.userProfileContainer}>
          <Image style={styles.userProfileImage} source={require('../assets/snack-icon.png')} />
          <Text style={styles.userProfileText}>Sab Khasa...</Text>
          <Text style={styles.userProfileHandle}>@s_khasanov</Text>
        </View>
        <View style={styles.userProfileContainer}>
          <Image style={styles.userProfileImage} source={require('../assets/snack-icon.png')} />
          <Text style={styles.userProfileText}>Martha Ca...</Text>
          <Text style={styles.userProfileHandle}>@craig_love</Text>
        </View>
        <View style={styles.userProfileContainer}>
          <Image style={styles.userProfileImage} source={require('../assets/snack-icon.png')} />
          <Image style={styles.verifiedBadge} source={require('../assets/snack-icon.png')} />
          <Text style={styles.userProfileText}>Tibitha P...</Text>
          <Text style={styles.userProfileHandle}>@mis_potter</Text>
        </View>
        <View style={styles.userProfileContainer}>
          <Image style={styles.userProfileImage} source={require('../assets/snack-icon.png')} />
          <Text style={styles.userProfileText}>Figma</Text>
          <Text style={styles.userProfileHandle}>@figmadesign</Text>
        </View>
        <View style={styles.userProfileContainer}>
          <Image style={styles.userProfileImage} source={require('../assets/snack-icon.png')} />
          <Text style={styles.userProfileText}>Figma</Text>
          <Text style={styles.userProfileHandle}>@figma</Text>
        </View>
      </ScrollView>
      <TextInput
        style={styles.keyboardInput}
        placeholder="skhasanov"
      />
      <View style={styles.keyboardRow}>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
          <TouchableOpacity key={key} style={styles.keyboardKey}>
            <Text>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.keyboardRow}>
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
          <TouchableOpacity key={key} style={styles.keyboardKey}>
            <Text>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.keyboardRow}>
        <TouchableOpacity style={styles.arrowKey}>
          <Text>⬆️</Text>
        </TouchableOpacity>
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
          <TouchableOpacity key={key} style={styles.keyboardKey}>
            <Text>{key}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.backKey}>
          <Text>⌫</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <Pressable style={styles.emojiButton}>
          <Text>😊</Text>
        </Pressable>
        <TouchableOpacity style={styles.spaceButton}>
          <Text>space</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goButton} onPress={handleGoButtonPress}>
          <Text>Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeDisplay: {
    fontSize: 12,
  },
  statusIcon: {
    width: 20,
    height: 20,
  },
  batteryIcon: {
    width: 20,
    height: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  recentSearchesLabel: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentSearchesIconsContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  userProfileContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  userProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userProfileText: {
    fontSize: 12,
  },
  userProfileHandle: {
    fontSize: 10,
    color: '#666',
  },
  verifiedBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 12,
    height: 12,
  },
  keyboardInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  keyboardRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  keyboardKey: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 2,
  },
  arrowKey: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backKey: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emojiButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceButton: {
    flex: 4,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreen;