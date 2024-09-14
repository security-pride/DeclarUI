import 'package:flutter/material.dart';



class HomeScreen extends StatefulWidget {

  @override

  _HomeScreenState createState() => _HomeScreenState();

}



class _HomeScreenState extends State<HomeScreen> {

  TextEditingController _searchController = TextEditingController();



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('烟台百纳瑞汀酒店（第一海水浴...'),

        actions: [

          IconButton(

            icon: Icon(Icons.map),

            onPressed: () {},

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          children: [

            Padding(

              padding: EdgeInsets.all(8.0),

              child: TextField(

                controller: _searchController,

                decoration: InputDecoration(

                  hintText: '搜索',

                  suffixIcon: IconButton(

                    icon: Icon(Icons.search),

                    onPressed: () {},

                  ),

                  border: OutlineInputBorder(

                    borderRadius: BorderRadius.circular(20),

                  ),

                ),

              ),

            ),

            SingleChildScrollView(

              scrollDirection: Axis.horizontal,

              child: Row(

                children: [

                  _buildTag('烟台'),

                  _buildTag('威海'),

                  _buildTag('莒莱阁'),

                  _buildTag('长岛'),

                  _buildTag('武汉'),

                ],

              ),

            ),

            GridView.count(

              shrinkWrap: true,

              crossAxisCount: 5,

              children: [

                _buildCategoryItem(Icons.hotel, '酒店'),

                _buildCategoryItem(Icons.flight, '机票'),

                _buildCategoryItem(Icons.train, '火车票'),

                _buildCategoryItem(Icons.beach_access, '旅游'),

                _buildCategoryItem(Icons.book, '攻略/景点'),

                _buildCategoryItem(Icons.house, '民宿/客栈'),

                _buildCategoryItem(Icons.flight_land, '机票+酒店'),

                _buildCategoryItem(Icons.directions_car, '汽车/船票'),

                _buildCategoryItem(Icons.local_activity, '门票/玩乐'),

                _buildCategoryItem(Icons.restaurant, '美食/购物'),

                _buildCategoryItem(Icons.hotel_class, '酒店套餐'),

                _buildCategoryItem(Icons.airport_shuttle, '接送机/包车'),

                _buildCategoryItem(Icons.car_rental, '租车'),

                _buildCategoryItem(Icons.account_balance_wallet, '签证/换外币'),

                _buildCategoryItem(Icons.attach_money, '借钱/分期'),

              ],

            ),

            Padding(

              padding: EdgeInsets.symmetric(vertical: 8.0),

              child: Row(

                mainAxisAlignment: MainAxisAlignment.spaceEvenly,

                children: [

                  _buildFeatureButton('特价专区'),

                  _buildFeatureButton('直播团购'),

                  _buildFeatureButton('口碑榜'),

                  _buildFeatureButton('旅行热点'),

                ],

              ),

            ),

            GridView.count(

              shrinkWrap: true,

              crossAxisCount: 2,

              childAspectRatio: 1.5,

              children: [

                _buildPromotionCard('烟台甄选特价', 'assets/images/template.png'),

                _buildPromotionCard('烟台爆款团购', 'assets/images/template.png'),

                _buildPromotionCard('美景酒店榜', 'assets/images/template.png'),

                _buildPromotionCard('烟台海水浴场', 'assets/images/template.png'),

              ],

            ),

            _buildBanner(),

            ListTile(

              title: Text('您有一段旅程'),

              subtitle: Text('烟台百纳瑞汀酒店（第一海水浴场火车站店）'),

              trailing: Text('更多 >'),

              onTap: () {},

            ),

          ],

        ),

      ),

      bottomNavigationBar: BottomNavigationBar(

        type: BottomNavigationBarType.fixed,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),

          BottomNavigationBarItem(icon: Icon(Icons.people), label: '社区'),

          BottomNavigationBarItem(icon: Icon(Icons.message), label: '消息'),

          BottomNavigationBarItem(icon: Icon(Icons.calendar_today), label: '行程'),

          BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),

        ],

        onTap: (index) {

          if (index == 3) {

            Navigator.pushNamed(context, 'Travel');

          }

        },

      ),

    );

  }



  Widget _buildTag(String text) {

    return Container(

      margin: EdgeInsets.symmetric(horizontal: 4),

      padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),

      decoration: BoxDecoration(

        color: Colors.blue.shade100,

        borderRadius: BorderRadius.circular(16),

      ),

      child: Text(text),

    );

  }



  Widget _buildCategoryItem(IconData icon, String label) {

    return Column(

      mainAxisAlignment: MainAxisAlignment.center,

      children: [

        Icon(icon),

        SizedBox(height: 4),

        Text(label, textAlign: TextAlign.center),

      ],

    );

  }



  Widget _buildFeatureButton(String label) {

    return ElevatedButton(

      onPressed: () {},

      child: Text(label),

      style: ElevatedButton.styleFrom(

        backgroundColor: Colors.orange,

      ),

    );

  }



  Widget _buildPromotionCard(String title, String imagePath) {

    return Card(

      child: Column(

        children: [

          Expanded(

            child: Image.asset(imagePath, fit: BoxFit.cover),

          ),

          Padding(

            padding: EdgeInsets.all(8.0),

            child: Text(title),

          ),

        ],

      ),

    );

  }



  Widget _buildBanner() {

    return Container(

      height: 100,

      margin: EdgeInsets.symmetric(vertical: 8),

      child: Image.asset('assets/images/template.png', fit: BoxFit.cover),

    );

  }

}