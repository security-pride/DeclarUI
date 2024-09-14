import router from '@ohos.router';



@Entry

@Component

struct NewsPage {

  @State currentIndex: number = 0;

  @State hotSearchItems: string[] = [

    '400多件裙子退货店家损失近80...',

    '几千块手机为何离不开几块钱的...',

    '全面深化改革的实践续篇',

    '抓娃娃票房',

    '小天愿意跟相柳走不是因为誓言'

  ];



  build() {

    Column() {

      Row() {

        Text("夸刻日报")

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width('100%')

      .padding(10)



      Scroll() {

        Column() {

          // Early News Section

          Column() {

            Row() {

              Text("07")

                .fontSize(24)

                .fontWeight(FontWeight.Bold)

              Column() {

                Text("16")

                  .fontSize(16)

                Text("武汉市 30°C")

                  .fontSize(12)

              }

              .alignItems(HorizontalAlign.Start)

              .margin({ left: 5 })

            }

            .width('100%')

            .backgroundColor('#F0F0F0')

            .padding(10)



            Text("早报")

              .fontSize(18)

              .fontWeight(FontWeight.Bold)

              .margin({ top: 10, bottom: 10 })



            Image($r('app.media.template'))

              .width('100%')

              .height(200)

              .objectFit(ImageFit.Cover)



            Text("余承东回应常挨骂正非批：有误解")

              .fontSize(16)

              .margin({ top: 10, bottom: 5 })



            Text("如何扭转地方财政收缩态势？专家建议")

              .fontSize(16)

              .margin({ top: 5, bottom: 5 })



            Text("美特勤局局长：调整特朗普贴身警卫")

              .fontSize(16)

              .margin({ top: 5, bottom: 10 })

          }

          .width('100%')

          .backgroundColor(Color.White)

          .borderRadius(10)

          .margin({ bottom: 20 })



          // Hot Search Section

          Column() {

            Text("热搜榜")

              .fontSize(18)

              .fontWeight(FontWeight.Bold)

              .margin({ bottom: 10 })



            ForEach(this.hotSearchItems.slice(0, 5), (item: string, index: number) => {

              Row() {

                Text(`${index + 1}.`)

                  .fontSize(16)

                  .fontWeight(FontWeight.Bold)

                  .width(30)

                Text(item)

                  .fontSize(16)

                  .layoutWeight(1)

                Text(index === 0 ? "170w" : index === 1 ? "109w" : index === 2 ? "89w" : index === 3 ? "87w" : "45w")

                  .fontSize(14)

                  .fontColor(Color.Gray)

              }

              .width('100%')

              .padding(10)

              .backgroundColor(index % 2 === 0 ? '#F0F0F0' : Color.White)

            })

          }

          .width('100%')

          .backgroundColor(Color.White)

          .borderRadius(10)

          .margin({ bottom: 20 })



          // Farm and Welfare Center Buttons

          Row() {

            Button({ type: ButtonType.Normal, stateEffect: true }) {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('芭芭农场').fontSize(16).margin({ left: 5 })

              }

            }

            .backgroundColor('#E0F0E0')

            .height(50)

            .layoutWeight(1)



            Button({ type: ButtonType.Normal, stateEffect: true }) {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('福利中心').fontSize(16).margin({ left: 5 })

              }

            }

            .backgroundColor('#FFE0E0')

            .height(50)

            .layoutWeight(1)

            .margin({ left: 10 })

          }

          .width('100%')

          .margin({ bottom: 20 })



          // Special Topic Section

          Column() {

            Text("专题")

              .fontSize(18)

              .fontWeight(FontWeight.Bold)

              .margin({ bottom: 10 })



            Image($r('app.media.template'))

              .width('100%')

              .height(200)

              .objectFit(ImageFit.Cover)



            Text("特朗普遇刺右耳受伤")

              .fontSize(16)

              .margin({ top: 10, bottom: 10 })

          }

          .width('100%')

          .backgroundColor(Color.White)

          .borderRadius(10)

        }

        .width('100%')

        .padding(10)

      }

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('首页').fontSize(12)

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('精选').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('学习').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('扫一扫').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('文件').fontSize(12)

        }

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor(Color.White)

      .height('10%')

    }

  }

}