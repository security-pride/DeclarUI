import 'package:flutter/material.dart';
class ConversationScreen extends StatefulWidget {
const ConversationScreen({Key? key}) : super(key: key);
@override
_ConversationScreenState createState() => _ConversationScreenState();
}
class _ConversationScreenState extends State<ConversationScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('When taking a taxi'),
),
body: Column(
children: [
Expanded(
child: ListView(
padding: EdgeInsets.all(16),
children: [
_buildConversationItem(
'Ellen',
'Hey there',
'Xin chào',
true,
),
_buildConversationItem(
'Taxi Driver',
'Hey,where are you going today?',
'Chào cô, hôm nay cô sẽ đi đâu',
false,
),
_buildConversationItem(
'Ellen',
'25 Gerhold Valley, please.',
'Cho tôi tới 25 Gerhold Valley.',
true,
),
_buildConversationItem(
'Taxi Driver',
'No problem.',
'Không vấn đề.',
false,
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
ElevatedButton.icon(
icon: Icon(Icons.volume_up),
label: Text('Listen'),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.green,
),
),
ElevatedButton.icon(
icon: Icon(Icons.mic),
label: Text('Speaking'),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
),
),
],
),
),
],
),
);
}
Widget _buildConversationItem(String speaker, String text, String translation, bool isUser) {
return Padding(
padding: const EdgeInsets.symmetric(vertical: 8.0),
child: Row(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
if (!isUser) ...[
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 20,
),
SizedBox(width: 8),
],
Expanded(
child: Column(
crossAxisAlignment: isUser ? CrossAxisAlignment.end : CrossAxisAlignment.start,
children: [
Text(
speaker,
style: TextStyle(fontWeight: FontWeight.bold),
),
SizedBox(height: 4),
Container(
padding: EdgeInsets.all(8),
decoration: BoxDecoration(
color: isUser ? Colors.blue[100] : Colors.grey[200],
borderRadius: BorderRadius.circular(12),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(text),
SizedBox(height: 4),
Text(
translation,
style: TextStyle(fontStyle: FontStyle.italic, color: Colors.grey[600]),
),
],
),
),
SizedBox(height: 4),
ElevatedButton.icon(
icon: Icon(Icons.repeat, size: 18),
label: Text('REPEAT'),
onPressed: () {},
style: ElevatedButton.styleFrom(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
backgroundColor: Colors.grey[300],
foregroundColor: Colors.black,
),
),
],
),
),
if (isUser) ...[
SizedBox(width: 8),
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 20,
),
],
],
),
);
}
}