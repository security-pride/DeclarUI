import router from '@ohos.router';
@Entry
@Component
struct ProfilePage {
@State username: string = 'ml296';
@State cartItemCount: number = 2;
@State quickAccessItems: string[] = ['Your Orders', 'Buy Again', 'Your Account', 'Your Lists'];
@State recentOrders: { image: Resource, title: string }[] = [
{ image: $r('app.media.template'), title: 'SmithPackaging Large Bubble Wrap Roll' },
{ image: $r('app.media.template'), title: 'AYhome Travel Pillow' }
];
@State buyAgainItems: string[] = ['Highland Spring water', 'Disposable gloves', 'King pot noodles', 'Toyama Koshihikari rice', 'Jin Ramen', 'Andrex toilet paper'];
build() {
Column() {
Row() {
Image($r('app.media.template')).width(120).height(40)
Blank()
Image($r('app.media.template')).width(24).height(24)
Image($r('app.media.template')).width(24).height(24)
}.width('100%').height(50).padding({ left: 16, right: 16 })
  Row() {
    Image($r('app.media.template')).width(40).height(40)
    Text(`Hello, ${this.username}`).fontSize(18).fontWeight(FontWeight.Bold)
    Blank()
    Text('EN').fontSize(16)
    Image($r('app.media.template')).width(24).height(24)
  }.width('100%').padding(16)

  Grid() {
    ForEach(this.quickAccessItems, (item) => {
      GridItem() {
        Button(item, { type: ButtonType.Normal })
          .width('100%')
          .height(60)
          .backgroundColor(Color.White)
          .borderRadius(8)
          .onClick(() => {
            if (item === 'Your Orders') {
              router.pushUrl({ url: 'pages/Orders' })
            } else if (item === 'Your Account') {
              router.pushUrl({ url: 'pages/Account' })
            }
          })
      }
    })
  }.columnsTemplate('1fr 1fr').rowsGap(16).columnsGap(16).padding(16)

  Column() {
    Row() {
      Text('Your Orders').fontSize(20).fontWeight(FontWeight.Bold)
      Blank()
      Text('See all').fontSize(16).fontColor(Color.Blue)
    }.width('100%').padding({ left: 16, right: 16, top: 16, bottom: 8 })

    Row() {
      ForEach(this.recentOrders, (order) => {
        Image(order.image).width('45%').height(120).objectFit(ImageFit.Cover)
      })
    }.width('100%').padding(16)
  }.backgroundColor(Color.White)

  Column() {
    Row() {
      Text('Buy again').fontSize(20).fontWeight(FontWeight.Bold)
      Blank()
      Text('See all').fontSize(16).fontColor(Color.Blue)
    }.width('100%').padding({ left: 16, right: 16, top: 16, bottom: 8 })

    Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.SpaceBetween }) {
      ForEach(this.buyAgainItems, (item) => {
        Image($r('app.media.template')).width('30%').height(100).objectFit(ImageFit.Cover)
      })
    }.width('100%').padding(16)
  }.backgroundColor(Color.White).margin({ top: 16 })

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/Home' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Profile').fontSize(12)
    }.layoutWeight(1)

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text(this.cartItemCount.toString()).fontSize(12).fontColor(Color.Red)
      Text('Cart').fontSize(12)
    }.layoutWeight(1)

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Menu').fontSize(12)
    }.layoutWeight(1)
  }.width('100%').height(56).backgroundColor(Color.White).position({ y: '100%' })
}.width('100%').height('100%').backgroundColor('#f0f0f0')
}
}