import router from '@ohos.router';



@Entry

@Component

struct AddLocationsPage {

  @State isLockScreenEnabled: boolean = false



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/HomePage' })

          })

        Text('Add location')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16 })

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 16 })

      }

      .width('100%')

      .height(56)

      .backgroundColor('#F1F3F5')



      Row() {

        Text('Lock screen')

          .fontSize(16)

        Blank()

        Toggle({ type: ToggleType.Switch, isOn: this.isLockScreenEnabled })

          .onChange((isOn: boolean) => {

            this.isLockScreenEnabled = isOn

          })

      }

      .width('100%')

      .padding(16)

      .backgroundColor(Color.White)



      Button('Click to add location')

        .width('90%')

        .height(48)

        .margin({ top: 16 })

        .backgroundColor('#007DFF')

        .fontColor(Color.White)

        .onClick(() => {

          // Add location logic here

        })



      Image($r('app.media.template'))

        .width('100%')

        .layoutWeight(1)

        .objectFit(ImageFit.Cover)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}