import router from '@ohos.router';



@Entry

@Component

struct HomePage {

  @State location: string = '武汉'

  @State searchText: string = ''



  build() {

    Column() {

      Row() {

        Text(this.location).fontSize(16)

        Text('推荐').fontSize(16).margin({ left: 8 })

        Text('签到').fontSize(14).backgroundColor('#FFD700').borderRadius(10).padding(4).margin({ left: 8 })

      }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding({ left: 16, right: 16, top: 8 })



      TextInput({ placeholder: '穿戴甲' })

        .width('90%')

        .height(40)

        .margin({ top: 8 })

        .backgroundColor('#F5F5F5')

        .borderRadius(20)



      Scroll() {

        Column() {

          Row() {

            this.CategoryIcon('人才市场', $r('app.media.template'))

            this.CategoryIcon('手机', $r('app.media.template'))

            this.CategoryIcon('省钱神券', $r('app.media.template'))

            this.CategoryIcon('充值中心', $r('app.media.template'))

            this.CategoryIcon('奢品', $r('app.media.template'))

          }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ top: 16 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/CategoriesPage' })

          })



          Row() {

            this.PromotionCard('闲鱼特卖超低价', '全新正品1折起', $r('app.media.template'))

            this.PromotionCard('极速回收', '免费上门', $r('app.media.template'))

            this.PromotionCard('闲鱼直播', '爆款好物直播中', $r('app.media.template'))

          }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 16 })



          Row() {

            Button('猜你喜欢').fontSize(14).backgroundColor('#F5F5F5').fontColor(Color.Black)

            Button('最新发布').fontSize(14).backgroundColor('#F5F5F5').fontColor(Color.Black)

            Button('鱼币抵钱').fontSize(14).backgroundColor('#F5F5F5').fontColor(Color.Black)

            Button('省钱小组').fontSize(14).backgroundColor('#F5F5F5').fontColor(Color.Black)

          }.width('100%').justifyContent(FlexAlign.SpaceAround).margin({ top: 16 })



          Text('这些宝贝缺货了，现在发布，卖得更快哦').fontSize(14).margin({ top: 16 })

        }.width('100%').padding(16)

      }.width('100%').height('80%')



      Row() {

        this.BottomNavItem('闲鱼', $r('app.media.template'))

        this.BottomNavItem('游戏', $r('app.media.template'))

        Button('+')

          .width(50)

          .height(50)

          .backgroundColor('#FFD700')

          .borderRadius(25)

          .onClick(() => {

            router.pushUrl({ url: 'pages/SellPage' })

          })

        this.BottomNavItem('消息', $r('app.media.template'))

        this.BottomNavItem('我的', $r('app.media.template'))

      }.width('100%').justifyContent(FlexAlign.SpaceAround).height(60).backgroundColor(Color.White)

    }

  }



  @Builder

  CategoryIcon(name: string, icon: Resource) {

    Column() {

      Image(icon).width(40).height(40)

      Text(name).fontSize(12).margin({ top: 4 })

    }

  }



  @Builder

  PromotionCard(title: string, subtitle: string, image: Resource) {

    Column() {

      Image(image).width(100).height(80)

      Text(title).fontSize(14).margin({ top: 4 })

      Text(subtitle).fontSize(12).fontColor(Color.Gray)

    }.width('30%').backgroundColor(Color.White).borderRadius(8).padding(8)

  }



  @Builder

  BottomNavItem(name: string, icon: Resource) {

    Column() {

      Image(icon).width(24).height(24)

      Text(name).fontSize(12)

    }

  }

}