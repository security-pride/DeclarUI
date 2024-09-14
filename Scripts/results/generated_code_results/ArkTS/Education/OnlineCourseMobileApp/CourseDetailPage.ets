import router from '@ohos.router';



interface Lesson {

  title: string;

  duration: string;

  status: 'locked' | 'unlocked';

}



@Entry

@Component

struct CourseDetailPage {

  @State currentTab: number = 0;

  @State lessons: Lesson[] = [

    { title: 'Graphics Design Introduction', duration: '12:34', status: 'unlocked' },

    { title: 'Shape & Line', duration: '12:34', status: 'locked' }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.back()

          })

        Text('Details Course')

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

      .backgroundColor('#F1F1F1')



      Scroll() {

        Column() {

          Row() {

            Text('GRAPICS DESIGN')

              .fontSize(14)

              .fontColor(Color.White)

              .backgroundColor('#4E7BFF')

              .padding(8)

              .borderRadius(4)

          }

          .width('100%')

          .height(120)

          .backgroundImage($r('app.media.template'))

          .backgroundImageSize(ImageSize.Cover)



          Text('How to make modern design for Beginner')

            .fontSize(24)

            .fontWeight(FontWeight.Bold)

            .margin({ top: 16, bottom: 8 })



          Row() {

            Image($r('app.media.template'))

              .width(40)

              .height(40)

              .borderRadius(20)

            Column() {

              Text('Nicola Tesla')

                .fontSize(16)

              Row() {

                Text('4.9')

                  .fontSize(14)

                  .fontColor('#FFA500')

                Text('(1.2k)')

                  .fontSize(14)

                  .fontColor(Color.Gray)

              }

            }

            .alignItems(HorizontalAlign.Start)

            .margin({ left: 8 })

          }

          .margin({ top: 8, bottom: 16 })



          Text('Lorem ipsum dolor sit amet consectetur. Mattis amet accumsan tellus sapien amet tempus elit feugiat. Elementum vulputate arcu urna.')

            .fontSize(16)

            .margin({ bottom: 16 })



          Row() {

            Text('Lessons')

              .fontSize(16)

              .fontWeight(FontWeight.Bold)

              .backgroundColor(this.currentTab === 0 ? '#4E7BFF' : Color.White)

              .fontColor(this.currentTab === 0 ? Color.White : Color.Black)

              .padding(8)

              .onClick(() => this.currentTab = 0)

            Text('Reviews')

              .fontSize(16)

              .fontWeight(FontWeight.Bold)

              .backgroundColor(this.currentTab === 1 ? '#4E7BFF' : Color.White)

              .fontColor(this.currentTab === 1 ? Color.White : Color.Black)

              .padding(8)

              .onClick(() => this.currentTab = 1)

          }

          .width('100%')

          .justifyContent(FlexAlign.SpaceEvenly)

          .margin({ bottom: 16 })



          if (this.currentTab === 0) {

            Column() {

              ForEach(this.lessons, (lesson: Lesson) => {

                Row() {

                  Column() {

                    Text(lesson.title)

                      .fontSize(16)

                      .fontWeight(FontWeight.Bold)

                    Text(lesson.duration)

                      .fontSize(14)

                      .fontColor(Color.Gray)

                  }

                  .alignItems(HorizontalAlign.Start)

                  .layoutWeight(1)



                  if (lesson.status === 'unlocked') {

                    Button({ type: ButtonType.Circle, stateEffect: true }) {

                      Image($r('app.media.template')).width(24).height(24)

                    }

                    .width(40)

                    .height(40)

                    .backgroundColor('#4E7BFF')

                  } else {

                    Image($r('app.media.template'))

                      .width(24)

                      .height(24)

                  }

                }

                .width('100%')

                .padding(16)

                .backgroundColor(Color.White)

                .borderRadius(8)

                .margin({ bottom: 8 })

              })

            }

          } else {

            // Reviews content would go here

          }

        }

        .padding(16)

      }

      .layoutWeight(1)



      Button('Buy $23.00')

        .width('90%')

        .height(50)

        .backgroundColor('#4E7BFF')

        .margin({ bottom: 16 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F1F1')

  }

}