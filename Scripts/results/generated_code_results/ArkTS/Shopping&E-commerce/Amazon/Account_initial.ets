import router from '@ohos.router';
import { BottomNavigationBar } from './components/BottomNavigationBar';
@Entry
@Component
struct AccountPage {
@State selectedIndex: number = 0;
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
      Text('Orders')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 20, bottom: 10 })

      ListItem('Your Orders', () => {
        router.pushUrl({ url: 'pages/Orders' });
      })
      ListItem('Your Subscribe & Save', () => {})
      ListItem('Your Amazon Day', () => {})

      Text('Payments')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 20, bottom: 10 })

      ListItem('Payments and transactions', () => {})
      ListItem('Manage gift card balance', () => {})
      ListItem('Shop with Points', () => {})
      ListItem('Top up account', () => {})
      ListItem('In-Store Promo Wallet', () => {})

      Text('Customer Service')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 20, bottom: 10 })

      ListItem('Contact Us', () => {})

      Text('Account Settings')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 20, bottom: 10 })
    }
    .width('100%')
    .padding({ left: 16, right: 16 })
  }
  .layoutWeight(1)

  BottomNavigationBar({
    selectedIndex: $selectedIndex,
    onItemClick: (index: number) => {
      if (index === 0) {
        router.pushUrl({ url: 'pages/Home' });
      } else if (index === 1) {
        router.pushUrl({ url: 'pages/Profile' });
      }
    }
  })
}
}
}
@Component
struct ListItem {
private title: string
private onClick: () => void
build() {
Row() {
Text(this.title)
.fontSize(16)
.layoutWeight(1)
Image($r('app.media.template'))
.width(24)
.height(24)
}
.width('100%')
.height(56)
.backgroundColor(Color.White)
.onClick(this.onClick)
}
}
@Component
struct BottomNavigationBar {
@Prop selectedIndex: number
private onItemClick: (index: number) => void
build() {
Row() {
Column() {
Image($r('app.media.template')).width(24).height(24)
Text('Home').fontSize(12)
}
.layoutWeight(1)
.onClick(() => this.onItemClick(0))
  Column() {
    Image($r('app.media.template')).width(24).height(24)
    Text('Profile').fontSize(12)
  }
  .layoutWeight(1)
  .onClick(() => this.onItemClick(1))

  Column() {
    Image($r('app.media.template')).width(24).height(24)
    Text('Cart').fontSize(12)
  }
  .layoutWeight(1)

  Column() {
    Image($r('app.media.template')).width(24).height(24)
    Text('Menu').fontSize(12)
  }
  .layoutWeight(1)
}
.width('100%')
.height(56)
.backgroundColor(Color.White)
}
}