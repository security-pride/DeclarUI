@Entry
@Component
struct FavoritesPage {
@State currentTime: string = this.getCurrentTime()
@State searchText: string = ''
@State selectedCategory: string = 'All Course'
@State categories: string[] = ['All Course', 'UX Design', 'UI Design', '3D Anima']
@State favoriteCourses: Array<{ date: string, courses: Array<{ title: string, category: string, instructor: string, price: string, image: Resource }> }> = [
{
date: 'May 12, 2023',
courses: [
{ title: 'Expert Wireframing for Mobile Design', category: 'Graphic Design', instructor: 'Jerremy Mamika', price: '$48', image: $r('app.media.template') },
{ title: 'Bootstrapping Principles', category: 'Development', instructor: 'Alexander Be', price: '', image: $r('app.media.template') }
]
},
{
date: 'May 08, 2023',
courses: [
{ title: 'Expert Wireframing for Mobile Design', category: 'Graphic Design', instructor: 'Jerremy Mamika', price: '$48', image: $r('app.media.template') }
]
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
  Text('Favorite')
    .fontSize(24)
    .fontWeight(FontWeight.Bold)
    .margin({ left: 20, top: 20, bottom: 20 })

  Row() {
    Search({ value: this.searchText, placeholder: 'Search...' })
      .width('80%')
      .height(40)
      .backgroundColor('#F1F3F5')
      .placeholderColor(Color.Gray)
      .placeholderFont({ size: 14, weight: 400 })
      .textFont({ size: 14, weight: 400 })
      .borderRadius(20)
      .onChange((value: string) => {
        this.searchText = value
      })
    Image($r('app.media.template'))
      .width(24)
      .height(24)
      .margin({ left: 10 })
  }
  .width('90%')
  .margin({ bottom: 20 })

  Row() {
    ForEach(this.categories, (category: string) => {
      Button(category)
        .backgroundColor(this.selectedCategory === category ? '#7F5AF0' : '#F1F3F5')
        .fontColor(this.selectedCategory === category ? Color.White : Color.Black)
        .borderRadius(20)
        .padding({ left: 15, right: 15, top: 8, bottom: 8 })
        .margin({ right: 10 })
        .onClick(() => {
          this.selectedCategory = category
        })
    })
  }
  .width('100%')
  .height(50)
  .margin({ bottom: 20 })
  .padding({ left: 20 })

  List() {
    ForEach(this.favoriteCourses, (dateGroup) => {
      ListItem() {
        Column() {
          Row() {
            Text(dateGroup.date)
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
            Blank()
            Text('See All')
              .fontSize(14)
              .fontColor('#7F5AF0')
              .onClick(() => {
                // Navigate to see all courses for this date
              })
          }
          .width('100%')
          .padding({ left: 20, right: 20, top: 10, bottom: 10 })

          ForEach(dateGroup.courses, (course) => {
            this.CourseItem(course)
          })
        }
      }
    })
  }
  .layoutWeight(1)

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
        .fontColor('#7F5AF0')
    }
    .layoutWeight(1)

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
CourseItem(course: { title: string, category: string, instructor: string, price: string, image: Resource }) {
Row() {
Image(course.image)
.width(100)
.height(100)
.borderRadius(10)
.objectFit(ImageFit.Cover)
Column() {
Text(course.category)
.fontSize(14)
.fontColor(Color.Gray)
Text(course.title)
.fontSize(16)
.fontWeight(FontWeight.Bold)
.margin({ top: 5, bottom: 5 })
Text(course.instructor)
.fontSize(14)
if (course.price) {
Text(course.price)
.fontSize(16)
.fontWeight(FontWeight.Bold)
.margin({ top: 5 })
}
}
.alignItems(HorizontalAlign.Start)
.margin({ left: 10 })
Blank()
Toggle({ type: ToggleType.Button, isOn: true })
.size({ width: 24, height: 24 })
.selectedColor('#FF0000')
.switchPointColor('#FFFFFF')
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