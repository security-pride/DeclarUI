import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/TicketsScreen.dart';
import 'screens/TradeScreen.dart';
import 'screens/UtilityBillsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Super App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Profile': (context) => ProfileScreen(),
'Tickets': (context) => TicketsScreen(),
'Trade': (context) => TradeScreen(),
'UtilityBills': (context) => UtilityBillsScreen(),
},
);
}
}