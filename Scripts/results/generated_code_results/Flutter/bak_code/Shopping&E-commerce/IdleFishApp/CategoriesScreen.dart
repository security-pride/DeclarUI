import 'package:flutter/material.dart';
class CategoriesScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('分类页'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Home'),
),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: TextField(
decoration: InputDecoration(
hintText: '淘宝|牛仔裤',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'热门推荐',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 4,
children: [
_buildRecommendedService('闲鱼帮卖', 'assets/images/template.png'),
_buildRecommendedService('闲鱼鱼币', 'assets/images/template.png'),
_buildRecommendedService('手机严选', 'assets/images/template.png'),
_buildRecommendedService('文玩珠宝', 'assets/images/template.png'),
_buildRecommendedService('潮玩盲盒', 'assets/images/template.png'),
_buildRecommendedService('奢侈品帮卖', 'assets/images/template.png'),
_buildRecommendedService('闲鱼租房', 'assets/images/template.png'),
_buildRecommendedService('闲鱼游戏', 'assets/images/template.png'),
_buildRecommendedService('免费送', 'assets/images/template.png'),
_buildRecommendedService('明星玩家', 'assets/images/template.png'),
_buildRecommendedService('免费鉴定', 'assets/images/template.png'),
_buildRecommendedService('卡券', 'assets/images/template.png'),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'分类',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
ListView(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
children: [
_buildCategoryItem('游戏装备'),
_buildCategoryItem('数码'),
_buildCategoryItem('模玩动漫'),
_buildCategoryItem('企业'),
_buildCategoryItem('文玩玉翠', onTap: () => Navigator.pushNamed(context, 'JewelryCategory')),
_buildCategoryItem('家居生活'),
_buildCategoryItem('优惠券码'),
_buildCategoryItem('美容彩妆'),
_buildCategoryItem('母婴'),
_buildCategoryItem('运动户外'),
_buildCategoryItem('服饰鞋帽'),
_buildCategoryItem('技能服务'),
_buildCategoryItem('家用电器'),
_buildCategoryItem('宠物花卉'),
],
),
],
),
),
);
}
Widget _buildRecommendedService(String name, String imagePath) {
return Column(
children: [
Image.asset(imagePath, width: 40, height: 40),
SizedBox(height: 4),
Text(name, style: TextStyle(fontSize: 12)),
],
);
}
Widget _buildCategoryItem(String name, {VoidCallback? onTap}) {
return ListTile(
title: Text(name),
trailing: Icon(Icons.chevron_right),
onTap: onTap ?? () {},
);
}
}