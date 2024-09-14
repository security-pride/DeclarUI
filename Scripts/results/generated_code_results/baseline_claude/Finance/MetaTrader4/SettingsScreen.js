import React from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const SettingsScreen = () => {

  const navigation = useNavigation();



  const renderSettingItem = (icon, title, subtitle, isNew = false) => (

    <TouchableOpacity style={styles.settingItem}>

      <View style={styles.settingIconContainer}>

        <Image source={{ uri: icon }} style={styles.settingIcon} />

        {isNew && <View style={styles.newBadge}><Text style={styles.newBadgeText}>Demo</Text></View>}

      </View>

      <View style={styles.settingTextContainer}>

        <Text style={styles.settingTitle}>{title}</Text>

        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}

      </View>

      <Icon name="chevron-forward" size={20} color="#666" />

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <Text style={styles.headerTitle}>Settings</Text>

        

        <View style={styles.accountSection}>

          <Text style={styles.accountTitle}>iPhone</Text>

          <Text style={styles.accountSubtitle}>MetaQuotes Software Corp.</Text>

          <Text style={styles.accountDetails}>152932025 - MetaQuotes-Demo</Text>

          <Text style={styles.accountDetails}>Main</Text>

        </View>



        <View style={styles.settingsGroup}>

          {renderSettingItem('../assets/snack-icon.png', 'New Account', null, true)}

          {renderSettingItem('../assets/snack-icon.png', 'Mailbox', 'Built-in Virtual Hosting — trading robots and signa...')}

          {renderSettingItem('../assets/snack-icon.png', 'News', 'UAE is poised to hit its oil capacity a year earlier t...')}

          {renderSettingItem('../assets/snack-icon.png', 'Tradays', 'Economic calendar')}

        </View>



        <View style={styles.settingsGroup}>

          {renderSettingItem('../assets/snack-icon.png', 'Chat and Messages', 'Sign in to MQL5.community!')}

          {renderSettingItem('../assets/snack-icon.png', 'Traders Community')}

          {renderSettingItem('../assets/snack-icon.png', 'MQL5 Algo Trading')}

        </View>



        <View style={styles.settingsGroup}>

          {renderSettingItem('../assets/snack-icon.png', 'OTP', 'One-time password generator')}

          {renderSettingItem('../assets/snack-icon.png', 'Interface', 'English')}

          {renderSettingItem('../assets/snack-icon.png', 'Charts')}

          {renderSettingItem('../assets/snack-icon.png', 'Journal')}

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Quotes')}>

          <Icon name="stats-chart-outline" size={24} color="#8E8E93" />

          <Text style={styles.footerButtonText}>Quotes</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Chart')}>

          <Icon name="bar-chart-outline" size={24} color="#8E8E93" />

          <Text style={styles.footerButtonText}>Chart</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Trade')}>

          <Icon name="swap-horizontal-outline" size={24} color="#8E8E93" />

          <Text style={styles.footerButtonText}>Trade</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('History')}>

          <Icon name="time-outline" size={24} color="#8E8E93" />

          <Text style={styles.footerButtonText}>History</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.footerButton, styles.activeFooterButton]}>

          <Icon name="settings" size={24} color="#007AFF" />

          <Text style={[styles.footerButtonText, styles.activeFooterButtonText]}>Settings</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000000',

  },

  headerTitle: {

    fontSize: 34,

    fontWeight: 'bold',

    color: '#FFFFFF',

    padding: 16,

  },

  accountSection: {

    backgroundColor: '#1C1C1E',

    padding: 16,

    marginBottom: 20,

  },

  accountTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFFFFF',

    marginBottom: 4,

  },

  accountSubtitle: {

    fontSize: 14,

    color: '#8E8E93',

    marginBottom: 4,

  },

  accountDetails: {

    fontSize: 14,

    color: '#8E8E93',

  },

  settingsGroup: {

    marginBottom: 20,

  },

  settingItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#1C1C1E',

    borderBottomWidth: 1,

    borderBottomColor: '#38383A',

  },

  settingIconContainer: {

    width: 30,

    height: 30,

    marginRight: 16,

    position: 'relative',

  },

  settingIcon: {

    width: 30,

    height: 30,

    borderRadius: 6,

  },

  newBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: '#4CD964',

    borderRadius: 10,

    paddingHorizontal: 6,

    paddingVertical: 2,

  },

  newBadgeText: {

    color: '#FFFFFF',

    fontSize: 10,

    fontWeight: 'bold',

  },

  settingTextContainer: {

    flex: 1,

  },

  settingTitle: {

    fontSize: 16,

    color: '#FFFFFF',

  },

  settingSubtitle: {

    fontSize: 12,

    color: '#8E8E93',

    marginTop: 4,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#38383A',

    paddingVertical: 10,

  },

  footerButton: {

    alignItems: 'center',

  },

  footerButtonText: {

    color: '#8E8E93',

    fontSize: 10,

    marginTop: 4,

  },

  activeFooterButton: {

    borderTopWidth: 2,

    borderTopColor: '#007AFF',

  },

  activeFooterButtonText: {

    color: '#007AFF',

  },

});



export default SettingsScreen;