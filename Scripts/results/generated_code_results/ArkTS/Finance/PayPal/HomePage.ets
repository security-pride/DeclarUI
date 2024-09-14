import router from '@ohos.router';



interface Contact {

  name: string;

  initials: string;

  color: string;

  icon?: string;

}



interface ReferralPromo {

  title: string;

  details: string;

  actionButton: ActionButton;

}



interface ActionButton {

  text: string;

  color: string;

}



interface NavItem {

  name: string;

  icon: string;

  isActive: boolean;

}



@Entry

@Component

struct HomePage {

  @State balance: string = '£0.00';

  @State sendAgainContacts: Contact[] = [

    { name: 'Zhou Fang', initials: 'ZF', color: '#7B35E7' },

    { name: 'Search', initials: '', color: '#7B35E7', icon: 'search' }

  ];

  @State referralPromo: ReferralPromo = {

    title: "Let's go! Refer a friend to earn a £10 reward.",

    details: 'Max 10 friends. Min spend £5 within 30 days. Ends 31/12/24. Terms apply.',

    actionButton: { text: 'Invite friends', color: 'blue' }

  };

  @State navItems: NavItem[] = [

    { name: 'Home', icon: 'home', isActive: true },

    { name: 'Crypto', icon: 'chart', isActive: false },

    { name: 'Payments', icon: 'pound', isActive: false },

    { name: 'Wallet', icon: 'wallet', isActive: false }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').padding({ left: 16, right: 16, top: 16 })



      Scroll() {

        Column() {

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text(this.balance)

              .fontSize(24)

              .fontWeight(FontWeight.Bold)

          }.width('100%').backgroundColor(Color.White).padding(16)



          Text('Send again').fontSize(18).fontWeight(FontWeight.Bold).margin({ top: 16, bottom: 8 })



          Row() {

            ForEach(this.sendAgainContacts, (contact: Contact) => {

              Column() {

                if (contact.icon) {

                  Image($r('app.media.template')).width(48).height(48)

                } else {

                  Text(contact.initials)

                    .width(48)

                    .height(48)

                    .fontSize(20)

                    .textAlign(TextAlign.Center)

                    .borderRadius(24)

                    .backgroundColor(contact.color)

                }

                Text(contact.name).fontSize(14).margin({ top: 4 })

              }.alignItems(HorizontalAlign.Center)

            })

          }.justifyContent(FlexAlign.SpaceBetween).width('100%').padding({ left: 16, right: 16 })



          Column() {

            Text(this.referralPromo.title).fontSize(16).fontWeight(FontWeight.Bold).margin({ bottom: 8 })

            Text(this.referralPromo.details).fontSize(14)

            Button(this.referralPromo.actionButton.text)

              .backgroundColor(this.referralPromo.actionButton.color)

              .margin({ top: 8 })

          }.width('100%').padding(16).backgroundColor(Color.White).margin({ top: 16 })



          Text('Send money internationally').fontSize(16).margin({ top: 16, bottom: 8 })



          Row() {

            Button('Send').width('48%').onClick(() => {

              router.pushUrl({ url: 'pages/SendPage' })

            })

            Button('Request').width('48%')

          }.justifyContent(FlexAlign.SpaceBetween).margin({ top: 16 })

        }.width('100%').padding({ left: 16, right: 16 })

      }.width('100%').height('80%')



      Row() {

        ForEach(this.navItems, (item: NavItem) => {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text(item.name).fontSize(12)

          }.width('25%').onClick(() => {

            if (item.name === 'Crypto') {

              router.pushUrl({ url: 'pages/CryptoPage' })

            } else if (item.name === 'Wallet') {

              router.pushUrl({ url: 'pages/WalletPage' })

            }

          })

        })

      }.width('100%').height('10%').backgroundColor(Color.White)

    }.width('100%').height('100%')

  }

}