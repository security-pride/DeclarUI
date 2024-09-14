import router from '@ohos.router';
import { State, Component, Builder } from '@ohos.decorator';
interface TaskCategory {
name: string;
count: number;
icon: Resource;
color: ResourceColor;
}
@Component
export struct ProfilePage {
@State userName: string = 'Steve Job';
@State userEmail: string = 'SteveJob@gmail.com';
@State taskCategories: TaskCategory[] = [
{ name: 'Personal', count: 6, icon: $r('app.media.template'), color: '#E6E6FA' },
{ name: 'Work', count: 8, icon: $r('app.media.template'), color: '#E0FFFF' },
{ name: 'Private', count: 3, icon: $r('app.media.template'), color: '#FFE4E1' },
{ name: 'Meeting', count: 4, icon: $r('app.media.template'), color: '#F0FFF0' },
{ name: 'Events', count: 4, icon: $r('app.media.template'), color: '#E6E6FA' }
];
build() {
Column() {
this.Header()
this.TaskCategories()
this.CreateBoardButton()
this.BottomNavBar()
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
@Builder
Header() {
Row() {
Image($r('app.media.template'))
.width(80)
.height(80)
.borderRadius(40)
.objectFit(ImageFit.Cover)
  Column() {
    Text(this.userName)
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
    Text(this.userEmail)
      .fontSize(14)
      .fontColor(Color.Gray)
  }
  .alignItems(HorizontalAlign.Start)
  .margin({ left: 16 })

  Blank()

  Button({ type: ButtonType.Circle, stateEffect: true }) {
    Image($r('app.media.template'))
      .width(24)
      .height(24)
  }
  .width(40)
  .height(40)
  .backgroundColor('#F0F0F0')
}
.width('100%')
.padding(16)
}
@Builder
TaskCategories() {
Grid() {
ForEach(this.taskCategories, (category: TaskCategory) => {
GridItem() {
this.CategoryItem(category)
}
})
}
.columnsTemplate('1fr 1fr')
.rowsGap(16)
.columnsGap(16)
.padding(16)
}
@Builder
CategoryItem(category: TaskCategory) {
Column() {
Image(category.icon)
.width(40)
.height(40)
.objectFit(ImageFit.Contain)
Text(category.name)
.fontSize(16)
.fontWeight(FontWeight.Medium)
.margin({ top: 8 })
Text(${category.count} Task)
.fontSize(14)
.fontColor(Color.Gray)
}
.width('100%')
.aspectRatio(1)
.backgroundColor(category.color)
.borderRadius(16)
.justifyContent(FlexAlign.Center)
}
@Builder
CreateBoardButton() {
Button('Create Board', { type: ButtonType.Normal })
.width('90%')
.height(50)
.fontSize(18)
.fontWeight(FontWeight.Medium)
.backgroundColor('#6750A4')
.borderRadius(25)
.margin({ top: 16, bottom: 16 })
}
@Builder
BottomNavBar() {
Row() {
ForEach(['home', 'list', 'add', 'chart', 'profile'], (item) => {
Column() {
Image($r('app.media.template'))
.width(24)
.height(24)
.objectFit(ImageFit.Contain)
Text(item)
.fontSize(12)
.margin({ top: 4 })
}
.layoutWeight(1)
.onClick(() => {
if (item === 'add') {
router.pushUrl({ url: 'pages/AddTask' })
} else if (item !== 'profile') {
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