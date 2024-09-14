import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
class ChartsScreen extends StatefulWidget {
@override
_ChartsScreenState createState() => _ChartsScreenState();
}
class _ChartsScreenState extends State<ChartsScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('EURUSD, H1'),
actions: [
IconButton(
icon: Icon(Icons.add),
onPressed: () {
Navigator.pushNamed(context, 'Objects');
},
),
IconButton(
icon: Icon(Icons.functions),
onPressed: () {
// Implement formula functionality
},
),
IconButton(
icon: Icon(Icons.camera_alt),
onPressed: () {
// Implement camera functionality
},
),
],
),
body: Column(
children: [
Expanded(
child: LineChart(
LineChartData(
gridData: FlGridData(show: true),
titlesData: FlTitlesData(
leftTitles: AxisTitles(
sideTitles: SideTitles(
showTitles: true,
reservedSize: 40,
getTitlesWidget: (value, meta) {
return Text(value.toStringAsFixed(5));
},
),
),
bottomTitles: AxisTitles(
sideTitles: SideTitles(
showTitles: true,
getTitlesWidget: (value, meta) {
return Text(
value.toInt() % 24 == 0 ? '${value.toInt()}:00' : '',
style: TextStyle(fontSize: 10),
);
},
),
),
),
borderData: FlBorderData(show: true),
lineBarsData: [
LineChartBarData(
spots: [
FlSpot(0, 1.08930),
FlSpot(24, 1.09010),
FlSpot(48, 1.09339),
],
isCurved: true,
color: Colors.green,
barWidth: 2,
dotData: FlDotData(show: false),
),
],
),
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('RSI(14) 61.16'),
Text('Trade'),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(icon: Icon(Icons.list), label: 'Quotes'),
BottomNavigationBarItem(icon: Icon(Icons.show_chart), label: 'Chart'),
BottomNavigationBarItem(icon: Icon(Icons.attach_money), label: 'Trade'),
BottomNavigationBarItem(icon: Icon(Icons.history), label: 'History'),
BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
],
currentIndex: 1,
onTap: (index) {
if (index == 4) {
Navigator.pushNamed(context, 'Settings');
}
},
),
);
}
}