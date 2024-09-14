import router from '@ohos.router';



@Entry

@Component

struct ContactsPage {

  @State contacts: Contact[] = [

    { name: 'Antonio Banderas', status: 'Online', initials: 'AB' },

    { name: 'Billie Eilish', status: 'Online', initials: 'BE' },

    { name: 'Chris Evans', status: 'Last seen today at 8:40', initials: 'CE' },

    { name: 'Dasha Taran', initials: 'DT' },

    { name: 'Dwayne Johnson', status: 'Last seen today at 6:02', initials: 'DJ' },

    { name: 'Emily Blunt', status: 'Last seen today at 8:33', initials: 'EB' }

  ]



  build() {

    Column() {

      this.Header()

      this.ActionButtons()

      this.ContactList()

      this.BottomNavBar()

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }



  @Builder

  Header() {

    Text('Contacts')

      .fontSize(24)

      .fontWeight(FontWeight.Bold)

      .width('100%')

      .padding({ left: 16, right: 16, top: 15, bottom: 15 })

      .backgroundColor(Color.White)

  }



  @Builder

  ActionButtons() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Text('Invite friends').fontSize(16).margin({ left: 8 })

      }

      .height(48)

      .onClick(() => {

        // Handle invite friends action

      })



      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Text('Find people nearby').fontSize(16).margin({ left: 8 })

      }

      .height(48)

      .onClick(() => {

        // Handle find people nearby action

      })

    }

    .width('100%')

    .padding({ left: 16, right: 16, top: 8, bottom: 8 })

    .backgroundColor(Color.White)

  }



  @Builder

  ContactList() {

    List() {

      ForEach(this.contacts, (contact: Contact) => {

        ListItem() {

          Row() {

            Text(contact.initials)

              .width(48)

              .height(48)

              .fontSize(20)

              .fontColor(Color.White)

              .backgroundColor('#007AFF')

              .textAlign(TextAlign.Center)

              .borderRadius(24)

            Column() {

              Text(contact.name)

                .fontSize(16)

                .fontWeight(FontWeight.Medium)

              if (contact.status) {

                Text(contact.status)

                  .fontSize(14)

                  .fontColor(contact.status === 'Online' ? Color.Green : Color.Gray)

              }

            }

            .alignItems(HorizontalAlign.Start)

            .margin({ left: 16 })

          }

          .width('100%')

          .height(72)

          .padding({ left: 16, right: 16 })

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/ChatPage' })

        })

      }, (contact: Contact) => contact.name)

    }

    .width('100%')

    .layoutWeight(1)

    .backgroundColor(Color.White)

  }



  @Builder

  BottomNavBar() {

    Tabs({ barPosition: BarPosition.End }) {

      TabContent() {

        Text('Messages')

      }.tabBar('Messages')

      .onClick(() => {

        router.pushUrl({ url: 'pages/MessagesPage' })

      })



      TabContent() {

        Text('Contacts')

      }.tabBar('Contacts')



      TabContent() {

        Text('Calls')

      }.tabBar('Calls')



      TabContent() {

        Text('Profile')

      }.tabBar('Profile')

    }

    .width('100%')

    .height(56)

    .backgroundColor(Color.White)

  }

}



interface Contact {

  name: string;

  status?: string;

  initials: string;

}