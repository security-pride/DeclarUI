import router from '@ohos.router';
@Entry
@Component
struct ProfilePage {
@State colorToggle: boolean = true;
@State emojiToggle: boolean = false;
@State notificationStatus: string = 'On';
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24).height(24)
.onClick(() => router.back())
Image($r('app.media.template'))
.width(80).height(80).borderRadius(40)
Column() {
Text('Martha Craig').fontSize(20).fontWeight(FontWeight.Bold)
Text('Messenger').fontSize(16).fontColor(Color.Gray)
}.alignItems(HorizontalAlign.Start).margin({ left: 10 })
}.width('100%').padding(16).height(100)
  Row() {
    Button({ type: ButtonType.Circle }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(60).height(60).backgroundColor(Color.Blue)
    Button({ type: ButtonType.Circle }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(60).height(60).backgroundColor(Color.Blue).margin({ left: 20 })
    Button({ type: ButtonType.Circle }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(60).height(60).backgroundColor(Color.Blue).margin({ left: 20 })
    Button({ type: ButtonType.Circle }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(60).height(60).backgroundColor(Color.Blue).margin({ left: 20 })
  }.width('100%').justifyContent(FlexAlign.Center).margin({ top: 20, bottom: 20 })

  List() {
    ListItem() {
      Row() {
        Text('Color').fontSize(16)
        Toggle({ type: ToggleType.Switch, isOn: this.colorToggle })
          .selectedColor(Color.Blue)
          .switchPointColor(Color.White)
          .onChange((isOn: boolean) => {
            this.colorToggle = isOn;
          })
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
    }
    ListItem() {
      Row() {
        Text('Emoji').fontSize(16)
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
    }
    ListItem() {
      Row() {
        Text('Nicknames').fontSize(16)
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
    }
  }.backgroundColor(Color.White).borderRadius(8).margin({ top: 20 })

  Text('MORE ACTIONS').fontSize(14).fontColor(Color.Gray).width('100%').textAlign(TextAlign.Start).margin({ top: 20, bottom: 10 })

  List() {
    ListItem() {
      Row() {
        Text('Search in Conversation').fontSize(16)
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
    }
    ListItem() {
      Row() {
        Text('Create group').fontSize(16)
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
    }
  }.backgroundColor(Color.White).borderRadius(8)

  Text('PRIVACY').fontSize(14).fontColor(Color.Gray).width('100%').textAlign(TextAlign.Start).margin({ top: 20, bottom: 10 })

  List() {
    ListItem() {
      Row() {
        Text('Notifications').fontSize(16)
        Text(this.notificationStatus).fontSize(16).fontColor(Color.Gray)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
    }
    ListItem() {
      Row() {
        Text('Ignore Messages').fontSize(16)
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
    }
    ListItem() {
      Row() {
        Text('Block').fontSize(16)
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
    }
  }.backgroundColor(Color.White).borderRadius(8)
}.width('100%').height('100%').backgroundColor('#F1F1F1').padding(16)
}
}