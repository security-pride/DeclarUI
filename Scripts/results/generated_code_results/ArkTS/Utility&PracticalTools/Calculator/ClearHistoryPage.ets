import router from '@ohos.router';



@Entry

@Component

struct ClearHistoryPage {

  @State theme: string = 'dark';

  @State currentValue: string = '1080';



  build() {

    Column() {

      Row() {

        Toggle({ type: ToggleType.Switch, isOn: this.theme === 'dark' })

          .selectedColor(this.theme === 'dark' ? '#007DFF' : '#E3E3E3')

          .switchPointColor('#FFFFFF')

          .onChange((isOn: boolean) => {

            this.theme = isOn ? 'dark' : 'light';

            if (this.theme === 'light') {

              router.pushUrl({ url: 'pages/DefaultViewPage' });

            }

          })

        Text('Switch to Light')

          .fontSize(14)

          .fontColor(this.theme === 'dark' ? Color.White : Color.Black)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceBetween)

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Text('45 x 24')

        .fontSize(12)

        .fontColor(Color.Gray)

        .alignSelf(ItemAlign.End)

        .margin({ right: 16 })



      Text(this.currentValue)

        .fontSize(48)

        .fontWeight(FontWeight.Bold)

        .fontColor(this.theme === 'dark' ? Color.White : Color.Black)

        .width('100%')

        .textAlign(TextAlign.End)

        .margin({ right: 16 })



      Row() {

        Column() {

          Row() {

            Image($r('app.media.template'))

              .width(24)

              .height(24)

              .margin({ right: 8 })

            Text('No history yet...')

              .fontSize(16)

              .fontColor(Color.Gray)

          }

          .width('100%')

          .justifyContent(FlexAlign.Center)

          .padding({ top: 16, bottom: 16 })



          Button('Clear History')

            .width('100%')

            .height(40)

            .backgroundColor(Color.Gray)

            .fontColor(Color.White)

        }

        .width('70%')

        .backgroundColor(this.theme === 'dark' ? '#333333' : '#F0F0F0')

        .borderRadius(8)



        Column() {

          this.OperationButton('/', 0)

          this.OperationButton('x', 1)

          this.OperationButton('-', 2)

          this.OperationButton('+', 3)

          this.OperationButton('=', 4)

        }

        .margin({ left: 16 })

      }

      .width('100%')

      .justifyContent(FlexAlign.Center)

      .padding(16)

    }

    .width('100%')

    .height('100%')

    .backgroundColor(this.theme === 'dark' ? Color.Black : Color.White)

  }



  @Builder

  OperationButton(text: string, index: number) {

    Button(text)

      .width(48)

      .height(48)

      .backgroundColor(index === 4 ? '#FF1493' : (this.theme === 'dark' ? '#4B0082' : '#E6E6FA'))

      .fontColor(index === 4 ? Color.White : (this.theme === 'dark' ? Color.White : Color.Black))

      .margin({ top: index === 0 ? 0 : 8 })

  }

}