import router from '@ohos.router';
import { CommonConstants } from '../common/constants/CommonConstants';
interface TaskOverview {
title: string;
count: number;
icon: Resource;
color: Color;
}
interface TodayTask {
title: string;
time: string;
tags: string[];
}
@Entry
@Component
struct HomePage {
@State taskOverviews: TaskOverview[] = [
{ title: 'Complete', count: 8, icon: $r('app.media.template'), color: Color.Blue },
{ title: 'Pending', count: 1, icon: $r('app.media.template'), color: Color.Purple },
{ title: 'Canceled', count: 1, icon: $r('app.media.template'), color: Color.Pink },
{ title: 'On Going', count: 67, icon: $r('app.media.template'), color: Color.Green }
];
@State todayTasks: TodayTask[] = [
{ title: 'Cleaning Clothes', time: '07:00 - 07:15', tags: ['Urgent', 'Home'] }
];
@Builder
TaskOverviewCard(task: TaskOverview) {
Column() {
Row() {
Image(task.icon).width(24).height(24)
Text(task.title).fontSize(16).fontWeight(FontWeight.Medium)
}.justifyContent(FlexAlign.SpaceBetween).width('100%')
Text(task.count.toString()).fontSize(24).fontWeight(FontWeight.Bold)
Text('Task').fontSize(12).fontColor(Color.Gray)
}
.width('48%')
.height(120)
.backgroundColor(task.color.opacity(0.1))
.borderRadius(16)
.padding(16)
}
build() {
Column() {
Row() {
Column() {
Text('Hi, Steven').fontSize(24).fontWeight(FontWeight.Bold)
Text("Let's make this day productive").fontSize(14).fontColor(Color.Gray)
}
Image($r('app.media.template'))
.width(40)
.height(40)
.borderRadius(20)
}.justifyContent(FlexAlign.SpaceBetween).width('100%').margin({ top: 16, bottom: 24 })
  Text('My Task').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start)

  Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap }) {
    ForEach(this.taskOverviews, (task: TaskOverview) => {
      this.TaskOverviewCard(task)
    })
  }.margin({ top: 16, bottom: 24 })

  Row() {
    Text('Today Task').fontSize(20).fontWeight(FontWeight.Bold)
    Text('View all').fontSize(14).fontColor(Color.Blue)
  }.justifyContent(FlexAlign.SpaceBetween).width('100%')

  List() {
    ForEach(this.todayTasks, (task: TodayTask) => {
      ListItem() {
        Row() {
          Column() {
            Text(task.title).fontSize(16).fontWeight(FontWeight.Medium)
            Text(task.time).fontSize(14).fontColor(Color.Gray)
            Row() {
              ForEach(task.tags, (tag: string) => {
                Text(tag)
                  .fontSize(12)
                  .backgroundColor(tag === 'Urgent' ? Color.Red : Color.Blue)
                  .fontColor(Color.White)
                  .padding(4)
                  .borderRadius(4)
                  .margin({ right: 8 })
              })
            }
          }.alignItems(HorizontalAlign.Start)
          Image($r('app.media.template')).width(24).height(24)
        }.justifyContent(FlexAlign.SpaceBetween).width('100%')
      }
      .backgroundColor(Color.White)
      .borderRadius(16)
      .padding(16)
      .margin({ bottom: 12 })
    })
  }.layoutWeight(1)

  Row() {
    Image($r('app.media.template')).width(24).height(24).onClick(() => {
      router.pushUrl({ url: 'pages/Home' });
    })
    Image($r('app.media.template')).width(24).height(24).onClick(() => {
      router.pushUrl({ url: 'pages/Calendar' });
    })
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }
    .width(56)
    .height(56)
    .backgroundColor(Color.Blue)
    .onClick(() => {
      router.pushUrl({ url: 'pages/AddTask' });
    })
    Image($r('app.media.template')).width(24).height(24).onClick(() => {
      router.pushUrl({ url: 'pages/Statistics' });
    })
    Image($r('app.media.template')).width(24).height(24).onClick(() => {
      router.pushUrl({ url: 'pages/Profile' });
    })
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