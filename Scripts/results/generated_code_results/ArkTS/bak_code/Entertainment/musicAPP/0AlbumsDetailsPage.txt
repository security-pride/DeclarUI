import router from '@ohos.router';

interface Song {
  title: string;
  duration: string;
}

interface Album {
  title: string;
  artist: string;
  year: number;
  songCount: number;
  duration: string;
  cover: Resource;
}

@Entry
@Component
struct AlbumDetailsPage {
  @State album: Album = {
    title: 'History',
    artist: 'Michael Jackson',
    year: 1996,
    songCount: 18,
    duration: '64 min',
    cover: $r('app.media.template')
  }
  @State songs: Song[] = [
    { title: 'Billie Jean', duration: '3:56' },
    { title: 'The way you make..', duration: '4:12' },
    { title: 'She is out of my life', duration: '3:56' },
    { title: 'Thriller', duration: '4:12' },
    { title: 'Beat It', duration: '3:56' },
    { title: 'Bad', duration: '4:12' },
    { title: 'Man in the mirror', duration: '3:56' },
    { title: 'Scream', duration: '4:12' }
  ]

  build() {
    Column() {
      Row() {
        Text('09:41').fontSize(14).fontColor(Color.White)
        Blank()
        Image($r('app.media.template')).width(16).height(16)
        Image($r('app.media.template')).width(16).height(16)
      }
      .width('100%')
      .height(30)
      .padding(10)
      .backgroundColor('#000000')

      Row() {
        Image($r('app.media.template')).width(24).height(24).onClick(() => {
          router.back()
        })
        Text('Album Details').fontSize(20).fontWeight(FontWeight.Bold)
        Blank()
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').padding(10)

      Column() {
        Row() {
          Image(this.album.cover)
            .width(120)
            .height(120)
            .borderRadius(10)
          Column() {
            Text(this.album.title).fontSize(24).fontWeight(FontWeight.Bold)
            Text(`by ${this.album.artist}`).fontSize(16).fontColor(Color.Gray)
            Text(`${this.album.year} • ${this.album.songCount} Songs • ${this.album.duration}`).fontSize(14).fontColor(Color.Gray)
          }.layoutWeight(1).alignItems(HorizontalAlign.Start).padding({ left: 20 })
        }.width('100%').padding(20)

        Row() {
          Button('Play', { type: ButtonType.Capsule }).backgroundColor('#FF69B4')
          Button('Share', { type: ButtonType.Capsule }).backgroundColor(Color.Transparent).fontColor(Color.White)
          Button({ type: ButtonType.Capsule }) {
            Row() {
              Image($r('app.media.template')).width(20).height(20)
              Text('Add to Favorites').fontColor(Color.White)
            }
          }.backgroundColor(Color.Transparent)
        }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ bottom: 20 })

        List() {
          ForEach(this.songs, (song: Song) => {
            ListItem() {
              Row() {
                Image($r('app.media.template')).width(40).height(40)
                Text(song.title).fontSize(16).fontColor(Color.White).layoutWeight(1)
                Text(song.duration).fontSize(14).fontColor(Color.Gray)
              }.width('100%').padding(10)
            }
          }, (song: Song) => song.title)
        }.width('100%')
      }.width('100%').backgroundColor('#191970')

      Row() {
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Home').fontSize(12)
        }
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Songs').fontSize(12).fontColor('#FF69B4')
        }
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Settings').fontSize(12)
        }
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceAround)
      .backgroundColor('#000000')
      .padding({ top: 10, bottom: 10 })

      Row() {
        Image($r('app.media.template')).width(40).height(40).borderRadius(20)
        Column() {
          Text('Now Playing').fontSize(14).fontColor(Color.White)
          Text('Artist - Song').fontSize(12).fontColor(Color.Gray)
        }.layoutWeight(1).alignItems(HorizontalAlign.Start).padding({ left: 10 })
        Image($r('app.media.template')).width(24).height(24)
        Image($r('app.media.template')).width(24).height(24)
        Image($r('app.media.template')).width(24).height(24)
      }
      .width('100%')
      .height(60)
      .padding(10)
      .backgroundColor('#000000')
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#191970')
  }
}