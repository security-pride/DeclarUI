import router from '@ohos.router';



@Entry

@Component

struct HomePage {

  @State currentIndex: number = 0;

  @State searchText: string = '';



  build() {

    Column() {

      Row() {

        Text('烟台').fontSize(16).fontWeight(FontWeight.Bold)

        Text('24°C').fontSize(14).margin({ left: 8 })

      }.width('100%').padding({ left: 16, top: 8 })



      Row() {

        Search({ value: this.searchText, placeholder: '支付宝会员' })

          .width('80%')

          .height(40)

          .backgroundColor('#F5F5F5')

          .placeholderColor('#999999')

          .placeholderFont({ size: 14 })

          .onChange((value: string) => {

            this.searchText = value

          })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

      }.width('100%').padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('扫一扫').fontSize(12).margin({ top: 4 })

        }.onClick(() => {

          // Handle scan action

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('收付款').fontSize(12).margin({ top: 4 })

        }.onClick(() => {

          router.pushUrl({ url: 'pages/TradePage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('出行').fontSize(12).margin({ top: 4 })

          Text('领油惠').fontSize(10).margin({ top: 2 }).fontColor(Color.Red)

        }.onClick(() => {

          // Handle travel action

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('卡包').fontSize(12).margin({ top: 4 })

        }.onClick(() => {

          // Handle wallet action

        })

      }.width('100%').justifyContent(FlexAlign.SpaceAround).padding({ top: 16, bottom: 16 })



      Grid() {

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('饿了么').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('口碑团购').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('市民中心').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('淘票票').fontSize(12).margin({ top: 4 })

          }.onClick(() => {

            router.pushUrl({ url: 'pages/TicketsPage' })

          })

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('转账').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('信用卡还款').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('手机充值').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('余额宝').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('高德打车').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('生活缴费').fontSize(12).margin({ top: 4 })

          }.onClick(() => {

            router.pushUrl({ url: 'pages/UtilityBillsPage' })

          })

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('火车票机票').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('蚂蚁森林').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('芭芭农场').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('我的小程序').fontSize(12).margin({ top: 4 })

          }

        }

        GridItem() {

          Column() {

            Image($r('app.media.template')).width(40).height(40)

            Text('更多').fontSize(12).margin({ top: 4 })

          }

        }

      }

      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')

      .rowsTemplate('1fr 1fr 1fr')

      .columnsGap(8)

      .rowsGap(16)

      .padding({ left: 16, right: 16, top: 16, bottom: 16 })



      Column() {

        Text('最近消息').fontSize(16).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start)

        Text('200条新消息 >').fontSize(14).fontColor(Color.Gray).alignSelf(ItemAlign.End)



        Column() {

          Row() {

            Text('高德打车').fontSize(14).fontWeight(FontWeight.Bold)

            Text('7小时前').fontSize(12).fontColor(Color.Gray)

          }.justifyContent(FlexAlign.SpaceBetween).width('100%')



          Text('自动扣款成功 ¥12.30').fontSize(14).margin({ top: 4 })

        }.alignItems(HorizontalAlign.Start).width('100%').padding(8).backgroundColor(Color.White).borderRadius(8).margin({ top: 8 })



        Column() {

          Row() {

            Text('高德打车').fontSize(14).fontWeight(FontWeight.Bold)

            Text('11小时前').fontSize(12).fontColor(Color.Gray)

          }.justifyContent(FlexAlign.SpaceBetween).width('100%')



          Text('自动扣款成功 ¥34.54，你有支付奖励待领取').fontSize(14).margin({ top: 4 })

        }.alignItems(HorizontalAlign.Start).width('100%').padding(8).backgroundColor(Color.White).borderRadius(8).margin({ top: 8 })

      }.width('100%').padding(16)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('首页').fontSize(12).margin({ top: 4 })

        }.onClick(() => this.currentIndex = 0)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('理财').fontSize(12).margin({ top: 4 })

        }.onClick(() => this.currentIndex = 1)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('视频').fontSize(12).margin({ top: 4 })

        }.onClick(() => this.currentIndex = 2)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('消息').fontSize(12).margin({ top: 4 })

        }.onClick(() => this.currentIndex = 3)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的').fontSize(12).margin({ top: 4 })

        }.onClick(() => {

          router.pushUrl({ url: 'pages/ProfilePage' })

        })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor(Color.White)

      .position({ x: 0, y: '100%' })

      .translate({ y: -56 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F5F5F5')

  }

}