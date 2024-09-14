import router from '@ohos.router';



interface Message {

  text?: string;

  sender: 'user' | 'other';

  time: string;

  type?: 'text' | 'audio' | 'image';

  content?: Resource;

}



@Entry

@Component

struct MessagesPage {

  @State messages: Message[] = [

    { text: 'How are you?', sender: 'other', time: '8:43 AM' },

    { text: 'Hi Hasley, I am good. How are you?', sender: 'user', time: '8:43 AM' },

    { type: 'audio', sender: 'other', time: '8:43 AM', content: $r('app.media.template') },

    { type: 'image', sender: 'other', time: '8:43 AM', content: $r('app.media.template') },

    { text: "Omg! you're so beautiful!!", sender: 'user', time: '8:43 AM' }

  ];

  @State inputText: string = '';



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 16 })

          .onClick(() => router.back())

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .borderRadius(20)

        Column() {

          Text('Hasley Junior')

            .fontSize(16)

            .fontWeight(FontWeight.Medium)

          Text('Online')

            .fontSize(12)

            .fontColor(Color.Gray)

        }.alignItems(HorizontalAlign.Start)

        .margin({ left: 12 })

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 16 })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width('100%')

      .height(56)

      .padding({ left: 16, right: 16 })

      .backgroundColor(Color.White)



      List({ space: 8 }) {

        ForEach(this.messages, (message: Message) => {

          ListItem() {

            if (message.type === 'text') {

              Row() {

                if (message.sender === 'other') {

                  Image($r('app.media.template'))

                    .width(32)

                    .height(32)

                    .borderRadius(16)

                    .margin({ right: 8 })

                }

                Column() {

                  Text(message.text)

                    .fontSize(16)

                    .backgroundColor(message.sender === 'user' ? '#E8DEF8' : '#F2F2F2')

                    .padding(12)

                    .borderRadius(16)

                  Text(message.time)

                    .fontSize(12)

                    .fontColor(Color.Gray)

                    .margin({ top: 4 })

                }

                .alignItems(message.sender === 'user' ? HorizontalAlign.End : HorizontalAlign.Start)

                if (message.sender === 'user') {

                  Image($r('app.media.template'))

                    .width(16)

                    .height(16)

                    .margin({ left: 4 })

                }

              }

              .width('100%')

              .justifyContent(message.sender === 'user' ? FlexAlign.End : FlexAlign.Start)

            } else if (message.type === 'audio') {

              Row() {

                Image($r('app.media.template'))

                  .width(32)

                  .height(32)

                  .borderRadius(16)

                  .margin({ right: 8 })

                Row() {

                  Image($r('app.media.template'))

                    .width(24)

                    .height(24)

                  Text('0:05')

                    .fontSize(14)

                    .margin({ left: 8 })

                }

                .backgroundColor('#F2F2F2')

                .padding(12)

                .borderRadius(16)

              }

              .width('100%')

              .justifyContent(FlexAlign.Start)

            } else if (message.type === 'image') {

              Row() {

                Image($r('app.media.template'))

                  .width(32)

                  .height(32)

                  .borderRadius(16)

                  .margin({ right: 8 })

                Image(message.content)

                  .width(200)

                  .height(200)

                  .borderRadius(16)

              }

              .width('100%')

              .justifyContent(FlexAlign.Start)

            }

          }

        })

      }

      .width('100%')

      .layoutWeight(1)

      .padding(16)



      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 8 })

        TextInput({ placeholder: 'Type here...', text: this.inputText })

          .width('80%')

          .height(40)

          .backgroundColor('#F2F2F2')

          .borderRadius(20)

          .padding({ left: 16, right: 16 })

          .onChange((value: string) => {

            this.inputText = value;

          })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 8 })

          .onClick(() => {

            if (this.inputText.trim()) {

              this.messages.push({

                text: this.inputText,

                sender: 'user',

                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),

                type: 'text'

              });

              this.inputText = '';

            }

          })

      }

      .width('100%')

      .padding(16)

      .backgroundColor(Color.White)

    }

  }

}