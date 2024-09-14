import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MoreScreen = ({ navigation }) => {
  const navigateTo = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>More</Text>
        <TouchableOpacity onPress={() => navigateTo('Logout')}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('StatementsandDocuments')}>
          <Icon name="document-text-outline" size={24} color="#007BFF" />
          <Text style={styles.menuText}>Statements and documents</Text>
          <Icon name="chevron-forward-outline" size={24} color="#B0B0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Cards')}>
          <Icon name="card-outline" size={24} color="#007BFF" />
          <Text style={styles.menuText}>Cards</Text>
          <Icon name="chevron-forward-outline" size={24} color="#B0B0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('ManageAccounts')}>
          <Icon name="settings-outline" size={24} color="#007BFF" />
          <Text style={styles.menuText}>Manage accounts</Text>
          <Icon name="chevron-forward-outline" size={24} color="#B0B0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Subscriptions')}>
          <Icon name="reload-outline" size={24} color="#007BFF" />
          <Text style={styles.menuText}>Subscriptions</Text>
          <Icon name="chevron-forward-outline" size={24} color="#B0B0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Spending')}>
          <Icon name="wallet-outline" size={24} color="#007BFF" />
          <Text style={styles.menuText}>Spending</Text>
          <Icon name="chevron-forward-outline" size={24} color="#B0B0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Rewards')}>
          <Icon name="gift-outline" size={24} color="#007BFF" />
          <Text style={styles.menuText}>Rewards</Text>
          <Icon name="chevron-forward-outline" size={24} color="#B0B0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('MobilePINsentry')}>
          <Icon name="key-outline" size={24} color="#007BFF" />
          <Text style={styles.menuText}>Mobile PINsentry</Text>
          <Icon name="chevron-forward-outline" size={24} color="#B0B0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Settings')}>
          <Icon name="cog-outline" size={24} color="#007BFF" />
          <Text style={styles.menuText}>Settings</Text>
          <Icon name="chevron-forward-outline" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Last log in 21:28, 10th Jul 2024</Text>
        <TouchableOpacity>
          <Text style={styles.surveyLink}>Independent service quality survey results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logout: {
    color: '#007BFF',
    fontSize: 16,
  },
  menuContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#007BFF',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  surveyLink: {
    marginTop: 5,
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default MoreScreen;