import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
body: Stack(
children: [
Image.asset(
'assets/images/template.png',
fit: BoxFit.cover,
height: double.infinity,
width: double.infinity,
),
SafeArea(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.arrow_back, color: Colors.white),
onPressed: () => Navigator.pop(context),
),
Row(
children: [
Icon(Icons.wifi, color: Colors.white),
SizedBox(width: 8),
Icon(Icons.signal_cellular_alt, color: Colors.white),
SizedBox(width: 8),
Icon(Icons.battery_full, color: Colors.white),
],
),
],
),
),
Spacer(),
Container(
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
gradient: LinearGradient(
begin: Alignment.topCenter,
end: Alignment.bottomCenter,
colors: [Colors.transparent, Colors.black.withOpacity(0.8)],
),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.black.withOpacity(0.6),
borderRadius: BorderRadius.circular(16),
),
child: Row(
mainAxisSize: MainAxisSize.min,
children: [
Icon(Icons.bolt, color: Colors.yellow, size: 16),
SizedBox(width: 4),
Text(
'Potential Match!',
style: TextStyle(color: Colors.white, fontSize: 12),
),
],
),
),
SizedBox(height: 8),
Row(
children: [
Text(
'Klee Gracia, 24',
style: TextStyle(
color: Colors.white,
fontSize: 24,
fontWeight: FontWeight.bold,
),
),
SizedBox(width: 8),
Icon(Icons.verified, color: Colors.blue, size: 20),
],
),
SizedBox(height: 8),
Wrap(
spacing: 8,
children: ['Running', 'Outdoor', 'Anime'].map((hobby) {
return Container(
padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
decoration: BoxDecoration(
color: Colors.white.withOpacity(0.2),
borderRadius: BorderRadius.circular(16),
),
child: Text(
hobby,
style: TextStyle(color: Colors.white),
),
);
}).toList(),
),
SizedBox(height: 8),
Text(
"Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.",
style: TextStyle(color: Colors.white70),
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
IconButton(
icon: Icon(Icons.close, color: Colors.white),
onPressed: () {
Navigator.pop(context);
},
),
TextButton.icon(
icon: Icon(Icons.message),
label: Text('Start Conversation'),
style: TextButton.styleFrom(
backgroundColor: Colors.white,
foregroundColor: Colors.black,
shape: RoundedRectangleBorder(
borderRadius: BorderRadius.circular(20),
),
),
onPressed: () {
Navigator.pushNamed(context, 'Messages');
},
),
IconButton(
icon: Icon(Icons.favorite, color: Colors.white),
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
],
),
);
}
}