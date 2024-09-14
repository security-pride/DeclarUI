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
      this.Header()
      List() {
        ForEach(this.posts, (post: Post) => {
          ListItem() {
            this.PostItem(post)
          }
        }, (post: Post) => post.user + post.timeAgo)
      }
      .layoutWeight(1)
      .width('100%')

      this.BottomNav()
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F1F1')
  }

  @Builder
  Header() {
    Row() {
      Image($r('app.media.template'))
        .width(30)
        .height(30)
        .margin({ right: 10 })
      Blank()
      Image($r('app.media.template'))
        .width(24)
        .height(24)
        .onClick(() => {
          router.pushUrl({ url: 'pages/ActivityPage' })
        })
    }
    .width('100%')
    .height(50)
    .padding({ left: 16, right: 16 })
    .backgroundColor(Color.White)
  }

  @Builder
  PostItem(post: Post) {
    Column() {
      Row() {
        Image($r('app.media.template'))
          .width(40)
          .height(40)
          .borderRadius(20)
          .onClick(() => {
            router.pushUrl({ url: 'pages/UserProfilePage', params: { username: post.user } })
          })
        Column() {
          Text(post.user)
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .onClick(() => {
              router.pushUrl({ url: 'pages/UserProfilePage', params: { username: post.user } })
            })
          Text(post.timeAgo)
            .fontSize(12)
            .fontColor(Color.Gray)
        }
        .alignItems(HorizontalAlign.Start)
        .margin({ left: 10 })
        Blank()
        Image($r('app.media.template'))
          .width(20)
          .height(20)
      }
      .width('100%')
      .padding({ top: 10, bottom: 10 })

      Text(post.content)
        .fontSize(14)
        .margin({ top: 5, bottom: 10 })

      if (post.image) {
        Image($r('app.media.template'))
          .width('100%')
          .height(200)
          .objectFit(ImageFit.Cover)
          .borderRadius(10)
      }

      Row() {
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Text(post.stats.answers.toString())
          .fontSize(14)
          .margin({ left: 5, right: 15 })
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Blank()
        Text(post.stats.likes.toString() + ' likes')
          .fontSize(14)
      }
      .width('100%')
      .margin({ top: 10 })
    }
    .width('100%')
    .padding({ left: 16, right: 16, top: 10, bottom: 10 })
    .backgroundColor(Color.White)
    .margin({ bottom: 10 })
  }

  @Builder
  BottomNav() {
    Row() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Image($r('app.media.template'))
        .width(24)
        .height(24)
        .onClick(() => {
          router.pushUrl({ url: 'pages/SearchPage' })
        })
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Image($r('app.media.template'))
        .width(24)
        .height(24)
        .onClick(() => {
          router.pushUrl({ url: 'pages/ProfilePage' })
        })
    }
    .width('100%')
    .height(50)
    .justifyContent(FlexAlign.SpaceAround)
    .backgroundColor(Color.White)
  }
}

interface Post {
  user: string
  content: string
  image?: boolean
  stats: {
    answers: number
    likes: number
  }
  timeAgo: string
}

import router from '@ohos.router'