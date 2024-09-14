import React from 'react';

import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const UtilityBillsScreen = () => {

  const navigation = useNavigation();



  const billItems = [

    { id: 1, title: '电费', icon: 'lightning', bonus: '红包0.88元', added: false },

    { id: 2, title: '水费', icon: 'water', added: false },

    { id: 3, title: '燃气费', icon: 'fire', added: false },

  ];



  const otherServices = [

    { id: 1, title: '暖气费', icon: 'heater' },

    { id: 2, title: '有线电视', icon: 'tv' },

    { id: 3, title: '宽带', icon: 'wifi' },

    { id: 4, title: '手机', icon: 'phone' },

    { id: 5, title: '固话', icon: 'landline' },

    { id: 6, title: '物业费', icon: 'building' },

    { id: 7, title: '转供缴费', icon: 'transfer' },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>烟台市 ▼</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.titleContainer}>

        <Text style={styles.title}>生活缴费</Text>

        <View style={styles.phoneImageContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.phoneImage} />

        </View>

      </View>



      <View style={styles.featuresContainer}>

        <Text style={styles.featureText}>✓ 极速到账</Text>

        <Text style={styles.featureText}>✓ 出账通知</Text>

        <Text style={styles.featureText}>✓ 随时可缴</Text>

      </View>



      <View style={styles.cardContainer}>

        <View style={styles.cardHeader}>

          <Image source={require('../assets/snack-icon.png')} style={styles.cardHeaderIcon} />

          <Text style={styles.cardHeaderText}>水电燃缴费得会员积分</Text>

        </View>



        {billItems.map((item) => (

          <View key={item.id} style={styles.billItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.billIcon} />

            <View style={styles.billTextContainer}>

              <Text style={styles.billTitle}>{item.title}</Text>

              <Text style={styles.billSubtitle}>去添加</Text>

            </View>

            {item.bonus && <Text style={styles.bonusText}>{item.bonus}</Text>}

            <TouchableOpacity style={styles.addButton}>

              <Text style={styles.addButtonText}>立即添加</Text>

            </TouchableOpacity>

          </View>

        ))}



        <View style={styles.otherServicesContainer}>

          {otherServices.map((service) => (

            <View key={service.id} style={styles.serviceItem}>

              <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />

              <Text style={styles.serviceTitle}>{service.title}</Text>

            </View>

          ))}

        </View>

      </View>



      <View style={styles.instructionsContainer}>

        <Text style={styles.instructionsTitle}>如何进行线上缴费</Text>

        <View style={styles.instructionItem}>

          <View style={styles.instructionNumber}>

            <Text style={styles.instructionNumberText}>1</Text>

          </View>

          <View style={styles.instructionTextContainer}>

            <Text style={styles.instructionText}>选择缴费类型，输入缴费单位</Text>

            <Text style={styles.instructionSubtext}>选择类型后，点击【立即添加】</Text>

          </View>

        </View>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F8FF',

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

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  moreIcon: {

    width: 24,

    height: 24,

  },

  titleContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 15,

    marginTop: 10,

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

  },

  phoneImageContainer: {

    width: 100,

    height: 100,

  },

  phoneImage: {

    width: '100%',

    height: '100%',

    resizeMode: 'contain',

  },

  featuresContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginVertical: 15,

  },

  featureText: {

    fontSize: 14,

    color: '#666',

  },

  cardContainer: {

    backgroundColor: 'white',

    borderRadius: 10,

    marginHorizontal: 15,

    padding: 15,

  },

  cardHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  cardHeaderIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  cardHeaderText: {

    fontSize: 14,

    color: '#FFD700',

  },

  billItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  billIcon: {

    width: 30,

    height: 30,

    marginRight: 10,

  },

  billTextContainer: {

    flex: 1,

  },

  billTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  billSubtitle: {

    fontSize: 12,

    color: '#999',

  },

  bonusText: {

    fontSize: 12,

    color: 'red',

    marginRight: 10,

  },

  addButton: {

    backgroundColor: '#1E90FF',

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 15,

  },

  addButtonText: {

    color: 'white',

    fontSize: 12,

  },

  otherServicesContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginTop: 15,

  },

  serviceItem: {

    width: '25%',

    alignItems: 'center',

    marginBottom: 15,

  },

  serviceIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  serviceTitle: {

    fontSize: 12,

    textAlign: 'center',

  },

  instructionsContainer: {

    marginTop: 20,

    marginHorizontal: 15,

  },

  instructionsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  instructionItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  instructionNumber: {

    width: 24,

    height: 24,

    borderRadius: 12,

    backgroundColor: '#1E90FF',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 10,

  },

  instructionNumberText: {

    color: 'white',

    fontSize: 14,

  },

  instructionTextContainer: {

    flex: 1,

  },

  instructionText: {

    fontSize: 14,

  },

  instructionSubtext: {

    fontSize: 12,

    color: '#999',

  },

});



export default UtilityBillsScreen;