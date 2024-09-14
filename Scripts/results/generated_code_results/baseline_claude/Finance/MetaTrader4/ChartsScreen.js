import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import Icon from 'react-native-vector-icons/FontAwesome';



const { width } = Dimensions.get('window');



const ChartsScreen = () => {

  const [chartData, setChartData] = useState({

    labels: ['15 Jul', '16 Jul', '17 Jul'],

    datasets: [

      {

        data: [1.08930, 1.08770, 1.09339],

      },

    ],

  });



  const [rsi, setRsi] = useState(61.16);



  useEffect(() => {

    // Simulating data fetch

    // In a real app, you would fetch this data from an API

  }, []);



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerText}>H1</Text>

        <View style={styles.headerIcons}>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="plus" size={20} color="#fff" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="line-chart" size={20} color="#fff" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="area-chart" size={20} color="#fff" />

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.tradeButton}>

          <Text style={styles.tradeButtonText}>Trade</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.chartContainer}>

        <Text style={styles.chartTitle}>EURUSD, H1</Text>

        <LineChart

          data={chartData}

          width={width - 20}

          height={220}

          chartConfig={{

            backgroundColor: '#1e1e1e',

            backgroundGradientFrom: '#1e1e1e',

            backgroundGradientTo: '#1e1e1e',

            decimalPlaces: 5,

            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,

            style: {

              borderRadius: 16,

            },

          }}

          bezier

          style={styles.chart}

        />

        <View style={styles.rsiContainer}>

          <Text style={styles.rsiText}>RSI(14) {rsi.toFixed(2)}</Text>

          <LineChart

            data={{

              labels: [],

              datasets: [{ data: [30, 50, 70, rsi] }],

            }}

            width={width - 20}

            height={100}

            chartConfig={{

              backgroundColor: '#1e1e1e',

              backgroundGradientFrom: '#1e1e1e',

              backgroundGradientTo: '#1e1e1e',

              decimalPlaces: 0,

              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,

              style: {

                borderRadius: 16,

              },

            }}

            withDots={false}

            withInnerLines={false}

            withOuterLines={false}

            withHorizontalLabels={false}

            withVerticalLabels={false}

            style={styles.rsiChart}

          />

        </View>

      </View>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="bar-chart" size={20} color="#fff" />

          <Text style={styles.footerButtonText}>Quotes</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="line-chart" size={20} color="#fff" />

          <Text style={styles.footerButtonText}>Chart</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="exchange" size={20} color="#fff" />

          <Text style={styles.footerButtonText}>Trade</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="history" size={20} color="#fff" />

          <Text style={styles.footerButtonText}>History</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="cog" size={20} color="#fff" />

          <Text style={styles.footerButtonText}>Settings</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#1e1e1e',

  },

  headerText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  iconButton: {

    marginHorizontal: 5,

  },

  tradeButton: {

    backgroundColor: '#333',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 5,

  },

  tradeButtonText: {

    color: '#fff',

  },

  chartContainer: {

    flex: 1,

    padding: 10,

  },

  chartTitle: {

    color: '#fff',

    fontSize: 16,

    marginBottom: 10,

  },

  chart: {

    marginVertical: 8,

    borderRadius: 16,

  },

  rsiContainer: {

    marginTop: 20,

  },

  rsiText: {

    color: '#fff',

    fontSize: 14,

    marginBottom: 5,

  },

  rsiChart: {

    marginVertical: 8,

    borderRadius: 16,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#1e1e1e',

    paddingVertical: 10,

  },

  footerButton: {

    alignItems: 'center',

  },

  footerButtonText: {

    color: '#fff',

    fontSize: 12,

    marginTop: 5,

  },

});



export default ChartsScreen;