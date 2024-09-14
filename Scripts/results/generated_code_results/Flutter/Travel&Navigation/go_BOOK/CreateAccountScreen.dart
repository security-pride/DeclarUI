import 'package:flutter/material.dart';
class CreateAccountScreen extends StatefulWidget {
@override
_CreateAccountScreenState createState() => _CreateAccountScreenState();
}
class _CreateAccountScreenState extends State<CreateAccountScreen> {
final TextEditingController _emailController = TextEditingController();
@override
Widget build(BuildContext context) {
return Scaffold(
body: SingleChildScrollView(
child: Container(
padding: EdgeInsets.all(24),
child: Column(
crossAxisAlignment: CrossAxisAlignment.stretch,
children: [
SizedBox(height: 40),
Column(
children: [
Text(
'Hi, Welcome Back',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text(
"Sign up or login into see what's happening near you.",
textAlign: TextAlign.center,
style: TextStyle(fontSize: 14, color: Colors.grey),
),
],
),
SizedBox(height: 24),
Text(
'Email',
style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
TextField(
controller: _emailController,
decoration: InputDecoration(
hintText: 'Email',
border: OutlineInputBorder(),
),
),
SizedBox(height: 16),
ElevatedButton(
onPressed: () {
if (_emailController.text.isNotEmpty) {
Navigator.pushNamed(context, 'Home');
}
},
child: Text('Continue with email'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.black,
padding: EdgeInsets.symmetric(vertical: 16),
),
),
SizedBox(height: 16),
Text(
'Or continue with',
textAlign: TextAlign.center,
style: TextStyle(color: Colors.grey),
),
SizedBox(height: 16),
ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
child: Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset('assets/images/template.png', height: 24),
SizedBox(width: 8),
Text('Continue with Google'),
],
),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.white,
foregroundColor: Colors.black,
padding: EdgeInsets.symmetric(vertical: 16),
),
),
SizedBox(height: 16),
ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
child: Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset('assets/images/template.png', height: 24),
SizedBox(width: 8),
Text('Continue with Apple'),
],
),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.white,
foregroundColor: Colors.black,
padding: EdgeInsets.symmetric(vertical: 16),
),
),
SizedBox(height: 16),
ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
child: Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset('assets/images/template.png', height: 24),
SizedBox(width: 8),
Text('Continue with Facebook'),
],
),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.white,
foregroundColor: Colors.black,
padding: EdgeInsets.symmetric(vertical: 16),
),
),
SizedBox(height: 24),
Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text("Don't have an account?"),
TextButton(
onPressed: () {
Navigator.pushNamed(context, 'Login');
},
child: Text('Sign up'),
),
],
),
],
),
),
),
);
}
}