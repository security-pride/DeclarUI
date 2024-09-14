import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StatementsandDocumentsScreen = () => {
  const statements = [
    { date: '11 JUL', account: '13043626', label: 'Statement 11-JUL-24 AC 90427500' },
    { date: '11 JUN', account: '13043605', label: 'Statement 11-JUN-24 AC 90427500' },
    { date: '10 MAY', account: '13053150', label: 'Statement 10-MAY-24 AC 90427500' },
    { date: '11 APR', account: '15105508', label: 'Statement 11-APR-24 AC 90427500' },
    { date: '11 MAR', account: '13050608', label: 'Statement 11-MAR-24 AC 90427500' },
    { date: '09 FEB', account: '11043935', label: 'Statement 09-FEB-24 AC 90427500' },
    { date: '11 JAN', account: '13043928', label: 'Statement 11-JAN-24 AC 90427500' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={20} color="#1E3A5F" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Statements and documents</Text>
        <TouchableOpacity>
          <Icon name="question-circle" size={20} color="#1E3A5F" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.accountNumber}>20-25-24 &nbsp; 90427500</Text>
      
      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Statements</Text>
        <Text style={styles.tabText}>Documents</Text>
      </View>
      
      <ScrollView>
        <Text style={styles.yearLabel}>2024</Text>
        
        {statements.map((statement, index) => (
          <View key={index} style={styles.statementItem}>
            <View style={styles.statementDetails}>
              <Icon name="circle" size={8} color="#0078D7" style={styles.bullet} />
              <Text style={styles.statementText}>{statement.label} {statement.account}</Text>
            </View>
            <Text style={styles.dateText}>{statement.date}</Text>
            <TouchableOpacity>
              <Icon name="chevron-right" size={15} color="#1E3A5F" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A5F',
  },
  accountNumber: {
    textAlign: 'center',
    color: '#1E3A5F',
    marginVertical: 8,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2',
    marginBottom: 10,
  },
  tabText: {
    paddingVertical: 8,
    color: '#1E3A5F',
    fontWeight: '600',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0078D7',
  },
  yearLabel: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F7F7F7',
    color: '#1E3A5F',
    fontWeight: 'bold',
  },
  statementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  statementDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    marginRight: 6,
  },
  statementText: {
    color: '#1E3A5F',
  },
  dateText: {
    marginRight: 16,
    color: '#1E3A5F',
  },
});

export default StatementsandDocumentsScreen;