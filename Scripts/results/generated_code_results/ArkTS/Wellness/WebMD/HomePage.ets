import router from '@ohos.router';



interface Feature {

  name: string;

  icon: string;

}



interface AdBanner {

  title: string;

  description: string;

  actionButton: string;

}



interface NewsItem {

  title: string;

  description: string;

}



interface NavItem {

  name: string;

  icon: string;

  isActive: boolean;

}



@Entry

@Component

struct HomePage {

  @State features: Feature[] = [

    { name: 'Symptom Checker', icon: 'target' },

    { name: 'Med Reminders', icon: 'pill-clock' },

    { name: 'Prescription Discounts', icon: 'rx' },

    { name: 'Drug Interactions', icon: 'molecule' },

    { name: 'Pill Identifier', icon: 'magnifying-glass-pill' },

    { name: 'Track Symptoms', icon: 'chart-line' }

  ];

  @State adBanner: AdBanner = {

    title: 'WebMDRx',

    description: 'Save up to 80% on prescriptions',

    actionButton: 'Compare prices'

  };

  @State topNews: NewsItem = {

    title: 'The Summer COVID Wave Is Spreading',

    description: 'The summertime spread of COVID-19 is nowhere near ending, according to newly published'

  };

  @State bottomNavBar: NavItem[] = [

    { name: 'Home', icon: 'home', isActive: true },

    { name: 'Doctor Finder', icon: 'stethoscope', isActive: false },

    { name: 'Profile', icon: 'user', isActive: false }

  ];



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

        Search({ placeholder: 'Search drugs, conditions, news...' })

          .width('80%')

          .margin({ left: 10 })

      }.width('100%').padding(10)



      Scroll() {

        Column() {

          Grid() {

            ForEach(this.features, (feature: Feature) => {

              GridItem() {

                Column() {

                  Image($r('app.media.template')).width(40).height(40)

                  Text(feature.name).fontSize(14).margin({ top: 5 })

                }.alignItems(HorizontalAlign.Center)

              }.onClick(() => {

                if (feature.name === 'Pill Identifier') {

                  router.pushUrl({ url: 'pages/PillIdentifierPage' })

                }

              })

            })

          }.columnsTemplate('1fr 1fr 1fr').rowsTemplate('1fr 1fr').height(200).margin({ top: 10 })



          Row() {

            Image($r('app.media.template')).width(100).height(100)

            Column() {

              Text(this.adBanner.title).fontSize(18).fontWeight(FontWeight.Bold)

              Text(this.adBanner.description).fontSize(14)

              Button(this.adBanner.actionButton)

                .fontSize(14)

                .backgroundColor('#007AFF')

                .margin({ top: 5 })

            }.margin({ left: 10 })

          }.width('100%').height(120).backgroundColor('#E8F4FF').borderRadius(10).padding(10).margin({ top: 20 })



          Column() {

            Text('Top News').fontSize(20).fontWeight(FontWeight.Bold).margin({ bottom: 10 })

            Row() {

              Image($r('app.media.template')).width(80).height(80).borderRadius(10)

              Column() {

                Text(this.topNews.title).fontSize(16).fontWeight(FontWeight.Bold)

                Text(this.topNews.description).fontSize(14).margin({ top: 5 })

              }.margin({ left: 10 })

            }.width('100%')

          }.margin({ top: 20 })

        }.width('100%').padding(10)

      }.height('80%')



      Row() {

        ForEach(this.bottomNavBar, (item: NavItem) => {

          Column() {

            Image($r('app.media.template')).width(24).height(24)

            Text(item.name).fontSize(12).margin({ top: 5 })

          }.width('33%').alignItems(HorizontalAlign.Center)

            .backgroundColor(item.isActive ? '#E8F4FF' : Color.White)

        })

      }.width('100%').height('10%').position({ y: '90%' })

    }

  }

}