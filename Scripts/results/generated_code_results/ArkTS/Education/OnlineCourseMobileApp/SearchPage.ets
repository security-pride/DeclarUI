import router from '@ohos.router';



interface CourseItem {

  title: string;

  type: string;

  rating: number;

  price: string;

  image: Resource;

}



@Entry

@Component

struct SearchPage {

  @State searchText: string = 'Design';

  @State searchResults: CourseItem[] = [

    {

      title: 'How to make modern poster for Beginner',

      type: 'GRAPHICS DESIGN',

      rating: 4.9,

      price: '$12.00',

      image: $r('app.media.template')

    },

    {

      title: 'How to make Design system in easy waen',

      type: 'UI/UX DESIGN',

      rating: 4.9,

      price: '$23.99',

      image: $r('app.media.template')

    },

    {

      title: 'How to make modern poster for Beginner',

      type: 'INTERACTION DESIGN',

      rating: 4.9,

      price: '$15.45',

      image: $r('app.media.template')

    },

    {

      title: 'How to make Design system in easy waen',

      type: 'PHOTO EDITOR',

      rating: 4.9,

      price: '$16.13',

      image: $r('app.media.template')

    }

  ];



  build() {

    Column() {

      Row() {

        Text('Discover')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

        Badge({

          count: 1,

          position: BadgePosition.Right,

          style: { color: Color.White, fontSize: 10, badgeSize: 16, badgeColor: Color.Red }

        }) {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

        }

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Row() {

        TextInput({ placeholder: this.searchText })

          .width('80%')

          .height(40)

          .backgroundColor('#F1F1F1')

          .borderRadius(20)

        Blank()

        Badge({

          count: 1,

          position: BadgePosition.Right,

          style: { color: Color.White, fontSize: 10, badgeSize: 16, badgeColor: Color.Red }

        }) {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

        }

      }

      .width('100%')

      .padding({ left: 16, right: 16, bottom: 8 })



      Row() {

        ForEach(['UI/UX DESIGN', 'GRAPHICS DESIGN', 'INTERACTION'], (tag: string) => {

          Text(tag)

            .fontSize(12)

            .backgroundColor('#F1F1F1')

            .padding(8)

            .borderRadius(16)

            .margin({ right: 8 })

        })

      }

      .width('100%')

      .padding({ left: 16, right: 16, bottom: 16 })



      Text('Search Result')

        .fontSize(16)

        .fontWeight(FontWeight.Bold)

        .width('100%')

        .padding({ left: 16, bottom: 8 })



      Text('32 Result')

        .fontSize(14)

        .fontColor(Color.Gray)

        .width('100%')

        .padding({ left: 16, bottom: 16 })



      List() {

        ForEach(this.searchResults, (item: CourseItem) => {

          ListItem() {

            this.CourseCard(item)

          }

          .onClick(() => {

            router.pushUrl({ url: 'pages/CourseDetailPage' })

          })

        })

      }

      .width('100%')

      .layoutWeight(1)

    }

    .height('100%')

  }



  @Builder

  CourseCard(item: CourseItem) {

    Column() {

      Image(item.image)

        .width(120)

        .height(120)

        .borderRadius(8)

      Text(item.type)

        .fontSize(12)

        .fontColor(Color.Gray)

        .margin({ top: 8 })

      Text(item.title)

        .fontSize(14)

        .fontWeight(FontWeight.Bold)

        .margin({ top: 4 })

      Row() {

        Image($r('app.media.template'))

          .width(16)

          .height(16)

        Text(item.rating.toString())

          .fontSize(12)

          .fontColor(Color.Orange)

          .margin({ left: 4 })

      }

      .margin({ top: 4 })

      Text(item.price)

        .fontSize(14)

        .fontWeight(FontWeight.Bold)

        .margin({ top: 4 })

    }

    .width('45%')

    .padding(8)

    .margin(8)

    .backgroundColor(Color.White)

    .borderRadius(8)

  }

}