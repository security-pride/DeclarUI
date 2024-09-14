import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
const Settings = ({ navigation }) => {
const menuItems = [
{ icon: 'user-plus', text: 'New Account' },
{ icon: 'envelope', text: 'Mailbox', description: 'Built-in Virtual Hosting — trading robots and signals' },
{ icon: 'book', text: 'News', description: 'UAE is poised to hit its oil capacity a year earlier t...' },
{ icon: 'calendar', text: 'Tradays', description: 'Economic calendar' },
{ icon: 'comments', text: 'Chat and Messages', description: 'Sign in to MQL5.community!' },
{ icon: 'users', text: 'Traders Community' },
{ icon: 'chart-line', text: 'MQL5 Algo Trading' },
{ icon: 'key', text: 'OTP', description: 'One-time password generator' },
{ icon: 'language', text: 'Interface', description: 'English' },
{ icon: 'chart-bar', text: 'Charts' },
{ icon: 'book', text: 'Journal' },
];
return (
<View style={styles.container}>
<Text style={styles.header}>Settings</Text>
<ScrollView>
<View style={styles.accountInfo}>
<Text style={styles.deviceInfo}>iPhone</Text>
<Text style={styles.softwareInfo}>MetaQuotes Software Corp.</Text>
<Text style={styles.accountNumber}>152932025 - MetaQuotes-Demo</Text>
<Text style={styles.accountType}>Main</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.demoIcon} />
</View>
{menuItems.map((item, index) => (
<TouchableOpacity key={index} style={styles.menuItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
<View style={styles.menuTextContainer}>
<Text style={styles.menuItemText}>{item.text}</Text>
{item.description && <Text style={styles.menuItemDescription}>{item.description}</Text>}
</View>
<Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
</TouchableOpacity>
))}
</ScrollView>
<View style={styles.footer}>
<TouchableOpacity onPress={() => navigation.navigate('QuoteSimple')}>
<Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
<Text style={styles.footerText}>Quotes</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Charts')}>
<Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
<Text style={styles.footerText}>Chart</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
<Text style={styles.footerText}>Trade</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
<Text style={styles.footerText}>History</Text>
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
<Text style={styles.footerText}>Settings</Text>
</TouchableOpacity>
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
},
header: {
fontSize: 20,
fontWeight: 'bold',
color: '#fff',
textAlign: 'center',
padding: 15,
},
accountInfo: {
backgroundColor: '#1c1c1e',
padding: 15,
marginBottom: 20,
},
deviceInfo: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
softwareInfo: {
color: '#8e8e93',
fontSize: 14,
},
accountNumber: {
color: '#8e8e93',
fontSize: 14,
},
accountType: {
color: '#8e8e93',
fontSize: 14,
},
demoIcon: {
position: 'absolute',
top: 10,
right: 10,
width: 40,
height: 20,
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#2c2c2e',
},
menuIcon: {
width: 30,
height: 30,
marginRight: 15,
},
menuTextContainer: {
flex: 1,
},
menuItemText: {
color: '#fff',
fontSize: 16,
},
menuItemDescription: {
color: '#8e8e93',
fontSize: 12,
},
arrowIcon: {
width: 20,
height: 20,
},
footer: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#2c2c2e',
paddingVertical: 10,
},
footerIcon: {
width: 25,
height: 25,
alignSelf: 'center',
},
footerText: {
color: '#8e8e93',
fontSize: 12,
marginTop: 5,
},
});
export default Settings;