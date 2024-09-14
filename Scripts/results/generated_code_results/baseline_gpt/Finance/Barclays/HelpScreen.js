import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Help</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#aaa" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search or ask a question"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Quick Links */}
      <Text style={styles.sectionTitle}>Quick links</Text>
      <View style={styles.quickLinksContainer}>
        <QuickLink icon="error" text="Report fraud" />
        <QuickLink icon="credit-card" text="Cards" />
        <QuickLink icon="article" text="Statements" />
      </View>

      {/* Help Topics */}
      <Text style={styles.sectionTitle}>Help topics</Text>
      <HelpTopic title="Browse all topics" description="Check how to manage Direct Debits, pay in a cheque and more." />

      {/* More Help */}
      <Text style={styles.sectionTitle}>More help</Text>
      <HelpTopic title="Money worries and support" />
      <HelpTopic title="Accessible services" />
      <HelpTopic title="Our service status" />
      <HelpTopic title="Tour the app" />
    </View>
  );
};

const QuickLink = ({ icon, text }) => (
  <TouchableOpacity style={styles.quickLink}>
    <Icon name={icon} size={40} color="#007bff" />
    <Text style={styles.quickLinkText}>{text}</Text>
  </TouchableOpacity>
);

const HelpTopic = ({ title, description }) => (
  <TouchableOpacity style={styles.helpTopic}>
    <View>
      <Text style={styles.helpTopicTitle}>{title}</Text>
      {description && <Text style={styles.helpTopicDescription}>{description}</Text>}
    </View>
    <Icon name="chevron-right" size={24} color="#aaa" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  quickLink: {
    alignItems: 'center',
  },
  quickLinkText: {
    marginTop: 8,
    textAlign: 'center',
  },
  helpTopic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  helpTopicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  helpTopicDescription: {
    color: '#666',
  },
});

export default HelpScreen;