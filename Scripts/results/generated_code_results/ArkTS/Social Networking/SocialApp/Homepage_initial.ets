import router from '@ohos.router';



interface UserStory {

  name: string;

  isAdd?: boolean;

}



interface Recommendation {

  name: string;

  age: number;

  bio: string;

  interests: string[];

  potentialMatch: boolean;

}



@Entry

@Component

struct HomepagePage {

  @State stories: UserStory[] = [

    { name: 'My Story', isAdd: true },

    { name: 'Hasley' },

    { name: 'Javier' },

    { name: 'Natalie' }

  ];

  @State categories: string[] = ['All', 'Photography', 'Outdoor', 'Anime'];

  @State recommendations: Recommendation[] = [

    {

      name: 'Klee Gracia',

      age: 24,

      bio: "Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.",

      interests: ['Running', 'Outdoor', 'Anime'],

      potentialMatch: true

    }

  ];



  build() {

    Column() {

      Row() {

        IconButton({ name: 'menu' })

          .onClick(() => {

            // Open menu

          })

        Text('Forging New Bonds and Friendships')

          .fontSize(18)

          .fontWeight(FontWeight.Bold)

        Blank()

        IconButton({ name: 'notification' })

          .onClick(() => {

            // Open notifications

          })

        IconButton({ name: 'settings' })

          .onClick(() => {

            // Open settings

          })

      }

      .width('100%')

      .padding(10)



      Row() {

        ForEach(this.stories, (story: UserStory) => {

          Column() {

            Image($r('app.media.template'))

              .width(60)

              .height(60)

              .borderRadius(30)

            if (story.isAdd) {

              Text('+')

                .fontSize(20)

                .fontWeight(FontWeight.Bold)

                .position({ x: 40, y: 40 })

            }

            Text(story.name)

              .fontSize(14)

          }

          .margin({ right: 10 })

        })

      }

      .width('100%')

      .padding(10)

      .scrollable(ScrollDirection.Horizontal)



      Search({ placeholder: 'Search for a friend or partners' })

        .width('90%')

        .margin(10)

        .onChange((value: string) => {

          if (value) {

            router.pushUrl({ url: 'pages/SearchResultPage' });

          }

        })



      Row() {

        ForEach(this.categories, (category: string) => {

          Button(category)

            .backgroundColor(category === 'All' ? '#6750A4' : '#E8DEF8')

            .fontColor(category === 'All' ? Color.White : Color.Black)

            .margin({ right: 10 })

        })

      }

      .width('100%')

      .padding(10)

      .scrollable(ScrollDirection.Horizontal)



      List() {

        ForEach(this.recommendations, (item: Recommendation) => {

          ListItem() {

            Column() {

              Image($r('app.media.template'))

                .width('100%')

                .height(200)

                .objectFit(ImageFit.Cover)

              Row() {

                Column() {

                  Text(`${item.name}, ${item.age}`)

                    .fontSize(18)

                    .fontWeight(FontWeight.Bold)

                  Text(item.bio)

                    .fontSize(14)

                    .maxLines(2)

                    .textOverflow({ overflow: TextOverflow.Ellipsis })

                }

                .layoutWeight(1)

                if (item.potentialMatch) {

                  Text('Potential Match!')

                    .fontSize(14)

                    .fontColor('#6750A4')

                }

              }

              .width('100%')

              .padding(10)

            }

            .onClick(() => {

              router.pushUrl({ url: 'pages/ProfilePage' });

            })

          }

        })

      }

      .width('100%')

      .layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Discover')

            .fontSize(12)

        }

        .layoutWeight(1)

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Likes')

            .fontSize(12)

        }

        .layoutWeight(1)

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Messages')

            .fontSize(12)

        }

        .layoutWeight(1)

        .onClick(() => {

          router.pushUrl({ url: 'pages/MessagesPage' });

        })

        Column() {

          Image($r('app.media.template'))

            .width(24)

            .height(24)

          Text('Profile')

            .fontSize(12)

        }

        .layoutWeight(1)

      }

      .width('100%')

      .padding(10)

      .backgroundColor(Color.White)

    }

  }

}