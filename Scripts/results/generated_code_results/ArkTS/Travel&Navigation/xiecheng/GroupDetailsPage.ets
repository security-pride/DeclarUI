import router from '@ohos.router';



interface DateCardProps {

  day: string;

}



interface TourDetailsProps {

  title: string;

  price: string;

  description: string;

  rating: string;

  ratingText: string;

}



interface ServiceProps {

  text: string;

}



interface DateDisplayProps {

  date: string;

}



@Entry

@Component

struct GroupDetailsPage {

  @State tourDetails: TourDetailsProps = {

    title: '烟台+蓬莱区2日1晚拼小团',

    price: '¥965/人起',

    description: '6人MiniGroup帆船出海/黄渤海分界线/投喂海鸥--"小马尔代夫"--养马岛 | 中国四大名楼--蓬莱阁 | 专业司兼导 | 宝藏机位 | 千与千寻同款入海轨道/烟台古城',

    rating: '5.0分',

    ratingText: '超棒'

  }



  @Builder

  DateCard(props: DateCardProps) {

    Column() {

      Text(props.day)

        .fontSize(14)

        .fontWeight(FontWeight.Medium)

    }

    .width(60)

    .height(60)

    .backgroundColor('#F0F0F0')

    .borderRadius(8)

    .justifyContent(FlexAlign.Center)

  }



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 8 })

        Text('达人探线')

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })



      Scroll() {

        Column() {

          Image($r('app.media.template'))

            .width('100%')

            .height(200)

            .objectFit(ImageFit.Cover)



          Column() {

            Text(this.tourDetails.title)

              .fontSize(20)

              .fontWeight(FontWeight.Bold)

              .margin({ top: 16, bottom: 8 })



            Row() {

              Text(this.tourDetails.price)

                .fontSize(18)

                .fontColor('#FF6B3B')

              Text('已减¥100')

                .fontSize(14)

                .fontColor('#FF6B3B')

                .margin({ left: 8 })

              Text('限时促销')

                .fontSize(12)

                .fontColor('#FF6B3B')

                .backgroundColor('#FFF0E5')

                .padding(4)

                .borderRadius(4)

                .margin({ left: 8 })

            }



            Text(this.tourDetails.description)

              .fontSize(14)

              .margin({ top: 8, bottom: 16 })

              .lineHeight(20)



            Row() {

              Text(this.tourDetails.rating)

                .fontSize(16)

                .fontWeight(FontWeight.Bold)

              Text(this.tourDetails.ratingText)

                .fontSize(14)

                .margin({ left: 8 })

              Text('酒店很舒服')

                .fontSize(14)

                .margin({ left: 8 })

            }

            .margin({ bottom: 16 })



            Row() {

              this.DateCard({ day: '星期六' })

              this.DateCard({ day: '星期日' })

              this.DateCard({ day: '星期一' })

              this.DateCard({ day: '星期二' })

              this.DateCard({ day: '全部班期' })

            }

            .justifyContent(FlexAlign.SpaceBetween)

            .width('100%')

            .margin({ bottom: 16 })



            Row() {

              this.ServiceItem('放心游')

              this.ServiceItem('无购物')

              this.ServiceItem('成团保障')

              this.ServiceItem('提前2天免费退')

            }

            .justifyContent(FlexAlign.SpaceBetween)

            .width('100%')

            .margin({ bottom: 16 })



            Button('立即预订')

              .width('100%')

              .height(48)

              .backgroundColor('#FF6B3B')

              .fontColor(Color.White)

              .onClick(() => {

                router.pushUrl({ url: 'pages/GroupTravelSearchResultPage' })

              })

          }

          .padding(16)

        }

      }

      .scrollBar(BarState.Off)

      .height('80%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('店铺').fontSize(12)

        }

        .alignItems(HorizontalAlign.Center)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('收藏').fontSize(12)

        }

        .alignItems(HorizontalAlign.Center)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('客服').fontSize(12)

        }

        .alignItems(HorizontalAlign.Center)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .position({ y: '92%' })

    }

  }



  @Builder

  ServiceItem(text: string) {

    Text(text)

      .fontSize(12)

      .padding(4)

      .backgroundColor('#F0F0F0')

      .borderRadius(4)

  }

}