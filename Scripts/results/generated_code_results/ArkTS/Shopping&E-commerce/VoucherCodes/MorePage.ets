import router from '@ohos.router';



interface RewardOffer {

  logo: Resource;

  title: string;

  type: string;

  expiryDate: string;

}



@Entry

@Component

struct MorePage {

  @State rewardOffers: RewardOffer[] = [

    {

      logo: $r('app.media.template'),

      title: 'Exclusive Great Savings with Prime Day Deals Plus a £3...',

      type: 'Online Reward',

      expiryDate: 'Ends 22 Jul'

    },

    {

      logo: $r('app.media.template'),

      title: 'Exclusive Free £10 Currys Voucher with Orders Over £...',

      type: 'Online Reward',

      expiryDate: 'Ends 1 Aug'

    },

    {

      logo: $r('app.media.template'),

      title: 'Exclusive Free £3 Amazon Voucher with Orders Over £...',

      type: 'Online Reward',

      expiryDate: 'Ends today'

    },

    {

      logo: $r('app.media.template'),

      title: 'Exclusive 15% off Selected Hotel Bookings: Free £5 A...',

      type: 'Online Reward',

      expiryDate: 'Ends 1 Aug'

    }

  ]



  build() {

    Column() {

      // Navigation Bar

      Row() {

        Button() {

          Image($r('app.media.template')).width(24).height(24)

        }.onClick(() => {

          router.back()

        }).backgroundColor(Color.Transparent)



        Text('Reward Offers').fontSize(20).fontWeight(FontWeight.Bold)

      }.width('100%').height(56).padding({ left: 16, right: 16 }).backgroundColor('#FFFF00')



      // Reward Offers List

      List() {

        ForEach(this.rewardOffers, (offer: RewardOffer) => {

          ListItem() {

            Row() {

              Image(offer.logo).width(48).height(48).margin({ right: 16 })

              Column() {

                Text(offer.title).fontSize(16).fontWeight(FontWeight.Medium).maxLines(2).textOverflow({ overflow: TextOverflow.Ellipsis })

                Row() {

                  Text(offer.type).fontSize(14).fontColor(Color.Orange)

                  Blank()

                  Text(offer.expiryDate).fontSize(14).fontColor(Color.Gray)

                }.width('100%').margin({ top: 4 })

              }.layoutWeight(1)

            }.width('100%').padding(16).backgroundColor(Color.White).borderRadius(8).margin({ bottom: 8 })

          }

        }, (item: RewardOffer) => JSON.stringify(item))

      }.width('100%').height('80%').margin({ top: 16 })



      // Bottom Navigation Bar

      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Discover').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          // Navigate to Discover page

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Search').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          router.pushUrl({ url: 'pages/SearchPage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('VIP').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          // Navigate to VIP page

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Account').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          router.pushUrl({ url: 'pages/AccountPage' })

        })

      }.width('100%').height(56).backgroundColor(Color.White)

    }.width('100%').height('100%')

  }

}