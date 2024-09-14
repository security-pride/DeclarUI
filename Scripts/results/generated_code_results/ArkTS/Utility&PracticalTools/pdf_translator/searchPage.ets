import router from '@ohos.router';



interface PDFFile {

  name: string;

  date: string;

  size: string;

}



@Entry

@Component

struct SearchPage {

  @State searchQuery: string = ''

  @State files: PDFFile[] = [

    { name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' }

  ]



  build() {

    Column() {

      Row() {

        Text('PDF file management')

          .fontSize(20)

          .fontWeight(FontWeight.Bold)

        Blank()

        Image($r('app.media.template'))

          .width(24)

          .height(24)

        Image($r('app.media.template'))

          .width(24)

          .height(24)

      }

      .width('100%')

      .height('8%')

      .padding({ left: 16, right: 16 })



      TextInput({ placeholder: 'Search your files' })

        .width('90%')

        .height(40)

        .margin({ top: 8, bottom: 8 })

        .onChange((value: string) => {

          this.searchQuery = value

        })



      List() {

        ForEach(this.files.filter(file => file.name.toLowerCase().includes(this.searchQuery.toLowerCase())), (file: PDFFile) => {

          ListItem() {

            Row() {

              Image($r('app.media.template'))

                .width(40)

                .height(40)

                .margin({ right: 16 })

              Column() {

                Text(file.name)

                  .fontSize(16)

                Text(`${file.date}  ${file.size}`)

                  .fontSize(14)

                  .fontColor(Color.Gray)

              }

              .alignItems(HorizontalAlign.Start)

              Blank()

              Image($r('app.media.template'))

                .width(24)

                .height(24)

            }

            .width('100%')

            .height(72)

            .padding(16)

            .backgroundColor(Color.White)

            .margin({ bottom: 1 })

          }

          .onClick(() => {

            router.pushUrl({ url: 'pages/homePage' })

          })

        })

      }

      .layoutWeight(1)



      Button('+')

        .width(56)

        .height(56)

        .fontColor(Color.White)

        .fontSize(24)

        .backgroundColor(Color.Red)

        .margin({ bottom: 16, right: 16 })

        .onClick(() => {

          // Add new file functionality

        })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}