import router from '@ohos.router';
interface StorageCategory {
name: string;
icon: Resource;
items: number;
size: string;
}
@Entry
@Component
struct StorageDetails {
@State usedStorage: number = 85;
@State availableStorage: number = 43;
@State totalStorage: number = 256;
@State usedPercentage: number = 66;
@State categories: StorageCategory[] = [
{ name: 'Apps', icon: $r('app.media.template'), items: 1427, size: '55 GB' },
{ name: 'Videos', icon: $r('app.media.template'), items: 53, size: '9.9 GB' },
{ name: 'Document', icon: $r('app.media.template'), items: 127, size: '9.0 GB' },
{ name: 'Images', icon: $r('app.media.template'), items: 1432, size: '6.8 GB' },
{ name: 'Audio', icon: $r('app.media.template'), items: 421, size: '116 MB' },
{ name: 'Audio', icon: $r('app.media.template'), items: 0, size: '0 MB' }
];
build() {
Column() {
Row() {
Image($r('app.media.template')).width(24).height(24).onClick(() => router.back())
Text('9:41').fontSize(16).margin({ left: 280 })
Image($r('app.media.template')).width(16).height(16).margin({ left: 4 })
Image($r('app.media.template')).width(16).height(16).margin({ left: 4 })
}.width('100%').height(56).padding({ left: 16, right: 16 })
  Text('Internal Storage').fontSize(24).fontWeight(FontWeight.Bold).margin({ top: 16, bottom: 24 })

  Stack() {
    Progress({ value: this.usedPercentage, total: 100, type: ProgressType.Ring })
      .width(200)
      .height(200)
      .color(Color.Blue)
    Column() {
      Text(`${this.usedPercentage}%`).fontSize(40).fontWeight(FontWeight.Bold)
      Text('Used').fontSize(16).fontColor(Color.Gray)
    }
  }.margin({ bottom: 24 })

  Row() {
    this.StorageInfo('Used', `${this.usedStorage} GB`)
    this.StorageInfo('Available', `${this.availableStorage} GB`)
    this.StorageInfo('Total', `${this.totalStorage} GB`)
  }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ bottom: 24 })

  Row() {
    Image($r('app.media.template')).width(24).height(24)
    Text('Free up space').fontSize(16).fontWeight(FontWeight.Medium).margin({ left: 8 })
  }.width('100%').backgroundColor('#F0F0F0').padding(16).borderRadius(8).margin({ bottom: 16 })

  Text('Go to Clean to manage and free up space').fontSize(14).fontColor(Color.Gray).margin({ bottom: 24 })

  List() {
    ForEach(this.categories, (category: StorageCategory) => {
      ListItem() {
        this.CategoryItem(category)
      }
    })
  }.width('100%')
}.width('100%').height('100%').backgroundColor(Color.White).padding(16)
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
}.margin({ left: 16 }).alignItems(HorizontalAlign.Start)
Blank()
Progress({ value: this.getProgressValue(category.size), total: 100 })
.width(80)
.height(8)
.color(Color.Blue)
}.width('100%').padding({ top: 8, bottom: 8 })
}
getProgressValue(size: string): number {
const numSize = parseFloat(size);
const maxSize = 55; // Assuming 55 GB is the maximum size
return (numSize / maxSize) * 100;
}
}