import router from '@ohos.router';



interface Destination {

  name: string;

  isHot?: boolean;

}



interface TravelOption {

  title: string;

  subtitle: string;

  icon: Resource;

}



@Entry

@Component

struct GroupTravelPage {

  @State selectedTab: number = 0;

  @State destinations: Destination[] = [

    { name: '烟台', isHot: true },

    { name: '西安', isHot: true },

    { name: '大连', isHot: true },

    { name: '上海', isHot: true },

    { name: '成都' },

    { name: '南京' }

  ];

  @State travelOptions: TravelOption[] = [

    { title: '人气榜', subtitle: '纯玩无购物', icon: $r('app.media.template') },

    { title: '度假直播', subtitle: '热门游玩攻略', icon: $r('app.media.template') },

    { title: '会员专享价', subtitle: '退订无忧', icon: $r('app.media.template') }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Text('携程旅行 | 携程老友会').fontSize(16).fontWeight(FontWeight.Bold).margin({ left: 8 })

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Text('16').fontSize(12).fontColor(Color.Red).fontWeight(FontWeight.Bold)

      }.width('100%').padding(16)



      Image($r('app.media.template'))

        .width('100%')

        .height(150)

        .objectFit(ImageFit.Cover)



      Tabs() {

        TabContent() {

          this.DomesticGroupTour()

        }.tabBar('国内跟团游')

        TabContent() {

          Text('国际跟团游内容')

        }.tabBar('国际跟团游')

        TabContent() {

          Text('私家团内容')

        }.tabBar('私家团')

        TabContent() {

          Text('自由行内容')

        }.tabBar('自由行')

      }.barMode(BarMode.Scrollable).height('50%')



      Row() {

        ForEach(this.travelOptions, (option: TravelOption) => {

          Column() {

            Image(option.icon).width(40).height(40)

            Text(option.title).fontSize(14).margin({ top: 4 })

            Text(option.subtitle).fontSize(12).fontColor(Color.Gray)

          }.width('33%').height(100).justifyContent(FlexAlign.Center)

        })

      }.width('100%').margin({ top: 16 })



      Column() {

        Row() {

          Text('暑期大促·精选').fontSize(18).fontWeight(FontWeight.Bold)

          Blank()

          Text('查看更多 >').fontSize(14).fontColor(Color.Blue)

        }.width('100%').padding({ left: 16, right: 16, top: 16, bottom: 8 })



        Scroll() {

          Row() {

            ForEach(['精选', '云南', '新疆', '四川', '北京', '贵州'], (item: string) => {

              Text(item)

                .fontSize(14)

                .padding(8)

                .margin({ right: 8 })

                .backgroundColor(Color.Gray)

                .borderRadius(16)

            })

          }.padding({ left: 16, right: 16 })

        }.scrollable(ScrollDirection.Horizontal)



        Row() {

          Column() {

            Image($r('app.media.template')).width(150).height(100).objectFit(ImageFit.Cover)

            Text('西域风情').fontSize(14).margin({ top: 4 })

          }.width('48%')

          Column() {

            Image($r('app.media.template')).width(150).height(100).objectFit(ImageFit.Cover)

            Text('山水之美').fontSize(14).margin({ top: 4 })

          }.width('48%')

        }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)

      }.width('100%')



      Row() {

        ForEach(['跟团首页', '全部目的地', '我的收藏', '浏览历史', '我的订单'], (item: string, index: number) => {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text(item).fontSize(12)

          }

          .width('20%')

          .height(60)

          .justifyContent(FlexAlign.Center)

          .onClick(() => {

            if (index === 0) {

              router.pushUrl({ url: 'pages/TravelPage' })

            }

          })

        })

      }.width('100%').position({ y: '92%' }).backgroundColor(Color.White)

    }.width('100%').height('100%')

  }



  @Builder

  DomesticGroupTour() {

    Column() {

      Row() {

        Text('烟台出发').fontSize(16).fontWeight(FontWeight.Bold)

        Image($r('app.media.template')).width(16).height(16).margin({ left: 4 })

      }.width('100%').padding({ left: 16, right: 16, top: 16, bottom: 8 })



      Scroll() {

        Row() {

          ForEach(this.destinations, (dest: Destination) => {

            Column() {

              Text(dest.name).fontSize(14)

              if (dest.isHot) {

                Image($r('app.media.template')).width(16).height(16).margin({ top: 4 })

              }

            }.width(80).height(50).margin({ right: 8 }).backgroundColor(Color.Gray).borderRadius(8)

          })

        }.padding({ left: 16, right: 16 })

      }.scrollable(ScrollDirection.Horizontal)



      Column() {

        Row() {

          Text('出发日期不限').fontSize(14)

          Image($r('app.media.template')).width(16).height(16).margin({ left: 4 })

        }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)



        Row() {

          Text('游玩天数不限').fontSize(14)

          Image($r('app.media.template')).width(16).height(16).margin({ left: 4 })

        }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)



        Row() {

          Text('2成人 0儿童').fontSize(14)

          Text('查看适合当前出行人的产品 >').fontSize(12).fontColor(Color.Gray)

        }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)



        Button('查询', { type: ButtonType.Capsule })

          .width('90%')

          .height(40)

          .backgroundColor('#FFA500')

          .margin({ top: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/GroupTravelSearchResultPage' })

          })



        Text('钻石贵宾·已为您升级专享折扣95折起').fontSize(12).fontColor(Color.Gray).margin({ top: 8 })

      }.width('100%').padding(16).backgroundColor(Color.White).borderRadius(8)

    }

  }

}