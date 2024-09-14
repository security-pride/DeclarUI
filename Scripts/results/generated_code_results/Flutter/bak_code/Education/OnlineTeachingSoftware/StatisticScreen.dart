import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
class StatisticsScreen extends StatefulWidget {
@override
_StatisticsScreenState createState() => _StatisticsScreenState();
}
class _StatisticsScreenState extends State<StatisticsScreen> {
int _selectedIndex = 1;
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
Icon(Icons.notifications),
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
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Learning Progress',
style: Theme.of(context).textTheme.headline6,
),
DropdownButton<String>(
value: _selectedTimeFrame,
items: ['Daily', 'Weekly', 'Monthly']
.map((String value) => DropdownMenuItem<String>(
value: value,
child: Text(value),
))
.toList(),
onChanged: (String? newValue) {
if (newValue != null) {
setState(() {
_selectedTimeFrame = newValue;
});
}
},
),
],
),
),
Container(
height: 200,
padding: EdgeInsets.all(16),
child: BarChart(
BarChartData(
alignment: BarChartAlignment.spaceAround,
maxY: 10,
barTouchData: BarTouchData(
touchTooltipData: BarTouchTooltipData(
tooltipBgColor: Colors.blueAccent,
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
const titles = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
return Text(titles[value.toInt()]);
},
),
),
),
borderData: FlBorderData(show: false),
barGroups: [
BarChartGroupData(x: 0, barRods: [BarChartRodData(toY: 8)]),
BarChartGroupData(x: 1, barRods: [BarChartRodData(toY: 10)]),
BarChartGroupData(x: 2, barRods: [BarChartRodData(toY: 7)]),
BarChartGroupData(x: 3, barRods: [BarChartRodData(toY: 9)]),
BarChartGroupData(x: 4, barRods: [BarChartRodData(toY: 3)]),
BarChartGroupData(x: 5, barRods: [BarChartRodData(toY: 7)]),
BarChartGroupData(x: 6, barRods: [BarChartRodData(toY: 8)]),
],
),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Course Progress (4)',
style: Theme.of(context).textTheme.headline6,
),
),
_buildCourseProgressCard(
'Programing',
'Bootstrapping Fundamental Principles',
4.7,
1242,
74,
),
_buildCourseProgressCard(
'Interface Design',
'User interface for beginners',
0,
0,
0,
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
switch (index) {
case 0:
Navigator.pushReplacementNamed(context, 'Discover');
break;
case 2:
Navigator.pushReplacementNamed(context, 'Favorites');
break;
case 3:
// TODO: Implement Profile navigation
break;
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Statistic'),
BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Favorites'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
),
);
}
Widget _buildCourseProgressCard(String category, String title, double rating, int reviews, int progress) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(category, style: TextStyle(color: Colors.grey)),
SizedBox(height: 8),
Text(title, style: Theme.of(context).textTheme.subtitle1),
SizedBox(height: 8),
if (rating > 0)
Row(
children: [
Icon(Icons.star, color: Colors.yellow, size: 16),
SizedBox(width: 4),
Text('$rating ($reviews Reviews)'),
],
),
SizedBox(height: 8),
LinearProgressIndicator(value: progress / 100),
SizedBox(height: 8),
Text('$progress% completed'),
SizedBox(height: 8),
Image.asset('assets/images/template.png', height: 100, width: double.infinity, fit: BoxFit.cover),
],
),
),
);
}
}