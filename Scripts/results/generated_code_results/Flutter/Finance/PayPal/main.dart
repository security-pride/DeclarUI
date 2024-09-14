import 'package:flutter/material.dart';

import 'screens/HomeScreen.dart';

import 'screens/WalletScreen.dart';

import 'screens/CryptoScreen.dart';

import 'screens/BitcoinScreen.dart';

import 'screens/SendScreen.dart';



void main() {

  runApp(MyApp());

}



class MyApp extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return MaterialApp(

      title: 'PayPal Clone',

      theme: ThemeData(

        primarySwatch: Colors.blue,

      ),

      initialRoute: 'Home',

      routes: {

        'Home': (context) => HomeScreen(),

        'Wallet': (context) => WalletScreen(),

        'Crypto': (context) => CryptoScreen(),

        'Bitcoin': (context) => BitcoinScreen(),

        'Send': (context) => SendScreen(),

      },

    );

  }

}