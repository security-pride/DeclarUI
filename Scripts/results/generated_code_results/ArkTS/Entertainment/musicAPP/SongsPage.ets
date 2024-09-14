import router from '@ohos.router';



interface Song {

  title: string;

  artist: string;

  cover: Resource;

}



@Entry

@Component

struct SongsPage {

  @State songs: Song[] = [

    { title: 'Billie Jean', artist: 'Michael Jackson', cover: $r('app.media.template') },

    { title: 'Be the girl', artist: 'Bebe Rexa', cover: $r('app.media.template') },

    { title: 'Countryman', artist: 'Daughtry', cover: $r('app.media.template') },

    { title: 'Do you feel loveliness', artist: 'Marc Anthony', cover: $r('app.media.template') },

    { title: 'Earth song', artist: 'Michael Jackson', cover: $r('app.media.template') },

    { title: 'Smooth criminal', artist: 'Michael Jackson', cover: $r('app.media.template') },

    { title: 'The way you make me feel', artist: 'Michael Jackson', cover: $r('app.media.template') },

    { title: 'Somebody that I used to know', artist: 'Gotye', cover: $r('app.media.template') },

    { title: 'Wild Thoughts', artist: 'Michael', cover: $r('app.media.template') }

  ]



  @Builder

  SongItem(song: Song) {

    Row() {

      Image(song.cover)

        .width(50)

        .height(50)

        .borderRadius(25)

      Column() {

        Text(song.title)

          .fontSize(16)

          .fontColor(Color.White)

        Text(song.artist)

          .fontSize(14)

          .fontColor(Color.Gray)

      }.layoutWeight(1).alignItems(HorizontalAlign.Start).margin({ left: 10 })

      Image($r('app.media.template'))

        .width(20)

        .height(20)

    }

    .width('100%')

    .height(70)

    .onClick(() => {

      router.pushUrl({ url: 'pages/PlaySongPage' })

    })

  }



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

        Image($r('app.media.template')).width(24).height(24)

        Text('Songs').fontSize(20).fontColor(Color.White)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').padding(10)



      Row() {

        ForEach(['All Songs', 'Playlists', 'Albums', 'Artists', 'Genre'], (tab: string) => {

          Text(tab)

            .fontColor(tab === 'All Songs' ? '#FF69B4' : Color.Gray)

            .fontSize(16)

            .padding(10)

            .onClick(() => {

              if (tab === 'Albums') {

                router.pushUrl({ url: 'pages/AlbumsPage' })

              }

            })

        })

      }.width('100%')



      List() {

        ForEach(this.songs, (song: Song) => {

          ListItem() {

            this.SongItem(song)

          }

        })

      }

      .width('100%')

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12).fontColor(Color.Gray)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        })

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Songs').fontSize(12).fontColor('#FF69B4')

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Settings').fontSize(12).fontColor(Color.Gray)

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

        }.layoutWeight(1).alignItems(HorizontalAlign.Start).margin({ left: 10 })

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