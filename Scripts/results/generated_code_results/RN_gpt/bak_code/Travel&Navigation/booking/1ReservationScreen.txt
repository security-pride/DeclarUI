import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReservationScreen = () => {
  const navigation = useNavigation();

  const handleTypeDetailsRedirect = () => {
    navigation.navigate('TypeDetails');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="X" onPress={() => {}} />
        <Text style={styles.headerTitle}>标准间</Text>
      </View>
      <View style={styles.roomSelection}>
        <Text style={styles.roomLabel}>客房数量</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>1</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      <Text style={styles.subheader}>标准间 1</Text>
      <Text style={styles.bedTypeLabel}>选择床型</Text>
      <Text style={styles.infoLabel}>请求能否满足需视供应情况而定</Text>
      <View style={styles.radioGroup}>
        <TouchableWithoutFeedback onPress={handleTypeDetailsRedirect}>
          <View style={styles.radioOption}>
            <Text style={styles.radioLabel}>无偏好</Text>
            <View style={styles.selectedRadio} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleTypeDetailsRedirect}>
          <View style={styles.radioOption}>
            <Text style={styles.radioLabel}>2张单人床</Text>
            <View style={styles.unselectedRadio} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleTypeDetailsRedirect}>
          <View style={styles.radioOption}>
            <Text style={styles.radioLabel}>1张超大号双人床</Text>
            <View style={styles.unselectedRadio} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.divider} />
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>707元</Text>
          <Text style={styles.taxInfo}>含税费及其他费用</Text>
        </View>
        <Button title="确认" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#004382',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  roomSelection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  roomLabel: {
    fontSize: 16,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 8,
  },
  quantityText: {
    fontSize: 18,
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 16,
  },
  bedTypeLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  radioGroup: {
    paddingHorizontal: 16,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  radioLabel: {
    fontSize: 16,
  },
  selectedRadio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#004382',
    backgroundColor: '#004382',
  },
  unselectedRadio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  priceContainer: {
    flexDirection: 'column',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taxInfo: {
    fontSize: 12,
    color: '#999',
  },
});

export default ReservationScreen;