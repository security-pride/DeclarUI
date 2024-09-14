import router from '@ohos.router';



interface Category {

  name: string;

  icon: Resource;

}



interface Banner {

  title: string;

  subtitle: string;

  date: string;

  image: Resource;

}



interface Message {

  store?: string;

  title?: string;

  date: string;

  content: string;

  unreadCount?: number;

  image: Resource;

}



@Entry

@Component

struct MessagePage {

  @State categories: Category[] = [

    { name: '交易物流', icon: $r('app.media.template') },

    { name: '售后', icon: $r('app.media.template') },

    { name: '提醒', icon: $r('app.media.template') },

    { name: '互动', icon: $r('app.media.template') }

  ]

  @State banner: Banner = {

    title: '热门活动抢先看',

    subtitle: '更多优惠尽在掌握',

    date: '6.1-8.31',

    image: $r('app.media.template')

  }

  @State recentMessages: Message[] = [

    { store: 'romoss旗舰店', date: '24/07/03', content: '商品使用说明', unreadCount: 4, image: $r('app.media.template') },

    { title: '订阅号消息', date: '24/06/13', content: 'COURTMAN野球帝:新品揭晓，所有等待都值得。', image: $r('app.media.template') },

    { store: 'jELLYCAT海外旗舰店', date: '24/04/03', content: 'Jellycat 2024新生系列焕新上市！会员臻享...', unreadCount: 3, image: $r('app.media.template') },

    { store: 'YOMIK', date: '24/03/25', content: '亲，对藕香抹微云、的服务满意吗？', unreadCount: 1, image: $r('app.media.template') },

    { store: 'Starbucks星巴克官方旗舰店', date: '24/03/19', content: '亲爱的，你感兴趣的宝贝降价啦，不要错过限...', unreadCount: 4, image: $r('app.media.template') },

    { store: '良品铺子旗舰店', date: '24/03/13', content: '周三会员福利日！千万别错过！', unreadCount: 5, image: $r('app.media.template') },

    { store: 'jELLYCAT旗舰店', date: '24/02/22', content: '龙腾新岁，开工大吉！入会臻享爆品优先购。', unreadCount: 2, image: $r('app.media.template') }

  ]



  build() {

    Column() {

      Row() {

        Text('消息').fontSize(20).fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })

        Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })

      }.width('100%').padding(16)



      Row() {

        ForEach(this.categories, (category: Category) => {

          Column() {

            Image(category.icon).width(40).height(40)

            Text(category.name).fontSize(14).margin({ top: 4 })

          }.width('25%').height(80)

        })

      }.width('100%').backgroundColor('#333333').padding(10)



      Row() {

        Image(this.banner.image).width(40).height(40)

        Column() {

          Text(this.banner.title).fontSize(16).fontWeight(FontWeight.Bold)

          Text(this.banner.subtitle).fontSize(14).fontColor(Color.Gray)

        }.layoutWeight(1).margin({ left: 10 })

        Text(this.banner.date).fontSize(14).fontColor(Color.Gray)

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').backgroundColor('#333333').padding(10)



      Text('两周前的消息').fontSize(14).fontColor(Color.Gray).width('100%').padding(10)



      List() {

        ForEach(this.recentMessages, (message: Message) => {

          ListItem() {

            Row() {

              Image(message.image).width(50).height(50)

              Column() {

                Row() {

                  Text(message.store || message.title).fontSize(16).fontWeight(FontWeight.Bold)

                  Blank()

                  Text(message.date).fontSize(14).fontColor(Color.Gray)

                }

                Text(message.content).fontSize(14).fontColor(Color.Gray).margin({ top: 4 })

              }.layoutWeight(1).margin({ left: 10 })

              if (message.unreadCount) {

                Text(`${message.unreadCount}`).fontSize(12).fontColor(Color.White)

                  .backgroundColor(Color.Red).borderRadius(10).width(20).height(20).textAlign(TextAlign.Center)

              }

            }.width('100%').padding(10)

          }.backgroundColor(Color.Black)

            .onClick(() => {

              if (message.store === 'romoss旗舰店') {

                router.pushUrl({ url: 'pages/LogisticsPage' })

              }

            })

        })

      }.width('100%').height('70%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('首页').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('逛逛').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('消息').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('购物车').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/CartPage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的淘宝').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/ProfilePage' })

        })

      }.width('100%').justifyContent(FlexAlign.SpaceAround).height('10%').backgroundColor(Color.Black)

    }.width('100%').height('100%').backgroundColor(Color.Black)

  }

}