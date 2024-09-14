import router from '@ohos.router';



interface RecommendationItem {

  title: string;

  description: string;

  icon: Resource;

  color: string;

}



interface HotSearchItem {

  keyword: string;

}



@Entry

@Component

struct SearchPage {

  @State searchText: string = '';

  @State recommendations: RecommendationItem[] = [

    { title: '免费导诊', description: '为你量身推荐专家', icon: $r('app.media.template'), color: '#4CAF50' },

    { title: '新人问医生 9.9 元起', description: '立即咨询', icon: $r('app.media.template'), color: '#FF9800' },

    { title: '直播课件', description: '直播内容文字版 持续更新', icon: $r('app.media.template'), color: '#2196F3' },

    { title: '视频问医生', description: '面对面问诊 更安心', icon: $r('app.media.template'), color: '#FF9800' }

  ];

  @State hotSearches: HotSearchItem[] = [

    { keyword: '痔疮' }, { keyword: '湿疹' }, { keyword: '甲状腺结节' },

    { keyword: '寻麻疹' }, { keyword: '痛风' }, { keyword: '前列腺炎' }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24).margin({ right: 8 })

        TextInput({ placeholder: '搜索', text: this.searchText })

          .width('80%')

          .height(40)

          .backgroundColor('#F5F5F5')

          .borderRadius(20)

          .padding({ left: 16, right: 16 })

          .onChange((value: string) => {

            this.searchText = value;

          })

        Text('取消')

          .fontColor('#666666')

          .fontSize(16)

          .margin({ left: 8 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/HomePage' });

          })

      }.width('100%').padding(16)



      Text('热门推荐').fontSize(18).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 16, top: 16, bottom: 8 })



      Grid() {

        ForEach(this.recommendations, (item: RecommendationItem) => {

          GridItem() {

            Column() {

              Image(item.icon)

                .width(40)

                .height(40)

                .backgroundColor(item.color)

                .borderRadius(20)

              Text(item.title).fontSize(14).margin({ top: 8 })

              Text(item.description).fontSize(12).fontColor(Color.Gray)

            }.alignItems(HorizontalAlign.Center)

          }

        })

      }.columnsTemplate('1fr 1fr').rowsGap(16).columnsGap(16).padding(16)



      Text('热门搜索').fontSize(18).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 16, top: 16, bottom: 8 })



      Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {

        ForEach(this.hotSearches, (item: HotSearchItem) => {

          Text(item.keyword)

            .fontSize(14)

            .backgroundColor('#F0F0F0')

            .borderRadius(16)

            .padding(8)

            .margin(4)

        })

      }.padding(16)

    }.width('100%').height('100%')

  }

}