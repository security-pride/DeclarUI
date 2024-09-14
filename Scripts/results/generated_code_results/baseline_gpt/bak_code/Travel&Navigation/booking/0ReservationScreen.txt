import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReservationScreen = () => {
  const [roomCount, setRoomCount] = useState(1);
  const [selectedOption, setSelectedOption] = useState('无偏好');

  const options = ['无偏好', '2张单人床', '1张超大号双人床'];

  const handleDecrement = () => {
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
    }
  };

  const handleIncrement = () => {
    setRoomCount(roomCount + 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="close" size={24} color="white" />
        <Text style={styles.headerText}>标准间</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Room Count Selection */}
      <View style={styles.roomCountSection}>
        <Text style={styles.sectionLabel}>客房数量</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={handleDecrement}>
            <Icon name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.counterText}>{roomCount}</Text>
          <TouchableOpacity onPress={handleIncrement}>
            <Icon name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bed Type Selection */}
      <View style={styles.bedTypeSection}>
        <Text style={styles.sectionLabelBold}>标准间 1</Text>
        <Text style={styles.smallText}>选择床型</Text>
        <Text style={styles.smallText}>请求能否满足需视供应情况而定</Text>

        <FlatList
          data={options}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionContainer} onPress={() => setSelectedOption(item)}>
              <Text style={styles.optionText}>{item}</Text>
              <Icon
                name={selectedOption === item ? 'circle' : 'circle-o'}
                size={20}
                color={selectedOption === item ? '#007AFF' : 'gray'}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceText}>707元</Text>
          <Text style={styles.footerText}>含税费及其他费用</Text>
        </View>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>确认</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#003580',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  roomCountSection: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: 16,
    color: '#000',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 16,
  },
  bedTypeSection: {
    padding: 16,
  },
  sectionLabelBold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: 'gray',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReservationScreen;