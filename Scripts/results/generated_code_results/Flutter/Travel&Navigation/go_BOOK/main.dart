import 'package:flutter/material.dart';
import 'screens/CreateAccountScreen.dart';
import 'screens/HomeScreen.dart';
import 'screens/LoginScreen.dart';
import 'screens/NotificationScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/SearchResultScreen.dart';
import 'screens/SettingScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'GoBook',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Login',
routes: {
'Create Account': (context) => CreateAccountScreen(),
'Home': (context) => HomeScreen(),
'Login': (context) => LoginScreen(),
'Notification': (context) => NotificationScreen(),
'Profile': (context) => ProfileScreen(),
'Search Result': (context) => SearchResultScreen(),
'Setting': (context) => SettingScreen(),
},
);
}
}