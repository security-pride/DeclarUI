import router from '@ohos.router';
import { TextInputController } from '@ohos.inputmethod';
@Entry
@Component
struct CreateAccount {
@State email: string = '';
@State password: string = '';
@State isPasswordVisible: boolean = false;
@State passwordCriteria: { [key: string]: boolean } = {
'At least 8 characters': false,
'At least one letter': false,
'At least one number': false
};
passwordController: TextInputController = new TextInputController();
validatePassword(password: string) {
this.passwordCriteria['At least 8 characters'] = password.length >= 8;
this.passwordCriteria['At least one letter'] = /[a-zA-Z]/.test(password);
this.passwordCriteria['At least one number'] = /\d/.test(password);
}
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(56).height(56)
.margin({ left: 217, top: 48 })
Image($r('app.media.template'))
.width(55).height(51)
.position({ x: 1184, y: 46 })
}.width('100%').height(120)
  Text('Sign up for a CNN account')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, bottom: 10 })

  Text('Already have an account? Sign in')
    .fontSize(16)
    .fontColor(Color.Blue)
    .margin({ bottom: 20 })
    .onClick(() => {
      router.pushUrl({ url: 'pages/LogIn' })
    })

  TextInput({ placeholder: 'Email address' })
    .width('90%')
    .height(50)
    .margin({ bottom: 10 })
    .onChange((value: string) => {
      this.email = value
    })

  TextInput({ placeholder: 'Password', controller: this.passwordController })
    .width('90%')
    .height(50)
    .type(this.isPasswordVisible ? InputType.Normal : InputType.Password)
    .onChange((value: string) => {
      this.password = value
      this.validatePassword(value)
    })

  Image($r('app.media.template'))
    .width(24)
    .height(24)
    .position({ x: 1311, y: 46 })
    .onClick(() => {
      this.isPasswordVisible = !this.isPasswordVisible
      this.passwordController.caretPosition(-1)
    })

  Text('Your password needs to include:')
    .fontSize(16)
    .margin({ top: 20, bottom: 10 })

  ForEach(Object.keys(this.passwordCriteria), (criterion: string) => {
    Row() {
      Image($r('app.media.template'))
        .width(20)
        .height(20)
        .margin({ right: 10 })
      Text(criterion)
        .fontSize(14)
        .fontColor(this.passwordCriteria[criterion] ? Color.Green : Color.Red)
    }.margin({ bottom: 5 })
  })

  Text('By creating an account or signing in, you agree to the Terms of Use and have read our Privacy Policy. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the Privacy Policy.')
    .fontSize(12)
    .margin({ top: 20, bottom: 20 })
    .width('90%')

  Button('Sign up')
    .width('90%')
    .height(50)
    .backgroundColor('#0077BE')
    .margin({ bottom: 10 })
    .onClick(() => {
      // Implement sign up logic here
      // After successful sign up, navigate to Settings page
      router.pushUrl({ url: 'pages/Settings' })
    })

  Text('or')
    .fontSize(16)
    .margin({ bottom: 10 })

  Button({ type: ButtonType.Normal }) {
    Row() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Continue with Google')
        .fontSize(16)
        .margin({ left: 10 })
    }
  }
  .width('90%')
  .height(50)
  .backgroundColor(Color.White)
  .border({ color: Color.Gray, width: 1 })
  .onClick(() => {
    // Implement Google sign up logic here
    // After successful sign up with Google, navigate to Settings page
    router.pushUrl({ url: 'pages/Settings' })
  })

  Button('Go to Settings')
    .width('90%')
    .height(50)
    .backgroundColor('#0077BE')
    .margin({ top: 20 })
    .onClick(() => {
      router.pushUrl({ url: 'pages/Settings' })
    })
}
.width('100%')
.height('100%')
.backgroundColor('#F5F5F5')
}
}