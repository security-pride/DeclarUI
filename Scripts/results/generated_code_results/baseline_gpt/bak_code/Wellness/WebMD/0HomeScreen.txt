import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="bars" size={24} style={styles.menuIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search drugs, conditions, news..."
        />
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.option}>
            <Icon name="bullseye" size={40} color="#007aff" />
            <Text style={styles.optionText}>Symptom Checker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="bell" size={40} color="#007aff" />
            <Text style={styles.optionText}>Med Reminders</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.option}>
            <Icon name="prescription-bottle" size={40} color="#007aff" />
            <Text style={styles.optionText}>Prescription Discounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="exchange" size={40} color="#007aff" />
            <Text style={styles.optionText}>Drug Interactions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.option}>
            <Icon name="pills" size={40} color="#007aff" />
            <Text style={styles.optionText}>Pill Identifier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="line-chart" size={40} color="#007aff" />
            <Text style={styles.optionText}>Track Symptoms</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.bannerContainer}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.bannerImage}
        />
      </TouchableOpacity>

      <View style={styles.newsSection}>
        <Text style={styles.newsTitle}>Top News</Text>
        <TouchableOpacity style={styles.newsCard}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.newsImage}
            resizeMode="cover"
          />
          <Text style={styles.newsHeadline}>The Summer COVID Wave Is Spreading</Text>
          <Text style={styles.newsSubText}>The summertime spread of COVID-19 is nowhere near ending, according to newly published</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  menuIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  optionsContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  optionText: {
    marginTop: 5,
    textAlign: 'center',
  },
  bannerContainer: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#e8f4fc',
    paddingVertical: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  newsSection: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsCard: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 150,
  },
  newsHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  newsSubText: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;