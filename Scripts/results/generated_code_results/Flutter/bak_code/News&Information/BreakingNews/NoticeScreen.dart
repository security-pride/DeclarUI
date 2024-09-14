import 'package:flutter/material.dart';
class NoticeScreen extends StatefulWidget {
const NoticeScreen({Key? key}) : super(key: key);
@override
_NoticeScreenState createState() => _NoticeScreenState();
}
class _NoticeScreenState extends State<NoticeScreen> {
bool breakingNewsOn = true;
bool hotNewsOn = true;
bool localNewsOn = true;
String frequency = '知情';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('新闻提醒'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () {
Navigator.pop(context);
},
),
),
body: SingleChildScrollView(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png'),
SizedBox(height: 20),
Text(
'立即解锁新闻提醒！',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 10),
Text(
'一键启用通知，永远不会错过突发新闻。从本地警报到重大全球事件，我们为您提供全方位服务。',
style: TextStyle(fontSize: 16),
),
SizedBox(height: 20),
_buildSwitchTile('突发新闻', breakingNewsOn, (value) {
setState(() => breakingNewsOn = value);
}),
_buildSwitchTile('热门新闻', hotNewsOn, (value) {
setState(() => hotNewsOn = value);
}),
_buildSwitchTile('本地新闻', localNewsOn, (value) {
setState(() => localNewsOn = value);
}),
SizedBox(height: 20),
Text('频率', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 10),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildFrequencyButton('策划', Icons.access_time),
_buildFrequencyButton('知情', Icons.notifications_active),
_buildFrequencyButton('即时', Icons.flash_on),
],
),
SizedBox(height: 40),
ElevatedButton(
child: Text('我确定我想要'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.red,
minimumSize: Size(double.infinity, 50),
),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
SizedBox(height: 10),
Center(
child: TextButton(
child: Text('暂时不需要'),
onPressed: () {
Navigator.pop(context);
},
),
),
],
),
),
),
);
}
Widget _buildSwitchTile(String title, bool value, Function(bool) onChanged) {
return ListTile(
title: Text(title),
trailing: Switch(
value: value,
onChanged: onChanged,
activeColor: Colors.red,
),
);
}
Widget _buildFrequencyButton(String label, IconData icon) {
return ElevatedButton.icon(
icon: Icon(icon, color: frequency == label ? Colors.white : Colors.red),
label: Text(label),
style: ElevatedButton.styleFrom(
backgroundColor: frequency == label ? Colors.red : Colors.white,
foregroundColor: frequency == label ? Colors.white : Colors.red,
),
onPressed: () {
setState(() => frequency = label);
},
);
}
}