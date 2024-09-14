import router from '@ohos.router';



@Entry

@Component

struct ChatPage {

  @State messages: Message[] = [

    { text: 'Hi! Your last shot was really good!', time: '9:30', sender: 'user' },

    { type: 'audio', duration: '1.35', time: '9:32', sender: 'contact' },

    { text: 'What tools do you use?', time: '9:34', sender: 'user' },

    { text: 'Figma, for prototype i use Principle', time: '9:35', sender: 'contact' },

    { text: 'Cool! Your designs inspire me a lot bro. Keep posting!', time: '9:36', sender: 'user' },

    { text: 'Thank u so much Antonio! Glad to hear that :)', time: '9:37', sender: 'contact' },

    { text: "You're welcome!", time: '9:39', sender: 'user' }

  ]



  build() {

    Column() {

      this.Header()

      this.MessageList()

      this.InputField()

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }



  @Builder

  Header() {

    Row() {

      Image($r('app.media.template'))

        .width(24)

        .height(24)

        .margin({ left: 16 })

        .onClick(() => {

          router.back()

        })



      Column() {

        Text('Antonio Banderas')

          .fontSize(18)

          .fontWeight(FontWeight.Bold)

        Text('Online')

          .fontSize(14)

          .fontColor(Color.Green)

      }

      .alignItems(HorizontalAlign.Start)

      .margin({ left: 16 })

      .onClick(() => {

        router.pushUrl({ url: 'pages/ProfilePage' })

      })



      Blank()



      Image($r('app.media.template'))

        .width(24)

        .height(24)

        .margin({ right: 16 })

    }

    .width('100%')

    .height(60)

    .backgroundColor(Color.White)

  }



  @Builder

  MessageList() {

    List() {

      ForEach(this.messages, (message: Message) => {

        ListItem() {

          if (message.type === 'audio') {

            this.AudioMessage(message)

          } else {

            this.TextMessage(message)

          }

        }

      }, (message: Message) => message.time)

    }

    .width('100%')

    .layoutWeight(1)

    .margin({ top: 8, bottom: 8 })

  }



  @Builder

  TextMessage(message: Message) {

    Row() {

      if (message.sender === 'user') {

        Blank()

      }

      Column() {

        Text(message.text)

          .fontSize(16)

          .padding(12)

          .borderRadius(16)

          .backgroundColor(message.sender === 'user' ? '#DCF8C6' : Color.White)

        Text(message.time)

          .fontSize(12)

          .fontColor(Color.Gray)

          .margin({ top: 4 })

      }

      .alignItems(message.sender === 'user' ? HorizontalAlign.End : HorizontalAlign.Start)

      .margin({ left: message.sender === 'user' ? 64 : 16, right: message.sender === 'user' ? 16 : 64 })

      if (message.sender === 'contact') {

        Blank()

      }

    }

    .width('100%')

    .margin({ top: 8, bottom: 8 })

  }



  @Builder

  AudioMessage(message: Message) {

    Row() {

      Blank()

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Text(message.duration)

          .fontSize(14)

          .margin({ left: 8 })

      }

      .padding(12)

      .borderRadius(16)

      .backgroundColor(Color.White)

      Text(message.time)

        .fontSize(12)

        .fontColor(Color.Gray)

        .margin({ top: 4 })

    }

    .width('100%')

    .margin({ top: 8, bottom: 8, left: 64, right: 16 })

    .justifyContent(FlexAlign.End)

  }



  @Builder

  InputField() {

    Row() {

      Image($r('app.media.template'))

        .width(24)

        .height(24)

        .margin({ left: 16 })

      TextInput({ placeholder: 'Type a message' })

        .width('100%')

        .height(40)

        .backgroundColor(Color.White)

        .borderRadius(20)

        .margin({ left: 8, right: 8 })

      Image($r('app.media.template'))

        .width(24)

        .height(24)

        .margin({ right: 16 })

    }

    .width('100%')

    .height(60)

    .backgroundColor(Color.White)

    .padding({ top: 8, bottom: 8 })

  }

}



interface Message {

  text?: string;

  time: string;

  sender: 'user' | 'contact';

  type?: 'audio';

  duration?: string;

}