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
.backgroundColor(Color.White)
.margin({ top: 10 })
  Row() {
    Text('Prime').fontSize(14).margin({ right: 20 })
    Text('Video').fontSize(14).margin({ right: 20 })
    Text('Music').fontSize(14)
  }.width('100%').margin({ top: 10 })

  Row() {
    Image($r('app.media.template')).width(24).height(24)
    Text('Deliver to Muyi - St. Andrews KY16 9')
      .fontSize(14)
      .margin({ left: 10 })
      .textOverflow({ overflow: TextOverflow.Ellipsis })
  }.width('100%').margin({ top: 10, bottom: 10 })

  Stack({ alignContent: Alignment.TopStart }) {
    Image($r('app.media.template')).width('100%').height(200)
    Text('Shop Electronics today')
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
      .margin({ top: 20, left: 20 })
  }.width('100%').height(200)

  Grid() {
    ForEach(this.recommendedDeals, (deal: { title: string, image: Resource }) => {
      GridItem() {
        Column() {
          Image(deal.image).width('100%').height(100).objectFit(ImageFit.Cover)
          Text(deal.title)
            .fontSize(14)
            .margin({ top: 5 })
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .maxLines(2)
        }
      }
    })
  }
  .columnsTemplate('1fr 1fr 1fr')
  .height(150)
  .margin({ top: 10 })

  Text('Prime Day by category')
    .fontSize(18)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, bottom: 10 })

  Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.SpaceBetween }) {
    ForEach(this.primeDayCategories, (category: string) => {
      Column() {
        Image($r('app.media.template')).width(50).height(50)
        Text(category).fontSize(12).margin({ top: 5 }).textAlign(TextAlign.Center)
      }.width('22%')
    })
  }.width('100%')

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