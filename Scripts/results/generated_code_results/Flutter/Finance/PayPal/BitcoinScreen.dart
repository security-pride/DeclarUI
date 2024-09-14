import 'package:flutter/material.dart';

import 'package:fl_chart/fl_chart.dart';



class BitcoinScreen extends StatefulWidget {

  @override

  _BitcoinScreenState createState() => _BitcoinScreenState();

}



class _BitcoinScreenState extends State<BitcoinScreen> {

  String selectedTimeRange = '24小时';



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () {

            Navigator.pushNamed(context, 'Crypto');

          },

        ),

        title: Text('Bitcoin'),

      ),

      body: Column(

        crossAxisAlignment: CrossAxisAlignment.start,

        children: [

          Padding(

            padding: const EdgeInsets.all(16.0),

            child: Column(

              crossAxisAlignment: CrossAxisAlignment.start,

              children: [

                Text(

                  '£ 49,283.16',

                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),

                ),

                Row(

                  children: [

                    Icon(Icons.arrow_downward, color: Colors.red),

                    Text(

                      '£ 311.81 (0.62%)',

                      style: TextStyle(color: Colors.red),

                    ),

                    Text(' 过去24小时'),

                  ],

                ),

              ],

            ),

          ),

          Container(

            height: 200,

            child: LineChart(

              LineChartData(

                gridData: FlGridData(show: false),

                titlesData: FlTitlesData(show: false),

                borderData: FlBorderData(show: false),

                lineBarsData: [

                  LineChartBarData(

                    spots: [

                      FlSpot(0, 3),

                      FlSpot(2, 2),

                      FlSpot(4, 5),

                      FlSpot(6, 3.1),

                      FlSpot(8, 4),

                      FlSpot(10, 3),

                    ],

                    isCurved: true,

                    color: Colors.red,

                    barWidth: 3,

                    isStrokeCapRound: true,

                    dotData: FlDotData(show: false),

                    belowBarData: BarAreaData(show: false),

                  ),

                ],

              ),

            ),

          ),

          SingleChildScrollView(

            scrollDirection: Axis.horizontal,

            child: Row(

              children: ['24小时', '1周', '1月', '1年', '所有时间'].map((range) {

                return Padding(

                  padding: const EdgeInsets.symmetric(horizontal: 8.0),

                  child: ChoiceChip(

                    label: Text(range),

                    selected: selectedTimeRange == range,

                    onSelected: (bool selected) {

                      setState(() {

                        selectedTimeRange = range;

                      });

                    },

                  ),

                );

              }).toList(),

            ),

          ),

          Padding(

            padding: const EdgeInsets.all(16.0),

            child: Wrap(

              spacing: 8.0,

              runSpacing: 8.0,

              children: [

                OutlinedButton(

                  onPressed: () {},

                  child: Text('\$ 20'),

                ),

                OutlinedButton(

                  onPressed: () {},

                  child: Text('\$ 50'),

                ),

                OutlinedButton(

                  onPressed: () {},

                  child: Text('\$ 100'),

                ),

                OutlinedButton(

                  onPressed: () {},

                  child: Text('\$ 500'),

                ),

              ],

            ),

          ),

          Padding(

            padding: const EdgeInsets.symmetric(horizontal: 16.0),

            child: ElevatedButton(

              onPressed: () {},

              child: Text('购物'),

              style: ElevatedButton.styleFrom(

                backgroundColor: Colors.blue,

                minimumSize: Size(double.infinity, 50),

              ),

            ),

          ),

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        currentIndex: 1,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.show_chart), label: 'Crypto'),

          BottomNavigationBarItem(icon: Icon(Icons.payment), label: 'Payments'),

          BottomNavigationBarItem(icon: Icon(Icons.account_balance_wallet), label: 'Wallet'),

        ],

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Home');

          } else if (index == 2) {

            Navigator.pushNamed(context, 'Payments');

          } else if (index == 3) {

            Navigator.pushNamed(context, 'Wallet');

          }

        },

      ),

    );

  }

}