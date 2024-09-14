import router from '@ohos.router';
@Entry
@Component
struct Settings {
@State enableSound: boolean = false;
build() {
Column() {
Row() {
Image($r('app.media.template')).width(24).height(24)
Text('6:17').fontSize(16)
Blank()
Image($r('app.media.template')).width(24).height(24)
Image($r('app.media.template')).width(24).height(24)
}.width('100%').height(50).padding({ left: 10, right: 10 })
  Text('Settings')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, bottom: 20 })

  List() {
    ListItem() {
      Text('ACCOUNT').fontSize(14).fontColor(Color.Gray)
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Text('Log In to your CNN Account')
        .fontSize(16)
        .onClick(() => {
          router.pushUrl({ url: 'pages/LogIn' })
        })
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Text('Create a free CNN Account')
        .fontSize(16)
        .onClick(() => {
          router.pushUrl({ url: 'pages/CreateAccont' })
        })
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Column() {
        Text('Saved Stories').fontSize(16)
        Text('Find your saved articles, videos & audio here').fontSize(14).fontColor(Color.Gray)
      }
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Text('APP PREFERENCES').fontSize(14).fontColor(Color.Gray)
    }.padding({ top: 20, bottom: 10 })

    ListItem() {
      Row() {
        Text('Edition').fontSize(16)
        Blank()
        Text('International').fontSize(16).fontColor(Color.Gray)
      }
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Text('Alerts').fontSize(16)
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Text('Android Notification Settings').fontSize(16)
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Row() {
        Column() {
          Text('Enable \'This is CNN\'').fontSize(16)
          Text('A sound effect when you open the app').fontSize(14).fontColor(Color.Gray)
        }
        Blank()
        Toggle({ type: ToggleType.Switch, isOn: this.enableSound })
          .onChange((isOn: boolean) => {
            this.enableSound = isOn
          })
      }
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Text('You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.')
        .fontSize(14)
        .fontColor(Color.Gray)
    }.padding({ top: 20, bottom: 20 })

    ListItem() {
      Text('GENERAL').fontSize(14).fontColor(Color.Gray)
    }.padding({ top: 10, bottom: 10 })

    ListItem() {
      Text('Send Feedback').fontSize(16)
    }.padding({ top: 10, bottom: 10 })
  }
  .width('100%')
  .height('80%')

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Home' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Elections').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Elections' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Watch').fontSize(12)
    }

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Settings').fontSize(12).fontColor(Color.Red)
    }
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceAround)
  .position({ y: '94%' })
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
}