import router from '@ohos.router';



interface ReminderData {

  dosage: string;

  time: string;

  additionalTime: string;

}



@Entry

@Component

struct ReminderPage {

  @State reminderData: ReminderData = {

    dosage: 'Select Dosage',

    time: '00:27',

    additionalTime: ''

  };



  build() {

    Column() {

      Row() {

        Text('Cancel')

          .fontSize(16)

          .fontColor('#007AFF')

          .onClick(() => router.pushUrl({ url: 'pages/ResultDetailPage' }))

        Text('Edit Reminder')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

      }

      .width('100%')

      .padding(16)

      .justifyContent(FlexAlign.SpaceBetween)



      Scroll() {

        Column() {

          Row() {

            Image($r('app.media.template'))

              .width(60)

              .height(60)

              .borderRadius(8)

            Text('Abilify')

              .fontSize(24)

              .fontWeight(FontWeight.Bold)

              .margin({ left: 16 })

          }

          .width('100%')

          .padding(16)

          .backgroundColor(Color.White)

          .borderRadius(8)



          Column() {

            this.ReminderItem('Dosage', this.reminderData.dosage, $r('app.media.template'))

            Divider().color('#E0E0E0').height(1)

            this.ReminderItem('Time', this.reminderData.time, $r('app.media.template'))

            Divider().color('#E0E0E0').height(1)

            this.ReminderItem('Add Another Time', this.reminderData.additionalTime || 'Enter Time', $r('app.media.template'))

          }

          .width('100%')

          .margin({ top: 16 })

          .padding(16)

          .backgroundColor(Color.White)

          .borderRadius(8)

        }

      }

      .layoutWeight(1)



      Button('Done')

        .width('90%')

        .height(50)

        .fontSize(18)

        .fontWeight(FontWeight.Bold)

        .backgroundColor('#007AFF')

        .margin({ bottom: 16 })

        .onClick(() => router.pushUrl({ url: 'pages/ResultDetailPage' }))

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F2F2F7')

  }



  @Builder

  ReminderItem(label: string, value: string, icon: Resource) {

    Row() {

      Image(icon)

        .width(24)

        .height(24)

      Text(label)

        .fontSize(16)

        .margin({ left: 8 })

      Blank()

      Text(value)

        .fontSize(16)

        .fontColor(label === 'Dosage' ? '#007AFF' : Color.Black)

    }

    .width('100%')

    .padding({ top: 16, bottom: 16 })

    .onClick(() => {

      // Handle item click

    })

  }

}