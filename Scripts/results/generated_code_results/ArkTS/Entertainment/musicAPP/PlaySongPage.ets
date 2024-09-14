import router from '@ohos.router';

interface SongInfo {
  title: string;
  artist: string;
  album: string;
  albumArt: Resource;
  currentTime: string;
  totalTime: string;
}

@Entry
@Component
struct PlaySongPage {
  @State songInfo: SongInfo = {
    title: 'Black or White',
    artist: 'Michael Jackson',
    album: 'Dangerous',
    albumArt: $r('app.media.template'),
    currentTime: '3:15',
    totalTime: '4:26'
  }
  @State isPlaying: boolean = true
  @State isShuffle: boolean = false
  @State isRepeat: boolean = false
  @State isFavorite: boolean = false

  build() {
    Column() {
      Row() {
        Text('09:41').fontSize(14).fontColor(Color.White)
        Blank()
        Image($r('app.media.template')).width(16).height(16)
        Image($r('app.media.template')).width(16).height(16)
        Image($r('app.media.template')).width(16).height(16)
      }
      .width('100%')
      .height(30)
      .padding(10)
      .backgroundColor('#000000')

      Row() {
        Image($r('app.media.template')).width(24).height(24).onClick(() => router.back())
        Text('Now Playing').fontSize(20).fontColor(Color.White)
        Blank()
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').padding(10)

      Image(this.songInfo.albumArt)
        .width('80%')
        .aspectRatio(1)
        .borderRadius('50%')
        .margin({ top: 40, bottom: 40 })

      Text(`${this.songInfo.currentTime} | ${this.songInfo.totalTime}`)
        .fontSize(14)
        .fontColor(Color.White)
        .margin({ bottom: 10 })

      Progress({ value: 75, total: 100, type: ProgressType.Linear })
        .width('90%')
        .height(4)
        .color('#FF69B4')

      Text(this.songInfo.title)
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
        .fontColor(Color.White)
        .margin({ top: 20 })

      Text(`${this.songInfo.artist} • ${this.songInfo.album}`)
        .fontSize(16)
        .fontColor(Color.Gray)
        .margin({ top: 5 })

      Image($r('app.media.template'))
        .width('90%')
        .height(60)
        .margin({ top: 20 })

      Row() {
        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image($r('app.media.template')).width(24).height(24)
        }.width(60).height(60).backgroundColor(Color.Transparent)

        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image(this.isPlaying ? $r('app.media.template') : $r('app.media.template')).width(32).height(32)
        }.width(80).height(80).backgroundColor(Color.White).onClick(() => {
          this.isPlaying = !this.isPlaying
        })

        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image($r('app.media.template')).width(24).height(24)
        }.width(60).height(60).backgroundColor(Color.Transparent)
      }.width('100%').justifyContent(FlexAlign.SpaceEvenly).margin({ top: 30 })

      Row() {
        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image($r('app.media.template')).width(24).height(24)
        }.width(50).height(50).backgroundColor(Color.Transparent)

        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image($r('app.media.template')).width(24).height(24)
        }.width(50).height(50).backgroundColor(Color.Transparent).onClick(() => {
          this.isShuffle = !this.isShuffle
        })

        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image($r('app.media.template')).width(24).height(24)
        }.width(50).height(50).backgroundColor(Color.Transparent).onClick(() => {
          this.isRepeat = !this.isRepeat
        })

        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image($r('app.media.template')).width(24).height(24)
        }.width(50).height(50).backgroundColor(Color.Transparent)

        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image($r('app.media.template')).width(24).height(24)
        }.width(50).height(50).backgroundColor(Color.Transparent).onClick(() => {
          this.isFavorite = !this.isFavorite
        })
      }.width('100%').justifyContent(FlexAlign.SpaceEvenly).margin({ top: 20 })

      Row() {
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Home').fontSize(12).fontColor(Color.Gray)
        }.onClick(() => router.pushUrl({ url: 'pages/HomePage' }))
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Songs').fontSize(12).fontColor(Color.Gray)
        }.onClick(() => router.pushUrl({ url: 'pages/SongsPage' }))
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Settings').fontSize(12).fontColor(Color.Gray)
        }
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceAround)
      .backgroundColor('#000000')
      .padding({ top: 10, bottom: 10 })
      .position({ y: '100%' })
      .translate({ y: -60 })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#191970')
  }
}