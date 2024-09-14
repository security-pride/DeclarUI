import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/CartScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/MessageScreen.dart';
import 'screens/LogisticsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Taobao Clone',
theme: ThemeData(
primarySwatch: Colors.orange,
scaffoldBackgroundColor: Colors.grey[100],
appBarTheme: AppBarTheme(
color: Colors.white,
iconTheme: IconThemeData(color: Colors.black),
titleTextStyle: TextStyle(color: Colors.black, fontSize: 20, fontWeight: FontWeight.bold),
),
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'Cart': (context) => CartScreen(),
'Profile': (context) => ProfileScreen(),
'Message': (context) => MessageScreen(),
'Logistics': (context) => LogisticsScreen(),
},
);
}
}