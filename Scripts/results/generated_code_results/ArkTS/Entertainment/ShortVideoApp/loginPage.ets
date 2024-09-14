import router from '@ohos.router';



interface SocialButton {

  icon: Resource;

  onTap: () => void;

}



@Entry

@Component

struct LoginPage {

  @State logo: Resource = $r('app.media.template');



  build() {

    Column() {

      Image(this.logo)

        .width(80)

        .height(80)

        .margin({ top: 60, bottom: 20 })



      Text('Welcome!')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

        .margin({ bottom: 10 })



      Text('Discover interesting short videos.\nShare your moments with the CutG community')

        .fontSize(16)

        .textAlign(TextAlign.Center)

        .margin({ bottom: 40 })



      Button('Sign in')

        .width('80%')

        .height(50)

        .backgroundColor('#FFD700')

        .fontColor(Color.Black)

        .onClick(() => {

          router.pushUrl({ url: 'pages/homePage' })

        })



      Flex({ justifyContent: FlexAlign.SpaceEvenly, alignItems: ItemAlign.Center }) {

        this.SocialLoginButton({ icon: $r('app.media.template'), onTap: () => {} })

        this.SocialLoginButton({ icon: $r('app.media.template'), onTap: () => {} })

        this.SocialLoginButton({ icon: $r('app.media.template'), onTap: () => {} })

      }

      .width('80%')

      .margin({ top: 20 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#000000')

  }



  @Builder

  SocialLoginButton(props: SocialButton) {

    Button({ type: ButtonType.Circle, stateEffect: true }) {

      Image(props.icon)

        .width(24)

        .height(24)

    }

    .width(50)

    .height(50)

    .backgroundColor(Color.White)

    .onClick(props.onTap)

  }

}