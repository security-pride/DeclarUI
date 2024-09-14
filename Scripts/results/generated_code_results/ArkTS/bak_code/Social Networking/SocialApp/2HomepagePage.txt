import router from '@ohos.router';

interface Story {
  name: string;
  image: Resource;
  isAdd?: boolean;
}

interface Recommendation {
  name: string;
  age: number;
  bio: string;
  image: Resource;
  interests: string[];
  potentialMatch: boolean;
}

@Entry
@Component
struct HomepagePage {
  @State currentTime: string = '9:41';
  @State stories: Story[] = [
    { name: 'My Story', image: $r('app.media.template'), isAdd: true },
    { name: 'Hasley', image: $r('app.media.template') },
    { name: 'Javier', image: $r('app.media.template') },
    { name: 'Natalie', image: $r('app.media.template') }
  ];
  @State categories: string[] = ['All', 'Photography', 'Outdoor', 'Anime'];
  @State recommendations: Recommendation[] = [
    {
      name: 'Klee Gracia',
      age: 24,
      bio: "Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.",
      image: $r('app.media.template'),
      interests: ['Running', 'Outdoor', 'Anime'],
      potentialMatch: true
    }
  ];
  @State searchText: string = '';

  aboutToAppear() {
    this.updateTime();
  }

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  build() {
    Column() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Forging New Bonds and Friendships').fontSize(18).fontWeight(FontWeight.Bold)
        Blank()
        Image($r('app.media.template')).width(24).height(24)
        Image($r('app.media.template')).width(24).height(24)
      }.width('100%').height(56).padding({ left: 16, right: 16 })

      Search({ value: this.searchText, placeholder: 'Search for a friend or partners' })
        .width('90%')
        .height(40)
        .backgroundColor('#F5F5F5')
        .placeholderColor(Color.Grey)
        .placeholderFont({ size: 14 })
        .textFont({ size: 14 })
        .onChange((value: string) => {
          this.searchText = value;
        })
        .onSubmit(() => {
          router.pushUrl({ url: 'pages/SearchResultPage' });
        })

      Scroll() {
        Column() {
          Row() {
            ForEach(this.stories, (story: Story) => {
              Column() {
                Stack() {
                  Image(story.image)
                    .width(60)
                    .height(60)
                    .borderRadius(30)
                  if (story.isAdd) {
                    Text('+')
                      .fontSize(20)
                      .fontWeight(FontWeight.Bold)
                      .position({ x: 40, y: 40 })
                  }
                }
                Text(story.name).fontSize(12)
              }.margin({ right: 10 })
            })
          }.width('100%').height(90).padding({ left: 16, right: 16 })

          Row() {
            ForEach(this.categories, (category: string) => {
              Button(category)
                .backgroundColor(category === 'All' ? '#6750A4' : '#E8DEF8')
                .fontColor(category === 'All' ? Color.White : Color.Black)
                .height(32)
                .borderRadius(16)
                .margin({ right: 8 })
            })
          }.width('100%').height(40).padding({ left: 16, right: 16 })

          ForEach(this.recommendations, (item: Recommendation) => {
            Column() {
              Image(item.image)
                .width('100%')
                .height(200)
                .objectFit(ImageFit.Cover)
              Row() {
                Column() {
                  Text(`${item.name}, ${item.age}`).fontSize(18).fontWeight(FontWeight.Bold)
                  Text(item.bio).fontSize(14).maxLines(2).textOverflow({ overflow: TextOverflow.Ellipsis })
                }.layoutWeight(1)
                if (item.potentialMatch) {
                  Text('Potential Match!').fontSize(14).fontColor('#6750A4')
                }
              }.width('100%').padding(16)
            }.width('90%').borderRadius(8).margin({ bottom: 16 })
            .onClick(() => {
              router.pushUrl({ url: 'pages/ProfilePage' });
            })
          })
        }
      }.layoutWeight(1)

      Row() {
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Discover').fontSize(12)
        }.layoutWeight(1)
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Likes').fontSize(12)
        }.layoutWeight(1)
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Messages').fontSize(12)
        }.layoutWeight(1).onClick(() => {
          router.pushUrl({ url: 'pages/MessagesPage' });
        })
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Profile').fontSize(12)
        }.layoutWeight(1)
      }.width('100%').height(56).backgroundColor(Color.White)
    }
  }
}