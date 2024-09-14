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
.margin({ top: 89.98026, bottom: 20 })
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
    this.QuickLinkItem('Report fraud', $r('app.media.template'))
    this.QuickLinkItem('Cards', $r('app.media.template'))
    this.QuickLinkItem('Statements', $r('app.media.template'))
  }
  .width('90%')
  .justifyContent(FlexAlign.SpaceBetween)
  .margin({ bottom: 20 })

  Text('Help topics')
    .fontSize(18)
    .fontWeight(FontWeight.Medium)
    .alignSelf(ItemAlign.Start)
    .margin({ left: '5%', bottom: 10 })

  List() {
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Browse all topics')
          .fontSize(16)
          .margin({ left: 10 })
        Blank()
        Text('>')
          .fontSize(16)
      }
      .width('100%')
      .padding(10)
    }
    .backgroundColor(Color.White)
    .height(60)
  }
  .width('90%')
  .margin({ bottom: 20 })

  Text('More help')
    .fontSize(18)
    .fontWeight(FontWeight.Medium)
    .alignSelf(ItemAlign.Start)
    .margin({ left: '5%', bottom: 10 })

  List() {
    ListItem() {
      this.MoreHelpItem('Money worries and support', $r('app.media.template'))
    }
    ListItem() {
      this.MoreHelpItem('Accessible services', $r('app.media.template'))
    }
    ListItem() {
      this.MoreHelpItem('Our service status', $r('app.media.template'))
    }
    ListItem() {
      this.MoreHelpItem('Tour the app', $r('app.media.template'))
    }
  }
  .width('90%')

  Blank()

  Row() {
    this.NavBarItem('Accounts', $r('app.media.template'), () => router.pushUrl({ url: 'pages/Home' }))
    this.NavBarItem('Products', $r('app.media.template'))
    this.NavBarItem('Pay & Transfer', $r('app.media.template'))
    this.NavBarItem('Help', $r('app.media.template'))
    this.NavBarItem('More', $r('app.media.template'), () => router.pushUrl({ url: 'pages/More' }))
  }
  .width('100%')
  .height(124.429)
  .backgroundColor(Color.Blue)
  .position({ y: 2195.902 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
@Builder
QuickLinkItem(text: string, icon: Resource) {
Column() {
Image(icon)
.width(60)
.height(60)
Text(text)
.fontSize(14)
.margin({ top: 5 })
}
.alignItems(HorizontalAlign.Center)
.onClick(() => {
if (text === 'Cards') {
router.pushUrl({ url: 'pages/Cards' })
} else if (text === 'Statements') {
router.pushUrl({ url: 'pages/StatementsandDocuments' })
}
})
}
@Builder
MoreHelpItem(text: string, icon: Resource) {
Row() {
Image(icon).width(24).height(24)
Text(text)
.fontSize(16)
.margin({ left: 10 })
Blank()
Text('>')
.fontSize(16)
}
.width('100%')
.padding(10)
.backgroundColor(Color.White)
}
@Builder
NavBarItem(text: string, icon: Resource, onClick?: () => void) {
Column() {
Image(icon).width(24).height(24)
Text(text).fontSize(12).fontColor(Color.White)
}
.alignItems(HorizontalAlign.Center)
.onClick(onClick)
}
}