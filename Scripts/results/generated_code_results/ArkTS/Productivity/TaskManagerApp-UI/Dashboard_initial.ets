import router from '@ohos.router';



interface ChartData {

  value: number;

  color: string;

}



interface StatItem {

  label: string;

  value: number;

  icon: Resource;

}



@Entry

@Component

struct DashboardPage {

  @State chartData: ChartData[] = [

    { value: 15, color: '#FF7F50' },

    { value: 13, color: '#8A2BE2' },

    { value: 28, color: '#20B2AA' }

  ];



  @State stats: StatItem[] = [

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

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .margin({ left: 'auto' })

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Scroll() {

        Column() {

          Row() {

            this.DonutChart()

          }

          .justifyContent(FlexAlign.Center)

          .margin({ top: 20, bottom: 20 })



          ForEach(this.stats, (item: StatItem) => {

            this.StatItem(item)

          })

        }

        .width('100%')

      }

      .layoutWeight(1)



      Row() {

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/BoardPage' }))

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/DashboardPage' }))

        Image($r('app.media.template'))

          .width(48)

          .height(48)

          .onClick(() => router.pushUrl({ url: 'pages/AddTaskPage' }))

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/TaskPage' }))

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/MessagePage' }))

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceEvenly)

      .backgroundColor('#6750A4')

      .padding({ top: 8, bottom: 8 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F5F5F5')

  }



  @Builder

  DonutChart() {

    Stack() {

      Progress({ value: this.chartData[0].value, total: 100, type: ProgressType.Ring })

        .color(this.chartData[0].color)

        .width(200)

        .height(200)

      Progress({ value: this.chartData[1].value, total: 100, type: ProgressType.Ring })

        .color(this.chartData[1].color)

        .width(160)

        .height(160)

      Progress({ value: this.chartData[2].value, total: 100, type: ProgressType.Ring })

        .color(this.chartData[2].color)

        .width(120)

        .height(120)

    }

  }



  @Builder

  StatItem(item: StatItem) {

    Row() {

      Row() {

        Image(item.icon)

          .width(24)

          .height(24)

          .margin({ right: 16 })

        Text(item.label)

          .fontSize(16)

          .fontWeight(FontWeight.Medium)

      }



      Text(item.value.toString())

        .fontSize(16)

        .fontWeight(FontWeight.Bold)

    }

    .width('100%')

    .justifyContent(FlexAlign.SpaceBetween)

    .padding(16)

    .backgroundColor(Color.White)

    .borderRadius(8)

    .margin({ bottom: 12 })

  }

}