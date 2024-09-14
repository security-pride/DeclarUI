import router from '@ohos.router';



interface DrugInfo {

  name: string;

  genericName: string;

  commonBrands: string[];

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

    commonBrands: ['Abilify'],

    reviewCount: 1888,

    rating: 3,

    description: "This medication is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole belongs to a class of drugs known as atypical antipsychotics. It works by helping to restore the balance of certain natural substances in the brain."

  }



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24)

          .onClick(() => {

            router.pushUrl({ url: 'pages/IdentifyResultPage' })

          })

        Text(this.drugInfo.name).fontSize(20).fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template')).width(24).height(24)

        Image($r('app.media.template')).width(24).height(24)

      }.width('100%').height(56).padding({ left: 16, right: 16 })



      Scroll() {

        Column() {

          Tabs({ barPosition: BarPosition.Start, index: this.currentTab }) {

            TabContent() {

              this.UsesContent()

            }.tabBar('Uses')



            TabContent() {

              Text('Side Effects Content')

            }.tabBar('Side Effects')



            TabContent() {

              Text('Precautions Content')

            }.tabBar('Precautions')

          }.onChange((index: number) => {

            this.currentTab = index

          })

        }

      }.flexGrow(1)



      Row() {

        Button('Add Med Reminder')

          .onClick(() => {

            router.pushUrl({ url: 'pages/ReminderPage' })

          })

        Button('Search Drug Prices')

      }.width('100%').justifyContent(FlexAlign.SpaceAround).padding(16)

    }

  }



  @Builder

  UsesContent() {

    Column() {

      Image($r('app.media.template'))

        .width(200).height(100).objectFit(ImageFit.Contain)



      Text(this.drugInfo.name)

        .fontSize(24).fontWeight(FontWeight.Bold).margin({ top: 16 })



      Text(`Generic: ${this.drugInfo.genericName}`)

        .fontSize(16).margin({ top: 8 })



      Text(`Common Brand(s): ${this.drugInfo.commonBrands.join(', ')}`)

        .fontSize(16).margin({ top: 8 })



      Row() {

        Text(`Reviews (${this.drugInfo.reviewCount})`)

          .fontSize(16).fontColor(Color.Blue)

        Row() {

          ForEach([1, 2, 3, 4, 5], (star: number) => {

            Image(star <= this.drugInfo.rating ? $r('app.media.star_filled') : $r('app.media.star_empty'))

              .width(24)

              .height(24)

          })

        }.width(120)

      }.margin({ top: 8 })



      Text('Warnings: If you are using aripiprazo...')

        .fontSize(16).fontColor(Color.Red).margin({ top: 16 })

        .onClick(() => {

          // Show more warnings

        })



      Text(this.drugInfo.description)

        .fontSize(16).margin({ top: 16 })

    }.width('100%').padding(16)

  }

}