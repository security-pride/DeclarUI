import router from '@ohos.router';
interface CloudStorageItem {
name: string;
icon: Resource;
items: number;
size: string;
usagePercentage: number;
}
@Entry
@Component
struct CloudStorage {
@State cloudStorageItems: CloudStorageItem[] = [
{ name: 'Dropbox', icon: $r('app.media.template'), items: 2, size: '1.2 Gb', usagePercentage: 12 },
{ name: 'Kangxpukul@gmail.com', icon: $r('app.media.template'), items: 4, size: '13.5 Gb', usagePercentage: 52 },
{ name: 'Nirwna - OneDrive', icon: $r('app.media.template'), items: 5, size: '164.3 Gb', usagePercentage: 31 },
{ name: 'PIDT - OneDrive', icon: $r('app.media.template'), items: 7, size: '131.1 Gb', usagePercentage: 62 }
];
@State sortOrder: string = 'A-Z';
build() {
Column() {
Row() {
Text('9:41').fontSize(16).width(40).textAlign(TextAlign.Center)
Image($r('app.media.template')).width(20).height(20).margin({ left: 270 })
}.width('100%').margin({ top: 14 })
  Row() {
    Text('Cloud Storage').fontSize(24).fontWeight(FontWeight.Bold)
    Blank()
    Button('+', { type: ButtonType.Circle })
      .width(24).height(24).fontSize(20).backgroundColor(Color.Blue)
  }.width('100%').margin({ top: 16, bottom: 16 })

  Row() {
    Text(this.sortOrder)
      .fontSize(16)
      .fontColor(Color.Blue)
      .onClick(() => {
        this.sortOrder = this.sortOrder === 'A-Z' ? 'Z-A' : 'A-Z';
        this.cloudStorageItems.reverse();
      })
    Blank()
    Image($r('app.media.template'))
      .width(24).height(24)
      .onClick(() => {
        router.pushUrl({ url: 'pages/CloudStorage-ListView' });
      })
  }.width('100%').margin({ bottom: 16 })

  List() {
    ForEach(this.cloudStorageItems, (item: CloudStorageItem) => {
      ListItem() {
        Row() {
          Image(item.icon).width(40).height(40)
          Column() {
            Text(item.name).fontSize(16).fontWeight(FontWeight.Medium)
            Text(`${item.items} items ${item.size}`).fontSize(14).fontColor(Color.Gray)
            Progress({ value: item.usagePercentage, total: 100 })
              .color(Color.Blue)
              .height(4)
              .width('100%')
          }.layoutWeight(1).margin({ left: 16 })
          Image($r('app.media.template')).width(24).height(24)
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
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceEvenly)
  .padding({ bottom: 16 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
.padding({ left: 16, right: 16 })
}
}