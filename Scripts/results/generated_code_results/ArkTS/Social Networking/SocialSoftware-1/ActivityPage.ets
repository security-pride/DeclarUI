import router from '@ohos.router';



interface ActivityItem {

  name: string;

  action: string;

}



@Entry

@Component

struct ActivityPage {

  @State activityList: ActivityItem[] = [

    { name: 'thomas', action: 'Started following you' },

    { name: 'mike', action: 'Started following you' },

    { name: 'michael', action: 'Started following you' },

    { name: 'willie', action: 'Started following you' },

    { name: 'peter', action: 'Started following you' },

    { name: 'angela', action: 'Started following you' },

    { name: 'devon', action: 'Started following you' },

    { name: 'col', action: 'Started following you' },

    { name: 'templeton', action: 'Started following you' },

    { name: 'willie', action: 'Started following you' },

    { name: 'dori', action: 'Started following you' }

  ];



  @Builder

  NavBar() {

    Row() {

      Text('Activity').fontSize(20).fontWeight(FontWeight.Bold)

    }.width('100%').height(56).padding({ left: 16, right: 16 })

  }



  @Builder

  TabBar() {

    Row() {

      ForEach(['All', 'Answers', 'Mentions', 'Verifi'], (tab: string) => {

        Text(tab)

          .fontSize(14)

          .fontWeight(tab === 'All' ? FontWeight.Bold : FontWeight.Normal)

          .padding(10)

          .backgroundColor(tab === 'All' ? '#E8E8E8' : Color.Transparent)

          .borderRadius(20)

      })

    }.width('100%').height(48).padding({ left: 16, right: 16 })

  }



  @Builder

  ActivityItem(item: ActivityItem) {

    Row() {

      Image($r('app.media.template'))

        .width(40)

        .height(40)

        .borderRadius(20)

      Column() {

        Text(item.name).fontSize(16).fontWeight(FontWeight.Medium)

        Text(item.action).fontSize(14).fontColor(Color.Gray)

      }.layoutWeight(1).alignItems(HorizontalAlign.Start).margin({ left: 12 })

      Button('Follow')

        .width(80)

        .height(32)

        .backgroundColor('#E8E8E8')

        .fontColor(Color.Black)

    }.width('100%').padding(16)

  }



  build() {

    Column() {

      this.NavBar()

      this.TabBar()

      List() {

        ForEach(this.activityList, (item: ActivityItem) => {

          ListItem() {

            this.ActivityItem(item)

          }.onClick(() => {

            router.pushUrl({ url: 'pages/UserProfilePage' })

          })

        })

      }.width('100%').layoutWeight(1)



      Row() {

        ForEach(['Home', 'Search', 'Create', 'Likes', 'Profile'], (icon: string) => {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text(icon).fontSize(12).margin({ top: 4 })

          }.width('20%').height(56).onClick(() => {

            if (icon === 'Home') {

              router.pushUrl({ url: 'pages/FeedPage' })

            } else if (icon === 'Search') {

              router.pushUrl({ url: 'pages/SearchPage' })

            } else if (icon === 'Profile') {

              router.pushUrl({ url: 'pages/ProfilePage' })

            }

          })

        })

      }.width('100%').height(56).backgroundColor(Color.White)

    }.width('100%').height('100%')

  }

}