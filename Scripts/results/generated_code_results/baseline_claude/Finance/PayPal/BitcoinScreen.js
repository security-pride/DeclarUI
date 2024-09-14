import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LineChart } from 'react-native-chart-kit';



const BitcoinScreen = () => {

  const navigation = useNavigation();



  const data = {

    labels: [],

    datasets: [

      {

        data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 130, 120],

        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,

        strokeWidth: 2

      }

    ]

  };



  return (

    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

      </TouchableOpacity>

      

      <View style={styles.card}>

        <Text style={styles.title}>Bitcoin</Text>

        <Text style={styles.price}>£ 49,283.16</Text>

        <View style={styles.changeContainer}>

          <Text style={styles.changeText}>£ 311.81</Text>

          <Text style={styles.changePercent}>(0.62%)</Text>

          <Text style={styles.changePeriod}>过去24小时</Text>

        </View>

        

        <LineChart

          data={data}

          width={320}

          height={200}

          chartConfig={{

            backgroundColor: '#ffffff',

            backgroundGradientFrom: '#ffffff',

            backgroundGradientTo: '#ffffff',

            decimalPlaces: 0,

            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,

            style: {

              borderRadius: 16

            }

          }}

          bezier

          style={styles.chart}

        />

        

        <View style={styles.timeframeContainer}>

          <TouchableOpacity style={styles.timeframeButton}>

            <Text style={styles.timeframeText}>24小时</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.timeframeButton}>

            <Text style={styles.timeframeText}>1周</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.timeframeButton}>

            <Text style={styles.timeframeText}>1月</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.timeframeButton}>

            <Text style={styles.timeframeText}>1年</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.timeframeButton}>

            <Text style={styles.timeframeText}>所有时间</Text>

          </TouchableOpacity>

        </View>

        

        <View style={styles.amountContainer}>

          <TouchableOpacity style={styles.amountButton}>

            <Text style={styles.amountText}>$ 20</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.amountButton}>

            <Text style={styles.amountText}>$ 50</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.amountButton}>

            <Text style={styles.amountText}>$ 100</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.amountButton}>

            <Text style={styles.amountText}>$ 500</Text>

          </TouchableOpacity>

        </View>

        

        <TouchableOpacity style={styles.buyButton}>

          <Text style={styles.buyButtonText}>购物</Text>

        </TouchableOpacity>

      </View>

      

      <View style={styles.tabBar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Crypto')} style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Crypto</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Send')} style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Payments</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Wallet</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f0f0f0',

  },

  backButton: {

    position: 'absolute',

    top: 40,

    left: 20,

    zIndex: 1,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  card: {

    backgroundColor: 'white',

    borderRadius: 20,

    padding: 20,

    margin: 20,

    marginTop: 80,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  price: {

    fontSize: 32,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  changeContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  changeText: {

    color: 'red',

    fontSize: 16,

    marginRight: 5,

  },

  changePercent: {

    color: 'red',

    fontSize: 16,

    marginRight: 5,

  },

  changePeriod: {

    color: 'gray',

    fontSize: 14,

  },

  chart: {

    marginVertical: 8,

    borderRadius: 16,

  },

  timeframeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  timeframeButton: {

    padding: 5,

  },

  timeframeText: {

    color: 'gray',

    fontSize: 12,

  },

  amountContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  amountButton: {

    backgroundColor: '#f0f0f0',

    padding: 10,

    borderRadius: 5,

  },

  amountText: {

    fontSize: 16,

  },

  buyButton: {

    backgroundColor: '#0000ff',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center',

  },

  buyButtonText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

    backgroundColor: 'white',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    fontSize: 12,

  },

});



export default BitcoinScreen;