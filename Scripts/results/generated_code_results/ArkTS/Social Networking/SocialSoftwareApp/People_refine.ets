import router from '@ohos.router';
interface Person {
name: string;
avatar: Resource;
status: string;
active?: boolean;
}
@Entry
@Component
struct People {
@State activeList: Person[] = [
{ name: 'Martha Craig', avatar: $r('app.media.template'), status: '', active: true },
{ name: 'Kieron Dotson', avatar: $r('app.media.template'), status: '8 min' },
{ name: 'Zack John', avatar: $r('app.media.template'), status: '10 min' },
{ name: 'Jamie Franco', avatar: $r('app.media.template'), status: '', active: true },
{ name: 'Tabitha Potter', avatar: $r('app.media.template'), status: '19 min' }
];
@State recentlyActive: Person[] = [
{ name: 'Albert Lasker', avatar: $r('app.media.template'), status: '39 min' }
];
@State searchText: string = '';
build() {
Column() {
Row() {
Image($r('app.media.template')).width(40).height(40).margin({ right: 10 })
Text('People').fontSize(20).fontWeight(FontWeight.Bold)
Blank()
Image($r('app.media.template')).width(24).height(24).margin({ right: 10 })
Image($r('app.media.template')).width(24).height(24)
}.width('100%').padding(16)
  Search({ value: this.searchText, placeholder: 'Search' })
    .width('90%')
    .height(40)
    .backgroundColor('#F5F5F5')
    .margin({ top: 10, bottom: 20 })
    .onChange((value: string) => {
      this.searchText = value;
    })

  List({ space: 10, initialIndex: 0 }) {
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(50).height(50)
        Column() {
          Text('Your story').fontSize(16)
          Text('Add to your story').fontSize(14).fontColor(Color.Gray)
        }.alignItems(HorizontalAlign.Start).margin({ left: 10 })
      }.width('100%').padding({ left: 16, right: 16, bottom: 20 })
    }

    ForEach(this.activeList, (person: Person) => {
      ListItem() {
        Row() {
          Stack() {
            Image(person.avatar).width(50).height(50)
            if (person.active) {
              Circle({ width: 12, height: 12 })
                .fill(Color.Green)
                .position({ x: 38, y: 38 })
            }
          }
          Column() {
            Text(person.name).fontSize(16)
            if (person.status) {
              Text(person.status).fontSize(14).fontColor(Color.Gray)
            }
          }.alignItems(HorizontalAlign.Start).margin({ left: 10 })
          Blank()
          Image($r('app.media.template')).width(24).height(24)
        }.width('100%').padding({ left: 16, right: 16, top: 10, bottom: 10 })
      }
    })

    ListItem() {
      Text('RECENTLY ACTIVE').fontSize(14).fontColor(Color.Gray).padding({ left: 16, top: 20, bottom: 10 })
    }

    ForEach(this.recentlyActive, (person: Person) => {
      ListItem() {
        Row() {
          Image(person.avatar).width(50).height(50)
          Column() {
            Text(person.name).fontSize(16)
            Text(person.status).fontSize(14).fontColor(Color.Gray)
          }.alignItems(HorizontalAlign.Start).margin({ left: 10 })
          Blank()
          Image($r('app.media.template')).width(24).height(24)
        }.width('100%').padding({ left: 16, right: 16, top: 10, bottom: 10 })
      }
    })
  }
  .layoutWeight(1)
  .edgeEffect(EdgeEffect.Spring)
  .chainAnimation(true)

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Chats').fontSize(12).fontColor(Color.Gray)
    }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/Chats' }))
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('People').fontSize(12).fontColor(Color.Blue)
    }.layoutWeight(1)
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Discover').fontSize(12).fontColor(Color.Gray)
    }.layoutWeight(1)
  }.width('100%').height(60).backgroundColor(Color.White)
}
}
}