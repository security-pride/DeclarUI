import router from '@ohos.router';
interface TweetData {
username: string;
handle: string;
content: string;
likes: number;
comments: number;
retweets: number;
verified?: boolean;
}
@Entry
@Component
struct HomePage {
@State private tweetFeed: TweetData[] = [
{ username: 'Maximmilian', handle: '@maxjacobson', content: "Y' all ready for this next post?", likes: 363, comments: 46, retweets: 18 },
{ username: 'Tabitha Potter', handle: '@mis_potter', verified: true, content: "Kobe's passing is really sticking w/ me in a way I didn't expect. He was an icon, the kind of person who wouldn't die this way. My wife compared it to Princess Di's accident. But the end can happen for anyone at any time, & I can't help but think of anything else lately.", likes: 11, comments: 7, retweets: 1 },
{ username: 'karennne', handle: '@karennne', content: "Name a show where the lead character is the worst character on the show I'll go Sabrina Spellman", likes: 7461, comments: 1906, retweets: 1249 }
];
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(40)
.height(40)
.margin({ left: 10 })
.onClick(() => {
router.pushUrl({ url: 'pages/MenuPage' })
})
Image($r('app.media.template'))
.width(30)
.height(30)
.margin({ left: 130 })
Image($r('app.media.template'))
.width(30)
.height(30)
.margin({ left: 130 })
}
.width('100%')
.height(60)
  List() {
    ForEach(this.tweetFeed, (tweet: TweetData) => {
      ListItem() {
        this.TweetItem(tweet)
      }
    }, (tweet: TweetData) => tweet.username)
  }
  .width('100%')
  .layoutWeight(1)

  Row() {
    Image($r('app.media.template'))
      .width(30)
      .height(30)
      .margin({ left: 40 })
    Image($r('app.media.template'))
      .width(30)
      .height(30)
      .margin({ left: 80 })
      .onClick(() => {
        router.pushUrl({ url: 'pages/TrendsPage' })
      })
    Image($r('app.media.template'))
      .width(30)
      .height(30)
      .margin({ left: 80 })
    Image($r('app.media.template'))
      .width(30)
      .height(30)
      .margin({ left: 80 })
  }
  .width('100%')
  .height(60)
}
.width('100%')
.height('100%')
}
@Builder
TweetItem(tweet: TweetData) {
Column() {
Row() {
Image($r('app.media.template'))
.width(50)
.height(50)
.margin({ right: 10 })
.onClick(() => {
router.pushUrl({ url: 'pages/ProfilePage' })
})
Column() {
Row() {
Text(tweet.username)
.fontSize(16)
.fontWeight(FontWeight.Bold)
if (tweet.verified) {
Image($r('app.media.template'))
.width(20)
.height(20)
.margin({ left: 5 })
}
}
Text(tweet.handle)
.fontSize(14)
.fontColor(Color.Gray)
}
}
.width('100%')
.padding({ top: 10, bottom: 5 })
  Text(tweet.content)
    .fontSize(16)
    .width('100%')
    .margin({ bottom: 10 })
    .textOverflow({ overflow: TextOverflow.Ellipsis })
    .maxLines(3)

  Row() {
    Image($r('app.media.template'))
      .width(20)
      .height(20)
    Text(tweet.comments.toString())
      .fontSize(14)
      .margin({ left: 5, right: 20 })
    Image($r('app.media.template'))
      .width(20)
      .height(20)
    Text(tweet.retweets.toString())
      .fontSize(14)
      .margin({ left: 5, right: 20 })
    Image($r('app.media.template'))
      .width(20)
      .height(20)
    Text(tweet.likes.toString())
      .fontSize(14)
      .margin({ left: 5 })
  }
  .width('100%')
  .margin({ bottom: 10 })
}
.width('100%')
.padding(10)
.backgroundColor(Color.White)
}
}