import router from '@ohos.router';

@Entry

@Component

struct CalendarPage {

  @State selectedDate: string = '18'

  @State currentMonth: string = 'February 2022'

  @State tasks: Task[] = [

    { title: 'Landing page design', time: '09AM-11AM', progress: 100 },

    { title: 'Dashboard redesign', time: '11AM-01PM', progress: 55 },

    { title: 'Education app design', time: '02PM-03PM', progress: 30 }

  ]

  @State selectedFilter: string = 'All'



  build() {

    Column() {

      Row() {

        Text("Today's Task")

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .borderRadius(20)

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      this.CalendarWidget()



      Row() {

        ForEach(['All', 'Ongoing', 'Completed'], (filter: string) => {

          Button(filter)

            .backgroundColor(this.selectedFilter === filter ? '#FF7F50' : '#F0F0F0')

            .fontColor(this.selectedFilter === filter ? Color.White : Color.Black)

            .onClick(() => {

              this.selectedFilter = filter

            })

        })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceEvenly)

      .margin({ top: 16, bottom: 16 })



      List() {

        ForEach(this.tasks, (task: Task) => {

          ListItem() {

            this.TaskCard(task)

          }

        }, (task: Task) => task.title)

      }

      .width('100%')

      .layoutWeight(1)



      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

        Button({ type: ButtonType.Circle, stateEffect: true }) {

          Image($r('app.media.template')).width(24).height(24)

        }

        .width(48)

        .height(48)

        .backgroundColor('#00BFFF')

        .onClick(() => {

          router.pushUrl({ url: 'pages/AddTaskPage' })

        })

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor(Color.White)

      .padding({ top: 8, bottom: 8 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F8F8F8')

  }



  @Builder

  CalendarWidget() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Text(this.currentMonth)

          .fontSize(18)

          .fontWeight(FontWeight.Medium)

        Image($r('app.media.template')).width(24).height(24)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceBetween)

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Row() {

        ForEach(['M', 'T', 'W', 'T', 'F', 'S', 'S'], (day: string) => {

          Text(day)

            .fontSize(14)

            .fontColor(Color.Gray)

            .width('14%')

            .textAlign(TextAlign.Center)

        })

      }

      .width('100%')

      .padding({ left: 16, right: 16 })



      Row() {

        ForEach(['14', '15', '16', '17', '18', '19', '20'], (date: string) => {

          Column() {

            Text(date)

              .fontSize(16)

              .fontColor(date === this.selectedDate ? Color.White : Color.Black)

              .width(36)

              .height(36)

              .textAlign(TextAlign.Center)

              .borderRadius(18)

              .backgroundColor(date === this.selectedDate ? '#00BFFF' : Color.Transparent)

          }

          .width('14%')

          .alignItems(HorizontalAlign.Center)

        })

      }

      .width('100%')

      .padding({ left: 16, right: 16 })

    }

    .width('100%')

    .padding({ top: 16, bottom: 16 })

    .backgroundColor(Color.White)

    .borderRadius(16)

  }



  @Builder

  TaskCard(task: Task) {

    Row() {

      Column() {

        Text(task.time).fontSize(14).fontColor(Color.Gray)

        Text(task.title).fontSize(16).fontWeight(FontWeight.Medium)

        Progress({ value: task.progress, total: 100 })

          .width('80%')

          .height(4)

          .color('#00BFFF')

        Text(task.progress + '%').fontSize(14).fontColor('#00BFFF')

      }

      .alignItems(HorizontalAlign.Start)

      .layoutWeight(1)



      Image($r('app.media.template'))

        .width(24)

        .height(24)

    }

    .width('100%')

    .padding(16)

    .backgroundColor(Color.White)

    .borderRadius(8)

    .margin({ bottom: 8 })

    .onClick(() => {

      router.pushUrl({ url: 'pages/TaskDetailsPage' })

    })

  }

}



interface Task {

  title: string

  time: string

  progress: number

}