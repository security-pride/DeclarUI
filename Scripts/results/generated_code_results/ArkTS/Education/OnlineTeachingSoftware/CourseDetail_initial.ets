@Entry
@Component
struct CourseDetailPage {
@State isFavorite: boolean = false;
build() {
Column() {
// Top navigation bar
Row() {
IconButton({ type: IconType.BACK }) {
Image($r('app.media.template'))
.width(24)
.height(24)
}.onClick(() => {
router.back()
})
    Blank()

    Text(this.getTime())
      .fontSize(14)
      .margin({ right: 8 })

    Image($r('app.media.template'))
      .width(18)
      .height(18)
      .margin({ right: 4 })

    Image($r('app.media.template'))
      .width(18)
      .height(18)
  }
  .width('100%')
  .height(56)
  .padding({ left: 16, right: 16 })

  // Main content
  Scroll() {
    Column() {
      // Course image and tag
      Stack({ alignContent: Alignment.TopStart }) {
        Image($r('app.media.template'))
          .width('100%')
          .height(240)
          .borderRadius(16)

        Text('UI Design')
          .fontSize(12)
          .backgroundColor(Color.White)
          .padding(4)
          .borderRadius(4)
          .margin(8)

        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image(this.isFavorite ? $r('app.media.heart_filled') : $r('app.media.heart_outline'))
            .width(24)
            .height(24)
        }
        .onClick(() => {
          this.isFavorite = !this.isFavorite
        })
        .position({ x: '90%', y: 8 })
      }
      .width('100%')
      .height(240)
      .margin({ bottom: 16 })

      // Course title
      Text('Expert Wireframing for Webiste Design theme food')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 8 })

      // Instructor info
      Row() {
        Image($r('app.media.template'))
          .width(40)
          .height(40)
          .borderRadius(20)

        Column() {
          Text('Jerremy Mamika')
            .fontSize(16)
            .fontWeight(FontWeight.Medium)

          Row() {
            Image($r('app.media.template'))
              .width(16)
              .height(16)
            Text('4.6')
              .fontSize(14)
              .margin({ left: 4 })
          }
        }
        .alignItems(HorizontalAlign.Start)
        .margin({ left: 8 })
      }
      .margin({ bottom: 16 })

      // Course description
      Text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,')
        .fontSize(14)
        .margin({ bottom: 16 })

      // Course stats
      Row() {
        Column() {
          Text('30+')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
          Text('Leason')
            .fontSize(12)
            .fontColor(Color.Gray)
        }
        .layoutWeight(1)

        Column() {
          Text('4.5')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
          Text('Rating')
            .fontSize(12)
            .fontColor(Color.Gray)
        }
        .layoutWeight(1)

        Column() {
          Text('1.4K')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
          Text('Student')
            .fontSize(12)
            .fontColor(Color.Gray)
        }
        .layoutWeight(1)
      }
      .width('100%')
      .margin({ bottom: 24 })

      // Price and buy button
      Row() {
        Column() {
          Text('Price')
            .fontSize(12)
            .fontColor(Color.Gray)
          Text('$129')
            .fontSize(24)
            .fontWeight(FontWeight.Bold)
        }

        Button('Buy Now', { type: ButtonType.Capsule })
          .width(120)
          .height(40)
          .backgroundColor('#7F5AF0')
          .fontColor(Color.White)
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceBetween)
    }
    .padding(16)
  }
}
}
private getTime(): string {
const date = new Date()
return ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}
}
}