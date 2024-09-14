import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MoreScreen = () => {

  const navigation = useNavigation();



  const MenuItem = ({ icon, title, onPress }) => (

    <TouchableOpacity style={styles.menuItem} onPress={onPress}>

      <Image source={icon} style={styles.menuIcon} />

      <Text style={styles.menuText}>{title}</Text>

      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>More</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>

          <Text style={styles.logoutText}>Logout</Text>

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.menuContainer}>

        <MenuItem

          icon={require('../assets/snack-icon.png')}

          title="Statements and documents"

          onPress={() => navigation.navigate('StatementsandDocuments')}

        />

        <MenuItem

          icon={require('../assets/snack-icon.png')}

          title="Cards"

          onPress={() => navigation.navigate('Cards')}

        />

        <MenuItem

          icon={require('../assets/snack-icon.png')}

          title="Manage accounts"

          onPress={() => {}}

        />

        <MenuItem

          icon={require('../assets/snack-icon.png')}

          title="Subscriptions"

          onPress={() => {}}

        />

        <MenuItem

          icon={require('../assets/snack-icon.png')}

          title="Spending"

          onPress={() => {}}

        />

        <MenuItem

          icon={require('../assets/snack-icon.png')}

          title="Rewards"

          onPress={() => {}}

        />

        <MenuItem

          icon={require('../assets/snack-icon.png')}

          title="Mobile PINsentry"

          onPress={() => {}}

        />

        <MenuItem

          icon={require('../assets/snack-icon.png')}

          title="Settings"

          onPress={() => {}}

        />

      </ScrollView>



      <View style={styles.footer}>

        <Text style={styles.lastLoginText}>Last log in 21:28, 10th Jul 2024</Text>

        <TouchableOpacity>

          <Text style={styles.surveyLink}>Independent service quality survey results</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Accounts</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Products')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Products</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('PayAndTransfer')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Pay & Transfer</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Help')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Help</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>More</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

    backgroundColor: '#FFFFFF',

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  logoutText: {

    color: '#0066CC',

    fontSize: 16,

  },

  menuContainer: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    marginTop: 10,

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 15,

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  menuIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

    tintColor: '#0066CC',

  },

  menuText: {

    flex: 1,

    fontSize: 16,

    color: '#333333',

  },

  arrowIcon: {

    width: 16,

    height: 16,

    tintColor: '#999999',

  },

  footer: {

    padding: 20,

    backgroundColor: '#FFFFFF',

  },

  lastLoginText: {

    fontSize: 12,

    color: '#666666',

    marginBottom: 10,

  },

  surveyLink: {

    fontSize: 14,

    color: '#0066CC',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    backgroundColor: '#FFFFFF',

  },

  tabItem: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 10,

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    fontSize: 12,

    color: '#666666',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#0066CC',

  },

  activeTabIcon: {

    tintColor: '#0066CC',

  },

  activeTabText: {

    color: '#0066CC',

  },

});



export default MoreScreen;