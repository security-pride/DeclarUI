import 'package:flutter/material.dart';
class PlayerScreen extends StatefulWidget {
@override
_PlayerScreenState createState() => _PlayerScreenState();
}
class _PlayerScreenState extends State<PlayerScreen> {
bool isPlaying = true;
bool isShuffle = false;
bool isRepeat = false;
bool isFavorite = false;
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
leading: IconButton(
icon: Icon(Icons.keyboard_arrow_down),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
),
body: Column(
children: [
Expanded(
child: Stack(
fit: StackFit.expand,
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
Positioned(
bottom: 20,
left: 20,
child: Text(
'I love being\nBi-Polar\nit's awesome',
style: TextStyle(color: Colors.green, fontSize: 24),
),
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.add),
onPressed: () {},
),
Column(
children: [
Text('All Mine', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
Text('Kanye West', style: TextStyle(color: Colors.orange)),
],
),
IconButton(
icon: Icon(isFavorite ? Icons.favorite : Icons.favorite_border),
color: isFavorite ? Colors.red : null,
onPressed: () {
setState(() {
isFavorite = !isFavorite;
});
},
),
],
),
),
Slider(
value: 0.5,
onChanged: (value) {},
activeColor: Colors.orange,
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('01:30'),
Text('03:00'),
],
),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
IconButton(
icon: Icon(isShuffle ? Icons.shuffle : Icons.shuffle_outlined),
onPressed: () {
setState(() {
isShuffle = !isShuffle;
});
},
),
IconButton(icon: Icon(Icons.skip_previous), onPressed: () {}),
FloatingActionButton(
child: Icon(isPlaying ? Icons.pause : Icons.play_arrow),
onPressed: () {
setState(() {
isPlaying = !isPlaying;
});
},
backgroundColor: Colors.orange,
),
IconButton(icon: Icon(Icons.skip_next), onPressed: () {}),
IconButton(
icon: Icon(isRepeat ? Icons.repeat_one : Icons.repeat),
onPressed: () {
setState(() {
isRepeat = !isRepeat;
});
},
),
],
),
SizedBox(height: 20),
Container(
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(12),
),
child: Row(
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
SizedBox(width: 12),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Share the sound!'),
Text('Let your friends know what you're listening! Share this song'),
],
),
),
ElevatedButton(
child: Text('Use the app'),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.pink,
),
),
],
),
),
],
),
);
}
}