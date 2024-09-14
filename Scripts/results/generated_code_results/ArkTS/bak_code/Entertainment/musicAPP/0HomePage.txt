import router from '@ohos.router';

interface Song {
  title: string;
  artist: string;
  rating?: number;
}

interface Playlist {
  name: string;
  artist: string;
  cover: Resource;
}

interface RecommendedItem {
  name: string;
  artist: string;
  cover: Resource;
}

@Entry
@Component
struct HomePage {
  @State hotRecommended: RecommendedItem[] = [
    { name: 'Sound of Sky', artist: 'Dilon Bruce', cover: $r('app.media.template') },
    { name: 'Girl on Fire', artist: 'Alecia Keys', cover: $r('app.media.template') }
  ];
  @State playlists: Playlist[] = [
    { name: 'Classic Playlist', artist: 'Piano Guys', cover: $r('app.media.template') },
    { name: 'Summer Playlist', artist: 'Dilon Bruce', cover: $r('app.media.template') },
    { name: 'Pop Music', artist: 'Michael Jackson', cover: $r('app.media.template') }
  ];
  @State recentlyPlayed: Song[] = [
    { title: 'Billie Jean', artist: 'Michael Jackson', rating: 5 },
    { title: 'Earth Song', artist: 'Michael Jackson', rating: 4 },
    { title: 'Mirror', artist: 'Justin Timberlake', rating: 3 },
    { title: 'Remember the Time', artist: 'Michael Jackson', rating: 4 }
  ];

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
        Search({ placeholder: 'Search album song' })
          .width('80%')
          .height(40)
          .backgroundColor('#333333')
          .placeholderColor(Color.Gray)
      }.width('100%').padding(10).backgroundColor('#191970')

      Scroll() {
        Column() {
          Text('Hot Recommended').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ top: 20, bottom: 10 })
          Row() {
            ForEach(this.hotRecommended, (item: RecommendedItem) => {
              Column() {
                Image(item.cover).width(160).height(160).borderRadius(10)
                Text(item.name).fontSize(16).fontColor(Color.White).margin({ top: 5 })
                Text(item.artist).fontSize(14).fontColor(Color.Gray)
              }.margin({ right: 10 })
            })
          }.width('100%').height(220)

          Row() {
            Text('Playlist').fontSize(20).fontWeight(FontWeight.Bold)
            Blank()
            Text('View All').fontSize(14).fontColor('#FF69B4')
          }.width('100%').margin({ top: 20, bottom: 10 })

          Row() {
            ForEach(this.playlists, (item: Playlist) => {
              Column() {
                Image(item.cover).width(100).height(100).borderRadius(10)
                Text(item.name).fontSize(14).fontColor(Color.White).margin({ top: 5 })
                Text(item.artist).fontSize(12).fontColor(Color.Gray)
              }.margin({ right: 10 })
            })
          }.width('100%').height(150)

          Row() {
            Text('Recently Played').fontSize(20).fontWeight(FontWeight.Bold)
            Blank()
            Text('View All').fontSize(14).fontColor('#FF69B4')
          }.width('100%').margin({ top: 20, bottom: 10 })

          Column() {
            ForEach(this.recentlyPlayed, (item: Song) => {
              Row() {
                Image($r('app.media.template')).width(40).height(40).margin({ right: 10 })
                Column() {
                  Text(item.title).fontSize(16).fontColor(Color.White)
                  Text(item.artist).fontSize(14).fontColor(Color.Gray)
                }
                Blank()
                ForEach([1, 2, 3, 4, 5], (star: number) => {
                  Image($r('app.media.template'))
                    .width(16)
                    .height(16)
                    .opacity(star <= item.rating ? 1 : 0.3)
                })
              }
              .width('100%')
              .height(60)
              .onClick(() => {
                router.pushUrl({ url: 'pages/PlaySongPage' })
              })
            })
          }.width('100%')
        }.width('100%').padding({ left: 16, right: 16 })
      }.width('100%').layoutWeight(1)

      Row() {
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Home').fontSize(12).fontColor('#FF69B4')
        }.onClick(() => {
          router.pushUrl({ url: 'pages/HomePage' })
        })
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Songs').fontSize(12).fontColor(Color.Gray)
        }.onClick(() => {
          router.pushUrl({ url: 'pages/SongsPage' })
        })
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Settings').fontSize(12).fontColor(Color.Gray)
        }
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceAround)
      .backgroundColor('#000000')
      .padding({ top: 10, bottom: 10 })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#191970')
  }
}