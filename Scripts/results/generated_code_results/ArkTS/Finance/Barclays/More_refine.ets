import router from '@ohos.router';
@Entry
@Component
struct MorePage {
@State lastLoginTime: string = '21:28, 10th Jul 2024';
build() {
Column() {
Row() {
Text('More')
.fontSize(24)
.fontWeight(FontWeight.Bold)
Blank()
Text('Logout')
.fontSize(16)
.fontColor(Color.Blue)
.onClick(() => {
// Implement logout functionality
})
}
.width('100%')
.padding({ left: 20, right: 20, top: 60, bottom: 20 })
  List() {
    this.MenuListItem('Statements and documents', $r('app.media.template'), () => router.pushUrl({ url: 'pages/StatementsandDocuments' }))
    this.MenuListItem('Cards', $r('app.media.template'), () => router.pushUrl({ url: 'pages/Cards' }))
    this.MenuListItem('Manage accounts', $r('app.media.template'))
    this.MenuListItem('Subscriptions', $r('app.media.template'))
    this.MenuListItem('Spending', $r('app.media.template'))
    this.MenuListItem('Rewards', $r('app.media.template'))
    this.MenuListItem('Mobile PINsentry', $r('app.media.template'))
    this.MenuListItem('Settings', $r('app.media.template'))
  }
  .width('100%')
  .backgroundColor(Color.White)
  .borderRadius(10)
  .padding({ top: 10, bottom: 10 })

  Text(`Last log in ${this.lastLoginTime}`)
    .fontSize(14)
    .fontColor(Color.Gray)
    .margin({ top: 20 })

  Text('Independent service quality survey results')
    .fontSize(14)
    .fontColor(Color.Blue)
    .margin({ top: 10 })
    .onClick(() => {
      // Navigate to survey results
    })

  Blank()

  Row() {
    this.NavBarItem('Accounts', $r('app.media.template'), () => router.pushUrl({ url: 'pages/Home' }))
    this.NavBarItem('Products', $r('app.media.template'))
    this.NavBarItem('Pay & Transfer', $r('app.media.template'))
    this.NavBarItem('Help', $r('app.media.template'), () => router.pushUrl({ url: 'pages/Help' }))
    this.NavBarItem('More', $r('app.media.template'))
  }
  .width('100%')
  .height(80)
  .backgroundColor(Color.Blue)
  .position({ y: 2164 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
@Builder
MenuListItem(text: string, icon: Resource, onClick?: () => void) {
ListItem() {
Row() {
Image(icon)
.width(24)
.height(24)
.margin({ right: 16 })
Text(text)
.fontSize(16)
Blank()
Image($r('app.media.template'))
.width(24)
.height(24)
}
.width('100%')
.height(60)
.padding({ left: 20, right: 20 })
}
.onClick(onClick)
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