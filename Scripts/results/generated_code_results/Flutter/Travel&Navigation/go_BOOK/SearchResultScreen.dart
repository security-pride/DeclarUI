import 'package:flutter/material.dart';
class SearchResultScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Search'),
actions: [
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
elevation: 0,
backgroundColor: Colors.transparent,
foregroundColor: Colors.black,
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
Text('France'),
Icon(Icons.flight_takeoff, size: 16),
Text('Switzerland'),
],
),
Text('Friday, 30 Jul • 2 Seat • Business'),
IconButton(
icon: Icon(Icons.edit, size: 16),
onPressed: () {},
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Search Result', style: TextStyle(fontWeight: FontWeight.bold)),
Text('15 Founds', style: TextStyle(color: Colors.grey)),
],
),
),
Expanded(
child: ListView(
children: [
_buildFlightCard('AirArabia'),
_buildFlightCard('ZAYAAN'),
_buildFlightCard('Biman Bangladesh Airlines'),
_buildFlightCard('NOVOAIR'),
],
),
),
],
),
);
}
Widget _buildFlightCard(String airline) {
return Card(
margin: EdgeInsets.all(16),
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Image.asset('assets/images/template.png', height: 24),
Text(airline, style: TextStyle(fontWeight: FontWeight.bold)),
],
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('11:00', style: TextStyle(fontWeight: FontWeight.bold)),
Text('LHR'),
],
),
Column(
children: [
Icon(Icons.flight, size: 24),
Text('05h 30m'),
],
),
Column(
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text('16:30', style: TextStyle(fontWeight: FontWeight.bold)),
Text('BHD'),
],
),
],
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
Icon(Icons.attach_money, size: 16),
Text('330', style: TextStyle(fontWeight: FontWeight.bold)),
Text(' Ticket Price'),
],
),
ElevatedButton(
onPressed: () {},
child: Text('Book Now'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
foregroundColor: Colors.white,
),
),
],
),
],
),
),
);
}
}