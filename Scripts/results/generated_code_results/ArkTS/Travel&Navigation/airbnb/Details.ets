import router from '@ohos.router';
interface Feature {
icon: Resource;
text: string;
}
@Entry
@Component
struct DetailsPage {
@State rating: number = 4.80;
@State reviewCount: number = 5;
@State pricePerNight: string = '¥2,424';
@State dateRange: string = '9月2日至7日';
@State features: Feature[] = [
{ icon: $r('app.media.template'), text: '海景民宿' },
{ icon: $r('app.media.template'), text: '超赞房东' },
{ icon: $r('app.media.template'), text: '位置极佳' },
{ icon: $r('app.media.template'), text: '入住便捷' },
{ icon: $r('app.media.template'), text: '无线网络' }
];
build() {
Column() {
Stack({ alignContent: Alignment.TopStart }) {
Image($r('app.media.template'))
.width('100%')
.height(300)
.objectFit(ImageFit.Cover)
Row() {
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}.onClick(() => {
router.pushUrl({ url: 'pages/Search' })
})
Blank()
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}.onClick(() => {
router.pushUrl({ url: 'pages/SearchCategory' })
})
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}
}.width('100%').padding(16)
}
  Column({ space: 8 }) {
    Text('Pitch 24 Creek Caravan Park Ringstead狗友好')
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
    Text('英国英格兰多塞特(Dorset)的整套小木屋')
      .fontSize(16)
      .fontColor(Color.Gray)
    Text('6位房客 · 2间卧室 · 3张床 · 1.5个卫生间')
      .fontSize(14)
      .fontColor(Color.Gray)

    Row() {
      Rating({ rating: this.rating, indicator: true })
        .stars(5)
        .stepSize(0.1)
        .onChange((value: number) => {
          this.rating = value
        })
      Text(`${this.rating}`)
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
      Text('房客推荐')
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
      Text(`(${this.reviewCount})`)
        .fontSize(16)
        .fontColor(Color.Gray)
        .onClick(() => {
          router.pushUrl({ url: 'pages/Comments' })
        })
    }.width('100%').justifyContent(FlexAlign.SpaceBetween)

    Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.SpaceBetween }) {
      ForEach(this.features, (feature: Feature) => {
        Row({ space: 8 }) {
          Image(feature.icon).width(24).height(24)
          Text(feature.text).fontSize(14)
        }.width('48%').height(40)
      })
    }

    Text('8月3日前免费取消')
      .fontSize(14)
      .fontColor(Color.Gray)

    Row() {
      Image($r('app.media.template')).width(24).height(24)
      Text('这个房源很抢手')
        .fontSize(16)
        .fontColor(Color.Red)
        .fontWeight(FontWeight.Bold)
    }

    Row() {
      Column() {
        Text(this.pricePerNight).fontSize(20).fontWeight(FontWeight.Bold)
        Text('/晚').fontSize(14).fontColor(Color.Gray)
      }
      Text(this.dateRange).fontSize(14).fontColor(Color.Gray)
    }.width('100%').justifyContent(FlexAlign.SpaceBetween)

    Button('预订', { type: ButtonType.Normal })
      .width('100%')
      .height(50)
      .backgroundColor(Color.Red)
      .fontColor(Color.White)
      .onClick(() => {
        router.pushUrl({ url: 'pages/Reservation' })
      })
  }.padding(16)
}.scrollable(ScrollDirection.Vertical)
}
}