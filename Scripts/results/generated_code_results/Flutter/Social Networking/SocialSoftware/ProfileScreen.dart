import 'package:flutter/material.dart';



class ProfileScreen extends StatefulWidget {

  @override

  _ProfileScreenState createState() => _ProfileScreenState();

}



class _ProfileScreenState extends State<ProfileScreen> {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.language),

          onPressed: () {},

        ),

        title: IconButton(

          icon: Icon(Icons.camera_alt),

          onPressed: () {},

        ),

        actions: [

          IconButton(

            icon: Icon(Icons.notifications),

            onPressed: () {

              Navigator.pushNamed(context, 'Activity');

            },

          ),

          IconButton(

            icon: Icon(Icons.menu),

            onPressed: () {},

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

                mainAxisAlignment: MainAxisAlignment.spaceBetween,

                children: [

                  Column(

                    crossAxisAlignment: CrossAxisAlignment.start,

                    children: [

                      Text(

                        'Alisson Rochinski',

                        style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),

                      ),

                      Text('@arochinski'),

                      Text('threads.net'),

                      Text("UI Designer | Let's redesign the world"),

                      Text('alisson.rochinski@gmail.com'),

                    ],

                  ),

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

                ],

              ),

            ),

            Padding(

              padding: const EdgeInsets.symmetric(horizontal: 16.0),

              child: Text('2957 seguidores'),

            ),

            Row(

              mainAxisAlignment: MainAxisAlignment.spaceEvenly,

              children: [

                ElevatedButton(

                  onPressed: () {},

                  child: Text('Editar perfil'),

                  style: ElevatedButton.styleFrom(

                    backgroundColor: Colors.grey[800],

                  ),

                ),

                ElevatedButton(

                  onPressed: () {},

                  child: Text('Compartilhar Perfil'),

                  style: ElevatedButton.styleFrom(

                    backgroundColor: Colors.grey[800],

                  ),

                ),

              ],

            ),

            Row(

              mainAxisAlignment: MainAxisAlignment.spaceEvenly,

              children: [

                Text('Chirps', style: TextStyle(fontWeight: FontWeight.bold)),

                Text('Answers'),

              ],

            ),

            _buildPost(

              'arochinski',

              'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

              7,

              59,

              '2 min',

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

            case 4:

              // Already on Profile page

              break;

          }

        },

      ),

    );

  }



  Widget _buildPost(String username, String content, int answers, int likes, String timeAgo) {

    return Column(

      crossAxisAlignment: CrossAxisAlignment.start,

      children: [

        ListTile(

          leading: CircleAvatar(

            backgroundImage: AssetImage('assets/images/template.png'),

          ),

          title: Text(username),

          subtitle: Text(timeAgo),

          trailing: IconButton(

            icon: Icon(Icons.more_horiz),

            onPressed: () {},

          ),

        ),

        Padding(

          padding: const EdgeInsets.symmetric(horizontal: 16.0),

          child: Text(content),

        ),

        Row(

          mainAxisAlignment: MainAxisAlignment.spaceAround,

          children: [

            IconButton(

              icon: Icon(Icons.chat_bubble_outline),

              onPressed: () {},

            ),

            Text('$answers'),

            IconButton(

              icon: Icon(Icons.favorite_border),

              onPressed: () {},

            ),

            Text('$likes'),

            IconButton(

              icon: Icon(Icons.share),

              onPressed: () {},

            ),

          ],

        ),

        Divider(),

      ],

    );

  }

}