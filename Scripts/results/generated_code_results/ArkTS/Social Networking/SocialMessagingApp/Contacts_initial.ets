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

    Row() {

      Text('Contacts')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

      Blank()

      Image($r('app.media.template'))

        .width(24)

        .height(24)

    }

    .width('100%')

    .height(60)

    .padding({ left: 16, right: 16 })

    .backgroundColor(Color.White)

  }



  @Builder

  ActionButtons() {

    Column() {

      Button({ type: ButtonType.Normal }) {

        Row() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Invite friends').fontSize(16).margin({ left: 8 })

        }

      }

      .height(48)

      .backgroundColor(Color.Transparent)

      .margin({ top: 8 })



      Button({ type: ButtonType.Normal }) {

        Row() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Find people nearby').fontSize(16).margin({ left: 8 })

        }

      }

      .height(48)

      .backgroundColor(Color.Transparent)

      .margin({ top: 8 })

    }

    .width('100%')

    .padding({ left: 16, right: 16 })

  }



  @Builder

  ContactList() {

    List() {

      ForEach(this.contacts, (contact: Contact) => {

        ListItem() {

          this.ContactItem(contact)

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/ChatPage' })

        })

      }, (contact: Contact) => contact.name)

    }

    .width('100%')

    .layoutWeight(1)

  }



  @Builder

  ContactItem(contact: Contact) {

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



  @Builder

  BottomNavBar() {

    Row() {

      this.NavBarItem('Messages', $r('app.media.template'), false)

      this.NavBarItem('Contacts', $r('app.media.template'), true)

      this.NavBarItem('Calls', $r('app.media.template'), false)

      this.NavBarItem('Profile', $r('app.media.template'), false)

    }

    .width('100%')

    .height(56)

    .backgroundColor(Color.White)

  }



  @Builder

  NavBarItem(label: string, icon: Resource, isActive: boolean) {

    Column() {

      Image(icon)

        .width(24)

        .height(24)

        .fillColor(isActive ? '#007AFF' : Color.Gray)

      Text(label)

        .fontSize(12)

        .fontColor(isActive ? '#007AFF' : Color.Gray)

    }

    .layoutWeight(1)

    .onClick(() => {

      if (label === 'Messages') {

        router.pushUrl({ url: 'pages/MessagesPage' })

      }

    })

  }

}



interface Contact {

  name: string;

  status?: string;

  initials: string;

}