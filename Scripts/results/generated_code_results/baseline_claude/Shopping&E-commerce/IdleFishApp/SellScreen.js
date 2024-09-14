import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SellScreen = () => {

  const navigation = useNavigation();



  const renderOption = (title, description, icon) => (

    <TouchableOpacity style={styles.option}>

      <View style={styles.optionContent}>

        <Text style={styles.optionTitle}>{title}</Text>

        <Text style={styles.optionDescription}>{description}</Text>

      </View>

      <Image source={icon} style={styles.optionIcon} />

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>来闲鱼 搞点钱!</Text>

        <Text style={styles.headerSubtitle}>3亿人在闲鱼赚钱</Text>

      </View>



      <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('Upload')}>

        <View style={styles.mainButtonContent}>

          <Text style={styles.mainButtonTitle}>发闲置 ></Text>

          <Text style={styles.mainButtonSubtitle}>30s发布宝贝, 啥都能挣钱</Text>

        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.mainButtonIcon} />

      </TouchableOpacity>



      <TouchableOpacity style={styles.secondaryButton}>

        <View style={styles.secondaryButtonContent}>

          <Text style={styles.secondaryButtonTitle}>一键转卖 ></Text>

          <Text style={styles.secondaryButtonSubtitle}>2年前买的期刊杂志还能卖30元</Text>

        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.secondaryButtonIcon} />

      </TouchableOpacity>



      <View style={styles.optionsContainer}>

        {renderOption('高价帮卖', '支持自己定价卖', require('../assets/snack-icon.png'))}

        {renderOption('闲鱼回收', '免费上门回收', require('../assets/snack-icon.png'))}

        {renderOption('晒好物', '只晒不卖的宝贝', require('../assets/snack-icon.png'))}

      </View>



      <TouchableOpacity style={styles.partTimeButton}>

        <View style={styles.partTimeButtonContent}>

          <Text style={styles.partTimeButtonTitle}>搞副业 ></Text>

          <Text style={styles.partTimeButtonSubtitle}>闲置时间能换钱</Text>

        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.partTimeButtonIcon} />

      </TouchableOpacity>



      <Text style={styles.popularJobsTitle}>15万人在这赚钱 ></Text>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularJobsContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.popularJobImage} />

        <Image source={require('../assets/snack-icon.png')} style={styles.popularJobImage} />

        <Image source={require('../assets/snack-icon.png')} style={styles.popularJobImage} />

        <Image source={require('../assets/snack-icon.png')} style={styles.popularJobImage} />

      </ScrollView>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    padding: 20,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  headerSubtitle: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

    backgroundColor: '#FFD700',

    alignSelf: 'flex-start',

    paddingHorizontal: 10,

    paddingVertical: 2,

    borderRadius: 10,

  },

  mainButton: {

    backgroundColor: '#FFD700',

    borderRadius: 10,

    padding: 15,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    margin: 10,

  },

  mainButtonContent: {

    flex: 1,

  },

  mainButtonTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  mainButtonSubtitle: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  mainButtonIcon: {

    width: 50,

    height: 50,

  },

  secondaryButton: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 15,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    margin: 10,

  },

  secondaryButtonContent: {

    flex: 1,

  },

  secondaryButtonTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  secondaryButtonSubtitle: {

    fontSize: 12,

    color: '#666',

    marginTop: 5,

  },

  secondaryButtonIcon: {

    width: 40,

    height: 40,

  },

  optionsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    margin: 10,

  },

  option: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 10,

    width: '31%',

    alignItems: 'center',

  },

  optionContent: {

    alignItems: 'center',

  },

  optionTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  optionDescription: {

    fontSize: 12,

    color: '#666',

    textAlign: 'center',

  },

  optionIcon: {

    width: 30,

    height: 30,

    marginTop: 10,

  },

  partTimeButton: {

    backgroundColor: '#90EE90',

    borderRadius: 10,

    padding: 15,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    margin: 10,

  },

  partTimeButtonContent: {

    flex: 1,

  },

  partTimeButtonTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  partTimeButtonSubtitle: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  partTimeButtonIcon: {

    width: 50,

    height: 50,

  },

  popularJobsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    margin: 10,

  },

  popularJobsContainer: {

    paddingLeft: 10,

  },

  popularJobImage: {

    width: 120,

    height: 80,

    borderRadius: 10,

    marginRight: 10,

  },

});



export default SellScreen;