import router from '@ohos.router';



@Entry

@Component

struct ExpandedViewPage {

  @State theme: string = 'light';

  @State currentValue: string = '1080';

  @State operation: string = '45 × 24';

  @State isRadianMode: boolean = false;



  @Builder

  CalcButton(text: string, type: 'normal' | 'operation' | 'function' | 'equal' = 'normal') {

    Button(text)

      .width('100%')

      .height('100%')

      .fontSize(18)

      .fontColor(type === 'normal' ? (this.theme === 'dark' ? Color.White : Color.Black) : Color.White)

      .backgroundColor(this.getButtonColor(type))

      .onClick(() => this.handleButtonClick(text))

  }



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

        .fontSize(16)

        .fontColor(Color.Gray)

        .textAlign(TextAlign.End)

        .width('100%')

        .padding({ right: 16 })



      Text(this.currentValue)

        .fontSize(48)

        .fontWeight(FontWeight.Bold)

        .fontColor(this.theme === 'dark' ? Color.White : Color.Black)

        .textAlign(TextAlign.End)

        .width('100%')

        .padding({ right: 16 })



      Row() {

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/ExpandedViewShowHistoryPage' })

          })

        Button(this.isRadianMode ? 'Rad' : 'Deg')

          .onClick(() => {

            this.isRadianMode = !this.isRadianMode;

          })

        Image($r('app.media.template')).width(24).height(24)

        Text(this.currentValue).fontSize(16).fontColor(Color.Gray)

        Image($r('app.media.template')).width(24).height(24)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceBetween)

      .padding({ left: 16, right: 16 })



      Grid() {

        GridItem() { this.CalcButton('⇄', 'function') }

        GridItem() { this.CalcButton('Deg/Rad', 'function') }

        GridItem() { this.CalcButton('√', 'function') }

        GridItem() { this.CalcButton('C', 'function') }

        GridItem() { this.CalcButton('()', 'function') }

        GridItem() { this.CalcButton('%', 'function') }

        GridItem() { this.CalcButton('/', 'operation') }

        GridItem() { this.CalcButton('sin', 'function') }

        GridItem() { this.CalcButton('cos', 'function') }

        GridItem() { this.CalcButton('tan', 'function') }

        GridItem() { this.CalcButton('7') }

        GridItem() { this.CalcButton('8') }

        GridItem() { this.CalcButton('9') }

        GridItem() { this.CalcButton('×', 'operation') }

        GridItem() { this.CalcButton('log10', 'function') }

        GridItem() { this.CalcButton('log', 'function') }

        GridItem() { this.CalcButton('1/x', 'function') }

        GridItem() { this.CalcButton('4') }

        GridItem() { this.CalcButton('5') }

        GridItem() { this.CalcButton('6') }

        GridItem() { this.CalcButton('-', 'operation') }

        GridItem() { this.CalcButton('eⁿ', 'function') }

        GridItem() { this.CalcButton('x²', 'function') }

        GridItem() { this.CalcButton('xⁿ', 'function') }

        GridItem() { this.CalcButton('1') }

        GridItem() { this.CalcButton('2') }

        GridItem() { this.CalcButton('3') }

        GridItem() { this.CalcButton('+', 'operation') }

        GridItem() { this.CalcButton('|x|', 'function') }

        GridItem() { this.CalcButton('π', 'function') }

        GridItem() { this.CalcButton('e', 'function') }

        GridItem() { this.CalcButton('+/-', 'function') }

        GridItem() { this.CalcButton('0') }

        GridItem() { this.CalcButton('.') }

        GridItem() { this.CalcButton('=', 'equal') }

      }

      .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr')

      .rowsTemplate('1fr 1fr 1fr 1fr 1fr')

      .width('100%')

      .height('60%')

    }

    .width('100%')

    .height('100%')

    .backgroundColor(this.theme === 'dark' ? Color.Black : Color.White)

  }



  private getButtonColor(type: string): Color {

    switch (type) {

      case 'operation':

        return Color.Blue;

      case 'function':

        return Color.Orange;

      case 'equal':

        return Color.Red;

      default:

        return this.theme === 'dark' ? Color.DarkGray : Color.LightGray;

    }

  }



  private handleButtonClick(text: string) {

    // Implement button click logic here

  }

}