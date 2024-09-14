import router from '@ohos.router';



@Entry

@Component

struct SearchPage {

  @State searchText: string = '';

  @State recentSearches: string[] = ['Designers', 'Dasha Taran', 'Billie Eilish'];

  @State selectedFilter: string = 'Chats';



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 16 })

          .onClick(() => router.back())

        TextInput({ placeholder: 'Search...', text: this.searchText })

          .width('80%')

          .height(40)

          .backgroundColor(Color.White)

          .onChange((value: string) => {

            this.searchText = value;

          })

      }.width('100%').padding(16).backgroundColor(Color.White)



      Row() {

        ForEach(['Chats', 'Photos', 'Videos'], (filter: string) => {

          Button(filter)

            .backgroundColor(this.selectedFilter === filter ? '#E0E0E0' : Color.White)

            .fontColor(Color.Black)

            .onClick(() => {

              this.selectedFilter = filter;

            })

        })

      }.width('100%').padding(8).justifyContent(FlexAlign.SpaceAround)



      Column() {

        Row() {

          Text('Recent searches')

            .fontSize(16)

            .fontWeight(FontWeight.Bold)

          Blank()

          Button('Clear all')

            .fontColor(Color.Blue)

            .backgroundColor(Color.Transparent)

            .onClick(() => {

              this.recentSearches = [];

            })

        }.width('100%').padding({ left: 16, right: 16, top: 16, bottom: 8 })



        List() {

          ForEach(this.recentSearches, (search: string) => {

            ListItem() {

              Row() {

                Image($r('app.media.template'))

                  .width(20)

                  .height(20)

                  .margin({ right: 16 })

                Text(search)

                Blank()

                Button() {

                  Image($r('app.media.template'))

                    .width(20)

                    .height(20)

                }.backgroundColor(Color.Transparent)

                 .onClick(() => {

                   this.recentSearches = this.recentSearches.filter(item => item !== search);

                 })

              }.width('100%').padding(16)

            }

          })

        }.width('100%')

      }.width('100%').backgroundColor(Color.White)



      Blank()



      Column() {

        Row() {

          ForEach(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], (key: string) => {

            Button(key)

              .width('10%')

              .height(40)

              .backgroundColor(Color.White)

              .fontColor(Color.Black)

          })

        }.width('100%')



        Row() {

          ForEach(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], (key: string) => {

            Button(key)

              .width('11%')

              .height(40)

              .backgroundColor(Color.White)

              .fontColor(Color.Black)

          })

        }.width('100%')



        Row() {

          Button('⇧')

            .width('15%')

            .height(40)

            .backgroundColor(Color.White)

            .fontColor(Color.Black)

          ForEach(['Z', 'X', 'C', 'V', 'B', 'N', 'M'], (key: string) => {

            Button(key)

              .width('10%')

              .height(40)

              .backgroundColor(Color.White)

              .fontColor(Color.Black)

          })

          Button('⌫')

            .width('15%')

            .height(40)

            .backgroundColor(Color.White)

            .fontColor(Color.Black)

        }.width('100%')



        Row() {

          Button('123')

            .width('25%')

            .height(40)

            .backgroundColor(Color.White)

            .fontColor(Color.Black)

          Button('space')

            .width('50%')

            .height(40)

            .backgroundColor(Color.White)

            .fontColor(Color.Black)

          Button('Go')

            .width('25%')

            .height(40)

            .backgroundColor(Color.White)

            .fontColor(Color.Black)

        }.width('100%')

      }.width('100%').backgroundColor('#E0E0E0')

    }

  }

}