import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CalmMethodsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Calming Everyday Anxiety</Text>
          <Text style={styles.headerSubtitle}>
            Get in-the-moment support for anxious thinking, plus expert guidance for cultivating a calmer mind every day.
          </Text>
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>SOS for Anxious Moments</Text>
      
      <View style={styles.cardContainer}>
        <Card 
          image={require('../assets/snack-icon.png')} 
          title="Feeling Overwhelmed SOS" 
          description="Give yourself room to breathe."
          duration="3-4 min"
        />
        
        <Card 
          image={require('../assets/snack-icon.png')} 
          title="Panicking SOS" 
          description="Anchor your mind and body in the present."
          duration="3 min"
        />
        
        <Card 
          image={require('../assets/snack-icon.png')} 
          title="Breathe" 
          description="Add a sense of spaciousness to your day."
          duration="1-3 min"
        />
        
        <Card 
          image={require('../assets/snack-icon.png')} 
          title="Reset" 
          description="Find some focus and relaxation during a busy day."
          duration="3-10 min"
        />
      </View>
      
      <TouchableOpacity style={styles.unlockButton}>
        <Text style={styles.unlockText}>Unlock the Headspace Library</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Card = ({ image, title, description, duration }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Icon name="lock-closed-outline" size={16} color="#fff" />
      </View>
      <Text style={styles.durationText}>
        <Icon name="md-volume-high" size={16} color="#fff" /> Meditation • {duration}
      </Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D10',
  },
  header: {
    padding: 16,
    backgroundColor: '#2291F4',
  },
  headerTextContainer: {
    marginLeft: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    margin: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#1D1F27',
    borderRadius: 8,
    width: '48%',
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  durationText: {
    fontSize: 12,
    color: '#aaa',
    marginVertical: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#ccc',
  },
  unlockButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  unlockText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B0D10',
  },
});

export default CalmMethodsScreen;