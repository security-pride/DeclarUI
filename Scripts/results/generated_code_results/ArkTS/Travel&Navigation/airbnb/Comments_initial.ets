import router from '@ohos.router';
import { DetailPageContent } from './Details';
interface ReviewTag {
name: string;
count: number;
}
interface Review {
reviewer: string;
usage: string;
date: string;
content: string;
}
@Entry
@Component
struct CommentsPage {
@State overallRating: number = 4.80;
@State recommendationStatus: string = '房客推荐';
@State cleanliness: number = 5.0;
@State accuracy: number = 4.8;
@State reviewCount: number = 5;
@State reviewTags: ReviewTag[] = [
{ name: '环境安静', count: 3 },
{ name: '位置优越', count: 2 },
{ name: '推荐入住', count: 2 },
{ name: '干净卫生', count: 1 },
{ name: '房东热情', count: 1 },
{ name: '设施齐全', count: 1 }
];
@State featuredReview: Review = {
reviewer: 'David',
usage: '使用爱彼迎8年',
date: '2024年4月',
content: '宁静而风景如画-我在这里住得非常愉快。大篷车就在海滩旁边，设备齐全，很舒适。公园很安静，是探索南海岸小径的好基地，同时距离韦茅斯也很近。房东很友好，善于沟通，感谢他们愿意回答问题，为当地的酒吧和散步提出建议。我肯定会再次入住这里，并推荐给任何寻找安静休息的人。'
};
build() {
Column() {
Row() {
Image($r('app.media.template'))
.width(24)
.height(24)
.margin({ left: 16 })
.onClick(() => {
router.pushUrl({ url: 'pages/Details' });
})
Text(this.overallRating.toFixed(2))
.fontSize(60)
.fontWeight(FontWeight.Bold)
.margin({ left: 16 })
}.width('100%').height(80)
  Text(this.recommendationStatus)
    .fontSize(16)
    .margin({ top: 16, left: 16 })

  Text('根据评分、评价和可靠性数据，这是爱彼迎上\n最受房客欢迎的房源之一')
    .fontSize(14)
    .margin({ top: 8, left: 16, right: 16 })

  Row() {
    Column() {
      Text('总体评分')
        .fontSize(14)
      Stack() {
        Progress({ value: 5, total: 5, type: ProgressType.Linear })
          .width('80%')
          .height(8)
          .backgroundColor(Color.Gray)
        Progress({ value: 4, total: 5, type: ProgressType.Linear })
          .width('80%')
          .height(8)
          .backgroundColor(Color.Gray)
        Progress({ value: 3, total: 5, type: ProgressType.Linear })
          .width('80%')
          .height(8)
          .backgroundColor(Color.Gray)
        Progress({ value: 2, total: 5, type: ProgressType.Linear })
          .width('80%')
          .height(8)
          .backgroundColor(Color.Gray)
        Progress({ value: 1, total: 5, type: ProgressType.Linear })
          .width('80%')
          .height(8)
          .backgroundColor(Color.Gray)
      }.width('100%').height(40)
    }.width('50%')

    Column() {
      Row() {
        Text('干净卫生')
          .fontSize(14)
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Text(this.cleanliness.toFixed(1))
          .fontSize(14)
      }
      Row() {
        Text('如实描述')
          .fontSize(14)
        Image($r('app.media.template'))
          .width(24)
          .height(24)
        Text(this.accuracy.toFixed(1))
          .fontSize(14)
      }
    }.width('50%')
  }.width('100%').padding({ left: 16, right: 16, top: 16, bottom: 16 })

  Text('5条评价')
    .fontSize(16)
    .fontWeight(FontWeight.Bold)
    .margin({ left: 16, top: 16 })

  Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {
    ForEach(this.reviewTags, (tag: ReviewTag) => {
      Text(`${tag.name} ${tag.count}`)
        .fontSize(14)
        .backgroundColor(Color.Gray)
        .padding(8)
        .borderRadius(16)
        .margin(4)
    })
  }.margin({ left: 16, right: 16, top: 8 })

  Button('最有帮助')
    .width(120)
    .height(40)
    .margin({ top: 16, right: 16 })
    .alignSelf(ItemAlign.End)

  Column() {
    Row() {
      Image($r('app.media.template'))
        .width(40)
        .height(40)
        .borderRadius(20)
      Column() {
        Text(this.featuredReview.reviewer)
          .fontSize(16)
          .fontWeight(FontWeight.Bold)
        Text(this.featuredReview.usage)
          .fontSize(14)
      }.margin({ left: 8 })
    }
    Row() {
      ForEach([1, 2, 3, 4, 5], () => {
        Image($r('app.media.template'))
          .width(16)
          .height(16)
      })
      Text(this.featuredReview.date)
        .fontSize(14)
        .margin({ left: 8 })
    }.margin({ top: 8 })
    Text(this.featuredReview.content)
      .fontSize(14)
      .margin({ top: 8 })
  }.width('100%').padding(16).backgroundColor(Color.White)
}.width('100%').height('100%').backgroundColor(Color.LightGray)
}
}