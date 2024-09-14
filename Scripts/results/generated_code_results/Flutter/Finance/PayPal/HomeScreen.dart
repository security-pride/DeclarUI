import 'package:flutter/material.dart';



class HomeScreen extends StatefulWidget {

  @override

  _HomeScreenState createState() => _HomeScreenState();

}



class _HomeScreenState extends State<HomeScreen> {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.menu),

          onPressed: () {},

        ),

        actions: [

          IconButton(

            icon: Icon(Icons.help_outline),

            onPressed: () {},

          ),

          IconButton(

            icon: Icon(Icons.qr_code_scanner),

            onPressed: () {},

          ),

          IconButton(

            icon: Icon(Icons.person),

            onPressed: () {},

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Card(

              margin: EdgeInsets.all(16),

              child: Padding(

                padding: EdgeInsets.all(16),

                child: Row(

                  children: [

                    Image.asset('assets/images/template.png', width: 40, height: 40),

                    SizedBox(width: 16),

                    Column(

                      crossAxisAlignment: CrossAxisAlignment.start,

                      children: [

                        Text('£0.00', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),

                        Text('PayPal balance', style: TextStyle(color: Colors.grey)),

                      ],

                    ),

                  ],

                ),

              ),

            ),

            Padding(

              padding: EdgeInsets.symmetric(horizontal: 16),

              child: Text('Send again', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

            ),

            SizedBox(height: 16),

            Row(

              mainAxisAlignment: MainAxisAlignment.spaceEvenly,

              children: [

                Column(

                  children: [

                    CircleAvatar(

                      backgroundColor: Colors.purple,

                      child: Text('ZF', style: TextStyle(color: Colors.white)),

                    ),

                    SizedBox(height: 8),

                    Text('Zhou Fang'),

                  ],

                ),

                Column(

                  children: [

                    CircleAvatar(

                      backgroundColor: Colors.purple,

                      child: Icon(Icons.search, color: Colors.white),

                    ),

                    SizedBox(height: 8),

                    Text('Search'),

                  ],

                ),

              ],

            ),

            SizedBox(height: 16),

            Card(

              margin: EdgeInsets.all(16),

              child: Padding(

                padding: EdgeInsets.all(16),

                child: Column(

                  crossAxisAlignment: CrossAxisAlignment.start,

                  children: [

                    Text("Let's go! Refer a friend to earn a £10 reward.", style: TextStyle(fontWeight: FontWeight.bold)),

                    SizedBox(height: 8),

                    Text('Max 10 friends. Min spend £5 within 30 days. Ends 31/12/24. Terms apply.'),

                    SizedBox(height: 16),

                    ElevatedButton(

                      child: Text('Invite friends'),

                      onPressed: () {},

                      style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),

                    ),

                  ],

                ),

              ),

            ),

            Padding(

              padding: EdgeInsets.symmetric(horizontal: 16),

              child: Text('Send money internationally', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

            ),

            SizedBox(height: 16),

            Row(

              mainAxisAlignment: MainAxisAlignment.spaceEvenly,

              children: [

                ElevatedButton(

                  child: Text('Send'),

                  onPressed: () {

                    Navigator.pushNamed(context, 'Send');

                  },

                  style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),

                ),

                OutlinedButton(

                  child: Text('Request'),

                  onPressed: () {},

                  style: OutlinedButton.styleFrom(foregroundColor: Colors.blue),

                ),

              ],

            ),

          ],

        ),

      ),

      bottomNavigationBar: BottomNavigationBar(

        currentIndex: 0,

        type: BottomNavigationBarType.fixed,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Crypto'),

          BottomNavigationBarItem(icon: Icon(Icons.attach_money), label: 'Payments'),

          BottomNavigationBarItem(icon: Icon(Icons.account_balance_wallet), label: 'Wallet'),

        ],

        onTap: (index) {

          if (index == 1) {

            Navigator.pushNamed(context, 'Crypto');

          } else if (index == 3) {

            Navigator.pushNamed(context, 'Wallet');

          }

        },

      ),

    );

  }

}