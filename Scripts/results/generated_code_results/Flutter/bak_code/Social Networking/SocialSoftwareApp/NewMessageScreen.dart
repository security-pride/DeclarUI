import 'package:flutter/material.dart';
class NewMessagePage extends StatefulWidget {
@override
_NewMessagePageState createState() => _NewMessagePageState();
}
class _NewMessagePageState extends State<NewMessagePage> {
final TextEditingController _searchController = TextEditingController();
final List<String> contacts = ['Martha Craig', 'Kieron Dotson', 'Zack John', 'Jamie Franco', 'Tabitha Potter'];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: TextButton(
child: Text('Cancel'),
onPressed: () => Navigator.pop(context),
),
title: Text('New message'),
centerTitle: true,
),
body: Column(
children: [
Padding(
padding: EdgeInsets.all(8.0),
child: TextField(
controller: _searchController,
decoration: InputDecoration(
hintText: 'To:',
border: OutlineInputBorder(),
),
),
),
ListTile(
leading: Icon(Icons.group_add),
title: Text('Create a New Group'),
trailing: Icon(Icons.chevron_right),
onTap: () {
// Navigate to group creation page
},
),
Divider(),
Expanded(
child: ListView.builder(
itemCount: contacts.length,
itemBuilder: (context, index) {
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(contacts[index]),
onTap: () {
// Select contact logic
},
);
},
),
),
],
),
bottomSheet: Container(
height: 200,
child: Column(
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: 'QWERTYUIOP'.split('').map((letter) => _buildKeyboardKey(letter)).toList(),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: 'ASDFGHJKL'.split('').map((letter) => _buildKeyboardKey(letter)).toList(),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildKeyboardKey('⇧'),
...'ZXCVBNM'.split('').map((letter) => _buildKeyboardKey(letter)).toList(),
_buildKeyboardKey('⌫'),
],
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildKeyboardKey('123'),
_buildKeyboardKey('space', flex: 4),
_buildKeyboardKey('Go'),
],
),
],
),
),
);
}
Widget _buildKeyboardKey(String label, {int flex = 1}) {
return Expanded(
flex: flex,
child: Padding(
padding: EdgeInsets.all(2.0),
child: ElevatedButton(
child: Text(label),
onPressed: () {
// Key press logic
if (label == '⌫') {
if (_searchController.text.isNotEmpty) {
_searchController.text = _searchController.text.substring(0, _searchController.text.length - 1);
}
} else if (label == 'space') {
_searchController.text += ' ';
} else if (label != '123' && label != '⇧' && label != 'Go') {
_searchController.text += label;
}
setState(() {});
},
style: ElevatedButton.styleFrom(
backgroundColor: label == 'Go' ? Colors.blue : Colors.grey[200],
foregroundColor: label == 'Go' ? Colors.white : Colors.black,
),
),
),
);
}
}