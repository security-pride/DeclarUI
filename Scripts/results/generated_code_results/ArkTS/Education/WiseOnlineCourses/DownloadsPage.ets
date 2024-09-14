import router from '@ohos.router';



interface VideoItem {

  title: string;

  instructor: string;

  duration: string;

  thumbnail: Resource;

}



@Entry

@Component

struct DownloadsPage {

  @State downloadList: VideoItem[] = [

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

    },

    {

      title: 'Meet Your Dreams and Make It Real',

      instructor: 'Maria Trofimova',

      duration: '09:46',

      thumbnail: $r('app.media.template')

    }

  ]



  build() {

    Column() {

      Row() {

        Text('Downloads')

          .fontSize(24)

          .fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .borderRadius(20)

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 16, bottom: 8 })



      List() {

        ForEach(this.downloadList, (item: VideoItem) => {

          ListItem() {

            this.VideoItem(item)

          }

          .onClick(() => {

            router.pushUrl({ url: 'pages/CourseDetailPage' })

          })

        }, (item: VideoItem) => item.title)

      }

      .width('100%')

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Home')

            .fontSize(12)

        }

        .width('33%')

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Search')

            .fontSize(12)

        }

        .width('33%')



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Downloads')

            .fontSize(12)

            .fontColor(Color.Blue)

        }

        .width('33%')

      }

      .width('100%')

      .padding({ top: 8, bottom: 8 })

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }



  @Builder

  VideoItem(item: VideoItem) {

    Row() {

      Image(item.thumbnail)

        .width(120)

        .height(68)

        .borderRadius(8)

      Column() {

        Text(item.title)

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

          .maxLines(2)

          .textOverflow({ overflow: TextOverflow.Ellipsis })

        Text(item.instructor)

          .fontSize(14)

          .fontColor(Color.Gray)

          .margin({ top: 4 })

      }

      .layoutWeight(1)

      .alignItems(HorizontalAlign.Start)

      .margin({ left: 12 })

    }

    .width('100%')

    .padding(16)

    .backgroundColor(Color.White)

    .borderRadius(8)

    .margin({ bottom: 8 })

  }

}