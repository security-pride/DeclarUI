import router from '@ohos.router';
import { CommonConstants } from '../common/CommonConstants';
@Entry
@Component
struct Home {
@State steps: number = 0;
@State distance: number = 0;
@State calories: number = 12;
build() {
Column() {
Row() {
Image($r('app.media.template')).width(40).height(40)
Text('fitbit').fontSize(20).fontWeight(FontWeight.Bold)
Blank()
Image($r('app.media.template')).width(30).height(30)
Image($r('app.media.template')).width(30).height(30)
}.width('100%').padding(16)
  Row() {
    Text('今天').fontSize(20).fontWeight(FontWeight.Bold)
    Blank()
    Button('编辑', { type: ButtonType.Normal })
      .fontSize(16)
      .fontColor(Color.Blue)
      .backgroundColor(Color.Transparent)
  }.width('100%').padding({ left: 16, right: 16 })

  Row() {
    this.StatCircle('步数', this.steps, $r('app.media.template'))
    this.StatCircle('公里', this.distance, $r('app.media.template'))
    this.StatCircle('卡', this.calories, $r('app.media.template'))
  }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ top: 20, bottom: 20 })

  List() {
    ListItem() {
      this.ChallengeItem('追踪您的正念', '本周剩 5 天', $r('app.media.template'))
    }
    ListItem() {
      this.ChallengeItem('追踪锻炼情况', '本周剩 5 天', $r('app.media.template'))
    }
    ListItem() {
      this.ChallengeItem('经期健康', '记录与趋势', $r('app.media.template'))
    }
  }.width('100%')

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
  .position({ y: '100%' })
  .translate({ y: -60 })
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
@Builder
StatCircle(label: string, value: number, icon: Resource) {
Column() {
Stack() {
Progress({ value: value, total: 100, type: ProgressType.Ring })
.width(100)
.height(100)
.color(Color.Blue)
Column() {
Image(icon).width(24).height(24)
Text(value.toString()).fontSize(20).fontWeight(FontWeight.Bold)
Text(label).fontSize(14)
}
}
}
}
@Builder
ChallengeItem(title: string, description: string, icon: Resource) {
Row() {
Image(icon).width(40).height(40)
Column() {
Text(title).fontSize(16).fontWeight(FontWeight.Bold)
Text(description).fontSize(14).fontColor(Color.Gray)
}.layoutWeight(1).alignItems(HorizontalAlign.Start).margin({ left: 16 })
Image($r('app.media.template')).width(24).height(24)
}.width('100%').padding(16).backgroundColor(Color.White)
}
@Builder
TabItem(label: string, icon: Resource, page: string) {
Column() {
Image(icon).width(24).height(24)
Text(label).fontSize(12).margin({ top: 4 })
}.onClick(() => {
if (page === 'Discovery' || page === 'Friends') {
router.pushUrl({ url: pages/${page} })
}
})
}
}