import router from '@ohos.router';
import { CommonConstants } from '../common/CommonConstants';
@Entry
@Component
struct Discovery {
@State featured: FeaturedItem[] = [
{
title: 'Nature rain on leaves',
duration: '45 MIN',
type: 'premium',
thumbnail: $r('app.media.template')
}
];
@State workouts: WorkoutItem[] = [
{
title: 'Total body barre: bodyweight',
duration: '27 MIN',
language: '英语',
type: 'premium',
thumbnail: $r('app.media.template')
},
{
title: 'Cardio groove dance',
duration: '16 MIN',
language: '英语',
thumbnail: $r('app.media.template')
}
];
build() {
Column() {
Text('发现')
.fontSize(20)
.fontWeight(FontWeight.Bold)
.width('100%')
.padding(16)
  Scroll() {
    Column() {
      this.FeaturedSection()
      this.WorkoutSection()
    }
  }
  .layoutWeight(1)

  Row() {
    Button({ type: ButtonType.Normal, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
      Text('发现').fontSize(12).fontColor(Color.Blue)
    }.onClick(() => {
      // Already on Discovery page
    })

    Button({ type: ButtonType.Normal, stateEffect: true }) {
      Image($r('app.media.template')).width(24).height(24)
      Text('好友').fontSize(12)
    }.onClick(() => {
      router.pushUrl({ url: 'pages/Friends' })
    })
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceAround)
  .padding({ bottom: 16 })
}
}
@Builder
FeaturedSection() {
Column() {
Row() {
Text('特色').fontSize(18).fontWeight(FontWeight.Bold)
Text('查看全部')
.fontSize(14)
.fontColor(Color.Blue)
.onClick(() => {
// Handle view all featured items
})
}
.width('100%')
.justifyContent(FlexAlign.SpaceBetween)
.padding({ left: 16, right: 16, top: 8, bottom: 8 })
  List() {
    ForEach(this.featured, (item: FeaturedItem) => {
      ListItem() {
        this.FeaturedItem(item)
      }
    }, item => item.title)
  }
  .height(200)
  .listDirection(Axis.Horizontal)
}
}
@Builder
FeaturedItem(item: FeaturedItem) {
Column() {
Image(item.thumbnail)
.width(280)
.height(160)
.borderRadius(8)
  Row() {
    Column() {
      Text(item.title).fontSize(16)
      Text(item.duration).fontSize(14).fontColor(Color.Gray)
    }

    Text('premium')
      .fontSize(12)
      .fontColor(Color.Orange)
      .border({ width: 1, color: Color.Orange })
      .padding(4)
      .borderRadius(4)
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceBetween)
  .padding({ top: 8 })
}
.width(280)
.padding(8)
.onClick(() => {
  router.pushUrl({ url: 'pages/EnvironmentSimulation' })
})
}
@Builder
WorkoutSection() {
Column() {
Row() {
Text('锻炼').fontSize(18).fontWeight(FontWeight.Bold)
Text('查看全部')
.fontSize(14)
.fontColor(Color.Blue)
.onClick(() => {
// Handle view all workouts
})
}
.width('100%')
.justifyContent(FlexAlign.SpaceBetween)
  List() {
    ForEach(this.workouts, (item: WorkoutItem) => {
      ListItem() {
        this.WorkoutItem(item)
      }
    }, item => item.title)
  }
}
}
@Builder
WorkoutItem(item: WorkoutItem) {
Row() {
Image(item.thumbnail)
.width(120)
.height(80)
.borderRadius(8)
  Column() {
    Text(item.title).fontSize(16)
    Text(item.duration).fontSize(14).fontColor(Color.Gray)
    Text(item.language).fontSize(14).fontColor(Color.Gray)
  }
  .layoutWeight(1)
  .alignItems(HorizontalAlign.Start)
  .padding({ left: 12 })

  if (item.type === 'premium') {
    Text('premium')
      .fontSize(12)
      .fontColor(Color.Orange)
      .border({ width: 1, color: Color.Orange })
      .padding(4)
      .borderRadius(4)
  }
}
.width('100%')
.padding(8)
.onClick(() => {
  // Handle workout item click
})
}
}
interface FeaturedItem {
title: string;
duration: string;
type: string;
thumbnail: Resource;
}
interface WorkoutItem {
title: string;
duration: string;
language: string;
type?: string;
thumbnail: Resource;
}