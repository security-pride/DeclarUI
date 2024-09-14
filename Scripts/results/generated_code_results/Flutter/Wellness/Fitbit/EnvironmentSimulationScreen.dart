import 'package:flutter/material.dart';
class EnvironmentSimulationPage extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
body: Stack(
children: [
Image.asset(
'assets/images/template.png',
fit: BoxFit.cover,
width: double.infinity,
height: double.infinity,
),
SafeArea(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.close, color: Colors.white),
onPressed: () {
Navigator.pushNamed(context, 'Discovery');
},
),
Row(
children: [
Icon(Icons.lock, color: Colors.white),
IconButton(
icon: Icon(Icons.star_border, color: Colors.white),
onPressed: () {},
),
],
),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.blue,
borderRadius: BorderRadius.circular(4),
),
child: Text(
'Calm',
style: TextStyle(color: Colors.white),
),
),
SizedBox(height: 8),
Text(
'Nature rain on leaves',
style: TextStyle(
fontSize: 24,
fontWeight: FontWeight.bold,
color: Colors.white,
),
),
Text(
'用心',
style: TextStyle(fontSize: 18, color: Colors.white),
),
SizedBox(height: 16),
Text(
'Relax with ease to the sounds of rain on leaves.',
style: TextStyle(fontSize: 16, color: Colors.white),
),
],
),
),
Spacer(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
children: [
Row(
children: [
Icon(Icons.access_time, color: Colors.white),
SizedBox(width: 8),
Text(
'持续时间',
style: TextStyle(color: Colors.white),
),
Spacer(),
Text(
'45 分钟',
style: TextStyle(color: Colors.white),
),
],
),
SizedBox(height: 16),
ElevatedButton(
child: Text('试用 PREMIUM'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.teal,
minimumSize: Size(double.infinity, 50),
),
onPressed: () {},
),
],
),
),
],
),
),
],
),
);
}
}