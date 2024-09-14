import 'package:flutter/material.dart';
class UploadScreen extends StatefulWidget {
@override
_UploadScreenState createState() => _UploadScreenState();
}
class _UploadScreenState extends State<UploadScreen> {
String price = '¥0.00';
String shippingMethod = '包邮';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.close),
onPressed: () => Navigator.pushNamed(context, 'Sell'),
),
title: Text('发闲置'),
actions: [
ElevatedButton(
child: Text('发布'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.yellow,
),
onPressed: () {
// Implement publish logic here
},
),
],
),
body: SingleChildScrollView(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
TextField(
decoration: InputDecoration(
hintText: '描述一下宝贝的品牌型号、货品来源...',
border: InputBorder.none,
),
maxLines: 5,
),
Container(
width: 100,
height: 100,
color: Colors.grey[200],
child: Center(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(Icons.add, size: 40),
Text('添加优质\n首图更吸引人~', textAlign: TextAlign.center),
],
),
),
),
SizedBox(height: 16),
ListTile(
leading: Icon(Icons.location_on),
title: Text('烟台 芝罘区'),
trailing: Icon(Icons.chevron_right),
onTap: () {
// Implement location selection logic
},
),
Row(
children: [
Image.asset('assets/images/template.png', width: 30, height: 30),
SizedBox(width: 8),
Text('宝贝不在身边? 点我', style: TextStyle(color: Colors.blue)),
],
),
Divider(),
ListTile(
title: Text('价格'),
trailing: Text(price, style: TextStyle(color: Colors.red)),
onTap: () {
// Implement price editing logic
},
),
Divider(),
ListTile(
title: Text('发货方式'),
trailing: Text(shippingMethod),
onTap: () {
// Implement shipping method selection logic
},
),
],
),
),
),
);
}
}