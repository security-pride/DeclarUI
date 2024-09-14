import router from '@ohos.router';

class UserInfo {
  name: string
  username: string
  website: string
  bio: string
  email: string
  followers: number

  constructor(name: string, username: string, website: string, bio: string, email: string, followers: number) {
    this.name = name;
    this.username = username;
    this.website = website;
    this.bio = bio;
    this.email = email;
    this.followers = followers;
  }
}

class PostStats {
  answers: number
  likes: number

  constructor(answers: number, likes: number) {
    this.answers = answers;
    this.likes = likes;
  }
}

class Post {
  content: string
  stats: PostStats
  timeAgo: string

  constructor(content: string, stats: PostStats, timeAgo: string) {
    this.content = content;
    this.stats = stats;
    this.timeAgo = timeAgo;
  }
}

@Entry
@Component
struct ProfilePage {
  @State userInfo: UserInfo = new UserInfo(
    'Alisson Rochinski',
    'arochinski',
    'threads.net',
    "UI Designer | Let's redesign the world",
    'alisson.rochinski@gmail.com',
    2957
  )

  @State posts: Post[] = [
    new Post(
      'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
      new PostStats(7, 59),
      '2 min'
    )
  ]

  @State currentTab: string = 'Chirps'

  build() {
    Column() {
      Row() {
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => {
            // Language selector functionality
          })
        Blank()
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => {
            // Instagram link functionality
          })
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => {
            // Menu button functionality
          })
      }
      .width('100%')
      .padding(16)
      .justifyContent(FlexAlign.SpaceBetween)

      Column() {
        Row() {
          Column() {
            Text(this.userInfo.name)
              .fontSize(20)
              .fontWeight(FontWeight.Bold)
            Text(this.userInfo.username)
              .fontSize(16)
              .fontColor(Color.Gray)
          }
          Blank()
          Image($r('app.media.template'))
            .width(80)
            .height(80)
            .borderRadius(40)
        }
        .width('100%')

        Text(this.userInfo.bio)
          .fontSize(16)
          .margin({ top: 12 })

        Text(this.userInfo.website)
          .fontSize(16)
          .fontColor(Color.Blue)
          .margin({ top: 4 })

        Text(this.userInfo.email)
          .fontSize(16)
          .fontColor(Color.Gray)
          .margin({ top: 4 })

        Text(`${this.userInfo.followers} seguidores`)
          .fontSize(16)
          .margin({ top: 12 })

        Row() {
          Button('Editar perfil')
            .width('48%')
            .backgroundColor(Color.Gray)
            .margin({ right: 8 })
          Button('Compartilhar Perfil')
            .width('48%')
            .backgroundColor(Color.Gray)
        }
        .width('100%')
        .margin({ top: 16 })
      }
      .padding(16)

      Row() {
        Text('Chirps')
          .fontSize(16)
          .fontWeight(this.currentTab === 'Chirps' ? FontWeight.Bold : FontWeight.Normal)
          .onClick(() => this.currentTab = 'Chirps')
        Text('Answers')
          .fontSize(16)
          .fontWeight(this.currentTab === 'Answers' ? FontWeight.Bold : FontWeight.Normal)
          .margin({ left: 16 })
          .onClick(() => this.currentTab = 'Answers')
      }
      .width('100%')
      .padding(16)

      List() {
        ForEach(this.posts, (post: Post) => {
          ListItem() {
            Column() {
              Text(post.content)
                .fontSize(16)
              Row() {
                Text(`${post.stats.answers} answers`)
                  .fontSize(14)
                  .fontColor(Color.Gray)
                Text(`${post.stats.likes} likes`)
                  .fontSize(14)
                  .fontColor(Color.Gray)
                  .margin({ left: 16 })
                Text(post.timeAgo)
                  .fontSize(14)
                  .fontColor(Color.Gray)
                  .margin({ left: 16 })
              }
              .width('100%')
              .margin({ top: 8 })
            }
            .width('100%')
            .padding(16)
            .backgroundColor(Color.White)
          }
        }, (item: Post) => item.content)
      }
      .width('100%')
      .layoutWeight(1)

      Row() {
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => router.pushUrl({ url: 'pages/FeedPage' }))
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => router.pushUrl({ url: 'pages/SearchPage' }))
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => {
            // Create functionality
          })
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => router.pushUrl({ url: 'pages/ActivityPage' }))
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => router.pushUrl({ url: 'pages/ProfilePage' }))
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceAround)
      .padding({ top: 12, bottom: 12 })
      .backgroundColor(Color.White)
    }
    .width('100%')
    .height('100%')
  }
}