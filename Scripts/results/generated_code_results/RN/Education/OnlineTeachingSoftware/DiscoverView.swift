import SwiftUI
struct DiscoverView: View {
@State private var selectedTab = 0
var body: some View {
    NavigationView {
        VStack(spacing: 0) {
            ZStack {
                Color.black.opacity(0.9)
                    .edgesIgnoringSafeArea(.top)
                
                VStack(alignment: .leading, spacing: 20) {
                    HStack {
                        Button(action: {
                            // Handle menu action
                        }) {
                            Image(systemName: "square.grid.2x2")
                                .foregroundColor(.white)
                        }
                        
                        Spacer()
                        
                        Text("Discover")
                            .font(.title2)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                        
                        Spacer()
                        
                        NavigationLink(destination: NotificationsView()) {
                            Image(systemName: "bell")
                                .foregroundColor(.white)
                                .overlay(
                                    Circle()
                                        .fill(Color.red)
                                        .frame(width: 8, height: 8)
                                        .offset(x: 8, y: -8),
                                    alignment: .topTrailing
                                )
                        }
                    }
                    .padding(.horizontal)
                    
                    Text("Study what you want\nanytime anywhere")
                        .font(.title)
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .padding(.horizontal)
                }
                .padding(.top, 50)
            }
            .frame(height: 200)
            
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    FeaturedCourseView()
                    
                    HStack {
                        Text("Popular Course")
                            .font(.title3)
                            .fontWeight(.bold)
                        
                        Spacer()
                        
                        Button("See All") {
                            // Handle see all action
                        }
                        .foregroundColor(.blue)
                    }
                    .padding(.horizontal)
                    
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: 20) {
                            PopularCourseView(title: "Expert Wireframing for Mobile Design", category: "Graphic Design", instructor: "Jerremy Mamika", price: "$48")
                            
                            PopularCourseView(title: "Bootstrapping Principles", category: "Development", instructor: "Alexander Be", price: "")
                        }
                        .padding(.horizontal)
                    }
                }
            }
            
            Spacer()
            
            CustomTabBar(selectedTab: $selectedTab)
        }
        .navigationBarHidden(true)
    }
}
}
struct FeaturedCourseView: View {
var body: some View {
VStack(alignment: .leading, spacing: 10) {
Text("Interface Design")
.font(.caption)
.foregroundColor(.gray)
        Text("User interface for beginners")
            .font(.headline)
        
        HStack {
            Image(systemName: "star.fill")
                .foregroundColor(.yellow)
            Text("4.7 (1,242 Reviews)")
                .font(.caption)
                .foregroundColor(.gray)
        }
        
        ProgressView(value: 0.48)
            .accentColor(.purple)
        
        Text("48% Completed")
            .font(.caption)
            .foregroundColor(.gray)
    }
    .padding()
    .background(Color.white)
    .cornerRadius(15)
    .shadow(radius: 5)
    .padding(.horizontal)
}
}
struct PopularCourseView: View {
let title: String
let category: String
let instructor: String
let price: String
var body: some View {
    VStack(alignment: .leading, spacing: 10) {
        ZStack(alignment: .topTrailing) {
            Image("courseImage")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: 200, height: 120)
                .clipped()
                .cornerRadius(15)
            
            Button(action: {
                // Handle favorite action
            }) {
                Image(systemName: "heart")
                    .foregroundColor(.white)
                    .padding(8)
                    .background(Color.black.opacity(0.5))
                    .clipShape(Circle())
            }
            .padding(8)
        }
        
        Text(category)
            .font(.caption)
            .foregroundColor(.purple)
        
        Text(title)
            .font(.headline)
            .lineLimit(2)
        
        Text(instructor)
            .font(.caption)
            .foregroundColor(.gray)
        
        if !price.isEmpty {
            Text(price)
                .font(.headline)
                .foregroundColor(.blue)
        }
    }
    .frame(width: 200)
}
}
struct CustomTabBar: View {
@Binding var selectedTab: Int
var body: some View {
    HStack {
        TabBarItem(imageName: "house.fill", title: "Home", isSelected: selectedTab == 0)
            .onTapGesture { selectedTab = 0 }
        
        TabBarItem(imageName: "chart.bar.fill", title: "Statistic", isSelected: selectedTab == 1)
            .onTapGesture { selectedTab = 1 }
        
        TabBarItem(imageName: "heart.fill", title: "Favorites", isSelected: selectedTab == 2)
            .onTapGesture { selectedTab = 2 }
        
        TabBarItem(imageName: "person.fill", title: "Profile", isSelected: selectedTab == 3)
            .onTapGesture { selectedTab = 3 }
    }
    .padding()
    .background(Color.white)
    .clipShape(Capsule())
    .padding(.horizontal)
    .shadow(radius: 5)
}
}
struct TabBarItem: View {
let imageName: String
let title: String
let isSelected: Bool
var body: some View {
    VStack {
        Image(systemName: imageName)
            .foregroundColor(isSelected ? .purple : .gray)
        Text(title)
            .font(.caption)
            .foregroundColor(isSelected ? .purple : .gray)
    }
}
}
struct NotificationsView: View {
var body: some View {
Text("Notifications View")
}
}
struct DiscoverView_Previews: PreviewProvider {
static var previews: some View {
DiscoverView()
}
}