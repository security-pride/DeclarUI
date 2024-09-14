import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const UtilityBills = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
const renderUtilityItem = (icon, label, hasRedPacket = false) => (
<View style={styles.utilityItem}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.utilityIcon} />
<View style={styles.utilityContent}>
<Text style={styles.utilityLabel}>{label}</Text>
{hasRedPacket && (
<View style={styles.redPacket}>
<Text style={styles.redPacketText}>红包0.88元</Text>
</View>
)}
<Text style={styles.utilitySubLabel}>去添加</Text>
</View>
<TouchableOpacity style={styles.addButton}>
<Text style={styles.addButtonText}>立即添加</Text>
</TouchableOpacity>
</View>
);
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToHome}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>烟台市 ▼</Text>
<TouchableOpacity>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <View style={styles.titleSection}>
    <Text style={styles.mainTitle}>生活缴费</Text>
    <View style={styles.features}>
      <View style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.checkIcon} />
        <Text style={styles.featureText}>极速到账</Text>
      </View>
      <View style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.checkIcon} />
        <Text style={styles.featureText}>出账通知</Text>
      </View>
      <View style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.checkIcon} />
        <Text style={styles.featureText}>随时可缴</Text>
      </View>
    </View>
  </View>

  <View style={styles.utilitySection}>
    <View style={styles.utilityHeader}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.memberIcon} />
      <Text style={styles.utilityHeaderText}>水电燃气费得会员积分</Text>
    </View>
    {renderUtilityItem('电', '电费', true)}
    {renderUtilityItem('水', '水费')}
    {renderUtilityItem('火', '燃气费')}
  </View>

  <View style={styles.otherUtilities}>
    {['暖气费', '有线电视', '宽带', '手机', '固话', '物业费', '转供缴费'].map((item, index) => (
      <View key={index} style={styles.otherUtilityItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.otherUtilityIcon} />
        <Text style={styles.otherUtilityLabel}>{item}</Text>
      </View>
    ))}
  </View>

  <View style={styles.instructionSection}>
    <Text style={styles.instructionTitle}>如何进行线上缴费</Text>
    <View style={styles.instructionStep}>
      <View style={styles.stepMarker}>
        <Text style={styles.stepNumber}>1</Text>
      </View>
      <Text style={styles.stepText}>选择缴费类型，输入缴费单位</Text>
    </View>
    <Text style={styles.stepSubtext}>选择类型后，点击【立即添加】</Text>
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
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: '#f0f0f0',
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
moreIcon: {
width: 24,
height: 24,
},
titleSection: {
padding: 20,
},
mainTitle: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 10,
},
features: {
flexDirection: 'row',
},
featureItem: {
flexDirection: 'row',
alignItems: 'center',
marginRight: 15,
},
checkIcon: {
width: 16,
height: 16,
marginRight: 5,
},
featureText: {
color: '#666',
},
utilitySection: {
backgroundColor: 'white',
borderRadius: 10,
margin: 15,
padding: 15,
},
utilityHeader: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 15,
},
memberIcon: {
width: 20,
height: 20,
marginRight: 10,
},
utilityHeaderText: {
color: '#666',
},
utilityItem: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
utilityIcon: {
width: 40,
height: 40,
marginRight: 15,
},
utilityContent: {
flex: 1,
},
utilityLabel: {
fontSize: 16,
fontWeight: 'bold',
},
redPacket: {
backgroundColor: '#ffebee',
borderRadius: 3,
padding: 2,
marginTop: 5,
},
redPacketText: {
color: '#ff4d4f',
fontSize: 12,
},
utilitySubLabel: {
color: '#999',
fontSize: 12,
},
addButton: {
backgroundColor: '#1890ff',
borderRadius: 15,
paddingVertical: 5,
paddingHorizontal: 15,
},
addButtonText: {
color: 'white',
fontSize: 14,
},
otherUtilities: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 15,
},
otherUtilityItem: {
width: '25%',
alignItems: 'center',
marginBottom: 20,
},
otherUtilityIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
otherUtilityLabel: {
fontSize: 12,
textAlign: 'center',
},
instructionSection: {
backgroundColor: 'white',
margin: 15,
padding: 15,
borderRadius: 10,
},
instructionTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 15,
},
instructionStep: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 5,
},
stepMarker: {
width: 24,
height: 24,
borderRadius: 12,
backgroundColor: '#1890ff',
justifyContent: 'center',
alignItems: 'center',
marginRight: 10,
},
stepNumber: {
color: 'white',
fontWeight: 'bold',
},
stepText: {
fontSize: 14,
},
stepSubtext: {
fontSize: 12,
color: '#666',
marginLeft: 34,
},
});
export default UtilityBills;