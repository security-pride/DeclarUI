import 'package:flutter/material.dart';
class CustomServiceScreen extends StatefulWidget {
const CustomServiceScreen({Key? key}) : super(key: key);
@override
_CustomServiceScreenState createState() => _CustomServiceScreenState();
}
class _CustomServiceScreenState extends State<CustomServiceScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 4, vsync: this);
}
@override
void dispose() {
_tabController.dispose();
super.dispose();
}
Widget _buildQuickActionButton(IconData icon, String label) {
return Column(
children: [
Container(
padding: EdgeInsets.all(10),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(10),
),
child: Icon(icon, color: Colors.blue),
),
SizedBox(height: 5),
Text(label, style: TextStyle(fontSize: 12)),
],
);
}
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('小招-客服门户'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Home'),
),
actions: [
Stack(
children: [
IconButton(
icon: Icon(Icons.notifications),
onPressed: () {},
),
Positioned(
right: 5,
top: 5,
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
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 30,
),
SizedBox(width: 16),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('您好，我是小招', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('需要帮助点此提问啦~ >', style: TextStyle(color: Colors.grey)),
],
),
],
),
),
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 5,
children: [
_buildQuickActionButton(Icons.credit_card, '卡号查询'),
_buildQuickActionButton(Icons.attach_money, '支出限额查询'),
_buildQuickActionButton(Icons.account_balance_wallet, '查询余额'),
_buildQuickActionButton(Icons.location_on, '查找网点'),
_buildQuickActionButton(Icons.swap_horiz, '转账限额'),
_buildQuickActionButton(Icons.account_balance, '开户行查询'),
_buildQuickActionButton(Icons.person, '证件更新'),
_buildQuickActionButton(Icons.thumb_up, '我要表扬'),
_buildQuickActionButton(Icons.chat, '咨询与投诉'),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('我关心的', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
TabBar(
controller: _tabController,
isScrollable: true,
tabs: [
Tab(text: '贷款'),
Tab(text: '账户管理'),
Tab(text: '理财'),
Tab(text: '信用卡'),
],
),
Container(
height: 200,
child: TabBarView(
controller: _tabController,
children: [
_buildTabContent(['闪电贷介绍', '助学贷款怎么续贷', '装修贷款介绍', '手机银行如何申请闪电贷', '车贷查询']),
_buildTabContent(['账户管理选项1', '账户管理选项2', '账户管理选项3']),
_buildTabContent(['理财选项1', '理财选项2', '理财选项3']),
_buildTabContent(['信用卡选项1', '信用卡选项2', '信用卡选项3']),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('小招百科', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
Column(
children: [
Text('视频', style: TextStyle(fontSize: 16)),
Text('更多 >', style: TextStyle(color: Colors.grey)),
],
),
Column(
children: [
Text('文章', style: TextStyle(fontSize: 16)),
Text('更多 >', style: TextStyle(color: Colors.grey)),
],
),
],
),
],
),
),
);
}
Widget _buildTabContent(List<String> items) {
return ListView.builder(
itemCount: items.length,
itemBuilder: (context, index) {
return ListTile(
title: Text(items[index]),
trailing: index < 2 ? Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(10),
),
child: Text('热', style: TextStyle(color: Colors.white)),
) : null,
onTap: () {
if (items[index] == '查找网点') {
Navigator.pushNamed(context, 'SearchBranch');
}
},
);
},
);
}
}