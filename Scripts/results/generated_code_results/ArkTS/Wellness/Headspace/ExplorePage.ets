import router from '@ohos.router';



interface Category {

  name: string;

  color: string;

}



interface FeaturedContent {

  title: string;

  type: string;

  backgroundColor: string;

}



interface NavItem {

  name: string;

  icon: string;

  isActive?: boolean;

}



@Entry

@Component

struct ExplorePage {

  @State searchText: string = '';

  @State categories: Category[] = [

    { name: 'Meditate', color: '#FF7F00' },

    { name: 'Sleep', color: '#800080' },

    { name: 'Move', color: '#FFC0CB' },

    { name: 'Music', color: '#0000FF' },

    { name: 'Podcasts', color: '#FFFF00' }

  ];

  @State featuredContent: FeaturedContent[] = [

    { title: 'Politics Without Panic', type: 'Course', backgroundColor: '#FFC0CB' },

    { title: 'Calming Everyday Anxiety', type: 'Course', backgroundColor: '#0000FF' }

  ];

  @State navItems: NavItem[] = [

    { name: 'Today', icon: 'home' },

    { name: 'Explore', icon: 'compass', isActive: true },

    { name: '子路', icon: 'user' }

  ];



  build() {

    Column() {

      SearchBar()



      Scroll() {

        Column() {

          Grid() {

            ForEach(this.categories, (category: Category) => {

              GridItem() {

                Text(category.name)

                  .fontSize(16)

                  .fontColor(Color.White)

                  .textAlign(TextAlign.Center)

              }

              .height(60)

              .backgroundColor(category.color)

              .borderRadius(8)

              .onClick(() => {

                if (category.name === 'Move') {

                  router.pushUrl({ url: 'pages/MovePage' })

                }

              })

            })

          }

          .columnsTemplate('1fr 1fr')

          .rowsTemplate('1fr 1fr 1fr')

          .columnsGap(8)

          .rowsGap(8)

          .width('100%')

          .height(200)



          Button('Podcasts')

            .width('100%')

            .height(50)

            .backgroundColor('#FFFF00')

            .margin({ top: 8, bottom: 16 })



          Column() {

            Text('Unlock the Headspace Library')

              .fontSize(18)

              .fontWeight(FontWeight.Bold)

              .margin({ bottom: 8 })



            Button('Start My Free Trial')

              .width('80%')

              .height(40)

              .backgroundColor('#0000FF')

              .fontColor(Color.White)

          }

          .width('100%')

          .height(100)

          .backgroundColor('#F0F0F0')

          .borderRadius(8)

          .justifyContent(FlexAlign.Center)

          .alignItems(HorizontalAlign.Center)

          .margin({ bottom: 16 })



          ForEach(this.featuredContent, (content: FeaturedContent) => {

            Row() {

              Text(content.title)

                .fontSize(16)

                .fontColor(Color.White)

            }

            .width('100%')

            .height(60)

            .backgroundColor(content.backgroundColor)

            .borderRadius(8)

            .padding(16)

            .margin({ bottom: 8 })

            .onClick(() => {

              if (content.title === 'Calming Everyday Anxiety') {

                router.pushUrl({ url: 'pages/CalmMethodsPage' })

              }

            })

          })

        }

        .width('100%')

        .padding(16)

      }

      .layoutWeight(1)



      Row() {

        ForEach(this.navItems, (item: NavItem) => {

          Column() {

            Image($r('app.media.template'))

              .width(24)

              .height(24)

            Text(item.name)

              .fontSize(12)

              .fontColor(item.isActive ? Color.Blue : Color.Gray)

          }

          .width('33%')

          .height(50)

          .onClick(() => {

            if (item.name === 'Today') {

              router.pushUrl({ url: 'pages/HomePage' })

            }

          })

        })

      }

      .width('100%')

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F5F5F5')

  }

}



@Component

struct SearchBar {

  @State searchText: string = ''



  build() {

    Row() {

      Image($r('app.media.template'))

        .width(24)

        .height(24)

        .margin({ right: 8 })

      TextInput({ placeholder: 'Search exercises' })

        .width('80%')

        .height(40)

        .backgroundColor(Color.White)

        .borderRadius(20)

    }

    .width('100%')

    .height(50)

    .padding({ left: 16, right: 16 })

    .backgroundColor('#F0F0F0')

  }

}