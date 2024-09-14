import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const TradeScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>收付款</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.memberCard}>

        <View style={styles.memberHeader}>

          <Image source={require('../assets/snack-icon.png')} style={styles.memberIcon} />

          <Text style={styles.memberText}>大众会员</Text>

        </View>

        <View style={styles.paymentSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.paymentIcon} />

          <Text style={styles.paymentText}>向商家付款</Text>

        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.barcode} />

        <Text style={styles.barcodeText}>点击可查看付款码数字</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.qrCode} />

        <View style={styles.bankCardSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bankIcon} />

          <View style={styles.bankTextContainer}>

            <Text style={styles.bankCardText}>招商银行储蓄卡 (7616)</Text>

            <Text style={styles.bankCardSubText}>优先使用此付款方式</Text>

          </View>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.actionButtons}>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>收钱</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>分期付款</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>转账</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1E90FF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

  },

  backIcon: {

    width: 24,

    height: 24,

    tintColor: 'white',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

  },

  moreIcon: {

    width: 24,

    height: 24,

    tintColor: 'white',

  },

  memberCard: {

    backgroundColor: 'white',

    borderRadius: 10,

    margin: 15,

    padding: 15,

  },

  memberHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  memberIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  memberText: {

    fontSize: 14,

    color: '#4A90E2',

  },

  paymentSection: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  paymentIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  paymentText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  barcode: {

    width: '100%',

    height: 80,

    resizeMode: 'contain',

    marginBottom: 10,

  },

  barcodeText: {

    textAlign: 'center',

    color: '#888',

    marginBottom: 15,

  },

  qrCode: {

    width: 200,

    height: 200,

    alignSelf: 'center',

    marginBottom: 15,

  },

  bankCardSection: {

    flexDirection: 'row',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#EEE',

    paddingTop: 15,

  },

  bankIcon: {

    width: 30,

    height: 30,

    marginRight: 10,

  },

  bankTextContainer: {

    flex: 1,

  },

  bankCardText: {

    fontSize: 14,

    fontWeight: 'bold',

  },

  bankCardSubText: {

    fontSize: 12,

    color: '#888',

  },

  arrowIcon: {

    width: 20,

    height: 20,

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginTop: 20,

  },

  actionButton: {

    alignItems: 'center',

    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    borderRadius: 10,

    padding: 15,

    width: '30%',

  },

  actionIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

    tintColor: 'white',

  },

  actionText: {

    color: 'white',

    fontSize: 14,

  },

});



export default TradeScreen;