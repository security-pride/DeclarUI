import router from '@ohos.router';



@Entry

@Component

struct ProfilePage {

  @State muteNotifications: boolean = true;

  @State selectedTab: number = 0;



  build() {

    Column() {

      this.Header()

      this.ProfileInfo()

      this.Settings()

      this.BioAndPhoneNumber()

      this.ActionButtons()

      this.MediaCategories()

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }



  @Builder

  Header() {

    Row() {

      Image($r('app.media.template'))

        .width(24)

        .height(24)

        .onClick(() => router.back())

      Blank()

      Image($r('app.media.template'))

        .width(24)

        .height(24)

    }

    .width('100%')

    .height(56)

    .padding({ left: 16, right: 16 })

    .backgroundColor(Color.White)

  }



  @Builder

  ProfileInfo() {

    Row() {

      Text('AB')

        .width(60)

        .height(60)

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

        .textAlign(TextAlign.Center)

        .borderRadius(30)

        .backgroundColor('#E0E0E0')

      Column() {

        Text('Antonio Banderas')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Text('Online')

          .fontSize(14)

          .fontColor(Color.Green)

      }

      .alignItems(HorizontalAlign.Start)

      .margin({ left: 16 })

    }

    .width('100%')

    .padding(16)

    .backgroundColor(Color.White)

  }



  @Builder

  Settings() {

    Column() {

      Row() {

        Text('Mute notifications')

          .fontSize(16)

        Blank()

        Toggle({ type: ToggleType.Switch, isOn: this.muteNotifications })

          .onChange((isOn: boolean) => {

            this.muteNotifications = isOn

          })

      }

      .width('100%')

      .height(48)



      Row() {

        Text('Custom notifications')

          .fontSize(16)

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width('100%')

      .height(48)

    }

    .padding({ left: 16, right: 16 })

    .backgroundColor(Color.White)

  }



  @Builder

  BioAndPhoneNumber() {

    Column() {

      Text('Bio and phone number')

        .fontSize(16)

        .fontWeight(FontWeight.Bold)

        .width('100%')

        .padding({ top: 16, bottom: 8 })



      Text('UI Design enthusiast')

        .fontSize(14)

      Text('June 24, 2020')

        .fontSize(12)

        .fontColor(Color.Gray)

        .margin({ top: 4 })



      Row() {

        Text('+62 009 1212 3131')

          .fontSize(14)

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

      }

      .width('100%')

      .margin({ top: 16 })

    }

    .padding(16)

    .backgroundColor(Color.White)

    .margin({ top: 16 })

  }



  @Builder

  ActionButtons() {

    Row() {

      Button({ type: ButtonType.Circle }) {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width(48)

      .height(48)

      .backgroundColor('#007AFF')

      .margin({ right: 16 })



      Button({ type: ButtonType.Circle }) {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width(48)

      .height(48)

      .backgroundColor('#007AFF')

    }

    .width('100%')

    .justifyContent(FlexAlign.Center)

    .margin({ top: 16 })

  }



  @Builder

  MediaCategories() {

    Column() {

      Tabs({ barPosition: BarPosition.Start, index: this.selectedTab }) {

        TabContent() {

          GridRow({ columns: 3, gutter: { x: 4, y: 4 } }) {

            ForEach([1, 2, 3, 4, 5, 6], (item: number) => {

              GridCol() {

                Image($r('app.media.template'))

                  .width('100%')

                  .aspectRatio(1)

                  .objectFit(ImageFit.Cover)

              }

            })

          }

          .width('100%')

          .height(200)

        }.tabBar('Media')



        TabContent() {

          // Documents content

        }.tabBar('Documents')



        TabContent() {

          // Links content

        }.tabBar('Links')



        TabContent() {

          // Groups content

        }.tabBar('Groups')

      }

      .onChange((index: number) => {

        this.selectedTab = index

      })

      .barMode(BarMode.Fixed)

      .barWidth('100%')

    }

    .width('100%')

    .backgroundColor(Color.White)

    .margin({ top: 16 })

  }

}