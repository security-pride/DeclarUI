import router from '@ohos.router';



@Entry

@Component

struct MessagesPage {

  @State messages: Message[] = [

    { name: 'Antonio Banderas', lastMessage: "You're welcome", time: '9:39', status: 'Online', initials: 'AB' },

    { name: 'Chris Evans', lastMessage: 'Hello there?', time: '8:45', initials: 'CE' },

    { name: 'Scarlett Johansson', lastMessage: 'Thanks ray!', time: '8:30', unreadCount: 2, status: 'Online', initials: 'AB' },

    { name: 'Billie Eilish', lastMessage: 'Okay thank you billie', time: '7:55', status: 'Online', initials: 'AB' },

    { name: 'Dasha Taran', lastMessage: 'Photo', time: '6:00', unreadCount: 2, initials: 'DT' },

    { name: 'Ilay Serah', lastMessage: 'Video', time: 'Yesterday', unreadCount: 2, initials: 'IS' },

    { name: 'Emily Blunt', lastMessage: 'Audio', time: 'Yesterday', initials: 'EB' },

    { name: 'Johnny Deep', lastMessage: 'Cool!', time: 'Yesterday', initials: 'JD' }

  ]



  build() {

    Column() {

      this.Header()

      this.MessageList()

      this.BottomNavBar()

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }



  @Builder

  Header() {

    Row() {

      Text('Messages')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

      Blank()

      Image($r('app.media.template'))

        .width(24)

        .height(24)

        .onClick(() => {

          router.pushUrl({ url: 'pages/SearchPage' })

        })

    }

    .width('100%')

    .height(56)

    .padding({ left: 16, right: 16 })

    .backgroundColor(Color.White)

  }



  @Builder

  MessageList() {

    List() {

      ForEach(this.messages, (message: Message) => {

        ListItem() {

          Row() {

            Stack() {

              Text(message.initials)

                .fontSize(16)

                .fontColor(Color.White)

              if (message.status === 'Online') {

                Circle()

                  .width(10)

                  .height(10)

                  .fill(Color.Green)

                  .position({ x: 32, y: 32 })

              }

            }

            .width(40)

            .height(40)

            .margin({ right: 12 })

            .backgroundColor('#007AFF')

            .clip(true)

            .borderRadius(20)



            Column() {

              Row() {

                Text(message.name)

                  .fontSize(16)

                  .fontWeight(FontWeight.Medium)

                Blank()

                Text(message.time)

                  .fontSize(12)

                  .fontColor(Color.Gray)

              }



              Row() {

                if (message.lastMessage.startsWith('Photo')) {

                  Image($r('app.media.template')).width(16).height(16).margin({ right: 4 })

                } else if (message.lastMessage.startsWith('Video')) {

                  Image($r('app.media.template')).width(16).height(16).margin({ right: 4 })

                } else if (message.lastMessage.startsWith('Audio')) {

                  Image($r('app.media.template')).width(16).height(16).margin({ right: 4 })

                }

                Text(message.lastMessage)

                  .fontSize(14)

                  .fontColor(Color.Gray)

                  .maxLines(1)

                  .textOverflow({ overflow: TextOverflow.Ellipsis })

                Blank()

                if (message.unreadCount) {

                  Badge({

                    count: message.unreadCount,

                    maxCount: 99,

                    style: { color: Color.White, fontSize: 10, badgeSize: 16, badgeColor: '#007AFF' }

                  })

                }

              }

            }

            .layoutWeight(1)

          }

          .width('100%')

          .height(72)

          .padding({ left: 16, right: 16 })

          .backgroundColor(Color.White)

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/ChatPage' })

        })

      }, (message: Message) => message.name)

    }

    .width('100%')

    .layoutWeight(1)

  }



  @Builder

  BottomNavBar() {

    Tabs({ barPosition: BarPosition.End }) {

      TabContent() {

        Text('Messages')

      }.tabBar('Messages')



      TabContent() {

        Text('Contacts')

      }.tabBar('Contacts')

      .onClick(() => {

        router.pushUrl({ url: 'pages/ContactsPage' })

      })



      TabContent() {

        Text('Calls')

      }.tabBar('Calls')



      TabContent() {

        Text('Profile')

      }.tabBar('Profile')

      .onClick(() => {

        router.pushUrl({ url: 'pages/ProfilePage' })

      })

    }

    .width('100%')

    .height(56)

    .backgroundColor(Color.White)

  }

}



interface Message {

  name: string;

  lastMessage: string;

  time: string;

  status?: string;

  initials: string;

  unreadCount?: number;

}