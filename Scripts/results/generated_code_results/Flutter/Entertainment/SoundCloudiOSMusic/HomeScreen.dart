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
title: Text('9:41 AM'),
actions: [
Icon(Icons.wifi),
SizedBox(width: 8),
Icon(Icons.battery_full),
],
),
body: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Hots now',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildPlaylistCard('Summer Vibes', '1,300,231 FOLLOWERS'),
_buildPlaylistCard('Rap Zone', '650,231 FOLLOWERS'),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Mood',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildPlaylistCard('Shower Time', '1,300,231 FOLLOWERS'),
_buildPlaylistCard('Old School', '300,231 FOLLOWERS'),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Popular artists',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildArtistCard('Ed Sheeran'),
_buildArtistCard('Rita Ora'),
_buildArtistCard('Eminem'),
_buildArtistCard('Dua Lipa'),
],
),
),
],
),
bottomNavigationBar: BottomAppBar(
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(
icon: Icon(Icons.home),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
IconButton(
icon: Icon(Icons.headphones),
onPressed: () {
Navigator.pushNamed(context, 'Listen');
},
),
IconButton(
icon: Icon(Icons.search),
onPressed: () {
Navigator.pushNamed(context, 'Search');
},
),
IconButton(
icon: Icon(Icons.person),
onPressed: () {
Navigator.pushNamed(context, 'Profile');
},
),
],
),
),
bottomSheet: GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'Player');
},
child: Container(
color: Colors.grey[200],
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('All Mine - Kanye West'),
IconButton(
icon: Icon(Icons.play_arrow),
onPressed: () {
Navigator.pushNamed(context, 'Player');
},
),
],
),
),
),
);
}
Widget _buildPlaylistCard(String title, String followers) {
return Card(
child: Stack(
children: [
Image.asset('assets/images/template.png', width: 150, height: 150, fit: BoxFit.cover),
Positioned(
bottom: 8,
left: 8,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
Text(followers, style: TextStyle(color: Colors.white, fontSize: 12)),
],
),
),
],
),
);
}
Widget _buildArtistCard(String name) {
return Card(
child: Column(
children: [
Image.asset('assets/images/template.png', width: 100, height: 100, fit: BoxFit.cover),
SizedBox(height: 8),
Text(name),
],
),
);
}
}