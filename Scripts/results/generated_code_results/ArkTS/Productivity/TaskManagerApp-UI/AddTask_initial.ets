import router from '@ohos.router';



interface TeamMember {

  name: string;

  avatar: Resource;

  selected: boolean;

}



@Entry

@Component

struct AddTaskPage {

  @State taskName: string = '';

  @State description: string = '';

  @State date: string = 'May 01, 2020';

  @State startTime: string = '10:00 AM';

  @State endTime: string = '01:00 PM';

  @State selectedBoard: string = 'RUNNING';

  @State teamMembers: TeamMember[] = [

    { name: 'John', avatar: $r('app.media.template'), selected: false },

    { name: 'Ranak', avatar: $r('app.media.template'), selected: false },

    { name: 'Parkao', avatar: $r('app.media.template'), selected: true },

    { name: 'Mahmud', avatar: $r('app.media.template'), selected: false },

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => {

            router.back()

          })

        Text('Add Task').fontSize(20).fontWeight(FontWeight.Bold)

      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)



      Scroll() {

        Column() {

          this.InputField('TASK NAME', this.taskName, (value: string) => this.taskName = value)

          

          Text('TEAM MEMBER').fontSize(14).opacity(0.6).alignSelf(FlexAlignment.Start).margin({ top: 16, bottom: 8 })

          Row() {

            ForEach(this.teamMembers, (member, index) => {

              Column() {

                Stack() {

                  Image(member.avatar).width(40).height(40).borderRadius(20)

                  if (member.selected) {

                    Circle({ width: 16, height: 16 })

                      .fill(Color.Blue)

                      .position({ x: 30, y: 30 })

                  }

                }

                Text(member.name).fontSize(12).margin({ top: 4 })

              }.onClick(() => {

                this.teamMembers[index].selected = !this.teamMembers[index].selected

              })

            })

            Image($r('app.media.template')).width(40).height(40)

          }.width('100%').justifyContent(FlexAlign.SpaceBetween)



          this.InputField('DATE', this.date, (value: string) => this.date = value)

          Row() {

            Column() {

              this.InputField('START TIME', this.startTime, (value: string) => this.startTime = value)

            }.layoutWeight(1)

            Column() {

              this.InputField('END TIME', this.endTime, (value: string) => this.endTime = value)

            }.layoutWeight(1)

          }



          this.InputField('DESCRIPTION', this.description, (value: string) => this.description = value)



          Text('BOARD').fontSize(14).opacity(0.6).alignSelf(FlexAlignment.Start).margin({ top: 16, bottom: 8 })

          Row() {

            ForEach(['URGENT', 'RUNNING', 'ONGOING'], (board) => {

              Text(board)

                .padding(8)

                .backgroundColor(this.selectedBoard === board ? Color.Green : Color.Gray)

                .borderRadius(16)

                .fontSize(14)

                .fontColor(Color.White)

                .onClick(() => this.selectedBoard = board)

            })

          }.width('100%').justifyContent(FlexAlign.SpaceBetween)



          Button('Done')

            .width('100%')

            .height(50)

            .margin({ top: 24 })

            .onClick(() => {

              // Handle task creation logic here

              router.back()

            })

        }.padding(16)

      }.height('80%')



      Row() {

        ForEach(['grid', 'checkmark', 'plus', 'document', 'chat'], (icon, index) => {

          Image($r('app.media.template'))

            .width(24).height(24)

            .onClick(() => {

              switch (index) {

                case 0:

                  router.pushUrl({ url: 'pages/BoardPage' })

                  break

                case 1:

                  router.pushUrl({ url: 'pages/DashboardPage' })

                  break

                case 2:

                  // Already on AddTask page

                  break

                case 3:

                  router.pushUrl({ url: 'pages/TaskPage' })

                  break

                case 4:

                  router.pushUrl({ url: 'pages/MessagePage' })

                  break

              }

            })

        })

      }.width('100%').justifyContent(FlexAlign.SpaceAround).padding({ top: 8, bottom: 8 })

    }

  }



  @Builder

  InputField(label: string, value: string, onChange: (value: string) => void) {

    Column() {

      Text(label).fontSize(14).opacity(0.6).alignSelf(FlexAlignment.Start)

      TextInput({ text: value })

        .width('100%')

        .height(40)

        .onChange((value: string) => onChange(value))

    }.width('100%').margin({ top: 16 })

  }

}