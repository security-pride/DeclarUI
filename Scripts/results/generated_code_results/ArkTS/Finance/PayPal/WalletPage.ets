import router from '@ohos.router';



interface PayPalBalance {

  amount: string;

  icon: string;

}



interface BankCard {

  bank: string;

  type: string;

  cardNumber: string;

  icon: Resource;

}



interface NavBarItem {

  name: string;

  icon: string;

  isActive: boolean;

}



@Entry

@Component

struct WalletPage {

  @State paypalBalance: PayPalBalance = { amount: '£0.00', icon: 'paypal' };

  @State totalBalance: string = '£0.00';

  @State linkedAccounts: BankCard[] = [

    { bank: 'BARCLAYS', type: 'VISA', cardNumber: '••5871', icon: $r('app.media.template') }

  ];

  @State navBarItems: NavBarItem[] = [

    { name: 'Home', icon: 'home', isActive: false },

    { name: 'Crypto', icon: 'chart', isActive: false },

    { name: 'Payments', icon: 'pound', isActive: false },

    { name: 'Wallet', icon: 'wallet', isActive: true }

  ];



  build() {

    Column() {

      this.TabBar()

      Scroll() {

        Column() {

          this.PayPalBalanceCard()

          this.BankAccountsSection()

        }.width('100%').padding({ left: 16, right: 16, top: 16, bottom: 80 })

      }.height('100%')

      this.BottomNavBar()

    }.width('100%').height('100%').backgroundColor('#F0F0F0')

  }



  @Builder

  TabBar() {

    Row() {

      Text('Wallet').fontWeight(FontWeight.Bold).fontSize(16)

      Text('Rewards').fontSize(16).margin({ left: 16 })

      Text('Activity').fontSize(16).margin({ left: 16 })

    }.width('100%').padding(16).backgroundColor(Color.White)

  }



  @Builder

  PayPalBalanceCard() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Text('PayPal balance').fontSize(14).margin({ left: 8 })

        Blank()

        Text(this.paypalBalance.amount).fontSize(14).fontWeight(FontWeight.Bold)

      }.width('100%').padding(16)

      Text(this.totalBalance).fontSize(24).fontWeight(FontWeight.Bold).margin({ top: 8 })

    }.width('100%').backgroundColor(Color.White).borderRadius(8).margin({ bottom: 16 })

  }



  @Builder

  BankAccountsSection() {

    Column() {

      Row() {

        Text('Bank accounts and cards').fontSize(16).fontWeight(FontWeight.Bold)

        Blank()

        Text('Add new').fontSize(14).fontColor(Color.Blue)

        Image($r('app.media.template')).width(16).height(16)

      }.width('100%').margin({ bottom: 16 })



      ForEach(this.linkedAccounts, (account: BankCard) => {

        this.BankCardItem(account)

      })

    }.width('100%')

  }



  @Builder

  BankCardItem(account: BankCard) {

    Row() {

      Image(account.icon).width(40).height(24)

      Column() {

        Text(account.bank).fontSize(14).fontWeight(FontWeight.Bold)

        Text(account.type).fontSize(12)

      }.margin({ left: 16 })

      Blank()

      Text(account.cardNumber).fontSize(14)

    }.width('100%').height(60).backgroundColor(Color.White).borderRadius(8).padding(16).margin({ bottom: 8 })

  }



  @Builder

  BottomNavBar() {

    Row() {

      ForEach(this.navBarItems, (item: NavBarItem) => {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text(item.name).fontSize(12).margin({ top: 4 })

        }.width('25%').height(56).onClick(() => this.navigateTo(item.name))

      })

    }.width('100%').position({ x: 0, y: '100%' }).translate({ y: -56 }).backgroundColor(Color.White)

  }



  navigateTo(page: string) {

    if (page === 'Home') {

      router.pushUrl({ url: 'pages/HomePage' });

    }

  }

}