import router from '@ohos.router';



interface TravelCategory {

  icon: Resource;

  label: string;

}



interface Destination {

  image: Resource;

  name: string;

  description: string;

}



@Entry

@Component

struct TravelPage {

  @State selectedTab: number = 0;

  @State searchText: string = '';

  @State visaFreeCountries: string[] = ['泰国', '新加坡', '马尔代夫', '马来西亚', '巴厘'];

  @State categories: TravelCategory[] = [

    { icon: $r('app.media.template'), label: '跟团游' },

    { icon: $r('app.media.template'), label: '私家团' },

    { icon: $r('app.media.template'), label: '当地参团' },

    { icon: $r('app.media.template'), label: '邮轮' },

    { icon: $r('app.media.template'), label: '自由行' },

    { icon: $r('app.media.template'), label: '定制旅行' },

    { icon: $r('app.media.template'), label: '包车游' },

    { icon: $r('app.media.template'), label: '一日游' }

  ];

  @State domesticDestinations: Destination[] = [

    { image: $r('app.media.template'), name: '烟台', description: '蓬莱阁' },

    { image: $r('app.media.template'), name: '新疆', description: '探访我的阿勒泰' },

    { image: $r('app.media.template'), name: '威海', description: '' },

    { image: $r('app.media.template'), name: '山东', description: '' }

  ];

  @State internationalDestinations: Destination[] = [

    { image: $r('app.media.template'), name: '日本', description: '东京' },

    { image: $r('app.media.template'), name: '韩国', description: '首尔' },

    { image: $r('app.media.template'), name: '仙本那', description: '' },

    { image: $r('app.media.template'), name: '泰国', description: '' }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Tabs({ barPosition: BarPosition.Start, index: this.selectedTab }) {

          TabContent() {

            Text('精选').fontSize(16).fontColor(this.selectedTab === 0 ? Color.Blue : Color.Black)

          }.tabBar('精选')

          TabContent() {

            Text('国内游').fontSize(16).fontColor(this.selectedTab === 1 ? Color.Blue : Color.Black)

          }.tabBar('国内游')

          TabContent() {

            Text('出境游').fontSize(16).fontColor(this.selectedTab === 2 ? Color.Blue : Color.Black)

          }.tabBar('出境游')

        }.height('10%')

        .onChange((index: number) => {

          this.selectedTab = index;

        })

        .width('70%')

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').padding(10).justifyContent(FlexAlign.SpaceBetween)



      Row() {

        Image($r('app.media.template')).width(20).height(20)

        TextInput({ placeholder: '目的地/关键词' })

          .width('80%')

          .height(40)

          .backgroundColor('#F5F5F5')

          .margin({ left: 10 })

        Image($r('app.media.template')).width(20).height(20).margin({ left: 10 })

        Text('目的地').fontSize(14).margin({ left: 5 })

      }.width('100%').padding(10)



      Scroll() {

        Column() {

          Text('免签落地签：').fontSize(14).fontWeight(FontWeight.Bold).margin({ top: 10, bottom: 5 })

          Flex({ justifyContent: FlexAlign.Start, wrap: FlexWrap.Wrap }) {

            ForEach(this.visaFreeCountries, (country: string) => {

              Text(country)

                .fontSize(14)

                .padding(5)

                .margin(5)

                .backgroundColor('#F0F0F0')

                .borderRadius(15)

            })

          }



          Grid() {

            ForEach(this.categories, (category: TravelCategory) => {

              GridItem() {

                Column() {

                  Image(category.icon).width(40).height(40)

                  Text(category.label).fontSize(12).margin({ top: 5 })

                }

              }.onClick(() => {

                if (category.label === '跟团游') {

                  router.pushUrl({ url: 'pages/GroupTravelPage' })

                }

              })

            })

          }.columnsTemplate('1fr 1fr 1fr 1fr').rowsGap(10).columnsGap(10).margin({ top: 10 })



          Row() {

            Text('高端游').fontSize(14).fontWeight(FontWeight.Bold)

            Text('亲子游').fontSize(14).fontWeight(FontWeight.Bold).margin({ left: 10 })

            Text('公司团建').fontSize(14).fontWeight(FontWeight.Bold).margin({ left: 10 })

            Text('老友精选').fontSize(14).fontWeight(FontWeight.Bold).margin({ left: 10 })

            Text('周边').fontSize(14).fontWeight(FontWeight.Bold).margin({ left: 10 })

            Text('更多玩法 >').fontSize(14).fontColor(Color.Gray).margin({ left: 10 })

          }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 20, bottom: 10 })



          Image($r('app.media.template')).width('100%').height(100).objectFit(ImageFit.Cover)



          Text('附近有3家携程门店').fontSize(14).margin({ top: 10, bottom: 10 })

          Text('最近距您3.5km >').fontSize(14).fontColor(Color.Blue)



          Row() {

            Text('国内游').fontSize(16).fontWeight(FontWeight.Bold)

            Text('更多 >').fontSize(14).fontColor(Color.Blue)

          }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 20, bottom: 10 })



          Grid() {

            ForEach(this.domesticDestinations, (dest: Destination) => {

              GridItem() {

                Stack({ alignContent: Alignment.BottomStart }) {

                  Image(dest.image).width('100%').height(120).objectFit(ImageFit.Cover)

                  Column() {

                    Text(dest.name).fontSize(16).fontColor(Color.White)

                    if (dest.description) {

                      Text(dest.description).fontSize(12).fontColor(Color.White)

                    }

                  }.padding(5)

                }

              }

            })

          }.columnsTemplate('1fr 1fr').rowsGap(10).columnsGap(10)



          Row() {

            Text('出境游').fontSize(16).fontWeight(FontWeight.Bold)

            Text('更多 >').fontSize(14).fontColor(Color.Blue)

          }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 20, bottom: 10 })



          Grid() {

            ForEach(this.internationalDestinations, (dest: Destination) => {

              GridItem() {

                Stack({ alignContent: Alignment.BottomStart }) {

                  Image(dest.image).width('100%').height(120).objectFit(ImageFit.Cover)

                  Column() {

                    Text(dest.name).fontSize(16).fontColor(Color.White)

                    if (dest.description) {

                      Text(dest.description).fontSize(12).fontColor(Color.White)

                    }

                  }.padding(5)

                }

              }

            })

          }.columnsTemplate('1fr 1fr').rowsGap(10).columnsGap(10)

        }.width('100%').padding(10)

      }.width('100%').height('80%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('旅游首页').fontSize(12)

        }.width('20%').height(60).onClick(() => router.pushUrl({ url: 'pages/HomePage' }))

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('目的地').fontSize(12)

        }.width('20%').height(60)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('浏览历史').fontSize(12)

        }.width('20%').height(60)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的收藏').fontSize(12)

        }.width('20%').height(60)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的订单').fontSize(12)

        }.width('20%').height(60)

      }.width('100%').height(60).position({ y: '92%' }).backgroundColor(Color.White)

    }

  }

}