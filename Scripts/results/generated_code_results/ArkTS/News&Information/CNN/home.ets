import router from '@ohos.router';
@Entry
@Component
struct Home {
@State categories: string[] = ['Top News', 'Your CNN', 'World', 'U.S. Politics', 'Business'];
@State selectedCategory: number = 0;
build() {
Column() {
Row() {
Image($r('app.media.template')).width(60).height(30)
Blank()
Image($r('app.media.template')).width(24).height(24)
}.width('100%').height(50).padding({ left: 10, right: 10 })
  Row() {
    ForEach(this.categories, (category: string, index: number) => {
      Text(category)
        .fontSize(16)
        .fontWeight(this.selectedCategory === index ? FontWeight.Bold : FontWeight.Normal)
        .padding({ left: 10, right: 10 })
        .onClick(() => {
          this.selectedCategory = index;
        })
    })
  }.width('100%').height(50).scrollable(ScrollDirection.Horizontal)

  Scroll() {
    Column() {
      Stack() {
        Image($r('app.media.template')).width('100%').height(300).objectFit(ImageFit.Cover)
        Text('BUTLER FARM SHOW GROUNDS')
          .fontSize(14)
          .position({ x: 10, y: 10 })
          .fontColor(Color.White)
      }

      Text('Minute-by-minute: Visual timeline of the assassination attempt on Donald Trump')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .padding(10)
      Text('7h ago').fontSize(14).fontColor(Color.Gray).padding({ left: 10 })

      Column() {
        Text('LIVE UPDATES')
          .fontSize(16)
          .fontColor(Color.Red)
          .padding(10)
        Text("Biden condemns Trump shooting; authorities search for gunman's motive")
          .fontSize(18)
          .fontWeight(FontWeight.Bold)
          .padding(10)
      }.margin({ top: 20, bottom: 20 })

      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('VIDEO').fontSize(16).fontColor(Color.Red).margin({ left: 10 })
      }.padding(10)

      Text("Watch Biden's entire Oval Office address")
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .padding(10)

      Text('ANALYSIS')
        .fontSize(16)
        .fontColor(Color.Gray)
        .padding(10)
      Text('A nation traumatized and a campaign transformed as Trump is set to reemerge')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .padding(10)
    }.width('100%')
  }.layoutWeight(1)

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12).fontColor(Color.Red)
    }.layoutWeight(1).onClick(() => {})

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Elections').fontSize(12)
    }.layoutWeight(1).onClick(() => {
      router.pushUrl({ url: 'pages/Elections' })
    })

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Watch').fontSize(12)
    }.layoutWeight(1)

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Settings').fontSize(12)
    }.layoutWeight(1).onClick(() => {
      router.pushUrl({ url: 'pages/Settings' })
    })
  }.width('100%').height(60).backgroundColor(Color.White)
}.width('100%').height('100%')
}
}