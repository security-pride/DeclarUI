import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/OrdersScreen.dart';
import 'screens/FilterScreen.dart';
import 'screens/AccountScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Amazon Clone',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: 'Home',
      routes: {
        'Home': (context) => HomeScreen(),
        'Profile': (context) => ProfileScreen(),
        'Orders': (context) => OrdersScreen(),
        'Filter': (context) => FilterScreen(),
        'Account': (context) => AccountScreen(),
      },
    );
  }
}