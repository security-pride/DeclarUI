import 'package:flutter/material.dart';
class CalmMethodsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Explore'),
),
title: Text('Calming Everyday Anxiety'),
actions: [
Icon(Icons.wifi),
SizedBox(width: 10),
Icon(Icons.battery_full),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16.0),
child: Text(
'Get in-the-moment support for anxious thinking, plus expert guidance for cultivating a calmer mind every day.',
style: TextStyle(fontSize: 16),
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'SOS for Anxious Moments',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 2,
padding: EdgeInsets.all(16),
children: [
_buildFeatureCard(
'Feeling Overwhelmed SOS',
'Meditation · 3-4 min',
'Give yourself room to breathe.',
'assets/images/template.png',
),
_buildFeatureCard(
'Panicking SOS',
'Meditation · 3 min',
'Anchor your mind and body in the present.',
'assets/images/template.png',
),
_buildFeatureCard(
'Breathe',
'Meditation · 1-3 min',
'Add a sense of spaciousness to your day.',
'assets/images/template.png',
),
_buildFeatureCard(
'Reset',
'Meditation · 3-10 min',
'Find some focus and relaxation during a busy day.',
'assets/images/template.png',
),
],
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Today'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Explore'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '子骆'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Explore');
}
},
),
);
}
Widget _buildFeatureCard(String title, String subtitle, String description, String imagePath) {
return Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Expanded(
child: Image.asset(
imagePath,
fit: BoxFit.cover,
width: double.infinity,
),
),
Padding(
padding: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
title,
style: TextStyle(fontWeight: FontWeight.bold),
),
SizedBox(height: 4),
Text(subtitle),
SizedBox(height: 4),
Text(
description,
style: TextStyle(fontSize: 12),
),
],
),
),
],
),
);
}
}