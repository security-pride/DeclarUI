import 'package:flutter/material.dart';



class SearchScreen extends StatefulWidget {

  @override

  _SearchScreenState createState() => _SearchScreenState();

}



class _SearchScreenState extends State<SearchScreen> {

  final List<Map<String, dynamic>> searchResults = [

    {'name': 'aura', 'fullName': 'Aura Brown', 'followers': '500 mil'},

    {'name': 'rick', 'fullName': 'Rick Wright', 'followers': '500 mil'},

    {'name': 'mike', 'fullName': 'Mike Torello', 'followers': '500 mil'},

    {'name': 'theodore', 'fullName': 'Theodore T.C. Calvin', 'followers': '500 mil'},

    {'name': 'kate', 'fullName': 'Kate Tanner', 'followers': '500 mil'},

    {'name': 'thomas', 'fullName': 'Thomas Magnum', 'followers': '500 mil'},

    {'name': 'april', 'fullName': 'April Curtis', 'followers': '500 mil'},

  ];



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('Search'),

        backgroundColor: Colors.black,

        actions: [

          IconButton(

            icon: Icon(Icons.notifications),

            onPressed: () {

              Navigator.pushNamed(context, 'Activity');

            },

          ),

        ],

      ),

      body: Column(

        children: [

          Padding(

            padding: const EdgeInsets.all(8.0),

            child: TextField(

              decoration: InputDecoration(

                hintText: 'Search',

                prefixIcon: Icon(Icons.search),

                border: OutlineInputBorder(

                  borderRadius: BorderRadius.circular(20),

                ),

                filled: true,

                fillColor: Colors.grey[800],

              ),

            ),

          ),

          Expanded(

            child: ListView.builder(

              itemCount: searchResults.length,

              itemBuilder: (context, index) {

                final result = searchResults[index];

                return ListTile(

                  leading: CircleAvatar(

                    backgroundImage: AssetImage('assets/images/template.png'),

                  ),

                  title: Text(result['name'], style: TextStyle(color: Colors.white)),

                  subtitle: Column(

                    crossAxisAlignment: CrossAxisAlignment.start,

                    children: [

                      Text(result['fullName'], style: TextStyle(color: Colors.grey)),

                      Text('${result['followers']} followers', style: TextStyle(color: Colors.grey)),

                    ],

                  ),

                  trailing: ElevatedButton(

                    child: Text('Follow'),

                    onPressed: () {},

                    style: ElevatedButton.styleFrom(

                      backgroundColor: Colors.white,

                      foregroundColor: Colors.black,

                    ),

                  ),

                  onTap: () {

                    Navigator.pushNamed(context, 'UserProfile');

                  },

                );

              },

            ),

          ),

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        type: BottomNavigationBarType.fixed,

        backgroundColor: Colors.black,

        selectedItemColor: Colors.white,

        unselectedItemColor: Colors.grey,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),

          BottomNavigationBarItem(icon: Icon(Icons.add_box), label: 'Create'),

          BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Likes'),

          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

        ],

        currentIndex: 1,

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Feed');

          } else if (index == 4) {

            Navigator.pushNamed(context, 'Profile');

          }

        },

      ),

    );

  }

}