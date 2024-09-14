import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SendScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="arrow-back" size={24} color="#000" style={styles.backIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="姓名、用户名、邮箱地址、手机号"
        />
        <Icon name="scan-outline" size={24} color="#000" style={styles.scanIcon} />
      </View>

      {/* Info Banner */}
      <View style={styles.bannerContainer}>
        <Icon name="paper-plane" size={24} color="#1D4EDD" style={styles.bannerIcon} />
        <Text style={styles.bannerText}>跨境汇款至银行账户、现金领取点等</Text>
      </View>

      {/* Suggested Contacts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>建议联系人</Text>
        <ContactItem initials="ZF" name="Fang Zhou" />
      </View>

      {/* Your Contacts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>您的联系人</Text>
        <ContactItem iconSource={require('../assets/snack-icon.png')} name="CURVE UK LIMITED" />
        <ContactItem initials="ZF" name="Fang Zhou" />
      </View>

      {/* Enable Contacts Button */}
      <TouchableOpacity style={styles.enableContactsButton}>
        <Icon name="ios-book" size={24} color="#1D4EDD" />
        <Text style={styles.enableContactsText}>启用您的联系人</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const ContactItem = ({ initials, iconSource, name }) => {
  return (
    <View style={styles.contactItem}>
      {iconSource ? (
        <Image source={iconSource} style={styles.contactIcon} />
      ) : (
        <View style={styles.contactInitials}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      )}
      <Text style={styles.contactName}>{name}</Text>
      <Icon name="information-circle-outline" size={24} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  backIcon: {
    marginRight: 8,
  },
  scanIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: '#ccc',
    backgroundColor: '#f7f7f7',
  },
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef5ff',
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 10,
  },
  bannerIcon: {
    marginRight: 10,
  },
  bannerText: {
    color: '#000',
  },
  section: {
    marginTop: 20,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  contactInitials: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6A1B9A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  initialsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contactName: {
    flex: 1,
    fontSize: 16,
  },
  enableContactsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  enableContactsText: {
    color: '#1D4EDD',
    marginLeft: 8,
  },
});

export default SendScreen;