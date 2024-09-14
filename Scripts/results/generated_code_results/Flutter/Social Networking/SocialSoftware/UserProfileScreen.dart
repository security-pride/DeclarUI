import 'package:flutter/material.dart';



class UserProfileScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pop(context),

        ),

        title: Text('Voltar'),

        actions: [

          IconButton(

            icon: Icon(Icons.camera_alt),

            onPressed: () {

              // TODO: Implement camera functionality

            },

          ),

          IconButton(

            icon: Icon(Icons.menu),

            onPressed: () {

              // TODO: Implement menu functionality

            },

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Row(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Stack(

                    children: [

                      CircleAvatar(

                        radius: 40,

                        backgroundImage: AssetImage('assets/images/template.png'),

                      ),

                      Positioned(

                        right: 0,

                        bottom: 0,

                        child: Icon(Icons.verified, color: Colors.blue),

                      ),

                    ],

                  ),

                  SizedBox(width: 16),

                  Expanded(

                    child: Column(

                      crossAxisAlignment: CrossAxisAlignment.start,

                      children: [

                        Text(

                          'Alisson Rochinski',

                          style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),

                        ),

                        Text(

                          'arochinski',

                          style: TextStyle(fontSize: 16, color: Colors.grey),

                        ),

                        SizedBox(height: 8),

                        Chip(

                          label: Text('threads.net'),

                          backgroundColor: Colors.grey[200],

                        ),

                        SizedBox(height: 8),

                        Text(

                          "UI Designer | Let's redesign the world\nalisson.rochinski@gmail.com",

                          style: TextStyle(fontSize: 16),

                        ),

                        SizedBox(height: 8),

                        Text(

                          '2957 seguidores',

                          style: TextStyle(fontSize: 16, color: Colors.grey),

                        ),

                      ],

                    ),

                  ),

                ],

              ),

            ),

            Padding(

              padding: const EdgeInsets.symmetric(horizontal: 16.0),

              child: OutlinedButton(

                child: Text('Follow'),

                style: OutlinedButton.styleFrom(

                  minimumSize: Size(double.infinity, 40),

                ),

                onPressed: () {

                  // TODO: Implement follow functionality

                },

              ),

            ),

            SizedBox(height: 16),

            DefaultTabController(

              length: 2,

              child: Column(

                children: [

                  TabBar(

                    tabs: [

                      Tab(text: 'Chirps'),

                      Tab(text: 'Answers'),

                    ],

                  ),

                  SizedBox(

                    height: 300, // Adjust this height as needed

                    child: TabBarView(

                      children: [

                        _buildChirpsList(),

                        Center(child: Text('No answers yet')),

                      ],

                    ),

                  ),

                ],

              ),

            ),

          ],

        ),

      ),

      bottomNavigationBar: BottomNavigationBar(

        type: BottomNavigationBarType.fixed,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),

          BottomNavigationBarItem(icon: Icon(Icons.add_box), label: 'Create'),

          BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Likes'),

          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

        ],

        onTap: (index) {

          switch (index) {

            case 0:

              Navigator.pushNamed(context, 'Feed');

              break;

            case 1:

              Navigator.pushNamed(context, 'Search');

              break;

            case 3:

              Navigator.pushNamed(context, 'Activity');

              break;

          }

        },

      ),

    );

  }



  Widget _buildChirpsList() {

    return ListView(

      children: [

        _buildChirp(),

        // Add more chirps as needed

      ],

    );

  }



  Widget _buildChirp() {

    return Padding(

      padding: const EdgeInsets.all(16.0),

      child: Column(

        crossAxisAlignment: CrossAxisAlignment.start,

        children: [

          Row(

            children: [

              CircleAvatar(

                backgroundImage: AssetImage('assets/images/template.png'),

              ),

              SizedBox(width: 8),

              Text('arochinski', style: TextStyle(fontWeight: FontWeight.bold)),

              Spacer(),

              Text('2 min', style: TextStyle(color: Colors.grey)),

              IconButton(

                icon: Icon(Icons.more_horiz),

                onPressed: () {

                  // TODO: Implement more options functionality

                },

              ),

            ],

          ),

          SizedBox(height: 8),

          Text('Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint'),

          SizedBox(height: 8),

          Row(

            children: [

              IconButton(

                icon: Icon(Icons.favorite_border),

                onPressed: () {

                  // TODO: Implement like functionality

                },

              ),

              Text('59'),

              IconButton(

                icon: Icon(Icons.chat_bubble_outline),

                onPressed: () {

                  // TODO: Implement comment functionality

                },

              ),

              Text('7'),

              IconButton(

                icon: Icon(Icons.repeat),

                onPressed: () {

                  // TODO: Implement repost functionality

                },

              ),

              IconButton(

                icon: Icon(Icons.send),

                onPressed: () {

                  // TODO: Implement send functionality

                },

              ),

            ],

          ),

        ],

      ),

    );

  }

}