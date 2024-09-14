import 'package:flutter/material.dart';
class RepaymentScreen extends StatefulWidget {
const RepaymentScreen({Key? key}) : super(key: key);
@override
_RepaymentScreenState createState() => _RepaymentScreenState();
}
class _RepaymentScreenState extends State<RepaymentScreen> {
final TextEditingController _amountController = TextEditingController();
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('信用卡还款'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'CreditCard'),
),
actions: [
IconButton(
icon: Icon(Icons.headset_mic),
onPressed: () => Navigator.pushNamed(context, 'CustomService'),
),
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
SizedBox(width: 10),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('个人消费账户', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
Row(
children: [
Container(
padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
decoration: BoxDecoration(
color: Colors.grey[300],
borderRadius: BorderRadius.circular(4),
),
child: Text('自动还款', style: TextStyle(fontSize: 12)),
),
],
),
],
),
),
],
),
SizedBox(height: 10),
Text('无需还款', style: TextStyle(color: Colors.green, fontSize: 16)),
Text('8月14日(27天后)出账', style: TextStyle(color: Colors.grey)),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('还款金额', style: TextStyle(fontSize: 16)),
TextButton(
onPressed: () {},
child: Text('查看账单 >', style: TextStyle(color: Colors.blue)),
),
],
),
TextField(
controller: _amountController,
keyboardType: TextInputType.number,
decoration: InputDecoration(
prefixIcon: Icon(Icons.attach_money),
hintText: '请输入金额',
border: OutlineInputBorder(),
),
),
SizedBox(height: 20),
ElevatedButton(
onPressed: () {},
child: Text('立即还款'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.pink[100],
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
Icon(Icons.info_outline, size: 16, color: Colors.grey),
SizedBox(width: 5),
Text('还款说明', style: TextStyle(color: Colors.grey)),
],
),
TextButton(
onPressed: () {},
child: Text('填写推荐人', style: TextStyle(color: Colors.blue)),
),
],
),
],
),
),
),
bottomSheet: Container(
width: double.infinity,
padding: EdgeInsets.symmetric(vertical: 16),
child: Column(
mainAxisSize: MainAxisSize.min,
children: [
Icon(Icons.keyboard_arrow_up),
Text('添加他人/他行卡'),
],
),
),
);
}
@override
void dispose() {
_amountController.dispose();
super.dispose();
}
}