import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/MoreDetailsScreen.dart';
import 'screens/NoticeScreen.dart';
import 'screens/LogInScreen.dart';
import 'screens/SettingsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Breaking News App',
theme: ThemeData(
primarySwatch: Colors.red,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'MoreDetails': (context) => MoreDetailsScreen(),
'Notice': (context) => NoticeScreen(),
'LogIn': (context) => LogInScreen(),
'Settings': (context) => SettingsScreen(),
},
);
}
}