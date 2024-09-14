import router from '@ohos.router';



interface UserInfo {

  name: string;

  username: string;

  website: string;

  bio: string;

  email: string;

  followers: number;

  profilePicture: Resource;

}



interface Post {

  content: string;

  stats: {

    answers: number;

    likes: number;

  };

  timeAgo: string;

}



@Entry

@Component

struct UserProfilePage {

  @State userInfo: UserInfo = {

    name: 'Alisson Rochinski',

    username: 'arochinski',

    website: 'threads.net',

    bio: "UI Designer | Let's redesign the world",

    email: 'alisson.rochinski@gmail.com',

    followers: 2957,

    profilePicture: $r('app.media.template')

  }

  @State posts: Post[] = [{

    content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

    stats: { answers: 7, likes: 59 },

    timeAgo: '2 min'

  }]

  @State currentTab: number = 0



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(40).height(40)

          .margin({ left: 16, top: 7 })

          .onClick(() => router.back())

        Text('Voltar')

          .fontSize(16)

          .fontColor(Color.White)

          .margin({ left: 8, top: 10 })

        Blank()

        Image($r('app.media.template'))

          .width(30).height(30)

          .margin({ right: 16, top: 10 })

        Image($r('app.media.template'))

          .width(30).height(30)

          .margin({ right: 16, top: 10 })

      }.width('100%').height(50)



      Column() {

        Image(this.userInfo.profilePicture)

          .width(100).height(100)

          .borderRadius(50)

          .margin({ top: 20 })

        Text(this.userInfo.name)

          .fontSize(24)

          .fontWeight(FontWeight.Bold)

          .margin({ top: 10 })

        Text(this.userInfo.username)

          .fontSize(16)

          .fontColor(Color.Gray)

        Text(this.userInfo.website)

          .fontSize(16)

          .fontColor(Color.Blue)

          .margin({ top: 5 })

        Text(this.userInfo.bio)

          .fontSize(16)

          .margin({ top: 5 })

        Text(this.userInfo.email)

          .fontSize(16)

          .fontColor(Color.Gray)

          .margin({ top: 5 })

        Row() {

          Image($r('app.media.template'))

            .width(20).height(20)

          Text(this.userInfo.followers + ' seguidores')

            .fontSize(16)

            .margin({ left: 5 })

        }.margin({ top: 10 })

      }.alignItems(HorizontalAlign.Center)



      Button('Follow', { type: ButtonType.Normal })

        .width('90%')

        .height(40)

        .backgroundColor(Color.White)

        .fontColor(Color.Black)

        .margin({ top: 20 })



      Tabs() {

        TabContent() {

          this.PostList()

        }.tabBar('Chirps')

        TabContent() {

          this.PostList()

        }.tabBar('Answers')

      }.barMode(BarMode.Fixed)

        .barWidth('100%')

        .barHeight(50)

        .animationDuration(300)

        .onChange((index: number) => {

          this.currentTab = index

        })



      Row() {

        Image($r('app.media.template'))

          .width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/FeedPage' }))

        Image($r('app.media.template'))

          .width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/SearchPage' }))

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



  @Builder

  PostList() {

    List() {

      ForEach(this.posts, (post: Post) => {

        ListItem() {

          Column() {

            Row() {

              Image(this.userInfo.profilePicture)

                .width(40).height(40)

                .borderRadius(20)

              Column() {

                Text(this.userInfo.username)

                  .fontSize(16)

                  .fontWeight(FontWeight.Bold)

                  .fontColor(Color.White)

                Text(post.timeAgo)

                  .fontSize(14)

                  .fontColor(Color.Gray)

              }.alignItems(HorizontalAlign.Start)

              .margin({ left: 10 })

              Blank()

              Image($r('app.media.template'))

                .width(20).height(20)

            }.width('100%').padding(10)

            Text(post.content)

              .fontSize(16)

              .fontColor(Color.White)

              .margin(10)

            Row() {

              Image($r('app.media.template'))

                .width(20).height(20)

              Image($r('app.media.template'))

                .width(20).height(20)

              Image($r('app.media.template'))

                .width(20).height(20)

              Image($r('app.media.template'))

                .width(20).height(20)

              Blank()

              Text(post.stats.answers + ' answers')

                .fontSize(14)

                .fontColor(Color.Gray)

              Text(post.stats.likes + ' likes')

                .fontSize(14)

                .fontColor(Color.Gray)

                .margin({ left: 10 })

            }.width('100%').padding(10)

          }

          .backgroundColor(Color.Black)

          .borderRadius(10)

          .margin({ bottom: 10 })

        }

      })

    }

    .width('100%')

    .layoutWeight(1)

  }

}