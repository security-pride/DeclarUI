import router from '@ohos.router';



interface ActivityItem {

  name: string;

  action: string;

}



@Entry

@Component

struct ActivityPage {

  @State currentTab: number = 0;

  @State activityList: ActivityItem[] = [

    { name: 'thomas', action: 'Started following you' },

    { name: 'mike', action: 'Started following you' },

    { name: 'michael', action: 'Started following you' },

    { name: 'willie', action: 'Started following you' },

    { name: 'peter', action: 'Started following you' },

    { name: 'angela', action: 'Started following you' },

    { name: 'devon', action: 'Started following you' },

    { name: 'col', action: 'Started following you' },

    { name: 'templeton', action: 'Started following you' },

    { name: 'willie', action: 'Started following you' },

    { name: 'dori', action: 'Started following you' }

  ];



  build() {

    Column() {

      Text('Activity')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

        .padding({ left: 16, top: 16, bottom: 8 })



      Tabs({ barPosition: BarPosition.Start }) {

        TabContent() {

          this.ActivityList()

        }.tabBar('All')



        TabContent() {

          // Content for Answers tab

        }.tabBar('Answers')



        TabContent() {

          // Content for Mentions tab

        }.tabBar('Mentions')



        TabContent() {

          // Content for Verified tab

        }.tabBar('Verifi')

      }

      .onChange((index: number) => {

        this.currentTab = index;

      })

      .barMode(BarMode.Scrollable)

      .height('90%')



      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => router.pushUrl({ url: 'pages/FeedPage' }))

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => router.pushUrl({ url: 'pages/SearchPage' }))

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

      .justifyContent(FlexAlign.SpaceAround)

      .padding({ top: 8, bottom: 8 })

    }

  }



  @Builder

  ActivityList() {

    List() {

      ForEach(this.activityList, (item: ActivityItem) => {

        ListItem() {

          Row() {

            Image($r('app.media.template'))

              .width(40)

              .height(40)

              .margin({ right: 16 })

            Column() {

              Text(item.name)

                .fontSize(16)

                .fontWeight(FontWeight.Medium)

              Text(item.action)

                .fontSize(14)

                .fontColor(Color.Gray)

            }

            .alignItems(HorizontalAlign.Start)

            .layoutWeight(1)



            Button('Follow')

              .height(32)

              .backgroundColor(Color.Black)

              .fontColor(Color.White)

          }

          .width('100%')

          .padding(16)

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/UserProfilePage' })

        })

      })

    }

    .width('100%')

  }

}