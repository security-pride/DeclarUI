import router from '@ohos.router';
@Entry
@Component
struct HomePage {
@State userName: string = 'Miss Muyi Li';
@State accountType: string = 'STUDENT ADDITIONS';
@State balance: string = '£3,760.06';
@State accountDetails: string = 'Available balance | 20-25-24 90427500';
build() {
Column() {
Row() {
Image($r('app.media.template')).width(75).height(78)
Text(this.userName).fontSize(20).fontWeight(FontWeight.Bold)
Blank()
Image($r('app.media.template')).width(91).height(85)
}.width('100%').padding({ top: 50, bottom: 20, left: 40, right: 40 })
  Column() {
    Image($r('app.media.template')).width(40).height(40)
    Text(this.accountType).fontSize(18).fontWeight(FontWeight.Bold)
    Text(this.balance).fontSize(36).fontWeight(FontWeight.Bold)
    Text(this.accountDetails).fontSize(14).fontColor(Color.Gray)
  }.width('100%').alignItems(HorizontalAlign.Center).margin({ bottom: 20 })

  Column() {
    Text('Dreaming of your first home?').fontSize(18).fontWeight(FontWeight.Bold)
    Text('You could buy with a 5% deposit. Tap to get started. T&Cs apply.').fontSize(14)
  }.width('90%').backgroundColor(Color.White).padding(20).borderRadius(10)

  Row() {
    this.QuickActionItem('Your cards', $r('app.media.template'))
    this.QuickActionItem('Your rewards', $r('app.media.template'))
    this.QuickActionItem('Spending', $r('app.media.template'))
    this.QuickActionItem('Mobile PINsentry', $r('app.media.template'))
  }.width('90%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 20, bottom: 20 })

  Column() {
    Text('Living more sustainably').fontSize(18).fontWeight(FontWeight.Bold)
    Image($r('app.media.template'))
      .width('100%')
      .height(200)
      .objectFit(ImageFit.Cover)
  }.width('90%').clip(true).borderRadius(10)

  Blank()

  Row() {
    this.NavBarItem('Accounts', $r('app.media.template'))
    this.NavBarItem('Products', $r('app.media.template'))
    this.NavBarItem('Pay & Transfer', $r('app.media.template'))
    this.NavBarItem('Help', $r('app.media.template'), () => router.pushUrl({ url: 'pages/Help' }))
    this.NavBarItem('More', $r('app.media.template'), () => router.pushUrl({ url: 'pages/More' }))
  }
  .width('100%')
  .height(128)
  .backgroundColor(Color.Blue)
  .position({ y: 2184 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
@Builder
QuickActionItem(text: string, icon: Resource) {
Button({ type: ButtonType.Circle, stateEffect: true }) {
Column() {
Image(icon).width(24).height(24)
Text(text).fontSize(12).margin({ top: 4 })
}
}
.width(60)
.height(60)
.backgroundColor(Color.Blue)
}
@Builder
NavBarItem(text: string, icon: Resource, onClick?: () => void) {
Column() {
Image(icon).width(24).height(24)
Text(text).fontSize(12).fontColor(Color.White)
}
.alignItems(HorizontalAlign.Center)
.onClick(onClick)
}
}