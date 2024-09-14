import router from '@ohos.router';
@Entry

@Component

struct SettingsPage {

  @State profileImage: Resource = $r('app.media.template')

  @State isNotificationSoundEnabled: boolean = true

  @State isVibrationEnabled: boolean = true

  @State isImageNotificationEnabled: boolean = true



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/MoreDetailsPage' })

          })

        Text('设置')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16 })

      }

      .width('100%')

      .height(56)

      .backgroundColor('#F1F3F5')



      Scroll() {

        Column() {

          Image(this.profileImage)

            .width(80)

            .height(80)

            .margin({ top: 24, bottom: 16 })

            .borderRadius(40)



          Button('注册')

            .width('80%')

            .height(40)

            .backgroundColor('#FF0000')

            .fontColor(Color.White)

            .onClick(() => {

              router.pushUrl({ url: 'pages/LogInPage' })

            })



          Text('登录并加入该社群')

            .fontSize(14)

            .fontColor(Color.Gray)

            .margin({ top: 8, bottom: 24 })



          Text('内容')

            .fontSize(16)

            .fontWeight(FontWeight.Bold)

            .alignSelf(ItemAlign.Start)

            .margin({ left: 16, top: 16, bottom: 8 })



          this.SettingItem('改变国家', $r('app.media.template'))

          this.SettingItem('话题', $r('app.media.template'))

          this.SettingItem('来源管理', $r('app.media.template'))



          Text('消息')

            .fontSize(16)

            .fontWeight(FontWeight.Bold)

            .alignSelf(ItemAlign.Start)

            .margin({ left: 16, top: 24, bottom: 8 })



          Row() {

            Image($r('app.media.template'))

              .width(24)

              .height(24)

            Text('通知声音')

              .fontSize(16)

              .margin({ left: 16 })

            Blank()

            Toggle({ type: ToggleType.Switch, isOn: this.isNotificationSoundEnabled })

              .onChange((isOn: boolean) => {

                this.isNotificationSoundEnabled = isOn

              })

          }

          .width('100%')

          .padding({ left: 16, right: 16, top: 12, bottom: 12 })



          Row() {

            Image($r('app.media.template'))

              .width(24)

              .height(24)

            Text('震动提醒')

              .fontSize(16)

              .margin({ left: 16 })

            Blank()

            Toggle({ type: ToggleType.Switch, isOn: this.isVibrationEnabled })

              .onChange((isOn: boolean) => {

                this.isVibrationEnabled = isOn

              })

          }

          .width('100%')

          .padding({ left: 16, right: 16, top: 12, bottom: 12 })



          Row() {

            Image($r('app.media.template'))

              .width(24)

              .height(24)

            Text('消息带图')

              .fontSize(16)

              .margin({ left: 16 })

            Blank()

            Toggle({ type: ToggleType.Switch, isOn: this.isImageNotificationEnabled })

              .onChange((isOn: boolean) => {

                this.isImageNotificationEnabled = isOn

              })

          }

          .width('100%')

          .padding({ left: 16, right: 16, top: 12, bottom: 12 })



          this.SettingItem('通知管理', $r('app.media.template'))

        }

      }

      .scrollable(ScrollDirection.Vertical)

      .scrollBar(BarState.Auto)

      .edgeEffect(EdgeEffect.Spring)

      .height('100%')

    }

  }



  @Builder

  SettingItem(title: string, icon: Resource) {

    Row() {

      Image(icon)

        .width(24)

        .height(24)

      Text(title)

        .fontSize(16)

        .margin({ left: 16 })

      Blank()

      Image($r('app.media.template'))

        .width(24)

        .height(24)

    }

    .width('100%')

    .padding({ left: 16, right: 16, top: 12, bottom: 12 })

    .onClick(() => {

      if (title === '改变国家' || title === '话题' || title === '来源管理' || title === '通知管理') {

        router.pushUrl({ url: 'pages/MoreDetailsPage' })

      }

    })

  }

}