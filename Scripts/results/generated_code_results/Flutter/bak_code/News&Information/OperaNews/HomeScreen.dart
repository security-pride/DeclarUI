import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'NewOptions');
},
child: Image.asset('assets/images/template.png'),
),
title: Text('For you'),
actions: [
Icon(Icons.square_outlined),
SizedBox(width: 10),
Icon(Icons.download),
],
),
body: Center(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text('Connection failed'),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset('assets/images/template.png'),
SizedBox(width: 10),
Image.asset('assets/images/template.png'),
SizedBox(width: 10),
Image.asset('assets/images/template.png'),
],
),
SizedBox(height: 20),
ElevatedButton(
onPressed: () {
// Implement retry logic here
},
child: Text('TRY AGAIN'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(
icon: Icon(Icons.refresh),
label: 'Refresh',
),
BottomNavigationBarItem(
icon: Icon(Icons.person),
label: 'Me',
),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Me');
}
},
),
);
}
}