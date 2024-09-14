import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HelpCenter = () => {
const navigation = useNavigation();
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<SafeAreaView style={styles.container}>
<ScrollView>
<Text style={styles.title}>Help</Text>
    <TextInput
      style={styles.searchBar}
      placeholder="Search or ask a question"
      placeholderTextColor="#888"
    />

    <Text style={styles.sectionTitle}>Quick links</Text>

    <View style={styles.quickLinksContainer}>
      <TouchableOpacity style={styles.quickLinkItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.quickLinkText}>Report fraud</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quickLinkItem} onPress={() => handleNavigation('Cards')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.quickLinkText}>Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quickLinkItem} onPress={() => handleNavigation('StatementsandDocuments')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.quickLinkText}>Statements</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.sectionTitle}>Help topics</Text>

    <TouchableOpacity style={styles.helpTopicItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <View>
        <Text style={styles.helpTopicTitle}>Browse all topics</Text>
        <Text style={styles.helpTopicDescription}>Check how to manage Direct Debits, pay in a cheque and more.</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>

    <Text style={styles.sectionTitle}>More help</Text>

    <TouchableOpacity style={styles.moreHelpItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.moreHelpText}>Money worries and support</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.moreHelpItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.moreHelpText}>Accessible services</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.moreHelpItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.moreHelpText}>Our service status</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.moreHelpItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.moreHelpText}>Tour the app</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  </ScrollView>

  <View style={styles.navBar}>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Accounts</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Products</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Pay & Transfer</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Help</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('More')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>More</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
title: {
fontSize: 28,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 20,
marginBottom: 20,
},
searchBar: {
height: 40,
margin: 20,
backgroundColor: '#f0f0f0',
borderRadius: 8,
paddingLeft: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 20,
marginTop: 20,
marginBottom: 10,
},
quickLinksContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginBottom: 20,
},
quickLinkItem: {
alignItems: 'center',
},
icon: {
width: 40,
height: 40,
marginBottom: 5,
},
quickLinkText: {
textAlign: 'center',
},
helpTopicItem: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
margin: 20,
padding: 15,
borderRadius: 8,
},
helpTopicTitle: {
fontWeight: 'bold',
marginBottom: 5,
},
helpTopicDescription: {
color: '#666',
fontSize: 12,
},
moreHelpItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 15,
paddingHorizontal: 20,
borderBottomWidth: 1,
borderBottomColor: '#eee',
},
moreHelpText: {
flex: 1,
marginLeft: 10,
},
arrow: {
fontSize: 20,
color: '#888',
},
navBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#eee',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default HelpCenter;