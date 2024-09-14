import router from '@ohos.router';



@Entry

@Component

struct LogInPage {

  @State phoneNumber: string = '';

  @State countryCode: string = '+1';



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/SettingsPage' })

          })

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Text('BREAKING')

        .fontSize(24)

        .fontWeight(FontWeight.Bold)

        .margin({ top: 20, bottom: 4 })



      Text('By SAFE APPS')

        .fontSize(14)

        .fontColor(Color.Red)

        .margin({ bottom: 20 })



      Text('请输入您的电话号码')

        .fontSize(16)

        .margin({ bottom: 16 })



      Row() {

        Select([

          { value: '+1' },

          { value: '+86' },

          { value: '+44' }

        ])

          .selected(this.countryCode)

          .onSelect((index: number) => {

            this.countryCode = ['+1', '+86', '+44'][index];

          })

          .width(80)



        TextInput({ placeholder: '输入电话号码' })

          .type(InputType.PhoneNumber)

          .onChange((value: string) => {

            this.phoneNumber = value;

          })

          .width('70%')

      }

      .width('90%')

      .margin({ bottom: 20 })



      Button('继续')

        .width('90%')

        .height(50)

        .backgroundColor(Color.Red)

        .fontColor(Color.White)

        .onClick(() => {

          // Implement login logic here

          console.info('Phone number submitted:', this.phoneNumber);

        })



      Grid() {

        ForEach(['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'], (key: string) => {

          GridItem() {

            Button({ type: ButtonType.Normal, stateEffect: true }) {

              Text(key)

                .fontSize(20)

                .fontColor(Color.Black)

            }

            .width('100%')

            .height(60)

            .backgroundColor(Color.White)

          }

        })

      }

      .columnsTemplate('1fr 1fr 1fr')

      .rowsTemplate('1fr 1fr 1fr 1fr')

      .width('90%')

      .height(240)

      .margin({ top: 20 })



      Row() {

        Button({ type: ButtonType.Normal, stateEffect: true }) {

          Text('ABC')

            .fontSize(16)

            .fontColor(Color.White)

        }

        .width(80)

        .height(40)

        .backgroundColor(Color.Gray)



        Blank()



        Button({ type: ButtonType.Normal, stateEffect: true }) {

          Text('删除')

            .fontSize(16)

            .fontColor(Color.White)

        }

        .width(80)

        .height(40)

        .backgroundColor(Color.Gray)

      }

      .width('90%')

      .margin({ top: 10 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor(Color.White)

  }

}