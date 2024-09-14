import 'package:flutter/material.dart';
import 'screens/AccountScreen.dart';
import 'screens/DetailsScreen.dart';
import 'screens/MoreScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/TermsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Reward Offers App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Search',
routes: {
'Account': (context) => AccountScreen(),
'Details': (context) => DetailsScreen(),
'More': (context) => MoreScreen(),
'Search': (context) => SearchScreen(),
'Terms': (context) => TermsScreen(),
},
);
}
}