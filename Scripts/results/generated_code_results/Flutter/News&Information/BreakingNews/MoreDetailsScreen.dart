import 'package:flutter/material.dart';
class MoreDetailsScreen extends StatelessWidget {
const MoreDetailsScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('更多'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
),
body: ListView(
children: [
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '设置',
onTap: () => Navigator.pushNamed(context, 'Settings'),
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '同城',
onTap: () {},
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '我的话题',
onTap: () {},
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '已收藏的新闻',
onTap: () {},
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '消息',
onTap: () {},
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '公告',
onTap: () => Navigator.pushNamed(context, 'Notice'),
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '分享应用',
onTap: () {},
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '隐私政策',
onTap: () {},
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '支持我们',
onTap: () {},
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '常见问题解答',
onTap: () {},
),
_buildListTile(
icon: Image.asset('assets/images/template.png'),
title: '退出应用',
onTap: () {},
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 4,
items: [
BottomNavigationBarItem(icon: Icon(Icons.article), label: '新闻'),
BottomNavigationBarItem(icon: Icon(Icons.group), label: '话题墙'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: 'BELOUD'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: '提醒'),
BottomNavigationBarItem(icon: Icon(Icons.more_horiz), label: '更多'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 3) {
Navigator.pushNamed(context, 'Notice');
}
},
),
);
}
Widget _buildListTile({
required Widget icon,
required String title,
required VoidCallback onTap,
}) {
return ListTile(
leading: SizedBox(
width: 24,
height: 24,
child: icon,
),
title: Text(title),
trailing: Icon(Icons.chevron_right),
onTap: onTap,
);
}
}