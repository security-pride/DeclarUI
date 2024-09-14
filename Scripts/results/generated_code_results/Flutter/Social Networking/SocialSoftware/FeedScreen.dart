import 'package:flutter/material.dart';



class FeedScreen extends StatefulWidget {

  @override

  _FeedScreenState createState() => _FeedScreenState();

}



class _FeedScreenState extends State<FeedScreen> {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Image.asset('assets/images/template.png', height: 30),

        actions: [

          IconButton(

            icon: Icon(Icons.notifications),

            onPressed: () => Navigator.pushNamed(context, 'Activity'),

          ),

          IconButton(

            icon: Icon(Icons.menu),

            onPressed: () {},

          ),

        ],

      ),

      body: ListView(

        children: [

          _buildPost(

            'arochinski',

            'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

            true,

            7,

            59,

            '2 min',

          ),

          _buildPost(

            'arochinski',

            'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

            false,

            7,

            59,

            '2 min',

          ),

          _buildPost(

            'aura',

            'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

            false,

            0,

            0,

            '1min',

          ),

        ],

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

            case 1:

              Navigator.pushNamed(context, 'Search');

              break;

            case 4:

              Navigator.pushNamed(context, 'Profile');

              break;

          }

        },

      ),

    );

  }



  Widget _buildPost(String username, String content, bool hasImage, int answers, int likes, String timeAgo) {

    return Column(

      crossAxisAlignment: CrossAxisAlignment.start,

      children: [

        ListTile(

          leading: GestureDetector(

            onTap: () => Navigator.pushNamed(context, 'UserProfile'),

            child: CircleAvatar(

              backgroundImage: AssetImage('assets/images/template.png'),

            ),

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

        if (hasImage)

          Padding(

            padding: const EdgeInsets.all(16.0),

            child: Image.asset('assets/images/template.png'),

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