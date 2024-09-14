import router from '@ohos.router';
@Entry
@Component
struct FilterPage {
@State orderTypeFilters: string[] = ['Orders', 'Not Yet Dispatched', 'Local shops', 'Cancelled'];
@State orderDateFilters: string[] = ['Last 30 days', 'Last 3 months', '2024', '2023', '2022', '2021'];
@State selectedOrderType: string = 'Orders';
@State selectedOrderDate: string = 'Last 3 months';
build() {
Column() {
Row() {
Button({ type: ButtonType.Circle, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}
.width(40).height(40)
.margin({ left: 16, top: 16 })
.onClick(() => {
router.back()
})
    Search({ placeholder: 'Search Amazon.co.uk' })
      .width('70%')
      .margin({ left: 16, top: 16 })

    Image($r('app.media.template')).width(24).height(24)
      .margin({ left: 8, top: 16 })
  }

  Row() {
    Text('Back')
      .fontSize(16)
      .fontWeight(FontWeight.Medium)
      .onClick(() => {
        router.back()
      })
    Blank()
    Button('Apply')
      .backgroundColor('#FFD814')
      .fontColor(Color.Black)
      .onClick(() => {
        router.pushUrl({ url: 'pages/Orders' })
      })
  }
  .width('100%')
  .padding({ left: 16, right: 16, top: 16, bottom: 16 })

  Scroll() {
    Column() {
      this.FilterSection('FILTER BY ORDER TYPE', this.orderTypeFilters, $selectedOrderType)
      this.FilterSection('FILTER BY ORDER DATE', this.orderDateFilters, $selectedOrderDate)
    }
  }
  .layoutWeight(1)

  Button('Apply')
    .width('90%')
    .height(50)
    .backgroundColor('#FFD814')
    .fontColor(Color.Black)
    .margin({ bottom: 16 })
    .onClick(() => {
      router.pushUrl({ url: 'pages/Orders' })
    })

  Row() {
    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Home').fontSize(12)
    }.layoutWeight(1).onClick(() => router.pushUrl({ url: 'pages/Home' }))

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Profile').fontSize(12)
    }.layoutWeight(1)

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Cart').fontSize(12)
    }.layoutWeight(1)

    Column() {
      Image($r('app.media.template')).width(24).height(24)
      Text('Menu').fontSize(12)
    }.layoutWeight(1)
  }
  .width('100%')
  .height(56)
  .backgroundColor(Color.White)
}
}
@Builder
FilterSection(title: string, options: string[], selectedState: string) {
Text(title)
.fontSize(16)
.fontWeight(FontWeight.Bold)
.margin({ top: 16, bottom: 8 })
ForEach(options, (option: string) => {
  Row() {
    Radio({ value: option, group: title })
      .checked(option === selectedState)
      .onChange((isChecked: boolean) => {
        if (isChecked) {
          selectedState = option
        }
      })
    Text(option)
      .fontSize(14)
      .margin({ left: 8 })
  }
  .width('100%')
  .padding({ top: 8, bottom: 8 })
})
}
}