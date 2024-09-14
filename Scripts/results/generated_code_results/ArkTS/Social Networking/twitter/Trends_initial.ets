import router from '@ohos.router';
import { CommonConstants } from '../common/constants/CommonConstants';
@Entry
@Component
struct TrendsPage {
@State noTrends: boolean = true;
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(30)
.height(30)
.margin({ left: 10 })
Search({ placeholder: 'Search Twitter' })
.width('75%')
.height(36)
.backgroundColor('#F0F0F2')
.placeholderColor(Color.Gray)
.margin({ left: 10, right: 10 })
.onClick(() => {
router.pushUrl({ url: 'pages/SearchPage' })
})
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ right: 10 })
}
.width('100%')
.height(50)
.backgroundColor(Color.White)
  Text('Trends for you')
    .fontSize(20)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, left: 20 })

  if (this.noTrends) {
    Column() {
      Text('No new trends for you')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 40 })
      Text("It seems like there's not a lot to show you right\nnow, but you can see trends for other areas")
        .fontSize(16)
        .textAlign(TextAlign.Center)
        .margin({ top: 10 })
      Button('Change location')
        .width(180)
        .height(40)
        .fontSize(16)
        .backgroundColor('#1DA1F2')
        .margin({ top: 20 })
    }
    .width('100%')
    .alignItems(HorizontalAlign.Center)
  }

  Blank()

  Button() {
    Image($r('app.media.template'))
      .width(24)
      .height(24)
  }
  .width(56)
  .height(56)
  .position({ x: '80%', y: '85%' })
  .backgroundColor('#1DA1F2')
  .borderRadius(28)

  Row() {
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24)
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceEvenly)
  .backgroundColor(Color.White)
  .position({ y: '95%' })
}
.width('100%')
.height('100%')
.backgroundColor('#F0F0F2')
}
}