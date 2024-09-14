import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const ResultDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Abilify</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="share-social-outline" size={24} color="black" />
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </View>
      </View>
      
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Uses</Text>
        <Text style={styles.inactiveTab}>Side Effects</Text>
        <Text style={styles.inactiveTab}>Precautions</Text>
      </View>
      
      <Image source={require('../assets/snack-icon.png')} style={styles.medImage} />
      <Text style={styles.medTitle}>Abilify</Text>
      <Text style={styles.medDetail}>Generic: aripiprazole</Text>
      <Text style={styles.medDetail}>Common Brand(s) Abilify</Text>
      
      <Text style={styles.reviews}>Reviews (1888)</Text>
      
      <Text style={styles.warningText}>
        <Text style={styles.boldText}>Warnings:</Text> If you are using aripiprazole...
        <Text style={styles.showMore}> Show more</Text>
      </Text>
      
      <Text style={styles.description}>
        This medication is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole belongs to a class of drugs known as atypical antipsychotics. It works by helping to restore the balance of certain natural substances in the brain.
      </Text>
      
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Reminder')}>
          <Ionicons name="add" size={16} color="white" />
          <Text style={styles.buttonText}>Add Med Reminder</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('IdentifyResult')}>
          <Ionicons name="pricetag-outline" size={16} color="white" />
          <Text style={styles.buttonText}>Search Drug Prices</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00BCD4',
    paddingBottom: 8,
  },
  inactiveTab: {
    color: 'gray',
    paddingBottom: 8,
  },
  medImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  medTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  medDetail: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 8,
  },
  reviews: {
    textAlign: 'center',
    color: '#00BCD4',
    fontSize: 16,
    marginBottom: 16,
  },
  warningText: {
    color: 'gray',
  },
  boldText: {
    fontWeight: 'bold',
  },
  showMore: {
    color: '#00BCD4',
  },
  description: {
    marginBottom: 16,
    color: 'gray',
  },
  footerButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'lightgray',
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    padding: 10,
    borderRadius: 8,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
  },
});

export default ResultDetailScreen;