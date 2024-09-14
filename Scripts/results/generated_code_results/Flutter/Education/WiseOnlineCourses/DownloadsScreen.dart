import 'package:flutter/material.dart';
class DownloadsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Color(0xFF1E1E1E),
appBar: AppBar(
backgroundColor: Colors.transparent,
elevation: 0,
title: Text(
'Downloads',
style: TextStyle(color: Colors.white, fontSize: 24),
),
actions: [
Padding(
padding: const EdgeInsets.all(8.0),
child: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
),
],
),
body: ListView(
children: [
DownloadItem(
title: 'Gift yourself this UI Kit and enjoy!',
instructor: 'John Wiseberg',
duration: '08:12',
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
),
DownloadItem(
title: 'Make your Mess Your Message',
instructor: 'Mendy Santiago',
duration: '12:38',
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
),
DownloadItem(
title: 'Meet Your Dreams and Make It Real',
instructor: 'Maria Trofimova',
duration: '09:46',
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
),
],
),
bottomNavigationBar: BottomNavigationBar(
backgroundColor: Color(0xFF1E1E1E),
selectedItemColor: Colors.white,
unselectedItemColor: Colors.grey,
currentIndex: 2,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.home),
label: 'Home',
),
BottomNavigationBarItem(
icon: Icon(Icons.search),
label: 'Search',
),
BottomNavigationBarItem(
icon: Icon(Icons.file_download),
label: 'Downloads',
),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
}
class DownloadItem extends StatelessWidget {
final String title;
final String instructor;
final String duration;
final VoidCallback onTap;
const DownloadItem({
Key? key,
required this.title,
required this.instructor,
required this.duration,
required this.onTap,
}) : super(key: key);
@override
Widget build(BuildContext context) {
return GestureDetector(
onTap: onTap,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
child: Row(
children: [
Container(
width: 120,
height: 80,
decoration: BoxDecoration(
borderRadius: BorderRadius.circular(8),
image: DecorationImage(
image: AssetImage('assets/images/template.png'),
fit: BoxFit.cover,
),
),
child: Align(
alignment: Alignment.bottomRight,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 6, vertical: 2),
decoration: BoxDecoration(
color: Colors.black.withOpacity(0.7),
borderRadius: BorderRadius.circular(4),
),
child: Text(
duration,
style: TextStyle(color: Colors.white, fontSize: 12),
),
),
),
),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
title,
style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold),
),
SizedBox(height: 4),
Text(
instructor,
style: TextStyle(color: Colors.grey, fontSize: 14),
),
],
),
),
],
),
),
);
}
}