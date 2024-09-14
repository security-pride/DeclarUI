import 'package:flutter/material.dart';
class IntroPage extends StatefulWidget {
@override
_IntroPageState createState() => _IntroPageState();
}
class _IntroPageState extends State<IntroPage> {
final TextEditingController _messageController = TextEditingController();
final List<Message> _messages = [
Message(type: MessageType.system, content: "You're friends on Facebook"),
Message(type: MessageType.system, content: "Say hi to your new Facebook friend, Martha."),
Message(type: MessageType.received, content: "👋", time: "21:32"),
Message(type: MessageType.sent, content: "Hello, Jacob!", time: "16:44"),
Message(type: MessageType.received, content: "How are you doing?", time: "16:44"),
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
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text("Martha Craig"),
Text("Messenger", style: TextStyle(fontSize: 12, fontWeight: FontWeight.normal)),
],
),
),
actions: [
IconButton(icon: Icon(Icons.phone), onPressed: () {}),
IconButton(icon: Icon(Icons.video_call), onPressed: () {}),
],
),
body: Column(
children: [
Expanded(
child: ListView(
padding: EdgeInsets.all(16),
children: [
CircleAvatar(
radius: 50,
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(height: 8),
Text(
"Martha Craig",
textAlign: TextAlign.center,
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
..._messages.map((message) => _buildMessageWidget(message)).toList(),
],
),
),
_buildInputBar(),
],
),
);
}
Widget _buildMessageWidget(Message message) {
switch (message.type) {
case MessageType.system:
return Center(
child: Padding(
padding: const EdgeInsets.symmetric(vertical: 8.0),
child: Text(
message.content,
style: TextStyle(color: Colors.grey, fontSize: 12),
),
),
);
case MessageType.sent:
return Align(
alignment: Alignment.centerRight,
child: Container(
margin: EdgeInsets.only(left: 40, top: 8, bottom: 8),
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: Colors.blue,
borderRadius: BorderRadius.circular(20),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(message.content, style: TextStyle(color: Colors.white)),
SizedBox(height: 4),
Text(message.time!, style: TextStyle(color: Colors.white70, fontSize: 10)),
],
),
),
);
case MessageType.received:
return Align(
alignment: Alignment.centerLeft,
child: Row(
crossAxisAlignment: CrossAxisAlignment.end,
children: [
CircleAvatar(
radius: 16,
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(width: 8),
Container(
margin: EdgeInsets.only(right: 40, top: 8, bottom: 8),
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(20),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(message.content),
SizedBox(height: 4),
Text(message.time!, style: TextStyle(color: Colors.grey, fontSize: 10)),
],
),
),
],
),
);
}
}
Widget _buildInputBar() {
return Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
child: Row(
children: [
IconButton(icon: Icon(Icons.add), onPressed: () {}),
IconButton(icon: Icon(Icons.camera_alt), onPressed: () {}),
IconButton(icon: Icon(Icons.image), onPressed: () {}),
IconButton(icon: Icon(Icons.mic), onPressed: () {}),
Expanded(
child: TextField(
controller: _messageController,
decoration: InputDecoration(
hintText: "Aa",
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
borderSide: BorderSide.none,
),
filled: true,
fillColor: Colors.grey[200],
),
),
),
IconButton(icon: Icon(Icons.emoji_emotions), onPressed: () {}),
IconButton(
icon: Icon(Icons.thumb_up),
onPressed: () {
setState(() {
_messages.add(Message(
type: MessageType.sent,
content: "👍",
time: "${DateTime.now().hour}:${DateTime.now().minute}",
));
});
},
),
],
),
);
}
}
enum MessageType { system, sent, received }
class Message {
final MessageType type;
final String content;
final String? time;
Message({required this.type, required this.content, this.time});
}