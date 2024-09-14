import router from '@ohos.router';
import { BatteryStatus } from '@ohos.batteryInfo';
interface Playlist {
name: string;
followers: string;
image: Resource;
}
interface Category {
name: string;
icon: Resource;
isNew?: boolean;
}
@Entry
@Component
struct Listen {
@State currentTime: string = '9:41 AM';
@State batteryLevel: number = 100;
@State featuredPlaylists: Playlist[] = [
{ name: 'Summer Vibes', followers: '1,300,231', image: $r('app.media.template') },
{ name: 'Monday Party', followers: '650,231', image: $r('app.media.template') }
];
@State recentCategories: Category[] = [
{ name: 'Ranking', icon: $r('app.media.template'), isNew: true },
{ name: 'Weekly featured', icon: $r('app.media.template') },
{ name: 'Podcast', icon: $r('app.media.template') },
{ name: 'Live', icon: $r('app.media.template') },
{ name: 'Concerts', icon: $r('app.media.template') }
];
@State currentSong: string = 'All Mine';
@State currentArtist: string = 'Kanye West';
build() {
Column() {
Row() {
Text(this.currentTime)
.fontSize(16)
.fontWeight(FontWeight.Medium)
Blank()
BatteryStatus({ batteryLevel: this.batteryLevel })
}.width('100%').height(34).padding({ left: 12, right: 12, top: 0 })
  Text('Hots now')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, left: 20 })

  Row() {
    ForEach(this.featuredPlaylists, (playlist: Playlist) => {
      Column() {
        Image(playlist.image)
          .width(150)
          .height(150)
          .borderRadius(10)
        Text(playlist.name)
          .fontSize(16)
          .margin({ top: 5 })
        Text(playlist.followers + ' FOLLOWERS')
          .fontSize(12)
          .fontColor(Color.Gray)
      }
    })
  }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ top: 20 })

  Text('Recents')
    .fontSize(20)
    .fontWeight(FontWeight.Bold)
    .alignSelf(ItemAlign.Start)
    .margin({ top: 30, left: 20 })

  List() {
    ForEach(this.recentCategories, (category: Category) => {
      ListItem() {
        Row() {
          Image(category.icon).width(24).height(24)
          Text(category.name).fontSize(16).margin({ left: 10 })
          if (category.isNew) {
            Text('News')
              .fontSize(12)
              .fontColor(Color.White)
              .backgroundColor(Color.Orange)
              .padding(4)
              .borderRadius(4)
              .margin({ left: 10 })
          }
          Blank()
          Image($r('app.media.template')).width(24).height(24)
        }.width('100%').height(50).padding({ left: 20, right: 20 })
      }
    })
  }.width('100%')

  Text('Playlists')
    .fontSize(20)
    .fontWeight(FontWeight.Bold)
    .alignSelf(ItemAlign.Start)
    .margin({ top: 30, left: 20 })

  Divider().color(Color.Orange).width('100%').height(2).margin({ top: 10 })

  Row() {
    Text(this.currentSong)
      .fontSize(16)
      .fontWeight(FontWeight.Medium)
    Text(this.currentArtist)
      .fontSize(14)
      .fontColor(Color.Gray)
      .margin({ left: 10 })
    Blank()
    Image($r('app.media.template'))
      .width(30)
      .height(30)
  }.width('90%').height(50).backgroundColor(Color.White).borderRadius(25)
    .padding(10).margin({ top: 20 }).onClick(() => {
      router.pushUrl({ url: 'pages/Player' })
    })

  Row() {
    Image($r('app.media.template'))
      .width(30)
      .height(30)
      .onClick(() => {
        router.pushUrl({ url: 'pages/Home' })
      })
    Image($r('app.media.template'))
      .width(30)
      .height(30)
    Image($r('app.media.template'))
      .width(30)
      .height(30)
    Image($r('app.media.template'))
      .width(30)
      .height(30)
  }.width('100%').justifyContent(FlexAlign.SpaceAround)
    .position({ y: 720 }).height(80)
}
}
}