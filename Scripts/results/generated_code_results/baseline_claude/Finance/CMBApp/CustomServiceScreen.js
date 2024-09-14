import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CustomServiceScreen = () => {

  const navigation = useNavigation();



  const quickActions = [

    { id: '1', title: '卡号查询', icon: 'card-search' },

    { id: '2', title: '支出限额查询', icon: 'payment-limit' },

    { id: '3', title: '查询余额', icon: 'balance-inquiry' },

    { id: '4', title: '查找网点', icon: 'location' },

    { id: '5', title: '意见反馈', icon: 'feedback' },

    { id: '6', title: '转账限额', icon: 'transfer-limit' },

    { id: '7', title: '开户行查询', icon: 'bank-search' },

    { id: '8', title: '证件更新', icon: 'id-update' },

    { id: '9', title: '我要表扬', icon: 'praise' },

    { id: '10', title: '咨询与投诉', icon: 'customer-service' },

  ];



  const recentConcerns = [

    '贷款', '账户管理', '理财', '信用卡',

    '闪电贷介绍', '助学贷款怎么续贷', '装修贷款介绍',

    '手机银行如何申请闪电贷', '车贷查询'

  ];



  const renderQuickActionItem = ({ item }) => (

    <TouchableOpacity style={styles.quickActionItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

      <Text style={styles.actionText}>{item.title}</Text>

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>小招-客服门户</Text>

        <TouchableOpacity>

          <Text style={styles.headerMore}>...</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.assistantSection}>

        <Image source={require('../assets/snack-icon.png')} style={styles.assistantAvatar} />

        <View style={styles.assistantInfo}>

          <Text style={styles.assistantGreeting}>您好，我是小招</Text>

          <TouchableOpacity>

            <Text style={styles.assistantHelp}>需要帮助点此提问哦~ {'>'}</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.quickActionsContainer}>

        <FlatList

          data={quickActions}

          renderItem={renderQuickActionItem}

          keyExtractor={item => item.id}

          numColumns={5}

          scrollEnabled={false}

        />

      </View>



      <View style={styles.recentConcernsSection}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>我关心的</Text>

          <TouchableOpacity>

            <Text style={styles.moreLink}>更多</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.concernsContainer}>

          {recentConcerns.map((concern, index) => (

            <TouchableOpacity key={index} style={styles.concernItem}>

              <Text style={styles.concernText}>{concern}</Text>

              {index < 2 && <Text style={styles.hotTag}>热</Text>}

            </TouchableOpacity>

          ))}

        </View>

      </View>



      <View style={styles.encyclopediaSection}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>小招百科</Text>

        </View>

        <View style={styles.encyclopediaContent}>

          <TouchableOpacity style={styles.encyclopediaItem}>

            <Text style={styles.encyclopediaItemTitle}>视频</Text>

            <TouchableOpacity>

              <Text style={styles.moreLink}>更多</Text>

            </TouchableOpacity>

          </TouchableOpacity>

          <TouchableOpacity style={styles.encyclopediaItem}>

            <Text style={styles.encyclopediaItemTitle}>文章</Text>

            <TouchableOpacity>

              <Text style={styles.moreLink}>更多</Text>

            </TouchableOpacity>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F0',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#FFFFFF',

  },

  backButton: {

    fontSize: 24,

    color: '#000000',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerMore: {

    fontSize: 24,

    color: '#000000',

  },

  assistantSection: {

    flexDirection: 'row',

    padding: 15,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

  },

  assistantAvatar: {

    width: 60,

    height: 60,

    borderRadius: 30,

    marginRight: 15,

  },

  assistantInfo: {

    flex: 1,

  },

  assistantGreeting: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  assistantHelp: {

    color: '#666666',

  },

  quickActionsContainer: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  quickActionItem: {

    alignItems: 'center',

    width: '20%',

    marginBottom: 15,

  },

  actionIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

  },

  actionText: {

    fontSize: 12,

    textAlign: 'center',

  },

  recentConcernsSection: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  moreLink: {

    color: '#666666',

  },

  concernsContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  concernItem: {

    backgroundColor: '#F0F0F0',

    borderRadius: 15,

    paddingVertical: 5,

    paddingHorizontal: 10,

    marginRight: 10,

    marginBottom: 10,

    flexDirection: 'row',

    alignItems: 'center',

  },

  concernText: {

    fontSize: 14,

  },

  hotTag: {

    backgroundColor: '#FF6B6B',

    color: '#FFFFFF',

    fontSize: 10,

    paddingHorizontal: 4,

    paddingVertical: 2,

    borderRadius: 4,

    marginLeft: 5,

  },

  encyclopediaSection: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  encyclopediaContent: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  encyclopediaItem: {

    flex: 1,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 10,

    paddingHorizontal: 15,

    backgroundColor: '#F0F0F0',

    borderRadius: 8,

    marginHorizontal: 5,

  },

  encyclopediaItemTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default CustomServiceScreen;