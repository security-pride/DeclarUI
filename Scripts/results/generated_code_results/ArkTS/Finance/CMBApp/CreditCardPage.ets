import router from '@ohos.router';



interface CreditCardInfo {

  accountType: string;

  balance: string;

  nextBillingDate: string;

  availableCredit: string;

}



interface QuickAction {

  icon: Resource;

  label: string;

}



interface LoanOption {

  title: string;

  description: string;

  amount: string;

}



@Entry

@Component

struct CreditCardPage {

  @State creditCardInfo: CreditCardInfo = {

    accountType: '个人消费账户',

    balance: '¥0.00',

    nextBillingDate: '8月14日(27天后)出账',

    availableCredit: '¥0.00'

  };



  @State quickActions: QuickAction[] = [

    { icon: $r('app.media.template'), label: '卡片管家' },

    { icon: $r('app.media.template'), label: '我的积分' },

    { icon: $r('app.media.template'), label: '绑卡支付' },

    { icon: $r('app.media.template'), label: '推荐有礼' },

    { icon: $r('app.media.template'), label: 'i车一族' }

  ];



  @State loanOptions: LoanOption[] = [

    { title: '预借现金', description: '急用钱 随借随还', amount: '可借额度\n0.00' },

    { title: '专享消费额度', description: '最高30万', amount: '超100万人申请' },

    { title: 'e招贷', description: '借现金分期还', amount: '线上申请,快速放款' }

  ];



  build() {

    Column() {

      Text('我的信用卡')

        .fontSize(20)

        .fontWeight(FontWeight.Bold)

        .width('100%')

        .padding(16)



      Scroll() {

        Column() {

          // Credit Card Info

          Column() {

            Column() {

              Row() {

                Text(this.creditCardInfo.accountType)

                  .fontSize(16)

                  .fontWeight(FontWeight.Bold)

                Text('自动还')

                  .backgroundColor('#F0F0F0')

                  .fontColor('#888888')

                  .margin({ left: 8 })

              }



              Row() {

                Column() {

                  Text('下期未出账单')

                    .fontSize(14)

                    .fontColor('#888888')

                  Text(this.creditCardInfo.balance)

                    .fontSize(24)

                    .fontWeight(FontWeight.Bold)

                }

                .alignItems(HorizontalAlign.Start)



                Blank()



                Button('查账单')

                  .height(32)

                  .backgroundColor('#FFFFFF')

                  .fontColor('#E92F4D')

                  .borderRadius(16)

                  .borderWidth(1)

                  .borderColor('#E92F4D')

              }

              .width('100%')

              .margin({ top: 8, bottom: 8 })



              Row() {

                Text(`可用额度 ${this.creditCardInfo.availableCredit} >`)

                  .fontSize(14)

                  .fontColor('#888888')

                Blank()

                Text(this.creditCardInfo.nextBillingDate)

                  .fontSize(14)

                  .fontColor('#888888')

              }

              .width('100%')



              Row() {

                Button('分期还款')

                  .height(32)

                  .backgroundColor('#FFFFFF')

                  .fontColor('#E92F4D')

                  .borderRadius(16)

                  .borderWidth(1)

                  .borderColor('#E92F4D')

                  .margin({ right: 8 })

                Button('还款')

                  .height(32)

                  .backgroundColor('#E92F4D')

                  .fontColor('#FFFFFF')

                  .borderRadius(16)

                  .onClick(() => {

                    router.pushUrl({ url: 'pages/RepaymentPage' })

                  })

              }

              .width('100%')

              .justifyContent(FlexAlign.Center)

              .margin({ top: 16 })

            }

            .padding(16)

          }

          .width('100%')

          .margin({ bottom: 16 })

          .backgroundColor(Color.White)

          .borderRadius(8)



          // Quick Actions

          Grid() {

            ForEach(this.quickActions, (action: QuickAction) => {

              GridItem() {

                Column() {

                  Image(action.icon)

                    .width(40)

                    .height(40)

                  Text(action.label)

                    .fontSize(12)

                    .margin({ top: 4 })

                }

              }

            })

          }

          .columnsTemplate('1fr 1fr 1fr 1fr 1fr')

          .width('100%')

          .padding(16)

          .backgroundColor(Color.White)

          .borderRadius(8)

          .margin({ bottom: 16 })



          // Loan Options

          Text('我要借钱')

            .fontSize(18)

            .fontWeight(FontWeight.Bold)

            .width('100%')

            .margin({ bottom: 8 })



          ForEach(this.loanOptions, (option: LoanOption) => {

            Column() {

              Row() {

                Column() {

                  Text(option.title)

                    .fontSize(16)

                    .fontWeight(FontWeight.Bold)

                  Text(option.description)

                    .fontSize(14)

                    .fontColor('#888888')

                    .margin({ top: 4 })

                }

                .alignItems(HorizontalAlign.Start)



                Blank()



                Column() {

                  Text(option.amount)

                    .fontSize(14)

                    .fontColor('#888888')

                    .textAlign(TextAlign.End)

                }

                .alignItems(HorizontalAlign.End)

              }

              .width('100%')

              .padding(16)

            }

            .width('100%')

            .margin({ bottom: 8 })

            .backgroundColor(Color.White)

            .borderRadius(8)

          })



          Text('查额达标100%有礼')

            .fontSize(14)

            .fontColor('#888888')

            .width('100%')

            .textAlign(TextAlign.Center)

            .margin({ top: 16, bottom: 16 })

        }

        .width('100%')

      }

      .width('100%')

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('首页')

            .fontSize(12)

            .fontColor('#888888')

        }

        .onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('信用卡')

            .fontSize(12)

            .fontColor('#E92F4D')

        }



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('生活')

            .fontSize(12)

            .fontColor('#888888')

        }



        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('我的')

            .fontSize(12)

            .fontColor('#888888')

        }

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor(Color.White)

      .padding({ top: 8, bottom: 8 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F5F5F5')

  }

}