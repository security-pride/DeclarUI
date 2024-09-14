import router from '@ohos.router';



interface ActivityItem {

  name: string;

  action: string;

  followButton: boolean;

}



@Entry

@Component

struct ActivityPage {

  @State activityList: ActivityItem[] = [

    { name: 'thomas', action: 'Started following you', followButton: true },

    { name: 'mike', action: 'Started following you', followButton: true },

    { name: 'michael', action: 'Started following you', followButton: true },

    { name: 'willie', action: 'Started following you', followButton: true },

    { name: 'peter', action: 'Started following you', followButton: true },

    { name: 'angela', action: 'Started following you', followButton: true },

    { name: 'devon', action: 'Started following you', followButton: true },

    { name: 'col', action: 'Started following you', followButton: true },

    { name: 'templeton', action: 'Started following you', followButton: true },

    { name: 'willie', action: 'Started following you', followButton: true },

    { name: 'dori', action: 'Started following you', followButton: true }

  ];



  @State currentTab: number = 0;



  build() {

    Column() {

      Row() {

        Text('Activity')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16, top: 18 })

      }

      .width('100%')

      .height(55)



      Row() {

        Button('All')

          .backgroundColor(this.currentTab === 0 ? '#e0e0e0' : '#ffffff')

          .fontColor(Color.Black)

          .onClick(() => this.currentTab = 0)

        Button('Answers')

          .backgroundColor(this.currentTab === 1 ? '#e0e0e0' : '#ffffff')

          .fontColor(Color.Black)

          .onClick(() => this.currentTab = 1)

        Button('Mentions')

          .backgroundColor(this.currentTab === 2 ? '#e0e0e0' : '#ffffff')

          .fontColor(Color.Black)

          .onClick(() => this.currentTab = 2)

        Button('Verified')

          .backgroundColor(this.currentTab === 3 ? '#e0e0e0' : '#ffffff')

          .fontColor(Color.Black)

          .onClick(() => this.currentTab = 3)

      }

      .width('100%')

      .height(50)

      .margin({ top: 96 })



      List() {

        ForEach(this.activityList, (item: ActivityItem) => {

          ListItem() {

            Row() {

              Image($r('app.media.template'))

                .width(40)

                .height(40)

                .margin({ left: 16 })

              Column() {

                Text(item.name)

                  .fontSize(16)

                  .fontWeight(FontWeight.Bold)

                Text(item.action)

                  .fontSize(14)

                  .fontColor(Color.Gray)

              }

              .alignItems(HorizontalAlign.Start)

              .margin({ left: 12 })

              .layoutWeight(1)

              Button('Follow')

                .width(100)

                .height(32)

                .backgroundColor('#ffffff')

                .fontColor('#007AFF')

                .borderRadius(16)

                .border({ width: 1, color: '#007AFF' })

                .margin({ right: 16 })

            }

            .width('100%')

            .height(80)

          }

          .onClick(() => {

            router.pushUrl({ url: 'pages/UserProfilePage' })

          })

        })

      }

      .width('100%')

      .layoutWeight(1)



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

      .height(50)

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor('#ffffff')

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#f5f5f5')

  }

}