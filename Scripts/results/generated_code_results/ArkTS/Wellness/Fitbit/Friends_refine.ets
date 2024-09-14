import router from '@ohos.router';
import { CommonConstants } from '../common/CommonConstants';
@Entry
@Component
struct Friends {
@State hasFriends: boolean = false;
build() {
Column() {
Row() {
Text('好友')
.fontSize(20)
.fontWeight(FontWeight.Bold)
Blank()
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template'))
.width(24)
.height(24)
.objectFit(ImageFit.Contain)
}
.width(40)
.height(40)
.onClick(() => {
router.pushUrl({ url: 'pages/FindFriend' })
})
}
.width('100%')
.padding(16)
  if (!this.hasFriends) {
    Column() {
      Image($r('app.media.template'))
        .width('60%')
        .aspectRatio(1)
        .objectFit(ImageFit.Contain)

      Text('和朋友一起继续向前！')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 20, bottom: 10 })
        .textAlign(TextAlign.Center)

      Text('记录进度、发送鼓励，并通过友好竞赛让自己更有活力。')
        .fontSize(16)
        .textAlign(TextAlign.Center)
        .margin({ bottom: 20 })
        .padding({ left: 20, right: 20 })

      Button({ type: ButtonType.Capsule }) {
        Row() {
          Image($r('app.media.template'))
            .width(24)
            .height(24)
            .margin({ right: 8 })
          Text('添加好友').fontColor(Color.White)
        }
      }
      .width('80%')
      .height(50)
      .backgroundColor('#FF69B4')
      .onClick(() => {
        router.pushUrl({ url: 'pages/FindFriend' })
      })
    }
    .layoutWeight(1)
    .justifyContent(FlexAlign.Center)
  } else {
    Text('Friends list placeholder')
      .layoutWeight(1)
  }

  Row() {
    this.TabItem('发现', $r('app.media.template'), 'Discovery')
    this.TabItem('今天', $r('app.media.template'), 'Home')
    this.TabItem('好友', $r('app.media.template'), 'Friends')
    this.TabItem('Premium', $r('app.media.template'), 'Premium')
  }
  .width('100%')
  .height(60)
  .backgroundColor(Color.White)
  .justifyContent(FlexAlign.SpaceAround)
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
@Builder
TabItem(label: string, icon: Resource, page: string) {
Column() {
Image(icon)
.width(24)
.height(24)
.objectFit(ImageFit.Contain)
Text(label)
.fontSize(12)
.margin({ top: 4 })
}
.onClick(() => {
if (page === 'Home') {
router.pushUrl({ url: 'pages/Home' })
}
})
}
}