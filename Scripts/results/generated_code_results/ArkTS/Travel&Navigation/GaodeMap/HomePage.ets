import router from '@ohos.router';



interface QuickAccessButton {

  name: string;

  icon: Resource;

}



interface ToolbarButton {

  name: string;

  icon: Resource;

}



interface QuickAction {

  name: string;

  icon: Resource;

}



@Entry

@Component

struct HomePage {

  @State quickAccessButtons: QuickAccessButton[] = [

    { name: '驾车', icon: $r('app.media.template') },

    { name: '公交', icon: $r('app.media.template') },

    { name: '优惠加油', icon: $r('app.media.template') },

    { name: '打车', icon: $r('app.media.template') },

    { name: '订酒店', icon: $r('app.media.template') }

  ];



  @State toolbarButtons: ToolbarButton[] = [

    { name: '火车票机票', icon: $r('app.media.template') },

    { name: '代驾', icon: $r('app.media.template') },

    { name: '步行', icon: $r('app.media.template') },

    { name: '实时公交', icon: $r('app.media.template') },

    { name: '更多工具', icon: $r('app.media.template') }

  ];



  @State quickActions: QuickAction[] = [

    { name: '回家', icon: $r('app.media.template') },

    { name: '去单位', icon: $r('app.media.template') }

  ];



  build() {

    Column() {

      // Header

      Row() {

        TextInput({ placeholder: '查找地点、公交、地铁' })

          .width('80%')

          .height(40)

          .backgroundColor('#F5F5F5')

        Image($r('app.media.template')).width(24).height(24).margin({ left: 8 })

      }.width('100%').padding(16).backgroundColor(Color.White)



      // Map View

      Stack() {

        Image($r('app.media.template')).width('100%').height('60%')

        Column() {

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('通知').fontSize(14).margin({ left: 4 })

          }.position({ x: 16, y: 16 })

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('图层').fontSize(14).margin({ left: 4 })

          }.position({ x: 16, y: 56 })

          Row() {

            Image($r('app.media.template')).width(24).height(24)

            Text('反馈').fontSize(14).margin({ left: 4 })

          }.position({ x: 16, y: 96 })

        }

        Button('路线').width(80).height(40).position({ bottom: 16, right: 16 })

      }.width('100%').height('60%')



      // Quick Access Buttons

      Scroll() {

        Row() {

          ForEach(this.quickAccessButtons, (button: QuickAccessButton) => {

            Column() {

              Image(button.icon).width(40).height(40)

              Text(button.name).fontSize(12).margin({ top: 4 })

            }.width('20%').height(80).onClick(() => {

              if (button.name === '优惠加油') {

                router.pushUrl({ url: 'pages/GasInformationPage' })

              }

            })

          })

        }.width('100%')

      }.width('100%').height(100)



      // Toolbar

      Scroll() {

        Row() {

          ForEach(this.toolbarButtons, (button: ToolbarButton) => {

            Column() {

              Image(button.icon).width(40).height(40)

              Text(button.name).fontSize(12).margin({ top: 4 })

            }.width('20%').height(80).onClick(() => {

              if (button.name === '火车票机票') {

                router.pushUrl({ url: 'pages/TicketServicePage' })

              }

            })

          })

        }.width('100%')

      }.width('100%').height(100)



      // Quick Actions

      Row() {

        ForEach(this.quickActions, (action: QuickAction) => {

          Button() {

            Row() {

              Image(action.icon).width(24).height(24)

              Text(action.name).fontSize(14).margin({ left: 8 })

            }

          }.height(40).backgroundColor(Color.White).margin({ right: 8 })

        })

      }.width('100%').padding({ left: 16, right: 16, top: 8, bottom: 8 })



      // Bottom Navigation

      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('首页').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('附近').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('消息').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('打车').fontSize(12)

        }.layoutWeight(1)

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('我的').fontSize(12)

        }.layoutWeight(1)

      }.width('100%').height(60).position({ bottom: 0 }).backgroundColor(Color.White)

    }.width('100%').height('100%')

  }

}