import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
final TextEditingController _searchController = TextEditingController();
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
'Search',
style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: TextField(
controller: _searchController,
decoration: InputDecoration(
hintText: 'Gully Boy',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
),
SizedBox(height: 20),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Most Popular',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
],
),
),
SizedBox(height: 10),
ListTile(
leading: ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset('assets/images/template.png', width: 50, height: 50, fit: BoxFit.cover),
),
title: Text('Gully Boy'),
subtitle: Text('Song • Gully Boy'),
trailing: Icon(Icons.more_vert),
onTap: () => Navigator.pushNamed(context, 'NowPlaying'),
),
SizedBox(height: 20),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Songs',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
Text(
'Show All',
style: TextStyle(color: Colors.blue),
),
],
),
),
Expanded(
child: ListView(
children: [
_buildSongListTile('Gully Gully Mein Gully Boy', 'Song • Gully Gully Mein Gully boy'),
_buildSongListTile('Mere Gully Mein', 'Song • Mere Gully Mein'),
_buildSongListTile('Ashli Hip Hip', 'Album, 2019 • Gully Boy'),
_buildSongListTile('Apna Time Aayega', 'Album, 2019 • Gully Boy'),
_buildSongListTile('Doori', 'Album, 2019 • Gully Boy'),
],
),
),
SizedBox(height: 20),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Albums',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
SizedBox(height: 10),
Container(
height: 150,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildAlbumItem('Gully Boy 2', 'Various Artists'),
_buildAlbumItem('Gully Boy Unlimi...', 'Various Artists'),
_buildAlbumItem('Hip Gu...', 'Various Artists'),
],
),
),
SizedBox(height: 20),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Artists',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
SizedBox(height: 10),
Container(
height: 120,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildArtistItem('Justin Bieber'),
_buildArtistItem('Michael Jackson'),
_buildArtistItem('Sam Smith'),
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
_buildNavBarItem(Icons.trending_up, 'Trending'),
_buildNavBarItem(Icons.search, 'Search', isSelected: true),
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
Widget _buildSongListTile(String title, String subtitle) {
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
subtitle: Text(subtitle),
trailing: Icon(Icons.more_vert),
onTap: () => Navigator.pushNamed(context, 'NowPlaying'),
);
}
Widget _buildAlbumItem(String title, String artist) {
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
Text(title, style: TextStyle(fontWeight: FontWeight.bold), overflow: TextOverflow.ellipsis),
Text(artist, style: TextStyle(color: Colors.grey), overflow: TextOverflow.ellipsis),
],
),
);
}
Widget _buildArtistItem(String name) {
return Container(
width: 100,
margin: EdgeInsets.only(left: 16),
child: Column(
children: [
ClipOval(
child: Image.asset('assets/images/template.png', width: 80, height: 80, fit: BoxFit.cover),
),
SizedBox(height: 5),
Text(name, style: TextStyle(fontWeight: FontWeight.bold), overflow: TextOverflow.ellipsis),
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