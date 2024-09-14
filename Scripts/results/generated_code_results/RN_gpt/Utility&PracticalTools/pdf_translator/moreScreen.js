import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const moreScreen = ({ navigation }) => {
  const redirectToHome = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <Text style={styles.title}>PDF file management</Text>
        <View style={styles.statusIcons}>
          <Icon name="wifi" size={20} style={styles.icon} />
          <Icon name="battery-full" size={20} style={styles.icon} />
          <Icon name="ellipsis-vertical" size={20} style={styles.icon} />
        </View>
      </View>
      
      <View style={styles.fileList}>
        {Array.from({ length: 5 }).map((_, index) => (
          <View key={index} style={styles.fileItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />
            <View style={styles.fileInfo}>
              <Text>Travel plan_America.pdf</Text>
              <Text>Oct 22, 2022    98KB</Text>
            </View>
            <TouchableOpacity>
              <Icon name="ellipsis-vertical" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      
      <View style={styles.bottomSheet}>
        <TouchableOpacity style={styles.option}>
          <Icon name="share-social" size={20} style={styles.icon} />
          <Text>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="pencil" size={20} style={styles.icon} />
          <Text>Rename</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="trash" size={20} style={styles.icon} />
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={redirectToHome}>
          <Icon name="home" size={20} style={styles.icon} />
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  fileList: {
    flex: 1,
    padding: 10,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
  },
  pdfIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  fileInfo: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  option: {
    alignItems: 'center',
  },
});

export default moreScreen;