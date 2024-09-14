import router from '@ohos.router';



interface Song {

  number: string;

  title: string;

  artist: string;

  isPlaying?: boolean;

}



@Entry

@Component

struct PlaylistPage {

  @State currentTime: string = '9:41';

  @State playlistTitle: string = 'Geri - Inder Chahal';

  @State genre: string = 'Pop Songs';

  @State totalSongs: number = 21;

  @State author: string = 'Various Artits';

  @State currentSong: Song = {

    number: '03',

    title: 'Illegal Weapon 2.0',

    artist: 'Street Dancer 3D',

    isPlaying: true

  };

  @State songList: Song[] = [

    { number: '01', title: 'Gully Boy', artist: 'Ranvir Sing' },

    { number: '02', title: 'Apna Time Aayega', artist: 'Arijit Sing' },

    { number: '03', title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D' },

    { number: '04', title: 'Lagli Lahore Di', artist: 'Sreya Ghosal' },

    { number: '05', title: 'Bezubaan Kab Se', artist: 'Kapal Dev' },

    { number: '06', title: 'Nachi Nachi', artist: 'Sreya Ghoshal' }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24).onClick(() => {

          router.back();

        })

        Text(this.currentTime)

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

          .margin({ left: 'auto' })

        Image($r('app.media.template')).width(20).height(20)

        Image($r('app.media.template')).width(20).height(20)

      }

      .width('100%')

      .padding({ left: 20, right: 20, top: 10 })



      Column() {

        Text(this.playlistTitle)

          .fontSize(24)

          .fontWeight(FontWeight.Bold)

        Text(this.genre)

          .fontSize(16)

          .fontColor(Color.Gray)

          .margin({ top: 5 })

      }

      .alignItems(HorizontalAlign.Start)

      .margin({ top: 20, left: 20 })



      Row() {

        Image($r('app.media.template'))

          .width('30%')

          .aspectRatio(1)

          .borderRadius(10)

        Column() {

          Row() {

            Text('Songs')

              .fontSize(14)

              .fontColor(Color.Gray)

            Text(this.totalSongs.toString() + ' Songs')

              .fontSize(14)

              .fontWeight(FontWeight.Bold)

          }.justifyContent(FlexAlign.SpaceBetween).width('100%')



          Row() {

            Text('Author')

              .fontSize(14)

              .fontColor(Color.Gray)

            Text(this.author)

              .fontSize(14)

              .fontWeight(FontWeight.Bold)

          }.justifyContent(FlexAlign.SpaceBetween).width('100%').margin({ top: 5 })

        }

        .layoutWeight(1)

        .margin({ left: 20 })

        .justifyContent(FlexAlign.Center)

      }

      .margin({ top: 20, left: 20, right: 20 })



      Button({ type: ButtonType.Circle, stateEffect: true }) {

        Image($r('app.media.template')).width(24).height(24)

      }

      .width(60)

      .height(60)

      .backgroundColor('#FF69B4')

      .margin({ top: 20 })



      List() {

        ForEach(this.songList, (song: Song) => {

          ListItem() {

            Row() {

              Text(song.number)

                .fontSize(16)

                .fontColor(Color.Gray)

                .width('10%')

              Column() {

                Text(song.title)

                  .fontSize(16)

                  .fontWeight(FontWeight.Medium)

                Text(song.artist)

                  .fontSize(14)

                  .fontColor(Color.Gray)

              }.layoutWeight(1).alignItems(HorizontalAlign.Start)

              Image($r('app.media.template')).width(24).height(24)

            }

            .width('100%')

            .padding(10)

            .backgroundColor(song.number === this.currentSong.number ? '#E6E6FA' : Color.White)

            .borderRadius(8)

            .onClick(() => {

              router.pushUrl({ url: 'pages/NowPlayingPage' });

            })

          }

        })

      }

      .margin({ top: 20 })



      Row() {

        Image($r('app.media.template')).width(50).height(50).borderRadius(8)

        Column() {

          Text(this.currentSong.title)

            .fontSize(16)

            .fontWeight(FontWeight.Medium)

          Text(this.currentSong.artist)

            .fontSize(14)

            .fontColor(Color.Gray)

        }.layoutWeight(1).alignItems(HorizontalAlign.Start).margin({ left: 10 })

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 20 })

      }

      .width('100%')

      .height(70)

      .padding(10)

      .backgroundColor('#4169E1')

      .position({ y: '100%' })

      .translate({ y: -70 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#FFFFFF')

  }

}