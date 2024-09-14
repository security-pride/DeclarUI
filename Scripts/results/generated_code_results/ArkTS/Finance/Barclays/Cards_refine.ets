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
Text('STUDENT ADDITIONS')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.width('100%')
.textAlign(TextAlign.Center)
.margin({ top: 16 })
  Text('Personal debit')
    .fontSize(16)
    .margin({ top: 16, left: 16 })

  Image($r('app.media.template'))
    .width('90%')
    .height(200)
    .objectFit(ImageFit.Contain)
    .margin({ top: 16 })

  Text(this.cardStatus)
    .fontSize(16)
    .fontColor(Color.Green)
    .margin({ top: 16 })

  Text(this.walletStatus)
    .fontSize(14)
    .margin({ top: 8 })

  Row() {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }
    .width(55)
    .height(55)
    .backgroundColor(0x317aff)
    .margin({ right: 16 })

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }
    .width(55)
    .height(55)
    .backgroundColor(0x317aff)
    .margin({ right: 16 })

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }
    .width(55)
    .height(55)
    .backgroundColor(0x317aff)
  }
  .width('100%')
  .justifyContent(FlexAlign.Center)
  .margin({ top: 24 })

  Text('Travel money')
    .fontSize(16)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 24, left: 16 })

  Button('Create travel wallet')
    .width('90%')
    .height(40)
    .margin({ top: 8 })

  Text('Spending controls')
    .fontSize(16)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 24, left: 16 })

  Row() {
    Text('Contactless limit')
      .fontSize(14)
    Text(this.contactlessLimit)
      .fontSize(14)
      .fontWeight(FontWeight.Bold)
  }
  .width('90%')
  .justifyContent(FlexAlign.SpaceBetween)
  .margin({ top: 8 })

  Blank()

  Row() {
    Button() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Accounts').fontSize(12)
    }.layoutWeight(1).backgroundColor(Color.Transparent)

    Button() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Products').fontSize(12)
    }.layoutWeight(1).backgroundColor(Color.Transparent)

    Button() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Pay & Transfer').fontSize(12)
    }.layoutWeight(1).backgroundColor(Color.Transparent)

    Button() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Help').fontSize(12)
    }.layoutWeight(1).backgroundColor(Color.Transparent)
    .onClick(() => {
      router.pushUrl({ url: 'pages/Help' })
    })

    Button() {
      Image($r('app.media.template')).width(24).height(24)
      Text('More').fontSize(12)
    }.layoutWeight(1).backgroundColor(Color.Transparent)
    .onClick(() => {
      router.pushUrl({ url: 'pages/More' })
    })
  }
  .width('100%')
  .height(56)
  .backgroundColor(Color.White)
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
}