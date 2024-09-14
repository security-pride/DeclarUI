import router from '@ohos.router';



@Entry

@Component

struct TermsPage {

  @State content: string[] = [

    'Valid on Vodafone pay monthly contracts only.',

    'New customers only.',

    'Excludes SIM Only plans.',

    'VC10OFF Code: Some handsets may be excluded.',

    'Monthly price (including out of bundle charges for Vodafone) will increase every April by the Consumer Price Index rate of inflation + 3.9%.',

    'EXCLUDES KLARNA, CLEARPAY AND ANY OTHER "ORDER NOW PAY LATER" PAYMENT METHODS. Paypal Credit and Paypal Pay In 3 are also excluded types of payment.',

    'If you don\'t receive your gift card within the expected timeframe, please wait until after your trip has been completed before contacting the VoucherCodes support team.',

    'Excludes retailers app orders. You must make your purchase through the brands website.',

    'You must claim your gift card by clicking the Claim Your Reward button in your account within 6 months of the reward offer confirmation email or the gift card will be forfeited.',

    'To be eligible for the offer you must make your Mobiles.co.uk purchase online via VoucherCodes'

  ]



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/DetailsPage' })

          })

        Text('Terms and Conditions')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16 })

      }

      .width('100%')

      .height(56)

      .backgroundColor('#FFFF00')



      Scroll() {

        Column() {

          ForEach(this.content, (item: string) => {

            Text(item)

              .fontSize(16)

              .margin({ top: 12, bottom: 12 })

              .width('100%')

          })

        }

        .padding(16)

      }

      .flexGrow(1)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Discover').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          // Navigate to Discover page

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Search').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          router.pushUrl({ url: 'pages/SearchPage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('VIP').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          // Navigate to VIP page

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Account').fontSize(12)

        }.layoutWeight(1).onClick(() => {

          router.pushUrl({ url: 'pages/AccountPage' })

        })

      }

      .width('100%')

      .height(56)

      .backgroundColor(Color.White)

    }

  }

}