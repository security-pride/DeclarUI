import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const navigateToPage = (pageName) => {

    navigation.navigate(pageName);

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

        <View style={styles.userInfo}>

          <Text style={styles.username}>dxy_hqup58fr</Text>

          <TouchableOpacity onPress={() => navigateToPage('EditProfile')}>

            <Text style={styles.profileLink}>个人主页 ></Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.messageIcon}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>



      <View style={styles.statsContainer}>

        <View style={styles.statItem}>

          <Text style={styles.statNumber}>0</Text>

          <Text style={styles.statLabel}>收藏</Text>

        </View>

        <View style={styles.statItem}>

          <Text style={styles.statNumber}>0</Text>

          <Text style={styles.statLabel}>关注</Text>

        </View>

        <View style={styles.statItem}>

          <Text style={styles.statNumber}>0</Text>

          <Text style={styles.statLabel}>医生卡</Text>

        </View>

        <View style={styles.statItem}>

          <Text style={styles.statNumber}>0</Text>

          <Text style={styles.statLabel}>优惠券</Text>

        </View>

      </View>



      <View style={styles.sectionContainer}>

        <Text style={styles.sectionTitle}>我的订单</Text>

        <View style={styles.orderOptions}>

          <TouchableOpacity style={styles.orderOption} onPress={() => navigateToPage('MyConsultations')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />

            <Text style={styles.orderLabel}>我的问诊</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.orderOption} onPress={() => navigateToPage('MyPrescriptions')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />

            <Text style={styles.orderLabel}>我的处方</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.orderOption} onPress={() => navigateToPage('MedicineOrders')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />

            <Text style={styles.orderLabel}>药品订单</Text>

          </TouchableOpacity>

        </View>

      </View>



      <TouchableOpacity style={styles.promotionBanner} onPress={() => navigateToPage('NewUserConsultation')}>

        <View style={styles.promotionTextContainer}>

          <Text style={styles.promotionTitle}>新人首次问诊 9.9 元起</Text>

          <Text style={styles.promotionSubtitle}>仅 1 次机会 三甲医生在线接诊</Text>

        </View>

        <TouchableOpacity style={styles.consultButton}>

          <Text style={styles.consultButtonText}>去咨询</Text>

        </TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.promotionIcon} />

      </TouchableOpacity>



      <View style={styles.sectionContainer}>

        <Text style={styles.sectionTitle}>更多功能</Text>

        <View style={styles.functionsGrid}>

          <TouchableOpacity style={styles.functionItem} onPress={() => navigateToPage('PatientInfo')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.functionIcon} />

            <Text style={styles.functionLabel}>患者信息</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.functionItem} onPress={() => navigateToPage('DoctorLectures')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.functionIcon} />

            <Text style={styles.functionLabel}>医师讲堂</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.functionItem} onPress={() => navigateToPage('GrowthAssessment')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.functionIcon} />

            <Text style={styles.functionLabel}>成长测评</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.functionItem} onPress={() => navigateToPage('Settings')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.functionIcon} />

            <Text style={styles.functionLabel}>设置</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.functionItem} onPress={() => navigateToPage('CustomerService')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.functionIcon} />

            <Text style={styles.functionLabel}>在线客服</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.footer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.footerLogo} />

        <Text style={styles.footerText}>一起发现健康生活</Text>

      </View>

    </ScrollView>

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

    padding: 20,

    backgroundColor: '#FFFFFF',

  },

  avatar: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  userInfo: {

    marginLeft: 15,

    flex: 1,

  },

  username: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  profileLink: {

    fontSize: 14,

    color: '#666666',

    marginTop: 5,

  },

  messageIcon: {

    padding: 10,

  },

  icon: {

    width: 24,

    height: 24,

  },

  statsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFFFFF',

    paddingVertical: 15,

    marginBottom: 10,

  },

  statItem: {

    alignItems: 'center',

  },

  statNumber: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  statLabel: {

    fontSize: 12,

    color: '#666666',

    marginTop: 5,

  },

  sectionContainer: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  orderOptions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

  },

  orderOption: {

    alignItems: 'center',

  },

  orderIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

  },

  orderLabel: {

    fontSize: 12,

  },

  promotionBanner: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginBottom: 10,

  },

  promotionTextContainer: {

    flex: 1,

  },

  promotionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FF6B6B',

  },

  promotionSubtitle: {

    fontSize: 12,

    color: '#666666',

    marginTop: 5,

  },

  consultButton: {

    backgroundColor: '#FF6B6B',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

  },

  consultButtonText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  promotionIcon: {

    width: 50,

    height: 50,

    marginLeft: 10,

  },

  functionsGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  functionItem: {

    width: '20%',

    alignItems: 'center',

    marginBottom: 15,

  },

  functionIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

  },

  functionLabel: {

    fontSize: 12,

    textAlign: 'center',

  },

  footer: {

    alignItems: 'center',

    padding: 20,

  },

  footerLogo: {

    width: 100,

    height: 30,

    resizeMode: 'contain',

    marginBottom: 10,

  },

  footerText: {

    fontSize: 12,

    color: '#666666',

  },

});



export default ProfileScreen;