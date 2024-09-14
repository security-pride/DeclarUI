import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecentsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
        <Button title="Select" onPress={() => {}} />
      </View>
      
      <Text style={styles.headerTitle}>Recents</Text>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.item}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.text}>Ricardo{"\n"}15,Feb 2020</Text>
          <TouchableOpacity style={styles.moreOptions}>
            <Image source={require('../assets/snack-icon.png')} style={styles.threeDotIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <View style={styles.videoOverlay}>
            <Button title="Play" onPress={() => {}} />
          </View>
          <Text style={styles.text}>Sand pot{"\n"}25,Feb 2020</Text>
          <TouchableOpacity style={styles.moreOptions}>
            <Image source={require('../assets/snack-icon.png')} style={styles.threeDotIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.text}>Subramani{"\n"}15,Feb 2020</Text>
          <TouchableOpacity style={styles.moreOptions}>
            <Image source={require('../assets/snack-icon.png')} style={styles.threeDotIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.text}>Ricardo{"\n"}15,Feb 2020</Text>
          <TouchableOpacity style={styles.moreOptions}>
            <Image source={require('../assets/snack-icon.png')} style={styles.threeDotIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.text}>Unknown{"\n"}Unknown</Text>
          <TouchableOpacity style={styles.moreOptions}>
            <Image source={require('../assets/snack-icon.png')} style={styles.threeDotIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Connections')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeGrid')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/snack-icon.png')} style={styles.navIcon} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/snack-icon.png')} style={styles.navIcon} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/snack-icon.png')} style={styles.navIcon} /></TouchableOpacity>
      </View>
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
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  time: {
    fontSize: 18,
  },
  signalIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
  item: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 150,
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 10,
    fontSize: 16,
  },
  moreOptions: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  threeDotIcon: {
    width: 20,
    height: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default RecentsScreen;