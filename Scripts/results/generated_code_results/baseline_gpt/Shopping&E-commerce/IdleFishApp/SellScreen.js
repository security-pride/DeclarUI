import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SellScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>来闲鱼 搞点钱！</Text>
        <Text style={styles.subHeaderText}>3亿人在闲鱼赚钱</Text>
      </View>

      <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>发闲置{' >'}</Text>
          <Text style={styles.optionDescription}>30s发布宝贝，啥都能换钱</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionImage} />
      </TouchableOpacity>

      <View style={styles.midSection}>
        <TouchableOpacity style={styles.smallOptionContainer}>
          <Text style={styles.smallOptionTitle}>一键转卖{' >'}</Text>
          <Text style={styles.smallOptionDescription}>2年前买的期刊杂志还能卖30元</Text>
        </TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.smallOptionImage} />
      </View>

      <View style={styles.bottomOptions}>
        <TouchableOpacity style={styles.smallOption}>
          <Text style={styles.smallOptionTitle}>高价帮卖{' >'}</Text>
          <Text style={styles.smallOptionDescription}>支持自己定价卖</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallOption}>
          <Text style={styles.smallOptionTitle}>闲鱼回收{' >'}</Text>
          <Text style={styles.smallOptionDescription}>免费上门回收</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallOption}>
          <Text style={styles.smallOptionTitle}>晒好物{' >'}</Text>
          <Text style={styles.smallOptionDescription}>只晒不卖的宝贝</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>搞副业{' >'}</Text>
          <Text style={styles.optionDescription}>闲置时间能换钱</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionImage} />
      </TouchableOpacity>

      <View style={styles.adsContainer}>
        <Text style={styles.adsTitle}>15万人在这赚钱</Text>
        <View style={styles.adsImages}>
          <Image source={require('../assets/snack-icon.png')} style={styles.adImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.adImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.adImage} />
        </View>
      </View>

      <TouchableOpacity style={styles.closeButton}>
        <Icon name="close" size={24} color="#000" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#f5a623',
  },
  optionContainer: {
    backgroundColor: '#f8e71c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  optionTextContainer: {
    flexShrink: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: 14,
    color: '#333',
  },
  optionImage: {
    width: 50,
    height: 50,
    marginLeft: 16,
  },
  midSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  smallOptionContainer: {
    flexShrink: 1,
  },
  smallOptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallOptionDescription: {
    fontSize: 12,
    color: '#666',
  },
  smallOptionImage: {
    width: 50,
    height: 50,
  },
  bottomOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  smallOption: {
    backgroundColor: '#fff',
    flexGrow: 1,
    flexBasis: '30%',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  adsContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  adsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  adsImages: {
    flexDirection: 'row',
  },
  adImage: {
    width: 60,
    height: 60,
    marginHorizontal: 4,
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 16,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SellScreen;