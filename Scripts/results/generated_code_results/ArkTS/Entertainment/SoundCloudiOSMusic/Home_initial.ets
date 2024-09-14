import router from '@ohos.router';
import { BatteryStatus } from '@ohos.batteryInfo';
interface Playlist {
name: string;
followers: string;
}
interface Artist {
name: string;
image: Resource;
}
@Entry
@Component
struct Home {
@State currentTime: string = '9:41 AM';
@State batteryLevel: number = 100;
@State playlists: Playlist[] = [
{ name: 'Summer Vibes', followers: '1,300,231' },
{ name: 'Rap Zone', followers: '650,231' },
{ name: 'Shower Time', followers: '1,300,231' },
{ name: 'Old School', followers: '300,231' }
];
@State artists: Artist[] = [
{ name: 'Ed Sheeran', image: $r('app.media.template') },
{ name: 'Rita Ora', image: $r('app.media.template') },
{ name: 'Eminem', image: $r('app.media.template') },
{ name: 'Dua Lipa', image: $r('app.media.template') }
];
@State currentSong: string = 'All Mine';
@State currentArtist: string = 'Kanye West';
build() {
Column() {
Row() {
Text(this.currentTime)
.fontSize(16)
.fontWeight(FontWeight.Medium)
.margin({ left: 10, top: 10 })
Blank()
BatteryStatus({ batteryLevel: this.batteryLevel })
.margin({ right: 10, top: 10 })
}.width('100%').height(37)
  Text('Hots now')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ top: 20, left: 20 })

  Row() {
    Column() {
      Image($r('app.media.template'))
        .width(150)
        .height(150)
        .borderRadius(10)
      Text('Summer Vibes')
        .fontSize(16)
        .margin({ top: 5 })
    }
    Column() {
      Image($r('app.media.template'))
        .width(150)
        .height(150)
        .borderRadius(10)
      Text('Rap Zone')
        .fontSize(16)
        .margin({ top: 5 })
    }
  }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ top: 20 })

  Text('Mood')
    .fontSize(20)
    .fontWeight(FontWeight.Bold)
    .alignSelf(ItemAlign.Start)
    .margin({ top: 30, left: 20 })

  Row() {
    Column() {
      Image($r('app.media.template'))
        .width(150)
        .height(150)
        .borderRadius(10)
      Text('Shower Time')
        .fontSize(16)
        .margin({ top: 5 })
    }
    Column() {
      Image($r('app.media.template'))
        .width(150)
        .height(150)
        .borderRadius(10)
      Text('Old School')
        .fontSize(16)
        .margin({ top: 5 })
    }
  }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ top: 20 })

  Text('Popular artists')
    .fontSize(20)
    .fontWeight(FontWeight.Bold)
    .alignSelf(ItemAlign.Start)
    .margin({ top: 30, left: 20 })

  Row() {
    ForEach(this.artists, (artist: Artist) => {
      Column() {
        Image(artist.image)
          .width(80)
          .height(80)
          .borderRadius(40)
        Text(artist.name)
          .fontSize(14)
          .margin({ top: 5 })
      }
    })
  }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ top: 20 })

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
      .onClick(() => {
        router.pushUrl({ url: 'pages/Listen' })
      })
    Image($r('app.media.template'))
      .width(30)
      .height(30)
      .onClick(() => {
        router.pushUrl({ url: 'pages/Search' })
      })
    Image($r('app.media.template'))
      .width(30)
      .height(30)
      .onClick(() => {
        router.pushUrl({ url: 'pages/Profile' })
      })
  }.width('100%').justifyContent(FlexAlign.SpaceAround)
    .position({ y: 720 }).height(80)
}
}
}