import router from '@ohos.router';



interface QuickLink {

  title: string;

  icon: Resource;

}



interface PromotionBanner {

  title: string;

  subtitle: string;

  promoCode: string;

  terms: string;

}



interface RecentlyViewedItem {

  title: string;

  price: string;

  image: Resource;

}



@Entry

@Component

struct HomePage {

  @State searchText: string = '';

  @State quickLinks: QuickLink[] = [

    { title: '已保存', icon: $r('app.media.template') },

    { title: '时尚', icon: $r('app.media.template') },

    { title: '探索（全新！）', icon: $r('app.media.template') }

  ];

  @State promotionBanner: PromotionBanner = {

    title: 'Join the party with 15% off',

    subtitle: 'Celebrate eBay UK with big deals on brands from selected sellers.',

    promoCode: 'SIZZLE15',

    terms: 'Ends 21 July. Min spend £9.99. Max £75 off. T&Cs.'

  };

  @State recentlyViewedItems: RecentlyViewedItem[] = [

    { title: 'Ottogi Jin Ramen Mild Noodles (Pack of 20)', price: 'GBP 22.99', image: $r('app.media.template') },

    { title: 'Spiderman Push Pop for it Bubble Fidget T...', price: 'GBP 4.10', image: $r('app.media.template') }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(80).height(24)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Row() {

        Image($r('app.media.template')).width(24).height(24)

        TextInput({ placeholder: '搜索任何物品', text: this.searchText })

          .width('80%')

          .onChange((value: string) => {

            this.searchText = value;

          })

          .onClick(() => {

            router.pushUrl({ url: 'pages/SearchPage' });

          })

        Image($r('app.media.template')).width(24).height(24)

      }.width('90%').height(40).backgroundColor('#F0F0F0').borderRadius(20).padding({ left: 8, right: 8 })



      Scroll() {

        Column() {

          Row() {

            ForEach(this.quickLinks, (link: QuickLink) => {

              Button({ type: ButtonType.Capsule }) {

                Row() {

                  Image(link.icon).width(24).height(24)

                  Text(link.title).fontSize(14)

                }.width('100%')

              }.height(40).backgroundColor('#F0F0F0')

            })

          }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 16, bottom: 16 })



          Column() {

            Text(this.promotionBanner.title).fontSize(24).fontWeight(FontWeight.Bold)

            Text(this.promotionBanner.subtitle).fontSize(16)

            Button(this.promotionBanner.promoCode).width('60%').height(40).margin({ top: 8, bottom: 8 })

            Text(this.promotionBanner.terms).fontSize(12)

          }.width('100%').padding(16).backgroundColor('#FFC300')



          Row() {

            Text('您最近浏览的物品').fontSize(18).fontWeight(FontWeight.Bold)

            Blank()

            Text('浏览全部').fontSize(14).fontColor(Color.Blue)

          }.width('100%').margin({ top: 16, bottom: 8 })



          ForEach(this.recentlyViewedItems, (item: RecentlyViewedItem) => {

            Row() {

              Stack() {

                Image(item.image).width(120).height(120)

                Image($r('app.media.template')).width(24).height(24).position({ x: 8, y: 8 })

              }

              Column() {

                Text(item.title).fontSize(16).maxLines(2).textOverflow({ overflow: TextOverflow.Ellipsis })

                Text(item.price).fontSize(18).fontWeight(FontWeight.Bold)

              }.layoutWeight(1).margin({ left: 8 })

            }.width('100%').height(140).backgroundColor(Color.White).margin({ bottom: 8 })

            .onClick(() => {

              router.pushUrl({ url: 'pages/ItemPage' });

            })

          })

        }.width('100%').padding({ left: 16, right: 16 })

      }.width('100%').layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('主页').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' });

        })

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的eBay').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/ProfilePage' });

        })

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('搜索').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/SearchPage' });

        })

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('通知').fontSize(12)

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('出售物品').fontSize(12)

        }

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor(Color.White)

      .padding({ top: 8, bottom: 8 })

    }

  }

}