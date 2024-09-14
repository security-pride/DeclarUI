import router from '@ohos.router';



interface Song {

  number: string;

  title: string;

  artist: string;

}



@Entry

@Component

struct PlaylistPage {

  @State songs: Song[] = [

    { number: '01.', title: 'Gully Boy', artist: 'Ranvir Sing' },

    { number: '02.', title: 'Apna Time Aayega', artist: 'Arijit Sing' },

    { number: '03.', title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D' },

    { number: '04.', title: 'Lagli Lahore Di', artist: 'Sreya Ghosal' },

    { number: '05.', title: 'Bezubaan Kab Se', artist: 'Kapal Dev' },

    { number: '06.', title: 'Nachi Nachi', artist: 'Sreya Ghoshal' }

  ]

  @State currentSong: Song = { number: '03.', title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D' }



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Text('9:41').fontSize(16).fontColor(Color.White)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').height(56).backgroundColor('#4285F4').padding({ left: 16, right: 16 })



      Column() {

        Text('Geri - Inder Chahal').fontSize(24).fontWeight(FontWeight.Bold).margin({ top: 16 })

        Text('Pop Songs').fontSize(16).fontColor(Color.Gray).margin({ top: 4 })



        Row() {

          Image($r('app.media.template')).width(120).height(120).borderRadius(8)

          Column() {

            Text('Songs').fontSize(14).fontColor(Color.Gray)

            Text('21 Songs').fontSize(16).fontWeight(FontWeight.Bold)

            Text('Author').fontSize(14).fontColor(Color.Gray).margin({ top: 8 })

            Text('Various Artits').fontSize(16).fontWeight(FontWeight.Bold)

          }.alignItems(HorizontalAlign.Start).margin({ left: 16 })

        }.margin({ top: 16 })



        Button({ type: ButtonType.Circle, stateEffect: true }) {

          Image($r('app.media.template')).width(24).height(24)

        }.width(56).height(56).margin({ top: 16 })



        List() {

          ForEach(this.songs, (song: Song) => {

            ListItem() {

              Row() {

                Text(song.number).fontSize(16).width(32)

                Column() {

                  Text(song.title).fontSize(16).fontWeight(FontWeight.Bold)

                  Text(song.artist).fontSize(14).fontColor(Color.Gray)

                }.alignItems(HorizontalAlign.Start).layoutWeight(1)

                Image($r('app.media.template')).width(24).height(24)

              }.width('100%').height(64).onClick(() => {

                router.pushUrl({ url: 'pages/NowPlayingPage' })

              })

            }

          })

        }.width('100%').height('60%')

      }.width('100%').height('100%').backgroundColor(Color.White).padding(16)



      Row() {

        Image($r('app.media.template')).width(48).height(48).borderRadius(8)

        Column() {

          Text(this.currentSong.title).fontSize(16).fontWeight(FontWeight.Bold)

          Text(this.currentSong.artist).fontSize(14).fontColor(Color.Gray)

        }.alignItems(HorizontalAlign.Start).layoutWeight(1).margin({ left: 16 })

        Image($r('app.media.template')).width(24).height(24)

        Button({ type: ButtonType.Circle, stateEffect: true }) {

          Image($r('app.media.template')).width(24).height(24)

        }.width(48).height(48).backgroundColor(Color.Transparent)

      }.width('100%').height(80).backgroundColor('#F0F0F0').padding({ left: 16, right: 16 })

    }.width('100%').height('100%')

  }

}