import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/AlbumsScreen.dart';
import 'screens/AlbumDetailsScreen.dart';
import 'screens/PlaySongScreen.dart';
import 'screens/SongsScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Music Player App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        brightness: Brightness.dark,
      ),
      initialRoute: 'Home',
      routes: {
        'Home': (context) => HomeScreen(),
        'Albums': (context) => AlbumsScreen(),
        'AlbumDetails': (context) => AlbumDetailsScreen(),
        'PlaySong': (context) => PlaySongScreen(),
        'Songs': (context) => SongsScreen(),
      },
    );
  }
}