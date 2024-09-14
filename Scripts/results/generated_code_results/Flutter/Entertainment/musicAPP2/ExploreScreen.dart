import 'package:flutter/material.dart';
class ExploreScreen extends StatefulWidget {
@override
_ExploreScreenState createState() => _ExploreScreenState();
}
class _ExploreScreenState extends State<ExploreScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('9:41'),
actions: [
Icon(Icons.signal_cellular_alt),
SizedBox(width: 8),
Icon(Icons.wifi),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Explore',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Recomanded for you',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
),
),
SizedBox(height: 8),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildRecommendedItem('Baghi 3', 'Various Artists'),
_buildRecommendedItem('Surma Surma', 'Various Artists'),
_buildRecommendedItem('Hindi T', 'Various Artists'),
],
),
),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Recent Played',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
),
),
SizedBox(height: 8),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildRecentPlayedItem('No Time To Die'),
_buildRecentPlayedItem('Illegal Weapon'),
_buildRecentPlayedItem('Loca'),
],
),
),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'New Released',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
),
),
SizedBox(height: 8),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildNewReleasedItem('Baghi 3', 'Various Artists'),
_buildNewReleasedItem('Baghi 3', 'Various Artists'),
],
),
),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Popular Artist',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
),
),
SizedBox(height: 8),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildPopularArtistItem('Justin Bieber'),
_buildPopularArtistItem('Michael Jackson'),
_buildPopularArtistItem('Sam Smith'),
],
),
),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Genres & Moods',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
),
),
SizedBox(height: 8),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildGenreMoodButton('Hip Hop'),
_buildGenreMoodButton('Pop'),
_buildGenreMoodButton('Partyholics'),
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(
icon: Icon(Icons.trending_up),
label: 'Trending',
),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.library_music), label: 'Library'),
BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Trending');
} else if (index == 2) {
Navigator.pushNamed(context, 'Search');
}
},
),
);
}
Widget _buildRecommendedItem(String title, String artist) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'NowPlaying'),
child: Container(
width: 150,
margin: EdgeInsets.only(left: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset('assets/images/template.png', height: 150, width: 150, fit: BoxFit.cover),
),
SizedBox(height: 4),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(artist, style: TextStyle(color: Colors.grey)),
],
),
),
);
}
Widget _buildRecentPlayedItem(String title) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'NowPlaying'),
child: Container(
width: 150,
margin: EdgeInsets.only(left: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset('assets/images/template.png', height: 150, width: 150, fit: BoxFit.cover),
),
SizedBox(height: 4),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
],
),
),
);
}
Widget _buildNewReleasedItem(String title, String artist) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'NowPlaying'),
child: Container(
width: 150,
margin: EdgeInsets.only(left: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset('assets/images/template.png', height: 150, width: 150, fit: BoxFit.cover),
),
SizedBox(height: 4),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(artist, style: TextStyle(color: Colors.grey)),
],
),
),
);
}
Widget _buildPopularArtistItem(String name) {
return Container(
width: 100,
margin: EdgeInsets.only(left: 16),
child: Column(
children: [
ClipOval(
child: Image.asset('assets/images/template.png', height: 100, width: 100, fit: BoxFit.cover),
),
SizedBox(height: 4),
Text(name, style: TextStyle(fontWeight: FontWeight.bold), textAlign: TextAlign.center),
],
),
);
}
Widget _buildGenreMoodButton(String label) {
return Container(
margin: EdgeInsets.only(left: 16),
child: ElevatedButton(
onPressed: () {},
child: Text(label),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.pink,
shape: RoundedRectangleBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
);
}
}