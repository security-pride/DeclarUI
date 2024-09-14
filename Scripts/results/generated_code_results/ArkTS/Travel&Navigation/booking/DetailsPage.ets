import router from '@ohos.router';



interface Amenity {

  icon: Resource;

  name: string;

}



interface HotelDetails {

  name: string;

  rating: number;

  reviewCount: number;

  address: string;

  distance: string;

  price: string;

  roomType: string;

  amenities: Amenity[];

  images: Resource[];

  checkIn: string;

  checkOut: string;

  guests: string;

}



@Entry

@Component

struct DetailsPage {

  @State hotelDetails: HotelDetails = {

    name: '烟台南山皇冠假日酒店',

    rating: 8.6,

    reviewCount: 29,

    address: '莱山区, 烟台',

    distance: '10千米',

    price: '707元',

    roomType: '1间酒店客房: 2张床',

    amenities: [

      { icon: $r('app.media.template'), name: '免费停车' },

      { icon: $r('app.media.template'), name: '室内游泳池' },

      { icon: $r('app.media.template'), name: '餐厅' },

      { icon: $r('app.media.template'), name: 'Spa及健康中心' },

      { icon: $r('app.media.template'), name: '免费无线网络连接' }

    ],

    images: [$r('app.media.template'), $r('app.media.template'), $r('app.media.template')],

    checkIn: '7月18日 周四',

    checkOut: '7月19日 周五',

    guests: '1间房 · 2位成人 · 无儿童'

  }



  build() {

    Column() {

      Row() {

        Image($r('app.media.template')).width(24).height(24).onClick(() => {

          router.pushUrl({ url: 'pages/SearchPage' })

        })

        Blank()

        Image($r('app.media.template')).width(24).height(24).onClick(() => {

          router.pushUrl({ url: 'pages/SurroundingsPage' })

        })

      }.width('100%').padding({ left: 16, right: 16, top: 16 })



      Scroll() {

        Column() {

          Swiper() {

            ForEach(this.hotelDetails.images, (image: Resource) => {

              Image(image).width('100%').height(200).objectFit(ImageFit.Cover)

            })

          }.height(200).autoPlay(true)



          Column({ space: 8 }) {

            Text(this.hotelDetails.name).fontSize(20).fontWeight(FontWeight.Bold)

            Row() {

              Text(this.hotelDetails.rating.toString()).fontSize(16)

              Text(`(${this.hotelDetails.reviewCount}条点评)`).fontSize(14).fontColor(Color.Gray)

            }

            Text(this.hotelDetails.address).fontSize(14)

            Text(this.hotelDetails.distance).fontSize(14).fontColor(Color.Blue)

          }.padding(16)



          Row({ space: 8 }) {

            ForEach(this.hotelDetails.amenities, (amenity: Amenity) => {

              Column({ space: 4 }) {

                Image(amenity.icon).width(24).height(24)

                Text(amenity.name).fontSize(12)

              }

            })

          }.padding(16)



          Column({ space: 8 }) {

            Text('房间信息').fontSize(18).fontWeight(FontWeight.Bold)

            Text(this.hotelDetails.roomType).fontSize(14)

            Text(this.hotelDetails.price).fontSize(16).fontColor(Color.Red)

          }.padding(16)



          Column({ space: 8 }) {

            Text('入住时间').fontSize(16)

            Text(this.hotelDetails.checkIn).fontSize(14)

            Text('退房时间').fontSize(16)

            Text(this.hotelDetails.checkOut).fontSize(14)

            Text('客房与客人数').fontSize(16)

            Text(this.hotelDetails.guests).fontSize(14)

          }.padding(16)



          Button('查看房型列表').onClick(() => {

            router.pushUrl({ url: 'pages/TypeDetailsPage' })

          }).width('90%').margin({ top: 16, bottom: 16 })

        }

      }.height('80%')

    }

  }

}