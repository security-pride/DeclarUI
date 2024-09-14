import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Medical App'),
),
body: SingleChildScrollView(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search drugs, conditions, news...',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(),
),
),
),
GridView.count(
shrinkWrap: true,
crossAxisCount: 2,
children: [
_buildFeatureTile('Symptom Checker', Icons.healing, () {}),
_buildFeatureTile('Med Reminders', Icons.alarm, () {}),
_buildFeatureTile('Prescription Discounts', Icons.local_pharmacy, () {}),
_buildFeatureTile('Drug Interactions', Icons.compare_arrows, () {}),
_buildFeatureTile('Pill Identifier', Icons.search, () {
Navigator.pushNamed(context, 'PillIdentifier');
}),
_buildFeatureTile('Track Symptoms', Icons.show_chart, () {}),
],
),
// Add more widgets as needed
],
),
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.medical_services), label: 'Doctor Finder'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
),
);
}
Widget _buildFeatureTile(String title, IconData icon, VoidCallback onTap) {
return InkWell(
onTap: onTap,
child: Card(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(icon, size: 50),
SizedBox(height: 8),
Text(title, textAlign: TextAlign.center),
],
),
),
);
}
}