import router from '@ohos.router';
interface StorageInfo {
type: string;
usedSpace: string;
totalSpace: string;
percentageUsed: number;
actionText: string;
}
interface FavoriteItem {
name: string;
itemCount: number;
size: string;
icon: Resource;
}
interface RecentFile {
name: string;
size: string;
icon: Resource;
}
@Entry
@Component
struct HomePage {
@State internalStorage: StorageInfo = {
type: 'Internal Storage',
usedSpace: '85 GB',
totalSpace: '128 GB',
percentageUsed: 66,
actionText: 'View Details'
};
@State cloudStorage: StorageInfo = {
type: 'Cloud Storage',
usedSpace: '131 GB',
totalSpace: '2 TB',
percentageUsed: 37,
actionText: 'Go to storage lists'
};
@State favorites: FavoriteItem[] = [
{ name: 'Download', itemCount: 5, size: '4.6 GB', icon: $r('app.media.template') },
{ name: 'Canva', itemCount: 31, size: '821 MB', icon: $r('app.media.template') }
];
@State recentFiles: RecentFile[] = [
{ name: 'DSC2021084133.jpg', size: '2MB', icon: $r('app.media.template') },
{ name: 'RKAKL2022.xlsx', size: '140Kb', icon: $r('app.media.template') }
];
build() {
Column() {
Row() {
Text('9:41').fontSize(16).fontWeight(FontWeight.Regular)
Blank()
Image($r('app.media.template')).width(16).height(16)
Image($r('app.media.template')).width(16).height(16).margin({ left: 8 })
}.width('100%').height(30).margin({ top: 14 })
  Text('File Manager')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 16, bottom: 16 })

  Search({ placeholder: 'Search folder or files' })
    .width('100%')
    .height(40)
    .backgroundColor('#F1F3F5')
    .margin({ bottom: 16 })

  this.StorageCard(this.internalStorage)
  this.StorageCard(this.cloudStorage)

  Row() {
    Text('Favorites').fontSize(18).fontWeight(FontWeight.Bold)
    Blank()
    Text('See All')
      .fontSize(14)
      .fontColor(Color.Blue)
      .onClick(() => {
        // Navigate to see all favorites
      })
  }.width('100%').margin({ top: 24, bottom: 12 })

  ForEach(this.favorites, (item: FavoriteItem) => {
    this.FavoriteItem(item)
  })

  Row() {
    Text('Recent Files').fontSize(18).fontWeight(FontWeight.Bold)
    Blank()
    Text('See All')
      .fontSize(14)
      .fontColor(Color.Blue)
      .onClick(() => {
        // Navigate to see all recent files
      })
  }.width('100%').margin({ top: 24, bottom: 12 })

  ForEach(this.recentFiles, (file: RecentFile) => {
    this.RecentFileItem(file)
  })

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Files').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Files' }))
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
  .backgroundColor(Color.White)
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
.padding({ left: 16, right: 16, top: 16 })
}
@Builder
StorageCard(info: StorageInfo) {
Row() {
Progress({ value: info.percentageUsed, total: 100, type: ProgressType.Ring })
.width(60)
.height(60)
.color(Color.Blue)
Column() {
Text(info.type).fontSize(16).fontWeight(FontWeight.Bold)
Text(${info.usedSpace} of ${info.totalSpace} used).fontSize(14).fontColor(Color.Gray)
Text(info.actionText)
.fontSize(14)
.fontColor(Color.Blue)
.onClick(() => {
if (info.type === 'Internal Storage') {
router.pushUrl({ url: 'pages/StorageDetails' })
} else {
router.pushUrl({ url: 'pages/CloudStorage' })
}
})
}.margin({ left: 16 }).alignItems(HorizontalAlign.Start)
}
.width('100%')
.padding(16)
.backgroundColor('#F1F3F5')
.borderRadius(8)
.margin({ top: 8 })
}
@Builder
FavoriteItem(item: FavoriteItem) {
Row() {
Image(item.icon).width(40).height(40)
Column() {
Text(item.name).fontSize(16).fontWeight(FontWeight.Medium)
Text(${item.itemCount} items ${item.size}).fontSize(14).fontColor(Color.Gray)
}.margin({ left: 16 }).alignItems(HorizontalAlign.Start)
}.width('100%').padding({ top: 8, bottom: 8 })
}
@Builder
RecentFileItem(file: RecentFile) {
Row() {
Image(file.icon).width(40).height(40)
Text(file.name).fontSize(16).margin({ left: 16 })
Blank()
Text(file.size).fontSize(14).fontColor(Color.Gray)
}.width('100%').padding({ top: 8, bottom: 8 })
}
}