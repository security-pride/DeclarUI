import React, { useState } from 'react';

import {

  View,

  Text,

  StyleSheet,

  TouchableOpacity,

  TextInput,

  Image,

  ScrollView,

  KeyboardAvoidingView,

  Platform,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const UploadScreen = () => {

  const navigation = useNavigation();

  const [description, setDescription] = useState('');

  const [price, setPrice] = useState('0.00');



  return (

    <KeyboardAvoidingView

      style={styles.container}

      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

    >

      <ScrollView style={styles.scrollView}>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>发闲置</Text>

          <TouchableOpacity style={styles.publishButton}>

            <Text style={styles.publishButtonText}>发布</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.descriptionContainer}>

          <TextInput

            style={styles.descriptionInput}

            multiline

            placeholder="描述一下宝贝的品牌型号、货品来源..."

            placeholderTextColor="#999"

            value={description}

            onChangeText={setDescription}

          />

          <TouchableOpacity style={styles.addImageButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.addImageIcon} />

            <Text style={styles.addImageText}>添加优质首图更吸引人~</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.locationContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />

          <Text style={styles.locationText}>烟台 芝罘区</Text>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

          </TouchableOpacity>

        </View>



        <TouchableOpacity style={styles.itemNotFoundButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.itemNotFoundIcon} />

          <Text style={styles.itemNotFoundText}>宝贝不在身边？点我</Text>

        </TouchableOpacity>



        <View style={styles.priceContainer}>

          <Text style={styles.priceLabel}>价格</Text>

          <View style={styles.priceInputContainer}>

            <Text style={styles.currencySymbol}>¥</Text>

            <TextInput

              style={styles.priceInput}

              keyboardType="numeric"

              value={price}

              onChangeText={setPrice}

            />

          </View>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

          </TouchableOpacity>

        </View>



        <View style={styles.shippingContainer}>

          <Text style={styles.shippingLabel}>发货方式</Text>

          <Text style={styles.shippingValue}>包邮</Text>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  scrollView: {

    flex: 1,

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    padding: 15,

    backgroundColor: '#FFFFFF',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  publishButton: {

    backgroundColor: '#FFD700',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

  },

  publishButtonText: {

    color: '#000000',

    fontWeight: 'bold',

  },

  descriptionContainer: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  descriptionInput: {

    height: 100,

    textAlignVertical: 'top',

    fontSize: 16,

  },

  addImageButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    padding: 15,

    borderRadius: 10,

    marginTop: 10,

  },

  addImageIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  addImageText: {

    color: '#666',

  },

  locationContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  locationIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  locationText: {

    flex: 1,

  },

  arrowIcon: {

    width: 16,

    height: 16,

  },

  itemNotFoundButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 1,

  },

  itemNotFoundIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  itemNotFoundText: {

    color: '#666',

  },

  priceContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  priceLabel: {

    flex: 1,

    fontSize: 16,

  },

  priceInputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  currencySymbol: {

    fontSize: 16,

    color: '#FF0000',

    marginRight: 5,

  },

  priceInput: {

    fontSize: 16,

    color: '#FF0000',

    minWidth: 50,

    textAlign: 'right',

  },

  shippingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 1,

  },

  shippingLabel: {

    flex: 1,

    fontSize: 16,

  },

  shippingValue: {

    fontSize: 16,

    marginRight: 10,

  },

});



export default UploadScreen;