import router from '@ohos.router';



interface SongItem {

  title: string;

  artist: string;

  image: Resource;

}



interface ArtistItem {

  name: string;

  image: Resource;

}



@Entry

@Component

struct ExplorePage {

  @State recommendedSongs: SongItem[] = [

    { title: 'Baghi 3', artist: 'Various Artists', image: $r('app.media.template') },

    { title: 'Surma Surma', artist: 'Various Artists', image: $r('app.media.template') },

    { title: 'Hindi T', artist: 'Various Artists', image: $r('app.media.template') }

  ];



  @State recentPlayed: SongItem[] = [

    { title: 'No Time To Die', artist: 'Unknown', image: $r('app.media.template') },

    { title: 'Illegal Weapon', artist: 'Unknown', image: $r('app.media.template') },

    { title: 'Loca', artist: 'Unknown', image: $r('app.media.template') }

  ];



  @State newReleased: SongItem[] = [

    { title: 'Baghi 3', artist: 'Various Artists', image: $r('app.media.template') },

    { title: 'Baghi 3', artist: 'Various Artists', image: $r('app.media.template') }

  ];



  @State popularArtists: ArtistItem[] = [

    { name: 'Justin Bieber', image: $r('app.media.template') },

    { name: 'Michael Jackson', image: $r('app.media.template') },

    { name: 'Sam Smith', image: $r('app.media.template') }

  ];



  @State genres: string[] = ['Hip Hop', 'Pop', 'Partyholics'];



  build() {

    Column() {

      Row() {

        Text('9:41').fontSize(16).fontWeight(FontWeight.Medium)

        Blank()

        Row() {

          Image($r('app.media.template')).width(20).height(20)

          Image($r('app.media.template')).width(20).height(20).margin({ left: 5 })

        }

      }.width('100%').padding({ left: 20, right: 20, top: 10, bottom: 10 })



      Text('Explore').fontSize(24).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 20, top: 20 })



      Scroll() {

        Column() {

          this.RecommendedSection()

          this.RecentPlayedSection()

          this.NewReleasedSection()

          this.PopularArtistSection()

          this.GenresAndMoodsSection()

        }.width('100%')

      }.scrollable(ScrollDirection.Vertical).scrollBar(BarState.Auto)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12)

        }.onClick(() => {})



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Trending').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/TrendingPage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Search').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/SearchPage' })

        })



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Library').fontSize(12)

        }.onClick(() => {})



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Settings').fontSize(12)

        }.onClick(() => {})

      }.width('100%').justifyContent(FlexAlign.SpaceAround).padding(10).backgroundColor(Color.White)

    }.width('100%').height('100%')

  }



  @Builder

  RecommendedSection() {

    Column() {

      Text('Recomanded for you').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 20, top: 20 })

      List() {

        ForEach(this.recommendedSongs, (song: SongItem) => {

          ListItem() {

            Column() {

              Image(song.image).width(120).height(120).borderRadius(10)

              Text(song.title).fontSize(16).margin({ top: 5 })

              Text(song.artist).fontSize(14).fontColor(Color.Gray)

            }.width(120).margin({ right: 10 })

          }.onClick(() => {

            router.pushUrl({ url: 'pages/NowPlayingPage' })

          })

        })

      }.listDirection(Axis.Horizontal).margin({ left: 20, top: 10 })

    }.width('100%')

  }



  @Builder

  RecentPlayedSection() {

    Column() {

      Text('Recent Played').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 20, top: 20 })

      List() {

        ForEach(this.recentPlayed, (song: SongItem) => {

          ListItem() {

            Row() {

              Image(song.image).width(60).height(60).borderRadius(5)

              Column() {

                Text(song.title).fontSize(16)

                Text(song.artist).fontSize(14).fontColor(Color.Gray)

              }.alignItems(HorizontalAlign.Start).margin({ left: 10 })

            }.width('100%').padding(10)

          }.onClick(() => {

            router.pushUrl({ url: 'pages/NowPlayingPage' })

          })

        })

      }.width('100%')

    }.width('100%')

  }



  @Builder

  NewReleasedSection() {

    Column() {

      Text('New Released').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 20, top: 20 })

      List() {

        ForEach(this.newReleased, (song: SongItem) => {

          ListItem() {

            Column() {

              Image(song.image).width(150).height(150).borderRadius(10)

              Text(song.title).fontSize(16).margin({ top: 5 })

              Text(song.artist).fontSize(14).fontColor(Color.Gray)

            }.width(150).margin({ right: 10 })

          }.onClick(() => {

            router.pushUrl({ url: 'pages/NowPlayingPage' })

          })

        })

      }.listDirection(Axis.Horizontal).margin({ left: 20, top: 10 })

    }.width('100%')

  }



  @Builder

  PopularArtistSection() {

    Column() {

      Text('Popular Artist').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 20, top: 20 })

      List() {

        ForEach(this.popularArtists, (artist: ArtistItem) => {

          ListItem() {

            Column() {

              Image(artist.image).width(80).height(80).borderRadius(40)

              Text(artist.name).fontSize(14).margin({ top: 5 })

            }.width(80).margin({ right: 10 })

          }

        })

      }.listDirection(Axis.Horizontal).margin({ left: 20, top: 10 })

    }.width('100%')

  }



  @Builder

  GenresAndMoodsSection() {

    Column() {

      Text('Genres & Moods').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 20, top: 20 })

      Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {

        ForEach(this.genres, (genre: string) => {

          Button(genre)

            .fontSize(16)

            .fontColor(Color.Black)

            .backgroundColor(Color.White)

            .borderRadius(20)

            .borderWidth(1)

            .borderColor(Color.Gray)

            .margin({ right: 10, bottom: 10 })

            .padding({ left: 15, right: 15, top: 8, bottom: 8 })

        })

      }.margin({ left: 20, top: 10, right: 20 })

    }.width('100%')

  }

}