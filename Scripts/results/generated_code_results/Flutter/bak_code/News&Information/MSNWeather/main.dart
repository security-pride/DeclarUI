import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/AppsScreen.dart';
import 'screens/NewsScreen.dart';
import 'screens/SettingsScreen.dart';
import 'screens/PersonalCentralScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Microsoft Edge Clone',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Apps': (context) => AppsScreen(),
'News': (context) => NewsScreen(),
'Settings': (context) => SettingsScreen(),
'PersonalCentral': (context) => PersonalCentralScreen(),
},
);
}
}