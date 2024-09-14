import router from '@ohos.router';
import { State, Component, Builder } from '@ohos.decorator';
interface Task {
title: string;
count: number;
icon: Resource;
color: ResourceColor;
}
interface TodayTask {
title: string;
time: string;
tags: string[];
}
@Component
export struct HomePage {
@State tasks: Task[] = [
{ title: 'Complete', count: 8, icon: $r('app.media.template'), color: '#87CEEB' },
{ title: 'Pending', count: 1, icon: $r('app.media.template'), color: '#9370DB' },
{ title: 'Canceled', count: 1, icon: $r('app.media.template'), color: '#FA8072' },
{ title: 'On Going', count: 67, icon: $r('app.media.template'), color: '#90EE90' }
];
@State todayTasks: TodayTask[] = [
{ title: 'Cleaning Clothes', time: '07:00 - 07:15', tags: ['Urgent', 'Home'] }
];
build() {
Column() {
this.Header()
this.TaskOverview()
this.TodayTasks()
this.BottomNavBar()
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
@Builder
Header() {
Row() {
Column() {
Text('Hi, Steven')
.fontSize(24)
.fontWeight(FontWeight.Bold)
Text("Let's make this day productive")
.fontSize(14)
.fontColor(Color.Gray)
}
.alignItems(HorizontalAlign.Start)
  Image($r('app.media.template'))
    .width(40)
    .height(40)
    .borderRadius(20)
}
.width('100%')
.justifyContent(FlexAlign.SpaceBetween)
.padding({ left: 16, right: 16, top: 16, bottom: 8 })
}
@Builder
TaskOverview() {
Column() {
Text('My Task')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.alignSelf(ItemAlign.Start)
  Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap }) {
    ForEach(this.tasks, (task: Task) => {
      this.TaskCard(task)
    })
  }
  .padding({ left: 16, right: 16 })
}
}
@Builder
TaskCard(task: Task) {
Column() {
Row() {
Image(task.icon)
.width(24)
.height(24)
Text(task.count.toString())
.fontSize(24)
.fontWeight(FontWeight.Bold)
.margin({ left: 8 })
}
.justifyContent(FlexAlign.SpaceBetween)
.width('100%')
  Text(task.title)
    .fontSize(14)
    .fontColor(Color.Gray)
    .margin({ top: 8 })

  Image($r('app.media.template'))
    .width(24)
    .height(24)
    .margin({ top: 16, left: '100%' })
    .translateX('-100%')
}
.width('48%')
.aspectRatio(1)
.backgroundColor(task.color)
.borderRadius(16)
.padding(16)
.margin({ bottom: 16 })
}
@Builder
TodayTasks() {
Column() {
Row() {
Text('Today Task')
.fontSize(20)
.fontWeight(FontWeight.Bold)
Text('View all')
.fontSize(14)
.fontColor(Color.Blue)
}
.width('100%')
.justifyContent(FlexAlign.SpaceBetween)
.margin({ bottom: 8 })
  List() {
    ForEach(this.todayTasks, (task: TodayTask) => {
      ListItem() {
        this.TaskItem(task)
      }
    })
  }
}
.padding({ left: 16, right: 16, top: 16 })
}
@Builder
TaskItem(task: TodayTask) {
Row() {
Column() {
Text(task.title)
.fontSize(16)
.fontWeight(FontWeight.Bold)
Text(task.time)
.fontSize(14)
.fontColor(Color.Gray)
Row() {
ForEach(task.tags, (tag) => {
Text(tag)
.fontSize(12)
.backgroundColor(tag === 'Urgent' ? '#FFE0E0' : '#E0E0FF')
.padding({ left: 8, right: 8, top: 2, bottom: 2 })
.borderRadius(10)
.margin({ right: 8, top: 4 })
})
}
}
.alignItems(HorizontalAlign.Start)
.layoutWeight(1)
  Image($r('app.media.template'))
    .width(24)
    .height(24)
}
.width('100%')
.padding(16)
.backgroundColor(Color.White)
.borderRadius(8)
.margin({ bottom: 8 })
}
@Builder
BottomNavBar() {
Row() {
ForEach(['home', 'list', 'add', 'chart', 'profile'], (item) => {
Column() {
Image($r('app.media.template'))
.width(24)
.height(24)
Text(item)
.fontSize(12)
.margin({ top: 4 })
}
.layoutWeight(1)
.onClick(() => {
if (item === 'add') {
router.pushUrl({ url: 'pages/AddTask' })
} else if (item !== 'home') {
router.pushUrl({ url: pages/${item.charAt(0).toUpperCase() + item.slice(1)} })
}
})
})
}
.width('100%')
.height(60)
.backgroundColor(Color.White)
.position({ x: 0, y: '100%' })
.translate({ y: -60 })
}
}