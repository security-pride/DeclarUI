import router from '@ohos.router';
@Entry
@Component
struct MenuPage {
@State profileInfo: ProfileInfo = {
name: 'Pixsellz',
handle: '@pixsellz',
followingCount: 216,
followerCount: 117
}
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(100)
.height(100)
.margin({ left: 16, top: 16 })
Column() {
Text(this.profileInfo.name)
.fontSize(20)
.fontWeight(FontWeight.Bold)
Text(this.profileInfo.handle)
.fontSize(16)
.fontColor(Color.Gray)
}.margin({ left: 16, top: 16 })
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ right: 16, top: 16 })
}.width('100%')
  Row() {
    Text(`${this.profileInfo.followingCount} Following`)
      .fontSize(16)
      .margin({ right: 16 })
    Text(`${this.profileInfo.followerCount} Followers`)
      .fontSize(16)
  }.margin({ top: 16, bottom: 16 })

  List() {
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Profile').fontSize(18).margin({ left: 16 })
      }.width('100%').height(48).onClick(() => {
        router.pushUrl({ url: 'pages/ProfilePage' })
      })
    }
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Lists').fontSize(18).margin({ left: 16 })
      }.width('100%').height(48)
    }
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Topics').fontSize(18).margin({ left: 16 })
      }.width('100%').height(48)
    }
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Bookmarks').fontSize(18).margin({ left: 16 })
      }.width('100%').height(48)
    }
    ListItem() {
      Row() {
        Image($r('app.media.template')).width(24).height(24)
        Text('Moments').fontSize(18).margin({ left: 16 })
      }.width('100%').height(48)
    }
  }.divider({ strokeWidth: 1, color: '#E3E3E3' })

  Divider().color('#E3E3E3').height(1).margin({ top: 16, bottom: 16 })

  Text('Settings and privacy')
    .fontSize(18)
    .width('100%')
    .textAlign(TextAlign.Start)
    .padding({ left: 16, top: 8, bottom: 8 })

  Text('Help Center')
    .fontSize(18)
    .width('100%')
    .textAlign(TextAlign.Start)
    .padding({ left: 16, top: 8, bottom: 8 })

  Blank()

  Row() {
    Image($r('app.media.template')).width(24).height(24)
    Image($r('app.media.template')).width(24).height(24).margin({ left: 16 })
    Blank()
    Image($r('app.media.template')).width(24).height(24)
  }.width('100%').padding(16)
}
.width('100%')
.height('100%')
.backgroundColor(Color.White)
}
}
interface ProfileInfo {
name: string
handle: string
followingCount: number
followerCount: number
}