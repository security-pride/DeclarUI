import router from '@ohos.router';
@Entry
@Component
struct Elections {
@State articles: Array<{
title: string,
summary: string,
time: string,
isVideo: boolean
}> = [
{
title: '43 seconds of chaos: How the assassination attempt on Trump unfolded',
summary: 'Minute-by-minute: Visual timeline of the Trump assassination attempt',
time: '5h ago',
isVideo: false
},
{
title: "'Let me get my shoes': What was said on stage in the seconds after Trump was shot",
summary: '',
time: '',
isVideo: false
},
{
title: 'Gunman was a few hundred feet away from Trump, CNN analysis shows',
summary: '',
time: '',
isVideo: false
},
{
title: "'He's got a gun!': Listen to audio of rally attendees as gunman is spotted",
summary: '',
time: '',
isVideo: true
}
];
build() {
Column() {
Text('Elections')
.fontSize(24)
.fontWeight(FontWeight.Bold)
.width('100%')
.textAlign(TextAlign.Center)
.margin({ top: 20, bottom: 20 })
  List() {
    ListItem() {
      Column() {
        Image($r('app.media.template'))
          .width('100%')
          .height(300)
          .objectFit(ImageFit.Cover)

        Text(this.articles[0].title)
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
          .margin({ top: 10, bottom: 5 })

        Text(this.articles[0].time)
          .fontSize(14)
          .fontColor(Color.Gray)

        Text(this.articles[0].summary)
          .fontSize(16)
          .margin({ top: 10, bottom: 10 })
      }
      .width('100%')
      .padding(10)
      .backgroundColor(Color.White)
      .borderRadius(8)
    }

    ForEach(this.articles.slice(1), (article, index) => {
      ListItem() {
        Column() {
          Text(article.title)
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 10, bottom: 5 })

          if (article.isVideo) {
            Text('VIDEO')
              .fontSize(14)
              .fontColor(Color.Red)
              .margin({ bottom: 5 })
          }
        }
        .width('100%')
        .padding(10)
        .backgroundColor(Color.White)
        .borderRadius(8)
      }
      .margin({ top: 10 })
    })
  }
  .width('100%')
  .height('85%')
  .margin({ top: 10 })
  .layoutWeight(1)

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Home' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Elections').fontSize(12).fontColor(Color.Blue)
    }

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Watch').fontSize(12)
    }

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Settings').fontSize(12)
    }.onClick(() => router.pushUrl({ url: 'pages/Settings' }))
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceAround)
  .backgroundColor(Color.White)
  .padding({ top: 5, bottom: 5 })
  .position({ y: '94%' })
}
.width('100%')
.height('100%')
.backgroundColor('#F2F3F5')
}
}