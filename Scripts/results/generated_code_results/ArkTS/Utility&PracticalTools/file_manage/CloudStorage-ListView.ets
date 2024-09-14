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
Text('9:41')
.fontSize(16)
.width(40)
.textAlign(TextAlign.Center)
.margin({ top: 14, left: 337 })
  Text('Cloud Storage')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 16, left: 16 })

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
      .width(24)
      .height(24)
      .margin({ right: 16 })
    Button('+', { type: ButtonType.Circle })
      .width(24)
      .height(24)
      .fontSize(20)
      .backgroundColor(Color.Blue)
      .margin({ right: 16 })
  }.width('100%').margin({ top: 16, bottom: 16 })

  List() {
    ForEach(this.cloudStorageItems, (item: CloudStorageItem) => {
      ListItem() {
        Row() {
          Image(item.icon)
            .width(40)
            .height(40)
          Column() {
            Text(item.name)
              .fontSize(16)
              .fontWeight(FontWeight.Medium)
            Text(`${item.items} items ${item.size}`)
              .fontSize(14)
              .fontColor(Color.Gray)
          }.layoutWeight(1).margin({ left: 16 })
          Image($r('app.media.template'))
            .width(24)
            .height(24)
        }.width('100%').padding(16)
      }
    })
  }.width('100%').layoutWeight(1)

  Tabs() {
    TabContent() {
      Column() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Home').fontSize(12)
      }
    }.tabBar('Home')

    TabContent() {
      Column() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Files').fontSize(12)
      }
    }.tabBar('Files')

    TabContent() {
      Column() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Cloud').fontSize(12)
      }
    }.tabBar('Cloud')

    TabContent() {
      Column() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Clean').fontSize(12)
      }
    }.tabBar('Clean')
  }
  .barMode(BarMode.Fixed)
  .onChange((index: number) => {
    switch (index) {
      case 0: router.pushUrl({ url: 'pages/HomePage' }); break;
      case 1: router.pushUrl({ url: 'pages/Files' }); break;
      case 3: router.pushUrl({ url: 'pages/Cleaner' }); break;
    }
  })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
}