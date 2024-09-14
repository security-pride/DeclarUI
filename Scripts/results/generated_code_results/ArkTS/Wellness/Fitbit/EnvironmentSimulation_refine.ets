import router from '@ohos.router';
import { CommonConstants } from '../common/CommonConstants';
@Entry
@Component
struct EnvironmentSimulation {
@State duration: number = 45;
@State isPlaying: boolean = false;
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24)
.height(24)
.objectFit(ImageFit.Contain)
.onClick(() => {
router.pushUrl({ url: 'pages/Discovery' })
})
Blank()
Image($r('app.media.template'))
.width(24)
.height(24)
.objectFit(ImageFit.Contain)
}
.width('100%')
.padding(16)
  Image($r('app.media.template'))
    .width('100%')
    .height('30%')
    .objectFit(ImageFit.Cover)

  Column() {
    Text('用心')
      .fontSize(16)
      .fontColor(Color.Gray)
      .margin({ top: 16, bottom: 8 })

    Text('Nature rain on leaves')
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
      .margin({ bottom: 16 })

    Text('Relax with ease to the sounds of rain on leaves.')
      .fontSize(16)
      .margin({ bottom: 24 })
      .textOverflow({ overflow: TextOverflow.Ellipsis })
      .maxLines(2)

    Row() {
      Image($r('app.media.template'))
        .width(20)
        .height(20)
        .objectFit(ImageFit.Contain)
      Text('持续时间')
        .fontSize(16)
        .margin({ left: 8 })
      Blank()
      Text(`${this.duration} 分钟`)
        .fontSize(16)
    }
    .width('100%')
    .margin({ bottom: 24 })

    Button('试用 PREMIUM', { type: ButtonType.Normal })
      .width('100%')
      .height(50)
      .backgroundColor('#1E90FF')
      .fontColor(Color.White)
      .onClick(() => {
        // Handle premium trial
      })
  }
  .padding(16)
  .alignItems(HorizontalAlign.Start)
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
}