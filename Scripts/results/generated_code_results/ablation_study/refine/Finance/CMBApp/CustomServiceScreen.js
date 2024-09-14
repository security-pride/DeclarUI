import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const CustomServiceScreen = ({ navigation }) => {

  const renderServiceItem = (icon, text) => (

    <TouchableOpacity style={styles.serviceItem}>

      <Icon name={icon} size={24} color="#333" />

      <Text style={styles.serviceText}>{text}</Text>

    </TouchableOpacity>

  );



  const renderHotItem = (text) => (

    <View style={styles.hotItem}>

      <Text style={styles.hotItemText}>{text}</Text>

      <View style={styles.hotBadge}>

        <Text style={styles.hotBadgeText}>热</Text>

      </View>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#333" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>小招-客服门户</Text>

        <View style={styles.notificationBadge}>

          <Text style={styles.notificationText}>99</Text>

        </View>

      </View>



      <View style={styles.greetingContainer}>

        <Text style={styles.greeting}>您好，我是小招</Text>

        <Text style={styles.subGreeting}>需要帮助点此提问哦~ ＞</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>



      <View style={styles.serviceGrid}>

        {renderServiceItem('credit-card', '卡号查询')}

        {renderServiceItem('account-balance-wallet', '支出限额查询')}

        {renderServiceItem('account-balance', '查询余额')}

        {renderServiceItem('location-on', '查找网点')}

        {renderServiceItem('feedback', '意见反馈')}

        {renderServiceItem('swap-horiz', '转账限额')}

        {renderServiceItem('account-box', '开户行查询')}

        {renderServiceItem('description', '证件更新')}

        {renderServiceItem('thumb-up', '我要表扬')}

        {renderServiceItem('help', '咨询与投诉')}

      </View>



      <View style={styles.sectionContainer}>

        <Text style={styles.sectionTitle}>我关心的</Text>

        <View style={styles.tagContainer}>

          <TouchableOpacity style={styles.tag}>

            <Text style={styles.tagText}>贷款</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tag}>

            <Text style={styles.tagText}>账户管理</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tag}>

            <Text style={styles.tagText}>理财</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tag}>

            <Text style={styles.tagText}>信用卡</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.listContainer}>

        {renderHotItem('闪电贷介绍')}

        {renderHotItem('助学贷款怎么续贷')}

        <Text style={styles.listItem}>装修贷款介绍</Text>

        <Text style={styles.listItem}>手机银行如何申请闪电贷</Text>

        <Text style={styles.listItem}>车贷查询</Text>

      </View>



      <View style={styles.sectionContainer}>

        <Text style={styles.sectionTitle}>小招百科</Text>

      </View>



      <View style={styles.footerContainer}>

        <TouchableOpacity style={styles.footerItem}>

          <Text style={styles.footerItemText}>视频</Text>

          <Text style={styles.footerItemMore}>更多</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Text style={styles.footerItemText}>文章</Text>

          <Text style={styles.footerItemMore}>更多</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#fff',

  },

  headerTitle: {

    flex: 1,

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

  },

  notificationBadge: {

    backgroundColor: '#ff4d4f',

    borderRadius: 10,

    paddingHorizontal: 6,

    paddingVertical: 2,

  },

  notificationText: {

    color: '#fff',

    fontSize: 12,

  },

  greetingContainer: {

    backgroundColor: '#fff',

    padding: 16,

    flexDirection: 'row',

    alignItems: 'center',

  },

  greeting: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  subGreeting: {

    fontSize: 14,

    color: '#666',

    marginTop: 4,

  },

  avatar: {

    width: 48,

    height: 48,

    borderRadius: 24,

    marginLeft: 'auto',

  },

  serviceGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    backgroundColor: '#fff',

    padding: 16,

  },

  serviceItem: {

    width: '20%',

    alignItems: 'center',

    marginBottom: 16,

  },

  serviceText: {

    fontSize: 12,

    marginTop: 4,

    textAlign: 'center',

  },

  sectionContainer: {

    backgroundColor: '#fff',

    padding: 16,

    marginTop: 8,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  tagContainer: {

    flexDirection: 'row',

    marginTop: 8,

  },

  tag: {

    backgroundColor: '#f0f0f0',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 16,

    marginRight: 8,

  },

  tagText: {

    fontSize: 14,

  },

  listContainer: {

    backgroundColor: '#fff',

    padding: 16,

  },

  hotItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 8,

  },

  hotItemText: {

    fontSize: 14,

  },

  hotBadge: {

    backgroundColor: '#ff4d4f',

    paddingHorizontal: 4,

    paddingVertical: 2,

    borderRadius: 4,

    marginLeft: 8,

  },

  hotBadgeText: {

    color: '#fff',

    fontSize: 10,

  },

  listItem: {

    fontSize: 14,

    marginBottom: 8,

  },

  footerContainer: {

    flexDirection: 'row',

    backgroundColor: '#fff',

    padding: 16,

    marginTop: 8,

  },

  footerItem: {

    flex: 1,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  footerItemText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  footerItemMore: {

    fontSize: 14,

    color: '#666',

  },

});



export default CustomServiceScreen;