import router from '@ohos.router';
@Entry
@Component
struct HelpPage {
@State searchText: string = '';
build() {
Column() {
Text('Help')
.fontSize(24)
.fontWeight(FontWeight.Bold)
.margin({ top: 20, bottom: 20 })
  Search({ value: this.searchText, placeholder: 'Search or ask a question' })
    .width('90%')
    .height(40)
    .margin({ bottom: 20 })
    .onChange((value: string) => {
      this.searchText = value;
    })

  Text('Quick links')
    .fontSize(18)
    .fontWeight(FontWeight.Medium)
    .alignSelf(ItemAlign.Start)
    .margin({ left: '5%', bottom: 10 })

  Row() {
    Column() {
      Image($r('app.media.template'))
        .width(60)
        .height(60)
      Text('Report fraud').fontSize(14)
    }.onClick(() => {
      // Handle Report fraud action
    })

    Column() {
      Image($r('app.media.template'))
        .width(60)
        .height(60)
      Text('Cards').fontSize(14)
    }.onClick(() => {
      router.pushUrl({ url: 'pages/Cards' })
    })

    Column() {
      Image($r('app.media.template'))
        .width(60)
        .height(60)
      Text('Statements').fontSize(14)
    }.onClick(() => {
      router.pushUrl({ url: 'pages/StatementsandDocuments' })
    })
  }.width('90%').justifyContent(FlexAlign.SpaceBetween)

  Text('Help topics')
    .fontSize(18)
    .fontWeight(FontWeight.Medium)
    .alignSelf(ItemAlign.Start)
    .margin({ left: '5%', top: 20, bottom: 10 })

  List() {
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Browse all topics').fontSize(16).margin({ left: 10 })
        Blank()
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').padding(10)
    }
    .backgroundColor(Color.White)
    .borderRadius(8)
  }.width('90%')

  Text('More help')
    .fontSize(18)
    .fontWeight(FontWeight.Medium)
    .alignSelf(ItemAlign.Start)
    .margin({ left: '5%', top: 20, bottom: 10 })

  List() {
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Money worries and support').fontSize(16).margin({ left: 10 })
        Blank()
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').padding(10)
    }
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Accessible services').fontSize(16).margin({ left: 10 })
        Blank()
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').padding(10)
    }
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Our service status').fontSize(16).margin({ left: 10 })
        Blank()
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').padding(10)
    }
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Tour the app').fontSize(16).margin({ left: 10 })
        Blank()
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').padding(10)
    }
  }.width('90%')

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Accounts').fontSize(12)
    }.onClick(() => {
      router.pushUrl({ url: 'pages/Home' })
    })

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
    }

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