import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TradeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>收付款</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.memberBadge}>
        <Text style={styles.memberBadgeText}>大众会员</Text>
      </View>

      <View style={styles.paymentContainer}>
        <View style={styles.paymentHeader}>
          <Icon name="barcode-outline" size={24} color="#000" />
          <Text style={styles.paymentHeaderText}>向商家付款</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.barcode} />

        <Text style={styles.instructionText}>点击可查看付款码数字</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.qrCode} />
      </View>

      <View style={styles.bankInfoContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.bankIcon} />
        <Text style={styles.bankInfoText}>招商银行储蓄卡 (7616)</Text>
        <Text style={styles.bankSubInfoText}>优先使用此付款方式</Text>
      </View>

      <TouchableOpacity style={styles.optionButton}>
        <View style={styles.optionTextContainer}>
          <Icon name="wallet-outline" size={24} color="#FFF" />
          <Text style={styles.optionText}>收钱</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="#FFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <View style={styles.optionTextContainer}>
          <Icon name="albums-outline" size={24} color="#FFF" />
          <Text style={styles.optionText}>分期付款</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="#FFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <View style={styles.optionTextContainer}>
          <Icon name="cash-outline" size={24} color="#FFF" />
          <Text style={styles.optionText}>转账</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="#FFF" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007aff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#007aff',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberBadge: {
    alignItems: 'center',
    backgroundColor: '#007aff',
    padding: 8,
    borderRadius: 10,
    marginVertical: 8,
  },
  memberBadgeText: {
    color: '#FFF',
  },
  paymentContainer: {
    backgroundColor: '#FFF',
    margin: 16,
    padding: 16,
    borderRadius: 10,
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  paymentHeaderText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  barcode: {
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  instructionText: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 8,
  },
  qrCode: {
    height: 100,
    resizeMode: 'contain',
  },
  bankInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  bankIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  bankInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bankSubInfoText: {
    color: '#999',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007aff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  optionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#FFF',
  },
});

export default TradeScreen;