import router from '@ohos.router';



interface HotSearchItem {

  title: string;

  views: string;

}



@Entry

@Component

struct NewsPage {

  @State currentDate: string = '07/16';

  @State currentWeather: string = '武汉市 30°C';

  @State hotSearchItems: HotSearchItem[] = [

    { title: '400多件裙子退货店家损失近80...', views: '170w' },

    { title: '几千块手机为何离不开几块钱的...', views: '109w' },

    { title: '全面深化改革的实践续篇', views: '89w' },

    { title: '抓娃娃票房', views: '87w' },

    { title: '小天愿意跟相柳走不是因为誓言', views: '45w' }

  ];



  build() {

    Column() {

      Row() {

        Text('夸克日报')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template'))

          .width(24).height(24)

        Image($r('app.media.template'))

          .width(24).height(24)

        Image($r('app.media.template'))

          .width(24).height(24)

      }

      .width('100%')

      .padding(10)



      Scroll() {

        Column() {

          Row() {

            Column() {

              Text(this.currentDate)

                .fontSize(36)

                .fontWeight(FontWeight.Bold)

              Text(this.currentWeather)

                .fontSize(14)

            }

            .alignItems(HorizontalAlign.Start)



            Column() {

              Text('早报')

                .fontSize(24)

                .fontWeight(FontWeight.Bold)

              Text('· 余承东回应常揉任正非批:有误解')

                .fontSize(14)

                .margin({ top: 5 })

              Text('· 如何扭转地方财政收缩态势？专家建议')

                .fontSize(14)

                .margin({ top: 5 })

              Text('· 美特勤局局长:调整特朗普贴身警卫')

                .fontSize(14)

                .margin({ top: 5 })

            }

            .alignItems(HorizontalAlign.Start)

            .margin({ left: 20 })

          }

          .width('100%')

          .height(150)

          .backgroundColor('#0099FF')

          .borderRadius(10)

          .padding(10)



          Column() {

            Row() {

              Text('热搜榜')

                .fontSize(18)

                .fontWeight(FontWeight.Bold)

              Blank()

              Text('热搜')

                .fontSize(14)

                .backgroundColor('#333333')

                .borderRadius(15)

                .padding(5)

              Text('微博')

                .fontSize(14)

                .backgroundColor('#333333')

                .borderRadius(15)

                .padding(5)

                .margin({ left: 5 })

              Text('知乎')

                .fontSize(14)

                .backgroundColor('#333333')

                .borderRadius(15)

                .padding(5)

                .margin({ left: 5 })

            }

            .width('100%')



            List() {

              ForEach(this.hotSearchItems, (item: HotSearchItem, index: number) => {

                ListItem() {

                  Row() {

                    Text((index + 1).toString())

                      .fontSize(16)

                      .fontWeight(FontWeight.Bold)

                      .width(30)

                    Text(item.title)

                      .fontSize(16)

                      .layoutWeight(1)

                    Text(item.views)

                      .fontSize(14)

                      .fontColor(Color.Gray)

                  }

                  .width('100%')

                  .padding(10)

                }

              })

            }

            .width('100%')

          }

          .margin({ top: 20 })



          Row() {

            Column() {

              Image($r('app.media.template'))

                .width(40).height(40)

              Text('芭芭农场')

                .fontSize(14)

              Text('新鲜水果包邮到家')

                .fontSize(12)

                .fontColor(Color.Gray)

            }

            .alignItems(HorizontalAlign.Center)

            .layoutWeight(1)



            Column() {

              Image($r('app.media.template'))

                .width(40).height(40)

              Text('福利中心')

                .fontSize(14)

              Text('现金红包天天领取')

                .fontSize(12)

                .fontColor(Color.Gray)

            }

            .alignItems(HorizontalAlign.Center)

            .layoutWeight(1)

          }

          .width('100%')

          .margin({ top: 20 })



          Column() {

            Text('专题')

              .fontSize(18)

              .fontWeight(FontWeight.Bold)

              .alignSelf(ItemAlign.Start)

            Image($r('app.media.template'))

              .width('100%')

              .height(200)

            Text('特朗普遇刺右耳受伤')

              .fontSize(16)

              .fontWeight(FontWeight.Bold)

              .margin({ top: 10 })

          }

          .margin({ top: 20 })

        }

        .width('100%')

        .padding(10)

      }

      .height('80%')



      Button('返回主页')

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })

        .width('100%')

        .margin({ top: 10 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}