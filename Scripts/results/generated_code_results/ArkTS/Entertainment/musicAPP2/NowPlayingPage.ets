import router from '@ohos.router';



interface SongInfo {

  title: string;

  artist: string;

  duration: string;

  coverImage: Resource;

}



@Entry

@Component

struct NowPlayingPage {

  @State currentSong: SongInfo = {

    title: 'Apna Time Aayega',

    artist: 'Arijit Sing',

    duration: '5:06',

    coverImage: $r('app.media.template')

  }

  @State currentTime: string = '0:00'

  @State isPlaying: boolean = true



  build() {

    Column() {

      Text('Now Playing')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

        .width('100%')

        .textAlign(TextAlign.Center)

        .margin({ top: 20, bottom: 10 })



      Image(this.currentSong.coverImage)

        .width('90%')

        .aspectRatio(1)

        .borderRadius(20)

        .margin({ bottom: 20 })



      Text(this.currentSong.title)

        .fontSize(22)

        .fontWeight(FontWeight.Bold)

        .margin({ bottom: 5 })



      Text(this.currentSong.artist)

        .fontSize(18)

        .fontColor(Color.Gray)

        .margin({ bottom: 20 })



      Row() {

        Text(this.currentTime)

          .fontSize(14)

        Slider({

          min: 0,

          max: 100,

          step: 1,

          value: 0

        })

          .width('80%')

        Text(this.currentSong.duration)

          .fontSize(14)

      }

      .width('90%')

      .margin({ bottom: 30 })



      Row() {

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .margin({ right: 30 })

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .margin({ right: 30 })

        Image($r('app.media.template'))

          .width(60)

          .height(60)

          .onClick(() => {

            this.isPlaying = !this.isPlaying

          })

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .margin({ left: 30 })

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .margin({ left: 30 })

      }

      .width('100%')

      .justifyContent(FlexAlign.Center)

      .margin({ bottom: 30 })



      Row() {

        Image($r('app.media.template'))

          .width(30)

          .height(30)

        Image($r('app.media.template'))

          .width(30)

          .height(30)

        Image($r('app.media.template'))

          .width(30)

          .height(30)

        Image($r('app.media.template'))

          .width(30)

          .height(30)

          .onClick(() => {

            router.pushUrl({ url: 'pages/PlaylistPage' })

          })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceEvenly)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}