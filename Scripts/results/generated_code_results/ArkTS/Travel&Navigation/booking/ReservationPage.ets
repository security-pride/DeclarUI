import router from '@ohos.router';



@Entry

@Component

struct ReservationPage {

  @State roomNumber: number = 1;

  @State selectedBedType: string = '无偏好';



  build() {

    Column() {

      Row() {

        Button() {

          Image($r('app.media.template')).width(24).height(24)

        }

        .width(48).height(48)

        .onClick(() => {

          router.back()

        })



        Text('标准间').fontSize(20).fontWeight(FontWeight.Bold)

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceBetween)

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Scroll() {

        Column() {

          Text('客房数量').fontSize(16).margin({ top: 16, bottom: 8 })

          Row() {

            Button('-').onClick(() => {

              if (this.roomNumber > 1) {

                this.roomNumber--;

              }

            })

            Text(`${this.roomNumber}`).fontSize(18).margin({ left: 16, right: 16 })

            Button('+').onClick(() => {

              this.roomNumber++;

            })

          }

          .width('100%')

          .justifyContent(FlexAlign.Center)

          .margin({ bottom: 16 })



          Text('标准间 1').fontSize(18).fontWeight(FontWeight.Bold).margin({ top: 16, bottom: 8 })

          Text('选择床型').fontSize(16).margin({ bottom: 8 })

          Text('请求能否满足需视供应情况而定').fontSize(14).fontColor(Color.Gray).margin({ bottom: 16 })



          Column() {

            Row() {

              Radio({ value: '无偏好', group: 'bedType' }).checked(this.selectedBedType === '无偏好')

                .onChange((isChecked) => {

                  if (isChecked) {

                    this.selectedBedType = '无偏好';

                  }

                })

              Text('无偏好').fontSize(16).margin({ left: 8 })

            }.width('100%').padding(8)



            Row() {

              Radio({ value: '2张单人床', group: 'bedType' }).checked(this.selectedBedType === '2张单人床')

                .onChange((isChecked) => {

                  if (isChecked) {

                    this.selectedBedType = '2张单人床';

                  }

                })

              Text('2张单人床').fontSize(16).margin({ left: 8 })

            }.width('100%').padding(8)



            Row() {

              Radio({ value: '1张超大号双人床', group: 'bedType' }).checked(this.selectedBedType === '1张超大号双人床')

                .onChange((isChecked) => {

                  if (isChecked) {

                    this.selectedBedType = '1张超大号双人床';

                  }

                })

              Text('1张超大号双人床').fontSize(16).margin({ left: 8 })

            }.width('100%').padding(8)

          }

          .width('100%')

          .backgroundColor(Color.White)

          .borderRadius(8)

          .margin({ bottom: 16 })

        }

        .width('100%')

        .padding({ left: 16, right: 16 })

      }

      .layoutWeight(1)



      Column() {

        Text('707元').fontSize(20).fontWeight(FontWeight.Bold)

        Text('含税费及其他费用').fontSize(14).fontColor(Color.Gray)

        Button('确认')

          .width('100%')

          .height(48)

          .backgroundColor('#0A59F7')

          .margin({ top: 8 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/TypeDetailsPage' })

          })

      }

      .width('100%')

      .padding(16)

      .backgroundColor(Color.White)

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}