import 'package:flutter/material.dart';
class LoginScreen extends StatefulWidget {
@override
_LoginScreenState createState() => _LoginScreenState();
}
class _LoginScreenState extends State<LoginScreen> {
int _currentPage = 0;
final PageController _pageController = PageController();
@override
Widget build(BuildContext context) {
return Scaffold(
body: Stack(
children: [
Image.asset(
'assets/images/template.png',
fit: BoxFit.cover,
width: double.infinity,
height: double.infinity,
),
SafeArea(
child: Column(
children: [
Expanded(
child: PageView(
controller: _pageController,
onPageChanged: (int page) {
setState(() {
_currentPage = page;
});
},
children: [
_buildLoginPage(),
],
),
),
_buildPageIndicator(),
],
),
),
],
),
);
}
Widget _buildLoginPage() {
return Padding(
padding: const EdgeInsets.all(20.0),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset('assets/images/template.png', width: 100, height: 100),
SizedBox(height: 20),
Text(
'CutG',
style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold, color: Colors.white),
),
SizedBox(height: 20),
Text(
'Welcome!',
style: TextStyle(fontSize: 24, color: Colors.white),
),
SizedBox(height: 10),
Text(
'Discover interesting short videos. Share your moments with the CutG community',
textAlign: TextAlign.center,
style: TextStyle(fontSize: 16, color: Colors.white70),
),
SizedBox(height: 40),
ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'home');
},
child: Text('Sign in'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
_buildSocialLoginButton('assets/images/template.png', () {}),
SizedBox(width: 20),
_buildSocialLoginButton('assets/images/template.png', () {}),
SizedBox(width: 20),
_buildSocialLoginButton('assets/images/template.png', () {}),
],
),
],
),
);
}
Widget _buildSocialLoginButton(String iconPath, VoidCallback onPressed) {
return IconButton(
icon: Image.asset(iconPath, width: 40, height: 40),
onPressed: onPressed,
);
}
Widget _buildPageIndicator() {
return Row(
mainAxisAlignment: MainAxisAlignment.center,
children: List<Widget>.generate(
1,
(int index) {
return Container(
width: 8.0,
height: 8.0,
margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 2.0),
decoration: BoxDecoration(
shape: BoxShape.circle,
color: _currentPage == index ? Colors.white : Colors.white.withOpacity(0.4),
),
);
},
),
);
}
}