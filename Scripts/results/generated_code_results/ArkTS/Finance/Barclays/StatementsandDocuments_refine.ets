import router from '@ohos.router';
@Entry
@Component
struct StatementsAndDocumentsPage {
@State currentIndex: number = 0;
@State statements: { date: string, description: string }[] = [
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
.width(24).height(24)
.onClick(() => router.back())
Text('Statements and documents')
.fontSize(20)
.fontWeight(FontWeight.Bold)
Blank()
Image($r('app.media.template'))
.width(24).height(24)
.onClick(() => router.pushUrl({ url: 'pages/Help' }))
}.width('100%').height(60).padding({ left: 16, right: 16 })
  Text('20-25-24 90427500')
    .fontSize(16)
    .margin({ top: 8, bottom: 16 })

  Tabs({ barPosition: BarPosition.Start }) {
    TabContent() {
      Column() {
        Text('2024')
          .fontSize(18)
          .fontWeight(FontWeight.Bold)
          .margin({ top: 16, bottom: 8 })
          .alignSelf(ItemAlign.Start)

        List() {
          ForEach(this.statements, (item) => {
            ListItem() {
              Row() {
                Column() {
                  Text(item.description)
                    .fontSize(16)
                    .maxLines(2)
                    .textOverflow({ overflow: TextOverflow.Ellipsis })
                  Text(item.date)
                    .fontSize(14)
                    .fontColor(Color.Gray)
                }.layoutWeight(1)
                Image($r('app.media.template')).width(24).height(24)
              }.width('100%').height(80).padding({ left: 16, right: 16 })
            }
          })
        }.width('100%')
      }.width('100%')
    }.tabBar('Statements')

    TabContent() {
      // Documents tab content
    }.tabBar('Documents')
  }
  .vertical(false)
  .barMode(BarMode.Fixed)
  .barWidth('100%')
  .barHeight(56)
  .animationDuration(300)
  .onChange((index: number) => {
    this.currentIndex = index
  })

  Blank()

  Row() {
    this.NavBarItem('Accounts', $r('app.media.template'), () => router.pushUrl({ url: 'pages/Home' }))
    this.NavBarItem('Products', $r('app.media.template'))
    this.NavBarItem('Pay & Transfer', $r('app.media.template'))
    this.NavBarItem('Help', $r('app.media.template'), () => router.pushUrl({ url: 'pages/Help' }))
    this.NavBarItem('More', $r('app.media.template'), () => router.pushUrl({ url: 'pages/More' }))
  }
  .width('100%')
  .height(80)
  .backgroundColor(Color.Blue)
  .position({ y: 2046 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
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