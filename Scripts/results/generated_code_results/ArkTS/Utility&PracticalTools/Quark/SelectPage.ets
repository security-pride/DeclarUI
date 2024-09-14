import router from '@ohos.router';



@Entry

@Component

struct SelectPage {

  @State batteryLevel: number = 65;

  @State searchText: string = '';



  @State frequentlyUsed: string[] = ['书签', '微博', '腾讯', '网易', '新浪网'];

  @State newDiscoveries: string[] = ['夸克热搜', '夸克高考', '携程旅行', '天天领现金', '梦幻西游', '微博热搜', '腾讯动漫', '新浪微博'];

  @State quarkFeatures: string[] = ['AI听记', '捷径', '夸克日报', '夸克扫描王', '夸克网盘', '书签', '实用工具', '夸克文档'];



  build() {

    Column() {

      Row() {

        Text('精选').fontSize(20).fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

        Text(`${this.batteryLevel}%`).fontSize(16)

      }.width('100%').padding(10).justifyContent(FlexAlign.SpaceBetween)



      Search({

        value: this.searchText,

        placeholder: '输入网址或网站名，网站访问一触即达',

        controller: new SearchController()

      })

        .width('90%')

        .height(40)

        .backgroundColor('#333333')

        .placeholderColor(Color.Gray)

        .onChange((value: string) => {

          this.searchText = value;

        })



      Scroll() {

        Column({ space: 20 }) {

          this.SectionBuilder('常用', this.frequentlyUsed)

          this.SectionBuilder('今日新发现', this.newDiscoveries, true)

          this.SectionBuilder('夸克宝藏功能', this.quarkFeatures, true)

          Text('全网热点实时更新').fontSize(16).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start)

        }.width('90%').padding({ top: 20, bottom: 20 })

      }.height('75%')



      Button('返回主页')

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })

        .width('90%')

        .height(40)

        .backgroundColor('#4169E1')

        .fontColor(Color.White)

    }.width('100%').height('100%').backgroundColor(Color.Black)

  }



  @Builder

  SectionBuilder(title: string, items: string[], isGrid: boolean = false) {

    Column({ space: 10 }) {

      Text(title).fontSize(16).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start)

      if (isGrid) {

        Grid() {

          ForEach(items, (item: string) => {

            GridItem() {

              Column() {

                Image($r('app.media.template')).width(40).height(40)

                Text(item).fontSize(12).margin({ top: 5 }).fontColor(Color.White)

              }

            }

          })

        }.columnsTemplate('1fr 1fr 1fr 1fr').rowsTemplate('1fr 1fr').width('100%').height(180)

      } else {

        Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap }) {

          ForEach(items, (item: string) => {

            Column() {

              Image($r('app.media.template')).width(40).height(40)

              Text(item).fontSize(12).margin({ top: 5 }).fontColor(Color.White)

            }.width('20%')

          })

        }

      }

    }

  }

}