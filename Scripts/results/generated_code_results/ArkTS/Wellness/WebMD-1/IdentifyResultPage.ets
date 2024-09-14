import router from '@ohos.router';



interface PillInfo {

  name: string;

  description: string;

  image: Resource;

}



@Entry

@Component

struct IdentifyResultPage {

  @State searchResults: PillInfo[] = [

    { name: 'Abilify', description: 'This medicine is a pink, round, tablet imprinted with "A-011 30".', image: $r('app.media.template') },

    { name: 'Abilify', description: 'This medicine is a white, round, tablet imprinted with "A-010 20".', image: $r('app.media.template') },

    { name: 'Abilify', description: 'This medicine is a yellow, round, tablet imprinted with "A-009 15".', image: $r('app.media.template') },

    { name: 'acamprosate CALCIUM', description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "435".', image: $r('app.media.template') },

    { name: 'acamprosate CALCIUM', description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "569".', image: $r('app.media.template') },

    { name: 'acamprosate CALCIUM', description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "77" and "1140".', image: $r('app.media.template') },

    { name: 'acamprosate CALCIUM', description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "M AC".', image: $r('app.media.template') },

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24).height(24)

          .margin({ left: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/PillIdentifierPage' })

          })

        Text('Search Results')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

          .margin({ left: 16 })

      }

      .width('100%')

      .height(56)

      .backgroundColor('#FFFFFF')



      List() {

        ForEach(this.searchResults, (item: PillInfo) => {

          ListItem() {

            Row() {

              Image(item.image)

                .width(60)

                .height(60)

                .margin({ right: 16 })

              Column() {

                Text(item.name)

                  .fontSize(16)

                  .fontWeight(FontWeight.Bold)

                Text(item.description)

                  .fontSize(14)

                  .maxLines(2)

                  .textOverflow({ overflow: TextOverflow.Ellipsis })

              }

              .layoutWeight(1)

              Image($r('app.media.template'))

                .width(24)

                .height(24)

            }

            .width('100%')

            .padding(16)

            .backgroundColor(Color.White)

            .borderRadius(8)

            .onClick(() => {

              router.pushUrl({ url: 'pages/ResultDetailPage' })

            })

          }

          .margin({ bottom: 8 })

        })

      }

      .layoutWeight(1)

      .margin({ top: 8 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F5F5F5')

  }

}