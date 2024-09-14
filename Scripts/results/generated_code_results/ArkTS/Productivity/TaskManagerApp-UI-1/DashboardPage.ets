import router from '@ohos.router';
import { Color } from '@ohos.global';

interface TaskStats {
  label: string;
  value: number;
  icon: Resource;
}

interface ChartData {
  value: number;
  color: Color;
}

@Entry
@Component
struct DashboardPage {
  @State chartData: ChartData[] = [
    { value: 15, color: Color.Pink },
    { value: 13, color: Color.Purple },
    { value: 28, color: Color.Blue }
  ];

  @State taskStats: TaskStats[] = [
    { label: 'Total task', value: 55, icon: $r('app.media.template') },
    { label: 'Completed', value: 13, icon: $r('app.media.template') },
    { label: 'Working on', value: 25, icon: $r('app.media.template') },
    { label: 'Pending', value: 17, icon: $r('app.media.template') }
  ];

  build() {
    Column() {
      Row() {
        Text('Dashboard')
          .fontSize(24)
          .fontWeight(FontWeight.Bold)
        Blank()
        Image($r('app.media.template'))
          .width(40)
          .height(40)
          .borderRadius(20)
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 8, bottom: 8 })

      Scroll() {
        Column() {
          Row() {
            DonutChart({ data: this.chartData })
              .width(200)
              .height(200)
          }
          .justifyContent(FlexAlign.Center)
          .width('100%')
          .margin({ top: 20, bottom: 20 })

          ForEach(this.taskStats, (stat: TaskStats) => {
            Row() {
              Image(stat.icon)
                .width(24)
                .height(24)
                .margin({ right: 16 })
              Text(stat.label)
                .fontSize(16)
                .layoutWeight(1)
              Text(stat.value.toString())
                .fontSize(16)
                .fontWeight(FontWeight.Bold)
            }
            .width('100%')
            .backgroundColor(Color.White)
            .borderRadius(8)
            .padding(16)
            .margin({ bottom: 8 })
          })
        }
        .width('100%')
        .padding({ left: 16, right: 16 })
      }
      .layoutWeight(1)

      Row() {
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => router.pushUrl({ url: 'pages/BoardPage' }))
        Blank()
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Blank()
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => router.pushUrl({ url: 'pages/AddTaskPage' }))
        Blank()
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => router.pushUrl({ url: 'pages/TaskPage' }))
        Blank()
        Image($r('app.media.template'))
          .width(24)
          .height(24)
          .onClick(() => router.pushUrl({ url: 'pages/MessagePage' }))
      }
      .width('100%')
      .height(56)
      .padding({ left: 16, right: 16 })
      .backgroundColor(Color.White)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F3F5')
  }
}

@Component
struct DonutChart {
  private data: ChartData[] = []

  build() {
    Stack() {
      Circle()
        .fill(Color.White)
        .width('80%')
        .height('80%')

      ForEach(this.data, (item: ChartData, index: number) => {
        Shape() {
          Path()
            .moveTo(100, 100)
            .arcTo(100, 100, 50, this.getStartAngle(index), item.value / 100 * 360)
            .close()
            .fill(item.color)
        }
        .width('100%')
        .height('100%')
      })

      Text(`${this.getTotalPercentage()}%`)
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
    }
    .width('100%')
    .height('100%')
  }

  private getStartAngle(index: number): number {
    let angle = 0;
    for (let i = 0; i < index; i++) {
      angle += this.data[i].value / 100 * 360;
    }
    return angle;
  }

  private getTotalPercentage(): number {
    return this.data.reduce((sum, item) => sum + item.value, 0);
  }
}