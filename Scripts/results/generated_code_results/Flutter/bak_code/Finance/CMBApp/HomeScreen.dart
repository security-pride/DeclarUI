import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
backgroundColor: Colors.red,
title: Container(
padding: EdgeInsets.symmetric(horizontal: 10),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(20),
),
child: Row(
children: [
Icon(Icons.search, color: Colors.grey),
SizedBox(width: 10),
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: '信用卡全家福',
border: InputBorder.none,
),
),
),
],
),
),
actions: [
IconButton(
icon: Icon(Icons.headset_mic),
onPressed: () => Navigator.pushNamed(context, 'CustomService'),
),
Stack(
children: [
IconButton(icon: Icon(Icons.notifications), onPressed: () {}),
Positioned(
right: 0,
top: 0,
child: Container(
padding: EdgeInsets.all(2),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(10),
),
constraints: BoxConstraints(
minWidth: 16,
minHeight: 16,
),
child: Text(
'99',
style: TextStyle(
color: Colors.white,
fontSize: 10,
),
textAlign: TextAlign.center,
),
),
),
],
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
_buildQuickActionButton('朝朝宝', Icons.monetization_on),
_buildQuickActionButton('借钱', Icons.attach_money),
_buildQuickActionButton('转账', Icons.swap_horiz),
_buildQuickActionButton('账户总览', Icons.account_balance),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Wrap(
spacing: 16,
runSpacing: 16,
children: [
_buildServiceButton('信用卡', Icons.credit_card, () {
Navigator.pushNamed(context, 'CreditCard');
}),
_buildServiceButton('收支明细', Icons.receipt),
_buildServiceButton('他行卡转入', Icons.compare_arrows),
_buildServiceButton('城市服务', Icons.location_city),
_buildServiceButton('热门活动', Icons.local_fire_department),
_buildServiceButton('养老金融', Icons.elderly),
_buildServiceButton('M+会员', Icons.star),
_buildServiceButton('外汇购汇', Icons.currency_exchange),
_buildServiceButton('银行卡', Icons.credit_card),
_buildServiceButton('全部', Icons.more_horiz),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Icon(Icons.mail_outline),
SizedBox(width: 8),
Text('通知'),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text('小招有财: 您有一份2元现金红包待领取'),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Container(
decoration: BoxDecoration(
color: Colors.blue[50],
borderRadius: BorderRadius.circular(8),
),
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('活钱理财'),
Icon(Icons.close),
],
),
),
Image.asset('assets/images/template.png'),
ElevatedButton(
onPressed: () {},
child: Text('点击购买'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.orange,
),
),
],
),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('财富精选', style: TextStyle(fontWeight: FontWeight.bold)),
Text('更多 >', style: TextStyle(color: Colors.grey)),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
children: [
Expanded(child: _buildFinancialProductCard('T+1到账', '日添利1号A', '2.92%', '7日年化')),
SizedBox(width: 16),
Expanded(child: _buildFinancialProductCard('每季可赎', '季季宝', '3.25%', '成立以来年化')),
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.history), label: '一周回顾'),
BottomNavigationBarItem(icon: Icon(Icons.account_balance_wallet), label: '财富'),
BottomNavigationBarItem(icon: Icon(Icons.view_list), label: '生活'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
],
),
);
}
Widget _buildQuickActionButton(String label, IconData icon) {
return Column(
children: [
Container(
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(8),
),
child: Icon(icon, color: Colors.white),
),
SizedBox(height: 4),
Text(label),
],
);
}
Widget _buildServiceButton(String label, IconData icon, [VoidCallback? onTap]) {
return InkWell(
onTap: onTap,
child: Column(
children: [
Icon(icon),
SizedBox(height: 4),
Text(label),
],
),
);
}
Widget _buildFinancialProductCard(String title, String subtitle, String rate, String period) {
return Card(
child: Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(subtitle),
SizedBox(height: 8),
Text(rate, style: TextStyle(color: Colors.red, fontSize: 20)),
Text(period),
],
),
),
);
}
}