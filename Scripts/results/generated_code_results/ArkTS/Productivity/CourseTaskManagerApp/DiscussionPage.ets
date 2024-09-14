import router from '@ohos.router';



@Entry

@Component

struct DiscussionPage {

  @State messages: Message[] = [

    {

      user: 'Maya',

      content: "Here are the resource files of todays' physics class",

      files: ['Introduction to force', 'Work and energy']

    },

    {

      user: 'Liana',

      content: 'Thanks a lot Maya\nIs anyone please share your class notes of this lecture.'

    },

    {

      user: 'Vishal',

      content: "I didn't write down class note of this lecture. But I have made powerpoint presentation on force, energy and work.",

      files: ['Force, Energy & Work']

    }

  ];



  @State inputText: string = '';



  build() {

    Column() {

      // Header

      Row() {

        Text('Physics')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 8 })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 8 })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })

      .backgroundColor('#F1F3F5')



      // Chat area

      List() {

        ForEach(this.messages, (message: Message) => {

          ListItem() {

            this.MessageItem(message)

          }

        })

      }

      .width('100%')

      .layoutWeight(1)



      // Input area

      Row() {

        TextInput({ placeholder: 'Type something' })

          .width('80%')

          .height(40)

          .backgroundColor(Color.White)

          .borderRadius(20)

          .padding({ left: 16, right: 16 })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 8 })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 8 })

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })

      .backgroundColor('#F1F3F5')



      // Navigation bar

      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Tasks').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Classroom').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Chat').fontSize(12)

        }

      }

      .width('100%')

      .height(56)

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

  }



  @Builder

  MessageItem(message: Message) {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .borderRadius(20)

        Text(message.user)

          .fontSize(16)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 8 })

      }



      Text(message.content)

        .fontSize(14)

        .margin({ top: 8, bottom: 8 })



      if (message.files) {

        ForEach(message.files, (file: string) => {

          Row() {

            Image($r('app.media.template'))

              .width(24)

              .height(24)

            Text(file)

              .fontSize(14)

              .margin({ left: 8 })

            Blank()

            Image($r('app.media.template'))

              .width(24)

              .height(24)

          }

          .width('100%')

          .height(40)

          .backgroundColor('#F1F3F5')

          .borderRadius(8)

          .padding({ left: 16, right: 16 })

          .margin({ top: 8 })

        })

      }

    }

    .width('100%')

    .padding(16)

    .backgroundColor(Color.White)

    .borderRadius(8)

    .margin({ bottom: 16 })

  }

}



interface Message {

  user: string;

  content: string;

  files?: string[];

}