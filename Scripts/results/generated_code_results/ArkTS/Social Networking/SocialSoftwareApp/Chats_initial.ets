import router from '@ohos.router';
import { CommonConstants as Constants } from '../common/constants/CommonConstants';
@Entry
@Component
struct ChatsPage {
@State searchText: string = '';
@State stories: Array<{ name: string, active: boolean, add?: boolean }> = [
{ name: 'Your story', add: true },
{ name: 'Joshua', active: true },
{ name: 'Martin', active: true },
{ name: 'Karen', active: true },
{ name: 'Martha', active: true }
];
@State chatList: Array<{ name: string, lastMessage: string, time: string, read?: boolean }> = [
{ name: 'Martin Randolph', lastMessage: "You: What's man!", time: '9:40 AM' },
{ name: 'Andrew Parker', lastMessage: 'You: Ok, thanks!', time: '9:25 AM', read: true },
{ name: 'Karen Castillo', lastMessage: 'You: Ok, See you in To...', time: 'Fri', read: true },
{ name: 'Maisy Humphrey', lastMessage: 'Have a good day, Maisy!', time: 'Fri', read: true },
{ name: 'Joshua Lawrence', lastMessage: 'The business plan loo...', time: 'Thu', read: true }
];
build() {
Column() {
// Header
Row() {
Image($r('app.media.template'))
.width(40)
.height(40)
.borderRadius(20)
.margin({ left: 16 })
Text('Chats')
.fontSize(24)
.fontWeight(FontWeight.Bold)
.margin({ left: 16 })
Blank()
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ right: 16 })
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ right: 16 })
.onClick(() => {
router.pushUrl({ url: 'pages/NewMessage' })
})
}
.width('100%')
.height(60)
.backgroundColor('#F5F5F5')
  // Search Bar
  TextInput({ placeholder: 'Search' })
    .width('90%')
    .height(40)
    .backgroundColor('#EEEEEE')
    .margin({ top: 10, bottom: 10 })
    .onChange((value: string) => {
      this.searchText = value
    })

  // Stories
  List({ space: 10, initialIndex: 0 }) {
    ForEach(this.stories, (story, index) => {
      ListItem() {
        Column() {
          Stack() {
            Image($r('app.media.template'))
              .width(60)
              .height(60)
              .borderRadius(30)
            if (story.add) {
              Image($r('app.media.template'))
                .width(20)
                .height(20)
                .position({ x: 40, y: 40 })
            }
            if (story.active) {
              Badge({ count: 0, position: BadgePosition.RightTop, style: { color: '#00FF00' } })
                .width(12)
                .height(12)
                .position({ x: 48, y: 0 })
            }
          }
          Text(story.name)
            .fontSize(12)
            .margin({ top: 5 })
        }
      }
    })
  }
  .listDirection(Axis.Horizontal)
  .height(100)

  // Chat List
  List() {
    ForEach(this.chatList, (chat, index) => {
      ListItem() {
        Row() {
          Image($r('app.media.template'))
            .width(50)
            .height(50)
            .borderRadius(25)
          Column() {
            Text(chat.name)
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
            Text(chat.lastMessage)
              .fontSize(14)
              .opacity(0.6)
          }
          .alignItems(HorizontalAlign.Start)
          .margin({ left: 10 })
          Blank()
          Column() {
            Text(chat.time)
              .fontSize(12)
              .opacity(0.6)
            if (chat.read) {
              Image($r('app.media.template'))
                .width(16)
                .height(16)
                .margin({ top: 5 })
            }
          }
          .alignItems(HorizontalAlign.End)
        }
        .width('100%')
        .height(70)
        .padding({ left: 10, right: 10 })
        .onClick(() => {
          router.pushUrl({ url: 'pages/Intro' })
        })
      }
    })
  }
  .width('100%')
  .layoutWeight(1)

  // Ad
  Row() {
    Image($r('app.media.template'))
      .width(40)
      .height(40)
    Column() {
      Text('Pixsellz')
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
      Text('Make design process easier...')
        .fontSize(14)
        .opacity(0.6)
    }
    .alignItems(HorizontalAlign.Start)
    .margin({ left: 10 })
    Blank()
    Text('View More')
      .fontSize(14)
      .fontColor('#0000FF')
  }
  .width('90%')
  .height(60)
  .backgroundColor('#F0F0F0')
  .borderRadius(10)
  .padding(10)
  .margin({ bottom: 10 })

  // Bottom Navigation
  Row() {
    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Chats')
        .fontSize(12)
    }
    .width('33%')
    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('People')
        .fontSize(12)
    }
    .width('33%')
    .onClick(() => {
      router.pushUrl({ url: 'pages/People' })
    })
    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Discover')
        .fontSize(12)
    }
    .width('33%')
  }
  .width('100%')
  .height(60)
  .backgroundColor('#F5F5F5')
}
}
}