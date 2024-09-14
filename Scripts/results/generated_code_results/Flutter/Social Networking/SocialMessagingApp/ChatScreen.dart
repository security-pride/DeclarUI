import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
@override
_ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
final List<Map<String, dynamic>> messages = [
{'text': 'Hi! Your last shot was really good!', 'time': '9:30', 'sender': 'user'},
{'type': 'audio', 'duration': '1.35', 'time': '9:32', 'sender': 'contact'},
{'text': 'What tools do you use?', 'time': '9:34', 'sender': 'user'},
{'text': 'Figma, for prototype i use Principle', 'time': '9:35', 'sender': 'contact'},
{'text': 'Cool! Your designs inspire me a lot bro. Keep posting!', 'time': '9:36', 'sender': 'user'},
{'text': 'Thank u so much Antonio! Glad to hear that :)', 'time': '9:37', 'sender': 'contact'},
{'text': "You're welcome!", 'time': '9:39', 'sender': 'user'},
];

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Profile'),
child: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 20,
),
SizedBox(width: 8),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Antonio Banderas'),
Text('Online', style: TextStyle(fontSize: 12, color: Colors.green)),
],
),
],
),
),
actions: [
IconButton(icon: Icon(Icons.more_vert), onPressed: () {}),
],
),
body: Column(
children: [
Expanded(
child: ListView.builder(
itemCount: messages.length,
itemBuilder: (context, index) {
final message = messages[index];
return MessageBubble(
text: message['text'] ?? '',
time: message['time'] ?? '',
isUser: message['sender'] == 'user',
isAudio: message['type'] == 'audio',
audioDuration: message['duration'] ?? '',
);
},
),
),
Container(
padding: EdgeInsets.symmetric(horizontal: 8),
child: Row(
children: [
IconButton(icon: Icon(Icons.emoji_emotions), onPressed: () {}),
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: 'Type a message',
border: InputBorder.none,
),
),
),
IconButton(icon: Icon(Icons.attach_file), onPressed: () {}),
IconButton(icon: Icon(Icons.send), onPressed: () {}),
],
),
),
],
),
);
}
}

class MessageBubble extends StatelessWidget {
final String text;
final String time;
final bool isUser;
final bool isAudio;
final String audioDuration;

MessageBubble({
required this.text,
required this.time,
required this.isUser,
this.isAudio = false,
this.audioDuration = '',
});

@override
Widget build(BuildContext context) {
return Align(
alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
child: Container(
margin: EdgeInsets.symmetric(vertical: 4, horizontal: 8),
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: isUser ? Colors.blue : Colors.grey[300],
borderRadius: BorderRadius.circular(20),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
if (isAudio)
Row(
mainAxisSize: MainAxisSize.min,
children: [
Icon(Icons.play_arrow, color: isUser ? Colors.white : Colors.black),
SizedBox(width: 8),
Container(
width: 100,
height: 4,
color: isUser ? Colors.white : Colors.black,
),
SizedBox(width: 8),
Text(audioDuration, style: TextStyle(color: isUser ? Colors.white : Colors.black)),
],
)
else
Text(text, style: TextStyle(color: isUser ? Colors.white : Colors.black)),
SizedBox(height: 4),
Text(time, style: TextStyle(color: isUser ? Colors.white70 : Colors.black54, fontSize: 12)),
],
),
),
);
}
}