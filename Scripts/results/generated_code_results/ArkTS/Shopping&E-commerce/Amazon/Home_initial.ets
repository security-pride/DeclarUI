import router from '@ohos.router';
@Entry
@Component
struct HomePage {
@State recommendedDeals: { title: string, image: Resource }[] = [
{ title: 'Recommended deal for you', image: $r('app.media.template') },
{ title: '4+ star deal for you', image: $r('app.media.template') },
{ title: 'Sports & Outdoors', image: $r('app.media.template') }
];
@State primeDayCategories: string[] = ['Bags & Luggage', 'Office', 'Automotive', 'Jewellery & Watches'];
build() {
Column() {
Search({ placeholder: 'Search Amazon.co.uk' })
.width('100%')
.height(40)
.backgroundColor('#FFFFFF')
.margin({ top: 10 })
  Row() {
    Text('Prime').fontSize(14).margin({ right: 20 })
    Text('Video').fontSize(14).margin({ right: 20 })
    Text('Music').fontSize(14)
  }.width('100%').margin({ top: 10 })

  Row() {
    Image($r('app.media.template')).width(24).height(24)
    Text('Deliver to Muyi - St. Andrews KY16 9').fontSize(14).margin({ left: 10 })
  }.width('100%').margin({ top: 10, bottom: 10 })

  Stack() {
    Image($r('app.media.template')).width('100%').height(200)
    Text('Shop Electronics today')
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
      .position({ x: 20, y: 20 })
  }.width('100%').height(200)

  Grid() {
    ForEach(this.recommendedDeals, (deal, index) => {
      GridItem() {
        Column() {
          Image(deal.image).width('100%').height(100)
          Text(deal.title).fontSize(14).margin({ top: 5 })
        }
      }
    })
  }.columnsTemplate('1fr 1fr 1fr').rowsTemplate('1fr').height(150).margin({ top: 10 })

  Text('Prime Day by category').fontSize(18).fontWeight(FontWeight.Bold).margin({ top: 20, bottom: 10 })

  Grid() {
    ForEach(this.primeDayCategories, (category) => {
      GridItem() {
        Column() {
          Image($r('app.media.template')).width(50).height(50)
          Text(category).fontSize(12).margin({ top: 5 })
        }
      }
    })
  }.columnsTemplate('1fr 1fr 1fr 1fr').rowsTemplate('1fr').height(100)

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }.layoutWeight(1)

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
  .position({ y: '100%' })
}
.width('100%')
.height('100%')
.backgroundColor('#F0F0F0')
}
}