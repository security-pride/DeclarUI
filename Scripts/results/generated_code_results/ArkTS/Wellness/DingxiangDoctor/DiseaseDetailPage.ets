import router from '@ohos.router';



interface ExpertInfo {

  name: string;

  title: string;

  hospital: string;

}



@Entry

@Component

struct DiseaseDetailPage {

  @State currentTab: number = 0;

  @State isCollected: boolean = false;

  

  private tabs: string[] = ['简介', '症状', '病因', '诊断', '治疗', '生活'];

  private experts: ExpertInfo[] = [

    { name: '苗冬青', title: '词条作者', hospital: '东海县人民医院口腔科' },

    { name: '李恒', title: '审核专家', hospital: '复旦大学附属口腔医院' }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/SearchMedicineDiseasePage' })

          })

        Text('口腔溃疡')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16 })

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 16 })

      }

      .width('100%')

      .height(56)

      .backgroundColor('#F1F3F5')



      Scroll() {

        Column() {

          Row() {

            Text('就诊科室：口腔科')

              .fontSize(14)

              .margin({ top: 16, bottom: 16 })

          }

          .width('100%')

          .padding({ left: 16, right: 16 })



          ForEach(this.experts, (expert: ExpertInfo) => {

            Row() {

              Column() {

                Image($r('app.media.template'))

                  .width(40)

                  .height(40)

                  .borderRadius(20)

              }

              Column() {

                Text(expert.name)

                  .fontSize(16)

                  .fontWeight(FontWeight.Bold)

                Text(expert.title)

                  .fontSize(14)

                  .margin({ top: 4 })

                Text(expert.hospital)

                  .fontSize(14)

                  .margin({ top: 4 })

              }

              .alignItems(HorizontalAlign.Start)

              .margin({ left: 12 })

            }

            .width('100%')

            .margin({ top: 12, bottom: 12 })

          })



          Tabs({ barPosition: BarPosition.Start, index: this.currentTab }) {

            ForEach(this.tabs, (tabName: string, index: number) => {

              TabContent() {

                if (index === 0) {

                  Column() {

                    Text('口腔溃疡是什么?')

                      .fontSize(18)

                      .fontWeight(FontWeight.Bold)

                      .margin({ top: 16, bottom: 8 })

                    Text('口腔溃疡又称口腔黏膜溃疡，俗称「口疮」，是指在舌、唇内侧、牙龈、颊黏膜、腭等口腔黏膜的上皮完整性发生连续性缺损或破坏，因表层坏死脱落而形成了凹陷。')

                      .fontSize(16)

                      .margin({ bottom: 16 })

                    Text('一般情况下，口腔溃疡都有明显的疼痛感，最常见的是伴有烧灼感的疼痛。溃疡比较大时，疼痛感更加剧烈，说话、吃饭等会使得溃疡的疼痛感更加明显。')

                      .fontSize(16)

                  }

                  .width('100%')

                  .padding({ left: 16, right: 16 })

                }

              }.tabBar(tabName)

            })

          }

          .width('100%')

          .height('100%')

          .barMode(BarMode.Scrollable)

        }

      }

      .width('100%')

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('首页')

            .fontSize(12)

            .margin({ top: 4 })

        }

        .width('25%')

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('查疾病药品')

            .fontSize(12)

            .margin({ top: 4 })

        }

        .width('25%')

        .onClick(() => {

          router.pushUrl({ url: 'pages/SearchMedicineDiseasePage' })

        })



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('问医生')

            .fontSize(12)

            .margin({ top: 4 })

        }

        .width('25%')



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('我的')

            .fontSize(12)

            .margin({ top: 4 })

        }

        .width('25%')

        .onClick(() => {

          router.pushUrl({ url: 'pages/ProfilePage' })

        })

      }

      .width('100%')

      .height(56)

      .backgroundColor(Color.White)

    }

  }

}