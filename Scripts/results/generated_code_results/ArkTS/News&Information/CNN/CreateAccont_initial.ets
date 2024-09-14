import router from '@ohos.router';
import { WifiIcon } from '../components/WifiIcon';
import { PasswordRequirement } from '../components/PasswordRequirement';
import { CloseIcon } from '../components/CloseIcon';
@Entry
@Component
struct CreateAccount {
@State email: string = '';
@State password: string = '';
@State isPasswordVisible: boolean = false;
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(56)
.height(56)
.margin({ left: 217, top: 48 })
    WifiIcon()
      .width(55)
      .height(51)
      .position({ x: 1184, y: 46 })
  }
  .width('100%')
  .height(120)

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

  TextInput({ placeholder: 'Password' })
    .width('90%')
    .height(50)
    .type(this.isPasswordVisible ? InputType.Normal : InputType.Password)
    .onChange((value: string) => {
      this.password = value
    })

  Image($r('app.media.template'))
    .width(24)
    .height(24)
    .position({ x: 1311, y: 46 })
    .onClick(() => {
      this.isPasswordVisible = !this.isPasswordVisible
    })

  Text('Your password needs to include:')
    .fontSize(16)
    .margin({ top: 20, bottom: 10 })

  PasswordRequirement('At least 8 characters')
  PasswordRequirement('At least one letter')
  PasswordRequirement('At least one number')

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
}
.width('100%')
.height('100%')
.backgroundColor('#F5F5F5')
}
}
@Component
struct PasswordRequirement {
private text: string
build() {
Row() {
Image($r('app.media.template'))
.width(20)
.height(20)
.margin({ right: 10 })
Text(this.text)
.fontSize(14)
}
.margin({ bottom: 5 })
}
}