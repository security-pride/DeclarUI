import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>STUDENT ADDITIONS</Text>
        <Text style={styles.subHeaderTitle}>Personal debit</Text>
      </View>
      
      <View style={styles.cardContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
        <Text style={styles.cardStatus}>● Active</Text>
        <Text style={styles.walletInfo}>Added to Apple Wallet ✓</Text>
      </View>

      <View style={styles.actionsContainer}>
        <ActionItem icon="report-problem" label="Report damaged, lost or stolen" />
        <ActionItem icon="ac-unit" label="Temporary freeze" />
        <ActionItem icon="visibility" label="View card details & PIN" />
      </View>

      <Section title="Travel money">
        <SectionItem title="Create travel wallet" />
      </Section>

      <Section title="Spending controls">
        <SectionItem title="Contactless limit" detail="£100" />
      </Section>
    </ScrollView>
  );
};

const ActionItem = ({ icon, label }) => (
  <View style={styles.actionItem}>
    <Icon name={icon} size={40} color="#0078D7" />
    <Text style={styles.actionLabel}>{label}</Text>
  </View>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const SectionItem = ({ title, detail }) => (
  <TouchableOpacity style={styles.sectionItem}>
    <Text style={styles.sectionItemTitle}>{title}</Text>
    {detail && <Text style={styles.sectionItemDetail}>{detail}</Text>}
    <Icon name="keyboard-arrow-right" size={24} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subHeaderTitle: {
    fontSize: 14,
    color: '#666',
  },
  cardContainer: {
    alignItems: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  cardImage: {
    width: 320,
    height: 180,
    borderRadius: 10,
  },
  cardStatus: {
    color: 'green',
    marginTop: 16,
  },
  walletInfo: {
    marginTop: 8,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  actionItem: {
    alignItems: 'center',
    width: '30%',
  },
  actionLabel: {
    textAlign: 'center',
    marginTop: 8,
    color: '#0078D7',
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    padding: 8,
    backgroundColor: '#F0F0F0',
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionItemTitle: {
    fontSize: 16,
    color: '#333',
  },
  sectionItemDetail: {
    fontSize: 16,
    color: '#333',
  },
});

export default CardsScreen;