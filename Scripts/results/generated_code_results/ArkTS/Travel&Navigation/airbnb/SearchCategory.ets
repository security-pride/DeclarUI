import router from '@ohos.router';
interface Category {
icon: Resource;
name: string;
}
interface Listing {
image: Resource;
tag: string;
location: string;
name: string;
date: string;
description: string;
price: string;
rating: number;
}
@Entry
@Component
struct SearchCategoryPage {
@State categories: Category[] = [
{ icon: $r('app.media.template'), name: '海景民宿' },
{ icon: $r('app.media.template'), name: '魅力泳池' },
{ icon: $r('app.media.template'), name: '湖区' },
{ icon: $r('app.media.template'), name: '近滑雪场' },
{ icon: $r('app.media.template'), name: 'OMG 妙屋' }
];
@State showTotalPrice: boolean = false;
@State featuredListing: Listing = {
image: $r('app.media.template'),
tag: '房客推荐',
location: '英国多塞特(Dorset)',
name: "Man O'War海滩",
date: '9月2日至7日',
description: '房客说"会推荐再次入住位置优越漂亮。"',
price: '¥2,424',
rating: 4.8
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
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ left: 8 })
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
        router.pushUrl({ url: 'pages/Search' })
      })
    })
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceAround)
  .padding({ top: 16, bottom: 16 })

  Row() {
    Text('显示总价')
      .fontSize(16)
    Toggle({ type: ToggleType.Switch, isOn: this.showTotalPrice })
      .selectedColor('#007DFF')
      .switchPointColor('#FFFFFF')
      .onChange((isOn: boolean) => {
        this.showTotalPrice = isOn;
      })
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceBetween)
  .padding(16)
  .backgroundColor(Color.White)

  List() {
    ListItem() {
      Column() {
        Stack({ alignContent: Alignment.TopEnd }) {
          Image(this.featuredListing.image)
            .width('100%')
            .height(200)
            .objectFit(ImageFit.Cover)
          Image($r('app.media.template'))
            .width(24)
            .height(24)
            .margin(8)
        }
        Row() {
          Column({ alignItems: ItemAlign.Start }) {
            Text(this.featuredListing.location)
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
            Text(this.featuredListing.name)
              .fontSize(14)
            Text(this.featuredListing.date)
              .fontSize(14)
              .fontColor(Color.Gray)
            Text(this.featuredListing.description)
              .fontSize(14)
              .maxLines(1)
              .textOverflow({ overflow: TextOverflow.Ellipsis })
            Row() {
              Text(this.featuredListing.price)
                .fontSize(16)
                .fontWeight(FontWeight.Bold)
              Text('/晚')
                .fontSize(14)
                .fontColor(Color.Gray)
            }
          }
          .layoutWeight(1)
          .alignItems(HorizontalAlign.Start)

          Text(`${this.featuredListing.rating}`)
            .fontSize(14)
            .fontWeight(FontWeight.Bold)
        }
        .width('100%')
        .padding(16)

        Button('地图')
          .width('100%')
          .height(40)
          .backgroundColor('#007DFF')
          .fontColor(Color.White)
      }
      .onClick(() => {
        router.pushUrl({ url: 'pages/Details' })
      })
    }
  }
  .width('100%')
  .layoutWeight(1)

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