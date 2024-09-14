import router from '@ohos.router';
@Entry
@Component
struct AccountPage {
@State selectedIndex: number = 1;
build() {
Column() {
Row() {
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}
.width(40).height(40)
.margin({ left: 16, top: 16 })
.onClick(() => {
router.back();
})
    Search({ placeholder: 'Search Amazon.co.uk' })
      .width('70%')
      .margin({ left: 16, top: 16 })
  }

  Scroll() {
    Column() {
      this.SectionBuilder('Orders', ['Your Orders', 'Your Subscribe & Save', 'Your Amazon Day'])
      this.SectionBuilder('Payments', ['Payments and transactions', 'Manage gift card balance', 'Shop with Points', 'Top up account', 'In-Store Promo Wallet'])
      this.SectionBuilder('Customer Service', ['Contact Us'])
      this.SectionBuilder('Account Settings', [])
    }
    .width('100%')
    .padding({ left: 16, right: 16 })
  }
  .layoutWeight(1)

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/Home' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Profile').fontSize(12)
    }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/Profile' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Cart').fontSize(12)
    }.layoutWeight(1)

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Menu').fontSize(12)
    }.layoutWeight(1)
  }
  .width('100%')
  .height(56)
  .backgroundColor(Color.White)
}
}
@Builder
SectionBuilder(title: string, items: string[]) {
Text(title)
.fontSize(20)
.fontWeight(FontWeight.Bold)
.margin({ top: 20, bottom: 10 })
ForEach(items, (item: string) => {
  ListItem() {
    Row() {
      Text(item)
        .fontSize(16)
        .layoutWeight(1)
      Image($r('app.media.template'))
        .width(24)
        .height(24)
    }
    .width('100%')
    .height(56)
    .backgroundColor(Color.White)
    .onClick(() => {
      if (item === 'Your Orders') {
        router.pushUrl({ url: 'pages/Orders' })
      }
    })
  }
})
}
}