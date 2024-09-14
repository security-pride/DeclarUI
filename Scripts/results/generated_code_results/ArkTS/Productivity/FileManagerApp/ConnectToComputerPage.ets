import router from '@ohos.router';



@Entry

@Component

struct ConnectToComputerPage {

  @State private isWaiting: boolean = true;



  build() {

    Column() {

      // Status Bar

      Row() {

        Text('9:41')

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

        Blank()

        Row() {

          Image($r('app.media.template')).width(16).height(16) // Signal icon

          Image($r('app.media.template')).width(16).height(16) // Wi-Fi icon

          Image($r('app.media.template')).width(16).height(16) // Battery icon

        }

      }

      .width('100%')

      .height(24)

      .padding({ left: 16, right: 16 })



      // Header

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/ConnectionsPage' })

          })

        Text('Connect to Computer')

          .fontSize(20)

          .fontWeight(FontWeight.Medium)

          .margin({ left: 16 })

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })



      // Main Content

      Column() {

        if (this.isWaiting) {

          LoadingProgress()

            .width(80)

            .height(80)

            .color('#0000FF')

        }

        Text('Waiting...')

          .fontSize(16)

          .margin({ top: 16 })

        Text('Open your computer browser and enter below')

          .fontSize(14)

          .margin({ top: 24, bottom: 16 })

        Button('http://john-312-ru')

          .width('90%')

          .height(48)

          .backgroundColor('#4B6BFE')

          .borderRadius(8)

      }

      .width('100%')

      .layoutWeight(1)

      .justifyContent(FlexAlign.Center)

      .alignItems(HorizontalAlign.Center)



      // Bottom Navigation

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/HomeGridPage' })

          })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/RecentsPage' })

          })

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

      }

      .width('100%')

      .height(56)

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor('#FFFFFF')

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}