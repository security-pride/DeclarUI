import 'package:flutter/material.dart';
class ShareScreen extends StatelessWidget {
const ShareScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Colors.black.withOpacity(0.5),
body: Column(
mainAxisAlignment: MainAxisAlignment.end,
children: [
Container(
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
),
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Share to',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildShareOption(Icons.message, 'WhatsApp', Colors.green),
_buildShareOption(Icons.add_to_home_screen, 'WhatsApp status', Colors.green),
_buildShareOption(Icons.message, 'Message', Colors.red),
_buildShareOption(Icons.sms, 'SMS', Colors.green),
_buildShareOption(Icons.messenger_outline, 'Messenger', Colors.blue),
_buildShareOption(Icons.camera_alt, 'Instagram', Colors.purple),
],
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildActionOption(Icons.report, 'Report'),
_buildActionOption(Icons.not_interested, 'Not\ninterested'),
_buildActionOption(Icons.download, 'Save video'),
_buildActionOption(Icons.duo, 'Duet'),
_buildActionOption(Icons.emoji_emotions, 'React'),
_buildActionOption(Icons.bookmark_border, 'Add to\nFavorites'),
],
),
SizedBox(height: 20),
TextButton(
onPressed: () {
Navigator.pop(context);
},
child: Text(
'Cancel',
style: TextStyle(color: Colors.black, fontSize: 16),
),
),
SizedBox(height: 20),
],
),
),
],
),
);
}
Widget _buildShareOption(IconData icon, String label, Color color) {
return Column(
children: [
IconButton(
icon: Icon(icon, color: color),
onPressed: () {},
),
Text(label, style: TextStyle(fontSize: 12)),
],
);
}
Widget _buildActionOption(IconData icon, String label) {
return Column(
children: [
IconButton(
icon: Icon(icon, color: Colors.black),
onPressed: () {},
),
Text(
label,
style: TextStyle(fontSize: 12),
textAlign: TextAlign.center,
),
],
);
}
}