import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const CleanerScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.header}>Cleaner</Text>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressLabel}>Used</Text>
          <Text style={styles.progressLabel}>Storage</Text>
        </View>
        <ProgressBar progress={0.66} color="#29ABE2" style={styles.progressBar} />
        <View style={styles.progressDetails}>
          <Text style={styles.progressText}>66%</Text>
          <Text style={styles.progressText}>85 GB of 128 GB</Text>
        </View>
      </View>

      <Text style={styles.subheader}>Clean Junk files</Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Unused Apps</Text>
        <Text style={styles.linkText}>See All</Text>
      </View>

      <View style={styles.appList}>
        {['Waze', 'LinkedIn', 'Adobe', 'Facebook'].map((app, index) => (
          <View key={index} style={styles.appItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.appIcon} />
            <Text style={styles.appName}>{app}</Text>
            <Text style={styles.appSize}>1.2 GB</Text>
          </View>
        ))}
      </View>

      <Text style={styles.subheader}>Uninstall Apps (4.7 GB)</Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Duplicate files</Text>
        <Text style={styles.linkText}>See All</Text>
      </View>

      <View style={styles.fileList}>
        {['DSC2021084133.jpg', 'RAKAKL2022.xlsx'].map((file, index) => (
          <View key={index} style={styles.fileItem}>
            <Icon name="document-outline" size={35} color="#29ABE2" />
            <Text style={styles.fileName}>{file}</Text>
            <Text style={styles.fileSize}>2 MB</Text>
          </View>
        ))}
      </View>

      <Text style={styles.subheader}>Review files (1.2 GB)</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  progressLabel: {
    fontSize: 16,
    color: 'gray',
  },
  progressBar: {
    width: '100%',
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  progressDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    fontSize: 16,
  },
  progressText: {
    fontSize: 16,
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 16,
    color: '#29ABE2',
  },
  appList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  appItem: {
    alignItems: 'center',
  },
  appIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  appName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  appSize: {
    fontSize: 12,
    color: 'gray',
  },
  fileList: {
    marginBottom: 20,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  fileName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  fileSize: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CleanerScreen;