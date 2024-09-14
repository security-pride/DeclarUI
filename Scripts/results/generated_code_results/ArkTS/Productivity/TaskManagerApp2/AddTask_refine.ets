import router from '@ohos.router';
import { State, Component, Builder } from '@ohos.decorator';
import { TextInputType } from '@ohos.arkui.advanced.TextInput';
@Component
export struct AddTaskPage {
@State title: string = 'Plan for a month';
@State date: string = '4 August 2021';
@State startTime: string = '07:00';
@State endTime: string = '07:30';
@State description: string = "Creating this month's work plan";
@State selectedType: string = 'Personal';
@State tags: string[] = ['Office', 'Home', 'Urgent', 'Work'];
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ left: 16 })
.onClick(() => {
router.back();
})
Text('Add Task')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.margin({ left: 16 })
}
.width('100%')
.height(56)
.backgroundColor('#FFFFFF')
  Scroll() {
    Column() {
      TextInput({ placeholder: 'Title', text: this.title })
        .type(TextInputType.Normal)
        .fontSize(16)
        .height(48)
        .margin({ top: 16 })
        .onChange((value: string) => {
          this.title = value;
        })

      Row() {
        Text('Date')
          .fontSize(16)
        DatePicker({
          start: new Date('2021-01-01'),
          end: new Date('2030-12-31'),
          selected: new Date('2021-08-04')
        })
          .onChange((value: DatePickerResult) => {
            this.date = `${value.year}-${value.month + 1}-${value.day}`;
          })
      }
      .width('100%')
      .margin({ top: 16 })

      Row() {
        Text('Time')
          .fontSize(16)
        TimePicker({ selected: this.startTime })
          .useMilitaryTime(true)
          .onChange((value: TimePickerResult) => {
            this.startTime = `${value.hour}:${value.minute}`;
          })
        Text('-')
          .fontSize(16)
        TimePicker({ selected: this.endTime })
          .useMilitaryTime(true)
          .onChange((value: TimePickerResult) => {
            this.endTime = `${value.hour}:${value.minute}`;
          })
      }
      .width('100%')
      .margin({ top: 16 })

      TextArea({ placeholder: 'Description', text: this.description })
        .height(120)
        .margin({ top: 16 })
        .onChange((value: string) => {
          this.description = value;
        })

      Column() {
        Text('Type')
          .fontSize(16)
        Row() {
          Radio({ value: 'Personal', group: 'taskType' })
            .checked(this.selectedType === 'Personal')
            .onChange((isChecked: boolean) => {
              if (isChecked) {
                this.selectedType = 'Personal';
              }
            })
          Text('Personal').fontSize(14)
          Radio({ value: 'Private', group: 'taskType' })
            .checked(this.selectedType === 'Private')
            .onChange((isChecked: boolean) => {
              if (isChecked) {
                this.selectedType = 'Private';
              }
            })
          Text('Private').fontSize(14)
          Radio({ value: 'Secret', group: 'taskType' })
            .checked(this.selectedType === 'Secret')
            .onChange((isChecked: boolean) => {
              if (isChecked) {
                this.selectedType = 'Secret';
              }
            })
          Text('Secret').fontSize(14)
        }
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .margin({ top: 16 })

      Column() {
        Text('Tags')
          .fontSize(16)
        Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {
          ForEach(this.tags, (tag: string) => {
            Tag({ tag: tag })
          })
          Button('+ Add new tag')
            .fontSize(14)
            .fontColor('#0000FF')
            .backgroundColor(Color.Transparent)
            .onClick(() => {
              // Add new tag logic
            })
        }
      }
      .margin({ top: 16 })

      Button('Create')
        .width('100%')
        .height(48)
        .margin({ top: 24 })
        .onClick(() => {
          // Save task logic
          router.pushUrl({ url: 'pages/Home' });
        })
    }
    .padding(16)
  }
  .layoutWeight(1)
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
}
@Component
struct Tag {
tag: string
build() {
Text(this.tag)
.fontSize(14)
.backgroundColor('#E1E3E6')
.padding({ left: 8, right: 8, top: 4, bottom: 4 })
.borderRadius(16)
.margin({ right: 8, bottom: 8 })
}
}