import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const UtilityBills = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToHome} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
<Text style={styles.headerText}>烟台市</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.menuButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
</TouchableOpacity>
</View>
  <ScrollView>
      <View style={styles.title1}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>生活缴费</Text>
        <View style={styles.features}>
          <FeatureItem icon={require('../assets/snack-icon.png')} text="极速到账" />
          <FeatureItem icon={require('../assets/snack-icon.png')} text="出账通知" />
          <FeatureItem icon={require('../assets/snack-icon.png')} text="随时可缴" />
        </View>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.titleImage} />
    </View>
    

    <View style={styles.pointsCard}>
      <Image source={require('../assets/snack-icon.png')} style={styles.pointsIcon} />
      <Text style={styles.pointsText}>水电燃气费得会员积分</Text>
    </View>

    <View style={styles.billItems}>
      <BillItem 
        icon={require('../assets/snack-icon.png')}
        title="电费"
        subtitle="去添加"
        redEnvelope="红包0.88元"
      />
      <BillItem 
        icon={require('../assets/snack-icon.png')}
        title="水费"
        subtitle="去添加"
      />
      <BillItem 
        icon={require('../assets/snack-icon.png')}
        title="燃气费"
        subtitle="去添加"
      />
    </View>

    <View style={styles.otherServices}>
      <ServiceItem icon={require('../assets/snack-icon.png')} text="暖气费" />
      <ServiceItem icon={require('../assets/snack-icon.png')} text="有线电视" />
      <ServiceItem icon={require('../assets/snack-icon.png')} text="宽带" />
      <ServiceItem icon={require('../assets/snack-icon.png')} text="手机" />
      <ServiceItem icon={require('../assets/snack-icon.png')} text="固话" />
      <ServiceItem icon={require('../assets/snack-icon.png')} text="物业费" />
      <ServiceItem icon={require('../assets/snack-icon.png')} text="转供缴费" />
    </View>

    <View style={styles.instructions}>
      <Text style={styles.instructionsTitle}>如何进行线上缴费</Text>
      <View style={styles.instructionStep}>
        <Image source={require('../assets/snack-icon.png')} style={styles.stepIcon} />
        <Text style={styles.stepText}>
          选择缴费类型，输入缴费单位
          {'\n'}
          选择类型后，点击【立即添加】
        </Text>
      </View>
    </View>
  </ScrollView>
</View>
);
};
const FeatureItem = ({ icon, text }) => (
<View style={styles.featureItem}>
<Image source={icon} style={styles.featureIcon} />
<Text style={styles.featureText}>{text}</Text>
</View>
);
const BillItem = ({ icon, title, subtitle, redEnvelope }) => (
<View style={styles.billItem}>
<Image source={icon} style={styles.billIcon} />
<View style={styles.billInfo}>
<Text style={styles.billTitle}>{title}</Text>
<Text style={styles.billSubtitle}>{subtitle}</Text>
{redEnvelope && <Text style={styles.redEnvelope}>{redEnvelope}</Text>}
</View>
<TouchableOpacity style={styles.addButton}>
<Text style={styles.addButtonText}>立即添加</Text>
</TouchableOpacity>
</View>
);
const ServiceItem = ({ icon, text }) => (
<View style={styles.serviceItem}>
<Image source={icon} style={styles.serviceIcon} />
<Text style={styles.serviceText}>{text}</Text>
</View>
);
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
},
backButton: {
flexDirection: 'row',
alignItems: 'center',
},
backIcon: {
width: 20,
height: 20,
marginRight: 5,
},
headerText: {
fontSize: 16,
fontWeight: 'bold',
},
menuButton: {
padding: 5,
},
menuIcon: {
width: 20,
height: 20,
},
title1: {
flexDirection: 'row'
},
titleSection: {
flexDirection: 'column',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
},
title: {
fontSize: 24,
fontWeight: 'bold',
},
titleImage: {
width: 100,
height: 100,
},
features: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 15,
},
featureItem: {
alignItems: 'center',
},
featureIcon: {
width: 20,
height: 20,
marginBottom: 5,
},
featureText: {
fontSize: 12,
},
pointsCard: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 15,
marginHorizontal: 15,
borderRadius: 10,
marginBottom: 15,
},
pointsIcon: {
width: 20,
height: 20,
marginRight: 10,
},
pointsText: {
fontSize: 14,
},
billItems: {
backgroundColor: '#fff',
marginHorizontal: 15,
borderRadius: 10,
marginBottom: 15,
},
billItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
billIcon: {
width: 30,
height: 30,
marginRight: 15,
},
billInfo: {
flex: 1,
},
billTitle: {
fontSize: 16,
fontWeight: 'bold',
},
billSubtitle: {
fontSize: 12,
color: '#888',
},
redEnvelope: {
fontSize: 12,
color: 'red',
},
addButton: {
backgroundColor: '#1e90ff',
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
},
addButtonText: {
color: '#fff',
fontSize: 12,
},
otherServices: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 15,
backgroundColor: '#fff',
marginHorizontal: 15,
borderRadius: 10,
marginBottom: 15,
},
serviceItem: {
width: '25%',
alignItems: 'center',
marginBottom: 15,
},
serviceIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
serviceText: {
fontSize: 12,
},
instructions: {
backgroundColor: '#fff',
marginHorizontal: 15,
borderRadius: 10,
padding: 15,
},
instructionsTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
instructionStep: {
flexDirection: 'row',
alignItems: 'center',
},
stepIcon: {
width: 20,
height: 20,
marginRight: 10,
},
stepText: {
fontSize: 14,
lineHeight: 20,
},
});
export default UtilityBills;