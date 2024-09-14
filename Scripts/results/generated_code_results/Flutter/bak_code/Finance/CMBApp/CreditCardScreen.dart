import 'package:flutter/material.dart';
class CreditCardScreen extends StatefulWidget {
const CreditCardScreen({Key? key}) : super(key: key);
@override
_CreditCardScreenState createState() => _CreditCardScreenState();
}
class _CreditCardScreenState extends State<CreditCardScreen> {
bool _isBalanceVisible = true;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('我的信用卡'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Home'),
),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('您有一份露营推车/拉杆箱待解锁，详...'),
),
Card(
margin: EdgeInsets.all(16.0),
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('个人消费账户'),
Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(12),
),
child: Text('自动还'),
),
],
),
SizedBox(height: 8),
Text('无需还款'),
SizedBox(height: 8),
Text('8月14日(27天后)出账'),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('下期未出账单'),
GestureDetector(
onTap: () {
setState(() {
_isBalanceVisible = !_isBalanceVisible;
});
},
child: Icon(
_isBalanceVisible ? Icons.visibility : Icons.visibility_off,
),
),
],
),
Text(
_isBalanceVisible ? '¥0.00' : '****',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('可用额度 ¥0.00'),
Icon(Icons.arrow_forward_ios, size: 16),
],
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
ElevatedButton(
onPressed: () {},
child: Text('分期还款'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.white,
foregroundColor: Colors.black,
),
),
ElevatedButton(
onPressed: () => Navigator.pushNamed(context, 'Repayment'),
child: Text('还款'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.red,
foregroundColor: Colors.white,
),
),
],
),
],
),
),
),
Padding(
padding: EdgeInsets.symmetric(vertical: 16),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildQuickAction(Icons.credit_card, '卡片管家'),
_buildQuickAction(Icons.star, '我的积分'),
_buildQuickAction(Icons.payment, '绑卡支付'),
_buildQuickAction(Icons.card_giftcard, '推荐有礼'),
_buildQuickAction(Icons.directions_car, 'i车一族'),
],
),
),
Padding(
padding: EdgeInsets.all(16),
child: Text(
'我要借钱',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16),
child: Row(
children: [
Expanded(
child: _buildLoanOption('预借现金', '急用钱 随借随还', '按日计息,还款灵活'),
),
SizedBox(width: 16),
Expanded(
child: _buildLoanOption('专享消费额度', '最高30万', '超100万人申请'),
),
],
),
),
Padding(
padding: EdgeInsets.all(16),
child: Container(
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.yellow[100],
borderRadius: BorderRadius.circular(8),
),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('e招贷'),
Text('借现金分期还 >'),
],
),
),
),
],
),
),
);
}
Widget _buildQuickAction(IconData icon, String label) {
return Column(
children: [
Icon(icon),
SizedBox(height: 4),
Text(label, style: TextStyle(fontSize: 12)),
],
);
}
Widget _buildLoanOption(String title, String subtitle1, String subtitle2) {
return Container(
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(8),
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Text(subtitle1),
Text(subtitle2),
SizedBox(height: 8),
ElevatedButton(
onPressed: () {},
child: Text('立即查看'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.red,
foregroundColor: Colors.white,
),
),
],
),
);
}
}