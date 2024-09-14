import 'package:flutter/material.dart';
class ReservationScreen extends StatefulWidget {
@override
_ReservationScreenState createState() => _ReservationScreenState();
}
class _ReservationScreenState extends State<ReservationScreen> {
bool _fullPayment = true;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('确认并付款'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Details'),
),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png', width: 100, height: 100),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('整套小木屋', style: TextStyle(fontWeight: FontWeight.bold)),
Text('Pitch 24 Creek Caravan Park Ringstead狗友好'),
Row(
children: [
Icon(Icons.star, size: 16, color: Colors.yellow),
Text('4.80 (5)'),
SizedBox(width: 8),
Icon(Icons.emoji_events, size: 16),
Text('超赞房东'),
],
),
],
),
),
],
),
),
Divider(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Icon(Icons.calendar_today),
SizedBox(width: 8),
Expanded(
child: Text('8月3日前可免费取消订单。旅行规划有变，可获全额退款。'),
),
],
),
),
Divider(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('您的行程', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('日期'),
Row(
children: [
Text('9月2日至7日'),
SizedBox(width: 8),
Text('编辑', style: TextStyle(color: Colors.blue)),
],
),
],
),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('房客人数'),
Row(
children: [
Text('1位房客'),
SizedBox(width: 8),
Text('编辑', style: TextStyle(color: Colors.blue)),
],
),
],
),
],
),
),
Divider(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('选择付款方式', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 16),
RadioListTile(
title: Text('立即支付 ¥12,120.95'),
value: true,
groupValue: _fullPayment,
onChanged: (value) {
setState(() {
_fullPayment = value!;
});
},
),
RadioListTile(
title: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('现在支付部分费用，稍后再支付剩余的'),
Text('今天需支付 ¥6,060.48, 2024年8月18日支付 ¥6,060.47。无需支付额外费用。'),
Text('更多信息', style: TextStyle(color: Colors.blue)),
],
),
value: false,
groupValue: _fullPayment,
onChanged: (value) {
setState(() {
_fullPayment = value!;
});
},
),
],
),
),
],
),
),
bottomNavigationBar: BottomAppBar(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: ElevatedButton(
child: Text('确认并付款'),
onPressed: () {
// Implement payment logic here
},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.pink,
foregroundColor: Colors.white,
),
),
),
),
);
}
}