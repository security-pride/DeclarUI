import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UploadScreen = () => {
  const navigation = useNavigation();

  const handlePublish = () => {
    navigation.navigate('Sell');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeIcon}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>发闲置</Text>
        <Button title="发布" onPress={handlePublish} color="#FFD700" />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="描述一下宝贝的品牌型号、货品来源..."
        placeholderTextColor="#ccc"
        multiline
      />

      <View style={styles.addImageContainer}>
        <Text style={styles.addImageText}>+ 添加优质首图更吸引人~</Text>
      </View>

      <Pressable style={styles.locationSelector}>
        <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />
        <Text style={styles.locationText}>烟台 芝罘区</Text>
      </Pressable>

      <View style={styles.footer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.characterIcon} />
        <Text style={styles.infoText}>宝贝不在身边？点我</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>价格</Text>
          <Text style={styles.price}>¥0.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>发货方式</Text>
          <Text style={styles.shippingMethod}>包邮</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  closeIcon: {
    paddingRight: 10,
  },
  closeText: {
    fontSize: 24,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  addImageContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImageText: {
    color: '#999',
    fontSize: 16,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  characterIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  infoText: {
    color: '#999',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  label: {
    color: '#333',
  },
  price: {
    color: '#FF0000',
  },
  shippingMethod: {
    color: '#666',
  },
});

export default UploadScreen;