import router from '@ohos.router';



interface RecentItem {

  type: string;

  src: Resource;

  text: string;

  date: string;

}



@Entry

@Component

struct RecentsPage {

  @State items: RecentItem[] = [

    { type: 'image', src: $r('app.media.template'), text: 'Ricardo', date: '15.Feb 2020' },

    { type: 'video', src: $r('app.media.template'), text: 'Sand pot', date: '25.Feb 2020' },

    { type: 'image', src: $r('app.media.template'), text: 'Subramani', date: '15.Feb 2020' },

    { type: 'image', src: $r('app.media.template'), text: 'Ricardo', date: '15.Feb 2020' },

    { type: 'image', src: $r('app.media.template'), text: 'Unknown', date: 'Unknown' }

  ]



  build() {

    Column() {

      Row() {

        Text('Recents')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

        Row() {

          Text('Select')

            .fontSize(16)

            .fontColor(Color.Blue)

        }

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Scroll() {

        Grid() {

          ForEach(this.items, (item: RecentItem, index: number) => {

            GridItem() {

              Stack({ alignContent: Alignment.BottomStart }) {

                if (item.type === 'image') {

                  Image(item.src)

                    .objectFit(ImageFit.Cover)

                } else if (item.type === 'video') {

                  Image(item.src)

                    .objectFit(ImageFit.Cover)

                  Image($r('app.media.template'))

                    .width(40)

                    .height(40)

                    .position({ x: '50%', y: '50%' })

                    .translate({ x: '-50%', y: '-50%' })

                }

                Column() {

                  Text(item.text)

                    .fontSize(14)

                    .fontColor(Color.White)

                  Text(item.date)

                    .fontSize(12)

                    .fontColor(Color.White)

                }

                .padding(8)

                .backgroundColor('rgba(0,0,0,0.5)')

                .width('100%')

              }

              .width('100%')

              .aspectRatio(1)

              .borderRadius(8)

            }

          })

        }

        .columnsTemplate('1fr 1fr')

        .columnsGap(8)

        .rowsGap(8)

        .padding(16)

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

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomeGridPage' })

        })



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Recent')

            .fontSize(12)

            .fontColor(Color.Blue)

        }



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Add')

            .fontSize(12)

        }



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Wifi')

            .fontSize(12)

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/ConnectionsPage' })

        })



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Stats')

            .fontSize(12)

        }

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .padding({ top: 8, bottom: 8 })

      .backgroundColor(Color.White)

    }

  }

}