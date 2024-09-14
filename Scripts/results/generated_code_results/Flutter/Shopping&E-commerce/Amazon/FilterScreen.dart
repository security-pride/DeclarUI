import 'package:flutter/material.dart';



class FilterScreen extends StatefulWidget {

  @override

  _FilterScreenState createState() => _FilterScreenState();

}



class _FilterScreenState extends State<FilterScreen> {

  String selectedOrderType = 'Orders';

  String selectedOrderDate = 'Last 3 months';



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pop(context),

        ),

        title: TextField(

          decoration: InputDecoration(

            hintText: 'Search Amazon.co.uk',

            suffixIcon: Row(

              mainAxisSize: MainAxisSize.min,

              children: [

                Icon(Icons.camera_alt),

                Icon(Icons.mic),

              ],

            ),

          ),

        ),

      ),

      body: ListView(

        children: [

          Padding(

            padding: const EdgeInsets.all(16.0),

            child: Row(

              mainAxisAlignment: MainAxisAlignment.spaceBetween,

              children: [

                Text('Back', style: TextStyle(fontSize: 18)),

                ElevatedButton(

                  onPressed: () {

                    Navigator.pushNamed(context, 'Orders');

                  },

                  child: Text('Apply'),

                  style: ElevatedButton.styleFrom(

                    backgroundColor: Colors.yellow,

                  ),

                ),

              ],

            ),

          ),

          Text('FILTER BY ORDER TYPE', style: TextStyle(fontWeight: FontWeight.bold)),

          RadioListTile(

            title: Text('Orders'),

            value: 'Orders',

            groupValue: selectedOrderType,

            onChanged: (value) {

              setState(() {

                selectedOrderType = value.toString();

              });

            },

          ),

          RadioListTile(

            title: Text('Not Yet Dispatched'),

            value: 'Not Yet Dispatched',

            groupValue: selectedOrderType,

            onChanged: (value) {

              setState(() {

                selectedOrderType = value.toString();

              });

            },

          ),

          RadioListTile(

            title: Text('Local shops'),

            value: 'Local shops',

            groupValue: selectedOrderType,

            onChanged: (value) {

              setState(() {

                selectedOrderType = value.toString();

              });

            },

          ),

          RadioListTile(

            title: Text('Cancelled'),

            value: 'Cancelled',

            groupValue: selectedOrderType,

            onChanged: (value) {

              setState(() {

                selectedOrderType = value.toString();

              });

            },

          ),

          Divider(),

          Text('FILTER BY ORDER DATE', style: TextStyle(fontWeight: FontWeight.bold)),

          RadioListTile(

            title: Text('Last 30 days'),

            value: 'Last 30 days',

            groupValue: selectedOrderDate,

            onChanged: (value) {

              setState(() {

                selectedOrderDate = value.toString();

              });

            },

          ),

          RadioListTile(

            title: Text('Last 3 months'),

            value: 'Last 3 months',

            groupValue: selectedOrderDate,

            onChanged: (value) {

              setState(() {

                selectedOrderDate = value.toString();

              });

            },

          ),

          RadioListTile(

            title: Text('2024'),

            value: '2024',

            groupValue: selectedOrderDate,

            onChanged: (value) {

              setState(() {

                selectedOrderDate = value.toString();

              });

            },

          ),

          RadioListTile(

            title: Text('2023'),

            value: '2023',

            groupValue: selectedOrderDate,

            onChanged: (value) {

              setState(() {

                selectedOrderDate = value.toString();

              });

            },

          ),

          RadioListTile(

            title: Text('2022'),

            value: '2022',

            groupValue: selectedOrderDate,

            onChanged: (value) {

              setState(() {

                selectedOrderDate = value.toString();

              });

            },

          ),

          RadioListTile(

            title: Text('2021'),

            value: '2021',

            groupValue: selectedOrderDate,

            onChanged: (value) {

              setState(() {

                selectedOrderDate = value.toString();

              });

            },

          ),

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        type: BottomNavigationBarType.fixed,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

          BottomNavigationBarItem(

            icon: Stack(

              children: [

                Icon(Icons.shopping_cart),

                Positioned(

                  right: 0,

                  child: Container(

                    padding: EdgeInsets.all(1),

                    decoration: BoxDecoration(

                      color: Colors.red,

                      borderRadius: BorderRadius.circular(6),

                    ),

                    constraints: BoxConstraints(

                      minWidth: 12,

                      minHeight: 12,

                    ),

                    child: Text(

                      '1',

                      style: TextStyle(

                        color: Colors.white,

                        fontSize: 8,

                      ),

                      textAlign: TextAlign.center,

                    ),

                  ),

                )

              ],

            ),

            label: 'Cart',

          ),

          BottomNavigationBarItem(icon: Icon(Icons.menu), label: 'Menu'),

        ],

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Home');

          }

        },

      ),

    );

  }

}