import router from '@ohos.router';



@Entry

@Component

struct OnboardingPage {

  build() {

    Column() {

      Row() {

        Text('9:41').fontSize(16).fontColor(Color.Black)

        Blank()

        Image($r('app.media.template')).width(16).height(16)

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8 })



      Image($r('app.media.template'))

        .width(120)

        .height(40)

        .margin({ top: 40, bottom: 20 })



      Text('Effortlessly Discover\nYour Ideal Match')

        .fontSize(28)

        .fontWeight(FontWeight.Bold)

        .textAlign(TextAlign.Center)

        .margin({ bottom: 16 })



      Text('Experience a seamless journey uncovering the ideal match that aligns with your preferences and aspirations')

        .fontSize(16)

        .textAlign(TextAlign.Center)

        .margin({ bottom: 40 })

        .padding({ left: 32, right: 32 })



      Button({ type: ButtonType.Normal }) {

        Row() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Continue with Apple').fontSize(16).fontColor(Color.Black).margin({ left: 8 })

        }

      }

      .width('90%')

      .height(48)

      .backgroundColor(Color.White)

      .margin({ bottom: 16 })



      Button({ type: ButtonType.Normal }) {

        Row() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Continue with Facebook').fontSize(16).fontColor(Color.White).margin({ left: 8 })

        }

      }

      .width('90%')

      .height(48)

      .backgroundColor('#1877F2')

      .margin({ bottom: 16 })



      Button('Use Phone Number')

        .width('90%')

        .height(48)

        .backgroundColor(Color.Black)

        .fontColor(Color.White)

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomepagePage' })

        })

    }

    .width('100%')

    .height('100%')

    .backgroundImage($r('app.media.template'))

    .backgroundImageSize(ImageSize.Cover)

  }

}