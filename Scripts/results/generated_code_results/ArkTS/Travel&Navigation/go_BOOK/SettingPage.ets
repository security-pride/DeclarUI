import router from '@ohos.router';



interface UserProfile {

  name: string;

  role: string;

  avatar: Resource;

}



@Entry

@Component

struct SettingPage {

  @State userProfile: UserProfile = {

    name: 'Mosarraf Hossain',

    role: 'Product Designer',

    avatar: $r('app.media.template')

  }

  @State notificationEnabled: boolean = true



  build() {

    Column() {

      Row() {

        Button({ type: ButtonType.Circle, stateEffect: true }) {

          Image($r('app.media.template')).width(24).height(24)

        }

        .width(40).height(40)

        .onClick(() => {

          router.back()

        })



        Text('Notification').fontSize(20).fontWeight(FontWeight.Bold)



        Button({ type: ButtonType.Circle, stateEffect: true }) {

          Image($r('app.media.template')).width(24).height(24)

        }

        .width(40).height(40)

        .onClick(() => {

          // Open settings

        })

      }

      .width('100%')

      .justifyContent(FlexAlign.SpaceBetween)

      .padding({ left: 16, right: 16, top: 8, bottom: 8 })



      Scroll() {

        Column() {

          Row() {

            Image(this.userProfile.avatar)

              .width(50)

              .height(50)

              .borderRadius(25)

            Column() {

              Text(this.userProfile.name)

                .fontSize(18)

                .fontWeight(FontWeight.Bold)

              Text(this.userProfile.role)

                .fontSize(14)

                .fontColor(Color.Gray)

            }.alignItems(HorizontalAlign.Start)

            .margin({ left: 16 })

          }

          .width('100%')

          .padding(16)



          List() {

            ListItem() {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('Change Password').fontSize(16).margin({ left: 16 })

              }

            }

            .onClick(() => {

              // Change password logic

            })



            ListItem() {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('Notification').fontSize(16).margin({ left: 16 })

                Blank()

                Toggle({ type: ToggleType.Switch, isOn: this.notificationEnabled })

                  .onChange((isOn: boolean) => {

                    this.notificationEnabled = isOn

                  })

              }

            }



            ListItem() {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('Payment Method').fontSize(16).margin({ left: 16 })

              }

            }

            .onClick(() => {

              // Navigate to payment method page

            })



            ListItem() {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('Security').fontSize(16).margin({ left: 16 })

              }

            }

            .onClick(() => {

              // Navigate to security page

            })



            ListItem() {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('Invite Friend').fontSize(16).margin({ left: 16 })

              }

            }

            .onClick(() => {

              // Invite friend logic

            })



            ListItem() {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('Terms & Condition').fontSize(16).margin({ left: 16 })

              }

            }

            .onClick(() => {

              // Navigate to terms and conditions page

            })



            ListItem() {

              Row() {

                Image($r('app.media.template')).width(24).height(24)

                Text('Privacy Policy').fontSize(16).margin({ left: 16 })

              }

            }

            .onClick(() => {

              // Navigate to privacy policy page

            })

          }

          .width('100%')

        }

        .width('100%')

      }

      .scrollBar(BarState.Auto)

      .scrollable(ScrollDirection.Vertical)

      .height('80%')



      Button('Logout', { type: ButtonType.Capsule, stateEffect: true })

        .width('90%')

        .height(50)

        .backgroundColor('#007DFF')

        .fontColor(Color.White)

        .margin({ top: 20, bottom: 20 })

        .onClick(() => {

          router.pushUrl({ url: 'pages/LoginPage' })

        })

    }

    .width('100%')

    .height('100%')

    .backgroundColor('#F1F3F5')

  }

}