import 'package:flutter/material.dart';
import 'screens/FeedScreen.dart';
import 'screens/ActivityScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/UserProfileScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Threads Clone',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: FeedScreen(),
      routes: {
        '/feed': (context) => FeedScreen(),
        '/activity': (context) => ActivityScreen(),
        '/profile': (context) => ProfileScreen(),
        '/search': (context) => SearchScreen(),
        '/user_profile': (context) => UserProfileScreen(),
      },
    );
  }
}