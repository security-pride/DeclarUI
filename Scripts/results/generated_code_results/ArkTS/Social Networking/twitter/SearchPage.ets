import router from '@ohos.router';
interface SearchProfile {
name: string;
handle: string;
verified?: boolean;
image: Resource;
}
@Entry
@Component
struct SearchPage {
@State searchText: string = '';
@State recentSearches: SearchProfile[] = [
{ name: 'Sab Khasanov', handle: '@s_khasanov', image: $r('app.media.template') },
{ name: 'Martha Craig', handle: '@craig_love', image: $r('app.media.template') },
{ name: 'Tabitha Potter', handle: '@mis_potter', verified: true, image: $r('app.media.template') },
{ name: 'Figma', handle: '@figmadesign', image: $r('app.media.template') },
{ name: 'Figma', handle: '@figma', image: $r('app.media.template') }
];
build() {
Column() {
Row() {
Search({ value: this.searchText, placeholder: 'Search Twitter' })
.width('80%')
.height(40)
.backgroundColor('#F0F0F0')
.placeholderColor(Color.Gray)
.placeholderFont({ size: 16, weight: 400 })
.textFont({ size: 16, weight: 400 })
.onChange((value: string) => {
this.searchText = value;
})
Button('Cancel', { type: ButtonType.Normal })
.width('18%')
.height(40)
.fontSize(16)
.fontColor('#1DA1F2')
.backgroundColor(Color.Transparent)
.margin({ left: '2%' })
.onClick(() => {
router.back();
})
}.width('100%').padding(10)
  Text('Recent searches')
    .fontSize(16)
    .fontWeight(FontWeight.Bold)
    .alignSelf(ItemAlign.Start)
    .margin({ left: 16, top: 16, bottom: 8 })

  List() {
    ForEach(this.recentSearches, (item: SearchProfile) => {
      ListItem() {
        Row() {
          Image(item.image)
            .width(40)
            .height(40)
            .borderRadius(20)
          Column() {
            Text(item.name)
              .fontSize(16)
              .fontWeight(FontWeight.Medium)
            Row() {
              Text(item.handle)
                .fontSize(14)
                .fontColor(Color.Gray)
              if (item.verified) {
                Image($r('app.media.template'))
                  .width(16)
                  .height(16)
                  .margin({ left: 4 })
              }
            }
          }.alignItems(HorizontalAlign.Start)
          .margin({ left: 12 })
        }
        .width('100%')
        .height(60)
        .onClick(() => {
          router.pushUrl({ url: 'pages/TrendsPage' })
        })
      }
    })
  }
  .width('100%')
  .height('60%')

  Column() {
    Row() {
      ForEach(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], (key:string) => {
        Text(key)
          .width('10%')
          .height(40)
          .textAlign(TextAlign.Center)
          .fontSize(18)
          .backgroundColor('#FFFFFF')
      })
    }
    Row() {
      ForEach(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], (key:string) => {
        Text(key)
          .width('11.11%')
          .height(40)
          .textAlign(TextAlign.Center)
          .fontSize(18)
          .backgroundColor('#FFFFFF')
      })
    }
    Row() {
      Text('⇧')
        .width('15%')
        .height(40)
        .textAlign(TextAlign.Center)
        .fontSize(18)
        .backgroundColor('#E0E0E0')
      ForEach(['Z', 'X', 'C', 'V', 'B', 'N', 'M'], (key:string) => {
        Text(key)
          .width('10%')
          .height(40)
          .textAlign(TextAlign.Center)
          .fontSize(18)
          .backgroundColor('#FFFFFF')
      })
      Text('⌫')
        .width('15%')
        .height(40)
        .textAlign(TextAlign.Center)
        .fontSize(18)
        .backgroundColor('#E0E0E0')
    }
    Row() {
      Text('123')
        .width('25%')
        .height(40)
        .textAlign(TextAlign.Center)
        .fontSize(16)
        .backgroundColor('#E0E0E0')
      Text('space')
        .width('50%')
        .height(40)
        .textAlign(TextAlign.Center)
        .fontSize(16)
        .backgroundColor('#FFFFFF')
      Text('Go')
        .width('25%')
        .height(40)
        .textAlign(TextAlign.Center)
        .fontSize(16)
        .backgroundColor('#1DA1F2')
        .fontColor(Color.White)
    }
  }
  .width('100%')
  .position({ y: '85%' })
}
}
}