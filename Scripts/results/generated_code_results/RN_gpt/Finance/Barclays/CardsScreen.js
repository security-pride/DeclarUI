import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CardsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon 
          name="arrow-back" 
          size={24} 
          style={styles.backIcon} 
          onPress={() => navigation.goBack()} 
        />
        <Text style={styles.title}>STUDENT ADDITIONS</Text>
        <Text style={styles.subtitle}>Personal debit</Text>
      </View>

      <View style={styles.cardContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
        <Text style={styles.cardStatus}>Active</Text>
        <Text style={styles.walletStatus}>Added to Apple Wallet</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="alert-circle-outline" size={32} style={styles.actionIcon} />
          <Text style={styles.actionText}>Report damaged, lost or stolen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="snow-outline" size={32} style={styles.actionIcon} />
          <Text style={styles.actionText}>Temporary freeze</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="eye-outline" size={32} style={styles.actionIcon} />
          <Text style={styles.actionText}>View card details & PIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Travel money</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Create travel wallet</Text>
          <Icon name="chevron-forward" size={24} style={styles.optionIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spending controls</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Contactless limit £100</Text>
          <Icon name="chevron-forward" size={24} style={styles.optionIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <Icon name="home-outline" size={32} />
        <Icon name="pricetag-outline" size={32} />
        <Icon name="send-outline" size={32} />
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <Icon name="help-circle-outline" size={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('More')}>
          <Icon name="ellipsis-horizontal-outline" size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backIcon: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    color: '#0074c5',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  cardImage: {
    height: 150,
    resizeMode: 'contain',
  },
  cardStatus: {
    color: '#28a745',
    marginTop: 10,
  },
  walletStatus: {
    color: '#000',
    marginTop: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionIcon: {
    color: '#0074c5',
  },
  actionText: {
    textAlign: 'center',
    color: '#0074c5',
    marginTop: 5,
  },
  section: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    color: '#000',
    marginBottom: 10,
    fontSize: 16,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    color: '#0074c5',
  },
  optionIcon: {
    color: '#0074c5',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0074c5',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default CardsScreen;