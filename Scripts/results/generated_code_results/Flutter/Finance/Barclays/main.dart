import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/CardsScreen.dart';
import 'screens/HelpScreen.dart';
import 'screens/MoreScreen.dart';
import 'screens/StatementsandDocumentsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Barclays Mobile Banking',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'Cards': (context) => CardsScreen(),
'Help': (context) => HelpScreen(),
'More': (context) => MoreScreen(),
'StatementsandDocuments': (context) => StatementsandDocumentsScreen(),
},
);
}
}