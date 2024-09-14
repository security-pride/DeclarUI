import router from '@ohos.router';



interface HotTopic {

  title: string;

  description: string;

  icon: Resource;

}



interface DiseaseCategory {

  name: string;

  icon: Resource;

}



interface MedicineCategory {

  name: string;

  tag?: string;

}



@Entry

@Component

struct SearchMedicineDiseasePage {

  @State searchText: string = '';

  @State hotTopics: HotTopic[] = [

    { title: '登革热防范手册', description: '蚊虫叮咬传播，注意预防', icon: $r('app.media.template') },

    { title: '了解左氧氟沙星', description: '使用抗生素，务必遵医嘱', icon: $r('app.media.template') },

    { title: '流感应对手册', description: '流感高发，助你科学应对', icon: $r('app.media.template') },

    { title: '了解司美格鲁肽', description: '合理用药，健康科学减肥', icon: $r('app.media.template') }

  ];

  @State diseaseCategories: DiseaseCategory[] = [

    { name: '痔疮', icon: $r('app.media.template') },

    { name: '湿疹', icon: $r('app.media.template') },

    { name: '带状疱疹', icon: $r('app.media.template') },

    { name: '口腔溃疡', icon: $r('app.media.template') },

    { name: '足癣', icon: $r('app.media.template') },

    { name: '高血压', icon: $r('app.media.template') },

    { name: '糖尿病', icon: $r('app.media.template') },

    { name: '甲状腺结节', icon: $r('app.media.template') }

  ];

  @State medicineCategories: MedicineCategory[] = [

    { name: '奥司他韦', tag: 'HOT' },

    { name: '布洛芬混悬液' }

  ];



  build() {

    Column() {

      Row() {

        Text('健康百科').fontSize(20).fontWeight(FontWeight.Bold)

        Text('三甲医生专业编审·丁香医生官方出品').fontSize(12).fontColor(Color.Gray)

      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding({ top: 10, bottom: 10 })



      Search({ value: this.searchText, placeholder: '搜一搜：疾病/症状/药品/健康问题' })

        .width('100%')

        .height(40)

        .backgroundColor('#F5F5F5')

        .onChange((value: string) => {

          this.searchText = value

        })



      Scroll() {

        Column() {

          Text('近期热点').fontSize(18).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ top: 20, bottom: 10 })

          Grid() {

            ForEach(this.hotTopics, (topic: HotTopic) => {

              GridItem() {

                Column() {

                  Image(topic.icon).width(30).height(30)

                  Text(topic.title).fontSize(14).margin({ top: 5 })

                  Text(topic.description).fontSize(12).fontColor(Color.Gray)

                }.width('100%').height(100).backgroundColor(Color.White).borderRadius(8).padding(10)

              }

            })

          }.columnsTemplate('1fr 1fr').rowsGap(10).columnsGap(10)



          Row() {

            Text('查疾病').fontSize(18).fontWeight(FontWeight.Bold)

            Text('疾病/症状全了解').fontSize(14).fontColor(Color.Gray)

            Text('查看更多 >').fontSize(14).fontColor(Color.Blue)

          }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 20, bottom: 10 })



          Grid() {

            ForEach(this.diseaseCategories, (category: DiseaseCategory) => {

              GridItem() {

                Column() {

                  Image(category.icon).width(30).height(30)

                  Text(category.name).fontSize(14).margin({ top: 5 })

                }.onClick(() => {

                  router.pushUrl({ url: 'pages/DiseaseDetailPage' })

                })

              }

            })

          }.columnsTemplate('1fr 1fr 1fr 1fr').rowsGap(10).columnsGap(10)



          Row() {

            Text('查药品').fontSize(18).fontWeight(FontWeight.Bold)

            Text('药品说明随手查').fontSize(14).fontColor(Color.Gray)

            Text('查看更多 >').fontSize(14).fontColor(Color.Blue)

          }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 20, bottom: 10 })



          ForEach(this.medicineCategories, (medicine: MedicineCategory) => {

            Row() {

              Text(medicine.name).fontSize(16)

              if (medicine.tag) {

                Text(medicine.tag)

                  .fontSize(12)

                  .fontColor(Color.Red)

                  .backgroundColor(Color.Pink)

                  .padding({ left: 5, right: 5, top: 2, bottom: 2 })

                  .borderRadius(10)

                  .margin({ left: 5 })

              }

            }.width('100%').justifyContent(FlexAlign.Start).padding({ top: 10, bottom: 10 })

            .onClick(() => {

              // Handle medicine item click

            })

          })

        }.width('100%').padding({ left: 16, right: 16 })

      }.width('100%').height('85%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('首页').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('问医生').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('查病查药').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的').fontSize(12)

        }

      }.width('100%').justifyContent(FlexAlign.SpaceAround).backgroundColor(Color.White).position({ y: '95%' })

    }.width('100%').height('100%')

  }

}