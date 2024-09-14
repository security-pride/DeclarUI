import router from '@ohos.router';
import { BatteryStatus } from '@ohos.batteryInfo';
interface Playlist {
name: string;
followers: string;
image: Resource;
}
interface MenuItem {
name: string;
icon: Resource;
}
@Entry
@Component
struct Profile {
@State currentTime: string = '9:41 AM';
@State batteryLevel: number = 100;
@State userName: string = 'Kimberly Evans';
@State accountType: string = 'Free User';
@State playlists: Playlist[] = [
{ name: 'Summer Vibes', followers: '1,300,231', image: $r('app.media.template') },
{ name: 'Rap Zone', followers: '650,231', image: $r('app.media.template') },
{ name: 'Music Mix', followers: '50,231', image: $r('app.media.template') }
];
@State menuItems: MenuItem[] = [
{ name: 'My SoundCloud', icon: $r('app.media.template') },
{ name: 'Music quality', icon: $r('app.media.template') },
{ name: 'Help', icon: $r('app.media.template') }
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
  Column() {
    Text('SoundCloud Premium')
      .fontSize(20)
      .fontWeight(FontWeight.Bold)
      .fontColor(Color.White)
    Text('Remove boring advs, create infinite playlists and so much')
      .fontSize(14)
      .fontColor(Color.White)
      .margin({ top: 8 })
  }
  .width('90%')
  .height(150)
  .backgroundColor('#FF7F50')
  .borderRadius(16)
  .padding(16)
  .margin({ top: 20 })

  Row() {
    Image($r('app.media.template'))
      .width(60)
      .height(60)
      .borderRadius(30)
    Column() {
      Text(this.userName)
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
      Text('Edit profile')
        .fontSize(14)
        .fontColor(Color.Blue)
    }.margin({ left: 16 })
    Blank()
    Badge({
      value: this.accountType,
      style: { badgeSize: 16, badgeColor: '#FFA500' }
    })
  }.width('90%').margin({ top: 20 })

  List() {
    ForEach(this.menuItems, (item: MenuItem) => {
      ListItem() {
        Row() {
          Image(item.icon).width(24).height(24)
          Text(item.name).fontSize(16).margin({ left: 16 })
          Blank()
          Image($r('app.media.template')).width(24).height(24)
        }.width('100%').height(50)
      }
    })
  }.width('90%').margin({ top: 20 })

  Text('My playlists')
    .fontSize(20)
    .fontWeight(FontWeight.Bold)
    .alignSelf(ItemAlign.Start)
    .margin({ top: 30, left: '5%' })

  List() {
    ForEach(this.playlists, (playlist: Playlist) => {
      ListItem() {
        Row() {
          Image(playlist.image)
            .width(60)
            .height(60)
            .borderRadius(8)
          Column() {
            Text(playlist.name)
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
            Text(playlist.followers + ' FOLLOWERS')
              .fontSize(12)
              .fontColor(Color.Gray)
          }.margin({ left: 16 })
        }
      }.height(80)
    })
  }.width('90%').height(240).margin({ top: 10 })

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
}.width('100%').height('100%').backgroundColor('#F1F3F5')
}
}