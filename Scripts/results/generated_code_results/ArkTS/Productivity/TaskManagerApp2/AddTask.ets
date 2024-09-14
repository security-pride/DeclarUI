import router from '@ohos.router';
import { CommonConstants } from '../common/constants/CommonConstants';
@Entry
@Component
struct AddTaskPage {
@State title: string = 'Plan for a month';
@State date: Date = new Date('2021-08-04');
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
router.pushUrl({ url: 'pages/Home' });
})
Text('Add Task')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.margin({ left: 16 })
}
.width('100%')
.height(56)
.alignItems(VerticalAlign.Center)
  Column() {
    TextInput({ placeholder: 'Title' })
      .width('100%')
      .height(48)
      .fontSize(16)
      .padding({ left: 16, right: 16 })
      .backgroundColor('#F1F3F5')
      .margin({ top: 16 })
      .onChange((value: string) => {
        this.title = value;
      })

    Row() {
      Text(this.date.toDateString())
        .fontSize(16)
        .fontWeight(FontWeight.Medium)
      Image($r('app.media.template'))
        .width(24)
        .height(24)
        .margin({ left: 8 })
    }
    .width('100%')
    .height(48)
    .justifyContent(FlexAlign.SpaceBetween)
    .alignItems(VerticalAlign.Center)
    .padding({ left: 16, right: 16 })
    .backgroundColor('#F1F3F5')
    .margin({ top: 16 })
    .onClick(() => {
      DatePicker.show({
        start: new Date('1970-1-1'),
        end: new Date('2100-1-1'),
        selected: this.date,
        onAccept: (value: Date) => {
          this.date = value;
        }
      });
    })

    Row() {
      Text('Time')
        .fontSize(16)
        .fontWeight(FontWeight.Medium)
      Row() {
        Text(this.startTime)
          .fontSize(16)
        Text(' - ')
          .fontSize(16)
        Text(this.endTime)
          .fontSize(16)
      }
    }
    .width('100%')
    .height(48)
    .justifyContent(FlexAlign.SpaceBetween)
    .alignItems(VerticalAlign.Center)
    .padding({ left: 16, right: 16 })
    .backgroundColor('#F1F3F5')
    .margin({ top: 16 })
    .onClick(() => {
      TimePicker.show({
        selected: new Date(`2021-08-04T${this.startTime}:00`),
        onAccept: (value: TimePickerResult) => {
          this.startTime = `${value.hour.toString().padStart(2, '0')}:${value.minute.toString().padStart(2, '0')}`;
        }
      });
    })

    TextArea({ placeholder: 'Description' })
      .width('100%')
      .height(96)
      .fontSize(16)
      .padding(16)
      .backgroundColor('#F1F3F5')
      .margin({ top: 16 })
      .onChange((value: string) => {
        this.description = value;
      })

    Text('Type')
      .fontSize(16)
      .fontWeight(FontWeight.Medium)
      .alignSelf(ItemAlign.Start)
      .margin({ top: 16, bottom: 8 })

    Row() {
      Radio({ value: 'Personal', group: 'taskType' })
        .checked(this.selectedType === 'Personal')
        .onChange((isChecked: boolean) => {
          if (isChecked) {
            this.selectedType = 'Personal';
          }
        })
      Text('Personal').fontSize(16).margin({ left: 8 })

      Radio({ value: 'Private', group: 'taskType' })
        .checked(this.selectedType === 'Private')
        .onChange((isChecked: boolean) => {
          if (isChecked) {
            this.selectedType = 'Private';
          }
        })
      Text('Private').fontSize(16).margin({ left: 8 })

      Radio({ value: 'Secret', group: 'taskType' })
        .checked(this.selectedType === 'Secret')
        .onChange((isChecked: boolean) => {
          if (isChecked) {
            this.selectedType = 'Secret';
          }
        })
      Text('Secret').fontSize(16).margin({ left: 8 })
    }
    .width('100%')
    .justifyContent(FlexAlign.SpaceBetween)

    Text('Tags')
      .fontSize(16)
      .fontWeight(FontWeight.Medium)
      .alignSelf(ItemAlign.Start)
      .margin({ top: 16, bottom: 8 })

    Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {
      ForEach(this.tags, (tag: string) => {
        Text(tag)
          .fontSize(14)
          .backgroundColor('#E3E5E7')
          .borderRadius(16)
          .padding({ left: 12, right: 12, top: 6, bottom: 6 })
          .margin({ right: 8, bottom: 8 })
      })
      Text('+ Add new tag')
        .fontSize(14)
        .fontColor('#007DFF')
        .onClick(() => {
          // Add new tag logic
        })
    }
    .width('100%')

    Button('Create')
      .width('100%')
      .height(48)
      .fontSize(16)
      .fontWeight(FontWeight.Medium)
      .backgroundColor('#007DFF')
      .margin({ top: 24 })
      .onClick(() => {
        router.pushUrl({ url: 'pages/Home' });
      })

    Button('Add Another Task')
      .width('100%')
      .height(48)
      .fontSize(16)
      .fontWeight(FontWeight.Medium)
      .backgroundColor('#E3E5E7')
      .fontColor('#007DFF')
      .margin({ top: 12 })
      .onClick(() => {
        router.pushUrl({ url: 'pages/AddTask' });
      })
  }
  .width('100%')
  .padding(16)
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
}