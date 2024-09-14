import router from '@ohos.router';



@Entry

@Component

struct PillIdentifierPage {

  @State searchText: string = '';

  @State selectedShape: string = '';

  @State shapes: string[] = ['Round', 'Oblong', '3 Sided', 'Square', 'Rectangle', 'Diamond', '5 Sided', '6 Sided', '7 Sided', '8 Sided', 'Other'];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/HomePage' })

          })

        Text('Pill Identifier')

          .fontSize(20)

          .fontWeight(FontWeight.Medium)

          .margin({ left: 16 })

      }

      .width('100%')

      .height(56)

      .backgroundColor('#F1F3F5')



      Scroll() {

        Column() {

          Search({ value: this.searchText, placeholder: 'Text or imprint on pill' })

            .height(48)

            .backgroundColor(Color.White)

            .margin({ top: 16, left: 16, right: 16 })

            .onChange((value: string) => {

              this.searchText = value

            })



          Text('Shape')

            .fontSize(16)

            .fontWeight(FontWeight.Medium)

            .margin({ top: 24, left: 16 })



          Text('Select the shape that best matches your prescription or OTC drug')

            .fontSize(14)

            .fontColor(Color.Gray)

            .margin({ top: 8, left: 16, right: 16 })



          Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {

            ForEach(this.shapes, (shape: string) => {

              Column() {

                if (shape === 'Other') {

                  Text('?')

                    .width(48)

                    .height(48)

                    .fontSize(24)

                    .textAlign(TextAlign.Center)

                    .borderRadius(24)

                    .borderWidth(1)

                    .borderColor(Color.Gray)

                } else {

                  Image($r('app.media.template'))

                    .width(48)

                    .height(48)

                    .objectFit(ImageFit.Contain)

                }

                Text(shape)

                  .fontSize(12)

                  .margin({ top: 4 })

              }

              .width('33.33%')

              .alignItems(HorizontalAlign.Center)

              .margin({ top: 16 })

              .onClick(() => {

                this.selectedShape = shape

              })

            })

          }

          .margin({ left: 16, right: 16 })



          Button('View Results')

            .width('90%')

            .height(48)

            .margin({ top: 24, bottom: 24 })

            .onClick(() => {

              router.pushUrl({ url: 'pages/IdentifyResultPage' })

            })

        }

      }

      .height('85%')

    }

  }

}