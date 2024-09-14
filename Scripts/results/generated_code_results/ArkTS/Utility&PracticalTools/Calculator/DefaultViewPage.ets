import router from '@ohos.router';



@Entry

@Component

struct DefaultViewPage {

  @State theme: string = 'light';

  @State currentValue: string = '1080';

  @State operation: string = '45 × 24';



  build() {

    Column() {

      Row() {

        Toggle({ type: ToggleType.Switch, isOn: this.theme === 'dark' })

          .selectedColor(this.theme === 'dark' ? '#007DFF' : '#E3E3E3')

          .switchPointColor('#FFFFFF')

          .onChange((isOn: boolean) => {

            this.theme = isOn ? 'dark' : 'light';

          })

        Text('Switch to Dark')

          .fontSize(14)

          .fontColor(this.theme === 'dark' ? Color.White : Color.Black)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceBetween)

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Text(this.operation)

        .fontSize(12)

        .fontColor(Color.Gray)

        .alignSelf(ItemAlign.End)

        .margin({ right: 16, top: 8 })



      Text(this.currentValue)

        .fontSize(48)

        .fontWeight(FontWeight.Bold)

        .fontColor(this.theme === 'dark' ? Color.White : Color.Black)

        .width('100%')

        .textAlign(TextAlign.End)

        .margin({ right: 16, bottom: 16 })



      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Text(this.currentValue).fontSize(16).fontColor(Color.Gray)

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/ExpandedViewPage' })

          })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceBetween)

      .padding({ left: 16, right: 16 })



      Grid() {

        ForEach(['C', '()', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='], (item: string) => {

          GridItem() {

            Button(item)

              .width('100%')

              .height('100%')

              .fontSize(20)

              .fontColor(this.getButtonFontColor(item))

              .backgroundColor(this.getButtonBackgroundColor(item))

              .onClick(() => this.handleButtonClick(item))

          }

        })

      }

      .columnsTemplate('1fr 1fr 1fr 1fr')

      .rowsTemplate('1fr 1fr 1fr 1fr 1fr')

      .width('100%')

      .aspectRatio(1)

      .margin({ top: 16 })

    }

    .width('100%')

    .height('100%')

    .backgroundColor(this.theme === 'dark' ? Color.Black : Color.White)

  }



  private getButtonFontColor(button: string): ResourceColor {

    if (['C', '()', '%'].includes(button)) {

      return Color.Black;

    }

    if (['÷', '×', '-', '+', '='].includes(button)) {

      return Color.White;

    }

    return this.theme === 'dark' ? Color.White : Color.Black;

  }



  private getButtonBackgroundColor(button: string): ResourceColor {

    if (['C', '()', '%'].includes(button)) {

      return Color.Gray;

    }

    if (['÷', '×', '-', '+'].includes(button)) {

      return '#4B0082';

    }

    if (button === '=') {

      return '#FF1493';

    }

    return this.theme === 'dark' ? Color.Black : Color.White;

  }



  private handleButtonClick(button: string) {

    // Implement button click logic here

  }

}