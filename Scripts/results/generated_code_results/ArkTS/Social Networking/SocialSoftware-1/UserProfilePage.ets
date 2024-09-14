import router from '@ohos.router';

@Entry
@Component
struct UserProfilePage {
  @State followers: number = 2957
  @State isFollowing: boolean = false

  build() {
    Column() {
      Row() {
        Image($r('app.media.template'))
          .width(24).height(24)
          .onClick(() => {
            router.pushUrl({ url: 'pages/FeedPage' })
          })
        Blank()
        Image($r('app.media.template'))
          .width(24).height(24)
        Image($r('app.media.template'))
          .width(24).height(24)
      }
      .width('100%')
      .height(56)
      .padding({ left: 16, right: 16 })

      Scroll() {
        Column() {
          Row() {
            Column() {
              Text('Alisson Rochinski')
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
              Text('arochinski')
                .fontSize(14)
                .fontColor(Color.Gray)
              Text('threads.net')
                .fontSize(14)
                .fontColor(Color.Blue)
              Text("UI Designer | Let's redesign the world")
                .fontSize(16)
                .margin({ top: 8 })
              Text('alisson.rochinski@gmail.com')
                .fontSize(14)
                .fontColor(Color.Gray)
              Text(`${this.followers} seguidores`)
                .fontSize(14)
                .margin({ top: 8 })
            }
            .alignItems(HorizontalAlign.Start)

            Image($r('app.media.template'))
              .width(80)
              .height(80)
              .borderRadius(40)
          }
          .width('100%')
          .padding(16)
          .justifyContent(FlexAlign.SpaceBetween)

          Button(this.isFollowing ? 'Following' : 'Follow')
            .width('90%')
            .height(40)
            .backgroundColor(this.isFollowing ? Color.Gray : Color.Blue)
            .onClick(() => {
              this.isFollowing = !this.isFollowing
              if (this.isFollowing) {
                this.followers++
              } else {
                this.followers--
              }
            })

          Tabs() {
            TabContent() {
              Column() {
                Column() {
                  Row() {
                    Image($r('app.media.template'))
                      .width(40)
                      .height(40)
                      .borderRadius(20)
                    Column() {
                      Text('arochinski')
                        .fontSize(16)
                        .fontWeight(FontWeight.Bold)
                      Text('2 min')
                        .fontSize(12)
                        .fontColor(Color.Gray)
                    }
                    .alignItems(HorizontalAlign.Start)
                    .margin({ left: 8 })
                  }
                  .width('100%')

                  Text('Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint')
                    .fontSize(16)
                    .margin({ top: 8 })

                  Row() {
                    Image($r('app.media.template'))
                      .width(24)
                      .height(24)
                    Text('7 answers')
                      .fontSize(14)
                      .margin({ left: 4 })
                    Image($r('app.media.template'))
                      .width(24)
                      .height(24)
                      .margin({ left: 16 })
                    Text('59 likes')
                      .fontSize(14)
                      .margin({ left: 4 })
                  }
                  .width('100%')
                  .margin({ top: 8 })
                }
                .width('100%')
                .padding(16)
                .backgroundColor(Color.White)
              }
            }.tabBar('Chirps')

            TabContent() {
              // Answers tab content
            }.tabBar('Answers')
          }
          .width('100%')
        }
      }
      .layoutWeight(1)

      Row() {
        Image($r('app.media.template'))
          .width(24).height(24)
          .onClick(() => {
            router.pushUrl({ url: 'pages/FeedPage' })
          })
        Image($r('app.media.template'))
          .width(24).height(24)
          .onClick(() => {
            router.pushUrl({ url: 'pages/SearchPage' })
          })
        Image($r('app.media.template'))
          .width(24).height(24)
        Image($r('app.media.template'))
          .width(24).height(24)
          .onClick(() => {
            router.pushUrl({ url: 'pages/ActivityPage' })
          })
        Image($r('app.media.template'))
          .width(24).height(24)
      }
      .width('100%')
      .height(56)
      .justifyContent(FlexAlign.SpaceAround)
      .backgroundColor(Color.White)
    }
  }
}