import 'package:flutter/material.dart';
import 'screens/CourseDetailScreen.dart';
import 'screens/DiscoverScreen.dart';
import 'screens/FavoritesScreen.dart';
import 'screens/NotificationsScreen.dart';
import 'screens/StatisticsScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Learning App',
      theme: ThemeData(
        primarySwatch: Colors.purple,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: 'Discover',
      routes: {
        'CourseDetail': (context) => CourseDetailScreen(),
        'Discover': (context) => DiscoverScreen(),
        'Favorites': (context) => FavoritesScreen(),
        'Notifications': (context) => NotificationsScreen(),
        'Statistics': (context) => StatisticsScreen(),
      },
    );
  }
}