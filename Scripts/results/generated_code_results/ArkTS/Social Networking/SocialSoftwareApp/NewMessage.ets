import router from '@ohos.router';
interface Contact {
name: string;
avatar: Resource;
}
@Entry
@Component
struct NewMessagePage {
@State contacts: Contact[] = [
{ name: 'Martha Craig', avatar: $r('app.media.template') },
{ name: 'Kieron Dotson', avatar: $r('app.media.template') },
{ name: 'Zack John', avatar: $r('app.media.template') },
{ name: 'Jamie Franco', avatar: $r('app.media.template') },
{ name: 'Tabitha Potter', avatar: $r('app.media.template') }
];
@State toField: string = '';
private searchController: SearchController = new SearchController();
build() {
Column() {
Row() {
Text('Cancel')
.fontSize(16)
.fontColor(Color.Blue)
.onClick(() => router.back())
Text('New message')
.fontSize(18)
.fontWeight(FontWeight.Bold)
}
.width('100%')
.justifyContent(FlexAlign.SpaceBetween)
.padding(10)
  Search({ value: this.toField, placeholder: 'To:', controller: this.searchController })
    .width('100%')
    .height(40)
    .margin({ top: 10, bottom: 10 })
    .onChange((value: string) => {
      this.toField = value;
    })

  List() {
    ListItem() {
      Row() {
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Text('Create a New Group')
          .fontSize(16)
          .margin({ left: 10 })
      }
      .width('100%')
      .padding(10)
    }

    ListItem() {
      Text('люди')
        .fontSize(14)
        .fontColor(Color.Gray)
    }
    .padding({ top: 20, bottom: 10 })

    ForEach(this.contacts, (contact: Contact) => {
      ListItem() {
        Row() {
          Image(contact.avatar)
            .width(40)
            .height(40)
            .borderRadius(20)
          Text(contact.name)
            .fontSize(16)
            .margin({ left: 10 })
        }
        .width('100%')
        .padding(10)
      }
    })
  }
  .width('100%')
  .layoutWeight(1)

  Column() {
    Row() {
      ForEach(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], (key: string) => {
        Button(key)
          .width('10%')
          .aspectRatio(1)
          .fontSize(18)
          .backgroundColor(Color.White)
          .fontColor(Color.Black)
      })
    }

    Row() {
      ForEach(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], (key: string) => {
        Button(key)
          .width('11%')
          .aspectRatio(1)
          .fontSize(18)
          .backgroundColor(Color.White)
          .fontColor(Color.Black)
      })
    }.margin({ top: 5 })

    Row() {
      Button('⇧')
        .width('15%')
        .aspectRatio(1)
        .fontSize(18)
        .backgroundColor(Color.White)
        .fontColor(Color.Black)
      ForEach(['Z', 'X', 'C', 'V', 'B', 'N', 'M'], (key: string) => {
        Button(key)
          .width('10%')
          .aspectRatio(1)
          .fontSize(18)
          .backgroundColor(Color.White)
          .fontColor(Color.Black)
      })
      Button('⌫')
        .width('15%')
        .aspectRatio(1)
        .fontSize(18)
        .backgroundColor(Color.White)
        .fontColor(Color.Black)
    }.margin({ top: 5 })

    Row() {
      Button('123')
        .width('25%')
        .height(40)
        .fontSize(16)
        .backgroundColor(Color.White)
        .fontColor(Color.Black)
      Button('space')
        .width('50%')
        .height(40)
        .fontSize(16)
        .backgroundColor(Color.White)
        .fontColor(Color.Black)
      Button('Go')
        .width('25%')
        .height(40)
        .fontSize(16)
        .backgroundColor(Color.Blue)
        .fontColor(Color.White)
    }.margin({ top: 5 })
  }
  .width('100%')
  .backgroundColor(Color.LightGray)
  .padding(5)
}
}
}