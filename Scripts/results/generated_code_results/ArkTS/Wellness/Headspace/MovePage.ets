import router from '@ohos.router';



@Entry

@Component

struct MovePage {

  @State featuredWorkout: FeaturedWorkout = {

    title: 'Easy Evening Stretch',

    type: 'Workout',

    duration: '9 min',

    image: $r('app.media.template')

  }



  @State workouts: Workout[] = [

    { title: 'Stress Release', type: 'Workout', duration: '29 min', image: $r('app.media.template') },

    { title: 'Day 1', type: 'Workout', duration: '22 min', image: $r('app.media.template') }

  ]



  @State selectedTab: number = 1



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24).onClick(() => {

          router.back()

        })

        Text('Move').fontSize(20).fontWeight(FontWeight.Bold)

      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)



      Scroll() {

        Column() {

          Stack({ alignContent: Alignment.BottomStart }) {

            Image(this.featuredWorkout.image)

              .width('100%')

              .height(200)

              .borderRadius(16)

            Column() {

              Text('Featured').fontSize(12).fontColor(Color.White).backgroundColor(Color.Gray).padding(4).borderRadius(4)

              Text(this.featuredWorkout.title).fontSize(24).fontWeight(FontWeight.Bold).fontColor(Color.White)

              Row() {

                Image($r('app.media.template')).width(16).height(16)

                Text(`${this.featuredWorkout.type} · ${this.featuredWorkout.duration}`).fontSize(14).fontColor(Color.White)

              }

              Button({ type: ButtonType.Normal, stateEffect: true }) {

                Row() {

                  Image($r('app.media.template')).width(16).height(16)

                  Text('Play').fontColor(Color.White)

                }.width('100%').justifyContent(FlexAlign.Center)

              }.backgroundColor(Color.Blue).width(100).height(40)

            }.padding(16)

          }.width('100%').margin({ bottom: 16 })



          Row() {

            Text('Recent')

              .fontSize(16)

              .fontColor(this.selectedTab === 0 ? Color.Blue : Color.Gray)

              .onClick(() => this.selectedTab = 0)

            Text('Featured')

              .fontSize(16)

              .fontColor(this.selectedTab === 1 ? Color.Blue : Color.Gray)

              .onClick(() => this.selectedTab = 1)

          }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ bottom: 16 })



          ForEach(this.workouts, (workout: Workout) => {

            Row() {

              Image(workout.image).width(80).height(80).borderRadius(8)

              Column() {

                Text(workout.title).fontSize(16).fontWeight(FontWeight.Bold)

                Row() {

                  Image($r('app.media.template')).width(16).height(16)

                  Text(`${workout.type} · ${workout.duration}`).fontSize(14).fontColor(Color.Gray)

                }

              }.layoutWeight(1).alignItems(HorizontalAlign.Start).margin({ left: 16 })

              Image($r('app.media.template')).width(24).height(24)

            }.width('100%').backgroundColor(Color.White).borderRadius(8).padding(16).margin({ bottom: 16 })

          })

        }.width('100%').padding(16)

      }.width('100%').height('85%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Today').fontSize(12)

        }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/HomePage' }))



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Explore').fontSize(12)

        }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/ExplorePage' }))



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('子骆').fontSize(12)

        }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/ProfilePage' }))

      }.width('100%').height(60).backgroundColor(Color.White).justifyContent(FlexAlign.SpaceAround)

    }.width('100%').height('100%').backgroundColor('#F1F3F5')

  }

}



interface FeaturedWorkout {

  title: string;

  type: string;

  duration: string;

  image: Resource;

}



interface Workout {

  title: string;

  type: string;

  duration: string;

  image: Resource;

}