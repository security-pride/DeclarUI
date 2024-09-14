import router from '@ohos.router';
interface FolderItem {
name: string;
icon: Resource;
itemCount: number;
size: string;
isFavorite: boolean;
}
@Entry
@Component
struct Files {
@State sortOrder: string = 'A-Z';
@State folders: FolderItem[] = [
{ name: 'Alarms', icon: $r('app.media.template'), itemCount: 1, size: '1 KB', isFavorite: false },
{ name: 'Android', icon: $r('app.media.template'), itemCount: 6, size: '12 MB', isFavorite: false },
{ name: 'Backups', icon: $r('app.media.template'), itemCount: 1, size: '821 MB', isFavorite: false },
{ name: 'Browser', icon: $r('app.media.template'), itemCount: 3, size: '204 KB', isFavorite: false },
{ name: 'Canva', icon: $r('app.media.template'), itemCount: 23, size: '98 MB', isFavorite: true },
{ name: 'DCIM', icon: $r('app.media.template'), itemCount: 3, size: '18.4 GB', isFavorite: false },
{ name: 'Documents', icon: $r('app.media.template'), itemCount: 6, size: '2.4 GB', isFavorite: false },
{ name: 'Download', icon: $r('app.media.template'), itemCount: 5, size: '4.6 GB', isFavorite: true },
{ name: 'Notifications', icon: $r('app.media.template'), itemCount: 0, size: '0 B', isFavorite: false }
];
build() {
Column() {
Row() {
Text('9:41').fontSize(16).width(40).textAlign(TextAlign.Center)
}.width('100%').height(30).margin({ top: 14 })
  Text('Internal Storage')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 16, bottom: 16 })
    .alignSelf(ItemAlign.Start)

  Row() {
    Text(this.sortOrder)
      .fontSize(16)
      .fontColor(Color.Blue)
      .onClick(() => {
        this.sortOrder = this.sortOrder === 'A-Z' ? 'Z-A' : 'A-Z';
        this.folders.reverse();
      })
    Blank()
    Button('+', { type: ButtonType.Circle, stateEffect: true })
      .width(24)
      .height(24)
      .fontSize(20)
      .backgroundColor(Color.Blue)
    Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })
  }.width('100%').margin({ bottom: 16 })

  List() {
    ForEach(this.folders, (folder: FolderItem) => {
      ListItem() {
        Row() {
          Image(folder.isFavorite ? $r('app.media.template') : $r('app.media.template'))
            .width(40).height(40)
          Column() {
            Text(folder.name)
              .fontSize(16)
              .fontWeight(FontWeight.Medium)
            Text(`${folder.itemCount} items ${folder.size}`)
              .fontSize(14)
              .fontColor(Color.Gray)
          }.layoutWeight(1).margin({ left: 16 })
          Image($r('app.media.template')).width(24).height(24)
        }.width('100%').padding(16)
      }
    })
  }
  .width('100%')
  .layoutWeight(1)
  .divider({ strokeWidth: 1, color: '#F1F3F5' })

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/HomePage' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Files').fontSize(12)
    }

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Cloud').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/CloudStorage' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Clean').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Cleaner' }))
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceEvenly)
  .padding({ top: 8, bottom: 8 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
.padding({ left: 16, right: 16, top: 16 })
}
}