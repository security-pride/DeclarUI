import router from '@ohos.router';
interface Contact {
name: string;
avatar: Resource;
}
@Entry
@Component
struct NewMessage {
@State contacts: Contact[] = [
{ name: 'Martha Craig', avatar: $r('app.media.template') },
{ name: 'Kieron Dotson', avatar: $r('app.media.template') },
{ name: 'Zack John', avatar: $r('app.media.template') },
{ name: 'Jamie Franco', avatar: $r('app.media.template') },
{ name: 'Tabitha Potter', avatar: $r('app.media.template') }
];
@State searchText: string = '';
build() {
Column() {
Row() {
Button('Cancel')
.fontSize(16)
.fontColor(Color.Blue)
.backgroundColor(Color.Transparent)
.onClick(() => router.back())
Text('New message').fontSize(18).fontWeight(FontWeight.Bold)
}.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)
  Search({ value: this.searchText, placeholder: 'To:' })
    .width('90%')
    .height(40)
    .margin({ top: 10, bottom: 10 })
    .onChange((value: string) => {
      this.searchText = value;
    })

  List() {
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Create a New Group').fontSize(16).margin({ left: 16 })
      }.width('100%')
    }.height(50)

    Text('ЛЮДИ').fontSize(14).fontColor(Color.Gray).margin({ top: 20, bottom: 10, left: 16 })

    ForEach(this.contacts, (contact: Contact) => {
      ListItem() {
        Row() {
          Image(contact.avatar)
            .width(40)
            .height(40)
            .borderRadius(20)
          Text(contact.name)
            .fontSize(16)
            .margin({ left: 16 })
        }.width('100%')
      }.height(60)
    })
  }.width('100%')

  Column() {
    Row() {
      ForEach(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], (key: string) => {
        Button(key)
          .width('10%')
          .height(40)
          .backgroundColor(Color.White)
          .fontColor(Color.Black)
      })
    }.width('100%')

    Row() {
      ForEach(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], (key: string) => {
        Button(key)
          .width('11%')
          .height(40)
          .backgroundColor(Color.White)
          .fontColor(Color.Black)
      })
    }.width('100%')

    Row() {
      Button('⇧').width('15%').height(40).backgroundColor(Color.White).fontColor(Color.Black)
      ForEach(['Z', 'X', 'C', 'V', 'B', 'N', 'M'], (key: string) => {
        Button(key)
          .width('10%')
          .height(40)
          .backgroundColor(Color.White)
          .fontColor(Color.Black)
      })
      Button('⌫').width('15%').height(40).backgroundColor(Color.White).fontColor(Color.Black)
    }.width('100%')

    Row() {
      Button('123').width('25%').height(40).backgroundColor(Color.LightGray).fontColor(Color.Black)
      Button('space').width('50%').height(40).backgroundColor(Color.White).fontColor(Color.Black)
      Button('Go').width('25%').height(40).backgroundColor(Color.Blue).fontColor(Color.White)
    }.width('100%')
  }.position({ y: '70%' }).width('100%')
}
}
}