import router from '@ohos.router';



@Entry

@Component

struct SearchPage {

  @State searchText: string = '';

  @State currentTab: number = 0;



  build() {

    Column() {

      Row() {

        Search({ value: this.searchText, placeholder: '搜索任何物品' })

          .width('80%')

          .height(40)

          .backgroundColor('#F0F0F0')

          .placeholderColor(Color.Gray)

          .textFont({ size: 16 })

          .onChange((value: string) => {

            this.searchText = value;

          })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

      }

      .width('100%')

      .padding(16)



      Tabs() {

        TabContent() {

          if (this.searchText === '') {

            Column() {

              Image($r('app.media.template'))

                .width(100)

                .height(100)

              Text('搜索 eBay')

                .fontSize(20)

                .fontWeight(FontWeight.Bold)

                .margin({ top: 16 })

              Text('发现下一件您最喜爱的物品。')

                .fontSize(16)

                .fontColor(Color.Gray)

                .margin({ top: 8 })

            }

            .width('100%')

            .height('100%')

            .justifyContent(FlexAlign.Center)

          } else {

            // Search results would go here

          }

        }.tabBar('最近')



        TabContent() {

          // Saved items would go here

        }.tabBar('已保存')

      }

      .barMode(BarMode.Fixed)

      .barWidth('100%')

      .barHeight(50)

      .animationDuration(300)

      .onChange((index: number) => {

        this.currentTab = index;

      })

      .width('100%')

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('主页').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的eBay').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('搜索').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('通知').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('出售物品').fontSize(12)

        }.layoutWeight(1)

      }

      .width('100%')

      .height(60)

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

  }

}