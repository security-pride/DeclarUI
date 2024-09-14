import 'package:flutter/material.dart';

import 'package:fl_chart/fl_chart.dart';



class StatisticsScreen extends StatefulWidget {

  @override

  _StatisticsScreenState createState() => _StatisticsScreenState();

}



class _StatisticsScreenState extends State<StatisticsScreen> {

  String _selectedTimeFrame = 'Weekly';



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('Statistic'),

        actions: [

          IconButton(

            icon: Stack(

              children: [

                Icon(Icons.notifications_none),

                Positioned(

                  right: 0,

                  top: 0,

                  child: Container(

                    padding: EdgeInsets.all(2),

                    decoration: BoxDecoration(

                      color: Colors.red,

                      borderRadius: BorderRadius.circular(6),

                    ),

                    constraints: BoxConstraints(

                      minWidth: 12,

                      minHeight: 12,

                    ),

                  ),

                ),

              ],

            ),

            onPressed: () => Navigator.pushNamed(context, 'Notifications'),

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            _buildLearningProgress(),

            _buildCourseProgress(),

          ],

        ),

      ),

      bottomNavigationBar: _buildBottomNavigationBar(),

    );

  }



  Widget _buildLearningProgress() {

    return Card(

      margin: EdgeInsets.all(16),

      child: Padding(

        padding: EdgeInsets.all(16),

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Row(

              mainAxisAlignment: MainAxisAlignment.spaceBetween,

              children: [

                Text('Learning Progress', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

                DropdownButton<String>(

                  value: _selectedTimeFrame,

                  items: ['Weekly', 'Monthly', 'Yearly'].map((String value) {

                    return DropdownMenuItem<String>(

                      value: value,

                      child: Text(value),

                    );

                  }).toList(),

                  onChanged: (String? newValue) {

                    setState(() {

                      _selectedTimeFrame = newValue!;

                    });

                  },

                ),

              ],

            ),

            SizedBox(height: 16),

            SizedBox(

              height: 200,

              child: BarChart(

                BarChartData(

                  alignment: BarChartAlignment.spaceAround,

                  maxY: 10,

                  barTouchData: BarTouchData(

                    touchTooltipData: BarTouchTooltipData(

                      tooltipBgColor: Colors.blueGrey,

                      getTooltipItem: (group, groupIndex, rod, rodIndex) {

                        return BarTooltipItem(

                          '${rod.toY.round()} Class',

                          TextStyle(color: Colors.white),

                        );

                      },

                    ),

                  ),

                  titlesData: FlTitlesData(

                    show: true,

                    bottomTitles: AxisTitles(

                      sideTitles: SideTitles(

                        showTitles: true,

                        getTitlesWidget: (value, meta) {

                          switch (value.toInt()) {

                            case 0: return Text('Sun');

                            case 1: return Text('Mon');

                            case 2: return Text('Tue');

                            case 3: return Text('Wed');

                            case 4: return Text('Thu');

                            case 5: return Text('Fri');

                            case 6: return Text('Sat');

                            default: return Text('');

                          }

                        },

                      ),

                    ),

                    leftTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),

                    topTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),

                    rightTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),

                  ),

                  gridData: FlGridData(show: false),

                  borderData: FlBorderData(show: false),

                  barGroups: [

                    BarChartGroupData(x: 0, barRods: [BarChartRodData(toY: 8, color: Colors.purple)]),

                    BarChartGroupData(x: 1, barRods: [BarChartRodData(toY: 10, color: Colors.purple)]),

                    BarChartGroupData(x: 2, barRods: [BarChartRodData(toY: 7, color: Colors.purple)]),

                    BarChartGroupData(x: 3, barRods: [BarChartRodData(toY: 9, color: Colors.purple)]),

                    BarChartGroupData(x: 4, barRods: [BarChartRodData(toY: 3, color: Colors.purple)]),

                    BarChartGroupData(x: 5, barRods: [BarChartRodData(toY: 7, color: Colors.purple)]),

                    BarChartGroupData(x: 6, barRods: [BarChartRodData(toY: 8, color: Colors.purple)]),

                  ],

                ),

              ),

            ),

          ],

        ),

      ),

    );

  }



  Widget _buildCourseProgress() {

    return Padding(

      padding: EdgeInsets.all(16),

      child: Column(

        crossAxisAlignment: CrossAxisAlignment.start,

        children: [

          Text('Course Progress (4)', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

          SizedBox(height: 16),

          _buildCourseCard(

            category: 'Programing',

            title: 'Bootstrapping Fundamental Principles',

            rating: 4.7,

            reviews: 1242,

            progress: 0.74,

          ),

          SizedBox(height: 16),

          _buildCourseCard(

            category: 'Interface Design',

            title: 'User interface for beginners',

            rating: 4.5,

            reviews: 1000,

            progress: 0.48,

          ),

        ],

      ),

    );

  }



  Widget _buildCourseCard({

    required String category,

    required String title,

    required double rating,

    required int reviews,

    required double progress,

  }) {

    return Card(

      child: Padding(

        padding: EdgeInsets.all(16),

        child: Row(

          children: [

            Expanded(

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Text(category, style: TextStyle(color: Colors.purple)),

                  SizedBox(height: 4),

                  Text(title, style: TextStyle(fontWeight: FontWeight.bold)),

                  SizedBox(height: 4),

                  Row(

                    children: [

                      Icon(Icons.star, color: Colors.yellow, size: 16),

                      Text(' $rating (${reviews.toString()} Reviews)'),

                    ],

                  ),

                  SizedBox(height: 8),

                  LinearProgressIndicator(

                    value: progress,

                    backgroundColor: Colors.grey[300],

                    valueColor: AlwaysStoppedAnimation<Color>(Colors.purple),

                  ),

                  SizedBox(height: 4),

                  Text('${(progress * 100).round()}%'),

                ],

              ),

            ),

            SizedBox(width: 16),

            Image.asset('assets/images/template.png', width: 80, height: 80),

          ],

        ),

      ),

    );

  }



  Widget _buildBottomNavigationBar() {

    return BottomNavigationBar(

      currentIndex: 1,

      items: [

        BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

        BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Statistic'),

        BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Favorites'),

        BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

      ],

      onTap: (index) {

        if (index == 0) {

          Navigator.pushNamed(context, 'Discover');

        } else if (index == 2) {

          Navigator.pushNamed(context, 'Favorites');

        }

      },

    );

  }

}