import 'package:flutter/material.dart';



class NewsScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('News'),

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pushNamed(context, 'Home'),

        ),

      ),

      body: Center(

        child: Text('News Screen Content'),

      ),

    );

  }

}