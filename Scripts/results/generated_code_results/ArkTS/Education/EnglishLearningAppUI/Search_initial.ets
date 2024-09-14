import router from '@ohos.router';



interface Category {

  name: string;

  icon: Resource;

}



interface Channel {

  name: string;

  subscribers: string;

  avatar: Resource;

}



@Entry

@Component

struct SearchPage {

  @State searchText: string = '';

  @State selectedCategory: string = 'Sentence';

  @State categories: Category[] = [

    { name: 'Movie', icon: $r('app.media.template') },

    { name: 'Travel', icon: $r('app.media.template') },

    { name: 'Music', icon: $r('app.media.template') }

  ];

  @State channels: Channel[] = [

    { name: 'Cornelia Gordon', subscribers: '129k subscribers', avatar: $r('app.media.template') },

    { name: 'Chase Bailey', subscribers: '129k subscribers', avatar: $r('app.media.template') }

  ];



  build() {

    Column() {

      Row() {

        Text('9:41').fontSize(16).fontWeight(FontWeight.Medium)

        Blank()

        Image($r('app.media.template')).width(16).height(16)

        Image($r('app.media.template')).width(16).height(16)

        Image($r('app.media.template')).width(16).height(16)

      }.width('100%').padding({ left: 20, right: 20, top: 10 })



      Text('Find anything!').fontSize(24).fontWeight(FontWeight.Bold).margin({ top: 20, bottom: 10 })

      Text('Searching anything you want to learn here.').fontSize(16).fontColor(Color.Gray).margin({ bottom: 20 })



      Search({ value: this.searchText, placeholder: 'Search...' })

        .width('90%')

        .height(40)

        .backgroundColor('#F1F3F5')

        .placeholderColor(Color.Gray)

        .placeholderFont({ size: 14 })

        .onChange((value: string) => {

          this.searchText = value

        })



      Text('Choose a category').fontSize(18).fontWeight(FontWeight.Medium).margin({ top: 20, bottom: 10 }).alignSelf(ItemAlign.Start).padding({ left: 20 })



      Row() {

        Button('Sentence')

          .backgroundColor(this.selectedCategory === 'Sentence' ? '#007DFF' : '#F1F3F5')

          .fontColor(this.selectedCategory === 'Sentence' ? Color.White : Color.Black)

          .onClick(() => this.selectedCategory = 'Sentence')

        Button('Speak')

          .backgroundColor(this.selectedCategory === 'Speak' ? '#007DFF' : '#F1F3F5')

          .fontColor(this.selectedCategory === 'Speak' ? Color.White : Color.Black)

          .onClick(() => this.selectedCategory = 'Speak')

      }.width('90%').justifyContent(FlexAlign.SpaceBetween).margin({ bottom: 20 })



      Row() {

        ForEach(this.categories, (category: Category) => {

          Column() {

            Image(category.icon)

              .width(100)

              .height(100)

              .borderRadius(10)

            Text(category.name)

              .fontSize(16)

              .margin({ top: 5 })

          }.onClick(() => {

            // Navigate to category page

          })

        })

      }.width('90%').justifyContent(FlexAlign.SpaceBetween)



      Row() {

        Text('Channel').fontSize(18).fontWeight(FontWeight.Medium)

        Blank()

        Text('view all')

          .fontSize(14)

          .fontColor('#007DFF')

          .onClick(() => {

            // Navigate to all channels page

          })

      }.width('90%').margin({ top: 20, bottom: 10 })



      List() {

        ForEach(this.channels, (channel: Channel) => {

          ListItem() {

            Row() {

              Image(channel.avatar).width(50).height(50).borderRadius(25)

              Column() {

                Text(channel.name).fontSize(16).fontWeight(FontWeight.Medium)

                Text(channel.subscribers).fontSize(14).fontColor(Color.Gray)

              }.margin({ left: 10 })

              Blank()

              Image($r('app.media.template')).width(20).height(20)

            }.width('100%').padding(10)

          }.onClick(() => {

            router.pushUrl({ url: 'pages/LessonDetailPage' })

          })

        })

      }.width('90%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12)

        }.onClick(() => router.pushUrl({ url: 'pages/HomePage' }))

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Search').fontSize(12)

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Speak').fontSize(12)

        }.onClick(() => router.pushUrl({ url: 'pages/SpeakPage' }))

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Vocabulary').fontSize(12)

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Profile').fontSize(12)

        }

      }.width('100%').justifyContent(FlexAlign.SpaceAround).position({ y: '90%' })

    }.width('100%').height('100%')

  }

}