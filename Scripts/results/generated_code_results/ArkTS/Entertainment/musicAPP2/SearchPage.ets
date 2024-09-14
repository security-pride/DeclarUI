import router from '@ohos.router';



interface SongItem {

  title: string;

  artist: string;

  album: string;

  year: string;

}



interface AlbumItem {

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

struct SearchPage {

  @State searchQuery: string = 'Gully Boy';

  @State songs: SongItem[] = [

    { title: 'Gully Boy', artist: 'Gully Boy', album: 'Gully Boy', year: '' },

    { title: 'Gully Gully Mein Gully Boy', artist: 'Gully Gully Mein Gully boy', album: '', year: '' },

    { title: 'Mere Gully Mein', artist: 'Mere Gully Mein', album: '', year: '' },

    { title: 'Ashli Hip Hip', artist: 'Gully Boy', album: '', year: '2019' },

    { title: 'Apna Time Aayega', artist: 'Gully Boy', album: '', year: '2019' },

    { title: 'Doori', artist: 'Gully Boy', album: '', year: '2019' }

  ];

  @State albums: AlbumItem[] = [

    { title: 'Gully Boy 2', artist: 'Various Artists', image: $r('app.media.template') },

    { title: 'Gully Boy Unlimited', artist: 'Various Artists', image: $r('app.media.template') },

    { title: 'Hip Gully', artist: 'Various Artists', image: $r('app.media.template') }

  ];

  @State artists: ArtistItem[] = [

    { name: 'Justin Bieber', image: $r('app.media.template') },

    { name: 'Michael Jackson', image: $r('app.media.template') },

    { name: 'Sam Smith', image: $r('app.media.template') }

  ];

  @State currentSong: SongItem = { title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D', album: '', year: '' };



  build() {

    Column() {

      Row() {

        Text('Search').fontSize(24).fontWeight(FontWeight.Bold)

      }.width('100%').justifyContent(FlexAlign.Start).padding({ left: 16, top: 16 })



      TextInput({ placeholder: 'Search', text: this.searchQuery })

        .width('90%')

        .height(40)

        .margin({ top: 8, bottom: 16 })

        .onChange((value: string) => {

          this.searchQuery = value;

        })



      Scroll() {

        Column() {

          this.MostPopularSection()

          this.SongsSection()

          this.AlbumsSection()

          this.ArtistsSection()

        }.width('100%')

      }.height('85%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(40).height(40)

          Text(this.currentSong.title).fontSize(14)

          Text(this.currentSong.artist).fontSize(12).fontColor(Color.Gray)

        }.layoutWeight(1).alignItems(HorizontalAlign.Start)



        Row() {

          Image($r('app.media.template')).width(24).height(24)

          Image($r('app.media.template')).width(24).height(24).margin({ left: 16, right: 16 })

        }

      }.width('100%').height(60).padding(8).backgroundColor(Color.White)

    }.width('100%').height('100%').backgroundColor('#F1F3F5')

  }



  @Builder

  MostPopularSection() {

    Column() {

      Text('Most Popular').fontSize(20).fontWeight(FontWeight.Bold).width('100%').padding({ left: 16, top: 16, bottom: 8 })

      Row() {

        Image($r('app.media.template')).width(60).height(60)

        Column() {

          Text('Gully Boy').fontSize(16).fontWeight(FontWeight.Bold)

          Text('Song • Gully Boy').fontSize(14).fontColor(Color.Gray)

        }.layoutWeight(1).alignItems(HorizontalAlign.Start).padding({ left: 16 })

      }.width('90%').padding(8).backgroundColor(Color.White).borderRadius(8)

      .onClick(() => {

        router.pushUrl({ url: 'pages/NowPlayingPage' })

      })

    }.width('100%').alignItems(HorizontalAlign.Center)

  }



  @Builder

  SongsSection() {

    Column() {

      Row() {

        Text('Songs').fontSize(20).fontWeight(FontWeight.Bold)

        Text('Show All')

          .fontSize(14)

          .fontColor(Color.Blue)

          .margin({ left: 8 })

      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding({ left: 16, right: 16, top: 16, bottom: 8 })



      List() {

        ForEach(this.songs, (song: SongItem) => {

          ListItem() {

            Row() {

              Image($r('app.media.template')).width(40).height(40)

              Column() {

                Text(song.title).fontSize(16)

                Text(`${song.artist}${song.album ? ' • ' + song.album : ''}${song.year ? ' • ' + song.year : ''}`).fontSize(14).fontColor(Color.Gray)

              }.layoutWeight(1).alignItems(HorizontalAlign.Start).padding({ left: 16 })

            }.width('100%').padding(8)

          }.onClick(() => {

            router.pushUrl({ url: 'pages/NowPlayingPage' })

          })

        })

      }.width('100%')

    }.width('100%')

  }



  @Builder

  AlbumsSection() {

    Column() {

      Text('Albums').fontSize(20).fontWeight(FontWeight.Bold).width('100%').padding({ left: 16, top: 16, bottom: 8 })

      Row() {

        ForEach(this.albums, (album: AlbumItem) => {

          Column() {

            Image(album.image).width(120).height(120)

            Text(album.title).fontSize(14).maxLines(1).textOverflow({ overflow: TextOverflow.Ellipsis })

            Text(album.artist).fontSize(12).fontColor(Color.Gray).maxLines(1).textOverflow({ overflow: TextOverflow.Ellipsis })

          }.width(120).margin({ right: 16 })

        })

      }.width('100%').padding({ left: 16 })

    }.width('100%')

  }



  @Builder

  ArtistsSection() {

    Column() {

      Text('Artists').fontSize(20).fontWeight(FontWeight.Bold).width('100%').padding({ left: 16, top: 16, bottom: 8 })

      Row() {

        ForEach(this.artists, (artist: ArtistItem) => {

          Column() {

            Image(artist.image).width(80).height(80).borderRadius(40)

            Text(artist.name).fontSize(14).maxLines(1).textOverflow({ overflow: TextOverflow.Ellipsis })

          }.width(80).margin({ right: 16 })

        })

      }.width('100%').padding({ left: 16 })

    }.width('100%')

  }

}