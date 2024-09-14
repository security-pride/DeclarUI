import router from '@ohos.router';



interface NewsItem {

  source: string;

  title: string;

  time: string;

  likes: number;

  comments: number;

  shares: number;

  image: Resource;

}



@Entry

@Component

struct NewsPage {

  @State newsItems: NewsItem[] = [

    {

      source: 'AP',

      title: 'Argentina wins record 16th Copa America title, beats Colombia 1-0 after Messi gets hurt',

      time: '4h',

      likes: 178,

      comments: 47,

      shares: 9,

      image: $r('app.media.template')

    },

    {

      source: 'Athlon Sports',

      title: 'Caitlin Clark Goes Viral for Dropping Player to Floor in Fever-Lynx',

      time: '11h',

      likes: 73,

      comments: 29,

      shares: 3,

      image: $r('app.media.template')

    },

    {

      source: 'Southern Living',

      title: 'This 740-Square-Foot Bungalow Proves Just The Right Fit For A Family Of Seven',

      time: '6d',

      likes: 18,

      comments: 5,

      shares: 1,

      image: $r('app.media.template')

    },

    {

      source: 'Moneywise',

      title: 'How big is the average Social Security check of a middle-class retiree?',

      time: '22h',

      likes: 113,

      comments: 86,

      shares: 64,

      image: $r('app.media.template')

    }

  ]



  @State currentTab: string = 'For You'



  build() {

    Column() {

      Column() {

        Row() {

          Image($r('app.media.template')).width(24).height(24)

          TextInput({ placeholder: 'Search news' })

            .width('70%')

            .height(40)

            .margin({ left: 10 })

          Image($r('app.media.template')).width(24).height(24)

          Image($r('app.media.template')).width(24).height(24)

        }.width('100%').padding(10)



        Row() {

          Image($r('app.media.template')).width(24).height(24)

          Text('For You').fontWeight(this.currentTab === 'For You' ? FontWeight.Bold : FontWeight.Normal)

            .onClick(() => this.currentTab = 'For You')

          Text('Local').fontWeight(this.currentTab === 'Local' ? FontWeight.Bold : FontWeight.Normal)

            .onClick(() => this.currentTab = 'Local')

          Text('Top Stories').fontWeight(this.currentTab === 'Top Stories' ? FontWeight.Bold : FontWeight.Normal)

            .onClick(() => this.currentTab = 'Top Stories')

          Text('US').fontWeight(this.currentTab === 'US' ? FontWeight.Bold : FontWeight.Normal)

            .onClick(() => this.currentTab = 'US')

        }.width('100%').justifyContent(FlexAlign.SpaceBetween).padding(10)



        Text('Headlines').fontSize(20).fontWeight(FontWeight.Bold).width('100%').padding(10)



        List() {

          ForEach(this.newsItems, (item: NewsItem) => {

            ListItem() {

              Column() {

                Row() {

                  Column() {

                    Text(item.source).fontSize(14).fontColor(Color.Gray)

                    Text(item.title).fontSize(16).fontWeight(FontWeight.Bold)

                    Text(item.time).fontSize(14).fontColor(Color.Gray)

                  }.layoutWeight(1)

                  Image(item.image).width(80).height(80)

                }

                Row() {

                  Image($r('app.media.template')).width(20).height(20)

                  Text(item.likes.toString()).fontSize(14)

                  Image($r('app.media.template')).width(20).height(20)

                  Text(item.comments.toString()).fontSize(14)

                  Image($r('app.media.template')).width(20).height(20)

                  Text(item.shares.toString()).fontSize(14)

                }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 10 })

              }.width('100%').padding(10)

            }

          })

        }.width('100%').height('80%')

      }

      .width('100%')

      .height('90%')



      Row() {

        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Home').fontSize(12)

        }.onClick(() => router.pushUrl({ url: 'pages/HomePage' }))



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Weather').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Chat').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Tabs').fontSize(12)

        }



        Column() {

          Image($r('app.media.template')).width(24).height(24)

          Text('Apps').fontSize(12)

        }.onClick(() => router.pushUrl({ url: 'pages/AppsPage' }))

      }

      .width('100%')

      .height('10%')

      .justifyContent(FlexAlign.SpaceEvenly)

    }

    .width('100%')

    .height('100%')

  }

}