import router from '@ohos.router';
import { BatteryStatus } from '@ohos.batteryInfo';
@Entry
@Component
struct Player {
@State currentTime: string = '9:41 AM';
@State batteryLevel: number = 100;
@State songTitle: string = 'All Mine';
@State artistName: string = 'Kanye West';
@State currentProgress: number = 90;
@State totalDuration: number = 180;
@State isPlaying: boolean = true;
@State isLiked: boolean = false;
@State isRepeat: boolean = false;
@State isShuffle: boolean = false;
build() {
Column() {
Row() {
Text(this.currentTime)
.fontSize(16)
.fontWeight(FontWeight.Medium)
Blank()
Image($r('app.media.template')).width(20).height(20)
BatteryStatus({ batteryLevel: this.batteryLevel })
}.width('100%').height(34).padding({ left: 12, right: 12, top: 0 })
  Image($r('app.media.template'))
    .width('90%')
    .height('40%')
    .objectFit(ImageFit.Cover)
    .borderRadius(20)

  Text(this.songTitle)
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20 })

  Text(this.artistName)
    .fontSize(18)
    .fontColor(Color.Gray)
    .margin({ top: 5 })

  Row() {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(40).height(40).margin({ right: 10 })
      .onClick(() => this.isLiked = !this.isLiked)

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(40).height(40)
  }.margin({ top: 20 })

  Progress({
    value: this.currentProgress,
    total: this.totalDuration,
    type: ProgressType.Linear
  })
    .width('90%')
    .margin({ top: 30 })
    .style({ strokeWidth: 2 })

  Row() {
    Text(this.formatTime(this.currentProgress)).fontSize(14)
    Blank()
    Text(this.formatTime(this.totalDuration)).fontSize(14)
  }.width('90%').margin({ top: 10 })

  Row() {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(50).height(50).onClick(() => this.isShuffle = !this.isShuffle)

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(50).height(50).margin({ left: 20, right: 20 })

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(36).height(36)
    }.width(70).height(70).backgroundColor(Color.Orange)
      .onClick(() => this.isPlaying = !this.isPlaying)

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(50).height(50).margin({ left: 20, right: 20 })

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(50).height(50).onClick(() => this.isRepeat = !this.isRepeat)
  }.margin({ top: 30 })

  Button('Share the sound!')
    .width('90%')
    .height(50)
    .margin({ top: 30 })
    .backgroundColor(Color.Orange)
    .fontColor(Color.White)

  Text('Let your friends know what you are listening! Share this song')
    .fontSize(14)
    .fontColor(Color.Gray)
    .margin({ top: 10 })
    .textAlign(TextAlign.Center)
    .width('90%')

  Row() {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.width(50).height(50).onClick(() => {
      router.pushUrl({ url: 'pages/Home' })
    })
  }.width('100%').justifyContent(FlexAlign.Center).position({ y: 720 })
}.width('100%').height('100%').backgroundColor(Color.White)
}
private formatTime(seconds: number): string {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = Math.floor(seconds % 60);
return ${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds};
}
}