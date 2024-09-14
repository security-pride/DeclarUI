import router from '@ohos.router';
import { State, Component, Builder } from '@ohos.decorator';
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
@Component
export struct StatisticsPage {
@State priorityData: PriorityData[] = [
{ day: 'Mo', personal: 4, private: 2, secret: 0 },
{ day: 'Tu', personal: 8, private: 6, secret: 0 },
{ day: 'We', personal: 0, private: 6, secret: 10 },
{ day: 'Th', personal: 4, private: 2, secret: 8 },
{ day: 'Fr', personal: 6, private: 0, secret: 4 },
{ day: 'Sa', personal: 8, private: 0, secret: 0 },
{ day: 'Su', personal: 0, private: 6, secret: 8 }
];
@State activityData: ActivityData[] = [
{ personal: 2, work: 1 }, { personal: 3, work: 2 }, { personal: 1, work: 3 },
{ personal: 4, work: 2 }, { personal: 2, work: 4 }, { personal: 3, work: 1 },
{ personal: 2, work: 1 }
];
@State currentMonth: string = 'April 2021';
build() {
Column() {
this.Header()
this.PriorityChart()
this.ActivityChart()
this.BottomNavBar()
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
@Builder
Header() {
Text('Graphic')
.fontSize(24)
.fontWeight(FontWeight.Bold)
.width('100%')
.padding({ left: 16, top: 16, bottom: 16 })
}
@Builder
PriorityChart() {
Column() {
Text('Priority')
.fontSize(20)
.fontWeight(FontWeight.Medium)
Text('Task Perday')
.fontSize(14)
.fontColor(Color.Gray)
Row() {
ForEach(['Personal', 'Private', 'Secret'], (type) => {
Row() {
Circle({ width: 8, height: 8 })
.fill(this.getColorForType(type))
Text(type)
.fontSize(12)
.margin({ left: 4 })
}.margin({ right: 16 })
})
}.margin({ top: 8, bottom: 16 })
Row() {
ForEach(this.priorityData, (item) => {
Column() {
ForEach([10, 8, 6, 4, 2], (value) => {
Circle({ width: 8, height: 8 })
.fill(this.getColorForValue(item, value))
.margin({ bottom: 8 })
})
Text(item.day)
.fontSize(12)
}.width('14%')
})
}
}
.width('100%')
.padding(16)
.backgroundColor(Color.White)
.borderRadius(16)
.margin({ bottom: 16 })
}
@Builder
ActivityChart() {
Column() {
Text('Your Activity')
.fontSize(20)
.fontWeight(FontWeight.Medium)
Row() {
Text(this.currentMonth)
.fontSize(16)
Blank()
Row() {
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}.width(32).height(32).backgroundColor('#F0F0F0')
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}.width(32).height(32).backgroundColor('#F0F0F0').margin({ left: 8 })
}
}.width('100%').margin({ top: 8, bottom: 16 })
Row() {
ForEach(this.activityData, (item, index) => {
Column() {
Column() {
Rect()
.width(20)
.height(item.work * 10)
.fill('#E0FFFF')
Rect()
.width(20)
.height(item.personal * 10)
.fill('#FFB6C1')
}
Text((index + 1).toString())
.fontSize(12)
.margin({ top: 4 })
}.height(150).alignItems(HorizontalAlign.Center)
})
}
}
.width('100%')
.padding(16)
.backgroundColor(Color.White)
.borderRadius(16)
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
} else if (item !== 'chart') {
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
private getColorForType(type: string): string {
switch (type) {
case 'Personal':
return '#FFB6C1';
case 'Private':
return '#E0FFFF';
case 'Secret':
return '#D8BFD8';
default:
return '#FFFFFF';
}
}
private getColorForValue(item: PriorityData, value: number): string {
if (item.personal >= value) return '#FFB6C1';
if (item.private >= value) return '#E0FFFF';
if (item.secret >= value) return '#D8BFD8';
return 'transparent';
}
}