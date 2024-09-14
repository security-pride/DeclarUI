import React from 'react';
import { View, Text, TextInput, SectionList, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure vector icons are set up

const NewMessageScreen = () => {
  const navigation = useNavigation();

  const contacts = [
    { name: 'Martha Craig', avatar: require('../assets/snack-icon.png') },
    { name: 'Kieron Dotson', avatar: require('../assets/snack-icon.png') },
    { name: 'Zack John', avatar: require('../assets/snack-icon.png') },
    { name: 'Jamie Franco', avatar: require('../assets/snack-icon.png') },
    { name: 'Tabitha Potter', avatar: require('../assets/snack-icon.png') },
  ];

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Button title="Cancel" onPress={() => navigation.goBack()} />
      <Text style={styles.headerTitle}>New message</Text>
    </View>
  );

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <Text style={styles.contactName}>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  const renderCreateGroupOption = () => (
    <TouchableOpacity
      style={styles.groupOption}
      onPress={() => navigation.navigate('CreateGroup')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.groupIcon} />
      <Text style={styles.groupText}>Create a New Group</Text>
      <Icon name="chevron-forward" size={24} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <TextInput style={styles.inputField} placeholder="To:" />
      {renderCreateGroupOption()}
      <SectionList
        sections={[
          {
            title: 'ЛЮДИ',
            data: contacts,
          },
        ]}
        renderItem={renderContactItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputField: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 8,
  },
  groupOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  groupIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  groupText: {
    flex: 1,
    fontSize: 16,
  },
  sectionHeader: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  contactName: {
    fontSize: 16,
  },
});

export default NewMessageScreen;