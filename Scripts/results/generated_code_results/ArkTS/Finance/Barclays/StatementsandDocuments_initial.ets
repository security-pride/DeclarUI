import router from '@ohos.router';
@Entry
@Component
struct StatementsAndDocumentsPage {
@State currentTab: number = 0;
@State statements: Array<{ date: string, description: string }> = [
{ date: '11 Jul', description: 'Statement 11-JUL-24 AC 90427500 13043626' },
{ date: '11 Jun', description: 'Statement 11-JUN-24 AC 90427500 13043605' },
{ date: '10 May', description: 'Statement 10-MAY-24 AC 90427500 13053150' },
{ date: '11 Apr', description: 'Statement 11-APR-24 AC 90427500 15105508' },
{ date: '11 Mar', description: 'Statement 11-MAR-24 AC 90427500 13050608' },
{ date: '09 Feb', description: 'Statement 09-FEB-24 AC 90427500 11043935' },
{ date: '11 Jan', description: 'Statement 11-JAN-24 AC 90427500 13043928' }
];
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24)
.height(24)
.onClick(() => {
router.back();
})
Text('Statements and documents')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.margin({ left: 16 })
Blank()
Image($r('app.media.template'))
.width(24)
.height(24)
.onClick(() => {
router.pushUrl({ url: 'pages/Help' })
})
}
.width('100%')
.height(56)
.padding({ left: 16, right: 16 })
  Text('20-25-24 90427500')
    .fontSize(16)
    .margin({ top: 8, bottom: 16 })

  Tabs() {
    TabContent() {
      Column() {
        Text('2024')
          .fontSize(18)
          .fontWeight(FontWeight.Bold)
          .margin({ top: 16, bottom: 8 })
        List() {
          ForEach(this.statements, (item) => {
            ListItem() {
              Row() {
                Text(item.description)
                  .fontSize(16)
                  .layoutWeight(1)
                Text(item.date)
                  .fontSize(16)
                Image($r('app.media.template'))
                  .width(24)
                  .height(24)
              }
              .width('100%')
              .height(56)
              .padding({ left: 16, right: 16 })
            }
          })
        }
      }
    }.tabBar('Statements')

    TabContent() {
      // Documents tab content
    }.tabBar('Documents')
  }
  .barMode(BarMode.Fixed)
  .barWidth('100%')
  .barHeight(56)

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Accounts').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Home' }))

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
    }.onClick(() => router.pushUrl({ url: 'pages/Help' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('More').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/More' }))
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