import 'package:flutter/material.dart';
class ProfileScreen extends StatefulWidget {
const ProfileScreen({Key? key}) : super(key: key);
@override
_ProfileScreenState createState() => _ProfileScreenState();
}
class _ProfileScreenState extends State<ProfileScreen> {
int _selectedIndex = 3;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('dxy_hqup58fr'),
actions: [
IconButton(
icon: Icon(Icons.mail_outline),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text('dxy_hqup58fr'),
subtitle: Text('个人主页 >'),
trailing: Icon(Icons.arrow_forward_ios),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
_buildStatItem('收藏', '0'),
_buildStatItem('关注', '0'),
_buildStatItem('医生卡', '0'),
_buildStatItem('优惠券', '0'),
],
),
),
Card(
margin: EdgeInsets.all(16),
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('我的订单', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildOrderItem(Icons.chat, '我的问诊'),
_buildOrderItem(Icons.description, '我的处方'),
_buildOrderItem(Icons.local_pharmacy, '药品订单'),
],
),
],
),
),
),
Card(
margin: EdgeInsets.symmetric(horizontal: 16),
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
SizedBox(width: 8),
Text('新人首次问诊 9.9 元起', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
],
),
SizedBox(height: 8),
Text('仅 1 次机会 三甲医生在线接诊'),
SizedBox(height: 8),
ElevatedButton(
onPressed: () {},
child: Text('去咨询'),
style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
),
],
),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('更多功能', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Wrap(
spacing: 16,
runSpacing: 16,
children: [
_buildFeatureItem(Icons.person, '患者信息'),
_buildFeatureItem(Icons.video_library, '医师讲堂'),
_buildFeatureItem(Icons.show_chart, '成长测评'),
_buildFeatureItem(Icons.settings, '设置'),
_buildFeatureItem(Icons.headset_mic, '在线客服'),
],
),
),
SizedBox(height: 32),
Center(
child: Column(
children: [
Image.asset('assets/images/template.png', width: 80, height: 40),
Text('一起发现健康生活', style: TextStyle(color: Colors.grey)),
],
),
),
SizedBox(height: 32),
],
),
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: '问医生'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: '查病查药'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
],
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
Widget _buildStatItem(String label, String value) {
return Column(
children: [
Text(value, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text(label, style: TextStyle(color: Colors.grey)),
],
);
}
Widget _buildOrderItem(IconData icon, String label) {
return Column(
children: [
Icon(icon, size: 30),
SizedBox(height: 8),
Text(label),
],
);
}
Widget _buildFeatureItem(IconData icon, String label) {
return Column(
children: [
Icon(icon, size: 30),
SizedBox(height: 8),
Text(label),
],
);
}
}