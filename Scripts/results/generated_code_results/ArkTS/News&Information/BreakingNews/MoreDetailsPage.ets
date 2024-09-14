import router from '@ohos.router';



@Entry

@Component

struct MoreDetailsPage {

  @State selectedTab: number = 0



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 16 })

        Text('更多')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16 })

      }

      .width('100%')

      .height(56)

      .backgroundColor('#F1F3F5')



      Scroll() {

        Column() {

          this.SettingsItem('设置', $r('app.media.template'))

          this.SettingsItem('同城', $r('app.media.template'))

          this.SettingsItem('我的话题', $r('app.media.template'))

          this.SettingsItem('已收藏的新闻', $r('app.media.template'))

          this.SettingsItem('消息', $r('app.media.template'))

          this.SettingsItem('公告', $r('app.media.template'))

          this.SettingsItem('分享应用', $r('app.media.template'))

          this.SettingsItem('隐私政策', $r('app.media.template'))

          this.SettingsItem('支持我们', $r('app.media.template'))

          this.SettingsItem('常见问题解答', $r('app.media.template'))

          Button('退出应用')

            .width('90%')

            .height(50)

            .margin({ top: 20, bottom: 20 })

            .backgroundColor('#FF0000')

            .fontColor(Color.White)

        }

      }

      .height('80%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('新闻').fontSize(12)

        }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/HomePage' }))



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('话题墙').fontSize(12)

        }.layoutWeight(1)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('BELOUD').fontSize(12)

        }.layoutWeight(1)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('提醒').fontSize(12)

        }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/NoticePage' }))



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('更多').fontSize(12)

        }.layoutWeight(1)

      }

      .width('100%')

      .height('10%')

      .backgroundColor('#F1F3F5')

    }

  }



  @Builder

  SettingsItem(title: string, icon: Resource) {

    Row() {

      Image(icon)

        .width(24)

        .height(24)

        .margin({ right: 16 })

      Text(title)

        .fontSize(16)

      Blank()

      Image($r('app.media.template'))

        .width(24)

        .height(24)

    }

    .width('100%')

    .height(56)

    .padding({ left: 16, right: 16 })

    .backgroundColor(Color.White)

    .onClick(() => {

      if (title === '设置') {

        router.pushUrl({ url: 'pages/SettingsPage' })

      } else if (title === '公告') {

        router.pushUrl({ url: 'pages/NoticePage' })

      }

    })

  }

}