import 'package:flutter/material.dart';
class LessonDetailScreen extends StatefulWidget {
const LessonDetailScreen({Key? key}) : super(key: key);
@override
_LessonDetailScreenState createState() => _LessonDetailScreenState();
}
class _LessonDetailScreenState extends State<LessonDetailScreen> {
bool isEnglish = true;
bool isSubscribed = true;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
actions: [
TextButton(
child: Text('EN / VN', style: TextStyle(color: Colors.white)),
onPressed: () {
setState(() {
isEnglish = !isEnglish;
});
},
),
IconButton(
icon: Icon(Icons.bookmark_border),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
AspectRatio(
aspectRatio: 16 / 9,
child: Stack(
alignment: Alignment.center,
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
IconButton(
icon: Icon(Icons.play_arrow, size: 50, color: Colors.white),
onPressed: () {},
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Text('6', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
Text(' / 12', style: TextStyle(color: Colors.grey)),
Spacer(),
Icon(Icons.signal_cellular_alt, color: Colors.orange),
],
),
SizedBox(height: 16),
Tooltip(
message: 'Tap to see word in dictionary',
child: RichText(
text: TextSpan(
style: DefaultTextStyle.of(context).style,
children: [
TextSpan(text: "NBD, let's "),
TextSpan(
text: 'kee',
style: TextStyle(backgroundColor: Colors.blue, color: Colors.white),
),
TextSpan(text: ' going.'),
],
),
),
),
SizedBox(height: 8),
Text('Không có gì to tát cả, tiếp tục nào.', style: TextStyle(fontStyle: FontStyle.italic)),
SizedBox(height: 8),
Text('NBD: (no big deal) không có gì to tát cả.', style: TextStyle(color: Colors.grey)),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(icon: Icon(Icons.bookmark_border), onPressed: () {}),
TextButton(child: Text('Drill'), onPressed: () {}),
Text('1x'),
IconButton(icon: Icon(Icons.refresh), onPressed: () {}),
],
),
SizedBox(height: 16),
Text('Chỉ xước nhẹ thôi ý mà.'),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildIconTextButton(Icons.thumb_up, '62', Colors.blue),
_buildIconTextButton(Icons.thumb_down, '3', Colors.grey),
_buildIconTextButton(Icons.bookmark, 'Bookmark', Colors.grey),
_buildIconTextButton(Icons.share, 'Share', Colors.grey),
TextButton(child: Text('More'), onPressed: () {}),
],
),
],
),
),
ListTile(
leading: CircleAvatar(backgroundImage: AssetImage('assets/images/template.png')),
title: Text('Ellen Jacobs'),
subtitle: Text('3.7k Subscriber'),
trailing: ElevatedButton(
child: Text(isSubscribed ? 'Subscribed' : 'Subscribe'),
onPressed: () {
setState(() {
isSubscribed = !isSubscribed;
});
},
style: ElevatedButton.styleFrom(
backgroundColor: isSubscribed ? Colors.grey : Colors.red,
),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Practice Speaking !', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Text("It's just a scratch."),
Text('Chỉ xước nhẹ thôi ý mà.', style: TextStyle(fontStyle: FontStyle.italic)),
SizedBox(height: 16),
ElevatedButton.icon(
icon: Icon(Icons.mic),
label: Text('Start Speaking'),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
minimumSize: Size(double.infinity, 50),
),
),
],
),
),
],
),
),
);
}
Widget _buildIconTextButton(IconData icon, String label, Color color) {
return Column(
children: [
Icon(icon, color: color),
SizedBox(height: 4),
Text(label, style: TextStyle(color: color)),
],
);
}
}