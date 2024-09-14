import router from '@ohos.router';
@Entry
@Component
struct OrdersPage {
@State buyAgainItems: string[] = ['Highland Spring water', 'Disposable gloves', 'King pot noodles', 'Rice'];
@State orderList: { title: string, deliveryDate: string, image: Resource }[] = [
{ title: 'SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Sm...', deliveryDate: 'Delivered 10 June', image: $r('app.media.template') },
{ title: 'AYhome Travel Pillow, Memory Foam Neck Pillow for Travel,...', deliveryDate: 'Delivered 10 June', image: $r('app.media.template') },
{ title: 'Toyama Koshihikari 1kg', deliveryDate: 'Delivered 28 May', image: $r('app.media.template') }
];
build() {
Column() {
Row() {
Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })
Search({ placeholder: 'Search Amazon.co.uk' }).layoutWeight(1).margin({ left: 16, right: 16 })
Image($r('app.media.template')).width(24).height(24).margin({ right: 16 })
Image($r('app.media.template')).width(24).height(24).margin({ right: 16 })
}.width('100%').height(60).backgroundColor(Color.White)
  Text('Your Orders').fontSize(24).fontWeight(FontWeight.Bold).margin({ top: 16, left: 16 })

  Row() {
    Search({ placeholder: 'Search all orders' }).layoutWeight(1).height(40).margin({ left: 16 })
    Button('Filter', { type: ButtonType.Normal })
      .height(40)
      .margin({ left: 8, right: 16 })
      .onClick(() => router.pushUrl({ url: 'pages/Filter' }))
  }.width('100%').margin({ top: 16 })

  Row() {
    Text('Buy again').fontSize(18).fontWeight(FontWeight.Bold)
    Blank()
    Text('See more').fontColor(Color.Blue)
  }.width('100%').margin({ top: 16, left: 16, right: 16 })

  Row() {
    ForEach(this.buyAgainItems, (item: string) => {
      Column() {
        Image($r('app.media.template')).width(80).height(80)
        Text(item).fontSize(12).maxLines(2).textOverflow({ overflow: TextOverflow.Ellipsis })
      }.width('25%')
    })
  }.width('100%').margin({ top: 8 })

  Text('Past three months').fontSize(16).fontWeight(FontWeight.Bold).margin({ top: 16, left: 16 })

  List() {
    ForEach(this.orderList, (order: { title: string, deliveryDate: string, image: Resource }) => {
      ListItem() {
        Row() {
          Image(order.image).width(80).height(80)
          Column() {
            Text(order.title).fontSize(16).maxLines(2).textOverflow({ overflow: TextOverflow.Ellipsis })
            Text(order.deliveryDate).fontSize(14).fontColor(Color.Gray)
          }.layoutWeight(1).margin({ left: 16 })
          Image($r('app.media.template')).width(24).height(24)
        }.width('100%').padding(16)
      }
    })
  }.width('100%')

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
  }.width('100%').height(56).backgroundColor(Color.White).position({ y: '100%' })
}.width('100%').height('100%')
}
}