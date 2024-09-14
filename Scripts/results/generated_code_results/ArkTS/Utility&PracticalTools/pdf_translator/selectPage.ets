import router from '@ohos.router';
@Entry

@Component

struct SelectPage {

  @State conversionOptions: string[] = ['DOC TO PDF', 'IMG TO PDF']



  build() {

    Column() {

      Row() {

        Text('PDF file management')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

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

      .backgroundColor('#F1F3F5')



      Scroll() {

        Column() {

          ForEach(this.conversionOptions, (option: string) => {

            Button() {

              Row() {

                Image($r('app.media.template'))

                  .width(40)

                  .height(40)

                  .margin({ right: 16 })

                Text(option)

                  .fontSize(16)

              }

            }

            .width('100%')

            .height(80)

            .margin({ top: 16 })

            .backgroundColor(Color.White)

            .onClick(() => {

              this.handleConversion(option)

            })

          })

        }

        .width('100%')

        .padding(16)

      }

      .layoutWeight(1)



      Button() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width(56)

      .height(56)

      .position({ x: '90%', y: '90%' })

      .backgroundColor('#007DFF')

      .onClick(() => {

        router.pushUrl({ url: 'pages/homePage' })

      })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }



  private handleConversion(option: string) {

    // Handle conversion logic here

    console.log(`Converting using ${option}`)

    // After conversion, navigate back to home page

    router.pushUrl({ url: 'pages/homePage' })

  }

}