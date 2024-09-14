import router from '@ohos.router';



interface MeditationItem {

  title: string;

  type: string;

  duration: string;

  description: string;

  icon: Resource;

}



@Entry

@Component

struct CalmMethodsPage {

  @State meditationItems: MeditationItem[] = [

    {

      title: 'Feeling Overwhelmed SOS',

      type: 'Meditation',

      duration: '3-4 min',

      description: 'Give yourself room to breathe.',

      icon: $r('app.media.template')

    },

    {

      title: 'Panicking SOS',

      type: 'Meditation',

      duration: '3 min',

      description: 'Anchor your mind and body in the present.',

      icon: $r('app.media.template')

    },

    {

      title: 'Breathe',

      type: 'Meditation',

      duration: '1-3 min',

      description: 'Add a sense of spaciousness to your day.',

      icon: $r('app.media.template')

    },

    {

      title: 'Reset',

      type: 'Meditation',

      duration: '3-10 min',

      description: 'Find some focus and relaxation during a busy day.',

      icon: $r('app.media.template')

    }

  ]



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Text('00:43').fontSize(16).margin({ left: 8 })

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24).margin({ left: 8 })

        Text('94%').fontSize(16).margin({ left: 8 })

      }.width('100%').padding(16).backgroundColor('#0078D4')



      Text('Calming Everyday Anxiety')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

        .width('100%')

        .textAlign(TextAlign.Center)

        .margin({ top: 16, bottom: 8 })



      Text('Get in-the-moment support for anxious thinking, plus expert guidance for cultivating a calmer mind every day.')

        .fontSize(16)

        .textAlign(TextAlign.Center)

        .padding({ left: 16, right: 16 })

        .margin({ bottom: 24 })



      Text('SOS for Anxious Moments')

        .fontSize(20)

        .fontWeight(FontWeight.Bold)

        .alignSelf(ItemAlign.Start)

        .margin({ left: 16, bottom: 16 })



      List() {

        ForEach(this.meditationItems, (item: MeditationItem) => {

          ListItem() {

            Row() {

              Image(item.icon)

                .width(80)

                .height(80)

                .borderRadius(8)

                .margin({ right: 16 })

              Column() {

                Text(item.title)

                  .fontSize(18)

                  .fontWeight(FontWeight.Bold)

                Row() {

                  Image($r('app.media.template')).width(20).height(20)

                  Text(`${item.type} • ${item.duration}`)

                    .fontSize(14)

                    .margin({ left: 8 })

                }.margin({ top: 4, bottom: 4 })

                Text(item.description)

                  .fontSize(14)

                  .opacity(0.6)

              }.alignItems(HorizontalAlign.Start)

            }

            .width('100%')

            .padding(16)

            .backgroundColor(Color.White)

            .borderRadius(8)

            .margin({ bottom: 16 })

          }

        })

      }

      .width('100%')

      .height('85%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Today').fontSize(12)

        }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/HomePage' }))



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Explore').fontSize(12)

        }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/ExplorePage' }))



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('子骄').fontSize(12)

        }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/ProfilePage' }))

      }

      .width('100%')

      .height('8%')

      .position({ y: '92%' })

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}