import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/IdentifyResultScreen.dart';
import 'screens/PillIdentifierScreen.dart';
import 'screens/ReminderScreen.dart';
import 'screens/ResultDetailScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Medical App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'IdentifyResult': (context) => IdentifyResultScreen(),
'PillIdentifier': (context) => PillIdentifierScreen(),
'Reminder': (context) => ReminderScreen(),
'ResultDetail': (context) => ResultDetailScreen(),
},
);
}
}