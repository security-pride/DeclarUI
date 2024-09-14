import router from '@ohos.router';



interface Post {

  user: string;

  content: string;

  image?: boolean;

  stats: {

    answers: number;

    likes: number;

  };

  timeAgo: string;

}



@Entry

@Component

struct FeedPage {

  @State posts: Post[] = [

    {

      user: 'arochinski',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      image: true,

      stats: { answers: 7, likes: 59 },

      timeAgo: '2 min'

    },

    {

      user: 'arochinski',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      stats: { answers: 7, likes: 59 },

      timeAgo: '2 min'

    },

    {

      user: 'aura',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      stats: { answers: 0, likes: 0 },

      timeAgo: '1min'

    }

  ]



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(30).height(30)

        Blank()

        Image($r('app.media.template')).width(30).height(30)

      }.width('100%').height(50).padding({ left: 16, right: 16 })



      Scroll() {

        Column() {

          ForEach(this.posts, (post: Post) => {

            this.PostCard(post)

          })

        }.width('100%')

      }.layoutWeight(1)



      Row() {

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent).onClick(() => router.pushUrl({ url: 'pages/FeedPage' }))

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent).onClick(() => router.pushUrl({ url: 'pages/SearchPage' }))

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent)

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent).onClick(() => router.pushUrl({ url: 'pages/ActivityPage' }))

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent).onClick(() => router.pushUrl({ url: 'pages/ProfilePage' }))

      }.width('100%').height(50).justifyContent(FlexAlign.SpaceAround).backgroundColor(Color.White)

    }

  }



  @Builder

  PostCard(post: Post) {

    Column() {

      Row() {

        Image($r('app.media.template')).width(40).height(40).borderRadius(20)

        Column() {

          Text(post.user).fontWeight(FontWeight.Bold)

          Text(post.timeAgo).fontSize(12).fontColor(Color.Gray)

        }.alignItems(HorizontalAlign.Start).margin({ left: 10 })

        Blank()

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(20).height(20)

        }.backgroundColor(Color.Transparent)

      }.width('100%').padding({ left: 16, right: 16, top: 10, bottom: 10 })



      Text(post.content)

        .width('100%')

        .textAlign(TextAlign.Start)

        .padding({ left: 16, right: 16 })



      if (post.image) {

        Image($r('app.media.template'))

          .width('90%')

          .aspectRatio(1)

          .borderRadius(10)

          .margin({ top: 10, bottom: 10 })

      }



      Row() {

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent)

        Text(post.stats.likes.toString()).fontSize(14).margin({ left: 5 })

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent).margin({ left: 20 })

        Text(post.stats.answers.toString()).fontSize(14).margin({ left: 5 })

        Blank()

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent)

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.backgroundColor(Color.Transparent)

      }.width('100%').padding({ left: 16, right: 16, top: 10, bottom: 10 })

    }.width('100%').backgroundColor(Color.White).margin({ bottom: 10 })

  }

}