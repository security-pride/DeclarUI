import router from '@ohos.router';



interface Post {

  user: string;

  content: string;

  image?: Resource;

  timeAgo: string;

  likes: number;

  answers: number;

}



@Entry

@Component

struct FeedPage {

  @State posts: Post[] = [

    {

      user: 'arochinski',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      image: $r('app.media.template'),

      timeAgo: '2 min',

      likes: 59,

      answers: 7

    },

    {

      user: 'arochinski',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      timeAgo: '2 min',

      likes: 59,

      answers: 7

    },

    {

      user: 'aura',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      timeAgo: '1min',

      likes: 0,

      answers: 0

    }

  ]



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(50)

          .height(50)

          .margin({ left: 28, top: 0 })

        Blank()

        Image($r('app.media.template'))

          .width(25)

          .height(25)

          .margin({ right: 28, top: 18 })

      }.width('100%').height(50)



      List() {

        ForEach(this.posts, (post: Post) => {

          ListItem() {

            this.PostItem(post)

          }

        })

      }.width('100%').layoutWeight(1)



      Row() {

        ForEach(['Home', 'Search', 'Create', 'Likes', 'Profile'], (item: string) => {

          Button({ type: ButtonType.Normal }) {

            Image($r('app.media.template')).width(24).height(24)

          }.width(70).height(50).backgroundColor(Color.Transparent)

            .onClick(() => {

              if (item === 'Search') {

                router.pushUrl({ url: 'pages/SearchPage' })

              } else if (item === 'Profile') {

                router.pushUrl({ url: 'pages/ProfilePage' })

              } else if (item === 'Likes') {

                router.pushUrl({ url: 'pages/ActivityPage' })

              }

            })

        })

      }.width('100%').height(50).position({ y: 2290 }).backgroundColor(Color.White)

    }.width('100%').height('100%').backgroundColor('#000000')

  }



  @Builder

  PostItem(post: Post) {

    Column() {

      Row() {

        Image($r('app.media.template')).width(40).height(40).borderRadius(20)

        Column() {

          Text(post.user).fontSize(16).fontWeight(FontWeight.Bold).fontColor(Color.White)

          Text(post.timeAgo).fontSize(14).fontColor(Color.Gray)

        }.alignItems(HorizontalAlign.Start).margin({ left: 10 })

        Blank()

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.width(40).height(40).backgroundColor(Color.Transparent)

      }.width('100%').padding({ left: 16, right: 16, top: 10, bottom: 10 })



      Text(post.content)

        .fontSize(16)

        .fontColor(Color.White)

        .width('100%')

        .padding({ left: 16, right: 16, bottom: 10 })

        .textAlign(TextAlign.Start)



      if (post.image) {

        Image(post.image)

          .width('90%')

          .height(280)

          .objectFit(ImageFit.Cover)

          .borderRadius(10)

          .margin({ bottom: 10 })

      }



      Row() {

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.width(40).height(40).backgroundColor(Color.Transparent)

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.width(40).height(40).backgroundColor(Color.Transparent)

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.width(40).height(40).backgroundColor(Color.Transparent)

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.width(40).height(40).backgroundColor(Color.Transparent)

        Blank()

        Text(post.answers.toString() + ' answers').fontSize(14).fontColor(Color.Gray)

        Text(post.likes.toString() + ' likes').fontSize(14).fontColor(Color.Gray).margin({ left: 10 })

      }.width('100%').padding({ left: 16, right: 16, bottom: 10 })



      Divider().color(Color.Gray).opacity(0.6)

    }.width('100%').backgroundColor('#000000')

  }

}