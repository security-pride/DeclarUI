@Entry
@Component
struct NotificationsPage {
@State currentTime: string = this.getCurrentTime()
@State notifications: Array<{
type: string,
title: string,
description: string,
time: string,
action?: string,
avatar?: Resource
}> = [
{
type: 'Purchase',
title: 'Purchase Completed!',
description: 'You already bought a class from Jerremy Mamika. Enjoy the class! 👋',
time: '2 m ago'
},
{
type: 'Message',
title: 'Jerremy Send You a Message',
description: "Hi Magdalena, I've seen your challenge...",
time: '2 m ago',
action: 'Reply the message',
avatar: $r('app.media.template')
},
{
type: 'Promotion',
title: 'Ramadhan Flash Sale!',
description: 'Get 20% discount for first transaction in this month!😍😍',
time: '2 m ago'
},
{
type: 'Achievement',
title: 'Challange Completed',
description: 'Congratulation! you have completed course by Jerremy Mamika',
time: '10 m ago'
}
]
aboutToAppear() {
this.updateTime()
}
updateTime() {
this.currentTime = this.getCurrentTime()
setTimeout(() => {
this.updateTime()
}, 60000)
}
getCurrentTime(): string {
const now = new Date()
return now.getHours().toString().padStart(2, '0') + ':' +
now.getMinutes().toString().padStart(2, '0')
}
build() {
Column() {
Row() {
Text(this.currentTime)
.fontSize(16)
.fontWeight(FontWeight.Medium)
Blank()
Image($r('app.media.template'))
.width(20)
.height(20)
Image($r('app.media.template'))
.width(20)
.height(20)
.margin({ left: 5 })
}
.width('100%')
.padding({ left: 20, right: 20, top: 16, bottom: 10 })
  Row() {
    Image($r('app.media.template'))
      .width(24)
      .height(24)
      .onClick(() => {
        router.back()
      })
    Text('Notification')
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
      .margin({ left: 20 })
    Blank()
    Image($r('app.media.template'))
      .width(24)
      .height(24)
  }
  .width('100%')
  .padding({ left: 20, right: 20, top: 10, bottom: 20 })

  Text('Recent')
    .fontSize(18)
    .fontWeight(FontWeight.Medium)
    .margin({ left: 20, bottom: 10 })

  List() {
    ForEach(this.notifications, (notification, index) => {
      ListItem() {
        this.NotificationItem(notification)
      }
    })
  }
  .layoutWeight(1)
}
.width('100%')
.height('100%')
.backgroundColor('#F8F9FA')
}
@Builder
NotificationItem(notification: {
type: string,
title: string,
description: string,
time: string,
action?: string,
avatar?: Resource
}) {
Row() {
if (notification.type === 'Purchase') {
Image($r('app.media.template'))
.width(40)
.height(40)
} else if (notification.type === 'Message' && notification.avatar) {
Image(notification.avatar)
.width(40)
.height(40)
.borderRadius(20)
} else if (notification.type === 'Promotion') {
Image($r('app.media.template'))
.width(40)
.height(40)
} else if (notification.type === 'Achievement') {
Image($r('app.media.template'))
.width(40)
.height(40)
}
  Column() {
    Text(notification.title)
      .fontSize(16)
      .fontWeight(FontWeight.Medium)
    Text(notification.description)
      .fontSize(14)
      .fontColor(Color.Gray)
      .margin({ top: 4 })
    if (notification.action) {
      Text(notification.action)
        .fontSize(14)
        .fontColor('#7F5AF0')
        .margin({ top: 4 })
    }
  }
  .layoutWeight(1)
  .alignItems(HorizontalAlign.Start)
  .margin({ left: 12 })

  Text(notification.time)
    .fontSize(12)
    .fontColor(Color.Gray)
}
.width('100%')
.padding(16)
.backgroundColor(Color.White)
.borderRadius(8)
.margin({ bottom: 10 })
}
}