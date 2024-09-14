import React from 'react';

import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const renderHeader = () => (

    <View style={styles.header}>

      <Text style={styles.headerText}>用户保护中心 ＞</Text>

      <View style={styles.headerIcons}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

      </View>

    </View>

  );



  const renderUserInfo = () => (

    <TouchableOpacity style={styles.userInfo}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.userDetails}>

        <Text style={styles.username}>不吃不吃</Text>

        <Text style={styles.userId}>136******15</Text>

      </View>

      <TouchableOpacity>

        <Text style={styles.chevron}>＞</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  const renderUploadID = () => (

    <TouchableOpacity style={styles.uploadID}>

      <Text style={styles.uploadIDText}>上传身份证照片，以使用更多金融服务</Text>

      <View style={styles.uploadIDRight}>

        <View style={styles.redDot} />

        <Text style={styles.chevron}>＞</Text>

      </View>

    </TouchableOpacity>

  );



  const renderMenuItem = (icon, title, subtitle, rightText) => (

    <TouchableOpacity style={styles.menuItem}>

      <Image source={icon} style={styles.menuIcon} />

      <View style={styles.menuTextContainer}>

        <Text style={styles.menuTitle}>{title}</Text>

        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}

      </View>

      <View style={styles.menuRight}>

        {rightText && <Text style={styles.menuRightText}>{rightText}</Text>}

        <Text style={styles.chevron}>＞</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      {renderHeader()}

      {renderUserInfo()}

      {renderUploadID()}

      {renderMenuItem(require('../assets/snack-icon.png'), '支付宝会员', '大众会员', '110积分待领取')}

      {renderMenuItem(require('../assets/snack-icon.png'), '商家服务', '查看收款明细')}

      <View style={styles.merchantInfo}>

        <Text style={styles.merchantInfoText}>今日收款（元）</Text>

        <Text style={styles.merchantInfoValue}>0.00</Text>

        <Text style={styles.merchantInfoText}>商家积分</Text>

        <Text style={styles.merchantInfoValue}>0</Text>

      </View>

      {renderMenuItem(require('../assets/snack-icon.png'), '账单')}

      {renderMenuItem(require('../assets/snack-icon.png'), '总资产', null, '免费领取账户保障')}

      {renderMenuItem(require('../assets/snack-icon.png'), '余额')}

      {renderMenuItem(require('../assets/snack-icon.png'), '余额宝')}

      {renderMenuItem(require('../assets/snack-icon.png'), '花呗', null, '冲榜赢苹果手机')}

      {renderMenuItem(require('../assets/snack-icon.png'), '银行卡')}

      {renderMenuItem(require('../assets/snack-icon.png'), '芝麻信用')}

      {renderMenuItem(require('../assets/snack-icon.png'), '蚂蚁保', null, '你关注的榜单更新啦')}

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

    backgroundColor: 'white',

  },

  headerText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 15,

  },

  userInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: 'white',

    marginBottom: 10,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  userDetails: {

    flex: 1,

    marginLeft: 15,

  },

  username: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  userId: {

    fontSize: 14,

    color: '#888',

    marginTop: 5,

  },

  uploadID: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

    backgroundColor: 'white',

    marginBottom: 10,

  },

  uploadIDText: {

    flex: 1,

    fontSize: 14,

  },

  uploadIDRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  redDot: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: 'red',

    marginRight: 5,

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: 'white',

    borderBottomWidth: StyleSheet.hairlineWidth,

    borderBottomColor: '#e0e0e0',

  },

  menuIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  menuTextContainer: {

    flex: 1,

  },

  menuTitle: {

    fontSize: 16,

  },

  menuSubtitle: {

    fontSize: 12,

    color: '#888',

    marginTop: 2,

  },

  menuRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  menuRightText: {

    fontSize: 12,

    color: '#888',

    marginRight: 5,

  },

  chevron: {

    fontSize: 18,

    color: '#888',

  },

  merchantInfo: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    backgroundColor: 'white',

    marginBottom: 10,

  },

  merchantInfoText: {

    fontSize: 12,

    color: '#888',

  },

  merchantInfoValue: {

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default ProfileScreen;