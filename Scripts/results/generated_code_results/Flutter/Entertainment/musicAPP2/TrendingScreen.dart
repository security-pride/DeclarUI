import 'package:flutter/material.dart';
class TrendingScreen extends StatefulWidget {
@override
_TrendingScreenState createState() => _TrendingScreenState();
}
class _TrendingScreenState extends State<TrendingScreen> {
String selectedGenre = 'Partyholics';
String selectedYear = '2020';
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'9:41',
style: TextStyle(fontWeight: FontWeight.bold),
),
Row(
children: [
Icon(Icons.signal_cellular_alt),
SizedBox(width: 5),
Icon(Icons.wifi),
SizedBox(width: 5),
Icon(Icons.battery_full),
],
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Trending',
style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
children: [
Expanded(
child: Container(
padding: EdgeInsets.symmetric(horizontal: 12),
decoration: BoxDecoration(
border: Border.all(color: Colors.grey),
borderRadius: BorderRadius.circular(8),
),
child: DropdownButton<String>(
value: selectedGenre,
isExpanded: true,
underline: SizedBox(),
onChanged: (String? newValue) {
setState(() {
selectedGenre = newValue!;
});
},
items: <String>['Partyholics', 'Pop', 'Rock', 'Hip Hop']
.map<DropdownMenuItem<String>>((String value) {
return DropdownMenuItem<String>(
value: value,
child: Text(value),
);
}).toList(),
),
),
),
SizedBox(width: 16),
Container(
padding: EdgeInsets.symmetric(horizontal: 12),
decoration: BoxDecoration(
border: Border.all(color: Colors.red),
borderRadius: BorderRadius.circular(8),
),
child: DropdownButton<String>(
value: selectedYear,
underline: SizedBox(),
onChanged: (String? newValue) {
setState(() {
selectedYear = newValue!;
});
},
items: <String>['2020', '2021', '2022', '2023']
.map<DropdownMenuItem<String>>((String value) {
return DropdownMenuItem<String>(
value: value,
child: Text(value),
);
}).toList(),
),
),
],
),
),
SizedBox(height: 20),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Trending Songs',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
Expanded(
child: ListView(
children: [
_buildTrendingSongItem("I'm a Freak (feat. Pitbull)"),
_buildTrendingSongItem("Can't Remember To Forget"),
_buildTrendingSongItem("Beyonce"),
_buildTrendingSongItem("Roller Coaster (Single)"),
_buildTrendingSongItem("Unconditionally"),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Trending Albums',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
Container(
height: 150,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildTrendingAlbumItem(),
_buildTrendingAlbumItem(),
_buildTrendingAlbumItem(),
],
),
),
],
),
),
bottomNavigationBar: BottomAppBar(
child: Container(
height: 60,
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildNavBarItem(Icons.home, 'Home'),
_buildNavBarItem(Icons.trending_up, 'Trending', isSelected: true),
_buildNavBarItem(Icons.search, 'Search'),
_buildNavBarItem(Icons.library_music, 'Library'),
_buildNavBarItem(Icons.settings, 'Settings'),
],
),
),
),
bottomSheet: Container(
height: 60,
color: Colors.blue,
child: Row(
children: [
SizedBox(width: 10),
ClipRRect(
borderRadius: BorderRadius.circular(5),
child: Image.asset('assets/images/template.png', width: 40, height: 40, fit: BoxFit.cover),
),
SizedBox(width: 10),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text('Illegal Weapon 2.0', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
Text('Street Dancer 3D', style: TextStyle(color: Colors.white70)),
],
),
),
IconButton(
icon: Icon(Icons.favorite_border, color: Colors.white),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.pause, color: Colors.white),
onPressed: () {},
),
],
),
),
);
}
Widget _buildTrendingSongItem(String title) {
return ListTile(
leading: Stack(
alignment: Alignment.center,
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset('assets/images/template.png', width: 50, height: 50, fit: BoxFit.cover),
),
Icon(Icons.play_arrow, color: Colors.white),
],
),
title: Text(title),
subtitle: Text('12,598 Played'),
trailing: Icon(Icons.more_vert),
onTap: () => Navigator.pushNamed(context, 'NowPlaying'),
);
}
Widget _buildTrendingAlbumItem() {
return Container(
width: 120,
margin: EdgeInsets.only(left: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset('assets/images/template.png', width: 120, height: 120, fit: BoxFit.cover),
),
SizedBox(height: 5),
Text('Album Title', style: TextStyle(fontWeight: FontWeight.bold), overflow: TextOverflow.ellipsis),
Text('Artist Name', style: TextStyle(color: Colors.grey), overflow: TextOverflow.ellipsis),
],
),
);
}
Widget _buildNavBarItem(IconData icon, String label, {bool isSelected = false}) {
return Column(
mainAxisSize: MainAxisSize.min,
children: [
Icon(icon, color: isSelected ? Colors.blue : Colors.grey),
Text(label, style: TextStyle(color: isSelected ? Colors.blue : Colors.grey)),
],
);
}
}