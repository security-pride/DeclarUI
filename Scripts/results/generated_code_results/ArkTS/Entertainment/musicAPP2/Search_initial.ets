import router from '@ohos.router';



interface Song {

  title: string;

  artist: string;

  type: string;

  album?: string;

  year?: string;

  image: Resource;

}



interface Album {

  title: string;

  artist: string;

  image: Resource;

}



interface Artist {

  name: string;

  image: Resource;

}



@Entry

@Component

struct SearchPage {

  @State currentTime: string = '9:41';

  @State searchQuery: string = 'Gully Boy';

  @State mostPopular: Song = {

    title: 'Gully Boy',

    artist: 'Gully Boy',

    type: 'Song',

    image: $r('app.media.template')

  };

  @State songs: Song[] = [

    { title: 'Gully Gully Mein Gully Boy', artist: 'Gully Gully Mein Gully boy', type: 'Song', image: $r('app.media.template') },

    { title: 'Mere Gully Mein', artist: 'Mere Gully Mein', type: 'Song', image: $r('app.media.template') },

    { title: 'Ashli Hip Hip', artist: 'Gully Boy', type: 'Album', year: '2019', image: $r('app.media.template') },

    { title: 'Apna Time Aayega', artist: 'Gully Boy', type: 'Album', year: '2019', image: $r('app.media.template') },

    { title: 'Doori', artist: 'Gully Boy', type: 'Album', year: '2019', image: $r('app.media.template') }

  ];

  @State albums: Album[] = [

    { title: 'Gully Boy 2', artist: 'Various Artists', image: $r('app.media.template') },

    { title: 'Gully Boy Unlimi...', artist: 'Various Artists', image: $r('app.media.template') },

    { title: 'Hip Gully', artist: 'Various Artists', image: $r('app.media.template') }

  ];

  @State artists: Artist[] = [

    { name: 'Justin Bieber', image: $r('app.media.template') },

    { name: 'Michael Jackson', image: $r('app.media.template') },

    { name: 'Sam Smith', image: $r('app.media.template') }

  ];

  @State currentSong: Song = {

    title: 'Illegal Weapon 2.0',

    artist: 'Street Dancer 3D',

    type: 'Song',

    image: $r('app.media.template')

  };



  build() {

    Column() {

      Row() {

        Text(this.currentTime)

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

        Blank()

        Image($r('app.media.template')).width(20).height(20)

      }

      .width('100%')

      .padding({ left: 20, right: 20, top: 10 })



      Text('Search')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

        .margin({ top: 20, bottom: 10, left: 20 })



      TextInput({ placeholder: 'Gully Boy' })

        .width('90%')

        .height(40)

        .margin({ bottom: 20 })



      Scroll() {

        Column() {

          Text('Most Popular')

            .fontSize(20)

            .fontWeight(FontWeight.Bold)

            .alignSelf(ItemAlign.Start)

            .margin({ left: 20, bottom: 10 })



          Row() {

            Image(this.mostPopular.image)

              .width(60)

              .height(60)

              .borderRadius(8)

            Column() {

              Text(this.mostPopular.title)

                .fontSize(16)

                .fontWeight(FontWeight.Medium)

              Text(`${this.mostPopular.type} • ${this.mostPopular.artist}`)

                .fontSize(14)

                .fontColor(Color.Gray)

            }.alignItems(HorizontalAlign.Start)

            .margin({ left: 10 })

            Blank()

            Image($r('app.media.template')).width(24).height(24)

          }

          .width('90%')

          .padding(10)

          .borderRadius(8)

          .backgroundColor('#F0F0F0')

          .onClick(() => {

            router.pushUrl({ url: 'pages/NowPlayingPage' })

          })



          Row() {

            Text('Songs')

              .fontSize(20)

              .fontWeight(FontWeight.Bold)

            Blank()

            Text('Show All')

              .fontSize(14)

              .fontColor(Color.Blue)

          }

          .width('90%')

          .margin({ top: 20, bottom: 10 })



          ForEach(this.songs, (song: Song) => {

            Row() {

              Image(song.image)

                .width(60)

                .height(60)

                .borderRadius(8)

              Column() {

                Text(song.title)

                  .fontSize(16)

                  .fontWeight(FontWeight.Medium)

                Text(`${song.type} • ${song.artist}`)

                  .fontSize(14)

                  .fontColor(Color.Gray)

              }.alignItems(HorizontalAlign.Start)

              .margin({ left: 10 })

              Blank()

              Image($r('app.media.template')).width(24).height(24)

            }

            .width('90%')

            .padding(10)

            .borderRadius(8)

            .backgroundColor('#F0F0F0')

            .margin({ bottom: 10 })

            .onClick(() => {

              router.pushUrl({ url: 'pages/NowPlayingPage' })

            })

          })



          Text('Albums')

            .fontSize(20)

            .fontWeight(FontWeight.Bold)

            .alignSelf(ItemAlign.Start)

            .margin({ left: 20, top: 20, bottom: 10 })



          Row() {

            ForEach(this.albums, (album: Album) => {

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

          }.width('90%')



          Text('Artists')

            .fontSize(20)

            .fontWeight(FontWeight.Bold)

            .alignSelf(ItemAlign.Start)

            .margin({ left: 20, top: 20, bottom: 10 })



          Row() {

            ForEach(this.artists, (artist: Artist) => {

              Column() {

                Image(artist.image)

                  .width(100)

                  .height(100)

                  .borderRadius(50)

                Text(artist.name)

                  .fontSize(14)

                  .maxLines(1)

                  .textOverflow({ overflow: TextOverflow.Ellipsis })

              }.width('30%')

              .margin({ right: 10 })

            })

          }.width('90%')

        }

      }.layoutWeight(1)



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

        Image($r('app.media.template')).width(24).height(24).margin({ left: 10 })

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