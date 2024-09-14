import router from '@ohos.router';
import { BatteryStatus } from '@ohos.batteryInfo';
interface RecentSearch {
song: string;
artist: string;
image: Resource;
}
@Entry
@Component
struct Search {
@State currentTime: string = '9:41 AM';
@State batteryLevel: number = 100;
@State searchQuery: string = '';
@State recentSearches: RecentSearch[] = [
{ song: 'Better Now', artist: 'Post Malone', image: $r('app.media.template') },
{ song: 'Kimberly Evans', artist: 'Calvin Harris, Dua Lipa', image: $r('app.media.template') },
{ song: 'I Like It', artist: 'Cardi B, Bad Bunny, J Balvin', image: $r('app.media.template') },
{ song: 'Girls Like You (feat Cardi B)', artist: 'Maroon 5', image: $r('app.media.template') },
{ song: 'Back To You', artist: 'Selena Gomez', image: $r('app.media.template') },
{ song: 'Lucid Dreams', artist: 'Juice WRLD', image: $r('app.media.template') },
{ song: 'No Tears Left To Cry', artist: 'Ariana Grande', image: $r('app.media.template') },
{ song: 'Nice For What', artist: 'Drake', image: $r('app.media.template') },
{ song: 'Youngblood', artist: '5 Seconds of Summer', image: $r('app.media.template') }
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
Image($r('app.media.template')).width(20).height(20)
BatteryStatus({ batteryLevel: this.batteryLevel })
}.width('100%').height(34).padding({ left: 12, right: 12, top: 0 })
  Row() {
    Search({ value: this.searchQuery, placeholder: 'Search that song!' })
      .height(40)
      .width('80%')
      .margin({ right: 10 })
      .onChange((value: string) => {
        this.searchQuery = value;
      })
    Image($r('app.media.template'))
      .width(40)
      .height(40)
      .borderRadius(20)
  }.width('90%').margin({ top: 10 })

  Text('Recents')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .alignSelf(ItemAlign.Start)
    .margin({ top: 20, left: '5%' })

  List() {
    ForEach(this.recentSearches, (item: RecentSearch) => {
      ListItem() {
        Row() {
          Image(item.image)
            .width(50)
            .height(50)
            .borderRadius(8)
          Column() {
            Text(item.song)
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
            Text(item.artist)
              .fontSize(14)
              .fontColor(Color.Gray)
          }.margin({ left: 10 })
          Blank()
          Text('×')
            .fontSize(20)
            .fontColor(Color.Gray)
        }.width('100%').height(60).padding({ left: 10, right: 10 })
      }
    })
  }.width('90%').height('70%')

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
}.width('100%').height('100%').backgroundColor(Color.White)
}
}