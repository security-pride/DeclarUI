import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const ReservationScreen = () => {

  const navigation = useNavigation();

  const [roomCount, setRoomCount] = useState(1);

  const [selectedBedType, setSelectedBedType] = useState('无偏好');



  const handleRoomCountChange = (increment) => {

    setRoomCount(prevCount => Math.max(1, prevCount + increment));

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="close" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>标准间</Text>

        <View style={styles.placeholder} />

      </View>



      <View style={styles.section}>

        <Text style={styles.sectionTitle}>客房数量</Text>

        <View style={styles.counterContainer}>

          <TouchableOpacity onPress={() => handleRoomCountChange(-1)} style={styles.counterButton}>

            <Icon name="remove" size={24} color="#003580" />

          </TouchableOpacity>

          <Text style={styles.counterText}>{roomCount}</Text>

          <TouchableOpacity onPress={() => handleRoomCountChange(1)} style={styles.counterButton}>

            <Icon name="add" size={24} color="#003580" />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.section}>

        <Text style={styles.sectionTitle}>标准间 1</Text>

        <Text style={styles.sectionSubtitle}>选择床型</Text>

        <Text style={styles.sectionDescription}>请求能否满足需视供应情况而定</Text>



        {['无偏好', '2张单人床', '1张超大号双人床'].map((bedType) => (

          <TouchableOpacity

            key={bedType}

            style={styles.bedTypeOption}

            onPress={() => setSelectedBedType(bedType)}

          >

            <Text style={styles.bedTypeText}>{bedType}</Text>

            {selectedBedType === bedType && (

              <Icon name="checkmark-circle" size={24} color="#003580" />

            )}

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.footer}>

        <View style={styles.priceContainer}>

          <Text style={styles.price}>707元</Text>

          <Text style={styles.priceDescription}>含税费及其他费用</Text>

        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Details')}>

          <Text style={styles.confirmButtonText}>确认</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    padding: 16,

    backgroundColor: '#003580',

  },

  headerTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  placeholder: {

    width: 24,

  },

  section: {

    backgroundColor: '#fff',

    padding: 16,

    marginBottom: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  sectionSubtitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  sectionDescription: {

    fontSize: 14,

    color: '#666',

    marginBottom: 16,

  },

  counterContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

  },

  counterButton: {

    padding: 8,

  },

  counterText: {

    fontSize: 18,

    marginHorizontal: 16,

  },

  bedTypeOption: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  bedTypeText: {

    fontSize: 16,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  priceContainer: {

    flex: 1,

  },

  price: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#003580',

  },

  priceDescription: {

    fontSize: 12,

    color: '#666',

  },

  confirmButton: {

    backgroundColor: '#003580',

    paddingVertical: 12,

    paddingHorizontal: 24,

    borderRadius: 4,

  },

  confirmButtonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default ReservationScreen;