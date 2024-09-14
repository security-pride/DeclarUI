import router from '@ohos.router';



interface CurrencyPair {

  symbol: string;

  bid: string;

  ask: string;

}



@Entry

@Component

struct QuoteSimplePage {

  @State currencyPairs: CurrencyPair[] = [

    { symbol: 'EURUSD', bid: '1.09336', ask: '1.09337' },

    { symbol: 'GBPUSD', bid: '1.30080', ask: '1.30083' },

    { symbol: 'USDJPY', bid: '156.348', ask: '156.354' },

    { symbol: 'USDCAD', bid: '1.36912', ask: '1.36919' },

    { symbol: 'USDCHF', bid: '0.88489', ask: '0.88495' },

    { symbol: 'NZDUSD', bid: '0.60713', ask: '0.60718' },

    { symbol: 'AUDUSD', bid: '0.67262', ask: '0.67267' },

    { symbol: 'AUDNZD', bid: '1.10778', ask: '1.10799' },

    { symbol: 'AUDCAD', bid: '0.92085', ask: '0.92095' }

  ]



  @State isSimpleView: boolean = true



  build() {

    Column() {

      Row() {

        Button('Simple')

          .backgroundColor(this.isSimpleView ? Color.Gray : Color.White)

          .fontColor(this.isSimpleView ? Color.White : Color.Black)

          .onClick(() => this.isSimpleView = true)

        Button('Advanced')

          .backgroundColor(!this.isSimpleView ? Color.Gray : Color.White)

          .fontColor(!this.isSimpleView ? Color.White : Color.Black)

          .onClick(() => {

            router.pushUrl({ url: 'pages/QuoteAdvancedPage' })

          })

        Button() {

          Image($r('app.media.template')).width(24).height(24)

        }.margin({ left: 'auto' })

      }.width('100%').padding(10)



      List() {

        ForEach(this.currencyPairs, (pair: CurrencyPair) => {

          ListItem() {

            Row() {

              Text(pair.symbol).width('30%')

              Text(pair.bid).width('35%').textAlign(TextAlign.End)

              Text(pair.ask).width('35%').textAlign(TextAlign.End)

            }.width('100%').padding(10)

          }

        })

      }.width('100%').layoutWeight(1)



      Row() {

        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Quotes').fontSize(12)

          }

        }.layoutWeight(1).backgroundColor(Color.Transparent)



        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Chart').fontSize(12)

          }

        }.layoutWeight(1).backgroundColor(Color.Transparent)



        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Trade').fontSize(12)

          }

        }.layoutWeight(1).backgroundColor(Color.Transparent)



        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('History').fontSize(12)

          }

        }.layoutWeight(1).backgroundColor(Color.Transparent)



        Button() {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text('Settings').fontSize(12)

          }

        }.layoutWeight(1).backgroundColor(Color.Transparent)

          .onClick(() => {

            router.pushUrl({ url: 'pages/SettingsPage' })

          })

      }.width('100%').height(60).backgroundColor(Color.White)

    }

  }

}