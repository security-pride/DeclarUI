import router from '@ohos.router';

interface Tweet {
  username: string;
  content: string;
  timestamp: string;
}

@Entry
@Component
struct HomePage {
  @State tweets: Tweet[] = [
    { username: 'Martha Craig', content: 'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou', timestamp: '12h' },
    { username: 'Maximmilian', content: 'Y' all ready for this next post?', timestamp: '3h' },
    { username: 'Tabitha Potter', content: 'Kobe's passing is really sticking w/ me in a way I didn't expect. He was an icon, the kind of person who wouldn't die this way. My wife compared it to Princess Di's accident. But the end can happen for anyone at any time, & I can't help but think of anything else lately.', timestamp: '14h' },
    { username: 'karennne', content: 'Name a show where the lead character is the worst character on the show I'll go Sabrina Spellman', timestamp: '10h' }
  ];

  build() {
    Column() {
      Row() {
        Image($r('app.media.template'))
          .width(40)
          .height(40)
          .margin({ left: 40, top: 100 })
          .onClick(() => {
            router.pushUrl({ url: 'pages/MenuPage' })
          })
        Image($r('app.media.template'))
          .width(46)
          .height(47)
          .margin({ left: 696, top: 108 })
      }

      List() {
        ForEach(this.tweets, (tweet: Tweet) => {
          ListItem() {
            Column() {
              Row() {
                Image($r('app.media.template'))
                  .width(40)
                  .height(40)
                  .margin({ left: 40, top: 236 })
                Text(tweet.username)
                  .fontSize(16)
                  .margin({ left: 10, top: 236 })
                Text(tweet.timestamp)
                  .fontSize(14)
                  .fontColor(Color.Gray)
                  .margin({ left: 10, top: 236 })
              }
              Text(tweet.content)
                .width(567)
                .margin({ left: 162, top: 10 })
              Row() {
                Image($r('app.media.template'))
                  .width(32)
                  .height(32)
                  .margin({ left: 162, top: 10 })
                Image($r('app.media.template'))
                  .width(32)
                  .height(32)
                  .margin({ left: 100, top: 10 })
                Image($r('app.media.template'))
                  .width(32)
                  .height(32)
                  .margin({ left: 100, top: 10 })
                Image($r('app.media.template'))
                  .width(32)
                  .height(32)
                  .margin({ left: 100, top: 10 })
              }
            }
          }
        })
      }
      .width('100%')
      .height('100%')

      Row() {
        Image($r('app.media.template'))
          .width(46)
          .height(44)
          .margin({ left: 80, bottom: 44 })
        Image($r('app.media.template'))
          .width(46)
          .height(44)
          .margin({ left: 200, bottom: 44 })
          .onClick(() => {
            router.pushUrl({ url: 'pages/TrendsPage' })
          })
        Image($r('app.media.template'))
          .width(46)
          .height(44)
          .margin({ left: 200, bottom: 44 })
        Image($r('app.media.template'))
          .width(46)
          .height(44)
          .margin({ left: 200, bottom: 44 })
      }

      Button({ type: ButtonType.Circle, stateEffect: true }) {
        Image($r('app.media.template'))
          .width(39)
          .height(39)
      }
      .width(114)
      .height(114)
      .position({ x: 691, y: 1487 })
      .backgroundColor('#1DA1F2')
      .onClick(() => {
        router.pushUrl({ url: 'pages/ProfilePage' })
      })
    }
  }
}