import router from '@ohos.router';

@Entry
@Component
struct HomePage {
  @State currentTab: number = 0;
  @State videoLikes: number = 4231;
  @State videoComments: number = 644;

  @Builder TabBuilder(title: string, index: number) {
    Column() {
      Text(title)
        .fontColor(this.currentTab === index ? Color.White : Color.Gray)
        .fontSize(16)
        .fontWeight(this.currentTab === index ? FontWeight.Bold : FontWeight.Normal)
      if (this.currentTab === index) {
        Divider()
          .width(20)
          .height(2)
          .color(Color.White)
          .margin({ top: 4 })
      }
    }
    .onClick(() => {
      this.currentTab = index;
    })
  }

  build() {
    Column() {
      Row() {
        this.TabBuilder('For You', 0)
        this.TabBuilder('Following', 1)
        this.TabBuilder('Live', 2)
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceEvenly)
      .padding({ top: 8, bottom: 8 })

      Swiper() {
        Column() {
          Stack({ alignContent: Alignment.Bottom }) {
            Image($r('app.media.template'))
              .width('100%')
              .height('100%')
              .objectFit(ImageFit.Cover)

            Column() {
              Row() {
                Column() {
                  Text('RomeoSmile')
                    .fontSize(16)
                    .fontColor(Color.White)
                  Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac a eu eras. Et augue amet id')
                    .fontSize(14)
                    .fontColor(Color.White)
                    .margin({ top: 4 })
                }
                .alignItems(HorizontalAlign.Start)
                .layoutWeight(1)

                Button({ type: ButtonType.Normal, stateEffect: true }) {
                  Text('Follow').fontColor(Color.White)
                }
                .backgroundColor(Color.Red)
                .width(80)
                .height(32)
              }
              .width('100%')
              .padding(16)

              Row() {
                Image($r('app.media.template'))
                  .width(24)
                  .height(24)
                  .margin({ right: 8 })
                Text('eyes blue like the atlantic')
                  .fontSize(14)
                  .fontColor(Color.White)
              }
              .width('100%')
              .padding({ left: 16, right: 16, bottom: 16 })
            }
          }
          .width('100%')
          .height('90%')

          Row() {
            Column() {
              Image($r('app.media.template')).width(32).height(32)
              Text('Like').fontSize(12).fontColor(Color.White).margin({ top: 4 })
              Text(this.videoLikes.toString()).fontSize(12).fontColor(Color.White)
            }
            .onClick(() => {
              this.videoLikes++;
            })

            Column() {
              Image($r('app.media.template')).width(32).height(32)
              Text('Comment').fontSize(12).fontColor(Color.White).margin({ top: 4 })
              Text(this.videoComments.toString()).fontSize(12).fontColor(Color.White)
            }
            .onClick(() => {
              router.pushUrl({ url: 'pages/commentsPage' })
            })

            Column() {
              Image($r('app.media.template')).width(32).height(32)
              Text('Share').fontSize(12).fontColor(Color.White).margin({ top: 4 })
            }
          }
          .width('100%')
          .justifyContent(FlexAlign.SpaceAround)
          .margin({ top: 16 })
        }
        .width('100%')
        .height('100%')
      }
      .width('100%')
      .layoutWeight(1)

      Row() {
        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Home').fontSize(12).fontColor(Color.White)
        }

        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Discover').fontSize(12).fontColor(Color.White)
        }
        .onClick(() => {
          router.pushUrl({ url: 'pages/discoverPage' })
        })

        Image($r('app.media.template')).width(48).height(48)

        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Activity').fontSize(12).fontColor(Color.White)
        }

        Column() {
          Image($r('app.media.template')).width(24).height(24)
          Text('Profile').fontSize(12).fontColor(Color.White)
        }
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceAround)
      .padding({ top: 8, bottom: 8 })
      .backgroundColor(Color.Black)
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.Black)
  }
}