import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/DiscoveryScreen.dart';
import 'screens/FriendsScreen.dart';
import 'screens/FindFriendScreen.dart';
import 'screens/EnvironmentSimulationScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Fitbit',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Discovery': (context) => DiscoveryScreen(),
'Friends': (context) => FriendsScreen(),
'FindFriend': (context) => FindFriendScreen(),
'EnvironmentSimulation': (context) => EnvironmentSimulationScreen(),
},
);
}
}