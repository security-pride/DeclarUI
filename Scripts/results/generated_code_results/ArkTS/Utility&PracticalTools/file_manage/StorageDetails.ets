import router from '@ohos.router';
interface StorageCategory {
name: string;
icon: Resource;
items: number;
size: string;
usagePercentage: number;
}
@Entry
@Component
struct StorageDetails {
@State usedStorage: number = 85;
@State availableStorage: number = 43;
@State totalStorage: number = 256;
@State usedPercentage: number = 66;
@State categories: StorageCategory[] = [
{ name: 'Apps', icon: $r('app.media.template'), items: 1427, size: '55 GB', usagePercentage: 21.5 },
{ name: 'Videos', icon: $r('app.media.template'), items: 53, size: '9.9 GB', usagePercentage: 3.9 },
{ name: 'Document', icon: $r('app.media.template'), items: 127, size: '9.0 GB', usagePercentage: 3.5 },
{ name: 'Images', icon: $r('app.media.template'), items: 1432, size: '6.8 GB', usagePercentage: 2.7 },
{ name: 'Audio', icon: $r('app.media.template'), items: 421, size: '116 MB', usagePercentage: 0.05 }
];
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24).height(24)
.margin({ left: 16 })
.onClick(() => router.back())
Text('9:41')
.fontSize(16)
.fontWeight(FontWeight.Regular)
.margin({ left: 280 })
Image($r('app.media.template')).width(16).height(16).margin({ left: 4 })
Image($r('app.media.template')).width(16).height(16).margin({ left: 4 })
}.width('100%').height(56)
  Text('Internal Storage')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 16, bottom: 24, left: 16 })

  Progress({
    value: this.usedPercentage,
    total: 100,
    type: ProgressType.Ring
  })
    .width(200)
    .height(200)
    .color(Color.Blue)
    .style({ strokeWidth: 20 })

  Text(`${this.usedPercentage}%`)
    .fontSize(40)
    .fontWeight(FontWeight.Bold)
    .margin({ top: -120 })

  Row() {
    this.StorageInfo('Used', `${this.usedStorage} GB`)
    this.StorageInfo('Available', `${this.availableStorage} GB`)
    this.StorageInfo('Total', `${this.totalStorage} GB`)
  }.width('100%').justifyContent(FlexAlign.SpaceEvenly).margin({ top: 24, bottom: 24 })

  Button() {
    Row() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Free up space').fontSize(16).fontWeight(FontWeight.Medium).margin({ left: 8 })
    }
  }
  .width('90%')
  .height(50)
  .backgroundColor('#F0F0F0')
  .borderRadius(25)

  Text('Go to Clean to manage and free up space')
    .fontSize(14)
    .fontColor(Color.Gray)
    .margin({ top: 8, bottom: 24 })

  List() {
    ForEach(this.categories, (category: StorageCategory) => {
      ListItem() {
        this.CategoryItem(category)
      }
    })
  }.width('100%').layoutWeight(1)
}.width('100%').height('100%').backgroundColor(Color.White)
}
@Builder
StorageInfo(label: string, value: string) {
Column() {
Text(label).fontSize(14).fontColor(Color.Gray)
Text(value).fontSize(16).fontWeight(FontWeight.Bold)
}.alignItems(HorizontalAlign.Center)
}
@Builder
CategoryItem(category: StorageCategory) {
Row() {
Image(category.icon).width(40).height(40)
Column() {
Text(category.name).fontSize(16).fontWeight(FontWeight.Medium)
Text(${category.items} items ${category.size}).fontSize(14).fontColor(Color.Gray)
}.layoutWeight(1).margin({ left: 16 }).alignItems(HorizontalAlign.Start)
Progress({ value: category.usagePercentage, total: 100, type: ProgressType.Linear })
.width(80)
.height(8)
.color(Color.Blue)
}.width('100%').padding({ left: 16, right: 16, top: 8, bottom: 8 })
}
}