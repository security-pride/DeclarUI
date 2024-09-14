import router from '@ohos.router';



interface UploadItem {

  title: string;

  description: string;

  location: string;

  price: string;

  shipping: string;

}



@Entry

@Component

struct UploadPage {

  @State uploadItem: UploadItem = {

    title: '',

    description: '',

    location: '烟台 芝罘区',

    price: '¥0.00',

    shipping: '包邮'

  }



  build() {

    Column() {

      Row() {

        Button({ type: ButtonType.Normal }) {

          Image($r('app.media.template')).width(24).height(24)

        }.onClick(() => {

          router.pushUrl({ url: 'pages/SellPage' })

        })



        Text('发闲置').fontSize(18).fontWeight(FontWeight.Bold)



        Blank()



        Button('发布')

          .backgroundColor('#FFD700')

          .fontColor(Color.Black)

          .onClick(() => {

            // Handle publish action

          })

      }

      .width('100%')

      .padding(10)

      .justifyContent(FlexAlign.SpaceBetween)



      Scroll() {

        Column() {

          Row() {

            Image($r('app.media.template'))

              .width(100)

              .height(100)

              .margin({ right: 10 })



            Text('添加优质首图更吸引人~')

              .fontSize(14)

              .fontColor(Color.Gray)

          }

          .width('100%')

          .height(120)

          .backgroundColor(Color.White)

          .margin({ top: 10 })



          TextArea({ placeholder: '描述一下宝贝的品牌型号、货品来源...' })

            .height(150)

            .margin({ top: 10 })



          Row() {

            Text(this.uploadItem.location)

            Blank()

            Image($r('app.media.template')).width(20).height(20)

          }

          .width('100%')

          .padding(10)

          .backgroundColor(Color.White)

          .margin({ top: 10 })



          Row() {

            Text('价格')

            Blank()

            Text(this.uploadItem.price)

              .fontColor(Color.Red)

          }

          .width('100%')

          .padding(10)

          .backgroundColor(Color.White)

          .margin({ top: 1 })



          Row() {

            Text('发货方式')

            Blank()

            Text(this.uploadItem.shipping)

          }

          .width('100%')

          .padding(10)

          .backgroundColor(Color.White)

          .margin({ top: 1 })



          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('宝贝不在身边？点我')

              .fontSize(14)

              .fontColor(Color.Gray)

              .margin({ left: 5 })

          }

          .width('100%')

          .padding(10)

          .backgroundColor(Color.White)

          .margin({ top: 10 })

        }

      }

      .scrollable(ScrollDirection.Vertical)

      .scrollBar(BarState.Off)

      .edgeEffect(EdgeEffect.Spring)

      .height('90%')

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}