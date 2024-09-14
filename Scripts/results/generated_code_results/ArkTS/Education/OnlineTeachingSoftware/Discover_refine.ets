@Entry
@Component
struct DiscoverPage {
@State currentTime: string = this.getCurrentTime()
@State featuredCourseProgress: number = 48
@State isFavorite: boolean = false
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
    Image($r('app.media.template'))
      .width(24)
      .height(24)
    Text('Discover')
      .fontSize(24)
      .fontWeight(FontWeight.Bold)
      .margin({ left: 20 })
    Blank()
    Image($r('app.media.template'))
      .width(24)
      .height(24)
      .onClick(() => {
        router.pushUrl({ url: 'pages/Notifications' })
      })
  }
  .width('100%')
  .padding({ left: 20, right: 20, top: 10, bottom: 20 })

  Text('Study what you want anytime anywhere')
    .fontSize(20)
    .fontWeight(FontWeight.Medium)
    .margin({ left: 20, right: 20, bottom: 20 })

  Stack({ alignContent: Alignment.TopStart }) {
    Column() {
      Text('Interface Design')
        .fontSize(14)
        .fontColor(Color.Gray)
      Text('User interface for beginners')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 5, bottom: 10 })
      Row() {
        Row() {
          Image($r('app.media.template'))
            .width(16)
            .height(16)
          Text('4.7')
            .fontSize(14)
            .margin({ left: 5 })
        }
        Text('(1,242 Reviews)')
          .fontSize(14)
          .fontColor(Color.Gray)
          .margin({ left: 10 })
      }
      Progress({ value: this.featuredCourseProgress, total: 100 })
        .height(6)
        .width('80%')
        .margin({ top: 10 })
      Text(this.featuredCourseProgress + '%')
        .fontSize(14)
        .margin({ top: 5 })
    }
    .width('70%')
    .height(180)
    .padding(15)
    .borderRadius(15)
    .backgroundColor(Color.White)

    Image($r('app.media.template'))
      .width('30%')
      .height(180)
      .objectFit(ImageFit.Cover)
      .borderRadius({ topRight: 15, bottomRight: 15 })
      .position({ x: '70%', y: 0 })
  }
  .width('90%')
  .height(180)
  .margin({ left: '5%', right: '5%', bottom: 20 })
  .onClick(() => {
    router.pushUrl({ url: 'pages/CourseDetail' })
  })

  Column() {
    Row() {
      Text('Popular Course')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
      Blank()
      Text('See All')
        .fontSize(14)
        .fontColor(Color.Blue)
        .onClick(() => {
          // Navigate to all courses
        })
    }
    .width('100%')
    .padding({ left: 20, right: 20, top: 10, bottom: 10 })

    List() {
      ListItem() {
        this.CourseItem('Expert Wireframing for Mobile Design', 'Graphic Design', 'Jerremy Mamika', '$48')
      }
      ListItem() {
        this.CourseItem('Bootstrapping Principles', 'Development', 'Alexander Be')
      }
    }
    .height(240)
    .lanes(1)
  }

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Home')
        .fontSize(12)
        .fontColor(Color.Blue)
    }
    .layoutWeight(1)

    Column() {
      Image($r('app.media.template'))
        .width(24)
        .height(24)
      Text('Statistic')
        .fontSize(12)
    }
    .layoutWeight(1)
    .onClick(() => {
      router.pushUrl({ url: 'pages/Statistics' })
    })

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
  .padding({ left: 20, right: 20 })
  .backgroundColor(Color.White)
}
.width('100%')
.height('100%')
.backgroundColor('#F1F3F5')
}
@Builder
CourseItem(title: string, category: string, instructor: string, price?: string) {
Row() {
Image($r('app.media.template'))
.width(100)
.height(100)
.borderRadius(10)
Column() {
Text(category)
.fontSize(14)
.fontColor(Color.Gray)
Text(title)
.fontSize(16)
.fontWeight(FontWeight.Bold)
.margin({ top: 5, bottom: 5 })
Text(instructor)
.fontSize(14)
if (price) {
Text(price)
.fontSize(16)
.fontWeight(FontWeight.Bold)
.margin({ top: 5 })
}
}
.alignItems(HorizontalAlign.Start)
.margin({ left: 10 })
Blank()
Toggle({ type: ToggleType.Button, isOn: this.isFavorite })
.size({ width: 24, height: 24 })
.selectedColor(Color.Red)
.switchPointColor(Color.White)
.onChange((isOn: boolean) => {
this.isFavorite = isOn
})
}
.width('90%')
.height(120)
.padding(10)
.backgroundColor(Color.White)
.borderRadius(15)
.margin({ left: '5%', right: '5%', top: 10 })
.onClick(() => {
router.pushUrl({ url: 'pages/CourseDetail' })
})
}
}