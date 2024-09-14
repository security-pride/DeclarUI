import 'package:flutter/material.dart';
class Home_Top_drawer_closeScreen extends StatefulWidget {
@override
_Home_Top_drawer_closeScreenState createState() => _Home_Top_drawer_closeScreenState();
}
class _Home_Top_drawer_closeScreenState extends State<Home_Top_drawer_closeScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Track parcel'),
leading: IconButton(
icon: Icon(Icons.menu),
onPressed: () {
Navigator.pushNamed(context, 'Home_Top_drawer_open');
},
),
actions: [
Padding(
padding: const EdgeInsets.all(8.0),
child: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Enter tracking number',
suffixIcon: Icon(Icons.qr_code_scanner),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(10),
),
),
),
),
Expanded(
child: ListView(
children: [
_buildParcelItem(
'00359007738060313786',
'amazon',
'In transit',
'Last update: 3 hours ago',
),
_buildParcelItem(
'00806031378690077312',
'AliExpress',
'Left the parcel center',
'Last update: 21 hours ago',
),
_buildParcelItem(
'00690077312806031378',
'zalando',
'Delivered',
'Last update: 2 days ago',
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(
icon: Icon(Icons.mail),
label: 'My parcels',
),
BottomNavigationBarItem(
icon: Icon(Icons.send),
label: 'Send parcel',
),
BottomNavigationBarItem(
icon: Icon(Icons.location_on),
label: 'Parcel center',
),
],
),
);
}
Widget _buildParcelItem(String trackingNumber, String company, String status, String lastUpdate) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Expanded(
child: Text(
trackingNumber,
style: TextStyle(fontWeight: FontWeight.bold),
),
),
Image.asset(
'assets/images/template.png',
height: 24,
width: 24,
),
],
),
SizedBox(height: 8),
Text(status),
SizedBox(height: 4),
Text(
lastUpdate,
style: TextStyle(color: Colors.grey),
),
SizedBox(height: 8),
LinearProgressIndicator(
value: 0.5,
backgroundColor: Colors.grey[200],
valueColor: AlwaysStoppedAnimation<Color>(Colors.yellow),
),
SizedBox(height: 8),
Align(
alignment: Alignment.centerRight,
child: TextButton(
onPressed: () {
// TODO: Implement details navigation
},
child: Text('Details'),
),
),
],
),
),
);
}
}