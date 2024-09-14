import router from '@ohos.router';
//import { CommonConstants } from '../common/constants/CommonConstants';
interface TaskCategory {
name: string;
count: number;
icon: Resource;
color: Color;
}
@Entry
@Component
struct ProfilePage {
@State taskCategories: TaskCategory[] = [
{ name: 'Personal', count: 6, icon: $r('app.media.template'), color: Color.Blue },
{ name: 'Work', count: 8, icon: $r('app.media.template'), color: Color.Cyan },
{ name: 'Private', count: 3, icon: $r('app.media.template'), color: Color.Pink },
{ name: 'Meeting', count: 4, icon: $r('app.media.template'), color: Color.Green },
{ name: 'Events', count: 4, icon: $r('app.media.template'), color: Color.Purple }
];
@Builder
TaskCategoryButton(category: TaskCategory) {
Button({ type: ButtonType.Normal, stateEffect: true }) {
Column() {
Image(category.icon)
.width(24)
.height(24)
.margin({ bottom: 8 })
Text(category.name)
.fontSize(16)
.fontWeight(FontWeight.Medium)
Text(category.count + ' Task')
.fontSize(12)
.fontColor(Color.Gray)
}
}
.width('48%')
.height(120)
.backgroundColor(category.color.opacity(0.1))
.borderRadius(16)
}
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(80)
.height(80)
.borderRadius(40)
Column() {
Text('Steve Job')
.fontSize(24)
.fontWeight(FontWeight.Bold)
Text('SteveJob@gmail.com')
.fontSize(14)
.fontColor(Color.Gray)
}.margin({ left: 16 })
Blank()
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}
.width(40)
.height(40)
.backgroundColor(Color.Transparent)
}.width('100%').padding({ top: 16, bottom: 24 })
  Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap }) {
    ForEach(this.taskCategories, (category: TaskCategory) => {
      this.TaskCategoryButton(category)
    })
  }

  Button({ type: ButtonType.Normal, stateEffect: true }) {
    Row() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Create Board').fontSize(16).fontWeight(FontWeight.Medium).margin({ left: 8 })
    }
  }
  .width('100%')
  .height(56)
  .backgroundColor(Color.Blue)
  .borderRadius(28)
  .margin({ top: 24 })

  Blank()

  Row() {
    Image($r('app.media.template')).width(24).height(24).onClick(() => {
      router.pushUrl({ url: 'pages/Home' });
    })
    Image($r('app.media.template')).width(24).height(24)
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
    }
    .width(56)
    .height(56)
    .backgroundColor(Color.Blue)
    .onClick(() => {
      router.pushUrl({ url: 'pages/AddTask' });
    })
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24)
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