import router from '@ohos.router';



interface RunningMode {

  title: string;

  selected: boolean;

}



interface RunningAction {

  icon: Resource;

  label: string;

}



@Entry

@Component

struct SportsPage {

  @State runningModes: RunningMode[] = [

    { title: '目标跑', selected: false },

    { title: '自由跑', selected: false },

    { title: '轻松跑', selected: true },

    { title: '课程跑', selected: false },

    { title: '自定义', selected: false }

  ];



  @State actions: RunningAction[] = [

    { icon: $r('app.media.template'), label: '路线' },

    { icon: $r('app.media.template'), label: '跑鞋' }

  ];



  @State bottomNavItems: string[] = ['运动日历', '户外跑步', '户外行走', '跳绳'];



  build() {

    Column() {

      this.Header()

      this.Content()

      this.BottomNavigation()

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }



  @Builder Header() {

    Row() {

      Image($r('app.media.template'))

        .width(40)

        .height(40)

        .margin({ right: 10 })

      Text('为你推荐更适合的跑步方式')

        .fontSize(18)

        .fontWeight(FontWeight.Bold)

    }

    .width('100%')

    .padding(16)

    .justifyContent(FlexAlign.Start)

  }



  @Builder Content() {

    Scroll() {

      Column() {

        Button({ type: ButtonType.Capsule }) {

          Row() {

            Image($r('app.media.template')).width(20).height(20)

            Text('开始定制').fontSize(16).margin({ left: 5 })

          }

        }

        .margin({ top: 10, bottom: 20 })

        .backgroundColor('#FFFFFF')

        .onClick(() => {

          router.pushUrl({ url: 'pages/SearchSportsPage' })

        })



        this.RunningCoach()

        this.RunningModes()

        this.RunningActions()

      }

      .width('100%')

      .padding(16)

    }

    .scrollBar(BarState.Off)

    .height('85%')

  }



  @Builder RunningCoach() {

    Column() {

      Text('Hi~ 我是你的轻松跑教练')

        .fontSize(20)

        .fontWeight(FontWeight.Bold)

        .margin({ bottom: 10 })

      Text('帮你轻松面对 3 公里')

        .fontSize(18)

        .margin({ bottom: 10 })

      Row() {

        ForEach(['高效减脂', '不窒气', '轻松跑更远'], (tag: string) => {

          Text('#' + tag)

            .fontSize(14)

            .fontColor(Color.Blue)

            .backgroundColor('#E6F2FF')

            .padding(5)

            .borderRadius(10)

            .margin({ right: 10 })

        })

      }

      Text('限时免费，剩余 3 次 >')

        .fontSize(14)

        .fontColor(Color.Orange)

        .margin({ top: 10 })

    }

    .width('100%')

    .padding(16)

    .borderRadius(10)

    .backgroundColor('#FFFFFF')

    .margin({ bottom: 20 })

  }



  @Builder RunningModes() {

    Row() {

      ForEach(this.runningModes, (mode: RunningMode) => {

        Text(mode.title)

          .fontSize(16)

          .fontColor(mode.selected ? Color.Blue : Color.Black)

          .backgroundColor(mode.selected ? '#E6F2FF' : Color.White)

          .padding(10)

          .borderRadius(20)

          .margin({ right: 10 })

      })

    }

    .width('100%')

    .margin({ bottom: 20 })

  }



  @Builder RunningActions() {

    Row() {

      ForEach(this.actions, (action: RunningAction) => {

        Column() {

          Image(action.icon).width(24).height(24)

          Text(action.label).fontSize(14).margin({ top: 5 })

        }

        .margin({ right: 20 })

      })

      Button('GO', { type: ButtonType.Capsule })

        .width(80)

        .height(80)

        .fontSize(20)

        .fontWeight(FontWeight.Bold)

        .backgroundColor(Color.Green)

        .onClick(() => {

          router.pushUrl({ url: 'pages/SearchSportsPage' })

        })

    }

    .width('100%')

    .justifyContent(FlexAlign.SpaceBetween)

    .padding({ left: 20, right: 20 })

  }



  @Builder BottomNavigation() {

    Row() {

      ForEach(this.bottomNavItems, (item: string) => {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text(item).fontSize(12).margin({ top: 5 })

        }

        .onClick(() => {

          if (item === '运动日历') {

            router.pushUrl({ url: 'pages/HomePage' })

          } else if (item === '户外跑步' || item === '户外行走' || item === '跳绳') {

            router.pushUrl({ url: 'pages/SearchSportsPage' })

          }

        })

      })

    }

    .width('100%')

    .justifyContent(FlexAlign.SpaceAround)

    .padding(10)

    .backgroundColor(Color.White)

    .position({ x: 0, y: '92%' })

  }

}