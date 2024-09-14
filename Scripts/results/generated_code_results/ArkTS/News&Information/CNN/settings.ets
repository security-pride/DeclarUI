import router from '@ohos.router';
@Entry
@Component
struct Settings {
@State enableSound: boolean = false;
build() {
Column() {
Row() {
Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })
Text('6:17').fontSize(16)
Blank()
Image($r('app.media.template')).width(24).height(24)
Image($r('app.media.template')).width(24).height(24).margin({ right: 16 })
}.width('100%').height(56).backgroundColor('#F1F3F5')
  Text('Settings')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 24, bottom: 24, left: 16 })

  Scroll() {
    Column({ space: 8 }) {
      Text('ACCOUNT').fontSize(14).fontColor(Color.Gray).margin({ left: 16, top: 16 })

      ListItem('Log In to your CNN Account', () => {
        router.pushUrl({ url: 'pages/LogIn' })
      })

      ListItem('Create a free CNN Account', () => {
        router.pushUrl({ url: 'pages/CreateAccont' })
      })

      ListItem('Saved Stories', () => {}, 'Find your saved articles, videos & audio here')

      Text('APP PREFERENCES').fontSize(14).fontColor(Color.Gray).margin({ left: 16, top: 24 })

      ListItem('Edition', () => {}, 'International')

      ListItem('Alerts', () => {})

      ListItem('Android Notification Settings', () => {})

      Row() {
        Column() {
          Text('Enable \'This is CNN\'').fontSize(16)
          Text('A sound effect when you open the app').fontSize(14).fontColor(Color.Gray)
        }
        Blank()
        Toggle({ type: ToggleType.Switch, isOn: this.enableSound })
          .selectedColor('#007DFF')
          .switchPointColor('#FFFFFF')
          .onChange((isOn: boolean) => {
            this.enableSound = isOn
          })
      }.padding({ left: 16, right: 16, top: 12, bottom: 12 }).width('100%')

      Text('You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.')
        .fontSize(14)
        .fontColor(Color.Gray)
        .margin({ top: 24, bottom: 24, left: 16, right: 16 })

      Text('GENERAL').fontSize(14).fontColor(Color.Gray).margin({ left: 16, top: 16 })

      ListItem('Send Feedback', () => {})
    }
  }.layoutWeight(1)

  Row() {
    TabBuilder('Home', $r('app.media.template'), Color.Black)
    TabBuilder('Elections', $r('app.media.template'), Color.Black)
    TabBuilder('Watch', $r('app.media.template'), Color.Black)
    TabBuilder('Settings', $r('app.media.template'), Color.Blue)
  }
  .width('100%')
  .height(56)
  .backgroundColor(Color.White)
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
@Builder
ListItem(title: string, onClick: () => void, subtitle?: string) {
Row() {
Column() {
Text(title).fontSize(16)
if (subtitle) {
Text(subtitle).fontSize(14).fontColor(Color.Gray)
}
}.alignItems(HorizontalAlign.Start)
Blank()
Image($r('app.media.template')).width(24).height(24)
}
.width('100%')
.padding({ left: 16, right: 16, top: 12, bottom: 12 })
.onClick(onClick)
}
@Builder
TabBuilder(label: string, icon: Resource, color: Color) {
Column() {
Image(icon).width(24).height(24)
Text(label).fontSize(12).fontColor(color)
}
.layoutWeight(1)
.onClick(() => {
if (label !== 'Settings') {
router.pushUrl({ url: pages/${label} })
}
})
}
}