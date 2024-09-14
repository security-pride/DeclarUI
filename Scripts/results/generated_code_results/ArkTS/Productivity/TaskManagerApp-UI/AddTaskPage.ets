import router from '@ohos.router';



interface TeamMember {

  name: string;

  avatar: Resource;

  selected: boolean;

}



interface TaskFormData {

  taskName: string;

  description: string;

  date: string;

  startTime: string;

  endTime: string;

  selectedBoard: string;

}



@Entry

@Component

struct AddTaskPage {

  @State formData: TaskFormData = {

    taskName: '',

    description: '',

    date: 'May 01, 2020',

    startTime: '10:00 AM',

    endTime: '01:00 PM',

    selectedBoard: 'RUNNING'

  };

  @State teamMembers: TeamMember[] = [

    { name: 'John', avatar: $r('app.media.template'), selected: false },

    { name: 'Ranak', avatar: $r('app.media.template'), selected: false },

    { name: 'Parkao', avatar: $r('app.media.template'), selected: true },

    { name: 'Mahmud', avatar: $r('app.media.template'), selected: false },

  ];



  build() {

    Column() {

      this.Header()

      Scroll() {

        Column() {

          this.InputField('TASK NAME', this.formData.taskName, (value: string) => this.formData.taskName = value)

          this.TeamMemberSelection()

          this.InputField('DATE', this.formData.date, (value: string) => this.formData.date = value)

          Row() {

            this.InputField('START TIME', this.formData.startTime, (value: string) => this.formData.startTime = value)

            this.InputField('END TIME', this.formData.endTime, (value: string) => this.formData.endTime = value)

          }

          this.InputField('DESCRIPTION', this.formData.description, (value: string) => this.formData.description = value)

          this.BoardSelection()

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

      this.BottomNavigation()

    }

  }



  @Builder

  Header() {

    Row() {

      Image($r('app.media.template')).width(24).height(24)

        .onClick(() => router.back())

      Text('Add Task').fontSize(20).fontWeight(FontWeight.Bold)

    }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(16)

  }



  @Builder

  InputField(label: string, value: string, onChange: (value: string) => void) {

    Column() {

      Text(label).fontSize(14).opacity(0.6).alignSelf(ItemAlign.Start)

      TextInput({ text: value })

        .width('100%')

        .height(40)

        .onChange((value: string) => onChange(value))

    }.width('100%').margin({ top: 16 })

  }



  @Builder

  TeamMemberSelection() {

    Column() {

      Text('TEAM MEMBER').fontSize(14).opacity(0.6).alignSelf(ItemAlign.Start).margin({ top: 16, bottom: 8 })

      Row() {

        ForEach(this.teamMembers, (member: TeamMember, index: number) => {

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

    }

  }



  @Builder

  BoardSelection() {

    Column() {

      Text('BOARD').fontSize(14).opacity(0.6).alignSelf(ItemAlign.Start).margin({ top: 16, bottom: 8 })

      Row() {

        ForEach(['URGENT', 'RUNNING', 'ONGOING'], (board: string) => {

          Text(board)

            .padding(8)

            .backgroundColor(this.formData.selectedBoard === board ? Color.Green : Color.Gray)

            .borderRadius(16)

            .fontSize(14)

            .fontColor(Color.White)

            .onClick(() => this.formData.selectedBoard = board)

        })

      }.width('100%').justifyContent(FlexAlign.SpaceBetween)

    }

  }



  @Builder

  BottomNavigation() {

    Row() {

      ForEach(['grid', 'checkmark', 'plus', 'document', 'chat'], (icon: string, index: number) => {

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