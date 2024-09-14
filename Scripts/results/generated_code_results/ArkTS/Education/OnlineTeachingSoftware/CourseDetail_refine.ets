@Entry
@Component
struct CourseDetailPage {
@State isFavorite: boolean = false
@State rating: number = 4.6
scroller: Scroller = new Scroller()
build() {
Column() {
Scroll(this.scroller) {
Column() {
Stack({ alignContent: Alignment.TopStart }) {
Image($r('app.media.template'))
.width('100%')
.height(240)
.borderRadius(16)
.objectFit(ImageFit.Cover)
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

      Text('Expert Wireframing for Webiste Design theme food')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 8 })

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
            Rating({ rating: this.rating, indicator: false })
              .stars(5)
              .stepSize(0.5)
              .onChange((value: number) => {
                this.rating = value
              })
            Text(this.rating.toFixed(1))
              .fontSize(14)
              .margin({ left: 4 })
          }
        }
        .alignItems(HorizontalAlign.Start)
        .margin({ left: 8 })
      }
      .margin({ bottom: 16 })

      Text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,')
        .fontSize(14)
        .margin({ bottom: 16 })
        .textOverflow({ overflow: TextOverflow.Ellipsis })
        .maxLines(3)

      Row() {
        this.StatItem('30+', 'Leason')
        this.StatItem('4.5', 'Rating')
        this.StatItem('1.4K', 'Student')
      }
      .width('100%')
      .margin({ bottom: 24 })

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
@Builder
StatItem(value: string, label: string) {
Column() {
Text(value)
.fontSize(16)
.fontWeight(FontWeight.Bold)
Text(label)
.fontSize(12)
.fontColor(Color.Gray)
}
.layoutWeight(1)
}
}