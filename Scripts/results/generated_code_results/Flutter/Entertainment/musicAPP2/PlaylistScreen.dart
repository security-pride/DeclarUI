import 'package:flutter/material.dart';
class PlaylistScreen extends StatefulWidget {
@override
_PlaylistScreenState createState() => _PlaylistScreenState();
}
class _PlaylistScreenState extends State<PlaylistScreen> {
final List<Map<String, String>> songs = [
{'title': 'Gully Boy', 'artist': 'Ranvir Sing'},
{'title': 'Apna Time Aayega', 'artist': 'Arijit Sing'},
{'title': 'Illegal Weapon 2.0', 'artist': 'Street Dancer 3D'},
{'title': 'Lagli Lahore Di', 'artist': 'Sreya Ghosal'},
{'title': 'Bezubaan Kab Se', 'artist': 'Kapal Dev'},
{'title': 'Nachi Nachi', 'artist': 'Sreya Ghoshal'},
];
int currentPlayingIndex = 2;
@override
Widget build(BuildContext context) {
return Scaffold(
body: Container(
decoration: BoxDecoration(
gradient: LinearGradient(
begin: Alignment.topCenter,
end: Alignment.bottomCenter,
colors: [Colors.blue, Colors.white],
),
),
child: SafeArea(
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
style: TextStyle(color: Colors.white, fontSize: 16),
),
Row(
children: [
Icon(Icons.signal_cellular_alt, color: Colors.white),
SizedBox(width: 8),
Icon(Icons.wifi, color: Colors.white),
SizedBox(width: 8),
Icon(Icons.battery_full, color: Colors.white),
],
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
IconButton(
icon: Icon(Icons.arrow_back, color: Colors.white),
onPressed: () => Navigator.pop(context),
),
SizedBox(width: 8),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Geri - Inder Chahal',
style: TextStyle(
color: Colors.white,
fontSize: 24,
fontWeight: FontWeight.bold,
),
),
Text(
'Pop Songs',
style: TextStyle(color: Colors.white70),
),
],
),
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
ClipRRect(
borderRadius: BorderRadius.circular(12),
child: Image.asset(
'assets/images/template.png',
width: 100,
height: 100,
fit: BoxFit.cover,
),
),
SizedBox(width: 16),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Songs',
style: TextStyle(color: Colors.white70),
),
Text(
'21 Songs',
style: TextStyle(
color: Colors.white,
fontSize: 18,
fontWeight: FontWeight.bold,
),
),
SizedBox(height: 8),
Text(
'Author',
style: TextStyle(color: Colors.white70),
),
Text(
'Various Artists',
style: TextStyle(
color: Colors.white,
fontSize: 18,
fontWeight: FontWeight.bold,
),
),
],
),
Spacer(),
Container(
decoration: BoxDecoration(
shape: BoxShape.circle,
color: Colors.pink,
),
child: IconButton(
icon: Icon(Icons.play_arrow, color: Colors.white),
onPressed: () {},
),
),
],
),
),
Expanded(
child: ListView.builder(
itemCount: songs.length,
itemBuilder: (context, index) {
final song = songs[index];
final isPlaying = index == currentPlayingIndex;
return ListTile(
leading: Text(
'${index + 1}'.padLeft(2, '0'),
style: TextStyle(
color: isPlaying ? Colors.blue : Colors.grey,
fontWeight: FontWeight.bold,
),
),
title: Text(
song['title']!,
style: TextStyle(
color: isPlaying ? Colors.blue : Colors.black,
fontWeight: FontWeight.bold,
),
),
subtitle: Text(song['artist']!),
trailing: IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
onTap: () {
setState(() {
currentPlayingIndex = index;
});
Navigator.pushNamed(context, 'NowPlaying');
},
);
},
),
),
Container(
color: Colors.blue,
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
children: [
ClipRRect(
borderRadius: BorderRadius.circular(4),
child: Image.asset(
'assets/images/template.png',
width: 40,
height: 40,
fit: BoxFit.cover,
),
),
SizedBox(width: 12),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Illegal Weapon 2.0',
style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
),
Text(
'Street Dancer 3D',
style: TextStyle(color: Colors.white70),
),
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
],
),
),
),
);
}
}