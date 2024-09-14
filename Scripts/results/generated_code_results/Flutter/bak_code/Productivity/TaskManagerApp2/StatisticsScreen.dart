import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
class StatisticsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Graphic'),
backgroundColor: Colors.transparent,
elevation: 0,
foregroundColor: Colors.black,
),
body: SingleChildScrollView(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Priority',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
Text(
'Task Perday',
style: TextStyle(color: Colors.grey),
),
SizedBox(height: 20),
Container(
height: 200,
child: LineChart(
LineChartData(
gridData: FlGridData(show: false),
titlesData: FlTitlesData(
leftTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
topTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
rightTitles: AxisTitles(sideTitles: SideTitles(showTitles: false)),
bottomTitles: AxisTitles(
sideTitles: SideTitles(
showTitles: true,
getTitlesWidget: (value, meta) {
const titles = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
return Text(titles[value.toInt()]);
},
),
),
),
borderData: FlBorderData(show: false),
lineBarsData: [
LineChartBarData(
spots: [
FlSpot(0, 4),
FlSpot(1, 6),
FlSpot(2, 10),
FlSpot(3, 8),
FlSpot(4, 6),
FlSpot(5, 10),
FlSpot(6, 6),
],
isCurved: true,
color: Colors.blue,
dotData: FlDotData(show: true),
),
LineChartBarData(
spots: [
FlSpot(0, 8),
FlSpot(1, 2),
FlSpot(2, 6),
FlSpot(3, 10),
FlSpot(4, 2),
FlSpot(5, 8),
FlSpot(6, 8),
],
isCurved: true,
color: Colors.red,
dotData: FlDotData(show: true),
),
LineChartBarData(
spots: [
FlSpot(0, 2),
FlSpot(1, 8),
FlSpot(2, 4),
FlSpot(3, 2),
FlSpot(4, 4),
FlSpot(5, 4),
FlSpot(6, 4),
],
isCurved: true,
color: Colors.green,
dotData: FlDotData(show: true),
),
],
),
),
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildLegendItem('Personal', Colors.blue),
_buildLegendItem('Private', Colors.red),
_buildLegendItem('Secret', Colors.green),
],
),
SizedBox(height: 40),
Text(
'Your Activity',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
SizedBox(height: 10),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.chevron_left),
onPressed: () {
// Handle previous month
},
),
Text(
'April 2021',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
IconButton(
icon: Icon(Icons.chevron_right),
onPressed: () {
// Handle next month
},
),
],
),
SizedBox(height: 20),
Container(
height: 200,
child: BarChart(
BarChartData(
alignment: BarChartAlignment.spaceAround,
maxY: 5,
barTouchData: BarTouchData(enabled: false),
titlesData: FlTitlesData(
show: true,
bottomTitles: AxisTitles(
sideTitles: SideTitles(
showTitles: false,
),
),
leftTitles: AxisTitles(
sideTitles: SideTitles(
showTitles: false,
),
),
topTitles: AxisTitles(
sideTitles: SideTitles(
showTitles: false,
),
),
rightTitles: AxisTitles(
sideTitles: SideTitles(
showTitles: false,
),
),
),
gridData: FlGridData(show: false),
borderData: FlBorderData(show: false),
barGroups: [
_generateBarGroup(0, 2, 1),
_generateBarGroup(1, 3, 2),
_generateBarGroup(2, 1, 3),
_generateBarGroup(3, 4, 2),
_generateBarGroup(4, 2, 4),
_generateBarGroup(5, 3, 1),
_generateBarGroup(6, 2, 1),
],
),
),
),
],
),
),
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.add),
onPressed: () {
Navigator.pushNamed(context, 'AddTask');
},
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
bottomNavigationBar: BottomAppBar(
shape: CircularNotchedRectangle(),
notchMargin: 8.0,
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(
icon: Icon(Icons.home),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
IconButton(icon: Icon(Icons.list), onPressed: () {}),
SizedBox(width: 48),
IconButton(
icon: Icon(Icons.bar_chart, color: Colors.blue),
onPressed: () {},
),
IconButton(icon: Icon(Icons.person), onPressed: () {}),
],
),
),
);
}
Widget _buildLegendItem(String label, Color color) {
return Row(
children: [
Container(
width: 16,
height: 16,
color: color,
),
SizedBox(width: 4),
Text(label),
],
);
}
BarChartGroupData _generateBarGroup(int x, double personal, double work) {
return BarChartGroupData(
x: x,
barRods: [
BarChartRodData(
toY: personal,
color: Colors.blue,
width: 12,
),
BarChartRodData(
toY: work,
color: Colors.red,
width: 12,
),
],
);
}
}