import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Sell = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
const navigateToUpload = () => {
navigation.navigate('Upload');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.title}>来闲鱼，搞点钱！</Text>
<Text style={styles.subtitle}>3亿人在闲鱼赚钱</Text>
<TouchableOpacity onPress={navigateToHome} style={styles.closeButton}>
<Text style={styles.closeButtonText}>X</Text>
</TouchableOpacity>
</View>
  <TouchableOpacity style={styles.sellOption} onPress={navigateToUpload}>
    <View style={styles.sellOptionContent}>
      <Text style={styles.sellOptionTitle}>发闲置</Text>
      <Text style={styles.sellOptionDescription}>30s发布宝贝，啥都能换钱</Text>
    </View>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>

  <TouchableOpacity style={styles.sellOption}>
    <View style={styles.sellOptionContent}>
      <Text style={styles.sellOptionTitle}>一键转卖</Text>
      <Text style={styles.sellOptionDescription}>2年前买的期刊杂志还能卖30元</Text>
    </View>
    <Image source={require('../assets/snack-icon.png')} style={styles.magazineIcon} />
  </TouchableOpacity>

  <View style={styles.smallOptionsContainer}>
    <TouchableOpacity style={styles.smallOption}>
      <Text style={styles.smallOptionTitle}>高价帮卖</Text>
      <Text style={styles.smallOptionDescription}>支持自己定价卖</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.smallOption}>
      <Text style={styles.smallOptionTitle}>闲鱼回收</Text>
      <Text style={styles.smallOptionDescription}>免费上门回收</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.smallOption}>
      <Text style={styles.smallOptionTitle}>晒好物</Text>
      <Text style={styles.smallOptionDescription}>只晒不卖的宝贝</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.partTimeJobOption}>
    <View style={styles.partTimeJobContent}>
      <Text style={styles.partTimeJobTitle}>搞副业</Text>
      <Text style={styles.partTimeJobDescription}>闲暇时间能换钱</Text>
      <Text style={styles.partTimeJobParticipants}>15万人在这赚钱</Text>
    </View>
    <Image source={require('../assets/snack-icon.png')} style={styles.partTimeJobIcon} />
  </TouchableOpacity>

  <View style={styles.imageGallery}>
    <Image source={require('../assets/snack-icon.png')} style={styles.galleryImage} />
    <Image source={require('../assets/snack-icon.png')} style={styles.galleryImage} />
    <Image source={require('../assets/snack-icon.png')} style={styles.galleryImage} />
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
padding: 20,
backgroundColor: '#fff',
},
title: {
fontSize: 24,
fontWeight: 'bold',
},
subtitle: {
fontSize: 16,
color: '#666',
marginTop: 5,
},
closeButton: {
position: 'absolute',
top: 20,
right: 20,
},
closeButtonText: {
fontSize: 24,
fontWeight: 'bold',
},
sellOption: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 20,
marginTop: 10,
},
sellOptionContent: {
flex: 1,
},
sellOptionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
sellOptionDescription: {
fontSize: 14,
color: '#666',
marginTop: 5,
},
arrowIcon: {
width: 20,
height: 20,
},
magazineIcon: {
width: 60,
height: 60,
},
smallOptionsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 10,
},
smallOption: {
backgroundColor: '#fff',
padding: 15,
width: '32%',
},
smallOptionTitle: {
fontSize: 16,
fontWeight: 'bold',
},
smallOptionDescription: {
fontSize: 12,
color: '#666',
marginTop: 5,
},
partTimeJobOption: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#e6f7ff',
padding: 20,
marginTop: 10,
},
partTimeJobContent: {
flex: 1,
},
partTimeJobTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#1890ff',
},
partTimeJobDescription: {
fontSize: 14,
color: '#666',
marginTop: 5,
},
partTimeJobParticipants: {
fontSize: 12,
color: '#1890ff',
marginTop: 5,
},
partTimeJobIcon: {
width: 60,
height: 60,
},
imageGallery: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 10,
padding: 10,
},
galleryImage: {
width: '32%',
height: 100,
borderRadius: 8,
},
});
export default Sell;