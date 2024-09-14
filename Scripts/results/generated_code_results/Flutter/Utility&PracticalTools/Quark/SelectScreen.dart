import 'package:flutter/material.dart';



class SelectScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('Select'),

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pushNamed(context, 'Home'),

        ),

      ),

      body: Center(

        child: Text('Select Screen Content'),

      ),

    );

  }

}