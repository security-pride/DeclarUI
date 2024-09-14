import 'package:flutter/material.dart';
class SellScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Home'),
),
title: Text('卖闲置'),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.stretch,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'来闲鱼，搞点钱！',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
Container(
padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
color: Colors.yellow,
child: Text('3亿人在闲鱼赚钱', style: TextStyle(fontSize: 16)),
),
SizedBox(height: 16),
_buildSellOption(
'发闲置',
'30s发布宝贝，啥都能换钱',
'assets/images/template.png',
() => Navigator.pushNamed(context, 'Upload'),
),
_buildSellOption(
'一键转卖',
'2年前买的期刊杂志还能卖30元',
'assets/images/template.png',
() {},
),
Row(
children: [
Expanded(
child: _buildSmallSellOption('高价帮卖', '支持自己定价卖'),
),
Expanded(
child: _buildSmallSellOption('闲鱼回收', '免费上门回收'),
),
Expanded(
child: _buildSmallSellOption('晒好物', '只晒不卖的宝贝'),
),
],
),
SizedBox(height: 16),
_buildPartTimeJobSection(),
],
),
),
);
}
Widget _buildSellOption(String title, String description, String imagePath, VoidCallback onTap) {
return InkWell(
onTap: onTap,
child: Container(
padding: EdgeInsets.all(16),
margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
decoration: BoxDecoration(
color: Colors.yellow,
borderRadius: BorderRadius.circular(8),
),
child: Row(
children: [
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 4),
Text(description),
],
),
),
Image.asset(imagePath, width: 60, height: 60),
Icon(Icons.arrow_forward_ios),
],
),
),
);
}
Widget _buildSmallSellOption(String title, String description) {
return Container(
padding: EdgeInsets.all(8),
margin: EdgeInsets.all(4),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(8),
),
child: Column(
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 4),
Text(description, textAlign: TextAlign.center, style: TextStyle(fontSize: 12)),
],
),
);
}
Widget _buildPartTimeJobSection() {
return Container(
padding: EdgeInsets.all(16),
margin: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.green[100],
borderRadius: BorderRadius.circular(8),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('搞副业', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Text('闲暇时间能换钱'),
SizedBox(height: 8),
Row(
children: [
Expanded(
child: Text('15万人在这赚钱', style: TextStyle(fontWeight: FontWeight.bold)),
),
Image.asset('assets/images/template.png', width: 60, height: 60),
],
),
SizedBox(height: 16),
Container(
height: 100,
child: ListView(
scrollDirection: Axis.horizontal,
children: List.generate(
5,
(index) => Container(
width: 100,
margin: EdgeInsets.only(right: 8),
decoration: BoxDecoration(
borderRadius: BorderRadius.circular(8),
image: DecorationImage(
image: AssetImage('assets/images/template.png'),
fit: BoxFit.cover,
),
),
),
),
),
),
],
),
);
}
}