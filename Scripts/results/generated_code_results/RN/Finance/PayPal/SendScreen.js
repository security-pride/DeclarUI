import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SendScreen = () => {
const navigation = useNavigation();
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TextInput style={styles.searchBar} placeholder="姓名、用户名、邮箱地址、手机号码" placeholderTextColor="#888" />
<TouchableOpacity style={styles.qrButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <ScrollView>
    <TouchableOpacity style={styles.quickActionButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.planeIcon} />
      <Text style={styles.quickActionText}>跨境汇款至银行账户、现金领取点等</Text>
    </TouchableOpacity>

    <Text style={styles.sectionTitle}>建议联系人</Text>

    <View style={styles.contactItem}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>ZF</Text>
      </View>
      <Text style={styles.contactName}>Fang Zhou</Text>
      <TouchableOpacity style={styles.infoButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />
      </TouchableOpacity>
    </View>

    <Text style={styles.sectionTitle}>您的联系人</Text>

    <View style={styles.contactItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.companyLogo} />
      <Text style={styles.contactName}>CURVE UK LIMITED</Text>
      <TouchableOpacity style={styles.infoButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />
      </TouchableOpacity>
    </View>

    <View style={styles.contactItem}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>ZF</Text>
      </View>
      <Text style={styles.contactName}>Fang Zhou</Text>
      <TouchableOpacity style={styles.infoButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.enableContactsButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.contactsIcon} />
      <Text style={styles.enableContactsText}>启用您的联系人</Text>
    </TouchableOpacity>
  </ScrollView>
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
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
backButton: {
padding: 5,
},
icon: {
width: 24,
height: 24,
},
searchBar: {
flex: 1,
height: 40,
backgroundColor: '#f0f0f0',
borderRadius: 20,
paddingHorizontal: 15,
marginHorizontal: 10,
},
qrButton: {
padding: 5,
},
quickActionButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 10,
padding: 15,
margin: 10,
},
planeIcon: {
width: 24,
height: 24,
marginRight: 10,
},
quickActionText: {
flex: 1,
fontSize: 14,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
marginLeft: 15,
marginTop: 20,
marginBottom: 10,
},
contactItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
avatarContainer: {
width: 40,
height: 40,
borderRadius: 20,
backgroundColor: '#8A2BE2',
justifyContent: 'center',
alignItems: 'center',
},
avatarText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
companyLogo: {
width: 40,
height: 40,
borderRadius: 20,
},
contactName: {
flex: 1,
fontSize: 16,
marginLeft: 15,
},
infoButton: {
padding: 5,
},
infoIcon: {
width: 20,
height: 20,
},
enableContactsButton: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 10,
padding: 15,
margin: 10,
},
contactsIcon: {
width: 24,
height: 24,
marginRight: 10,
},
enableContactsText: {
fontSize: 16,
color: '#0070BA',
fontWeight: 'bold',
},
});
export default SendScreen;