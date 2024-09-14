import router from '@ohos.router';



interface BoardItem {

  name: string;

  icon: Resource;

  tasks: number;

}



@Entry

@Component

struct BoardPage {

  @State boards: BoardItem[] = [

    { name: 'Personal', icon: $r('app.media.template'), tasks: 17 },

    { name: 'Work', icon: $r('app.media.template'), tasks: 10 },

    { name: 'Private', icon: $r('app.media.template'), tasks: 2 },

    { name: 'Meeting', icon: $r('app.media.template'), tasks: 5 },

    { name: 'Events', icon: $r('app.media.template'), tasks: 3 },

    { name: 'Create Board', icon: $r('app.media.template'), tasks: 0 }

  ];



  build() {

    Column() {

      Row() {

        Text('Board')

          .fontSize(24)

          .fontWeight(FontWeight.Bold)

        Image($r('app.media.template'))

          .width(40)

          .height(40)

          .margin({ left: 'auto' })

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Grid() {

        ForEach(this.boards, (board: BoardItem) => {

          GridItem() {

            this.BoardCard(board)

          }

        })

      }

      .columnsTemplate('1fr 1fr')

      .rowsGap(16)

      .columnsGap(16)

      .padding(16)



      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template'))

          .width(48)

          .height(48)

          .onClick(() => {

            router.pushUrl({ url: 'pages/AddTaskPage' })

          })

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

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

  BoardCard(board: BoardItem) {

    Column() {

      Row() {

        Image(board.icon)

          .width(40)

          .height(40)

          .backgroundColor('#E8DEF8')

          .borderRadius(20)

      }

      .width(80)

      .height(80)

      .justifyContent(FlexAlign.Center)

      .backgroundColor('#F3EDF7')

      .borderRadius(40)



      Text(board.name)

        .fontSize(16)

        .fontWeight(FontWeight.Medium)

        .margin({ top: 8 })



      if (board.name !== 'Create Board') {

        Text(`${board.tasks} Task`)

          .fontSize(14)

          .fontColor('#999999')

      }

    }

    .width('100%')

    .height(160)

    .backgroundColor(Color.White)

    .borderRadius(16)

    .justifyContent(FlexAlign.Center)

    .onClick(() => {

      if (board.name === 'Create Board') {

        // Handle create board action

      } else {

        // Navigate to board details

      }

    })

  }

}