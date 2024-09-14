import 'package:flutter/material.dart';
import 'screens/HomepageScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/MessagesScreen.dart';
import 'screens/OnboardingScreen.dart';
import 'screens/SearchResultScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Heact',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Onboarding',
routes: {
'Onboarding': (context) => OnboardingScreen(),
'Homepage': (context) => HomepageScreen(),
'Profile': (context) => ProfileScreen(),
'Messages': (context) => MessagesScreen(),
'SearchResult': (context) => SearchResultScreen(),
},
);
}
}