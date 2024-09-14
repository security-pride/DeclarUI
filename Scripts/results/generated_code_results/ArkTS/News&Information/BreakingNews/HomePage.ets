import router from '@ohos.router';

interface NewsItem {
  title: string;
  source: string;
  time: string;
}

@Entry
@Component
struct HomePage {
  @State currentTime: string = '';
  @State newsItems: NewsItem[] = [
    {
      title: '总统核定成立大法官提名审薦小组 擬明日開會',
      source: 'UDN.COM',
      time: '33分钟前'
    }
  ];

  aboutToAppear() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  }

  build() {
    Column() {
      Row() {
        Text(this.currentTime)
          .fontSize(16)
          .fontWeight(FontWeight.Bold)
        Blank()
        Image($r('app.media.template'))
          .width(20)
          .height(20)
        Image($r('app.media.template'))
          .width(20)
          .height(20)
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 8, bottom: 8 })

      Row() {
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Text('突发新闻')
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
          .margin({ left: 8 })
        Blank()
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Image($r('app.media.template'))
          .width(24)
          .height(24)
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 8, bottom: 8 })

      Row() {
        Text('选择您的城市')
          .fontSize(14)
        Blank()
        Image($r('app.media.template'))
          .width(20)
          .height(20)
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 8, bottom: 8 })

      Text('Mon, 15 M07 2024, 08:35')
        .fontSize(14)
        .width('100%')
        .padding({ left: 16, right: 16, top: 8, bottom: 8 })

      Scroll() {
        Column() {
          ForEach(this.newsItems, (item: NewsItem) => {
            Column() {
              Text(item.title)
                .fontSize(18)
                .fontWeight(FontWeight.Bold)
                .width('100%')
                .margin({ bottom: 8 })
              Row() {
                Text(item.source)
                  .fontSize(14)
                Text(item.time)
                  .fontSize(14)
                  .margin({ left: 8 })
              }
            }
            .width('100%')
            .padding(16)
            .backgroundColor('#F0F0F0')
            .borderRadius(8)
            .margin({ bottom: 16 })
          })

          Text('广告')
            .fontSize(14)
            .width('100%')
            .textAlign(TextAlign.Center)
            .margin({ top: 16, bottom: 8 })

          Image($r('app.media.template'))
            .width('100%')
            .height(200)
            .objectFit(ImageFit.Cover)
        }
      }
      .width('100%')
      .layoutWeight(1)

      Row() {
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('新闻').fontSize(12)
        }.layoutWeight(1).onClick(() => {
          // Handle news tab click
        })

        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('话题墙').fontSize(12)
        }.layoutWeight(1).onClick(() => {
          // Handle topic wall tab click
        })

        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('BELOUD').fontSize(12)
        }.layoutWeight(1).onClick(() => {
          // Handle BELOUD tab click
        })

        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('提醒').fontSize(12)
        }.layoutWeight(1).onClick(() => {
          router.pushUrl({ url: 'pages/NoticePage' })
        })

        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('更多').fontSize(12)
        }.layoutWeight(1).onClick(() => {
          router.pushUrl({ url: 'pages/MoreDetailsPage' })
        })
      }
      .width('100%')
      .height('8%')
      .backgroundColor(Color.White)
    }
  }
}