import router from '@ohos.router';
@Entry
@Component
struct LogIn {
@State email: string = '';
@State password: string = '';
@State isPasswordVisible: boolean = false;
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24).height(24)
.margin({ left: 10 })
.onClick(() => {
router.back()
})
Blank()
Text('6:17').fontSize(16)
Image($r('app.media.template')).width(24).height(24)
Image($r('app.media.template')).width(24).height(24)
}.width('100%').height(50).padding({ left: 10, right: 10 })
  Text('Sign in to your CNN account')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 40, bottom: 10 })

  Text("Don't have an account? Sign up")
    .fontSize(16)
    .fontColor(Color.Blue)
    .margin({ bottom: 20 })
    .onClick(() => {
      router.pushUrl({ url: 'pages/CreateAccont' })
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
    .position({ right: '8%', top: '50%' })
    .onClick(() => {
      this.isPasswordVisible = !this.isPasswordVisible
    })

  Button('Sign in', { type: ButtonType.Capsule, stateEffect: true })
    .width('90%')
    .height(50)
    .backgroundColor('#CCCCCC')
    .margin({ top: 20 })
    .onClick(() => {
      router.pushUrl({ url: 'pages/Settings' })
    })

  Text('Forgot your password?')
    .fontSize(16)
    .fontColor(Color.Blue)
    .margin({ top: 20, bottom: 20 })
    .onClick(() => {
      // Handle forgot password logic
    })

  Text('or')
    .fontSize(16)
    .margin({ bottom: 20 })

  Button({ type: ButtonType.Normal }) {
    Row() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Continue with Google').fontSize(16).margin({ left: 10 })
    }
  }
  .width('90%')
  .height(50)
  .backgroundColor(Color.White)
  .border({ color: Color.Gray, width: 1 })

  Text('By creating an account or signing in, you agree to the Terms of Use and have read our Privacy Policy. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the Privacy Policy.')
    .fontSize(12)
    .margin({ top: 20, left: 20, right: 20 })
    .textAlign(TextAlign.Center)
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
}