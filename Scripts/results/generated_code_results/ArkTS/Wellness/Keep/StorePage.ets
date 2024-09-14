import router from '@ohos.router';



interface Product {

  id: string;

  name: string;

  price: number;

  originalPrice: number;

  image: Resource;

  badge?: string;

}



interface Category {

  id: string;

  name: string;

  icon: Resource;

}



@Entry

@Component

struct StorePage {

  @State searchQuery: string = '';

  @State selectedTab: string = '全部';

  @State newUserGifts: Product[] = [

    { id: '1', name: 'Smartwatch', price: 259, originalPrice: 289, image: $r('app.media.template'), badge: '必买精选' },

    { id: '2', name: 'Smart Scale', price: 82, originalPrice: 109, image: $r('app.media.template'), badge: '热销爆款' },

    { id: '3', name: 'Yoga Mat', price: 59, originalPrice: 89, image: $r('app.media.template'), badge: '直降 ¥30' },

    { id: '4', name: 'Jump Rope', price: 13, originalPrice: 29, image: $r('app.media.template'), badge: '60天低价' },

  ];

  @State categories: Category[] = [

    { id: 'awards', name: '运动奖品', icon: $r('app.media.template') },

    { id: 'burn', name: '全身燃脂', icon: $r('app.media.template') },

    { id: 'data', name: '身体数据', icon: $r('app.media.template') },

    { id: 'equipment', name: '运动装备', icon: $r('app.media.template') },

    { id: 'smart', name: '家用智能', icon: $r('app.media.template') },

    { id: 'keep', name: 'Keep周边', icon: $r('app.media.template') },

    { id: 'food', name: '健康食品', icon: $r('app.media.template') },

    { id: 'women', name: '女子服饰', icon: $r('app.media.template') },

    { id: 'men', name: '男子服饰', icon: $r('app.media.template') },

    { id: 'all', name: '全部分类', icon: $r('app.media.template') },

  ];



  build() {

    Column() {

      Row() {

        Search({ value: this.searchQuery, placeholder: '瑜伽服装' })

          .width('80%')

          .height(40)

          .backgroundColor('#F5F5F5')

          .placeholderColor('#999999')

          .onChange((value: string) => {

            this.searchQuery = value;

          })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 8 })

        Image($r('app.media.template'))

          .width(24)

          .height(24)

          .margin({ left: 8 })

      }

      .width('100%')

      .padding(16)

      .backgroundColor(Color.White)



      Tabs() {

        TabContent() {

          Scroll() {

            Column() {

              Text('新人首单礼')

                .fontSize(18)

                .fontWeight(FontWeight.Bold)

                .width('100%')

                .padding({ left: 16, top: 16, bottom: 8 })

              Row() {

                ForEach(this.newUserGifts, (product: Product) => {

                  Column() {

                    Image(product.image)

                      .width(80)

                      .height(80)

                      .objectFit(ImageFit.Cover)

                    Text(product.name)

                      .fontSize(14)

                      .margin({ top: 4 })

                    Row() {

                      Text(`¥${product.price}`)

                        .fontSize(16)

                        .fontWeight(FontWeight.Bold)

                        .fontColor('#FF0000')

                      Text(`¥${product.originalPrice}`)

                        .fontSize(12)

                        .fontColor(Color.Gray)

                        .decoration({ type: TextDecorationType.LineThrough })

                        .margin({ left: 4 })

                    }

                    Text(product.badge)

                      .fontSize(10)

                      .fontColor(Color.Red)

                      .backgroundColor('#FFE4E1')

                      .padding(4)

                      .borderRadius(4)

                      .margin({ top: 4 })

                  }

                  .width('25%')

                  .alignItems(HorizontalAlign.Center)

                })

              }

              .width('100%')

              .padding(16)



              Grid() {

                ForEach(this.categories, (category: Category) => {

                  GridItem() {

                    Column() {

                      Image(category.icon)

                        .width(40)

                        .height(40)

                      Text(category.name)

                        .fontSize(12)

                        .margin({ top: 4 })

                    }

                    .alignItems(HorizontalAlign.Center)

                  }

                })

              }

              .columnsTemplate('1fr 1fr 1fr 1fr 1fr')

              .rowsTemplate('1fr 1fr')

              .columnsGap(8)

              .rowsGap(16)

              .padding(16)



              Row() {

                Image($r('app.media.template'))

                  .width('48%')

                  .aspectRatio(1)

                  .objectFit(ImageFit.Cover)

                  .margin({ right: 8 })

                Image($r('app.media.template'))

                  .width('48%')

                  .aspectRatio(1)

                  .objectFit(ImageFit.Cover)

              }

              .width('100%')

              .padding(16)



              Image($r('app.media.template'))

                .width('100%')

                .height(120)

                .objectFit(ImageFit.Cover)

                .margin({ bottom: 16 })

            }

          }

          .scrollable(ScrollDirection.Vertical)

          .scrollBar(BarState.Off)

          .edgeEffect(EdgeEffect.Spring)

        }.tabBar('全部')



        TabContent() {

          // Content for '运动必备' tab

        }.tabBar('运动必备')

      }

      .barMode(BarMode.Fixed)

      .barWidth('100%')

      .barHeight(50)

      .animationDuration(400)

      .onChange((index: number) => {

        this.selectedTab = index === 0 ? '全部' : '运动必备';

      })



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('首页').fontSize(12).margin({ top: 4 })

        }.onClick(() => router.pushUrl({ url: 'pages/HomePage' }))



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('课程').fontSize(12).margin({ top: 4 })

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('运动').fontSize(12).margin({ top: 4 })

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('商城').fontSize(12).margin({ top: 4 })

        }

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的').fontSize(12).margin({ top: 4 })

        }

      }

      .width('100%')

      .height(60)

      .justifyContent(FlexAlign.SpaceAround)

      .backgroundColor(Color.White)

      .position({ y: '92%' })

    }

  }

}