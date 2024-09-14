import router from '@ohos.router';
interface Message {
type: string;
content: string;
time?: string;
}
@Entry
@Component
struct IntroPage {
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
.onClick(() => router.back())
Image($r('app.media.template'))
.width(40).height(40)
.borderRadius(20)
Column() {
Text('Martha Craig').fontSize(18).fontWeight(FontWeight.Bold)
Text('Messenger').fontSize(14).fontColor(Color.Gray)
}.alignItems(HorizontalAlign.Start).margin({ left: 10 })
Blank()
Image($r('app.media.template'))
.width(24).height(24)
Image($r('app.media.template'))
.width(24).height(24)
}.width('100%').height(60).padding(10)
.onClick(() => router.pushUrl({ url: 'pages/Profile' }))
  List() {
    ForEach(this.messages, (message: Message) => {
      ListItem() {
        if (message.type === 'system') {
          Text(message.content)
            .fontSize(14).fontColor(Color.Gray)
            .textAlign(TextAlign.Center)
        } else if (message.type === 'received') {
          Row() {
            Image($r('app.media.template'))
              .width(40).height(40)
              .borderRadius(20)
            Text(message.content)
              .fontSize(16).backgroundColor(Color.Gray)
              .borderRadius(10).padding(10)
              .margin({ left: 10 })
          }
        } else if (message.type === 'sent') {
          Row() {
            Blank()
            Text(message.content)
              .fontSize(16).backgroundColor(Color.Blue)
              .borderRadius(10).padding(10)
              .margin({ right: 10 })
              .fontColor(Color.White)
          }
        }
        if (message.time) {
          Text(message.time)
            .fontSize(12).fontColor(Color.Gray)
            .textAlign(TextAlign.Center)
        }
      }.margin({ top: 10 })
    })
  }.width('100%').layoutWeight(1)

  Row() {
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24)
    TextInput({ placeholder: 'Type a message...' })
      .width('60%').height(40)
      .backgroundColor(Color.Gray.opacity(0.1))
      .borderRadius(20).padding({ left: 10, right: 10 })
      .onChange((value: string) => {
        this.inputText = value;
      })
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24)
  }.width('100%').height(60).padding(10).backgroundColor(Color.White)
}
}
}