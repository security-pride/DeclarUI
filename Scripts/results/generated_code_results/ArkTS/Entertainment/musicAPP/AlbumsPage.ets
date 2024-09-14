import router from '@ohos.router';



interface Album {

  name: string;

  artist: string;

  songs: number;

  cover: Resource;

}



@Entry

@Component

struct AlbumsPage {

  @State albums: Album[] = [

    { name: 'History', artist: 'Michael Jackson', songs: 10, cover: $r('app.media.template') },

    { name: 'Thriller', artist: 'Michael Jackson', songs: 10, cover: $r('app.media.template') },

    { name: "It Won't Be Soon..", artist: 'Maroon 5', songs: 10, cover: $r('app.media.template') },

    { name: 'I Am... Yours', artist: 'Beyonce', songs: 10, cover: $r('app.media.template') }

  ];



  @Builder

  AlbumItem(album: Album) {

    Column() {

      Image(album.cover)

        .width(150)

        .height(150)

        .objectFit(ImageFit.Cover)

      Text(album.name).fontSize(16).margin({ top: 8 })

      Text(album.artist).fontSize(14).fontColor(Color.Gray)

      Text(`${album.songs} Songs`).fontSize(12).fontColor(Color.Gray)

    }.onClick(() => {

      router.pushUrl({ url: 'pages/AlbumsDetailsPage', params: { album: album } })

    })

  }



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

        Image($r('app.media.template')).width(24).height(24)

        Text('Songs').fontSize(20).fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').padding(10)



      Tabs({ barPosition: BarPosition.Start }) {

        TabContent() {

          Grid() {

            ForEach(this.albums, (album: Album) => {

              GridItem() {

                this.AlbumItem(album)

              }

            })

          }

          .columnsTemplate('1fr 1fr')

          .rowsGap(20)

          .columnsGap(20)

          .padding(10)

        }.tabBar('Albums')



        TabContent() {}.tabBar('All Songs')

        TabContent() {}.tabBar('Playlists')

        TabContent() {}.tabBar('Artists')

        TabContent() {}.tabBar('Genre')

      }

      .barMode(BarMode.Scrollable)

      .backgroundColor(Color.White)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12)

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Songs').fontSize(12).fontColor(Color.Red)

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Settings').fontSize(12)

        }

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .position({ y: '100%' })

      .translate({ y: -60 })



      Row() {

        Image($r('app.media.template')).width(40).height(40)

        Column() {

          Text('Now Playing').fontSize(14)

          Text('Artist - Song').fontSize(12)

        }.layoutWeight(1)

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

      }

      .width('100%')

      .height(60)

      .padding(10)

      .backgroundColor('#F0F0F0')

      .position({ y: '100%' })

      .translate({ y: -60 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor(Color.White)

  }

}