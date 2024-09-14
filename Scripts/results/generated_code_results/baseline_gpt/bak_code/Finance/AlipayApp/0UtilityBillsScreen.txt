import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const UtilityBillsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.cityText}>烟台市</Text>
        <View style={styles.icons}>
          <Icon name="ellipsis-horizontal" size={24} color="#000" />
          <Icon name="person-circle" size={24} color="#000" style={styles.iconMargin} />
        </View>
      </View>
      
      <Text style={styles.title}>生活缴费</Text>
      <View style={styles.tipsContainer}>
        <Text style={styles.tip}>极速到账</Text>
        <Text style={styles.tip}>出账通知</Text>
        <Text style={styles.tip}>随时可缴</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.bonusText}>💰 水电燃燃费得会员积分</Text>
        <View style={styles.billRow}>
          <Icon name="flash" size={24} color="#f5a623" />
          <View style={styles.billTextContainer}>
            <Text style={styles.billTitle}>电费</Text>
            <Text style={styles.billSubtitle}>去添加</Text>
          </View>
          <Text style={styles.bonusLabel}>红包0.88元</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>立即添加</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.billRow}>
          <Icon name="water" size={24} color="#4a90e2" />
          <View style={styles.billTextContainer}>
            <Text style={styles.billTitle}>水费</Text>
            <Text style={styles.billSubtitle}>去添加</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>立即添加</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.billRow}>
          <Icon name="flame" size={24} color="#d0021b" />
          <View style={styles.billTextContainer}>
            <Text style={styles.billTitle}>燃气费</Text>
            <Text style={styles.billSubtitle}>去添加</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>立即添加</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.iconsGrid}>
        <View style={styles.iconItem}>
          <Icon name="thermometer" size={40} color="#f5a623" />
          <Text style={styles.iconText}>暖气费</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="tv" size={40} color="#4a90e2" />
          <Text style={styles.iconText}>有线电视</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="wifi" size={40} color="#f5a623" />
          <Text style={styles.iconText}>宽带</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="phone-portrait" size={40} color="#d0021b" />
          <Text style={styles.iconText}>手机</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="call" size={40} color="#4a90e2" />
          <Text style={styles.iconText}>固话</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="home" size={40} color="#50e3c2" />
          <Text style={styles.iconText}>物业费</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="cloud" size={40} color="#4a90e2" />
          <Text style={styles.iconText}>转供燃费</Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>如何进行线上缴费</Text>
        <Text style={styles.infoStep}>1. 选择缴费类型，输入缴费单位</Text>
        <Text style={styles.infoStepDetail}>选择类型后，点击【立即添加】</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  cityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    padding: 15,
  },
  tipsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tip: {
    fontSize: 14,
    color: '#888',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    padding: 15,
  },
  bonusText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#f39c12',
    marginBottom: 15,
  },
  billRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  billTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  billTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  billSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  bonusLabel: {
    fontSize: 14,
    color: '#e74c3c',
    backgroundColor: '#f5cfcf',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  iconsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 15,
  },
  iconItem: {
    alignItems: 'center',
    margin: 10,
    width: 60,
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#eaf6ff',
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
  infoStep: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  infoStepDetail: {
    fontSize: 14,
    color: '#666',
  },
});

export default UtilityBillsScreen;