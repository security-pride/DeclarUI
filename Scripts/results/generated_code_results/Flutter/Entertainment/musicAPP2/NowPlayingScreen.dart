import 'package:flutter/material.dart';
class NowPlayingScreen extends StatefulWidget {
@override
_NowPlayingScreenState createState() => _NowPlayingScreenState();
}
class _NowPlayingScreenState extends State<NowPlayingScreen> {
bool isPlaying = true;
double currentPosition = 0.0;
double maxDuration = 306.0; // 5:06 in seconds
@override
Widget build(BuildContext context) {
return Scaffold(
body: Stack(
children: [
Container(
decoration: BoxDecoration(
gradient: LinearGradient(
begin: Alignment.topCenter,
end: Alignment.bottomCenter,
colors: [Colors.blue, Colors.white],
),
),
),
SafeArea(
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
child: Text(
'Now Playing',
style: TextStyle(
color: Colors.white,
fontSize: 32,
fontWeight: FontWeight.bold,
),
),
),
Expanded(
child: PageView(
children: [
_buildAlbumArt(),
_buildAlbumArt(),
_buildAlbumArt(),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Apna Time Aayega',
style: TextStyle(
fontSize: 24,
fontWeight: FontWeight.bold,
),
),
Text(
'Arijit Sing',
style: TextStyle(
fontSize: 18,
color: Colors.grey[600],
),
),
],
),
),
Slider(
value: currentPosition,
max: maxDuration,
onChanged: (value) {
setState(() {
currentPosition = value;
});
},
activeColor: Colors.pink,
inactiveColor: Colors.grey[300],
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'${(currentPosition / 60).floor()}:${(currentPosition % 60).floor().toString().padLeft(2, '0')}',
style: TextStyle(color: Colors.grey[600]),
),
Text(
'5:06',
style: TextStyle(color: Colors.grey[600]),
),
],
),
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
IconButton(
icon: Icon(Icons.shuffle),
onPressed: () {},
color: Colors.grey[600],
),
IconButton(
icon: Icon(Icons.skip_previous),
onPressed: () {},
iconSize: 40,
),
FloatingActionButton(
onPressed: () {
setState(() {
isPlaying = !isPlaying;
});
},
child: Icon(
isPlaying ? Icons.pause : Icons.play_arrow,
size: 40,
),
backgroundColor: Colors.blue,
),
IconButton(
icon: Icon(Icons.skip_next),
onPressed: () {},
iconSize: 40,
),
IconButton(
icon: Icon(Icons.repeat),
onPressed: () {},
color: Colors.grey[600],
),
],
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
color: Colors.pink,
),
IconButton(
icon: Icon(Icons.shuffle),
onPressed: () {},
color: Colors.grey[600],
),
IconButton(
icon: Icon(Icons.repeat),
onPressed: () {},
color: Colors.grey[600],
),
IconButton(
icon: Icon(Icons.queue_music),
onPressed: () {
Navigator.pushNamed(context, 'Playlist');
},
color: Colors.grey[600],
),
],
),
SizedBox(height: 20),
],
),
),
],
),
);
}
Widget _buildAlbumArt() {
return Container(
margin: EdgeInsets.symmetric(horizontal: 40, vertical: 20),
decoration: BoxDecoration(
borderRadius: BorderRadius.circular(20),
boxShadow: [
BoxShadow(
color: Colors.black.withOpacity(0.3),
spreadRadius: 2,
blurRadius: 20,
offset: Offset(0, 10),
),
],
),
child: ClipRRect(
borderRadius: BorderRadius.circular(20),
child: Image.asset(
'assets/images/template.png',
fit: BoxFit.cover,
),
),
);
}
}