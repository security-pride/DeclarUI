import router from '@ohos.router';



interface SearchResult {

  name: string;

  fullName: string;

  followers: string;

  followButton: boolean;

}



@Entry

@Component

struct SearchPage {

  @State searchResults: SearchResult[] = [

    { name: 'aura', fullName: 'Aura Brown', followers: '500 mil', followButton: true },

    { name: 'rick', fullName: 'Rick Wright', followers: '500 mil', followButton: true },

    { name: 'mike', fullName: 'Mike Torello', followers: '500 mil', followButton: true },

    { name: 'theodore', fullName: 'Theodore T.C. Calvin', followers: '500 mil', followButton: true },

    { name: 'kate', fullName: 'Kate Tanner', followers: '500 mil', followButton: true },

    { name: 'thomas', fullName: 'Thomas Magnum', followers: '500 mil', followButton: true },

    { name: 'april', fullName: 'April Curtis', followers: '500 mil', followButton: true }

  ]



  build() {

    Column() {

      Row() {

        Text('Search')

          .fontSize(24)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16, top: 18 })

      }

      .width('100%')

      .height(55)



      TextInput({ placeholder: 'Search' })

        .width('90%')

        .height(40)

        .backgroundColor('#1C1C1E')

        .margin({ top: 10, bottom: 20 })

        .padding({ left: 10 })



      List() {

        ForEach(this.searchResults, (item: SearchResult) => {

          ListItem() {

            Row() {

              Column() {

                Text(item.name)

                  .fontSize(16)

                  .fontColor(Color.White)

                Text(item.fullName)

                  .fontSize(14)

                  .fontColor(Color.Gray)

                Text(item.followers + ' followers')

                  .fontSize(14)

                  .fontColor(Color.Gray)

              }

              .alignItems(HorizontalAlign.Start)

              .layoutWeight(1)



              Button('Follow', { type: ButtonType.Normal })

                .width(100)

                .height(36)

                .backgroundColor(Color.Gray)

                .fontColor(Color.White)

            }

            .width('100%')

            .padding(10)

            .onClick(() => {

              router.pushUrl({ url: 'pages/UserProfilePage' })

            })

          }

        })

      }

      .layoutWeight(1)



      Row() {

        Image($r('app.media.template'))

          .width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/FeedPage' }))

        Image($r('app.media.template'))

          .width(24).height(24)

        Image($r('app.media.template'))

          .width(24).height(24)

        Image($r('app.media.template'))

          .width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/ActivityPage' }))

        Image($r('app.media.template'))

          .width(24).height(24)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .position({ y: 2290 })

      .height(50)

      .backgroundColor(Color.Black)

    }

    .width('100%')

    .height('100%')

    .backgroundColor(Color.Black)

  }

}