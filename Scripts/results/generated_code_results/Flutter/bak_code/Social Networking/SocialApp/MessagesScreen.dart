import 'package:flutter/material.dart';
class MessagesScreen extends StatefulWidget {
@override
_MessagesScreenState createState() => _MessagesScreenState();
}
class _MessagesScreenState extends State<MessagesScreen> {
final TextEditingController _messageController = TextEditingController();
final List<Map<String, dynamic>> _messages = [
{'text': 'How are you?', 'sender': 'other', 'time': '8:43 AM'},
{'text': 'Hi Hasley, I am good. How are you?', 'sender': 'user', 'time': '8:43 AM'},
{'type': 'audio', 'sender': 'other', 'time': '8:43 AM'},
{'type': 'image', 'sender': 'other', 'time': '8:43 AM'},
{'text': "Omg! you're so beautiful!!", 'sender': 'user', 'time': '8:43 AM'},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(width: 10),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Hasley Junior'),
Text('Online', style: TextStyle(fontSize: 12, color: Colors.green)),
],
),
],
),
actions: [
IconButton(icon: Icon(Icons.videocam), onPressed: () {}),
IconButton(icon: Icon(Icons.phone), onPressed: () {}),
],
),
body: Column(
children: [
Expanded(
child: ListView.builder(
itemCount: _messages.length,
itemBuilder: (context, index) {
final message = _messages[index];
return _buildMessageBubble(message);
},
),
),
_buildInputField(),
],
),
);
}
Widget _buildMessageBubble(Map<String, dynamic> message) {
final bool isUser = message['sender'] == 'user';
final align = isUser ? Alignment.centerRight : Alignment.centerLeft;
final color = isUser ? Colors.blue[100] : Colors.grey[300];
reasonml
复制
Widget content;
if (message['type'] == 'audio') {
  content = Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(Icons.play_arrow),
      Container(
        width: 150,
        height: 30,
        decoration: BoxDecoration(
          color: Colors.grey[200],
          borderRadius: BorderRadius.circular(15),
        ),
      ),
    ],
  );
} else if (message['type'] == 'image') {
  content = Stack(
    alignment: Alignment.center,
    children: [
      Image.asset('assets/images/template.png', width: 200, height: 200, fit: BoxFit.cover),
      Icon(Icons.play_circle_filled, size: 50, color: Colors.white),
    ],
  );
} else {
  content = Text(message['text']);
}

return Container(
  alignment: align,
  margin: EdgeInsets.symmetric(vertical: 5, horizontal: 10),
  child: Column(
    crossAxisAlignment: isUser ? CrossAxisAlignment.end : CrossAxisAlignment.start,
    children: [
      Container(
        padding: EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(15),
        ),
        child: content,
      ),
      SizedBox(height: 2),
      Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(message['time'], style: TextStyle(fontSize: 10, color: Colors.grey)),
          if (isUser) Icon(Icons.done_all, size: 12, color: Colors.blue),
        ],
      ),
    ],
  ),
);
}
Widget _buildInputField() {
return Container(
padding: EdgeInsets.symmetric(horizontal: 8.0),
height: 70,
color: Colors.white,
child: Row(
children: [
IconButton(
icon: Icon(Icons.add_circle_outline),
onPressed: () {},
),
Expanded(
child: TextField(
controller: _messageController,
decoration: InputDecoration(
hintText: 'Type here...',
border: InputBorder.none,
),
),
),
IconButton(
icon: Icon(Icons.send),
onPressed: _sendMessage,
),
],
),
);
}
void _sendMessage() {
if (_messageController.text.isNotEmpty) {
setState(() {
_messages.add({
'text': _messageController.text,
'sender': 'user',
'time': '${DateTime.now().hour}:${DateTime.now().minute}',
});
_messageController.clear();
});
}
}
}