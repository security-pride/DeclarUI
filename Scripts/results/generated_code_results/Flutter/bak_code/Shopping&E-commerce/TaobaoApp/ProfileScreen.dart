import 'package:flutter/material.dart';
class ProfileScreen extends StatefulWidget {
const ProfileScreen({Key? key}) : super(key: key);
@override
_ProfileScreenState createState() => _ProfileScreenState();
}
class _ProfileScreenState extends State<ProfileScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
_buildHeader(),
_buildMemberInfo(),
_buildOrderStatus(),
_buildQuickAccess(),
],
),
),
bottomNavigationBar: _buildBottomNavigationBar(),
);
}
Widget _buildHeader() {
return Container(
padding: EdgeInsets.all(16),
color: Colors.black,
child: SafeArea(
child: Row(
children: [
Stack(
children: [
CircleAvatar(
radius: 30,
backgroundImage: AssetImage('assets/images/template.png'),
),
Positioned(
bottom: 0,
right: 0,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
decoration: BoxDecoration(
color: Colors.orange,
borderRadius: BorderRadius.circular(10),
),
child: Text('淘龄5年', style: TextStyle(fontSize: 10, color: Colors.white)),
),
),
],
),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('不吃不吃不吃Orz', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white)),
Row(
children: [
Icon(Icons.location_on, size: 16, color: Colors.grey),
Text('收货地址', style: TextStyle(color: Colors.grey)),
SizedBox(width: 8),
Icon(Icons.store, size: 16, color: Colors.grey),
Text('关注店铺', style: TextStyle(color: Colors.grey)),
],
),
],
),
),
Column(
children: [
IconButton(
icon: Icon(Icons.headset_mic, color: Colors.white),
onPressed: () {},
),
Text('官方客服', style: TextStyle(fontSize: 12, color: Colors.white)),
],
),
IconButton(
icon: Icon(Icons.settings, color: Colors.white),
onPressed: () {},
),
],
),
),
);
}
Widget _buildMemberInfo() {
return Container(
padding: EdgeInsets.all(16),
color: Colors.black,
child: Column(
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('为你节省 ¥781', style: TextStyle(color: Colors.orange, fontWeight: FontWeight.bold)),
Text('更多 >', style: TextStyle(color: Colors.grey)),
],
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
_buildInfoItem('省钱卡', '立即查看'),
_buildInfoItem('天猫积分', '990'),
_buildInfoItem('红包', '¥0.00'),
_buildInfoItem('优惠券', '0张'),
],
),
SizedBox(height: 16),
ElevatedButton(
child: Text('点击查看更多优惠'),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.orange[800],
minimumSize: Size(double.infinity, 40),
),
),
],
),
);
}
Widget _buildInfoItem(String title, String value) {
return Column(
children: [
Text(title, style: TextStyle(color: Colors.grey)),
SizedBox(height: 4),
Text(value, style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
],
);
}
Widget _buildOrderStatus() {
return Container(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('我的订单', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('全部 >', style: TextStyle(color: Colors.grey)),
],
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildOrderStatusItem(Icons.payment, '待付款'),
_buildOrderStatusItem(Icons.local_shipping, '待发货'),
_buildOrderStatusItem(Icons.inventory, '待收货'),
_buildOrderStatusItem(Icons.rate_review, '待评价'),
_buildOrderStatusItem(Icons.assignment_return, '退款/售后'),
],
),
],
),
);
}
Widget _buildOrderStatusItem(IconData icon, String label) {
return Column(
children: [
Icon(icon, size: 30),
SizedBox(height: 4),
Text(label, style: TextStyle(fontSize: 12)),
],
);
}
Widget _buildQuickAccess() {
return Container(
padding: EdgeInsets.all(16),
child: Column(
children: [
_buildQuickAccessItem('快递', '查看快递信息', [
_buildActionButton('查取件', Icons.inbox),
_buildActionButton('查寄件', Icons.outbox),
]),
_buildQuickAccessItem('收藏', '查看最近收藏', [
Column(
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
Text('暂无推荐', style: TextStyle(fontSize: 12)),
Text('去逛逛更多宝贝', style: TextStyle(fontSize: 12, color: Colors.orange)),
],
),
]),
_buildQuickAccessItem('足迹', '看过的商品和视频', [
_buildActionButton('我的足迹', Icons.history),
_buildActionButton('红包签到', Icons.redeem),
_buildActionButton('摇现金', Icons.monetization_on),
]),
],
),
);
}
Widget _buildQuickAccessItem(String title, String subtitle, List<Widget> actions) {
return Container(
margin: EdgeInsets.only(bottom: 16),
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.grey[900],
borderRadius: BorderRadius.circular(8),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(title, style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
Icon(Icons.arrow_forward_ios, size: 16),
],
),
SizedBox(height: 4),
Text(subtitle, style: TextStyle(fontSize: 12, color: Colors.grey)),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: actions,
),
],
),
);
}
Widget _buildActionButton(String label, IconData icon) {
return Column(
children: [
Icon(icon, size: 30, color: Colors.blue),
SizedBox(height: 4),
Text(label, style: TextStyle(fontSize: 12)),
],
);
}
Widget _buildBottomNavigationBar() {
return BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 4,
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'Home');
break;
case 2:
Navigator.pushNamed(context, 'Message');
break;
case 3:
Navigator.pushNamed(context, 'Cart');
break;
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: '逛逛'),
BottomNavigationBarItem(icon: Icon(Icons.message), label: '消息'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: '购物车'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的淘宝'),
],
);
}
}