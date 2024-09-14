import router from '@ohos.router';



@Entry

@Component

struct SharePage {

  @State isShareOptionsVisible: boolean = true;



  build() {

    Column() {

      Row() {

        Text('Following')

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

        Text('For You')

          .fontSize(16)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16 })

      }

      .width('100%')

      .justifyContent(FlexAlign.Center)

      .padding({ top: 8, bottom: 8 })



      Image($r('app.media.template'))

        .width('100%')

        .aspectRatio(9 / 16)

        .objectFit(ImageFit.Cover)



      Column() {

        Text('Share to')

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

          .width('100%')

          .padding({ left: 16, top: 16, bottom: 8 })



        Grid() {

          GridItem() {

            Column() {

              Image($r('app.media.template')).width(50).height(50)

              Text('WhatsApp').fontSize(12)

            }

          }

          GridItem() {

            Column() {

              Image($r('app.media.template')).width(50).height(50)

              Text('WhatsApp status').fontSize(12)

            }

          }

          GridItem() {

            Column() {

              Image($r('app.media.template')).width(50).height(50)

              Text('Message').fontSize(12)

            }

          }

          GridItem() {

            Column() {

              Image($r('app.media.template')).width(50).height(50)

              Text('SMS').fontSize(12)

            }

          }

          GridItem() {

            Column() {

              Image($r('app.media.template')).width(50).height(50)

              Text('Messenger').fontSize(12)

            }

          }

          GridItem() {

            Column() {

              Image($r('app.media.template')).width(50).height(50)

              Text('Instagram').fontSize(12)

            }

          }

        }

        .columnsTemplate('1fr 1fr 1fr')

        .rowsTemplate('1fr 1fr')

        .width('100%')

        .height(200)

        .padding({ left: 16, right: 16 })



        Divider().color(Color.Gray).opacity(0.2).margin({ top: 16, bottom: 16 })



        Column({ space: 24 }) {

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Report').fontSize(16).margin({ left: 16 })

          }

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Not interested').fontSize(16).margin({ left: 16 })

          }

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Save video').fontSize(16).margin({ left: 16 })

          }

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Duet').fontSize(16).margin({ left: 16 })

          }

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('React').fontSize(16).margin({ left: 16 })

          }

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Add to Favorites').fontSize(16).margin({ left: 16 })

          }

        }

        .width('100%')

        .padding({ left: 16, right: 16 })

      }

      .width('100%')

      .backgroundColor(Color.White)

      .borderRadius({ topLeft: 16, topRight: 16 })

      .position({ y: '45%' })



      Button('Cancel')

        .width('90%')

        .height(50)

        .backgroundColor(Color.White)

        .fontColor(Color.Black)

        .margin({ bottom: 16 })

        .onClick(() => {

          router.back()

        })

    }

    .width('100%')

    .height('100%')

    .backgroundColor(Color.Black)

  }

}