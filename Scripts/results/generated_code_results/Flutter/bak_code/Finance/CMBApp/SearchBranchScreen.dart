import 'package:flutter/material.dart';
class SearchBranchScreen extends StatefulWidget {
const SearchBranchScreen({Key? key}) : super(key: key);
@override
_SearchBranchScreenState createState() => _SearchBranchScreenState();
}
class _SearchBranchScreenState extends State<SearchBranchScreen> {
String selectedDate = '今天 07-18';
List<String> dates = ['今天 07-18', '明天 07-19', '周六 07-20', '周日 07-21', '周一 07-22', '周二 07-23', '周三 07-24'];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('选择网点'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'CustomService'),
),
actions: [
IconButton(icon: Icon(Icons.location_on), onPressed: () {}),
IconButton(icon: Icon(Icons.map), onPressed: () {}),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: '请输入网点名称、区划或街道搜索',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
),
Container(
height: 50,
child: ListView.builder(
scrollDirection: Axis.horizontal,
itemCount: dates.length,
itemBuilder: (context, index) {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 4),
child: ChoiceChip(
label: Text(dates[index]),
selected: selectedDate == dates[index],
onSelected: (selected) {
setState(() {
selectedDate = dates[index];
});
},
),
);
},
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('全部网点', style: TextStyle(fontWeight: FontWeight.bold)),
Text('筛选', style: TextStyle(color: Colors.blue)),
],
),
),
Expanded(
child: ListView(
children: [
_buildBranchItem('烟台滨海支行', '烟台市芝罘区滨海景区47号', '685m', true, true),
_buildBranchItem('烟台南大街支行', '烟台市芝罘区南大街303号国贸大厦1楼', '864m', true, false),
_buildBranchItem('烟台海港路支行', '烟台市芝罘区海港路25-4 (阳光10...', '2.63km', true, false),
_buildBranchItem('烟台幸福路支行', '烟台市芝罘区幸福路46-1号', '6.00km', true, false),
_buildBranchItem('烟台莱山支行', '山东省烟台市莱山区迎春大街133号', '8.01km', true, false),
],
),
),
],
),
);
}
Widget _buildBranchItem(String name, String address, String distance, bool isOpen, bool isNearest) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Padding(
padding: const EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Expanded(
child: Text(name, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
),
if (isOpen) Text('今日营业', style: TextStyle(color: Colors.green)),
if (isNearest) Container(
padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(4),
),
child: Text('最近', style: TextStyle(color: Colors.white, fontSize: 12)),
),
],
),
SizedBox(height: 8),
Text(address, style: TextStyle(color: Colors.grey)),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
Icon(Icons.directions, color: Colors.blue, size: 16),
SizedBox(width: 4),
Text(distance, style: TextStyle(color: Colors.blue)),
],
),
Text('详情 >', style: TextStyle(color: Colors.blue)),
],
),
],
),
),
);
}
}