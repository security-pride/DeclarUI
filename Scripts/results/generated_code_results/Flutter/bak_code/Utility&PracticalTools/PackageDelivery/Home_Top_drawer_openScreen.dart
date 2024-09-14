import 'package:flutter/material.dart';
class Home_Top_drawer_openScreen extends StatefulWidget {
@override
_Home_Top_drawer_openScreenState createState() => _Home_Top_drawer_openScreenState();
}
class _Home_Top_drawer_openScreenState extends State<Home_Top_drawer_openScreen> {
TextEditingController _trackingController = TextEditingController();
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
backgroundColor: Colors.yellow,
title: Text('Track parcel', style: TextStyle(color: Colors.black)),
leading: IconButton(
icon: Icon(Icons.arrow_back, color: Colors.black),
onPressed: () {
Navigator.pushNamed(context, 'Home_Top_drawer_close');
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
body: Container(
color: Colors.yellow,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Enter parcel number or scan QR code',
style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
children: [
Expanded(
child: TextField(
controller: _trackingController,
decoration: InputDecoration(
hintText: 'tracking number',
filled: true,
fillColor: Colors.white,
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(8),
borderSide: BorderSide.none,
),
),
),
),
SizedBox(width: 8),
Container(
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(8),
),
child: IconButton(
icon: Icon(Icons.qr_code_scanner),
onPressed: () {
// TODO: Implement QR code scanning
},
),
),
],
),
),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: ElevatedButton(
child: Text('Track parcel'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.black,
minimumSize: Size(double.infinity, 50),
),
onPressed: () {
// TODO: Implement parcel tracking
},
),
),
SizedBox(height: 24),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'My parcels',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
Expanded(
child: ListView(
children: [
_buildParcelCard(
'00359007738060313786',
'amazon',
'In transit',
'Last update: 3 hours ago',
),
// Add more parcel cards here
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
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
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'SendParcel_Delivery_method');
} else if (index == 2) {
Navigator.pushNamed(context, 'Parcel_center');
}
},
),
);
}
Widget _buildParcelCard(String trackingNumber, String company, String status, String lastUpdate) {
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