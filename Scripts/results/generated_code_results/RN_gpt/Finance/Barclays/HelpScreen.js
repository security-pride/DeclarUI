import React from 'react';
import { View, Text, TextInput, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HelpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search or ask a question"
          placeholderTextColor="#888"
        />
      </View>
      <Text style={styles.header}>Quick links</Text>
      <View style={styles.quickLinksContainer}>
        <View style={styles.quickLink}>
          <ImageBackground
            source={require('../assets/snack-icon.png')}
            style={styles.quickLinkIcon}
          >
            <Icon name="alert-circle-outline" size={30} color="#fff" />
          </ImageBackground>
          <Text style={styles.quickLinkText}>Report fraud</Text>
        </View>
        <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Cards')}>
          <ImageBackground
            source={require('../assets/snack-icon.png')}
            style={styles.quickLinkIcon}
          >
            <Icon name="card-outline" size={30} color="#fff" />
          </ImageBackground>
          <Text style={styles.quickLinkText}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('StatementsandDocuments')}>
          <ImageBackground
            source={require('../assets/snack-icon.png')}
            style={styles.quickLinkIcon}
          >
            <Icon name="document-outline" size={30} color="#fff" />
          </ImageBackground>
          <Text style={styles.quickLinkText}>Statements</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Help topics</Text>
      <View style={styles.helpTopicsContainer}>
        <View style={styles.helpTopic}>
          <Icon name="help-circle-outline" size={24} color="#007bc1" />
          <View style={styles.helpTopicTextContainer}>
            <Text style={styles.helpTopicTitle}>Browse all topics</Text>
            <Text style={styles.helpTopicDescription}>
              Check how to manage Direct Debits, pay in a cheque and more.
            </Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#888" />
        </View>
      </View>
      <Text style={styles.header}>More help</Text>
      <View style={styles.moreHelpContainer}>
        <View style={styles.moreHelpItem}>
          <Text style={styles.moreHelpText}>Money worries and support</Text>
          <Icon name="chevron-forward" size={24} color="#888" />
        </View>
        <View style={styles.moreHelpItem}>
          <Text style={styles.moreHelpText}>Accessible services</Text>
          <Icon name="chevron-forward" size={24} color="#888" />
        </View>
        <View style={styles.moreHelpItem}>
          <Text style={styles.moreHelpText}>Our service status</Text>
          <Icon name="chevron-forward" size={24} color="#888" />
        </View>
        <View style={styles.moreHelpItem}>
          <Text style={styles.moreHelpText}>Tour the app</Text>
          <Icon name="chevron-forward" size={24} color="#888" />
        </View>
      </View>
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Accounts</Text>
        </TouchableOpacity>
        <View style={styles.navItem}>
          <Icon name="bag-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Products</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="arrow-forward-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Pay & Transfer</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="help-circle" size={24} color="#fff" />
          <Text style={styles.navText}>Help</Text>
        </View>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('More')}>
          <Icon name="ellipsis-horizontal" size={24} color="#fff" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 8,
    color: '#000',
  },
  searchIcon: {
    marginRight: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickLink: {
    alignItems: 'center',
  },
  quickLinkIcon: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#007bc1',
    marginBottom: 4,
  },
  quickLinkText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
  helpTopicsContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  helpTopic: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpTopicTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  helpTopicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  helpTopicDescription: {
    fontSize: 12,
    color: '#666',
  },
  moreHelpContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  moreHelpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  moreHelpText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#007bc1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 10,
    marginTop: 4,
  },
});

export default HelpScreen;