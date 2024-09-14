import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const CustomServiceScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>小招-客服门户</Text>
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <Text style={styles.greeting}>您好，我是小招</Text>
        <Text style={styles.instruction}>需要帮助点此提问哦~</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate('SearchBranch')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.label}>查找网点</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.label}>主页</Text>
        </TouchableOpacity>
      </View>

      {/* Section: 我关心的 */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>我关心的</Text>
        <View style={styles.tabContainer}>
          <Text style={styles.tab}>贷款</Text>
          <Text style={styles.tab}>账户管理</Text>
          <Text style={styles.tab}>理财</Text>
          <Text style={styles.tab}>信用卡</Text>
        </View>
        <Text style={styles.more}>更多</Text>
        <View style={styles.sectionContent}>
          <Text style={styles.listItem}>闪电贷介绍<Text style={styles.hot}> 热</Text></Text>
          <Text style={styles.listItem}>助学贷款怎么续贷<Text style={styles.hot}> 热</Text></Text>
          <Text style={styles.listItem}>装修贷款介绍</Text>
          <Text style={styles.listItem}>手机银行如何申请闪电贷</Text>
          <Text style={styles.listItem}>车贷查询</Text>
        </View>
      </View>

      {/* Section: 小招百科 */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>小招百科</Text>
        <View style={styles.tabContainer}>
          <Text style={styles.tab}>视频</Text>
          <Text style={styles.more}>更多</Text>
        </View>
        <View style={styles.tabContainer}>
          <Text style={styles.tab}>文章</Text>
          <Text style={styles.more}>更多</Text>
        </View>
      </View>

      {/* Notification */}
      <View style={styles.notification}>
        <Text style={styles.notificationBadge}>99</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 18,
    marginTop: 10,
  },
  instruction: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  quickAction: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    width: 50,
    height: 50,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
  },
  sectionContainer: {
    backgroundColor: '#F9FBFD',
    padding: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    fontSize: 16,
    color: '#555',
  },
  more: {
    fontSize: 16,
    color: '#007AFF',
  },
  sectionContent: {
    marginTop: 10,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  hot: {
    fontSize: 14,
    color: 'red',
    marginLeft: 5,
  },
  notification: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 2,
    paddingHorizontal: 7,
  },
  notificationBadge: {
    color: '#fff',
    fontSize: 12,
  },
});

export default CustomServiceScreen;