import router from '@ohos.router';
@Entry
@Component
struct HomePage {
@State userName: string = 'Miss Muyi Li';
@State accountType: string = 'STUDENT ADDITIONS';
@State balance: string = '£3,760.06';
@State accountDetails: string = 'Available balance | 20-25-24 90427500';
build() {
Column() {
Row() {
Image($r('app.media.template')).width(24).height(24)
Text(this.userName).fontSize(20).fontWeight(FontWeight.Bold)
Blank()
Image($r('app.media.template')).width(24).height(24)
}.width('100%').padding(10)
  Column() {
    Image($r('app.media.template')).width(40).height(40)
    Text(this.accountType).fontSize(16).fontWeight(FontWeight.Bold)
    Text(this.balance).fontSize(32).fontWeight(FontWeight.Bold)
    Text(this.accountDetails).fontSize(14)
  }.alignItems(HorizontalAlign.Center).padding(20)

  Column() {
    Text('Dreaming of your first home?').fontSize(18).fontWeight(FontWeight.Bold)
    Text('You could buy with a 5% deposit. Tap to get started. T&Cs apply.').fontSize(14)
  }.backgroundColor(Color.White).padding(15).margin(10).borderRadius(10)

  Flex({ justifyContent: FlexAlign.SpaceAround, alignItems: ItemAlign.Center }) {
    Column() {
      Image($r('app.media.template')).width(50).height(50)
      Text('Your cards').fontSize(12)
    }.onClick(() => {
      router.pushUrl({ url: 'pages/Cards' })
    })
    Column() {
      Image($r('app.media.template')).width(50).height(50)
      Text('Your rewards').fontSize(12)
    }
    Column() {
      Image($r('app.media.template')).width(50).height(50)
      Text('Spending').fontSize(12)
    }
    Column() {
      Image($r('app.media.template')).width(50).height(50)
      Text('Mobile PINsentry').fontSize(12)
    }
  }.padding({ top: 20, bottom: 20 })

  Column() {
    Text('Living more sustainably').fontSize(18).fontWeight(FontWeight.Bold)
    Image($r('app.media.template'))
      .width('100%')
      .height(200)
      .objectFit(ImageFit.Cover)
  }.margin({ top: 20 })

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Accounts').fontSize(12)
    }
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Products').fontSize(12)
    }
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Pay & Transfer').fontSize(12)
    }
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Help').fontSize(12)
    }.onClick(() => {
      router.pushUrl({ url: 'pages/Help' })
    })
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('More').fontSize(12)
    }.onClick(() => {
      router.pushUrl({ url: 'pages/More' })
    })
  }
  .width('100%')
  .height(60)
  .backgroundColor(Color.White)
  .justifyContent(FlexAlign.SpaceAround)
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
}