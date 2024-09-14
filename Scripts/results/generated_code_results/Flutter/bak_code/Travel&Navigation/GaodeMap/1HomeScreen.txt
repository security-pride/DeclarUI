import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
@override
_HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
body: Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
Column(
children: [
_buildTopBar(),
Expanded(child: _buildMapView()),
_buildBottomToolbar(),
_buildBottomNavigation(),
],
),
],
),
);
}

Widget _buildTopBar() {
return SafeArea(
child: Padding(
padding: EdgeInsets.all(16),
child: Row(
children: [
Expanded(
child: Container(
padding: EdgeInsets.symmetric(horizontal: 16),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(20),
),
child: Row(
children: [
Icon(Icons.search, color: Colors.grey),
SizedBox(width: 8),
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: '查找地点、公交、地铁',
border: InputBorder.none,
),
),
),
Icon(Icons.mic, color: Colors.grey),
],
),
),
),
SizedBox(width: 16),
Column(
children: [
Icon(Icons.notifications_none, color: Colors.white),
Text('通知', style: TextStyle(color: Colors.white, fontSize: 12)),
],
),
SizedBox(width: 16),
Column(
children: [
Icon(Icons.layers, color: Colors.white),
Text('图层', style: TextStyle(color: Colors.white, fontSize: 12)),
],
),
SizedBox(width: 16),
Column(
children: [
Icon(Icons.feedback, color: Colors.white),
Text('反馈', style: TextStyle(color: Colors.white, fontSize: 12)),
],
),
],
),
),
);
}

Widget _buildMapView() {
return Stack(
children: [
Positioned(
bottom: 16,
right: 16,
child: Column(
children: [
FloatingActionButton(
mini: true,
child: Icon(Icons.my_location),
onPressed: () {},
),
SizedBox(height: 8),
FloatingActionButton(
mini: true,
child: Icon(Icons.zoom_in),
onPressed: () {},
),
SizedBox(height: 8),
FloatingActionButton(
mini: true,
child: Icon(Icons.zoom_out),
onPressed: () {},
),
],
),
),
],
);
}

Widget _buildBottomToolbar() {
return Container(
color: Colors.white,
padding: EdgeInsets.symmetric(vertical: 8),
child: Column(
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildToolbarItem(Icons.directions_car, '驾车', () {}),
_buildToolbarItem(Icons.directions_bus, '公交', () {}),
_buildToolbarItem(Icons.local_gas_station, '优惠加油', () {
Navigator.pushNamed(context, 'GasInformation');
}),
_buildToolbarItem(Icons.local_taxi, '打车', () {}),
_buildToolbarItem(Icons.hotel, '订酒店', () {}),
],
),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildToolbarItem(Icons.train, '火车票机票', () {
Navigator.pushNamed(context, 'TicketService');
}),
_buildToolbarItem(Icons.drive_eta, '代驾', () {}),
_buildToolbarItem(Icons.directions_walk, '步行', () {}),
_buildToolbarItem(Icons.directions_bus, '实时公交', () {}),
_buildToolbarItem(Icons.more_horiz, '更多工具', () {}),
],
),
],
),
);
}

Widget _buildToolbarItem(IconData icon, String label, VoidCallback onTap) {
return GestureDetector(
onTap: onTap,
child: Column(
mainAxisSize: MainAxisSize.min,
children: [
Icon(icon, color: Colors.blue),
SizedBox(height: 4),
Text(label, style: TextStyle(fontSize: 12)),
],
),
);
}

Widget _buildBottomNavigation() {
return Container(
color: Colors.white,
child: SafeArea(
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildNavItem(Icons.home, '首页', isSelected: true),
_buildNavItem(Icons.location_on, '附近'),
_buildNavItem(Icons.message, '消息'),
_buildNavItem(Icons.local_taxi, '打车'),
_buildNavItem(Icons.person, '我的'),
],
),
),
);
}

Widget _buildNavItem(IconData icon, String label, {bool isSelected = false}) {
return Column(
mainAxisSize: MainAxisSize.min,
children: [
Icon(icon, color: isSelected ? Colors.blue : Colors.grey),
Text(label, style: TextStyle(color: isSelected ? Colors.blue : Colors.grey, fontSize: 12)),
],
);
}
}





