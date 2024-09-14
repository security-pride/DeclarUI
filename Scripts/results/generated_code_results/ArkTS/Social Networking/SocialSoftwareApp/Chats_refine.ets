import router from '@ohos.router';
import { CommonConstants } from '../common/constants/CommonConstants';
interface Story {
name: string;
add?: boolean;
active?: boolean;
}
interface ChatItem {
name: string;
lastMessage: string;
time: string;
read?: boolean;
}
@Entry
@Component
struct Chats {
@State searchText: string = '';
@State stories: Story[] = [
{ name: 'Your story', add: true },
{ name: 'Joshua', active: true },
{ name: 'Martin', active: true },
{ name: 'Karen', active: true },
{ name: 'Martha', active: true }
];
@State chatList: ChatItem[] = [
{ name: 'Martin Randolph', lastMessage: "You: What's man!", time: '9:40 AM' },
{ name: 'Andrew Parker', lastMessage: 'You: Ok, thanks!', time: '9:25 AM', read: true },
{ name: 'Karen Castillo', lastMessage: 'You: Ok, See you in To...', time: 'Fri', read: true },
{ name: 'Maisy Humphrey', lastMessage: 'Have a good day, Maisy!', time: 'Fri', read: true },
{ name: 'Joshua Lawrence', lastMessage: 'The business plan loo...', time: 'Thu', read: true }
];
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(30)
.height(30)
.margin({ left: 16 })
Text('Chats')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.layoutWeight(1)
.margin({ left: 16 })
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ right: 16 })
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ right: 16 })
}
.width('100%')
.height(60)
  Search({ value: this.searchText, placeholder: 'Search' })
    .width('90%')
    .height(40)
    .backgroundColor('#F5F5F5')
    .margin({ top: 10, bottom: 10 })

  List({ space: 10 }) {
    ListItem() {
      Row() {
        ForEach(this.stories, (story: Story) => {
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
                Badge({ count: 1, position: BadgePosition.RightTop, style: { color: Color.Red } })
                  .width(10)
                  .height(10)
              }
            }
            Text(story.name)
              .fontSize(12)
              .margin({ top: 5 })
          }
          .margin({ right: 10 })
        })
      }
      .listDirection(Axis.Horizontal)
      .padding(10)
    }

    ForEach(this.chatList, (chat: ChatItem) => {
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
          .layoutWeight(1)
          .margin({ left: 10 })
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
        .padding(10)
      }
      .onClick(() => {
        router.pushUrl({ url: 'pages/Intro' })
      })
    })

    ListItem() {
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
        .layoutWeight(1)
        .margin({ left: 10 })
        Text('Ad')
          .fontSize(12)
          .opacity(0.6)
          .margin({ right: 10 })
        Text('View More')
          .fontSize(14)
          .fontColor(Color.Blue)
      }
      .width('100%')
      .padding(10)
    }
  }
  .layoutWeight(1)

  Row() {
    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Chats')
        .fontSize(12)
    }
    .layoutWeight(1)
    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('People')
        .fontSize(12)
    }
    .layoutWeight(1)
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
    .layoutWeight(1)
  }
  .width('100%')
  .height(60)
  .backgroundColor(Color.White)
}
}
}