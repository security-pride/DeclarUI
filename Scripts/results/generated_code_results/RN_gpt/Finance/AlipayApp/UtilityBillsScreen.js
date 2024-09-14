import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UtilityBillsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.backButton} />
        <Text style={styles.title}>生活缴费</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.menuButton} />
        <Image source={require('../assets/snack-icon.png')} style={styles.notificationButton} />
      </View>

      <View style={styles.features}>
        <Text style={styles.featureText}>极速到账</Text>
        <Text style={styles.featureText}>出账通知</Text>
        <Text style={styles.featureText}>随时可缴</Text>
      </View>

      <Text style={styles.membershipPointsText}>
        水电燃气费得会员积分
      </Text>

      <ScrollView style={styles.billList} showsVerticalScrollIndicator={false}>
        <View style={styles.billItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.billLabel}>电费 去添加</Text>
          <Button title="立即添加" onPress={() => {}} />
        </View>
        
        <View style={styles.billItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.billLabel}>水费 去添加</Text>
          <Button title="立即添加" onPress={() => {}} />
        </View>

        <View style={styles.billItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.billLabel}>燃气费 去添加</Text>
          <Button title="立即添加" onPress={() => {}} />
        </View>

        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />
            <Text style={styles.gridLabel}>暖气费</Text>
          </View>

          <View style={styles.gridItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />
            <Text style={styles.gridLabel}>有线电视</Text>
          </View>

          <View style={styles.gridItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />
            <Text style={styles.gridLabel}>宽带</Text>
          </View>

          <View style={styles.gridItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />
            <Text style={styles.gridLabel}>手机</Text>
          </View>

          <View style={styles.gridItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />
            <Text style={styles.gridLabel}>固话</Text>
          </View>

          <View style={styles.gridItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />
            <Text style={styles.gridLabel}>物业费</Text>
          </View>

          <View style={styles.gridItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />
            <Text style={styles.gridLabel}>转供缴费</Text>
          </View>
        </View>

        <Text style={styles.instructionsHeader}>
          如何进行线上缴费
        </Text>

        <View style={styles.instructionItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.stepMarker} />
          <Text style={styles.instructionText}>
            选择缴费类型，输入缴费单位 选择类型后，点击【立即添加】
          </Text>
        </View>
      </ScrollView>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    width: 24,
    height: 24,
  },
  notificationButton: {
    width: 24,
    height: 24,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  featureText: {
    fontSize: 16,
  },
  membershipPointsText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 8,
  },
  billList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  billItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  icon: {
    width: 24,
    height: 24,
  },
  billLabel: {
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  gridItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 8,
  },
  gridIcon: {
    width: 40,
    height: 40,
  },
  gridLabel: {
    fontSize: 14,
    marginTop: 4,
  },
  instructionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    backgroundColor: '#E6F7FF',
    paddingVertical: 8,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  stepMarker: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  instructionText: {
    fontSize: 16,
    flex: 1,
  },
});

export default UtilityBillsScreen;