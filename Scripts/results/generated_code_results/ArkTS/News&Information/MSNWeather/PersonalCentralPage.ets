import router from '@ohos.router';



interface RewardInfo {

  total: number;

  current: number;

}



@Entry

@Component

struct PersonalCentralPage {

  @State signedIn: boolean = false;

  @State rewards: RewardInfo = { total: 30, current: 0 };



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.back()

          })

        Blank()

        Text('Personal Central')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

      }

      .width('100%')

      .height(56)



      Column() {

        Row() {

          Image($r('app.media.template'))

            .width(48)

            .height(48)

          Column() {

            if (this.signedIn) {

              Text('User Name')

                .fontSize(18)

                .fontWeight(FontWeight.Bold)

            } else {

              Text('Tap to sign in >')

                .fontSize(18)

                .fontColor(Color.Blue)

                .onClick(() => {

                  this.signedIn = true

                })

            }

          }

          .alignItems(HorizontalAlign.Start)

          .margin({ left: 16 })

        }

        .width('100%')

        .padding(16)



        Row() {

          Column() {

            Text('My Rewards')

              .fontSize(16)

            Text(`${this.rewards.current}`)

              .fontSize(24)

              .fontWeight(FontWeight.Bold)

          }

          .alignItems(HorizontalAlign.Start)



          Column() {

            Text("Today's points")

              .fontSize(16)

            Progress({ value: this.rewards.current, total: this.rewards.total })

              .width(120)

              .height(10)

            Text(`${this.rewards.current}/${this.rewards.total}`)

              .fontSize(14)

          }

          .alignItems(HorizontalAlign.End)

        }

        .width('100%')

        .justifyContent(FlexAlign.SpaceBetween)

        .padding(16)

        .backgroundColor(Color.White)

        .borderRadius(8)

      }

      .width('100%')



      List() {

        ListItem() {

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Notifications').fontSize(16).margin({ left: 16 })

          }

          .width('100%')

          .padding(16)

        }



        ListItem() {

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Settings').fontSize(16).margin({ left: 16 })

          }

          .width('100%')

          .padding(16)

          .onClick(() => {

            router.pushUrl({ url: 'pages/SettingsPage' })

          })

        }



        ListItem() {

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Interests').fontSize(16).margin({ left: 16 })

          }

          .width('100%')

          .padding(16)

        }



        ListItem() {

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('History').fontSize(16).margin({ left: 16 })

          }

          .width('100%')

          .padding(16)

        }



        ListItem() {

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Bookmarks and saves').fontSize(16).margin({ left: 16 })

          }

          .width('100%')

          .padding(16)

        }

      }

      .width('100%')

      .margin({ top: 16 })



      Blank()



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12)

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Weather').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Chat').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Tabs').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Apps').fontSize(12)

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/AppsPage' })

        })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .padding({ top: 8, bottom: 8 })

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}