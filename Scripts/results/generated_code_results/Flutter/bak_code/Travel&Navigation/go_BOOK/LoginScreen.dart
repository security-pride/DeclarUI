import 'package:flutter/material.dart';
class LoginScreen extends StatefulWidget {
@override
_LoginScreenState createState() => _LoginScreenState();
}
class _LoginScreenState extends State<LoginScreen> {
final TextEditingController _emailController = TextEditingController();
final TextEditingController _passwordController = TextEditingController();
bool _obscurePassword = true;
bool _rememberMe = false;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Sign in'),
elevation: 0,
backgroundColor: Colors.transparent,
foregroundColor: Colors.black,
),
body: SingleChildScrollView(
padding: EdgeInsets.all(24),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Email'),
SizedBox(height: 8),
TextField(
controller: _emailController,
decoration: InputDecoration(
hintText: 'hello.doppixel@gmail.com',
border: OutlineInputBorder(),
),
keyboardType: TextInputType.emailAddress,
),
SizedBox(height: 16),
Text('Password'),
SizedBox(height: 8),
TextField(
controller: _passwordController,
obscureText: _obscurePassword,
decoration: InputDecoration(
hintText: '••••••••',
border: OutlineInputBorder(),
suffixIcon: IconButton(
icon: Icon(_obscurePassword ? Icons.visibility_off : Icons.visibility),
onPressed: () {
setState(() {
_obscurePassword = !_obscurePassword;
});
},
),
),
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
Checkbox(
value: _rememberMe,
onChanged: (value) {
setState(() {
_rememberMe = value!;
});
},
),
Text('Remember me'),
],
),
TextButton(
onPressed: () {
// Implement forgot password functionality
},
child: Text('Forget Password?'),
),
],
),
SizedBox(height: 24),
ElevatedButton(
onPressed: () {
// Implement login logic here
Navigator.pushNamed(context, 'Home');
},
child: Text('Log in'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.black,
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 24),
Center(child: Text('Or continue with')),
SizedBox(height: 16),
ElevatedButton(
onPressed: () {
// Implement Google sign-in
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
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 16),
ElevatedButton(
onPressed: () {
// Implement Apple sign-in
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
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 16),
ElevatedButton(
onPressed: () {
// Implement Facebook sign-in
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
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 24),
Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text("Don't have an account?"),
TextButton(
onPressed: () {
Navigator.pushNamed(context, 'Create Account');
},
child: Text('Sign up'),
),
],
),
],
),
),
);
}
}