import router from '@ohos.router';



interface TagItem {

  text: string;

}



interface DepartmentItem {

  name: string;

  icon: Resource;

}



interface FeaturedItem {

  title: string;

  description: string;

  price?: string;

  icon?: Resource;

  action?: string;

}



@Entry

@Component

struct HomePage {

  @State searchText: string = '';

  @State tags: TagItem[] = [

    { text: '每日辟谣' },

    { text: '免费导诊' },

    { text: '痔疮' },

    { text: '甲状腺结节' },

    { text: '寻麻疹' },

    { text: '痛风' }

  ];

  @State featured: FeaturedItem[] = [

    { title: '问医生', description: '全国三甲医生', icon: $r('app.media.template') },

    { title: '查疾病', description: '权威疾病百科', icon: $r('app.media.template') },

    { title: '查药品', description: '7万药品说明书', icon: $r('app.media.template') }

  ];

  @State departments: DepartmentItem[] = [

    { name: '皮肤科', icon: $r('app.media.template') },

    { name: '儿科', icon: $r('app.media.template') },

    { name: '妇产科', icon: $r('app.media.template') },

    { name: '消化内科', icon: $r('app.media.template') },

    { name: '更多科室', icon: $r('app.media.template') }

  ];



  build() {

    Column() {

      Row() {

        Text('丁香医生').fontSize(20).fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').padding(16)



      Row() {

        TextInput({ placeholder: '甲流发烧几天' })

          .width('80%')

          .height(40)

          .backgroundColor('#F5F5F5')

          .borderRadius(20)

          .padding({ left: 16, right: 16 })

          .onChange((value: string) => {

            this.searchText = value;

          })

        Text('搜索')

          .fontSize(16)

          .fontColor(Color.Blue)

          .margin({ left: 8 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/SearchPage' })

          })

      }.width('100%').padding({ left: 16, right: 16, bottom: 8 })



      Scroll() {

        Column() {

          Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {

            ForEach(this.tags, (tag: TagItem) => {

              Text(tag.text)

                .fontSize(14)

                .backgroundColor('#F0F0F0')

                .borderRadius(16)

                .padding(8)

                .margin(4)

            })

          }.width('100%').padding({ left: 16, right: 16 })



          Row() {

            ForEach(this.featured, (item: FeaturedItem) => {

              Column() {

                Image(item.icon).width(40).height(40)

                Text(item.title).fontSize(14).margin({ top: 4 })

                Text(item.description).fontSize(12).fontColor(Color.Gray)

              }.width('33%').alignItems(HorizontalAlign.Center)

            })

          }.width('100%').padding(16)



          Column() {

            Row() {

              Text('免费导诊').fontSize(16).fontWeight(FontWeight.Bold)

              Text('描述问题，精准推荐医生').fontSize(14).fontColor(Color.Gray)

              Blank()

              Text('24小时在线').fontSize(14).fontColor(Color.Blue)

            }.width('100%')



            Button('立即咨询', { type: ButtonType.Normal })

              .width('100%')

              .height(40)

              .margin({ top: 8 })

          }.width('100%').padding(16).backgroundColor('#F5F5F5').borderRadius(8)



          Row() {

            Column() {

              Text('视频问诊').fontSize(16).fontWeight(FontWeight.Bold)

              Text('面对面更安心').fontSize(14).fontColor(Color.Gray)

            }

            Column() {

              Text('新人义诊').fontSize(16).fontWeight(FontWeight.Bold)

              Text('9.9元起问医生').fontSize(14).fontColor(Color.Gray)

            }

          }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)



          Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.SpaceBetween }) {

            ForEach(this.departments, (dept: DepartmentItem) => {

              Column() {

                Image(dept.icon).width(40).height(40)

                Text(dept.name).fontSize(14).margin({ top: 4 })

              }.width('20%').alignItems(HorizontalAlign.Center).margin({ bottom: 16 })

            })

          }.width('100%').padding({ left: 16, right: 16 })



          Column() {

            Text('缓解痛风的一个小习惯，要坚持').fontSize(16).fontWeight(FontWeight.Bold)

            Row() {

              Text('健康日历').fontSize(14).fontColor(Color.Gray)

              Text('2.6万人查看').fontSize(14).fontColor(Color.Gray)

              Blank()

              Button('去了解', { type: ButtonType.Normal })

                .height(32)

                .backgroundColor(Color.Blue)

                .fontColor(Color.White)

            }.width('100%').margin({ top: 8 })

          }.width('100%').padding(16).backgroundColor('#F5F5F5').borderRadius(8)

        }

      }.width('100%').height('80%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('首页').fontSize(12)

        }.width('25%').onClick(() => {

          // Already on home page

        })

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('问医生').fontSize(12)

        }.width('25%').onClick(() => {

          router.pushUrl({ url: 'pages/SearchPage' })

        })

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('查病查药').fontSize(12)

        }.width('25%').onClick(() => {

          router.pushUrl({ url: 'pages/SearchMedicineDiseasePage' })

        })

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的').fontSize(12)

        }.width('25%').onClick(() => {

          router.pushUrl({ url: 'pages/ProfilePage' })

        })

      }.width('100%').backgroundColor(Color.White)

    }

  }

}