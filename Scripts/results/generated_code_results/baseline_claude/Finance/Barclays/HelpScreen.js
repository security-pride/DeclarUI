import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HelpScreen = () => {

  const navigation = useNavigation();



  const QuickLink = ({ icon, title }) => (

    <TouchableOpacity style={styles.quickLink}>

      <View style={styles.quickLinkIcon}>

        <Image source={icon} style={styles.icon} />

      </View>

      <Text style={styles.quickLinkText}>{title}</Text>

    </TouchableOpacity>

  );



  const HelpItem = ({ icon, title, description, hasArrow = true }) => (

    <TouchableOpacity style={styles.helpItem}>

      <Image source={icon} style={styles.helpItemIcon} />

      <View style={styles.helpItemContent}>

        <Text style={styles.helpItemTitle}>{title}</Text>

        {description && <Text style={styles.helpItemDescription}>{description}</Text>}

      </View>

      {hasArrow && <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        <Text style={styles.title}>Help</Text>

        

        <View style={styles.searchContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput 

            style={styles.searchInput}

            placeholder="Search or ask a question"

            placeholderTextColor="#999"

          />

        </View>



        <Text style={styles.sectionTitle}>Quick links</Text>

        <View style={styles.quickLinksContainer}>

          <QuickLink icon={require('../assets/snack-icon.png')} title="Report fraud" />

          <QuickLink icon={require('../assets/snack-icon.png')} title="Cards" />

          <QuickLink icon={require('../assets/snack-icon.png')} title="Statements" />

        </View>



        <View style={styles.helpTopicsContainer}>

          <Text style={styles.sectionTitle}>Help topics</Text>

          <HelpItem 

            icon={require('../assets/snack-icon.png')}

            title="Browse all topics"

            description="Check how to manage Direct Debits, pay in a cheque and more."

          />

        </View>



        <View style={styles.moreHelpContainer}>

          <Text style={styles.sectionTitle}>More help</Text>

          <HelpItem 

            icon={require('../assets/snack-icon.png')}

            title="Money worries and support"

          />

          <HelpItem 

            icon={require('../assets/snack-icon.png')}

            title="Accessible services"

          />

          <HelpItem 

            icon={require('../assets/snack-icon.png')}

            title="Our service status"

          />

          <HelpItem 

            icon={require('../assets/snack-icon.png')}

            title="Tour the app"

          />

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Accounts</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Products')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Products</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('PayAndTransfer')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Pay & Transfer</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.footerItem, styles.activeFooterItem]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={[styles.footerText, styles.activeFooterText]}>Help</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('More')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>More</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  title: {

    fontSize: 32,

    fontWeight: 'bold',

    marginTop: 40,

    marginLeft: 20,

    marginBottom: 20,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 8,

    marginHorizontal: 20,

    paddingHorizontal: 10,

    marginBottom: 20,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 20,

    marginBottom: 10,

  },

  quickLinksContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  quickLink: {

    alignItems: 'center',

  },

  quickLinkIcon: {

    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: '#007AFF',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 5,

  },

  icon: {

    width: 30,

    height: 30,

    tintColor: '#fff',

  },

  quickLinkText: {

    fontSize: 14,

    textAlign: 'center',

  },

  helpTopicsContainer: {

    backgroundColor: '#f8f8f8',

    paddingVertical: 10,

    marginBottom: 20,

  },

  moreHelpContainer: {

    backgroundColor: '#f8f8f8',

    paddingVertical: 10,

  },

  helpItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    paddingVertical: 15,

    paddingHorizontal: 20,

    marginBottom: 1,

  },

  helpItemIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  helpItemContent: {

    flex: 1,

  },

  helpItemTitle: {

    fontSize: 16,

    fontWeight: '500',

  },

  helpItemDescription: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  arrowIcon: {

    width: 16,

    height: 16,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

    backgroundColor: '#fff',

  },

  footerItem: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  footerText: {

    fontSize: 12,

  },

  activeFooterItem: {

    borderTopWidth: 2,

    borderTopColor: '#007AFF',

    paddingTop: 8,

  },

  activeFooterText: {

    color: '#007AFF',

  },

});



export default HelpScreen;