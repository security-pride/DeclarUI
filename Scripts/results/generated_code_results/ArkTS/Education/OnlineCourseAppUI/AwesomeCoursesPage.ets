import router from '@ohos.router';



interface CourseItem {

  title: string;

  lessonsCount: number;

  rating: number;

  price: string;

  image: Resource;

}



@Entry

@Component

struct AwesomeCoursesPage {

  @State courses: CourseItem[] = [

    { title: '3D Design Basic', lessonsCount: 24, rating: 4.9, price: '$24.99', image: $r('app.media.template') },

    { title: 'Characters Animation', lessonsCount: 22, rating: 4.8, price: '$22.69', image: $r('app.media.template') },

    { title: '3D Abstract Design', lessonsCount: 18, rating: 4.7, price: '$19.29', image: $r('app.media.template') },

    { title: 'Product Design', lessonsCount: 23, rating: 4.8, price: '$25.79', image: $r('app.media.template') },

    { title: 'Game Design', lessonsCount: 25, rating: 4.9, price: '$26.39', image: $r('app.media.template') }

  ]



  build() {

    Column() {

      Row() {

        Button({ type: ButtonType.Circle, stateEffect: true }) {

          Image($r('app.media.template')).width(24).height(24)

        }.onClick(() => {

          router.back()

        }).backgroundColor(Color.Transparent)



        Text('Awesome Courses')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)



      Row() {

        Button('Medium', { type: ButtonType.Normal }).backgroundColor(Color.Blue).margin({ right: 8 })

        Button('Medium', { type: ButtonType.Normal }).backgroundColor(Color.Transparent).borderColor(Color.Gray).borderWidth(1).margin({ right: 8 })

        Button('Medium', { type: ButtonType.Normal }).backgroundColor(Color.Transparent).borderColor(Color.Gray).borderWidth(1)

      }.padding(16)



      List() {

        ForEach(this.courses, (course: CourseItem) => {

          ListItem() {

            this.CourseItem(course)

          }.onClick(() => {

            router.pushUrl({ url: 'pages/CourseDetailPage' })

          })

        }, (course: CourseItem) => course.title)

      }.width('100%').layoutWeight(1)



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/HomePage' })

        }).flexGrow(1)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Course').fontSize(12)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/EnrolledCoursesPage' })

        }).flexGrow(1)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Chat').fontSize(12)

        }.flexGrow(1)



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Profile').fontSize(12)

        }.flexGrow(1)

      }.width('100%').height(56).backgroundColor(Color.White)

    }.width('100%').height('100%')

  }



  @Builder

  CourseItem(course: CourseItem) {

    Row() {

      Image(course.image)

        .width(80)

        .height(80)

        .borderRadius(8)

        .margin({ right: 16 })



      Column() {

        Text(course.title)

          .fontSize(16)

          .fontWeight(FontWeight.Bold)



        Text(`${course.lessonsCount} lessons`)

          .fontSize(14)

          .fontColor(Color.Gray)

          .margin({ top: 4 })



        Row() {

          Rating({ rating: course.rating, indicator: true })

            .stars(5)

            .stepSize(0.1)



          Text(course.rating.toFixed(1))

            .fontSize(14)

            .fontColor(Color.Orange)

            .margin({ left: 8 })

        }.margin({ top: 4 })

      }.alignItems(HorizontalAlign.Start)



      Blank()



      Column() {

        Text(course.price)

          .fontSize(16)

          .fontWeight(FontWeight.Bold)



        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ top: 8 })

      }.alignItems(HorizontalAlign.End)

    }

    .width('100%')

    .padding(16)

    .backgroundColor(Color.White)

    .borderRadius(8)

    .shadow({ radius: 4, color: 'rgba(0, 0, 0, 0.2)', offsetX: 0, offsetY: 2 })

  }

}