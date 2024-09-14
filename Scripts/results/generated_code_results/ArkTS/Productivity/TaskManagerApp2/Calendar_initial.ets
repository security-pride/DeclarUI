import router from '@ohos.router';
import { CommonConstants } from '../common/constants/CommonConstants';
interface Task {
title: string;
time: string;
tags: string[];
}
interface DailyTasks {
time: string;
tasks: Task[];
}
@Entry
@Component
struct CalendarPage {
@State selectedDate: Date = new Date('2021-08-14');
@State dailyTasks: DailyTasks[] = [
{
time: '07:00',
tasks: [
{ title: 'Cleaning Clothes', time: '07:00 - 07:15', tags: ['Urgent', 'Home'] },
{ title: 'Cleaning', time: '07:15 - 07:30', tags: ['Urgent'] }
]
},
{
time: '08:00',
tasks: [
{ title: 'Cleaning Clothes', time: '08:00 - 08:35', tags: ['Urgent', 'Home'] },
{ title: 'Cleaning', time: '08:00 - 08:15', tags: ['Urgent'] }
]
}
];
@Builder
TaskItem(task: Task) {
Row() {
Text(task.time).fontSize(12).fontColor(Color.Gray)
Column() {
Text(task.title).fontSize(16).fontWeight(FontWeight.Medium)
Row() {
ForEach(task.tags, (tag: string) => {
Text(tag)
.fontSize(10)
.fontColor(Color.White)
.backgroundColor(tag === 'Urgent' ? Color.Red : Color.Blue)
.padding(4)
.borderRadius(4)
.margin({ right: 4 })
})
}
}.margin({ left: 8 })
}.width('100%').padding(8).backgroundColor(Color.White).borderRadius(8).margin({ bottom: 8 })
}
build() {
Column() {
Row() {
Text('Task').fontSize(24).fontWeight(FontWeight.Bold)
Image($r('app.media.template')).width(24).height(24)
}.width('100%').justifyContent(FlexAlign.SpaceBetween).padding({ top: 16, bottom: 16 })
  Search({ placeholder: 'Search for task' })
    .width('100%')
    .height(40)
    .backgroundColor('#F1F3F5')
    .margin({ bottom: 16 })

  Row() {
    ForEach(['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'], (day: string, index: number) => {
      Column() {
        Text(day).fontSize(12).fontColor(Color.Gray)
        Text(`${12 + index}`).fontSize(16).fontWeight(FontWeight.Bold)
          .backgroundColor(index === 2 ? '#4B6FFF' : Color.Transparent)
          .width(36)
          .height(36)
          .borderRadius(18)
          .textAlign(TextAlign.Center)
          .fontColor(index === 2 ? Color.White : Color.Black)
      }.alignItems(HorizontalAlign.Center)
    })
  }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ bottom: 16 })

  Text('Today').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ bottom: 8 })

  List() {
    ForEach(this.dailyTasks, (dailyTask: DailyTasks) => {
      ListItem() {
        Column() {
          Text(dailyTask.time).fontSize(16).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start)
          ForEach(dailyTask.tasks, (task: Task) => {
            this.TaskItem(task)
          })
        }.width('100%').margin({ bottom: 16 })
      }
    })
  }.width('100%')

  Row() {
    Image($r('app.media.template')).width(24).height(24).onClick(() => {
      router.pushUrl({ url: 'pages/Home' });
    })
    Image($r('app.media.template')).width(24).height(24)
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }
    .width(48)
    .height(48)
    .backgroundColor('#4B6FFF')
    .onClick(() => {
      router.pushUrl({ url: 'pages/AddTask' });
    })
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24)
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceEvenly)
  .position({ y: '100%' })
  .translate({ y: -60 })
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
.padding(16)
}
}