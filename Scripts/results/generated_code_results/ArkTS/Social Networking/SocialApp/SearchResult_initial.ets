import router from '@ohos.router';



@Entry

@Component

struct SearchResultPage {

  @State searchQuery: string = 'Gracia';

  @State currentTime: string = '9:41';



  aboutToAppear() {

    this.updateTime();

  }



  updateTime() {

    this.currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  }



  @Builder

  ProfileCard(name: string, age: number, location: string, matchPercentage: number, image: Resource) {

    Column() {

      Stack({ alignContent: Alignment.BottomStart }) {

        Image(image)

          .width('100%')

          .height(150)

          .borderRadius({ topLeft: 16, topRight: 16 })

        Text(`${matchPercentage}% Match`)

          .fontSize(12)

          .fontColor(Color.White)

          .backgroundColor(Color.Black)

          .padding(4)

          .margin(8)

      }

      Column() {

        Text(name)

          .fontSize(16)

          .fontWeight(FontWeight.Bold)

        Text(`${age}, ${location}`)

          .fontSize(14)

          .fontColor(Color.Gray)

      }.alignItems(HorizontalAlign.Start)

      .padding(8)

    }

    .width('48%')

    .margin(4)

    .borderRadius(16)

    .backgroundColor(Color.White)

    .onClick(() => {

      router.pushUrl({ url: 'pages/ProfilePage' });

    })

  }



  build() {

    Column() {

      Row() {

        Text(this.currentTime)

          .fontSize(16)

          .fontColor(Color.Black)

        Blank()

        Row() {

          Image($r('app.media.template')).width(16).height(16)

          Image($r('app.media.template')).width(16).height(16)

          Image($r('app.media.template')).width(16).height(16)

        }

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8 })



      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => router.back())

        Search({ value: this.searchQuery, placeholder: 'Search' })

          .width('85%')

          .height(40)

          .backgroundColor('#F5F5F5')

          .margin({ left: 8 })

      }.width('100%').padding(16)



      Text('Related Result')

        .fontSize(18)

        .fontWeight(FontWeight.Bold)

        .alignSelf(ItemAlign.Start)

        .margin({ left: 16, top: 16, bottom: 8 })



      Column() {

        Stack({ alignContent: Alignment.TopStart }) {

          Image($r('app.media.template'))

            .width('100%')

            .height(200)

            .borderRadius(16)

          Text('Potential Match!')

            .fontSize(12)

            .fontColor(Color.White)

            .backgroundColor('#FFD700')

            .padding(4)

            .borderRadius(8)

            .margin(8)

        }

        Column() {

          Row() {

            Text('Klee Gracia, 24')

              .fontSize(18)

              .fontWeight(FontWeight.Bold)

            Image($r('app.media.template')).width(16).height(16)

          }

          Row() {

            ForEach(['Running', 'Outdoor', 'Anime'], (interest) => {

              Text(interest)

                .fontSize(12)

                .backgroundColor('#F0F0F0')

                .padding(4)

                .borderRadius(8)

                .margin({ right: 4 })

            })

          }.margin({ top: 4, bottom: 4 })

          Text("Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.")

            .fontSize(14)

            .maxLines(2)

            .textOverflow({ overflow: TextOverflow.Ellipsis })

        }.padding(8)

      }

      .width('90%')

      .borderRadius(16)

      .backgroundColor(Color.White)

      .margin({ top: 8, bottom: 16 })

      .onClick(() => {

        router.pushUrl({ url: 'pages/ProfilePage' });

      })



      Text('More About Gracia')

        .fontSize(18)

        .fontWeight(FontWeight.Bold)

        .alignSelf(ItemAlign.Start)

        .margin({ left: 16, bottom: 8 })



      Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap }) {

        this.ProfileCard('Mika Gracia', 18, 'Bali, Indonesia', 98, $r('app.media.template'))

        this.ProfileCard('Gracy Logan', 28, 'Jakarta, Indonesia', 98, $r('app.media.template'))

        this.ProfileCard('R.O Gracia', 17, 'Bekasi, Indonesia', 93, $r('app.media.template'))

        this.ProfileCard('Audrey Gracia', 17, 'Bali, Indonesia', 93, $r('app.media.template'))

      }.width('90%')

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F5F5F5')

  }

}