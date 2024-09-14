import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomServiceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" />
        <Text style={styles.title}>小招–客服门户</Text>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>99</Text>
          <Icon name="more-vert" size={24} color="#000" />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.greeting}>您好，我是小招</Text>
        <Text style={styles.helpText}>需要帮助点此提问哦~</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
      </View>

      <View style={styles.icons}>
        {[
          { name: 'credit-card', label: '卡号查询' },
          { name: 'account-balance', label: '支出限额查询' },
          { name: 'account-balance-wallet', label: '查询余额' },
          { name: 'location-pin', label: '查找网点' },
          { name: 'feedback', label: '意见反馈' },
          { name: 'compare-arrows', label: '转账限额' },
          { name: 'home', label: '开户行查询' },
          { name: 'update', label: '证件更新' },
          { name: 'thumb-up', label: '我要表扬' },
          { name: 'report', label: '咨询与投诉' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.iconButton}>
            <Icon name={item.name} size={24} color="#000" />
            <Text style={styles.iconLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>我关心的</Text>
        <View style={styles.sectionTabs}>
          <Text style={styles.tab}>贷款</Text>
          <Text style={styles.tab}>账户管理</Text>
          <Text style={styles.tab}>理财</Text>
          <Text style={styles.tab}>信用卡</Text>
          <TouchableOpacity>
            <Text style={styles.more}>更多</Text>
          </TouchableOpacity>
        </View>
        {[
          { title: '闪电贷介绍', tag: '热' },
          { title: '助学贷款怎么续贷', tag: '热' },
          { title: '装修贷款介绍', tag: '' },
          { title: '手机银行如何申请闪电贷', tag: '' },
          { title: '车贷查询', tag: '' },
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>{item.title}</Text>
            {item.tag ? <Text style={styles.hotTag}>{item.tag}</Text> : null}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>小招百科</Text>
        <View style={styles.sectionTabs}>
          <Text style={styles.tab}>视频</Text>
          <TouchableOpacity>
            <Text style={styles.more}>更多</Text>
          </TouchableOpacity>
          <Text style={styles.tab}>文章</Text>
          <TouchableOpacity>
            <Text style={styles.more}>更多</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    color: '#FF0000',
    marginRight: 8,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  helpText: {
    color: '#888888',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  iconButton: {
    alignItems: 'center',
    margin: 8,
    width: '25%',
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  section: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  tab: {
    fontSize: 14,
    color: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 16,
  },
  more: {
    fontSize: 12,
    color: '#888888',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  listItemText: {
    fontSize: 14,
  },
  hotTag: {
    color: '#FF4500',
    fontSize: 10,
    backgroundColor: '#FFECEC',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});

export default CustomServiceScreen;