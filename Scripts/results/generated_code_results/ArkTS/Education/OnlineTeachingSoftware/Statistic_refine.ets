@Entry
@Component
struct StatisticsPage {
@State currentTime: string = this.getCurrentTime()
@State selectedTimeFrame: string = 'Weekly'
@State learningProgressData: number[] = [6, 8, 5, 7, 3, 6, 7]
@State courses: Array<{ title: string, category: string, rating: number, reviewCount: number, progress: number, image: Resource }> = [
{
title: 'Bootstrapping Fundamental Principles',
category: 'Programing',
rating: 4.7,
reviewCount: 1242,
progress: 74,
image: $r('app.media.template')
},
{
title: 'User interface for beginners',
category: 'Interface Design',
rating: 0,
reviewCount: 0,
progress: 0,
image: $r('app.media.template')
}
]
aboutToAppear() {
this.updateTime()
}
updateTime() {
this.currentTime = this.getCurrentTime()
setTimeout(() => {
this.updateTime()
}, 60000)
}
getCurrentTime(): string {
const now = new Date()
return now.getHours().toString().padStart(2, '0') + ':' +
now.getMinutes().toString().padStart(2, '0')
}
build() {
Column() {
Row() {
Text(this.currentTime)
.fontSize(16)
.fontWeight(FontWeight.Medium)
Blank()
Image($r('app.media.template'))
.width(20)
.height(20)
Image($r('app.media.template'))
.width(20)
.height(20)
.margin({ left: 5 })
}
.width('100%')
.padding({ left: 20, right: 20, top: 16, bottom: 10 })
  Row() {
    Text('Statistic')
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
    Blank()
    Image($r('app.media.template'))
      .width(24)
      .height(24)
  }
  .width('100%')
  .padding({ left: 20, right: 20, top: 10, bottom: 20 })

  Column() {
    Row() {
      Text('Learning Progress')
        .fontSize(18)
        .fontWeight(FontWeight.Medium)
      Blank()
      Select([{ value: 'Weekly' }, { value: 'Monthly' }, { value: 'Yearly' }])
        .selected(0)
        .value(this.selectedTimeFrame)
        .onSelect((index: number) => {
          this.selectedTimeFrame = ['Weekly', 'Monthly', 'Yearly'][index]
        })
    }
    .width('100%')
    .padding({ left: 20, right: 20, top: 10, bottom: 10 })

    Row() {
      ForEach(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], (day, index) => {
        Column() {
          Column() {
            Blank()
            Text(this.learningProgressData[index].toString())
              .fontSize(12)
              .fontColor(Color.White)
              .visibility(this.learningProgressData[index] > 0 ? Visibility.Visible : Visibility.Hidden)
          }
          .width(30)
          .height(100)
          .backgroundColor(this.learningProgressData[index] > 0 ? '#7F5AF0' : '#E0E0E0')
          .justifyContent(FlexAlign.End)

          Text(day)
            .fontSize(12)
            .margin({ top: 5 })
        }
        .height(130)
        .layoutWeight(1)
      })
    }
    .width('100%')
    .padding({ left: 10, right: 10 })
  }
  .width('100%')
  .padding(10)
  .backgroundColor(Color.White)
  .borderRadius(16)
  .margin({ bottom: 20 })

  Column() {
    Text('Course Progress (4)')
      .fontSize(18)
      .fontWeight(FontWeight.Medium)
      .margin({ left: 20, bottom: 10 })

    List() {
      ForEach(this.courses, (course) => {
        ListItem() {
          this.CourseProgressItem(course)
        }
      })
    }
    .width('100%')
  }
  .width('100%')

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Home')
        .fontSize(12)
    }
    .layoutWeight(1)
    .onClick(() => {
      router.pushUrl({ url: 'pages/Discover' })
    })

    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Statistic')
        .fontSize(12)
        .fontColor('#7F5AF0')
    }
    .layoutWeight(1)

    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Favorites')
        .fontSize(12)
    }
    .layoutWeight(1)
    .onClick(() => {
      router.pushUrl({ url: 'pages/Favorites' })
    })

    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Profile')
        .fontSize(12)
    }
    .layoutWeight(1)
  }
  .width('100%')
  .height(60)
  .backgroundColor(Color.White)
}
.width('100%')
.height('100%')
.backgroundColor('#F8F9FA')
}
@Builder
CourseProgressItem(course: { title: string, category: string, rating: number, reviewCount: number, progress: number, image: Resource }) {
Row() {
Column() {
Text(course.category)
.fontSize(14)
.fontColor(Color.Gray)
Text(course.title)
.fontSize(16)
.fontWeight(FontWeight.Bold)
.margin({ top: 5, bottom: 5 })
Row() {
if (course.rating > 0) {
Row() {
Image($r('app.media.template'))
.width(16)
.height(16)
Text(course.rating.toFixed(1))
.fontSize(14)
.margin({ left: 5 })
}
Text((${course.reviewCount} Reviews))
.fontSize(14)
.fontColor(Color.Gray)
.margin({ left: 10 })
}
}
Progress({ value: course.progress, total: 100 })
.width('80%')
.height(6)
.margin({ top: 10 })
Text(course.progress + '%')
.fontSize(14)
.margin({ top: 5 })
}
.layoutWeight(1)
.alignItems(HorizontalAlign.Start)
  Image(course.image)
    .width(100)
    .height(100)
    .objectFit(ImageFit.Cover)
    .borderRadius(8)
}
.width('100%')
.padding(16)
.backgroundColor(Color.White)
.borderRadius(16)
.margin({ bottom: 10 })
}
}