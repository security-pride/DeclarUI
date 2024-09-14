import router from '@ohos.router';



interface ShapeOption {

  name: string;

  icon: Resource;

}



@Entry

@Component

struct PillIdentifierPage {

  @State searchText: string = '';

  @State selectedShape: string = '';

  @State shapes: ShapeOption[] = [

    { name: 'Round', icon: $r('app.media.template') },

    { name: 'Oblong', icon: $r('app.media.template') },

    { name: '3 Sided', icon: $r('app.media.template') },

    { name: 'Square', icon: $r('app.media.template') },

    { name: 'Rectangle', icon: $r('app.media.template') },

    { name: 'Diamond', icon: $r('app.media.template') },

    { name: '5 Sided', icon: $r('app.media.template') },

    { name: '6 Sided', icon: $r('app.media.template') },

    { name: '7 Sided', icon: $r('app.media.template') },

    { name: '8 Sided', icon: $r('app.media.template') },

    { name: 'Other', icon: $r('app.media.template') }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/HomePage' })

          })

        Search({ value: this.searchText, placeholder: 'Text or imprint on pill' })

          .width('80%')

          .height(40)

          .backgroundColor('#F1F3F5')

          .placeholderColor('#99182431')

          .placeholderFont({ size: 16, weight: 400 })

          .textFont({ size: 16, weight: 400 })

          .onChange((value: string) => {

            this.searchText = value;

          })

        Text('Clear')

          .fontSize(16)

          .fontColor('#0A59F7')

          .margin({ left: 8 })

          .onClick(() => {

            this.searchText = '';

          })

      }

      .width('100%')

      .padding(16)



      Row() {

        Text('Shape')

          .fontSize(16)

          .fontWeight(FontWeight.Bold)

        Text('Color')

          .fontSize(16)

          .fontColor(Color.Gray)

          .margin({ left: 24 })

      }

      .width('100%')

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Divider().color('#E0E0E0').height(1)



      Text('Select the shape that best matches your prescription or OTC drug')

        .fontSize(14)

        .margin({ top: 16, bottom: 16 })

        .textAlign(TextAlign.Center)



      Grid() {

        ForEach(this.shapes, (shape: ShapeOption) => {

          GridItem() {

            Column() {

              Image(shape.icon)

                .width(48)

                .height(48)

              Text(shape.name)

                .fontSize(12)

                .margin({ top: 8 })

            }

            .onClick(() => {

              this.selectedShape = shape.name;

            })

            .backgroundColor(this.selectedShape === shape.name ? '#E8F4FF' : Color.White)

            .borderRadius(8)

            .padding(8)

          }

        })

      }

      .columnsTemplate('1fr 1fr 1fr')

      .rowsTemplate('1fr 1fr 1fr 1fr')

      .columnsGap(16)

      .rowsGap(16)

      .padding({ left: 16, right: 16 })



      Button('View Results')

        .width('90%')

        .height(48)

        .fontSize(16)

        .fontWeight(FontWeight.Bold)

        .backgroundColor('#0A59F7')

        .margin({ top: 24, bottom: 24 })

        .onClick(() => {

          router.pushUrl({ url: 'pages/IdentifyResultPage' })

        })

    }

    .width('100%')

    .height('100%')

    .backgroundColor(Color.White)

  }

}