import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/ElectionsScreen.dart';
import 'screens/SettingsScreen.dart';
import 'screens/LogInScreen.dart';
import 'screens/CreateAccontScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'CNN News App',
theme: ThemeData(
primarySwatch: Colors.red,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Elections': (context) => ElectionsScreen(),
'Settings': (context) => SettingsScreen(),
'LogIn': (context) => LogInScreen(),
'CreateAccont': (context) => CreateAccontScreen(),
},
);
}
}