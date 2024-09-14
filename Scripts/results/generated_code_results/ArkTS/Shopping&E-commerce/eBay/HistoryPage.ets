import router from '@ohos.router';



@Entry

@Component

struct HistoryPage {

  @State searchText: string = '';



  build() {

    Column() {

      Row() {

        Button() {

          Image($r('app.media.template')).width(24).height(24)

        }

        .width(48).height(48)

        .onClick(() => {

          router.pushUrl({ url: 'pages/ProfilePage' })

        })



        Text('购买记录').fontSize(20).fontWeight(FontWeight.Bold)



        Blank()



        Button() {

          Image($r('app.media.template')).width(24).height(24)

        }

        .width(48).height(48)



        Button() {

          Image($r('app.media.template')).width(24).height(24)

        }

        .width(48).height(48)

      }

      .width('100%')

      .padding({ left: 16, right: 16 })



      Row() {

        Image($r('app.media.template')).width(24).height(24)

        TextInput({ placeholder: '查找', text: this.searchText })

          .width('80%')

          .onChange((value: string) => {

            this.searchText = value

          })

        Text('缩小搜索范围').fontSize(14).fontColor(Color.Blue)

      }

      .width('100%')

      .padding(16)



      Scroll() {

        Column() {

          this.HistoryItem('Pack of 5 | Ottogi Jin Ramen Noodle (Mild) 120g (Pack of 5)', 'GBP 14.99', '2022年10月8日', '已送达', '购买相似物品')

          this.HistoryItem('Knife Sharpening Steel Rod Sharpener Honing Stick chef tool high quality', 'GBP 3.99', '2022年1月13日', '已发货', '再次购买')

          this.HistoryItem('Large Lightweight Wheeled Shopping Trolley Push Cart Luggage Bag with...', 'GBP 9.16', '2021年11月20日', '已送达', '购买相似物品')

          this.HistoryItem('Large Bamboo Chopping Board 38 x 26 cm, Organic Wooden Boards with...', 'GBP 8.54', '2021年11月20日', '已送达', '购买相似物品')

        }

      }

      .width('100%')

      .layoutWeight(1)



      Row() {

        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('主页').fontSize(12)

          }

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('我的eBay').fontSize(12)

          }

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/ProfilePage' })

        })



        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('搜索').fontSize(12)

          }

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/SearchPage' })

        })



        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('通知').fontSize(12)

          }

        }



        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('出售物品').fontSize(12)

          }

        }

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor(Color.White)

      .padding({ top: 8, bottom: 8 })

    }

  }



  @Builder

  HistoryItem(title: string, price: string, date: string, status: string, action: string) {

    Column() {

      Row() {

        Image($r('app.media.template')).width(80).height(80)

        Column() {

          Text(title).fontSize(16).maxLines(2).textOverflow({ overflow: TextOverflow.Ellipsis })

          Text(price).fontSize(18).fontWeight(FontWeight.Bold)

          Text(date).fontSize(14)

          Text(status).fontSize(14).fontColor(Color.Green)

        }

        .layoutWeight(1)

        .alignItems(HorizontalAlign.Start)

        .padding({ left: 16 })

      }



      Button(action)

        .width('100%')

        .height(40)

        .margin({ top: 8 })

        .onClick(() => {

          router.pushUrl({ url: 'pages/ItemPage' })

        })

    }

    .width('100%')

    .padding(16)

    .backgroundColor(Color.White)

    .margin({ bottom: 8 })

  }

}