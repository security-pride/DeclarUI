import 'package:flutter/material.dart';

import 'dart:math' as math;



class ExpandedViewScreen extends StatefulWidget {

  const ExpandedViewScreen({Key? key}) : super(key: key);



  @override

  _ExpandedViewScreenState createState() => _ExpandedViewScreenState();

}



class _ExpandedViewScreenState extends State<ExpandedViewScreen> {

  bool _isDarkMode = false;

  String _currentCalculation = '45 × 24';

  String _result = '1080';

  bool _isRadianMode = false;



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      backgroundColor: _isDarkMode ? Colors.black : Colors.white,

      body: SafeArea(

        child: Column(

          children: [

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Row(

                mainAxisAlignment: MainAxisAlignment.spaceBetween,

                children: [

                  Text(

                    'Switch to Dark',

                    style: TextStyle(

                      color: _isDarkMode ? Colors.white : Colors.black,

                    ),

                  ),

                  Switch(

                    value: _isDarkMode,

                    onChanged: (value) {

                      setState(() {

                        _isDarkMode = value;

                      });

                    },

                    activeColor: Colors.purple,

                  ),

                ],

              ),

            ),

            Text(

              _currentCalculation,

              style: TextStyle(

                fontSize: 24,

                color: _isDarkMode ? Colors.white : Colors.black,

              ),

            ),

            Text(

              _result,

              style: TextStyle(

                fontSize: 48,

                fontWeight: FontWeight.bold,

                color: _isDarkMode ? Colors.white : Colors.black,

              ),

            ),

            Expanded(

              child: Container(

                color: Colors.purple.withOpacity(0.1),

                child: Column(

                  children: [

                    Row(

                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,

                      children: [

                        IconButton(

                          icon: Icon(Icons.history, color: Colors.purple),

                          onPressed: () {

                            Navigator.pushNamed(context, 'ExpandedView-ShowHistory');

                          },

                        ),

                        IconButton(

                          icon: Icon(Icons.fullscreen, color: Colors.purple),

                          onPressed: () {},

                        ),

                        Container(

                          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),

                          decoration: BoxDecoration(

                            color: Colors.purple,

                            borderRadius: BorderRadius.circular(20),

                          ),

                          child: Text(

                            _result,

                            style: TextStyle(color: Colors.white, fontSize: 24),

                          ),

                        ),

                        IconButton(

                          icon: Icon(Icons.close, color: Colors.purple),

                          onPressed: () {},

                        ),

                      ],

                    ),

                    Expanded(

                      child: GridView.count(

                        crossAxisCount: 7,

                        childAspectRatio: 1.5,

                        children: [

                          _buildButton('↺'),

                          _buildButton('Deg/Rad'),

                          _buildButton('√'),

                          _buildButton('C'),

                          _buildButton('( )'),

                          _buildButton('%'),

                          _buildButton('/', isOperation: true),

                          _buildButton('sin'),

                          _buildButton('cos'),

                          _buildButton('tan'),

                          _buildButton('7'),

                          _buildButton('8'),

                          _buildButton('9'),

                          _buildButton('×', isOperation: true),

                          _buildButton('log10'),

                          _buildButton('log'),

                          _buildButton('1/x'),

                          _buildButton('4'),

                          _buildButton('5'),

                          _buildButton('6'),

                          _buildButton('-', isOperation: true),

                          _buildButton('e^n'),

                          _buildButton('x^2'),

                          _buildButton('x^n'),

                          _buildButton('1'),

                          _buildButton('2'),

                          _buildButton('3'),

                          _buildButton('+', isOperation: true),

                          _buildButton('|x|'),

                          _buildButton('π'),

                          _buildButton('e'),

                          _buildButton('+/-'),

                          _buildButton('0'),

                          _buildButton('.'),

                          _buildButton('=', isOperation: true),

                        ],

                      ),

                    ),

                  ],

                ),

              ),

            ),

          ],

        ),

      ),

    );

  }



  Widget _buildButton(String label, {bool isOperation = false}) {

    Color buttonColor = isOperation ? Colors.purple : Colors.white;

    Color textColor = isOperation ? Colors.white : Colors.black;



    return ElevatedButton(

      style: ElevatedButton.styleFrom(

        backgroundColor: buttonColor,

        shape: RoundedRectangleBorder(

          borderRadius: BorderRadius.circular(10),

        ),

      ),

      onPressed: () {

        setState(() {

          if (label == 'C') {

            _currentCalculation = '';

            _result = '0';

          } else if (label == '=') {

            // Perform calculation here

          } else if (label == 'Deg/Rad') {

            _isRadianMode = !_isRadianMode;

          } else {

            _currentCalculation += label;

          }

        });

      },

      child: Text(

        label,

        style: TextStyle(fontSize: 16, color: textColor),

      ),

    );

  }

}