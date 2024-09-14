import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
int _selectedIndex = 0;
String _selectedTripType = 'One Way';
String _selectedTransportType = 'Flight';
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 20,
),
SizedBox(width: 8),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Mosarraf H.', style: TextStyle(fontWeight: FontWeight.bold)),
Text('London, UK', style: TextStyle(fontSize: 12, color: Colors.grey)),
],
),
],
),
TextButton(
onPressed: () {},
child: Row(
children: [
Text('London, UK'),
Icon(Icons.location_on, size: 16),
],
),
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Welcome to GoBook', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
Text('Largest Online Ticket Destination', style: TextStyle(color: Colors.grey)),
],
),
),
SizedBox(height: 16),
Container(
height: 80,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildTransportTypeItem('Flight', Icons.flight),
_buildTransportTypeItem('Bus', Icons.directions_bus),
_buildTransportTypeItem('Train', Icons.train),
_buildTransportTypeItem('Launch', Icons.directions_boat),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildTripTypeOption('One Way'),
_buildTripTypeOption('Round Way'),
_buildTripTypeOption('Multi City'),
],
),
SizedBox(height: 16),
Row(
children: [
Expanded(
child: _buildLocationBox('From', 'France', 'CDG, Paris Airport'),
),
IconButton(
icon: Icon(Icons.swap_horiz),
onPressed: () {},
),
Expanded(
child: _buildLocationBox('To', 'Switzerland', 'ZRH, Zurich Airport'),
),
],
),
SizedBox(height: 16),
Row(
children: [
Expanded(
child: _buildDateBox('Journey Date', '30 Jul 23', 'Friday'),
),
SizedBox(width: 16),
Expanded(
child: _buildDateBox('Return Date', 'Save more on return fli...', ''),
),
],
),
SizedBox(height: 16),
_buildTravelerClassBox(),
SizedBox(height: 16),
Row(
children: [
Expanded(
child: ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'Search Result');
},
child: Text('Search'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.black,
padding: EdgeInsets.symmetric(vertical: 16),
),
),
),
SizedBox(width: 16),
IconButton(
icon: Icon(Icons.equalizer),
onPressed: () {},
),
],
),
],
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
if (index == 1) {
Navigator.pushNamed(context, 'Notification');
} else if (index == 2) {
Navigator.pushNamed(context, 'Profile');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: 'Notification'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
BottomNavigationBarItem(icon: Icon(Icons.history), label: 'History'),
BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Setting'),
],
),
);
}
Widget _buildTransportTypeItem(String label, IconData icon) {
bool isSelected = _selectedTransportType == label;
return GestureDetector(
onTap: () {
setState(() {
_selectedTransportType = label;
});
},
child: Container(
width: 80,
margin: EdgeInsets.symmetric(horizontal: 8),
decoration: BoxDecoration(
color: isSelected ? Colors.black : Colors.grey[200],
borderRadius: BorderRadius.circular(16),
),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(icon, color: isSelected ? Colors.white : Colors.black),
SizedBox(height: 4),
Text(label, style: TextStyle(color: isSelected ? Colors.white : Colors.black)),
],
),
),
);
}
Widget _buildTripTypeOption(String type) {
return Row(
children: [
Radio(
value: type,
groupValue: _selectedTripType,
onChanged: (value) {
setState(() {
_selectedTripType = value.toString();
});
},
),
Text(type),
],
);
}
Widget _buildLocationBox(String label, String location, String details) {
return Container(
padding: EdgeInsets.all(8),
decoration: BoxDecoration(
border: Border.all(color: Colors.grey),
borderRadius: BorderRadius.circular(8),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(label, style: TextStyle(color: Colors.grey)),
Text(location, style: TextStyle(fontWeight: FontWeight.bold)),
Text(details, style: TextStyle(fontSize: 12)),
],
),
);
}
Widget _buildDateBox(String label, String date, String day) {
return Container(
padding: EdgeInsets.all(8),
decoration: BoxDecoration(
border: Border.all(color: Colors.grey),
borderRadius: BorderRadius.circular(8),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(label, style: TextStyle(color: Colors.grey)),
Text(date, style: TextStyle(fontWeight: FontWeight.bold)),
Text(day, style: TextStyle(fontSize: 12)),
],
),
);
}
Widget _buildTravelerClassBox() {
return Container(
padding: EdgeInsets.all(8),
decoration: BoxDecoration(
border: Border.all(color: Colors.grey),
borderRadius: BorderRadius.circular(8),
),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Traveler & Class', style: TextStyle(color: Colors.grey)),
Text('2 Traveler', style: TextStyle(fontWeight: FontWeight.bold)),
Text('Economy', style: TextStyle(fontSize: 12)),
],
),
Icon(Icons.arrow_forward_ios, size: 16),
],
),
);
}
}