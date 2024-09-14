import router from '@ohos.router';
import { CommonConstants } from '../common/constants/CommonConstants';
@Entry
@Component
struct CardsPage {
@State cardNumber: string = '**** **** **** 4011';
@State cardStatus: string = 'Active';
@State walletStatus: string = 'Added to Apple Wallet';
@State contactlessLimit: string = '£100';
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ left: 16 })
.onClick(() => {
router.back();
})
Text('STUDENT ADDITIONS')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.margin({ left: 16 })
}
.width('100%')
.height(56)
.backgroundColor('#FFFFFF')
  Text('Personal debit')
    .fontSize(16)
    .margin({ top: 20, left: 16 })

  Image($r('app.media.template'))
    .width(670)
    .height(411)
    .objectFit(ImageFit.Contain)
    .margin({ top: 20 })

  Text('Active')
    .fontSize(16)
    .fontColor(Color.Green)
    .margin({ top: 20 })

  Text('Added to Apple Wallet')
    .fontSize(14)
    .margin({ top: 16 })

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Report damaged, lost or stolen').fontSize(12).textAlign(TextAlign.Center)
    }.width('33%')

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Temporary freeze').fontSize(12).textAlign(TextAlign.Center)
    }.width('33%')

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('View card details & PIN').fontSize(12).textAlign(TextAlign.Center)
    }.width('33%')
  }
  .width('100%')
  .margin({ top: 20 })

  Text('Travel money')
    .fontSize(16)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, left: 16 })

  Button('Create travel wallet')
    .width('90%')
    .height(40)
    .backgroundColor(Color.Blue)
    .margin({ top: 10 })

  Text('Spending controls')
    .fontSize(16)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, left: 16 })

  Row() {
    Text('Contactless limit')
      .fontSize(14)
    Blank()
    Text('£100')
      .fontSize(14)
  }
  .width('90%')
  .margin({ top: 10 })

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Accounts').fontSize(12)
    }.width('20%')

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Products').fontSize(12)
    }.width('20%')

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Pay & Transfer').fontSize(12)
    }.width('20%')

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Help').fontSize(12)
    }.width('20%').onClick(() => {
      router.pushUrl({ url: 'pages/Help' })
    })

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('More').fontSize(12)
    }.width('20%').onClick(() => {
      router.pushUrl({ url: 'pages/More' })
    })
  }
  .width('100%')
  .height(56)
  .backgroundColor('#FFFFFF')
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
}