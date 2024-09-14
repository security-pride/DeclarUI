import router from '@ohos.router';
//import { CommonConstants } from '../common/constants/CommonConstants';
interface PriorityData {
day: string;
personal: number;
private: number;
secret: number;
}
interface ActivityData {
personal: number;
work: number;
}
@Entry
@Component
struct StatisticsPage {
@State priorityData: PriorityData[] = [
{ day: 'Mo', personal: 4, private: 2, secret: 0 },
{ day: 'Tu', personal: 6, private: 0, secret: 0 },
{ day: 'We', personal: 0, private: 6, secret: 10 },
{ day: 'Th', personal: 4, private: 2, secret: 8 },
{ day: 'Fr', personal: 6, private: 0, secret: 4 },
{ day: 'Sa', personal: 0, private: 4, secret: 8 },
{ day: 'Su', personal: 6, private: 0, secret: 0 }
];
@State activityData: ActivityData[] = [
{ personal: 2, work: 1 },
{ personal: 3, work: 2 },
{ personal: 1, work: 3 },
{ personal: 4, work: 2 },
{ personal: 2, work: 4 },
{ personal: 3, work: 1 },
{ personal: 2, work: 1 }
];
@Builder
PriorityChart() {
Column() {
Text('Priority')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.margin({ bottom: 8 })
Text('Task Perday')
.fontSize(14)
.fontColor(Color.Gray)
.margin({ bottom: 16 })
Row() {
ForEach(this.priorityData, (item: PriorityData) => {
Column() {
Text(item.secret.toString()).fontSize(12).fontColor(Color.Blue)
Text(item.private.toString()).fontSize(12).fontColor(Color.Purple)
Text(item.personal.toString()).fontSize(12).fontColor(Color.Red)
Text(item.day).fontSize(12).fontColor(Color.Gray)
}.width('14%').alignItems(HorizontalAlign.Center)
})
}
}.width('100%').padding(16).backgroundColor(Color.White).borderRadius(16)
}
@Builder
ActivityChart() {
Column() {
Row() {
Text('Your Activity').fontSize(20).fontWeight(FontWeight.Bold)
Blank()
Text('April 2021').fontSize(16).fontColor(Color.Gray)
}.width('100%').margin({ bottom: 16 })
  Row() {
    ForEach(this.activityData, (item: ActivityData) => {
      Column() {
        Column() {
          Rect().width(20).height(item.work * 10).fill(Color.Blue)
          Rect().width(20).height(item.personal * 10).fill(Color.Red)
        }
      }.height(100).alignItems(HorizontalAlign.Center).justifyContent(FlexAlign.End)
    })
  }
}.width('100%').padding(16).backgroundColor(Color.White).borderRadius(16)
}
build() {
Column() {
Text('Graphic')
.fontSize(24)
.fontWeight(FontWeight.Bold)
.width('100%')
.margin({ top: 16, bottom: 24 })
  this.PriorityChart()

  this.ActivityChart()

  Blank()

  Row() {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.onClick(() => router.pushUrl({ url: 'pages/Home' }))

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }.onClick(() => router.pushUrl({ url: 'pages/AddTask' }))

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }

    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceEvenly)
  .backgroundColor(Color.White)
  .padding({ top: 8, bottom: 8 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
.padding(16)
}
}