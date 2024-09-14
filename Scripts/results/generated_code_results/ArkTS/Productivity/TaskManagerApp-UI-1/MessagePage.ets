import router from '@ohos.router';



interface Conversation {

  name: string;

  message: string;

  time: string;

}



@Entry

@Component

struct MessagePage {

  @State conversations: Conversation[] = [

    { name: 'Jonathan D. Dye', message: 'Hello', time: 'Now' },

    { name: 'Charles L. Wenner', message: 'Its need urgently', time: '10:00 am' },

    { name: 'Luther K. Cusack', message: 'Check this design', time: '04:00 pm' },

    { name: 'Devignedge UI Design T.', message: 'Hello, Manik are you there?', time: 'Yesterday' },

    { name: 'Gloria G. Johnson', message: 'Hi Nik', time: '3 day' },

    { name: 'Madge T. Crews', message: 'Check it', time: '04 Sep' },

    { name: 'Rosemary J. Strickland', message: '', time: '03 Sep' }

  ]



  build() {

    Column() {

      Row() {

        Text('9:41').fontSize(16).fontWeight(FontWeight.Medium)

        Blank()

        Row() {

          Image($r('app.media.template')).width(16).height(16)

          Image($r('app.media.template')).width(16).height(16)

          Image($r('app.media.template')).width(16).height(16)

        }.width(70).justifyContent(FlexAlign.SpaceBetween)

      }.width('100%').padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Text('Message').fontSize(28).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: 16, top: 16, bottom: 16 })



      Search({ placeholder: 'Search ...' })

        .width('90%')

        .height(40)

        .backgroundColor('#F1F3F5')

        .margin({ bottom: 16 })



      List() {

        ForEach(this.conversations, (conversation: Conversation) => {

          ListItem() {

            Row() {

              Image($r('app.media.template')).width(48).height(48).borderRadius(24)

              Column() {

                Text(conversation.name).fontSize(16).fontWeight(FontWeight.Medium)

                Text(conversation.message).fontSize(14).fontColor(Color.Gray)

              }.alignItems(HorizontalAlign.Start).margin({ left: 16 })

              Blank()

              Text(conversation.time).fontSize(12).fontColor(Color.Gray)

            }

            .width('100%')

            .height(72)

            .padding({ left: 16, right: 16 })

          }

        })

      }

      .width('100%')

      .layoutWeight(1)



      Row() {

        Image($r('app.media.template')).width(24).height(24).onClick(() => router.pushUrl({ url: 'pages/BoardPage' }))

        Image($r('app.media.template')).width(24).height(24).onClick(() => router.pushUrl({ url: 'pages/DashboardPage' }))

        Image($r('app.media.template')).width(48).height(48).onClick(() => router.pushUrl({ url: 'pages/AddTaskPage' }))

        Image($r('app.media.template')).width(24).height(24).onClick(() => router.pushUrl({ url: 'pages/TaskPage' }))

        Image($r('app.media.template')).width(24).height(24)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .padding({ top: 8, bottom: 8 })

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}