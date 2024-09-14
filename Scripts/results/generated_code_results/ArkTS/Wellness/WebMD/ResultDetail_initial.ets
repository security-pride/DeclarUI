import router from '@ohos.router';



interface DrugInfo {

  name: string;

  genericName: string;

  commonBrand: string;

  reviewCount: number;

  rating: number;

  description: string;

}



@Entry

@Component

struct ResultDetailPage {

  @State currentTab: number = 0;

  @State drugInfo: DrugInfo = {

    name: 'Abilify',

    genericName: 'aripiprazole',

    commonBrand: 'Abilify',

    reviewCount: 1888,

    rating: 3,

    description: "This medication is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole belongs to a class of drugs known as atypical antipsychotics. It works by helping to restore the balance of certain natural substances in the brain."

  }



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => router.pushUrl({ url: 'pages/IdentifyResultPage' }))

        Text(this.drugInfo.name).fontSize(20).fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').padding(16).backgroundColor(Color.White)



      Scroll() {

        Column() {

          Image($r('app.media.template'))

            .width(200).height(200)

            .objectFit(ImageFit.Contain)



          Text(this.drugInfo.name).fontSize(24).fontWeight(FontWeight.Bold).margin({ top: 16 })

          Text(`Generic: ${this.drugInfo.genericName}`).fontSize(16).margin({ top: 8 })

          Text(`Common Brand(s): ${this.drugInfo.commonBrand}`).fontSize(16).margin({ top: 8 })



          Row() {

            Text(`Reviews (${this.drugInfo.reviewCount})`).fontSize(16)

            ForEach([1, 2, 3, 4, 5], (star) => {

              Image($r('app.media.template'))

                .width(20).height(20)

                .fillColor(star <= this.drugInfo.rating ? Color.Yellow : Color.Gray)

            })

          }.margin({ top: 16 })



          Text('Warnings: If you are using aripipr...').fontSize(16).fontWeight(FontWeight.Bold).margin({ top: 16 })

          Text('Show more').fontSize(16).fontColor(Color.Blue).margin({ top: 8 })

            .onClick(() => {

              // Handle show more click

            })



          Text(this.drugInfo.description).fontSize(16).margin({ top: 16 })

        }.padding(16)

      }.height('80%')



      Tabs() {

        TabContent() {

          Text('Uses content')

        }.tabBar('Uses')



        TabContent() {

          Text('Side Effects content')

        }.tabBar('Side Effects')



        TabContent() {

          Text('Precautions content')

        }.tabBar('Precautions')

      }.barMode(BarMode.Fixed).height('10%')



      Row() {

        Button('Add Med Reminder')

          .onClick(() => router.pushUrl({ url: 'pages/ReminderPage' }))

        Button('Search Drug Prices')

          .onClick(() => {

            // Handle search drug prices

          })

      }.width('100%').justifyContent(FlexAlign.SpaceEvenly).padding(16)

    }

  }

}