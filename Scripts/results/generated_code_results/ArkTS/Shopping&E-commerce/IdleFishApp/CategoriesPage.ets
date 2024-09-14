import router from '@ohos.router';



interface CategoryItem {

  name: string;

  icon: Resource;

}



interface ServiceItem {

  name: string;

  icon: Resource;

}



@Entry

@Component

struct CategoriesPage {

  @State categories: CategoryItem[] = [

    { name: '游戏装备', icon: $r('app.media.template') },

    { name: '数码', icon: $r('app.media.template') },

    { name: '模玩动漫', icon: $r('app.media.template') },

    { name: '企业', icon: $r('app.media.template') },

    { name: '文玩玉翠', icon: $r('app.media.template') },

    { name: '家居生活', icon: $r('app.media.template') },

    { name: '优惠券码', icon: $r('app.media.template') },

    { name: '美容彩妆', icon: $r('app.media.template') },

    { name: '母婴', icon: $r('app.media.template') },

    { name: '运动户外', icon: $r('app.media.template') },

    { name: '服饰鞋帽', icon: $r('app.media.template') },

    { name: '技能服务', icon: $r('app.media.template') },

    { name: '家用电器', icon: $r('app.media.template') },

    { name: '宠物花卉', icon: $r('app.media.template') }

  ]



  @State recommendedServices: ServiceItem[] = [

    { name: '闲鱼帮卖', icon: $r('app.media.template') },

    { name: '闲鱼鱼币', icon: $r('app.media.template') },

    { name: '手机严选', icon: $r('app.media.template') },

    { name: '文玩珠宝', icon: $r('app.media.template') },

    { name: '潮玩盲盒', icon: $r('app.media.template') },

    { name: '奢侈品帮卖', icon: $r('app.media.template') },

    { name: '闲鱼租房', icon: $r('app.media.template') },

    { name: '闲鱼游戏', icon: $r('app.media.template') },

    { name: '免费送', icon: $r('app.media.template') },

    { name: '明星玩家', icon: $r('app.media.template') },

    { name: '免费鉴定', icon: $r('app.media.template') },

    { name: '卡券', icon: $r('app.media.template') },

    { name: '手机回收', icon: $r('app.media.template') },

    { name: '卡券回收', icon: $r('app.media.template') },

    { name: '省心卖', icon: $r('app.media.template') },

    { name: '二手车', icon: $r('app.media.template') },

    { name: '图书回收', icon: $r('app.media.template') },

    { name: '卖闲置', icon: $r('app.media.template') },

    { name: '旧衣回收', icon: $r('app.media.template') },

    { name: '大件回收', icon: $r('app.media.template') }

  ]



  build() {

    Column() {

      Row() {

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ right: 8 })

          .onClick(() => {

            router.pushUrl({ url: 'pages/HomePage' })

          })

        TextInput({ placeholder: '闲腿裤|牛仔短裤' })

          .width('80%')

          .height(40)

          .backgroundColor('#F5F5F5')

          .margin({ right: 8 })

      }

      .width('100%')

      .padding(16)



      Scroll() {

        Column() {

          Text('热门推荐')

            .fontSize(18)

            .fontWeight(FontWeight.Bold)

            .margin({ top: 16, bottom: 8 })



          Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.SpaceBetween }) {

            ForEach(this.recommendedServices, (item: ServiceItem) => {

              Column() {

                Image(item.icon)

                  .width(40)

                  .height(40)

                Text(item.name)

                  .fontSize(12)

                  .margin({ top: 4 })

              }

              .width('20%')

              .margin({ bottom: 16 })

            })

          }

          .padding({ left: 16, right: 16 })



          Text('推荐')

            .fontSize(18)

            .fontWeight(FontWeight.Bold)

            .margin({ top: 16, bottom: 8, left: 16 })



          List() {

            ForEach(this.categories, (item: CategoryItem) => {

              ListItem() {

                Row() {

                  Text(item.name)

                    .fontSize(16)

                  Blank()

                  Image($r('app.media.template'))

                    .width(24)

                    .height(24)

                }

                .width('100%')

                .padding(16)

                .backgroundColor(Color.White)

              }

              .onClick(() => {

                if (item.name === '文玩玉翠') {

                  router.pushUrl({ url: 'pages/JewelryCategoryPage' })

                }

              })

            })

          }

          .divider({ strokeWidth: 1, color: '#F0F0F0' })

        }

      }

      .width('100%')

      .layoutWeight(1)

    }

  }

}