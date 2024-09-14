import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
int _selectedIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text('9:10'),
actions: [
IconButton(
icon: Icon(Icons.tag),
onPressed: () {
// Handle deals action
},
),
],
),
body: SingleChildScrollView(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Ask me anything...',
suffixIcon: Row(
mainAxisSize: MainAxisSize.min,
children: [
IconButton(
icon: Icon(Icons.camera_alt),
onPressed: () {
// Handle camera action
},
),
IconButton(
icon: Icon(Icons.mic),
onPressed: () {
// Handle microphone action
},
),
],
),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
),
Row(
children: [
Expanded(
child: Card(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Icon(Icons.location_on),
Text('Mountain View, CA'),
],
),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.wb_sunny),
Text('60°F', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
],
),
SizedBox(height: 8),
Text('Low UV today'),
Text('81%'),
],
),
),
),
),
Expanded(
child: Card(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Icon(Icons.card_giftcard),
Text('Rewards'),
],
),
SizedBox(height: 8),
Text('Earn Microsoft Rewards points by searching'),
SizedBox(height: 8),
Image.asset('assets/images/template.png', height: 50),
],
),
),
),
),
],
),
Card(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Stocks', style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Text('DJI'),
Text('AAPL'),
Text('AMZN'),
Text('TSLA'),
],
),
),
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
if (index == 4) {
Navigator.pushNamed(context, 'Apps');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'Weather'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
BottomNavigationBarItem(icon: Icon(Icons.tab), label: 'Tabs'),
BottomNavigationBarItem(icon: Icon(Icons.apps), label: 'Apps'),
],
),
);
}
}