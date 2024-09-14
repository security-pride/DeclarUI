import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity style={styles.menuButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<View style={styles.headerRight}>
<TouchableOpacity style={styles.iconButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.iconButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.iconButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView>
    <View style={styles.balanceCard}>
      <Image source={require('../assets/snack-icon.png')} style={styles.paypalLogo} />
      <Text style={styles.balanceAmount}>£0.00</Text>
      <Text style={styles.balanceLabel}>PayPal balance</Text>
    </View>

    <Text style={styles.sectionTitle}>Send again</Text>
    <View style={styles.sendAgainContainer}>
      <TouchableOpacity style={styles.contactButton}>
        <View style={styles.contactInitials}>
          <Text style={styles.initialsText}>ZF</Text>
        </View>
        <Text style={styles.contactName}>Zhou Fang</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <View style={styles.contactInitials}>
          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
        </View>
        <Text style={styles.contactName}>Search</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.referralCard}>
      <Text style={styles.referralTitle}>Let's go! Refer a friend to earn a £10 reward.</Text>
      <Text style={styles.referralDetails}>
        Max 10 friends. Min spend £5 within 30 days. Ends 31/12/24. Terms apply.
      </Text>
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteButtonText}>Invite friends</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.sectionTitle}>Send money internationally</Text>

    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('Send')}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.requestButton}>
        <Text style={styles.buttonText}>Request</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>

  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={[styles.tabLabel, styles.activeTabLabel]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Crypto')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Crypto</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Payments</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Wallet')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Wallet</Text>
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
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
},
menuButton: {
padding: 5,
},
headerRight: {
flexDirection: 'row',
},
iconButton: {
padding: 5,
marginLeft: 15,
},
icon: {
width: 24,
height: 24,
},
balanceCard: {
backgroundColor: '#f0f0f0',
borderRadius: 10,
padding: 20,
margin: 15,
alignItems: 'center',
},
paypalLogo: {
width: 30,
height: 30,
marginBottom: 10,
},
balanceAmount: {
fontSize: 24,
fontWeight: 'bold',
},
balanceLabel: {
fontSize: 16,
color: '#666',
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 15,
marginTop: 20,
marginBottom: 10,
},
sendAgainContainer: {
flexDirection: 'row',
paddingHorizontal: 15,
},
contactButton: {
alignItems: 'center',
marginRight: 20,
},
contactInitials: {
width: 50,
height: 50,
borderRadius: 25,
backgroundColor: '#8A2BE2',
justifyContent: 'center',
alignItems: 'center',
},
initialsText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
searchIcon: {
width: 24,
height: 24,
},
contactName: {
marginTop: 5,
fontSize: 14,
},
referralCard: {
backgroundColor: '#f0f0f0',
borderRadius: 10,
padding: 20,
margin: 15,
},
referralTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
referralDetails: {
fontSize: 14,
color: '#666',
marginBottom: 15,
},
inviteButton: {
backgroundColor: '#0070BA',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 20,
alignSelf: 'flex-start',
},
inviteButtonText: {
color: '#fff',
fontWeight: 'bold',
},
actionButtonsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
paddingHorizontal: 15,
marginTop: 20,
},
sendButton: {
backgroundColor: '#0070BA',
paddingVertical: 15,
paddingHorizontal: 60,
borderRadius: 25,
},
requestButton: {
backgroundColor: '#fff',
paddingVertical: 15,
paddingHorizontal: 60,
borderRadius: 25,
borderWidth: 1,
borderColor: '#0070BA',
},
buttonText: {
color: '#fff',
fontWeight: 'bold',
fontSize: 16,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
tabItem: {
alignItems: 'center',
},
tabIcon: {
width: 24,
height: 24,
},
tabLabel: {
fontSize: 12,
marginTop: 5,
},
activeTabLabel: {
color: '#0070BA',
},
});
export default HomeScreen;