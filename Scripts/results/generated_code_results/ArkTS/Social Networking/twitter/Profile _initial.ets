import router from '@ohos.router';
import media from '@ohos.multimedia.media';
@Entry
@Component
struct ProfilePage {
@State followingCount: number = 217;
@State followerCount: number = 118;
@State currentTab: number = 0;
@State videoPlayer: media.VideoPlayer | null = null;
aboutToAppear() {
this.initVideoPlayer();
}
async initVideoPlayer() {
this.videoPlayer = await media.createVideoPlayer();
if (this.videoPlayer) {
this.videoPlayer.url = 'https://example.com/video.mp4';
this.videoPlayer.prepare();
}
}
build() {
Column() {
Stack({ alignContent: Alignment.TopStart }) {
Image($r('app.media.template'))
.width('100%')
.height(200)
.objectFit(ImageFit.Cover)
    Row() {
      Button() {
        Image($r('app.media.template'))
          .width(24)
          .height(24)
      }
      .width(40)
      .height(40)
      .type(ButtonType.Circle)
      .margin({ top: 50, left: 20 })
      .backgroundColor(Color.Transparent)
      .onClick(() => router.back())

      Text('Digital Goodies Team')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 50, left: 20 })
    }
  }

  Row() {
    Image($r('app.media.template'))
      .width(80)
      .height(80)
      .borderRadius(40)
      .margin({ top: -40, left: 20 })

    Button('Edit profile')
      .fontSize(16)
      .fontColor(Color.Black)
      .backgroundColor(Color.White)
      .borderRadius(20)
      .margin({ top: 10, right: 20 })
      .width(120)
      .height(40)
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceBetween)

  Column() {
    Text('Pixsellz')
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
      .margin({ top: 10, left: 20 })

    Text('@pixsellz')
      .fontSize(16)
      .fontColor(Color.Gray)
      .margin({ top: 5, left: 20 })

    Text('Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations')
      .fontSize(16)
      .margin({ top: 10, left: 20, right: 20 })

    Row() {
      Image($r('app.media.template'))
        .width(20)
        .height(20)
      Text('pixsellz.io')
        .fontSize(16)
        .fontColor(Color.Blue)
        .margin({ left: 5 })
    }
    .margin({ top: 10, left: 20 })

    Row() {
      Image($r('app.media.template'))
        .width(20)
        .height(20)
      Text('Joined September 2018')
        .fontSize(16)
        .margin({ left: 5 })
    }
    .margin({ top: 10, left: 20 })

    Row() {
      Text(`${this.followingCount} Following`)
        .fontSize(16)
        .margin({ right: 20 })
      Text(`${this.followerCount} Followers`)
        .fontSize(16)
    }
    .margin({ top: 10, left: 20 })
  }

  Tabs() {
    TabContent() {
      Column() {
        Row() {
          Image($r('app.media.template'))
            .width(20)
            .height(20)
          Text('Pinned Tweet')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ left: 5 })
        }
        .margin({ top: 20, left: 20 })

        Column() {
          Text('Pixsellz @pixsellz 7/31/19')
            .fontSize(16)
            .margin({ top: 10 })
          Text('Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design!')
            .fontSize(16)
            .margin({ top: 5 })
          Text('constructor.pixsellz.io')
            .fontSize(16)
            .fontColor(Color.Blue)
            .margin({ top: 5 })
          Text('#prototyping #wireframe #uiux #ux')
            .fontSize(16)
            .fontColor(Color.Blue)
            .margin({ top: 5 })

          Stack({ alignContent: Alignment.Center }) {
            Video({
              src: 'https://example.com/video.mp4',
              controller: this.videoPlayer
            })
              .width('100%')
              .height(200)
              .objectFit(ImageFit.Cover)
            Image($r('app.media.template'))
              .width(50)
              .height(50)
          }
          .width('100%')
          .height(200)
          .margin({ top: 10 })

          Row() {
            Text('109 views')
              .fontSize(14)
              .fontColor(Color.Gray)
          }
          .margin({ top: 5 })

          Row() {
            Image($r('app.media.template'))
              .width(20)
              .height(20)
            Text('2')
              .fontSize(14)
              .margin({ left: 5 })

            Image($r('app.media.template'))
              .width(20)
              .height(20)
              .margin({ left: 20 })
            Text('2')
              .fontSize(14)
              .margin({ left: 5 })

            Image($r('app.media.template'))
              .width(20)
              .height(20)
              .margin({ left: 20 })
            Text('15')
              .fontSize(14)
              .margin({ left: 5 })

            Image($r('app.media.template'))
              .width(20)
              .height(20)
              .margin({ left: 20 })
          }
          .margin({ top: 10 })
        }
        .padding(20)
        .backgroundColor(Color.White)
        .borderRadius(10)
        .margin({ top: 10, left: 20, right: 20 })
      }
    }.tabBar('Tweets')

    TabContent() {
      Text('Tweets & replies content')
    }.tabBar('Tweets & replies')

    TabContent() {
      Text('Media content')
    }.tabBar('Media')

    TabContent() {
      Text('Likes content')
    }.tabBar('Likes')
  }
  .barMode(BarMode.Scrollable)
  .onChange((index: number) => {
    this.currentTab = index;
  })

  Row() {
    Button() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
    }
    .width(60)
    .height(60)
    .type(ButtonType.Circle)
    .backgroundColor('#1DA1F2')
    .margin({ bottom: 20, right: 20 })
  }
  .width('100%')
  .justifyContent(FlexAlign.End)
  .position({ y: '100%' })
  .translate({ y: -80 })
}
.width('100%')
.height('100%')
.backgroundColor('#F0F0F0')
}
}