import router from '@ohos.router';



interface Logistics {

  company: string;

  deliveryTime?: string;

  info?: string;

}



interface TrackingInfo {

  title?: string;

  store?: string;

  date: string;

  status: string;

  logistics?: Logistics;

  action: string;

  address?: string;

}



@Entry

@Component

struct LogisticsPage {

  @State trackingInfo: TrackingInfo[] = [

    {

      title: '查快递',

      date: '',

      status: '',

      action: '暂无快递更新'

    },

    {

      store: 'romoss旗舰店',

      date: '24/07/10',

      status: '即将确认收货',

      logistics: {

        company: '申通快递',

        deliveryTime: '2024年07月02日 12:27'

      },

      action: '延长收货'

    },

    {

      title: '订单物流消息',

      date: '24/07/06',

      status: '即将自动确认收货',

      address: '关山街道珞瑜路1037号华中科技大学东11舍407',

      action: '查看详情'

    },

    {

      store: '菜鸟',

      date: '24/04/25',

      status: '包裹签收通知',

      logistics: {

        company: '韵达快递',

        info: '包裹已被签收，点击查看签收详情>>'

      },

      action: '查看详情'

    }

  ]



  @State categories: string[] = ['物流', '售后', '提醒', '互动', '赞评', '优惠', '其他']



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/MessagePage' })

          })

        Text('通知').fontSize(20).fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').padding(10).backgroundColor(Color.White)



      Row() {

        ForEach(this.categories, (category: string) => {

          Text(category)

            .fontSize(14)

            .fontColor(Color.Gray)

            .margin({ right: 15 })

        })

      }.width('100%').padding(10)



      Scroll() {

        Column() {

          ForEach(this.trackingInfo, (item: TrackingInfo) => {

            Column() {

              if (item.title) {

                Row() {

                  Text(item.title).fontSize(16).fontWeight(FontWeight.Bold)

                  Blank()

                  Text(item.action).fontSize(14).fontColor(Color.Gray)

                }.width('100%').padding({ top: 10, bottom: 10 })

              } else {

                Row() {

                  Image($r('app.media.template')).width(40).height(40)

                  Column() {

                    Text(item.store || '').fontSize(16).fontWeight(FontWeight.Bold)

                    Text(item.date).fontSize(14).fontColor(Color.Gray)

                  }.margin({ left: 10 })

                  Blank()

                  Text('...').fontSize(20).fontColor(Color.Gray)

                }.width('100%').padding({ top: 10, bottom: 10 })



                Text(item.status).fontSize(18).fontWeight(FontWeight.Bold).margin({ top: 5 })



                if (item.logistics) {

                  Text(`物流公司：${item.logistics.company}`).fontSize(14).margin({ top: 5 })

                  if (item.logistics.deliveryTime) {

                    Text(`签收时间：${item.logistics.deliveryTime}`).fontSize(14).margin({ top: 5 })

                  }

                  if (item.logistics.info) {

                    Text(item.logistics.info).fontSize(14).margin({ top: 5 })

                  }

                }



                if (item.address) {

                  Text(`收货地址：${item.address}`).fontSize(14).margin({ top: 5 })

                }



                Button(item.action)

                  .backgroundColor('#FF6B00')

                  .fontColor(Color.White)

                  .margin({ top: 10 })

              }

            }.width('100%').padding(10).backgroundColor(Color.White).margin({ bottom: 10 })

          })

        }.width('100%')

      }.height('80%')

    }.width('100%').backgroundColor('#F5F5F5')

  }

}