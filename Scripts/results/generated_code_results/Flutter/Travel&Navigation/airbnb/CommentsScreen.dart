import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
class CommentsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Details'),
),
title: Text('评价'),
actions: [
IconButton(
icon: Icon(Icons.search),
onPressed: () {},
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
children: [
Text(
'4.80',
style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
),
SizedBox(width: 16),
Image.asset('assets/images/template.png', width: 40, height: 40),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'根据评分、评价和可靠性数据，这是爱彼迎上最受房客欢迎的房源之一',
style: TextStyle(fontSize: 14),
),
),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
children: [
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('总体评分'),
SizedBox(height: 8),
Container(
height: 100,
child: BarChart(
BarChartData(
alignment: BarChartAlignment.spaceAround,
maxY: 5,
barGroups: [
BarChartGroupData(x: 0, barRods: [BarChartRodData(toY: 4.8)]),
BarChartGroupData(x: 1, barRods: [BarChartRodData(toY: 4.0)]),
BarChartGroupData(x: 2, barRods: [BarChartRodData(toY: 3.0)]),
BarChartGroupData(x: 3, barRods: [BarChartRodData(toY: 2.0)]),
BarChartGroupData(x: 4, barRods: [BarChartRodData(toY: 1.0)]),
],
),
),
),
],
),
),
SizedBox(width: 16),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Icon(Icons.cleaning_services, size: 20),
SizedBox(width: 8),
Text('干净卫生'),
SizedBox(width: 8),
Text('5.0'),
],
),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.check_circle_outline, size: 20),
SizedBox(width: 8),
Text('如实描述'),
SizedBox(width: 8),
Text('4.8'),
],
),
],
),
],
),
),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text('5条评价', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
SizedBox(height: 8),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Wrap(
spacing: 8,
runSpacing: 8,
children: [
_buildTag('环境安静 3'),
_buildTag('位置优越 2'),
_buildTag('推荐入住 2'),
_buildTag('干净卫生 1'),
_buildTag('房东热情 1'),
_buildTag('设施齐全 1'),
],
),
),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 24,
),
SizedBox(width: 16),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('David', style: TextStyle(fontWeight: FontWeight.bold)),
Text('使用爱彼迎 8 年'),
],
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Icon(Icons.star, size: 16, color: Colors.yellow),
Icon(Icons.star, size: 16, color: Colors.yellow),
Icon(Icons.star, size: 16, color: Colors.yellow),
Icon(Icons.star, size: 16, color: Colors.yellow),
Icon(Icons.star, size: 16, color: Colors.yellow),
SizedBox(width: 8),
Text('2024年4月'),
],
),
SizedBox(height: 8),
Text(
'宁静而风景如画-我在这里住得非常愉快。大篷车就在海滩旁边，设备齐全，很舒适。公园很安静，是探索南海岸小径的好基地，同时距离韦茅斯也很近。房东很友好，善于沟通，感谢他们愿意回答问题，为当地的酒吧和散步提出建议。我肯定会再次入住这里，并推荐给任何寻找安静休息的人。',
style: TextStyle(fontSize: 14),
),
],
),
),
],
),
),
);
}
Widget _buildTag(String text) {
return Container(
padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(20),
),
child: Text(text, style: TextStyle(fontSize: 12)),
);
}
}