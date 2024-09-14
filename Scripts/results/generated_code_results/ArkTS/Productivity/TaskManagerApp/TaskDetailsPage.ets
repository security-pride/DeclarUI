import router from '@ohos.router';

interface TaskInfo {
  title: string;
  date: string;
  time: string;
}

interface ProgressChart {
  finishOnTime: number;
  pastDeadline: number;
  stillOngoing: number;
}

interface SubTask {
  title: string;
  date: string;
  completed: boolean;
}

@Entry
@Component
struct TaskDetailsPage {
  @State taskInfo: TaskInfo = {
    title: 'User experience design',
    date: '18-02-2022',
    time: '9:00 AM-12:00 PM'
  }

  @State progressChart: ProgressChart = {
    finishOnTime: 40,
    pastDeadline: 40,
    stillOngoing: 20
  }

  @State description: string = "Task management is the process which is monitoring your fast project's tasks through their various stages from start......See more"

  @State subTasks: SubTask[] = [
    { title: 'Website Redesign', date: '18 Feb 2022', completed: true },
    { title: 'Website Design', date: '19 Feb 2022', completed: false }
  ]

  build() {
    Column() {
      Row() {
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .margin({ right: 16 })
          .onClick(() => {
            router.back()
          })
        Text('Task Details')
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
      .height(56)
      .padding({ left: 16, right: 16 })
      .backgroundColor('#F1F3F5')

      Scroll() {
        Column() {
          Text(this.taskInfo.title)
            .fontSize(24)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 16, bottom: 8 })
          Row() {
            Text(this.taskInfo.date)
              .fontSize(14)
              .fontColor('#666')
            Text(this.taskInfo.time)
              .fontSize(14)
              .fontColor('#666')
              .margin({ left: 16 })
          }

          Row() {
            Stack() {
              Progress({
                value: this.progressChart.finishOnTime + this.progressChart.pastDeadline + this.progressChart.stillOngoing,
                total: 100,
                type: ProgressType.Ring
              })
                .width(150)
                .height(150)
                .color('#00BFFF')
              Progress({
                value: this.progressChart.finishOnTime + this.progressChart.pastDeadline,
                total: 100,
                type: ProgressType.Ring
              })
                .width(150)
                .height(150)
                .color('#FF6347')
              Progress({
                value: this.progressChart.finishOnTime,
                total: 100,
                type: ProgressType.Ring
              })
                .width(150)
                .height(150)
                .color('#32CD32')
            }
            .width(150)
            .height(150)

            Column() {
              this.LegendItem('Finish on time', '#32CD32', this.progressChart.finishOnTime)
              this.LegendItem('Past the deadline', '#FF6347', this.progressChart.pastDeadline)
              this.LegendItem('Still ongoing', '#00BFFF', this.progressChart.stillOngoing)
            }
            .margin({ left: 16 })
          }
          .margin({ top: 24, bottom: 24 })

          Text('Description')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 8 })
          Text(this.description)
            .fontSize(14)
            .fontColor('#666')

          Text('Sub Task')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 24, bottom: 16 })
          ForEach(this.subTasks, (task: SubTask) => {
            Row() {
              Checkbox({ name: task.title, group: 'subTasks' })
                .select(task.completed)
                .onChange((value: boolean) => {
                  task.completed = value
                })
              Column() {
                Text(task.title)
                  .fontSize(16)
                Text(task.date)
                  .fontSize(14)
                  .fontColor('#666')
              }
              .margin({ left: 16 })
            }
            .width('100%')
            .height(60)
            .backgroundColor('#F8F8F8')
            .borderRadius(8)
            .padding(16)
            .margin({ bottom: 8 })
          })
        }
        .width('100%')
        .padding(16)
      }
      .layoutWeight(1)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#FFFFFF')
  }

  @Builder
  LegendItem(text: string, color: string, percentage: number) {
    Row() {
      Circle({ width: 12, height: 12 })
        .fill(color)
      Text(text)
        .fontSize(14)
        .margin({ left: 8, right: 8 })
      Text(`${percentage}%`)
        .fontSize(14)
        .fontWeight(FontWeight.Bold)
    }
    .width('100%')
    .margin({ bottom: 8 })
  }
}