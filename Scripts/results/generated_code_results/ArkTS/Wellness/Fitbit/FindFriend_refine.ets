import router from '@ohos.router';
import { CommonConstants } from '../common/CommonConstants';
@Entry
@Component
struct FindFriend {
@State selectedMethod: string = '通讯录';
build() {
Column() {
Row() {
Text('寻找朋友')
.fontSize(20)
.fontWeight(FontWeight.Bold)
Blank()
Button('完成', { type: ButtonType.Normal })
.fontSize(16)
.fontColor(Color.Blue)
.backgroundColor(Color.Transparent)
.onClick(() => {
router.pushUrl({ url: 'pages/Friends' })
})
}
.width('100%')
.padding(16)
  Row() {
    this.SearchMethodButton('通讯录', $r('app.media.template'))
    this.SearchMethodButton('电子邮箱', $r('app.media.template'))
    this.SearchMethodButton('Username', $r('app.media.template'))
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceEvenly)
  .padding({ top: 20, bottom: 20 })

  Text('利用您的电话号码查找好友！')
    .fontSize(18)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, bottom: 10 })
    .textAlign(TextAlign.Center)

  Text('输入您的电话号码，从您的联系人列表中添加好友。')
    .fontSize(16)
    .textAlign(TextAlign.Center)
    .margin({ bottom: 20 })
    .maxLines(2)
    .textOverflow({ overflow: TextOverflow.Ellipsis })

  Button('连接通讯录', { type: ButtonType.Capsule })
    .width('90%')
    .height(50)
    .fontSize(18)
    .fontColor(Color.White)
    .backgroundColor('#FF69B4')
    .margin({ top: 20 })
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
@Builder
SearchMethodButton(label: string, icon: Resource) {
Button({ type: ButtonType.Circle, stateEffect: true }) {
Column() {
Image(icon)
.width(40)
.height(40)
.objectFit(ImageFit.Contain)
Text(label)
.fontSize(14)
.margin({ top: 5 })
}
}
.width(80)
.height(80)
.backgroundColor(this.selectedMethod === label ? Color.Blue : Color.White)
.onClick(() => {
this.selectedMethod = label;
})
}
}