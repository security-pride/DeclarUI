import SwiftUI
struct NotificationsView: View {
@Environment(.presentationMode) var presentationMode
var body: some View {
    NavigationView {
        VStack(spacing: 0) {
            // Custom Navigation Bar
            HStack {
                Button(action: {
                    presentationMode.wrappedValue.dismiss()
                }) {
                    Image(systemName: "chevron.left")
                        .foregroundColor(.black)
                }
                
                Spacer()
                
                Text("Notification")
                    .font(.title2)
                    .fontWeight(.bold)
                
                Spacer()
                
                Button(action: {
                    // Handle settings action
                }) {
                    Image(systemName: "gearshape")
                        .foregroundColor(.black)
                }
            }
            .padding()
            
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    Text("Recent")
                        .font(.headline)
                        .padding(.horizontal)
                    
                    NotificationItem(
                        icon: "cart",
                        title: "Purchase Completed!",
                        description: "You already bought a class from Jerremy Mamika. Enjoy the class! 👋",
                        time: "2 m ago"
                    )
                    
                    NotificationItem(
                        icon: "person.circle.fill",
                        title: "Jerremy Send You a Message",
                        description: "Hi Magdalena, I've seen your challenge...",
                        time: "2 m ago",
                        action: "Reply the message"
                    )
                    
                    NotificationItem(
                        icon: "tag",
                        title: "Ramadhan Flash Sale!",
                        description: "Get 20% discount for first transaction in this month!😍😍",
                        time: "2 m ago"
                    )
                    
                    NotificationItem(
                        icon: "medal",
                        title: "Challange Completed",
                        description: "Congratulation! you have completed course by Jerremy Mamika",
                        time: "10 m ago"
                    )
                }
                .padding(.top)
            }
        }
        .navigationBarHidden(true)
    }
}
}
struct NotificationItem: View {
let icon: String
let title: String
let description: String
let time: String
var action: String?
var body: some View {
    HStack(alignment: .top, spacing: 16) {
        Image(systemName: icon)
            .font(.system(size: 24))
            .foregroundColor(.purple)
            .frame(width: 40, height: 40)
            .background(Color.purple.opacity(0.1))
            .clipShape(Circle())
        
        VStack(alignment: .leading, spacing: 4) {
            Text(title)
                .font(.headline)
            
            Text(description)
                .font(.subheadline)
                .foregroundColor(.gray)
            
            if let action = action {
                Button(action: {
                    // Handle action
                }) {
                    Text(action)
                        .font(.subheadline)
                        .foregroundColor(.purple)
                }
                .padding(.top, 4)
            }
        }
        
        Spacer()
        
        Text(time)
            .font(.caption)
            .foregroundColor(.gray)
    }
    .padding()
    .background(Color.white)
    .cornerRadius(10)
    .shadow(color: Color.black.opacity(0.05), radius: 5, x: 0, y: 2)
    .padding(.horizontal)
}
}
struct NotificationsView_Previews: PreviewProvider {
static var previews: some View {
NotificationsView()
}
}