import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchResultScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="arrow-left" size={24} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Gracia"
          placeholderTextColor="#c4c4c4"
          value="Gracia" // Added this directly to replicate value
        />
      </View>

      <Text style={styles.sectionTitle}>Related Result</Text>
      
      <View style={styles.resultCard}>
        <Image source={require('../assets/snack-icon.png')} style={styles.resultImage} />
        <View style={styles.resultTextContainer}>
          <Text style={styles.resultLabel}>⚡ Potential Match!</Text>
          <Text style={styles.resultName}>Klee Gracia, 24 <Icon name="check-circle" size={14} color="#1E90FF" /></Text>
          <Text style={styles.resultTags}>Running   Outdoor   Anime</Text>
          <Text style={styles.resultDescription}>
            Hi there! I'm Gracia✨, a fun-loving adventurer looking for great connections.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>More About Gracia</Text>
      
      <View style={styles.moreAboutContainer}>
        <View style={styles.moreAboutItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.moreAboutImage} />
          <View style={styles.moreAboutTextContainer}>
            <Text style={styles.matchLabel}>98% Match</Text>
            <Text style={styles.moreAboutName}>Mika Gracia, 18</Text>
            <Text style={styles.moreAboutLocation}>Bali, Indonesia</Text>
          </View>
        </View>

        <View style={styles.moreAboutItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.moreAboutImage} />
          <View style={styles.moreAboutTextContainer}>
            <Text style={styles.matchLabel}>98% Match</Text>
            <Text style={styles.moreAboutName}>Gracy Logan, 28</Text>
            <Text style={styles.moreAboutLocation}>Jakarta, Indonesia</Text>
          </View>
        </View>

        <View style={styles.moreAboutItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.moreAboutImage} />
          <View style={styles.moreAboutTextContainer}>
            <Text style={styles.matchLabel}>93% Match</Text>
            <Text style={styles.moreAboutName}>R.O Gracia, 17 <Icon name="check-circle" size={14} color="#1E90FF" /></Text>
            <Text style={styles.moreAboutLocation}>Bekasi, Indonesia</Text>
          </View>
        </View>

        <View style={styles.moreAboutItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.moreAboutImage} />
          <View style={styles.moreAboutTextContainer}>
            <Text style={styles.matchLabel}>93% Match</Text>
            <Text style={styles.moreAboutName}>Audrey Gracia, 17</Text>
            <Text style={styles.moreAboutLocation}>Bali, Indonesia</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  resultImage: {
    width: '100%',
    height: 200,
  },
  resultTextContainer: {
    padding: 16,
  },
  resultLabel: {
    fontSize: 14,
    color: '#FF8C00',
    marginBottom: 8,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  resultTags: {
    fontSize: 14,
    color: '#777',
    marginVertical: 8,
  },
  resultDescription: {
    fontSize: 14,
    color: '#555',
  },
  moreAboutContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moreAboutItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  moreAboutImage: {
    width: '100%',
    height: 150,
  },
  moreAboutTextContainer: {
    padding: 8,
  },
  matchLabel: {
    fontSize: 14,
    color: '#FF8C00',
    marginBottom: 4,
  },
  moreAboutName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  moreAboutLocation: {
    fontSize: 14,
    color: '#777',
  },
});

export default SearchResultScreen;