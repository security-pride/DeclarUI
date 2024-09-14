import router from '@ohos.router';
interface Message {
type: 'system' | 'received' | 'sent';
content: string;
time?: string;
}
@Entry
@Component
struct Intro {
@State messages: Message[] = [
{ type: 'system', content: "You're friends on Facebook" },
{ type: 'system', content: 'Say hi to your new Facebook friend, Martha.' },
{ type: 'received', content: '👋', time: '21:32' },
{ type: 'sent', content: 'Hello, Jacob!', time: '16:44' },
{ type: 'received', content: 'How are you doing?', time: '16:44' }
];
@State inputText: string = '';
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24).height(24)
.margin({ left: 16 })
.onClick(() => router.back())
Image($r('app.media.template'))
.width(40).height(40)
.borderRadius(20)
.margin({ left: 16 })
Column() {
Text('Martha Craig').fontSize(18).fontWeight(FontWeight.Bold)
Text('Messenger').fontSize(14).fontColor(Color.Gray)
}.layoutWeight(1).margin({ left: 8 })
Image($r('app.media.template'))
.width(24).height(24)
.margin({ right: 16 })
Image($r('app.media.template'))
.width(24).height(24)
.margin({ right: 16 })
}.width('100%').height(60).backgroundColor(Color.White)
  List({ space: 10 }) {
    ForEach(this.messages, (message: Message) => {
      ListItem() {
        if (message.type === 'system') {
          Text(message.content)
            .fontSize(14)
            .fontColor(Color.Gray)
            .textAlign(TextAlign.Center)
            .width('100%')
        } else if (message.type === 'received') {
          Row() {
            Image($r('app.media.template'))
              .width(40).height(40)
              .borderRadius(20)
            Column() {
              Text(message.content)
                .fontSize(16)
                .backgroundColor('#F1F0F0')
                .padding(10)
                .borderRadius(20)
              Text(message.time ?? '')
                .fontSize(12)
                .fontColor(Color.Gray)
                .margin({ top: 4 })
            }.alignItems(HorizontalAlign.Start)
          }.width('100%').justifyContent(FlexAlign.Start).margin({ top: 8 })
        } else {
          Column() {
            Text(message.content)
              .fontSize(16)
              .backgroundColor('#0B57D0')
              .fontColor(Color.White)
              .padding(10)
              .borderRadius(20)
            Text(message.time ?? '')
              .fontSize(12)
              .fontColor(Color.Gray)
              .margin({ top: 4 })
          }.alignItems(HorizontalAlign.End).width('100%').margin({ top: 8 })
        }
      }
    })
  }.width('100%').layoutWeight(1)

  Row() {
    Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })
    Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })
    Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })
    TextInput({ placeholder: 'Aa', text: this.inputText })
      .width('60%')
      .height(40)
      .backgroundColor('#F1F0F0')
      .borderRadius(20)
      .margin({ left: 8, right: 8 })
      .onChange((value: string) => {
        this.inputText = value;
      })
    Image($r('app.media.template')).width(24).height(24).margin({ right: 16 })
    Image($r('app.media.template')).width(24).height(24).margin({ right: 16 })
  }.width('100%').height(60).backgroundColor(Color.White).justifyContent(FlexAlign.SpaceBetween)
}
}
}