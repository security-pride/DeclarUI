import router from '@ohos.router';



interface Song {

  title: string;

  artist: string;

  duration: string;

  image: Resource;

}



@Entry

@Component

struct NowPlayingPage {

  @State currentTime: string = '9:41';

  @State currentSong: Song = {

    title: 'Apna Time Aayega',

    artist: 'Arijit Sing',

    duration: '5:06',

    image: $r('app.media.template')

  };

  @State isPlaying: boolean = true;

  @State currentProgress: number = 0.6;



  build() {

    Column() {

      Row() {

        Text(this.currentTime)

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

        Blank()

        Image($r('app.media.template')).width(20).height(20)

        Image($r('app.media.template')).width(20).height(20)

      }

      .width('100%')

      .padding({ left: 20, right: 20, top: 10 })



      Text('Now Playing')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

        .margin({ top: 20, bottom: 10 })



      Image($r('app.media.template'))

        .width('100%')

        .height('30%')

        .objectFit(ImageFit.Cover)



      Swiper() {

        Image($r('app.media.template'))

          .width('80%')

          .aspectRatio(1)

          .borderRadius(20)

        Image(this.currentSong.image)

          .width('80%')

          .aspectRatio(1)

          .borderRadius(20)

        Image($r('app.media.template'))

          .width('80%')

          .aspectRatio(1)

          .borderRadius(20)

      }

      .itemSpace(20)

      .index(1)

      .margin({ top: 20, bottom: 20 })



      Text(this.currentSong.title)

        .fontSize(20)

        .fontWeight(FontWeight.Bold)



      Text(this.currentSong.artist)

        .fontSize(16)

        .fontColor(Color.Gray)

        .margin({ top: 5 })



      Row() {

        Text('0:00')

          .fontSize(12)

          .fontColor(Color.Gray)

        Slider({

          value: this.currentProgress * 100,

          min: 0,

          max: 100,

          step: 1,

          style: SliderStyle.OutSet

        })

          .width('80%')

          .onChange((value: number) => {

            this.currentProgress = value / 100;

          })

        Text(this.currentSong.duration)

          .fontSize(12)

          .fontColor(Color.Gray)

      }

      .width('100%')

      .padding({ left: 20, right: 20 })

      .margin({ top: 20, bottom: 20 })



      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => {

            // Previous track logic

          })

        Image($r('app.media.template'))

          .width(60)

          .height(60)

          .onClick(() => {

            this.isPlaying = !this.isPlaying;

          })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => {

            // Next track logic

          })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceEvenly)

      .margin({ bottom: 20 })



      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/PlaylistPage' })

          })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceEvenly)

    }

    .height('100%')

    .backgroundColor('#4169E1')

  }

}