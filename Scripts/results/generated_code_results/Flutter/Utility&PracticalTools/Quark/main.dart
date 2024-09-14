import 'package:flutter/material.dart';

import 'screens/HomeScreen.dart';

import 'screens/SelectScreen.dart';

import 'screens/NewsScreen.dart';

import 'screens/ScannerScreen.dart';

import 'screens/OnlineStorageScreen.dart';



void main() {

  runApp(MyApp());

}



class MyApp extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return MaterialApp(

      title: 'Quark Browser',

      theme: ThemeData(

        primarySwatch: Colors.blue,

        visualDensity: VisualDensity.adaptivePlatformDensity,

      ),

      home: HomeScreen(),

      routes: {

        'Home': (context) => HomeScreen(),

        'Select': (context) => SelectScreen(),

        'News': (context) => NewsScreen(),

        'Scanner': (context) => ScannerScreen(),

        'OnlineStorage': (context) => OnlineStorageScreen(),

      },

    );

  }

}