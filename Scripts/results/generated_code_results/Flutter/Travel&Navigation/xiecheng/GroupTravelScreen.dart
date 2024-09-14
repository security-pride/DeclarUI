import 'package:flutter/material.dart';



class GroupTravelScreen extends StatefulWidget {

  @override

  _GroupTravelScreenState createState() => _GroupTravelScreenState();

}



class _GroupTravelScreenState extends State<GroupTravelScreen> {

  int _selectedTab = 0;

  int _adults = 2;

  int _children = 0;



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () {

            Navigator.pushNamed(context, 'Travel');

          },

        ),

        title: Text('游万里山河 赏一川风月'),

        actions: [

          IconButton(

            icon: Icon(Icons.message),

            onPressed: () {},

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Container(

              padding: EdgeInsets.all(16),

              child: Row(

                children: [

                  Expanded(

                    child: ElevatedButton(

                      child: Text('国内跟团游'),

                      onPressed: () {

                        setState(() {

                          _selectedTab = 0;

                        });

                      },

                      style: ElevatedButton.styleFrom(

                        backgroundColor: _selectedTab == 0 ? Colors.blue : Colors.grey,

                      ),

                    ),

                  ),

                  SizedBox(width: 8),

                  Expanded(

                    child: ElevatedButton(

                      child: Text('国际跟团游'),

                      onPressed: () {

                        setState(() {

                          _selectedTab = 1;

                        });

                      },

                      style: ElevatedButton.styleFrom(

                        backgroundColor: _selectedTab == 1 ? Colors.blue : Colors.grey,

                      ),

                    ),

                  ),

                ],

              ),

            ),

            Padding(

              padding: EdgeInsets.symmetric(horizontal: 16),

              child: Text('烟台出发'),

            ),

            Container(

              height: 50,

              child: ListView(

                scrollDirection: Axis.horizontal,

                children: [

                  _buildDestinationChip('烟台'),

                  _buildDestinationChip('西安'),

                  _buildDestinationChip('大连'),

                  _buildDestinationChip('上海'),

                  _buildDestinationChip('成都'),

                  _buildDestinationChip('南京'),

                ],

              ),

            ),

            Padding(

              padding: EdgeInsets.all(16),

              child: Row(

                mainAxisAlignment: MainAxisAlignment.spaceBetween,

                children: [

                  Text('出发日期不限'),

                  Icon(Icons.arrow_forward_ios, size: 16),

                ],

              ),

            ),

            Padding(

              padding: EdgeInsets.all(16),

              child: Row(

                mainAxisAlignment: MainAxisAlignment.spaceBetween,

                children: [

                  Text('游玩天数不限'),

                  Icon(Icons.arrow_forward_ios, size: 16),

                ],

              ),

            ),

            Padding(

              padding: EdgeInsets.all(16),

              child: Row(

                mainAxisAlignment: MainAxisAlignment.spaceBetween,

                children: [

                  Text('$_adults成人 $_children儿童'),

                  Icon(Icons.arrow_forward_ios, size: 16),

                ],

              ),

            ),

            Padding(

              padding: EdgeInsets.symmetric(horizontal: 16),

              child: ElevatedButton(

                child: Text('查询'),

                onPressed: () {

                  Navigator.pushNamed(context, 'GroupTravelSearchResult');

                },

                style: ElevatedButton.styleFrom(

                  minimumSize: Size(double.infinity, 50),

                ),

              ),

            ),

            SizedBox(height: 16),

            Padding(

              padding: EdgeInsets.symmetric(horizontal: 16),

              child: Text('暑期大促 · 精选'),

            ),

            Container(

              height: 100,

              child: ListView(

                scrollDirection: Axis.horizontal,

                children: [

                  _buildPromotionChip('精选'),

                  _buildPromotionChip('云南'),

                  _buildPromotionChip('新疆'),

                  _buildPromotionChip('四川'),

                  _buildPromotionChip('北京'),

                  _buildPromotionChip('贵州'),

                ],

              ),

            ),

            Image.asset('assets/images/template.png'),

          ],

        ),

      ),

      bottomNavigationBar: BottomNavigationBar(

        type: BottomNavigationBarType.fixed,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: '跟团首页'),

          BottomNavigationBarItem(icon: Icon(Icons.location_on), label: '全部目的地'),

          BottomNavigationBarItem(icon: Icon(Icons.history), label: '浏览历史'),

          BottomNavigationBarItem(icon: Icon(Icons.favorite), label: '我的收藏'),

          BottomNavigationBarItem(icon: Icon(Icons.list), label: '我的订单'),

        ],

      ),

    );

  }



  Widget _buildDestinationChip(String label) {

    return Padding(

      padding: EdgeInsets.symmetric(horizontal: 4),

      child: Chip(

        label: Text(label),

        backgroundColor: Colors.grey[200],

      ),

    );

  }



  Widget _buildPromotionChip(String label) {

    return Padding(

      padding: EdgeInsets.symmetric(horizontal: 4),

      child: Chip(

        label: Text(label),

        backgroundColor: Colors.orange[200],

      ),

    );

  }

}