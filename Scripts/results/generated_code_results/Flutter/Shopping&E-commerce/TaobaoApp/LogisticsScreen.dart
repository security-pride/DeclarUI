import 'package:flutter/material.dart';
class LogisticsScreen extends StatefulWidget {
const LogisticsScreen({Key? key}) : super(key: key);
@override
_LogisticsScreenState createState() => _LogisticsScreenState();
}
class _LogisticsScreenState extends State<LogisticsScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Message'),
),
title: Text('通知'),
actions: [
IconButton(
icon: Icon(Icons.settings),
onPressed: () {
// Implement settings functionality
},
),
],
),
body: Column(
children: [
_buildCategories(),
Expanded(
child: ListView(
children: [
_buildTrackingItem(
title: '查快递',
action: '暂无快递更新',
),
_buildTrackingItem(
store: 'romoss旗舰店',
date: '24/07/10',
status: '即将确认收货',
logistics: '申通快递',
deliveryTime: '2024年07月02日 12:27',
action: '延长收货',
image: 'assets/images/template.png',
),
_buildTrackingItem(
title: '订单物流消息',
date: '24/07/06',
status: '即将自动确认收货',
address: '关山街道珞瑜路1037号华中科技大学东11舍407',
action: '查看详情',
image: 'assets/images/template.png',
),
_buildTrackingItem(
store: '菜鸟',
date: '24/04/25',
status: '包裹签收通知',
logistics: '韵达快递',
info: '包裹已被签收，点击查看签收详情>>',
action: '查看详情',
image: 'assets/images/template.png',
),
],
),
),
],
),
);
}
Widget _buildCategories() {
final categories = ['物流', '售后', '提醒', '互动', '赞评', '优惠', '其他'];
return SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: categories.map((category) =>
Padding(
padding: const EdgeInsets.symmetric(horizontal: 8.0),
child: Chip(label: Text(category)),
)
).toList(),
),
);
}
Widget _buildTrackingItem({
String? title,
String? store,
String? date,
String? status,
String? logistics,
String? deliveryTime,
String? address,
String? info,
required String action,
String? image,
}) {
return Card(
margin: EdgeInsets.all(8.0),
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
if (title != null) Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
if (store != null) Text(store),
if (date != null) Text(date, style: TextStyle(color: Colors.grey)),
if (status != null) Text(status, style: TextStyle(fontWeight: FontWeight.bold)),
if (logistics != null) Text('物流公司: $logistics'),
if (deliveryTime != null) Text('签收时间: $deliveryTime'),
if (address != null) Text('收货地址: $address'),
if (info != null) Text(info),
if (image != null) Image.asset(image, height: 100, width: 100),
SizedBox(height: 8),
ElevatedButton(
child: Text(action),
onPressed: () {
// Implement action functionality
},
),
],
),
),
);
}
}