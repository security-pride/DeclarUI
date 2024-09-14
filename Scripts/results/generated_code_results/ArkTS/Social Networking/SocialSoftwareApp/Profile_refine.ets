import router from '@ohos.router';
@Entry
@Component
struct Profile {
@State colorToggle: boolean = true;
@State notificationsValue: string = 'On';
@State emojiValue: string = '';
@State nicknamesValue: string = '';
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24).height(24)
.margin({ right: 16 })
.onClick(() => router.back())
Image($r('app.media.template'))
.width(80).height(80)
.borderRadius(40)
Column() {
Text('Martha Craig')
.fontSize(20)
.fontWeight(FontWeight.Bold)
Text('Messenger')
.fontSize(16)
.fontColor(Color.Gray)
}.margin({ left: 16 })
}.width('100%').padding(16)
  Row() {
    Button({ type: ButtonType.Circle }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(48).height(48).backgroundColor(Color.Gray).margin({ right: 16 })
    .onClick(() => {})
    Button({ type: ButtonType.Circle }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(48).height(48).backgroundColor(Color.Gray).margin({ right: 16 })
    .onClick(() => {})
    Button({ type: ButtonType.Circle }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(48).height(48).backgroundColor(Color.Gray).margin({ right: 16 })
    .onClick(() => {})
    Button({ type: ButtonType.Circle }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(48).height(48).backgroundColor(Color.Gray)
    .onClick(() => {})
  }.width('100%').justifyContent(FlexAlign.Center).margin({ top: 16, bottom: 16 })

  List() {
    ListItem() {
      Row() {
        Text('Color').fontSize(16)
        Toggle({ type: ToggleType.Switch, isOn: this.colorToggle })
          .onChange((isOn: boolean) => {
            this.colorToggle = isOn;
          })
      }.justifyContent(FlexAlign.SpaceBetween).width('100%')
    }.padding({ left: 16, right: 16, top: 8, bottom: 8 })

    ListItem() {
      Row() {
        Text('Emoji').fontSize(16)
        Text(this.emojiValue).fontSize(16).fontColor(Color.Gray)
      }.justifyContent(FlexAlign.SpaceBetween).width('100%')
    }.padding({ left: 16, right: 16, top: 8, bottom: 8 })
    .onClick(() => {
      // Handle emoji selection
    })

    ListItem() {
      Row() {
        Text('Nicknames').fontSize(16)
        Text(this.nicknamesValue).fontSize(16).fontColor(Color.Gray)
      }.justifyContent(FlexAlign.SpaceBetween).width('100%')
    }.padding({ left: 16, right: 16, top: 8, bottom: 8 })
    .onClick(() => {
      // Handle nicknames editing
    })
  }

  Text('MORE ACTIONS').fontSize(14).fontColor(Color.Gray).margin({ top: 24, bottom: 8, left: 16 })

  List() {
    ListItem() {
      Row() {
        Text('Search in Conversation').fontSize(16)
        Image($r('app.media.template')).width(24).height(24)
      }.justifyContent(FlexAlign.SpaceBetween).width('100%')
    }.padding({ left: 16, right: 16, top: 8, bottom: 8 })
    .onClick(() => {
      // Handle search in conversation
    })

    ListItem() {
      Row() {
        Text('Create group').fontSize(16)
        Image($r('app.media.template')).width(24).height(24)
      }.justifyContent(FlexAlign.SpaceBetween).width('100%')
    }.padding({ left: 16, right: 16, top: 8, bottom: 8 })
    .onClick(() => {
      // Handle create group
    })
  }

  Text('PRIVACY').fontSize(14).fontColor(Color.Gray).margin({ top: 24, bottom: 8, left: 16 })

  List() {
    ListItem() {
      Row() {
        Text('Notifications').fontSize(16)
        Text(this.notificationsValue).fontSize(16).fontColor(Color.Gray)
      }.justifyContent(FlexAlign.SpaceBetween).width('100%')
    }.padding({ left: 16, right: 16, top: 8, bottom: 8 })
    .onClick(() => {
      this.notificationsValue = this.notificationsValue === 'On' ? 'Off' : 'On';
    })

    ListItem() {
      Row() {
        Text('Ignore Messages').fontSize(16)
        Image($r('app.media.template')).width(24).height(24)
      }.justifyContent(FlexAlign.SpaceBetween).width('100%')
    }.padding({ left: 16, right: 16, top: 8, bottom: 8 })
    .onClick(() => {
      // Handle ignore messages
    })

    ListItem() {
      Row() {
        Text('Block').fontSize(16)
      }.justifyContent(FlexAlign.SpaceBetween).width('100%')
    }.padding({ left: 16, right: 16, top: 8, bottom: 8 })
    .onClick(() => {
      // Handle block action
    })
  }
}.width('100%')
}
}