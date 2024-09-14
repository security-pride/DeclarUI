import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from 'react-native-vector-icons';

const RepaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>信用卡还款</Text>
        <Icon name="headset-outline" size={24} color="#000" style={styles.icon} />
      </View>
      
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Image style={styles.bankIcon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.accountType}>个人消费账户</Text>
          <Text style={styles.autoRepayment}>自动还款</Text>
        </View>
        
        <Text style={styles.repaymentInfo}>无需还款 8月14日（27天后）出账</Text>
        
        <View style={styles.repaymentSection}>
          <Text style={styles.sectionTitle}>还款金额</Text>
          <TouchableOpacity style={styles.viewAccountsButton}>
            <Text style={styles.viewAccountsText}>查看账单 &gt;</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="attach-money" size={24} color="#C0C0C0" />
          <TextInput
            style={styles.input}
            placeholder="请输入金额"
            placeholderTextColor="#C0C0C0"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.repayButton}>
          <Text style={styles.repayButtonText}>立即还款</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.explainText}>还款说明</Text>
          <MaterialIcons name="info-outline" size={16} color="#A0A0A0" />
          <Text style={styles.recommendLink}>填写推荐人</Text>
        </View>
      </View>

      <Text style={styles.addCardLink}>添加他人/他行卡</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bankIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  accountType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  autoRepayment: {
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 5,
    borderRadius: 3,
    marginLeft: 5,
    fontSize: 12,
  },
  repaymentInfo: {
    fontSize: 14,
    color: '#00A000',
    marginVertical: 10,
  },
  repaymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingBottom: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAccountsButton: {
    paddingHorizontal: 5,
  },
  viewAccountsText: {
    color: '#0000FF',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 5,
  },
  repayButton: {
    backgroundColor: '#FFCCCC',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  repayButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  explainText: {
    fontSize: 14,
    color: '#808080',
  },
  recommendLink: {
    color: '#0000FF',
    marginLeft: 10,
    fontSize: 14,
  },
  addCardLink: {
    textAlign: 'center',
    color: '#808080',
    marginTop: 10,
  },
});

export default RepaymentScreen;