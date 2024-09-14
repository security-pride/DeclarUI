import router from '@ohos.router';
interface CloudStorageItem {
name: string;
icon: Resource;
items: number;
size: string;
}
@Entry
@Component
struct CloudStorageListView {
@State cloudStorageItems: CloudStorageItem[] = [
{ name: 'Dropbox', icon: $r('app.media.template'), items: 2, size: '1.2 Gb' },
{ name: 'Kangxpukul@gmail.com', icon: $r('app.media.template'), items: 4, size: '13.5 Gb' },
{ name: 'Nirwna - OneDrive', icon: $r('app.media.template'), items: 5, size: '164.3 Gb' },
{ name: 'PIDT - OneDrive', icon: $r('app.media.template'), items: 7, size: '131.1 Gb' }
];
@State sortOrder: string = 'A-Z';
build() {
Column() {
Row() {
Text('9:41').fontSize(16).width(40).textAlign(TextAlign.Center)
}.width('100%').height(30).margin({ top: 14 })
  Row() {
    Text('Cloud Storage').fontSize(24).fontWeight(FontWeight.Bold)
    Blank()
    Button('+', { type: ButtonType.Circle, stateEffect: true })
      .width(30).height(30)
      .fontSize(24)
      .onClick(() => {
        // Add new cloud storage account logic
      })
  }.width('90%').margin({ top: 16 })

  Row() {
    Button(`${this.sortOrder} ▼`)
      .onClick(() => {
        // Toggle sort order logic
        this.sortOrder = this.sortOrder === 'A-Z' ? 'Z-A' : 'A-Z';
      })
    Blank()
    Button() {
      Image($r('app.media.template')).width(24).height(24)
    }.width(30).height(30).backgroundColor(Color.Transparent)
  }.width('90%').margin({ top: 16 })

  List() {
    ForEach(this.cloudStorageItems, (item: CloudStorageItem) => {
      ListItem() {
        Row() {
          Image(item.icon).width(40).height(40)
          Column() {
            Text(item.name).fontSize(16).fontWeight(FontWeight.Medium)
            Text(`${item.items} items ${item.size}`).fontSize(14).fontColor(Color.Gray)
          }.layoutWeight(1).margin({ left: 16 })
          Button() {
            Image($r('app.media.template')).width(24).height(24)
          }.width(30).height(30).backgroundColor(Color.Transparent)
        }.width('100%').padding(16)
      }
    })
  }.width('100%').layoutWeight(1)

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/HomePage' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Files').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Files' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Cloud').fontSize(12)
    }

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Clean').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Cleaner' }))
  }.width('100%').justifyContent(FlexAlign.SpaceEvenly).padding({ bottom: 16 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
}