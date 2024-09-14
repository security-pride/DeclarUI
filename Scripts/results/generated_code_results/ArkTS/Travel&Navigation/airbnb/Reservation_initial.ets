import router from '@ohos.router';
interface PaymentOption {
type: string;
amount: string;
dueDate?: string;
}
@Entry
@Component
struct ReservationPage {
@State propertyName: string = '整套小木屋';
@State propertyLocation: string = 'Pitch 24 Creek Caravan Park Ringstead狗友好';
@State rating: number = 4.80;
@State reviewCount: number = 5;
@State dateRange: string = '9月2日至7日';
@State guestCount: string = '1位房客';
@State cancellationPolicy: string = '8月3日前可免费取消订单。旅行规划有变，可获全额退款。';
@State paymentOptions: PaymentOption[] = [
{ type: '立即支付', amount: '¥12,120.95' },
{ type: '分期付款', amount: '¥6,060.48', dueDate: '2024年8月18日' }
];
@State selectedPaymentOption: number = 0;
build() {
Column() {
Row() {
Image($r('app.media.template')).width(24).height(24).onClick(() => {
router.pushUrl({ url: 'pages/Details' })
})
Text('确认并付款').fontSize(20).fontWeight(FontWeight.Bold)
}.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
  Scroll() {
    Column() {
      Row() {
        Image($r('app.media.template')).width(100).height(100).borderRadius(8)
        Column() {
          Text(this.propertyName).fontSize(16).fontWeight(FontWeight.Bold)
          Text(this.propertyLocation).fontSize(14).fontColor(Color.Gray)
          Row() {
            Text(`${this.rating}`).fontSize(14)
            Text(`(${this.reviewCount})`).fontSize(14).fontColor(Color.Gray)
            Text('超赞房东').fontSize(14).fontColor(Color.Orange)
          }
        }.layoutWeight(1).margin({ left: 16 })
      }.width('100%').padding(16)

      Column() {
        Text('您的行程').fontSize(18).fontWeight(FontWeight.Bold)
        Row() {
          Text('日期').fontSize(16)
          Text(this.dateRange).fontSize(16)
          Text('编辑').fontSize(16).fontColor(Color.Blue)
        }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 8 })
        Row() {
          Text('房客人数').fontSize(16)
          Text(this.guestCount).fontSize(16)
          Text('编辑').fontSize(16).fontColor(Color.Blue)
        }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 8 })
      }.width('100%').padding(16)

      Column() {
        Text(this.cancellationPolicy).fontSize(14).fontColor(Color.Gray)
        Image($r('app.media.template')).width(24).height(24).margin({ top: 8 })
      }.width('100%').padding(16)

      Column() {
        Text('选择付款方式').fontSize(18).fontWeight(FontWeight.Bold)
        ForEach(this.paymentOptions, (option: PaymentOption, index: number) => {
          Row() {
            Radio({ value: index.toString(), group: 'paymentOption' })
              .checked(this.selectedPaymentOption === index)
              .onChange((isChecked: boolean) => {
                if (isChecked) {
                  this.selectedPaymentOption = index;
                }
              })
            Column() {
              Text(option.type).fontSize(16)
              if (option.dueDate) {
                Text(`今天需支付 ${option.amount}，${option.dueDate}支付 ¥6,060.47。无需支付额外费用。`)
                  .fontSize(14)
                  .fontColor(Color.Gray)
              } else {
                Text(option.amount).fontSize(16).fontWeight(FontWeight.Bold)
              }
            }.margin({ left: 16 })
          }.width('100%').padding({ top: 16, bottom: 16 })
        })
      }.width('100%').padding(16)
    }
  }.layoutWeight(1)

  Button('确认并付款', { type: ButtonType.Normal })
    .width('90%')
    .height(50)
    .backgroundColor(Color.Red)
    .fontColor(Color.White)
    .onClick(() => {
      console.info('Payment confirmed')
    })
    .margin({ bottom: 16 })
}.width('100%').height('100%')
}
}