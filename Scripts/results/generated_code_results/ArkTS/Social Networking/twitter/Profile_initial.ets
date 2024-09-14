import router from '@ohos.router';
import { CommonConstants } from '../common/constants/CommonConstants';
@Entry
@Component
struct ProfilePage {
@State profileInfo: ProfileInfo = {
name: 'Pixsellz',
handle: '@pixsellz',
bio: 'Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations',
website: 'pixsellz.io',
joinDate: 'Joined September 2018',
followingCount: 217,
followerCount: 118
}
@State pinnedTweet: TweetInfo = {
content: 'Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design!',
date: '7/31/19',
link: 'constructor.pixsellz.io',
hashtags: ['#prototyping', '#wireframe', '#uiux', '#ux'],
views: 109,
comments: 2,
retweets: 2,
likes: 15
}
build() {
Column() {
this.ProfileHeader()
this.ProfileInfo()
this.ProfileTabs()
this.PinnedTweet()
}
.width('100%')
.height('100%')
.backgroundColor(Color.Black)
}
@Builder
ProfileHeader() {
Row() {
Button({ type: ButtonType.Normal, stateEffect: true }) {
Image($r('app.media.template')).width(24).height(24)
}
.width(48)
.height(48)
.onClick(() => {
router.back()
})
Text('Digital Goodies Team')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.fontColor(Color.White)
Blank()
}
.width('100%')
.height(56)
.padding({ left: 16, right: 16 })
}
@Builder
ProfileInfo() {
Column({ space: 12 }) {
Image($r('app.media.template'))
.width(80)
.height(80)
.borderRadius(40)
Text(this.profileInfo.name)
.fontSize(24)
.fontWeight(FontWeight.Bold)
.fontColor(Color.White)
Text(this.profileInfo.handle)
.fontSize(16)
.fontColor(Color.Gray)
Text(this.profileInfo.bio)
.fontSize(16)
.fontColor(Color.White)
.maxLines(3)
.textOverflow({ overflow: TextOverflow.Ellipsis })
Row({ space: 8 }) {
Image($r('app.media.template')).width(16).height(16)
Text(this.profileInfo.website)
.fontSize(14)
.fontColor(Color.Blue)
Image($r('app.media.template')).width(16).height(16)
Text(this.profileInfo.joinDate)
.fontSize(14)
.fontColor(Color.Gray)
}
Row({ space: 16 }) {
Text(${this.profileInfo.followingCount} Following)
.fontSize(14)
.fontColor(Color.White)
Text(${this.profileInfo.followerCount} Followers)
.fontSize(14)
.fontColor(Color.White)
}
Button('Edit profile', { type: ButtonType.Normal })
.width(120)
.height(36)
.backgroundColor(Color.White)
.fontColor(Color.Black)
}
.width('100%')
.padding(16)
}
@Builder
ProfileTabs() {
Tabs() {
TabContent() {}.tabBar('Tweets')
TabContent() {}.tabBar('Tweets & replies')
TabContent() {}.tabBar('Media')
TabContent() {}.tabBar('Likes')
}
.barMode(BarMode.Fixed)
.barWidth('100%')
.barHeight(48)
}
@Builder
PinnedTweet() {
Column({ space: 8 }) {
Row({ space: 4 }) {
Image($r('app.media.template')).width(16).height(16)
Text('Pinned Tweet').fontSize(14).fontColor(Color.Gray)
}
Row({ space: 12 }) {
Image($r('app.media.template')).width(48).height(48).borderRadius(24)
Column({ space: 4 }) {
Text(this.profileInfo.name)
.fontSize(16)
.fontWeight(FontWeight.Bold)
.fontColor(Color.White)
Text(${this.profileInfo.handle} · ${this.pinnedTweet.date})
.fontSize(14)
.fontColor(Color.Gray)
}
}
Text(this.pinnedTweet.content)
.fontSize(16)
.fontColor(Color.White)
Text(this.pinnedTweet.link)
.fontSize(14)
.fontColor(Color.Blue)
Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {
ForEach(this.pinnedTweet.hashtags, (tag: string) => {
Text(tag)
.fontSize(14)
.fontColor(Color.Blue)
.margin({ right: 8 })
})
}
Image($r('app.media.template'))
.width('100%')
.height(200)
.borderRadius(12)
Row({ space: 16 }) {
Text(${this.pinnedTweet.views} views)
.fontSize(14)
.fontColor(Color.Gray)
Image($r('app.media.template')).width(16).height(16)
Text(this.pinnedTweet.comments.toString())
.fontSize(14)
.fontColor(Color.Gray)
Image($r('app.media.template')).width(16).height(16)
Text(this.pinnedTweet.retweets.toString())
.fontSize(14)
.fontColor(Color.Gray)
Image($r('app.media.template')).width(16).height(16)
Text(this.pinnedTweet.likes.toString())
.fontSize(14)
.fontColor(Color.Gray)
}
}
.width('100%')
.padding(16)
.backgroundColor(Color.Black)
}
}
interface ProfileInfo {
name: string
handle: string
bio: string
website: string
joinDate: string
followingCount: number
followerCount: number
}
interface TweetInfo {
content: string
date: string
link: string
hashtags: string[]
views: number
comments: number
retweets: number
likes: number
}