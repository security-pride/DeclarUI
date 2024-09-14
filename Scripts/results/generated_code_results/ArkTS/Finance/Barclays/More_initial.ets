import router from '@ohos.router';
@Entry
@Component
struct MorePage {
@State lastLogin: string = '21:28, 10th Jul 2024';
@Builder
MenuItem(icon: Resource, text: string, onClick?: () => void) {
Row() {
Image(icon)
.width(24)
.height(24)
.margin({ right: 16 })
Text(text)
.fontSize(16)
.fontColor('#007DFF')
Blank()
Image($r('app.media.template'))
.width(24)
.height(24)
}
.height(56)
.onClick(onClick)
}
build() {
Column() {
Row() {
Text('More')
.fontSize(20)
.fontWeight(FontWeight.Bold)
Blank()
Text('Logout')
.fontSize(16)
.fontColor('#007DFF')
.onClick(() => {
// Handle logout logic
})
}
.width('100%')
.padding({ left: 16, right: 16, top: 16, bottom: 16 })
  List() {
    ListItem() {
      this.MenuItem($r('app.media.template'), 'Statements and documents', () => {
        router.pushUrl({ url: 'pages/StatementsandDocuments' })
      })
    }
    ListItem() {
      this.MenuItem($r('app.media.template'), 'Cards', () => {
        router.pushUrl({ url: 'pages/Cards' })
      })
    }
    ListItem() {
      this.MenuItem($r('app.media.template'), 'Manage accounts')
    }
    ListItem() {
      this.MenuItem($r('app.media.template'), 'Subscriptions')
    }
    ListItem() {
      this.MenuItem($r('app.media.template'), 'Spending')
    }
    ListItem() {
      this.MenuItem($r('app.media.template'), 'Rewards')
    }
    ListItem() {
      this.MenuItem($r('app.media.template'), 'Mobile PINsentry')
    }
    ListItem() {
      this.MenuItem($r('app.media.template'), 'Settings')
    }
  }
  .backgroundColor(Color.White)
  .borderRadius(16)
  .margin({ top: 16, left: 16, right: 16 })

  Text(`Last log in ${this.lastLogin}`)
    .fontSize(14)
    .fontColor(Color.Gray)
    .margin({ top: 16 })

  Text('Independent service quality survey results')
    .fontSize(14)
    .fontColor('#007DFF')
    .margin({ top: 8 })
    .onClick(() => {
      // Handle survey results navigation
    })

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
    }.onClick(() => {
      router.pushUrl({ url: 'pages/Help' })
    })

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('More').fontSize(12)
    }
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