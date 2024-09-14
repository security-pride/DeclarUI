import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ObjectsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.headerTitle}>Objects</Text>
        <Pressable onPress={() => alert('Trash pressed')}>
          <Icon name="trash-can-outline" size={24} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.addObject}>
        <Text style={styles.addObjectText}>Add Object</Text>
        <Pressable onPress={() => alert('Add Object pressed')}>
          <Icon name="chevron-right" size={24} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.toolbar}>
        <Pressable onPress={() => alert('Horizontal line icon pressed')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
        </Pressable>
        <Pressable onPress={() => alert('Vertical line icon pressed')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
        </Pressable>
        <Pressable onPress={() => alert('Pencil icon pressed')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
        </Pressable>
        <Pressable onPress={() => alert('Angle measurement icon pressed')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
        </Pressable>
        <Pressable onPress={() => alert('Vertical dots icon pressed')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
        </Pressable>
        <Pressable onPress={() => alert('Arrow icon pressed')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Charts')}>
          <Text style={styles.chartLink}>Go to Charts</Text>
        </Pressable>
      </View>

      <Text style={styles.instructionText}>Long tap the object on the chart to edit or delete it</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
  },
  addObject: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#222',
  },
  addObjectText: {
    color: '#fff',
    fontSize: 16,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  toolbarIcon: {
    width: 24,
    height: 24,
    tintColor: '#00f',
  },
  chartLink: {
    color: '#00f',
    fontSize: 16,
  },
  instructionText: {
    color: '#888',
    textAlign: 'center',
    paddingVertical: 16,
    fontSize: 14,
  },
});

export default ObjectsScreen;