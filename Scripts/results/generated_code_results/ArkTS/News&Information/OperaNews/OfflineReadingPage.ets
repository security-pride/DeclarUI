import router from '@ohos.router';



@Entry

@Component

struct OfflineReadingPage {

  @State autoDownloadWiFi: boolean = false;



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/MePage' })

          })

        Text('Offline reading')

          .fontSize(20)

          .fontWeight(FontWeight.Medium)

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 16 })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })



      Column() {

        Row() {

          Text('Automatic download on WiFi')

            .fontSize(16)

          Blank()

          Toggle({ type: ToggleType.Switch, isOn: this.autoDownloadWiFi })

            .onChange((isOn: boolean) => {

              this.autoDownloadWiFi = isOn;

            })

        }

        .width('100%')

        .padding({ left: 16, right: 16, top: 12, bottom: 12 })



        Row() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

            .margin({ right: 16 })

          Text('Download articles')

            .fontSize(16)

          Blank()

          Button('DOWNLO...')

            .fontSize(14)

            .fontColor(Color.Blue)

            .backgroundColor(Color.Transparent)

            .onClick(() => {

              // Handle download action

            })

        }

        .width('100%')

        .padding({ left: 16, right: 16, top: 12, bottom: 12 })

      }

      .width('100%')



      Scroll() {

        Column() {

          Image($r('app.media.template'))

            .width(100)

            .height(100)

            .margin({ top: 40, bottom: 16 })

          Text('Download the latest news in 10 seconds')

            .fontSize(16)

            .textAlign(TextAlign.Center)

        }

        .width('100%')

        .justifyContent(FlexAlign.Center)

        .alignItems(HorizontalAlign.Center)

      }

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Home')

            .fontSize(12)

        }

        .width('50%')

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Me')

            .fontSize(12)

            .fontColor(Color.Red)

        }

        .width('50%')

        .onClick(() => {

          router.pushUrl({ url: 'pages/MePage' })

        })

      }

      .width('100%')

      .height(56)

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}