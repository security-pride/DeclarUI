import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const WalletScreen = () => {
const navigation = useNavigation();
return (
<View style={styles.container}>
<View style={styles.tabContainer}>
<Text style={styles.activeTab}>Wallet</Text>
<Text style={styles.inactiveTab}>Rewards</Text>
<Text style={styles.inactiveTab}>Activity</Text>
</View>
  <ScrollView>
    <View style={styles.balanceCard}>
      <View style={styles.balanceHeader}>
        <Image source={require('../assets/snack-icon.png')} style={styles.paypalLogo} />
        <Text style={styles.balanceLabel}>PayPal balance</Text>
        <Text style={styles.balanceAmount}>£0.00</Text>
      </View>
      <Text style={styles.totalBalance}>£0.00</Text>
    </View>

    <View style={styles.accountsSection}>
      <Text style={styles.sectionTitle}>Bank accounts and cards</Text>
      <TouchableOpacity style={styles.addNewButton}>
        <Text style={styles.addNewText}>Add new</Text>
        <Text style={styles.rightArrow}>›</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.cardContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardNumber}>•• 5871</Text>
        <Text style={styles.cardType}>信用卡</Text>
      </View>
    </View>
  </ScrollView>

  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Crypto')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Crypto</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Payments</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={[styles.tabLabel, styles.activeTabLabel]}>Wallet</Text>
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
tabContainer: {
flexDirection: 'row',
justifyContent: 'flex-start',
paddingHorizontal: 20,
paddingTop: 20,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
activeTab: {
fontSize: 18,
fontWeight: 'bold',
marginRight: 20,
paddingBottom: 10,
borderBottomWidth: 2,
borderBottomColor: '#0070BA',
},
inactiveTab: {
fontSize: 18,
color: '#888',
marginRight: 20,
paddingBottom: 10,
},
balanceCard: {
backgroundColor: '#f0f0f0',
borderRadius: 10,
padding: 20,
margin: 20,
},
balanceHeader: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
paypalLogo: {
width: 24,
height: 24,
marginRight: 10,
},
balanceLabel: {
flex: 1,
fontSize: 16,
},
balanceAmount: {
fontSize: 16,
fontWeight: 'bold',
},
totalBalance: {
fontSize: 36,
fontWeight: 'bold',
},
accountsSection: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
marginBottom: 20,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
addNewButton: {
flexDirection: 'row',
alignItems: 'center',
},
addNewText: {
color: '#0070BA',
fontSize: 16,
},
rightArrow: {
color: '#0070BA',
fontSize: 20,
marginLeft: 5,
},
cardContainer: {
margin: 20,
},
cardImage: {
width: '100%',
height: 200,
borderRadius: 10,
},
cardInfo: {
position: 'absolute',
bottom: 20,
left: 20,
},
cardNumber: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
cardType: {
color: '#fff',
fontSize: 14,
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
export default WalletScreen;