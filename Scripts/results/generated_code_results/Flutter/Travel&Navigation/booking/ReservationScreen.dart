import 'package:flutter/material.dart';
class ReservationScreen extends StatefulWidget {
@override
_ReservationScreenState createState() => _ReservationScreenState();
}
class _ReservationScreenState extends State<ReservationScreen> {
int roomCount = 1;
String selectedBedType = '无偏好';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.close),
onPressed: () {
Navigator.pushNamed(context, 'TypeDetails');
},
),
title: Text('标准间'),
),
body: SingleChildScrollView(
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('客房数量', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Row(
children: [
IconButton(
icon: Icon(Icons.remove),
onPressed: () {
setState(() {
if (roomCount > 1) roomCount--;
});
},
),
Text('$roomCount', style: TextStyle(fontSize: 18)),
IconButton(
icon: Icon(Icons.add),
onPressed: () {
setState(() {
roomCount++;
});
},
),
],
),
Divider(),
Text('标准间 1', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Text('选择床型', style: TextStyle(fontSize: 16)),
Text('请求能否满足需视供应情况而定', style: TextStyle(color: Colors.grey)),
RadioListTile(
title: Text('无偏好'),
value: '无偏好',
groupValue: selectedBedType,
onChanged: (value) {
setState(() {
selectedBedType = value.toString();
});
},
),
RadioListTile(
title: Text('2张单人床'),
value: '2张单人床',
groupValue: selectedBedType,
onChanged: (value) {
setState(() {
selectedBedType = value.toString();
});
},
),
RadioListTile(
title: Text('1张超大号双人床'),
value: '1张超大号双人床',
groupValue: selectedBedType,
onChanged: (value) {
setState(() {
selectedBedType = value.toString();
});
},
),
Divider(),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('707元', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
Text('含税费及其他费用', style: TextStyle(color: Colors.grey)),
],
),
ElevatedButton(
child: Text('确认'),
onPressed: () {
// Here you would typically handle the reservation confirmation
// For now, we'll just navigate back to TypeDetails
Navigator.pushNamed(context, 'TypeDetails');
},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
padding: EdgeInsets.symmetric(horizontal: 40, vertical: 15),
),
),
],
),
],
),
),
),
);
}
}