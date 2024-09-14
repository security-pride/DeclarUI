import router from '@ohos.router';



interface Song {

  title: string;

  artist?: string;

  playCount: number;

  image: Resource;

}



interface Album {

  title: string;

  artist: string;

  image: Resource;

}



@Entry

@Component

struct TrendingPage {

  @State currentTime: string = '9:41';

  @State selectedGenre: string = 'Partyholics';

  @State selectedYear: string = '2020';

  @State trendingSongs: Song[] = [

    { title: "I'm a Freak (feat. Pitbull)", playCount: 12598, image: $r('app.media.template') },

    { title: "Can't Remember To Forget", playCount: 12598, image: $r('app.media.template') },

    { title: "Beyonce", playCount: 12598, image: $r('app.media.template') },

    { title: "Roller Coaster (Single)", playCount: 12598, image: $r('app.media.template') },

    { title: "Unconditionally", playCount: 12598, image: $r('app.media.template') }

  ];

  @State trendingAlbums: Album[] = [

    { title: 'Album 1', artist: 'Artist 1', image: $r('app.media.template') },

    { title: 'Album 2', artist: 'Artist 2', image: $r('app.media.template') },

    { title: 'Album 3', artist: 'Artist 3', image: $r('app.media.template') }

  ];

  @State currentSong: Song = { title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D', playCount: 0, image: $r('app.media.template') };



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



      Text('Trending')

        .fontSize(28)

        .fontWeight(FontWeight.Bold)

        .margin({ top: 20, bottom: 20, left: 20 })



      Row() {

        Select([{ value: 'Partyholics' }])

          .selected(0)

          .value(this.selectedGenre)

          .onSelect((index: number) => {

            this.selectedGenre = 'Partyholics';

          })

          .margin({ right: 10 })



        Select([{ value: '2020' }])

          .selected(0)

          .value(this.selectedYear)

          .onSelect((index: number) => {

            this.selectedYear = '2020';

          })

      }.margin({ bottom: 20, left: 20, right: 20 })



      List() {

        ListItemGroup({ header: 'Trending Songs' }) {

          ForEach(this.trendingSongs, (song: Song) => {

            ListItem() {

              Row() {

                Image(song.image)

                  .width(60)

                  .height(60)

                  .borderRadius(8)

                Column() {

                  Text(song.title)

                    .fontSize(16)

                    .fontWeight(FontWeight.Medium)

                  Text(`${song.playCount} Played`)

                    .fontSize(14)

                    .fontColor(Color.Gray)

                }.layoutWeight(1)

                .alignItems(HorizontalAlign.Start)

                .margin({ left: 10 })

                Button({ type: ButtonType.Circle, stateEffect: true }) {

                  Image($r('app.media.template')).width(24).height(24)

                }

                .width(40)

                .height(40)

                .backgroundColor(Color.Transparent)

              }

              .width('100%')

              .padding(10)

            }

            .onClick(() => {

              router.pushUrl({ url: 'pages/NowPlayingPage' })

            })

          })

        }



        ListItemGroup({ header: 'Trending Albums' }) {

          Row() {

            ForEach(this.trendingAlbums, (album: Album) => {

              Column() {

                Image(album.image)

                  .width(100)

                  .height(100)

                  .borderRadius(8)

                Text(album.title)

                  .fontSize(14)

                  .maxLines(1)

                  .textOverflow({ overflow: TextOverflow.Ellipsis })

                Text(album.artist)

                  .fontSize(12)

                  .fontColor(Color.Gray)

              }.width('30%')

              .margin({ right: 10 })

            })

          }.width('100%')

        }

      }

      .layoutWeight(1)

      .margin({ left: 20, right: 20 })



      Row() {

        Image(this.currentSong.image).width(50).height(50).borderRadius(25)

        Column() {

          Text(this.currentSong.title)

            .fontSize(16)

            .fontWeight(FontWeight.Medium)

          Text(this.currentSong.artist)

            .fontSize(14)

            .fontColor(Color.Gray)

        }.layoutWeight(1)

        .alignItems(HorizontalAlign.Start)

        .margin({ left: 10 })

        Image($r('app.media.template')).width(24).height(24)

        Button({ type: ButtonType.Circle, stateEffect: true }) {

          Image($r('app.media.template')).width(24).height(24)

        }

        .width(40)

        .height(40)

        .backgroundColor(Color.Transparent)

        .margin({ left: 10 })

      }

      .width('100%')

      .height(70)

      .padding(10)

      .backgroundColor('#4169E1')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Trending').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Search').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Library').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Settings').fontSize(12)

        }.layoutWeight(1)

      }

      .width('100%')

      .height(60)

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

  }

}