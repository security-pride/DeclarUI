import 'package:flutter/material.dart';



class GroupDetailsScreen extends StatefulWidget {

  @override

  _GroupDetailsScreenState createState() => _GroupDetailsScreenState();

}



class _GroupDetailsScreenState extends State<GroupDetailsScreen> {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () {

            Navigator.pushNamed(context, 'GroupTravelSearchResult');

          },

        ),

        title: Text('烟台+蓬莱区2日1晚拼小团'),

        actions: [

          IconButton(

            icon: Icon(Icons.share),

            onPressed: () {},

          ),

          PopupMenuButton(

            icon: Stack(

              children: [

                Icon(Icons.more_vert),

                Positioned(

                  right: 0,

                  top: 0,

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

                      '16',

                      style: TextStyle(

                        color: Colors.white,

                        fontSize: 8,

                      ),

                      textAlign: TextAlign.center,

                    ),

                  ),

                ),

              ],

            ),

            itemBuilder: (BuildContext context) => <PopupMenuEntry>[],

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Image.asset('assets/images/template.png'),

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Row(

                    children: [

                      Text(

                        '烟台+蓬莱区2日1晚拼小团',

                        style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),

                      ),

                      Container(

                        margin: EdgeInsets.only(left: 8),

                        padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),

                        decoration: BoxDecoration(

                          color: Colors.blue,

                          borderRadius: BorderRadius.circular(4),

                        ),

                        child: Text(

                          '3',

                          style: TextStyle(color: Colors.white, fontSize: 12),

                        ),

                      ),

                    ],

                  ),

                  SizedBox(height: 8),

                  Text('编号 45578775'),

                  SizedBox(height: 8),

                  Text(

                    '6人MiniGroup帆船出海/黄渤海分界线/投喂海鸥--"小马尔代夫"--养马岛 | 中国四大名楼--蓬莱阁 | 专业司兼导 | 宝藏机位 | 千与千寻同款入海轨道/烟台古城',

                    style: TextStyle(fontSize: 16),

                  ),

                  SizedBox(height: 16),

                  Row(

                    children: [

                      Text(

                        '¥965',

                        style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.red),

                      ),

                      Text('/人起'),

                      Spacer(),

                      Text('已减100'),

                      Text('限时促销', style: TextStyle(color: Colors.red)),

                    ],

                  ),

                  SizedBox(height: 16),

                  Row(

                    children: [

                      Container(

                        padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),

                        decoration: BoxDecoration(

                          color: Colors.blue[50],

                          borderRadius: BorderRadius.circular(4),

                        ),

                        child: Text('放心游', style: TextStyle(color: Colors.blue)),

                      ),

                      SizedBox(width: 8),

                      Container(

                        padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),

                        decoration: BoxDecoration(

                          color: Colors.blue[50],

                          borderRadius: BorderRadius.circular(4),

                        ),

                        child: Text('无购物', style: TextStyle(color: Colors.blue)),

                      ),

                      SizedBox(width: 8),

                      Container(

                        padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),

                        decoration: BoxDecoration(

                          color: Colors.blue[50],

                          borderRadius: BorderRadius.circular(4),

                        ),

                        child: Text('成团保障', style: TextStyle(color: Colors.blue)),

                      ),

                    ],

                  ),

                  SizedBox(height: 16),

                  Text('提前2天免费退', style: TextStyle(color: Colors.green)),

                  SizedBox(height: 16),

                  Row(

                    children: [

                      Container(

                        padding: EdgeInsets.all(4),

                        decoration: BoxDecoration(

                          color: Colors.orange,

                          borderRadius: BorderRadius.circular(4),

                        ),

                        child: Text('5.0分', style: TextStyle(color: Colors.white)),

                      ),

                      SizedBox(width: 8),

                      Text('超棒 "酒店很舒服"', style: TextStyle(color: Colors.grey)),

                      Spacer(),

                      Text('4条点评 >', style: TextStyle(color: Colors.blue)),

                    ],

                  ),

                ],

              ),

            ),

            Divider(),

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Text('烟台出发', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

                  SizedBox(height: 16),

                  Row(

                    mainAxisAlignment: MainAxisAlignment.spaceBetween,

                    children: [

                      _buildDateContainer('星期五\n07-19', isWeekend: false),

                      _buildDateContainer('星期六\n07-20', isWeekend: true),

                      _buildDateContainer('星期日\n07-21', isWeekend: true),

                      _buildDateContainer('星期一\n07-22', isWeekend: false),

                      Container(

                        padding: EdgeInsets.all(8),

                        decoration: BoxDecoration(

                          border: Border.all(color: Colors.grey),

                          borderRadius: BorderRadius.circular(4),

                        ),

                        child: Column(

                          children: [

                            Text('全部'),

                            Text('班期'),

                          ],

                        ),

                      ),

                    ],

                  ),

                ],

              ),

            ),

          ],

        ),

      ),

      bottomNavigationBar: BottomAppBar(

        child: Row(

          mainAxisAlignment: MainAxisAlignment.spaceAround,

          children: [

            Column(

              mainAxisSize: MainAxisSize.min,

              children: [

                Icon(Icons.store),

                Text('店铺'),

              ],

            ),

            Column(

              mainAxisSize: MainAxisSize.min,

              children: [

                Icon(Icons.favorite_border),

                Text('收藏'),

              ],

            ),

            Column(

              mainAxisSize: MainAxisSize.min,

              children: [

                Icon(Icons.headset_mic),

                Text('客服'),

              ],

            ),

            ElevatedButton(

              onPressed: () {},

              child: Text('立即预订'),

              style: ElevatedButton.styleFrom(

                backgroundColor: Colors.orange,

              ),

            ),

          ],

        ),

      ),

    );

  }



  Widget _buildDateContainer(String text, {required bool isWeekend}) {

    return Container(

      padding: EdgeInsets.all(8),

      decoration: BoxDecoration(

        border: Border.all(color: isWeekend ? Colors.orange : Colors.grey),

        borderRadius: BorderRadius.circular(4),

      ),

      child: Column(

        children: [

          Text(text.split('\n')[0], style: TextStyle(color: isWeekend ? Colors.orange : Colors.black)),

          Text(text.split('\n')[1], style: TextStyle(color: isWeekend ? Colors.orange : Colors.black)),

          if (isWeekend) Text('周末出行', style: TextStyle(color: Colors.orange, fontSize: 12)),

        ],

      ),

    );

  }

}