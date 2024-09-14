import router from '@ohos.router';



interface Instructor {

  name: string;

  title: string;

  avatar: Resource;

}



interface Lesson {

  title: string;

  instructor: string;

  duration: string;

  thumbnail: Resource;

}



@Entry

@Component

struct MyListPage {

  @State instructors: Instructor[] = [

    {

      name: 'Boniface Esanji',

      title: 'Teaches Guitar',

      avatar: $r('app.media.template')

    }

  ];



  @State lessons: Lesson[] = [

    {

      title: 'Gift yourself this UI Kit and enjoy!',

      instructor: 'John Wiseberg',

      duration: '08:12',

      thumbnail: $r('app.media.template')

    },

    {

      title: 'Make your Mess Your Message',

      instructor: 'Mendy Santiago',

      duration: '12:38',

      thumbnail: $r('app.media.template')

    }

  ];



  build() {

    Column() {

      Row() {

        Text('Home').fontSize(16).fontColor(Color.Gray)

        Text('My List')

          .fontSize(16)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16 })

        Blank()

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .borderRadius(20)

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })



      Scroll() {

        Column() {

          Text('Instructors')

            .fontSize(20)

            .fontWeight(FontWeight.Bold)

            .alignSelf(ItemAlign.Start)

            .margin({ top: 24, bottom: 16 })



          ForEach(this.instructors, (instructor: Instructor) => {

            Row() {

              Image(instructor.avatar)

                .width(60)

                .height(60)

                .borderRadius(30)

              Column() {

                Text(instructor.name).fontSize(16).fontWeight(FontWeight.Bold)

                Text(instructor.title).fontSize(14).fontColor(Color.Gray)

              }.alignItems(HorizontalAlign.Start)

              .margin({ left: 16 })

            }

            .width('100%')

            .padding(16)

            .backgroundColor('#2A2B2E')

            .borderRadius(8)

            .margin({ bottom: 16 })

          })



          Text('Lessons')

            .fontSize(20)

            .fontWeight(FontWeight.Bold)

            .alignSelf(ItemAlign.Start)

            .margin({ top: 24, bottom: 16 })



          ForEach(this.lessons, (lesson: Lesson) => {

            Row() {

              Stack() {

                Image(lesson.thumbnail)

                  .width(120)

                  .height(80)

                  .borderRadius(8)

                Text(lesson.duration)

                  .fontSize(12)

                  .fontColor(Color.White)

                  .backgroundColor('rgba(0, 0, 0, 0.6)')

                  .padding(4)

                  .borderRadius(4)

                  .position({ x: 4, y: 4 })

              }



              Column() {

                Text(lesson.title)

                  .fontSize(16)

                  .fontWeight(FontWeight.Bold)

                  .maxLines(2)

                  .textOverflow({ overflow: TextOverflow.Ellipsis })

                Text(lesson.instructor)

                  .fontSize(14)

                  .fontColor(Color.Gray)

                  .margin({ top: 4 })

              }

              .alignItems(HorizontalAlign.Start)

              .layoutWeight(1)

              .margin({ left: 16 })

            }

            .width('100%')

            .padding(16)

            .backgroundColor('#2A2B2E')

            .borderRadius(8)

            .margin({ bottom: 16 })

            .onClick(() => {

              router.pushUrl({ url: 'pages/CourseDetailPage' })

            })

          })

        }

        .width('100%')

        .padding({ left: 16, right: 16 })

      }

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Home').fontSize(12).fontColor(Color.Gray)

        }.layoutWeight(1).alignItems(HorizontalAlign.Center)



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Search').fontSize(12).fontColor(Color.Gray)

        }.layoutWeight(1).alignItems(HorizontalAlign.Center)



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Downloads').fontSize(12).fontColor(Color.Gray)

        }.layoutWeight(1).alignItems(HorizontalAlign.Center)

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })

      .backgroundColor('#1E1F22')

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#1E1F22')

  }

}