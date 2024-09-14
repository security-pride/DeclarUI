import router from '@ohos.router';



interface Course {

  title: string;

  level: string;

  lessonsCount: number;

  image: Resource;

}



interface FeaturedCourse {

  title: string;

  level: string;

  description: string;

  image: Resource;

}



@Entry

@Component

struct SpeakingCoursePage {

  @State currentTime: string = '9:41';

  @State selectedTab: string = 'All';

  @State featuredCourse: FeaturedCourse = {

    title: 'English REAL TALK',

    level: 'Intermediate',

    description: "Is speak English as easy but rigid as a textbook? No no! You're wrong! ...",

    image: $r('app.media.template')

  };

  @State courses: Course[] = [

    { title: 'Basic communication English', level: 'Primary', lessonsCount: 12, image: $r('app.media.template') },

    { title: 'Essential Structures', level: 'Primary', lessonsCount: 6, image: $r('app.media.template') }

  ];



  build() {

    Column() {

      Row() {

        Text(this.currentTime).fontSize(16).fontWeight(FontWeight.Medium)

        Blank()

        Image($r('app.media.template')).width(16).height(16)

        Image($r('app.media.template')).width(16).height(16)

        Image($r('app.media.template')).width(16).height(16)

      }.width('100%').padding({ left: 20, right: 20, top: 10 })



      Text('Speaking Course').fontSize(24).fontWeight(FontWeight.Bold).margin({ top: 20, bottom: 5 })

      Text('Improve your speak skill with many courses').fontSize(16).fontColor(Color.Gray).margin({ bottom: 20 })



      Scroll() {

        Column() {

          Stack({ alignContent: Alignment.BottomStart }) {

            Image(this.featuredCourse.image)

              .width('100%')

              .height(200)

              .borderRadius(10)

              .objectFit(ImageFit.Cover)

            Column() {

              Text('Studying Course').fontSize(14).fontColor(Color.White)

              Text(this.featuredCourse.title).fontSize(20).fontWeight(FontWeight.Bold).fontColor(Color.White)

              Text(this.featuredCourse.level)

                .fontSize(12)

                .fontColor(Color.White)

                .backgroundColor(Color.Green)

                .padding(5)

                .borderRadius(5)

              Text(this.featuredCourse.description)

                .fontSize(14)

                .fontColor(Color.White)

                .maxLines(2)

                .textOverflow({ overflow: TextOverflow.Ellipsis })

              Button({ type: ButtonType.Circle }) {

                Image($r('app.media.template')).width(20).height(20)

              }.width(40).height(40).backgroundColor(Color.White)

            }.padding(10)

          }.width('90%').margin({ bottom: 20 })



          Row() {

            ForEach(['All', 'Beginner', 'Intermediate', 'Advanced'], (tab: string) => {

              Button(tab)

                .backgroundColor(this.selectedTab === tab ? Color.Blue : Color.Gray)

                .fontColor(this.selectedTab === tab ? Color.White : Color.Black)

                .onClick(() => this.selectedTab = tab)

            })

          }.width('90%').justifyContent(FlexAlign.SpaceBetween).margin({ bottom: 20 })



          Text('Courses').fontSize(20).fontWeight(FontWeight.Bold).alignSelf(ItemAlign.Start).margin({ left: '5%', bottom: 10 })

          List() {

            ForEach(this.courses, (course: Course) => {

              ListItem() {

                Row() {

                  Image(course.image).width(80).height(80).borderRadius(10).objectFit(ImageFit.Cover)

                  Column() {

                    Text(course.title).fontSize(16).fontWeight(FontWeight.Medium)

                    Text(course.level)

                      .fontSize(12)

                      .fontColor(Color.White)

                      .backgroundColor(Color.Orange)

                      .padding(5)

                      .borderRadius(5)

                    Text(`${course.lessonsCount} Lessons`).fontSize(14).fontColor(Color.Gray)

                  }.alignItems(HorizontalAlign.Start).margin({ left: 10 })

                  Blank()

                  Button({ type: ButtonType.Circle }) {

                    Image($r('app.media.template')).width(20).height(20)

                  }.width(40).height(40).backgroundColor(Color.White)

                }.width('100%').padding(10).backgroundColor(Color.White).borderRadius(10)

              }.onClick(() => {

                router.pushUrl({ url: 'pages/ConversationPage' })

              })

            })

          }.width('90%')

        }

      }.height('80%')



      Row() {

        ForEach(['Home', 'Search', 'Speak', 'Vocabulary', 'Profile'], (item: string) => {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text(item).fontSize(12)

          }.layoutWeight(1).onClick(() => {

            if (item === 'Home') {

              router.pushUrl({ url: 'pages/HomePage' })

            } else if (item === 'Search') {

              router.pushUrl({ url: 'pages/SearchPage' })

            }

          })

        })

      }.width('100%').height('10%').position({ y: '90%' }).backgroundColor(Color.White)

    }.width('100%').height('100%').backgroundColor('#F8F8F8')

  }

}