import router from '@ohos.router';
@Entry

@Component

struct EditLocationPage {

  @State currentLocation: string = ''

  @State automaticDetection: boolean = true



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/SettingPage' })

          })

        Text('Edit location')

          .fontSize(20)

          .fontWeight(FontWeight.Medium)

          .margin({ left: 16 })

      }

      .width('100%')

      .height(56)

      .backgroundColor('#F1F3F5')



      Button('Add location')

        .width('100%')

        .height(48)

        .backgroundColor('#007DFF')

        .fontColor(Color.White)

        .margin({ top: 16 })



      Text('Current location')

        .fontSize(16)

        .fontWeight(FontWeight.Medium)

        .margin({ top: 24, bottom: 8 })



      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Text('Automatic detection')

          .fontSize(16)

          .margin({ left: 16 })

        Toggle({ type: ToggleType.Switch, isOn: this.automaticDetection })

          .onChange((isOn: boolean) => {

            this.automaticDetection = isOn

          })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceBetween)

      .padding({ left: 16, right: 16 })



      Text('In some places, the function of automatic detection does not work well. For example: Found location is very far from your real location. In that case you can turn off automatic detection, then add your city manually by searching with name of your city')

        .fontSize(14)

        .fontColor(Color.Gray)

        .margin({ top: 24 })

        .padding({ left: 16, right: 16 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#E8F0FE')

  }

}