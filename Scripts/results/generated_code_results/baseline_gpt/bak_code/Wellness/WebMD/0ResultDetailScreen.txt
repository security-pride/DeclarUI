import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResultDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Abilify</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="share-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="bookmark-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Text style={[styles.tabText, styles.activeTab]}>Uses</Text>
        <Text style={styles.tabText}>Side Effects</Text>
        <Text style={styles.tabText}>Precautions</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        </View>

        <Text style={styles.title}>Abilify</Text>
        <Text style={styles.subtitle}>Generic: aripiprazole</Text>
        <Text style={styles.subtitle}>Common Brand(s) Abilify</Text>

        <TouchableOpacity>
          <Text style={styles.reviews}>Reviews (1888) <MaterialIcon name="star" size={18} color="gold" /> <MaterialIcon name="star" size={18} color="gold" /> <MaterialIcon name="star" size={18} color="gold" /> <MaterialIcon name="star" size={18} color="gold" /> <MaterialIcon name="star-half" size={18} color="gold" /></Text>
        </TouchableOpacity>

        <Text style={styles.warning}>
          <Text style={styles.warningTitle}>Warnings: </Text>
          If you are using aripiprazo... <Text style={styles.showMore}>Show more</Text>
        </Text>

        <Text style={styles.description}>
          This medication is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole belongs to a class of drugs known as atypical antipsychotics. It works by helping to restore the balance of certain natural substances in the ...
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcon name="plus-circle-outline" size={20} color="#FFF" />
          <Text style={styles.footerButtonText}>Add Med Reminder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcon name="shopping-outline" size={20} color="#FFF" />
          <Text style={styles.footerButtonText}>Search Drug Prices</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    color: '#00BFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#00BFFF',
  },
  content: {
    paddingHorizontal: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  reviews: {
    fontSize: 16,
    color: '#00BFFF',
    textAlign: 'center',
    marginVertical: 10,
  },
  warning: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  warningTitle: {
    fontWeight: 'bold',
  },
  showMore: {
    color: '#00BFFF',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  footerButtonText: {
    color: '#FFF',
    marginLeft: 5,
  },
});

export default ResultDetailScreen;