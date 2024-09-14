import 'package:flutter/material.dart';



class GroupTravelSearchResultScreen extends StatefulWidget {

  @override

  _GroupTravelSearchResultScreenState createState() => _GroupTravelSearchResultScreenState();

}



class _GroupTravelSearchResultScreenState extends State<GroupTravelSearchResultScreen> {

  int _selectedPeople = 2;

  String _selectedSort = '推荐排序';



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pushNamed(context, 'GroupTravel'),

        ),

        title: Row(

          children: [

            Icon(Icons.location_on),

            Expanded(

              child: TextField(

                decoration: InputDecoration(

                  hintText: '烟台',

                  border: InputBorder.none,

                ),

              ),

            ),

            IconButton(

              icon: Icon(Icons.close),

              onPressed: () {},

            ),

          ],

        ),

      ),

      body: Column(

        children: [

          Container(

            padding: EdgeInsets.all(8),

            child: Row(

              mainAxisAlignment: MainAxisAlignment.spaceBetween,

              children: [

                Text('烟台出发参团'),

                Text('亲子 · 游学'),

                Text('店铺'),

              ],

            ),

          ),

          Container(

            padding: EdgeInsets.all(8),

            child: Row(

              mainAxisAlignment: MainAxisAlignment.spaceAround,

              children: [

                Container(

                  decoration: BoxDecoration(

                    color: Colors.blue.withOpacity(0.1),

                    borderRadius: BorderRadius.circular(5),

                  ),

                  padding: EdgeInsets.all(8),

                  child: Text('经典线路 · 23% 选择'),

                ),

                Container(

                  decoration: BoxDecoration(

                    color: Colors.blue.withOpacity(0.1),

                    borderRadius: BorderRadius.circular(5),

                  ),

                  padding: EdgeInsets.all(8),

                  child: Text('经典线路 · 16% 选择'),

                ),

                Container(

                  decoration: BoxDecoration(

                    color: Colors.blue.withOpacity(0.1),

                    borderRadius: BorderRadius.circular(5),

                  ),

                  padding: EdgeInsets.all(8),

                  child: Text('当季'),

                ),

              ],

            ),

          ),

          Row(

            mainAxisAlignment: MainAxisAlignment.spaceAround,

            children: [

              DropdownButton<String>(

                value: _selectedSort,

                onChanged: (String? newValue) {

                  setState(() {

                    _selectedSort = newValue!;

                  });

                },

                items: <String>['推荐排序', '价格低到高', '价格高到低', '销量排序']

                    .map<DropdownMenuItem<String>>((String value) {

                  return DropdownMenuItem<String>(

                    value: value,

                    child: Text(value),

                  );

                }).toList(),

              ),

              DropdownButton<String>(

                value: '天数/日期',

                onChanged: (String? newValue) {},

                items: <String>['天数/日期']

                    .map<DropdownMenuItem<String>>((String value) {

                  return DropdownMenuItem<String>(

                    value: value,

                    child: Text(value),

                  );

                }).toList(),

              ),

              DropdownButton<int>(

                value: _selectedPeople,

                onChanged: (int? newValue) {

                  setState(() {

                    _selectedPeople = newValue!;

                  });

                },

                items: <int>[1, 2, 3, 4, 5]

                    .map<DropdownMenuItem<int>>((int value) {

                  return DropdownMenuItem<int>(

                    value: value,

                    child: Text('$value人'),

                  );

                }).toList(),

              ),

              DropdownButton<String>(

                value: '线路玩法',

                onChanged: (String? newValue) {},

                items: <String>['线路玩法']

                    .map<DropdownMenuItem<String>>((String value) {

                  return DropdownMenuItem<String>(

                    value: value,

                    child: Text(value),

                  );

                }).toList(),

              ),

              OutlinedButton(

                onPressed: () {},

                child: Text('筛选'),

              ),

            ],

          ),

          Expanded(

            child: ListView(

              children: [

                _buildTourCard(

                  '烟台+蓬莱区·2日1晚',

                  '¥965',

                  '5.0分',

                  '已售11人',

                  '帆船出海·喂海鸥·体验赶海乐趣',

                  '全程3钻酒店',

                  '纯玩无购物·6人小团·提前2天免费退',

                  '酒店很舒服',

                ),

                _buildTourCard(

                  '烟台+威海·3日2晚',

                  '¥1699',

                  '5.0分',

                  '已售4人',

                  '烟台玩1天·帆船出海',

                  '全程3钻酒店',

                  '纯玩无购物·6人小团·提前2天免费退',

                  '',

                ),

                _buildTourCard(

                  '山东烟台+蓬莱+长岛·3日',

                  '¥1234',

                  '4.5分',

                  '已售66人',

                  '烟台玩3天·含2正餐',

                  '2晚住宿·含1晚2钻',

                  '纯玩无购物·提前2天免费退·成团保障',

                  '',

                ),

              ],

            ),

          ),

        ],

      ),

    );

  }



  Widget _buildTourCard(String title, String price, String rating, String sales,

      String description, String hotel, String service, String review) {

    return GestureDetector(

      onTap: () => Navigator.pushNamed(context, 'GroupDetails'),

      child: Card(

        margin: EdgeInsets.all(8),

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Stack(

              children: [

                ClipRRect(

                  borderRadius: BorderRadius.circular(8),

                  child: Image.asset('assets/images/template.png'),

                ),

                Positioned(

                  top: 8,

                  left: 8,

                  child: Container(

                    padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),

                    decoration: BoxDecoration(

                      color: Colors.blue,

                      borderRadius: BorderRadius.circular(4),

                    ),

                    child: Text(

                      '拼小团',

                      style: TextStyle(color: Colors.white),

                    ),

                  ),

                ),

                Positioned(

                  bottom: 8,

                  left: 8,

                  child: Container(

                    padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),

                    decoration: BoxDecoration(

                      color: Colors.orange,

                      borderRadius: BorderRadius.circular(4),

                    ),

                    child: Text(

                      '暑期早鸟',

                      style: TextStyle(color: Colors.white),

                    ),

                  ),

                ),

              ],

            ),

            Padding(

              padding: EdgeInsets.all(8),

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Text(

                    title,

                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),

                  ),

                  SizedBox(height: 4),

                  Text(description),

                  SizedBox(height: 4),

                  Text(hotel),

                  SizedBox(height: 4),

                  Text(service),

                  SizedBox(height: 4),

                  if (review.isNotEmpty) Text('"$review"'),

                  SizedBox(height: 4),

                  Row(

                    mainAxisAlignment: MainAxisAlignment.spaceBetween,

                    children: [

                      Text(

                        '$price起',

                        style: TextStyle(

                            fontSize: 20,

                            color: Colors.red,

                            fontWeight: FontWeight.bold),

                      ),

                      Text('$rating $sales'),

                    ],

                  ),

                ],

              ),

            ),

          ],

        ),

      ),

    );

  }

}