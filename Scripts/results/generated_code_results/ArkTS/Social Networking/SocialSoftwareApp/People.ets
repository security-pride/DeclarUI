import router from '@ohos.router';
interface Person {
name: string;
avatar: Resource;
status: string;
isActive: boolean;
}
@Entry
@Component
struct PeoplePage {
@State activeList: Person[] = [
{ name: 'Martha Craig', avatar: $r('app.media.template'), status: '', isActive: true },
{ name: 'Kieron Dotson', avatar: $r('app.media.template'), status: '8 min', isActive: false },
{ name: 'Zack John', avatar: $r('app.media.template'), status: '10 min', isActive: false },
{ name: 'Jamie Franco', avatar: $r('app.media.template'), status: '', isActive: true },
{ name: 'Tabitha Potter', avatar: $r('app.media.template'), status: '19 min', isActive: false }
];
@State recentlyActive: Person[] = [
{ name: 'Albert Lasker', avatar: $r('app.media.template'), status: '39 min', isActive: false }
];
build() {
Column() {
Row() {
Image($r('app.media.template')).width(40).height(40).borderRadius(20)
Text('People').fontSize(20).fontWeight(FontWeight.Bold).margin({ left: 10 })
Blank()
Image($r('app.media.template')).width(24).height(24)
Image($r('app.media.template')).width(24).height(24).margin({ left: 10 })
}.width('100%').padding(10).height(60)
  Search({ placeholder: 'Search' })
    .height(40)
    .backgroundColor('#F5F5F5')
    .margin({ top: 10, bottom: 10 })

  List() {
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(40).height(40)
        Column() {
          Text('Your story').fontSize(16).fontWeight(FontWeight.Bold)
          Text('Add to your story').fontSize(14).fontColor(Color.Gray)
        }.alignItems(HorizontalAlign.Start).margin({ left: 10 })
      }.padding(10)
    }

    ForEach(this.activeList, (person: Person) => {
      ListItem() {
        Row() {
          Stack() {
            Image(person.avatar).width(40).height(40).borderRadius(20)
            if (person.isActive) {
              Circle({ width: 12, height: 12 })
                .fill(Color.Green)
                .position({ x: 30, y: 30 })
            }
          }
          Text(person.name).fontSize(16).margin({ left: 10 })
          Blank()
          if (!person.isActive) {
            Text(person.status).fontSize(14).fontColor(Color.Gray)
          }
          Image($r('app.media.template')).width(24).height(24)
        }.width('100%').padding(10)
      }.onClick(() => {
        router.pushUrl({ url: 'pages/Intro' })
      })
    })

    ListItem() {
      Text('RECENTLY ACTIVE').fontSize(14).fontColor(Color.Gray).padding(10)
    }

    ForEach(this.recentlyActive, (person: Person) => {
      ListItem() {
        Row() {
          Image(person.avatar).width(40).height(40).borderRadius(20)
          Text(person.name).fontSize(16).margin({ left: 10 })
          Blank()
          Text(person.status).fontSize(14).fontColor(Color.Gray)
          Image($r('app.media.template')).width(24).height(24)
        }.width('100%').padding(10)
      }.onClick(() => {
        router.pushUrl({ url: 'pages/Intro' })
      })
    })
  }.width('100%').layoutWeight(1)

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Chats').fontSize(12).fontColor(Color.Gray)
    }.layoutWeight(1).onClick(() => {
      router.pushUrl({ url: 'pages/Chats' })
    })
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