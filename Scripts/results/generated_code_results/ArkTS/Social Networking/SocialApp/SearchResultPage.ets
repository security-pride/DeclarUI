import router from '@ohos.router';



interface UserProfile {

  name: string;

  age: number;

  location: string;

  matchPercentage: number;

  image: Resource;

  interests?: string[];

  bio?: string;

  potentialMatch?: boolean;

}



@Entry

@Component

struct SearchResultPage {

  @State searchQuery: string = 'Gracia';

  @State currentTime: string = '9:41';

  @State mainResult: UserProfile = {

    name: 'Klee Gracia',

    age: 24,

    location: '',

    matchPercentage: 0,

    image: $r('app.media.template'),

    interests: ['Running', 'Outdoor', 'Anime'],

    bio: "Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.",

    potentialMatch: true

  };

  @State relatedResults: UserProfile[] = [

    { name: 'Mika Gracia', age: 18, location: 'Bali, Indonesia', matchPercentage: 98, image: $r('app.media.template') },

    { name: 'Gracy Logan', age: 28, location: 'Jakarta, Indonesia', matchPercentage: 98, image: $r('app.media.template') },

    { name: 'R.O Gracia', age: 17, location: 'Bekasi, Indonesia', matchPercentage: 93, image: $r('app.media.template') },

    { name: 'Audrey Gracia', age: 17, location: 'Bali, Indonesia', matchPercentage: 93, image: $r('app.media.template') }

  ];



  aboutToAppear() {

    this.updateTime();

  }



  updateTime() {

    this.currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  }



  @Builder

  HeaderBuilder() {

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

  }



  @Builder

  SearchBarBuilder() {

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

  }



  @Builder

  MainResultBuilder() {

    Column() {

      Stack({ alignContent: Alignment.TopStart }) {

        Image(this.mainResult.image)

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

          Text(`${this.mainResult.name}, ${this.mainResult.age}`)

            .fontSize(18)

            .fontWeight(FontWeight.Bold)

          Image($r('app.media.template')).width(16).height(16)

        }

        Row() {

          ForEach(this.mainResult.interests, (interest: string) => {

            Text(interest)

              .fontSize(12)

              .backgroundColor('#F0F0F0')

              .padding(4)

              .borderRadius(8)

              .margin({ right: 4 })

          })

        }.margin({ top: 4, bottom: 4 })

        Text(this.mainResult.bio)

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

  }



  @Builder

  RelatedResultBuilder(profile: UserProfile) {

    Column() {

      Image(profile.image)

        .width('100%')

        .height(120)

        .borderRadius({ topLeft: 16, topRight: 16 })

      Column() {

        Text(profile.name)

          .fontSize(16)

          .fontWeight(FontWeight.Bold)

        Text(`${profile.age}, ${profile.location}`)

          .fontSize(14)

          .fontColor(Color.Gray)

        Text(`${profile.matchPercentage}% Match`)

          .fontSize(12)

          .fontColor('#FFD700')

      }.padding(8).alignItems(HorizontalAlign.Start)

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

      this.HeaderBuilder()

      this.SearchBarBuilder()



      Text('Related Result')

        .fontSize(18)

        .fontWeight(FontWeight.Bold)

        .alignSelf(ItemAlign.Start)

        .margin({ left: 16, top: 16, bottom: 8 })



      this.MainResultBuilder()



      Text('More About Gracia')

        .fontSize(18)

        .fontWeight(FontWeight.Bold)

        .alignSelf(ItemAlign.Start)

        .margin({ left: 16, bottom: 8 })



      Flex({ justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap }) {

        ForEach(this.relatedResults, (profile: UserProfile) => {

          this.RelatedResultBuilder(profile)

        })

      }.width('90%')

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F5F5F5')

  }

}