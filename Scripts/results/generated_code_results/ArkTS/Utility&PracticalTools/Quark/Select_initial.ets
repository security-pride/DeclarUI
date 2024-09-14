import router from '@ohos.router';



@Entry

@Component

struct SelectPage {

  @State batteryLevel: number = 65;

  @State searchText: string = '';



  build() {

    Column() {

      Row() {

        Text('精选').fontSize(20).fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

        Text(`${this.batteryLevel}%`).fontSize(16)

      }.width('100%').padding(10).justifyContent(FlexAlign.SpaceBetween)



      Search({ value: this.searchText, placeholder: '输入网址或网站名，网站访问一触即达' })

        .width('90%')

        .height(40)

        .backgroundColor('#333333')

        .placeholderColor(Color.Gray)

        .textColor(Color.White)

        .onChange((value: string) => {

          this.searchText = value;

        })



      Scroll() {

        Column() {

          Text('常用').fontSize(16).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ top: 20, bottom: 10 })

          Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap }) {

            this.IconButton('书签', $r('app.media.template'))

            this.IconButton('微博', $r('app.media.template'))

            this.IconButton('腾讯', $r('app.media.template'))

            this.IconButton('网易', $r('app.media.template'))

            this.IconButton('新浪网', $r('app.media.template'))

          }.width('100%')



          Text('今日新发现').fontSize(16).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ top: 20, bottom: 10 })

          Grid() {

            GridItem() { this.IconButton('夸克热搜', $r('app.media.template')) }

            GridItem() { this.IconButton('夸克高考', $r('app.media.template')) }

            GridItem() { this.IconButton('携程旅行', $r('app.media.template')) }

            GridItem() { this.IconButton('天天领现金', $r('app.media.template')) }

            GridItem() { this.IconButton('梦幻西游', $r('app.media.template')) }

            GridItem() { this.IconButton('微博热搜', $r('app.media.template')) }

            GridItem() { this.IconButton('腾讯动漫', $r('app.media.template')) }

            GridItem() { this.IconButton('新浪微博', $r('app.media.template')) }

          }.columnsTemplate('1fr 1fr 1fr 1fr').rowsTemplate('1fr 1fr').width('100%').height(200)



          Text('夸克宝藏功能').fontSize(16).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ top: 20, bottom: 10 })

          Grid() {

            GridItem() { this.IconButton('AI听记', $r('app.media.template')) }

            GridItem() { this.IconButton('捷径', $r('app.media.template')) }

            GridItem() { this.IconButton('夸克日报', $r('app.media.template')) }

            GridItem() { this.IconButton('夸克扫描王', $r('app.media.template')) }

            GridItem() { this.IconButton('夸克网盘', $r('app.media.template')) }

            GridItem() { this.IconButton('书签', $r('app.media.template')) }

            GridItem() { this.IconButton('实用工具', $r('app.media.template')) }

            GridItem() { this.IconButton('夸克文档', $r('app.media.template')) }

          }.columnsTemplate('1fr 1fr 1fr 1fr').rowsTemplate('1fr 1fr').width('100%').height(200)



          Text('全网热点实时更新').fontSize(16).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ top: 20, bottom: 10 })

        }.width('90%')

      }.height('80%')



      Row() {

        Button() {

          Text('返回主页').fontSize(16)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })

      }.width('100%').justifyContent(FlexAlign.Center).margin({ top: 10 })

    }.width('100%').height('100%').backgroundColor(Color.Black)

  }



  @Builder

  IconButton(text: string, icon: Resource) {

    Column() {

      Image(icon).width(50).height(50)

      Text(text).fontSize(14).margin({ top: 5 }).fontColor(Color.White)

    }.alignItems(HorizontalAlign.Center)

  }

}