import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MessageScreen = () => {
  const messages = [
    { image: require('../assets/snack-icon.png'), title: 'romoss 旗舰店', desc: '商品使用说明', date: '24/07/03', unread: 4 },
    { image: require('../assets/snack-icon.png'), title: '订阅号消息', desc: 'COURTMAN 野球帝:新品揭晓，所有等待都值得。', date: '24/06/13', unread: 0 },
    { image: require('../assets/snack-icon.png'), title: 'jELLYCAT 海外旗舰店', desc: 'Jellycat 2024 新生系列焕新上市！会员臻享。', date: '24/04/03', unread: 3 },
    { image: require('../assets/snack-icon.png'), title: 'YOMIK', desc: '亲，对赖香扑微云、的服务满意吗？', date: '24/03/25', unread: 1 },
    { image: require('../assets/snack-icon.png'), title: 'Starbucks 星巴克官方旗舰店', desc: '亲爱的，你感兴趣的宝贝降价啦，不要错过限…', date: '24/03/19', unread: 1 },
    { image: require('../assets/snack-icon.png'), title: '良品铺子旗舰店', desc: '周三会员福利日！千万别错过！', date: '24/03/13', unread: 5 },
    { image: require('../assets/snack-icon.png'), title: 'jELLYCAT 旗舰店', desc: '龙腾新岁，开工大吉！入会臻享爆品优先购。', date: '24/02/22', unread: 2 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>消息</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="search" size={20} color="#ffffff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="bell" size={20} color="#ffffff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="plus" size={20} color="#ffffff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.messageContainer}>
        {/* Add any additional promotional sections here */}
        <Text style={styles.historyText}>两周前的消息</Text>
        {messages.map((message, index) => (
          <View key={index} style={styles.messageBox}>
            <Image source={message.image} style={styles.messageImage} />
            <View style={styles.messageContent}>
              <Text style={styles.messageTitle}>{message.title}</Text>
              <Text style={styles.messageDesc} numberOfLines={1}>{message.desc}</Text>
            </View>
            <View style={styles.messageMeta}>
              <Text style={styles.messageDate}>{message.date}</Text>
              {message.unread > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{message.unread}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1f1f1f',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  messageContainer: {
    paddingHorizontal: 16,
  },
  historyText: {
    color: '#777777',
    fontSize: 16,
    marginVertical: 8,
  },
  messageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  messageImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  messageTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageDesc: {
    color: '#aaaaaa',
    fontSize: 14,
    marginTop: 4,
  },
  messageMeta: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  messageDate: {
    color: '#aaaaaa',
    fontSize: 12,
  },
  unreadBadge: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginTop: 4,
  },
  unreadText: {
    color: '#ffffff',
    fontSize: 12,
  },
});

export default MessageScreen;