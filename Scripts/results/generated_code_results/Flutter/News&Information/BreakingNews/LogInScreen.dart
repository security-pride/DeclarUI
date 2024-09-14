import 'package:flutter/material.dart';
class LogInScreen extends StatefulWidget {
const LogInScreen({Key? key}) : super(key: key);
@override
_LogInScreenState createState() => _LogInScreenState();
}
class _LogInScreenState extends State<LogInScreen> {
String phoneNumber = '';
String countryCode = '+1';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () {
Navigator.pushNamed(context, 'Settings');
},
),
title: Text('Login'),
),
body: Column(
children: [
SizedBox(height: 20),
Text(
'BREAKING',
style: TextStyle(
color: Colors.red,
fontSize: 40,
fontWeight: FontWeight.bold,
),
),
Text(
'By SAFE APPS',
style: TextStyle(
color: Colors.red,
fontSize: 16,
),
),
SizedBox(height: 40),
Text(
'请输入您的电话号码',
style: TextStyle(fontSize: 18),
),
SizedBox(height: 20),
Padding(
padding: EdgeInsets.symmetric(horizontal: 20),
child: Container(
decoration: BoxDecoration(
border: Border.all(color: Colors.grey),
borderRadius: BorderRadius.circular(5),
),
child: Row(
children: [
DropdownButton<String>(
value: countryCode,
items: ['+1', '+86', '+44'].map((String value) {
return DropdownMenuItem<String>(
value: value,
child: Text(value),
);
}).toList(),
onChanged: (String? newValue) {
setState(() {
countryCode = newValue!;
});
},
),
Expanded(
child: TextField(
keyboardType: TextInputType.phone,
decoration: InputDecoration(
hintText: '输入电话号码',
border: InputBorder.none,
),
onChanged: (value) {
setState(() {
phoneNumber = value;
});
},
),
),
],
),
),
),
SizedBox(height: 20),
ElevatedButton(
child: Text('继续'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.red,
minimumSize: Size(200, 50),
),
onPressed: () {
// TODO: Implement login logic
},
),
Expanded(
child: Align(
alignment: Alignment.bottomCenter,
child: CustomKeyboard(
onKeyTap: (String value) {
setState(() {
phoneNumber += value;
});
},
onBackspace: () {
if (phoneNumber.isNotEmpty) {
setState(() {
phoneNumber = phoneNumber.substring(0, phoneNumber.length - 1);
});
}
},
),
),
),
],
),
);
}
}
class CustomKeyboard extends StatelessWidget {
final Function(String) onKeyTap;
final Function() onBackspace;
const CustomKeyboard({
Key? key,
required this.onKeyTap,
required this.onBackspace,
}) : super(key: key);
@override
Widget build(BuildContext context) {
return Container(
color: Colors.grey[200],
child: Column(
children: [
buildKeyboardRow(['1', '2 ABC', '3 DEF']),
buildKeyboardRow(['4 GHI', '5 JKL', '6 MNO']),
buildKeyboardRow(['7 PQRS', '8 TUV', '9 WXYZ']),
buildKeyboardRow(['*', '0 +', '#']),
Row(
children: [
Expanded(child: SizedBox()),
IconButton(
icon: Icon(Icons.backspace),
onPressed: onBackspace,
),
IconButton(
icon: Icon(Icons.check),
onPressed: () {
// TODO: Implement confirmation logic
},
),
],
),
],
),
);
}
Widget buildKeyboardRow(List<String> keys) {
return Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: keys.map((key) => buildKeyboardButton(key)).toList(),
);
}
Widget buildKeyboardButton(String label) {
return TextButton(
child: Text(
label,
style: TextStyle(fontSize: 18, color: Colors.black),
),
onPressed: () => onKeyTap(label[0]),
);
}
}