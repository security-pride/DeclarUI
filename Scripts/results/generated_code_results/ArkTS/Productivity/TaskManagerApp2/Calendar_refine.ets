import router from '@ohos.router';
import { State, Component, Builder } from '@ohos.decorator';
interface Task {
title: string;
time: string;
tags: string[];
}
@Component
export struct CalendarPage {
@State selectedDate: Date = new Date();
@State tasks: Task[] = [
{ title: 'Cleaning Clothes', time: '07:00 - 07:15', tags: ['Urgent', 'Home'] },
{ title: 'Cleaning', time: '07:15 - 07:30', tags: ['Urgent'] },
{ title: 'Cleaning Clothes', time: '08:00 - 08:35', tags: ['Urgent', 'Home'] },
{ title: 'Cleaning', time: '08:00 - 08:15', tags: ['Urgent'] },
{ title: 'Cleaning Clothes', time: '10:00 - 10:30', tags: [] }
];
build() {
Column() {
this.Header()
this.WeekView()
this.TaskList()
this.BottomNavBar()
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
@Builder
Header() {
Column() {
Row() {
Text('Task')
.fontSize(24)
.fontWeight(FontWeight.Bold)
Blank()
Text('August 2021')
.fontSize(16)
Image($r('app.media.template'))
.width(24)
.height(24)
}
.width('100%')
.padding({ left: 16, right: 16, top: 16, bottom: 8 })
  Search({ placeholder: 'Search for task' })
    .searchButton('SEARCH')
    .textAlign(TextAlign.Start)
    .placeholderColor(Color.Grey)
    .placeholderFont({ size: 14, weight: 400 })
    .textFont({ size: 14, weight: 400 })
    .width('90%')
    .height(40)
    .margin({ top: 8, bottom: 16 })
    .backgroundColor('#F5F5F5')
    .borderRadius(20)
}
}
@Builder
WeekView() {
Row() {
ForEach(['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'], (day, index) => {
Column() {
Text(day)
.fontSize(14)
.fontColor(Color.Gray)
Text(${12 + index})
.fontSize(18)
.fontWeight(index === 2 ? FontWeight.Bold : FontWeight.Normal)
.fontColor(index === 2 ? Color.Blue : Color.Black)
}
.width(40)
.height(60)
.backgroundColor(index === 2 ? '#E8F0FE' : Color.Transparent)
.borderRadius(20)
.justifyContent(FlexAlign.Center)
})
}
.width('100%')
.justifyContent(FlexAlign.SpaceAround)
.padding({ left: 16, right: 16 })
}
@Builder
TaskList() {
Column() {
Text('Today')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.margin({ top: 16, bottom: 8 })
Text('09 h 45 min')
.fontSize(14)
.fontColor(Color.Gray)
.margin({ bottom: 16 })
  List() {
    ForEach(this.tasks, (task: Task) => {
      ListItem() {
        this.TaskItem(task)
      }
    })
    ListItem() {
      Row() {
        Text("You don't have any schedule")
          .fontSize(14)
          .fontColor(Color.Gray)
        Blank()
        Button('+ Add')
          .fontSize(14)
          .backgroundColor(Color.Transparent)
          .fontColor(Color.Blue)
          .onClick(() => {
            router.pushUrl({ url: 'pages/AddTask' })
          })
      }
      .width('100%')
      .padding(16)
    }
  }
  .divider({ strokeWidth: 1, color: '#E0E0E0' })
}
.width('100%')
.padding({ left: 16, right: 16 })
}
@Builder
TaskItem(task: Task) {
Row() {
Text(task.time.split(' - ')[0])
.fontSize(16)
.fontWeight(FontWeight.Bold)
.width(50)
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
.margin({ right: 8 })
})
}
}
.alignItems(HorizontalAlign.Start)
.layoutWeight(1)
Blank()
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
} else {
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