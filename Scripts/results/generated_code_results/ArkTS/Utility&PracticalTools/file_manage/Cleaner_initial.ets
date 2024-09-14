import router from '@ohos.router';
import { ProgressBar } from '@ohos/hypium';
interface UnusedApp {
name: string;
icon: Resource;
size: string;
}
interface DuplicateFile {
name: string;
size: string;
}
@Entry
@Component
struct CleanerPage {
@State storageUsed: number = 66;
@State totalStorage: string = '128 GB';
@State usedStorage: string = '85 GB';
@State unusedApps: UnusedApp[] = [
{ name: 'Waze', icon: $r('app.media.template'), size: '1.2 GB' },
{ name: 'LinkedIn', icon: $r('app.media.template'), size: '1.2 GB' },
{ name: 'Adobe', icon: $r('app.media.template'), size: '1.2 GB' },
{ name: 'Facebook', icon: $r('app.media.template'), size: '1.2 GB' }
];
@State duplicateFiles: DuplicateFile[] = [
{ name: 'DSC2021084133.jpg', size: '2 MB' },
{ name: 'RKAKL2022.xlsx', size: '2 MB' }
];
build() {
Column() {
Text('9:41')
.fontSize(16)
.width(40)
.textAlign(TextAlign.Center)
.margin({ top: 16, left: 256 })
  Text('Cleaner')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 16, left: 16 })

  Row() {
    Text('Used')
      .fontSize(14)
      .margin({ left: 16 })
    Text(`${this.storageUsed}%`)
      .fontSize(14)
      .margin({ left: 320 })
  }.width('100%').margin({ top: 16 })

  ProgressBar({
    value: this.storageUsed,
    total: 100,
    style: ProgressStyle.Linear
  })
    .width('90%')
    .height(10)
    .margin({ top: 8 })

  Text(`${this.usedStorage} of ${this.totalStorage}`)
    .fontSize(14)
    .margin({ top: 8, right: 16 })
    .textAlign(TextAlign.End)
    .width('90%')

  Button('Clean Junk files')
    .width('90%')
    .height(40)
    .margin({ top: 16 })
    .onClick(() => {
      // Implement junk file cleaning logic
    })

  Column() {
    Row() {
      Text('Unused Apps')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
      Text('See All')
        .fontSize(14)
        .fontColor(Color.Blue)
        .margin({ left: 'auto' })
        .onClick(() => {
          router.pushUrl({ url: 'pages/StorageDetails' })
        })
    }.width('90%').margin({ top: 16 })

    Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap }) {
      ForEach(this.unusedApps, (app: UnusedApp) => {
        Column() {
          Image(app.icon)
            .width(60)
            .height(60)
          Text(app.name)
            .fontSize(14)
          Text(app.size)
            .fontSize(12)
            .fontColor(Color.Gray)
        }.width('22%').margin({ top: 8 })
      })
    }.width('90%').margin({ top: 8 })
  }

  Text('Uninstall Apps (4.7 GB)')
    .fontSize(16)
    .margin({ top: 16, left: 16 })

  Column() {
    Text('Duplicate files')
      .fontSize(18)
      .fontWeight(FontWeight.Bold)
    ForEach(this.duplicateFiles, (file: DuplicateFile) => {
      Row() {
        Image($r('app.media.template'))
          .width(40)
          .height(40)
        Text(file.name)
          .fontSize(14)
          .margin({ left: 8 })
        Text(file.size)
          .fontSize(12)
          .fontColor(Color.Gray)
          .margin({ left: 'auto' })
      }.width('90%').margin({ top: 8 })
    })
  }.margin({ top: 16 })

  Text('Review files (1.2 GB)')
    .fontSize(16)
    .margin({ top: 16, left: 16 })

  Row() {
    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Home')
        .fontSize(12)
    }.margin({ right: 16 })

    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Files')
        .fontSize(12)
    }.margin({ right: 16 })

    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Cloud')
        .fontSize(12)
    }.margin({ right: 16 })

    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Clean')
        .fontSize(12)
    }
  }.width('100%').justifyContent(FlexAlign.SpaceEvenly).position({ y: 700 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
}