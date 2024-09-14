import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UploadScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>发闲置</Text>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>发布</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="描述一下宝贝的品牌型号、货品来源..."
          placeholderTextColor="#ccc"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.addImageContainer}>
        <Text style={styles.addImageText}>+ 添加优质首图更吸引人~</Text>
      </TouchableOpacity>

      <View style={styles.locationContainer}>
        <Icon name="location-pin" size={20} color="#000" />
        <Text style={styles.locationText}>烟台 芝罘区</Text>
      </View>

      <TouchableOpacity style={styles.treasureContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.treasureIcon} />
        <Text style={styles.treasureText}>宝贝不在身边? 点我</Text>
      </TouchableOpacity>

      <View style={styles.listItem}>
        <Text style={styles.listTitle}>价格</Text>
        <Text style={styles.listValue}>¥0.00</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </View>

      <View style={styles.listItem}>
        <Text style={styles.listTitle}>发货方式</Text>
        <Text style={styles.listValue}>包邮</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  closeButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  textInput: {
    height: 100,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  addImageContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  addImageText: {
    color: '#aaa',
    fontSize: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
  },
  treasureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  treasureIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  treasureText: {
    fontSize: 14,
    color: '#000',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listValue: {
    fontSize: 16,
    color: '#000',
  },
});

export default UploadScreen;