import router from '@ohos.router';



interface CommentItem {

  username: string;

  comment: string;

  time: string;

  likes: string;

  replies: string;

}



@Entry

@Component

struct CommentsPage {

  @State comments: CommentItem[] = [

    {

      username: 'martini_rond',

      comment: 'How neatly I write the date in my book',

      time: '22h',

      likes: '8098',

      replies: '4'

    },

    {

      username: 'maxjacobson',

      comment: "Now that's a skill very talented",

      time: '22h',

      likes: '8098',

      replies: '1'

    }

  ];



  build() {

    Column() {

      // Header

      Row() {

        Text('579 comments')

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

        Blank()

        Button({ type: ButtonType.Circle, stateEffect: true }) {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

        }

        .width(32)

        .height(32)

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })



      // Comment List

      List() {

        ForEach(this.comments, (item: CommentItem) => {

          ListItem() {

            this.CommentItem(item)

          }

        }, (item: CommentItem) => item.username)

      }

      .width('100%')

      .layoutWeight(1)



      // Add Comment Input

      Row() {

        Image($r('app.media.template'))

          .width(32)

          .height(32)

          .margin({ right: 12 })

        TextInput({ placeholder: 'Add comment...' })

          .layoutWeight(1)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 12 })

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F1F1')

  }



  @Builder

  CommentItem(item: CommentItem) {

    Row() {

      Image($r('app.media.template'))

        .width(40)

        .height(40)

        .margin({ right: 12 })

      Column() {

        Row() {

          Text(item.username)

            .fontSize(14)

            .fontWeight(FontWeight.Medium)

          Text(item.time)

            .fontSize(12)

            .fontColor(Color.Gray)

            .margin({ left: 8 })

        }

        Text(item.comment)

          .fontSize(14)

          .margin({ top: 4 })

        Row() {

          Image($r('app.media.template'))

            .width(16)

            .height(16)

          Text(item.likes)

            .fontSize(12)

            .fontColor(Color.Gray)

            .margin({ left: 4 })

          Text('View replies (' + item.replies + ')')

            .fontSize(12)

            .fontColor(Color.Gray)

            .margin({ left: 16 })

        }

        .margin({ top: 8 })

      }

      .layoutWeight(1)

    }

    .width('100%')

    .padding(16)

    .backgroundColor(Color.White)

  }

}