import router from '@ohos.router';
interface Category {
icon: Resource;
name: string;
}
interface FeaturedListing {
image: Resource;
title: string;
host: string;
status: string;
}
@Entry
@Component
struct SearchPage {
@State categories: Category[] = [
{ icon: $r('app.media.template'), name: '王牌' },
{ icon: $r('app.media.template'), name: '小木屋' },
{ icon: $r('app.media.template'), name: '海景民宿' },
{ icon: $r('app.media.template'), name: '魅力泳池' },
{ icon: $r('app.media.template'), name: '湖区' }
];
@State featuredListing: FeaturedListing = {
image: $r('app.media.template'),
title: '在X学院参加训练',
host: 'Jubilee',
status: '预订通道已关闭'
};
build() {
Column() {
Row() {
Search({ placeholder: '任何地方' })
.width('70%')
.height(40)
.backgroundColor(Color.White)
.placeholderColor(Color.Gray)
.placeholderFont({ size: 14, weight: 400 })
.textFont({ size: 14, weight: 400 })
.margin({ right: 8 })
Text('添加日期')
.fontSize(14)
.fontColor(Color.Black)
.margin({ right: 8 })
Text('添加人数')
.fontSize(14)
.fontColor(Color.Black)
}
.width('100%')
.padding(16)
.backgroundColor('#F5F5F5')
  Row() {
    ForEach(this.categories, (category: Category) => {
      Column() {
        Image(category.icon)
          .width(24)
          .height(24)
        Text(category.name)
          .fontSize(12)
          .margin({ top: 4 })
      }
      .onClick(() => {
        router.pushUrl({ url: 'pages/SearchCategory' })
      })
    })
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceAround)
  .padding({ top: 16, bottom: 16 })

  Swiper() {
    Image(this.featuredListing.image)
      .width('100%')
      .height(300)
      .objectFit(ImageFit.Cover)
  }
  .width('100%')
  .height(300)
  .autoPlay(true)
  .indicator(true)

  Column() {
    Text(this.featuredListing.title)
      .fontSize(18)
      .fontWeight(FontWeight.Bold)
    Text(`房东：${this.featuredListing.host}`)
      .fontSize(14)
      .margin({ top: 4 })
    Text(this.featuredListing.status)
      .fontSize(14)
      .fontColor(Color.Red)
      .margin({ top: 4 })
  }
  .width('100%')
  .padding(16)
  .onClick(() => {
    router.pushUrl({ url: 'pages/Details' })
  })

  Blank()

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('探索').fontSize(12)
    }.layoutWeight(1)
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('心愿单').fontSize(12)
    }.layoutWeight(1)
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('行程').fontSize(12)
    }.layoutWeight(1)
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('消息').fontSize(12)
    }.layoutWeight(1)
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('我的').fontSize(12)
    }.layoutWeight(1)
  }
  .width('100%')
  .height(56)
  .backgroundColor(Color.White)
  .padding({ top: 8, bottom: 8 })
}
.width('100%')
.height('100%')
.backgroundColor('#F5F5F5')
}
}