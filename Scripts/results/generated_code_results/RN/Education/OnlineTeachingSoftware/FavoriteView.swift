import SwiftUI
struct FavoritesView: View {
@State private var searchText = ""
@State private var selectedCategory = "All Course"
@State private var selectedTab = 2
let categories = ["All Course", "UX Design", "UI Design", "3D Anima"]

var body: some View {
    NavigationView {
        VStack(spacing: 0) {
            // Header
            HStack {
                Spacer()
                Text("Favorite")
                    .font(.title2)
                    .fontWeight(.bold)
                Spacer()
                NavigationLink(destination: NotificationsView()) {
                    Image(systemName: "bell")
                        .foregroundColor(.black)
                        .overlay(
                            Circle()
                                .fill(Color.red)
                                .frame(width: 8, height: 8)
                                .offset(x: 8, y: -8),
                            alignment: .topTrailing
                        )
                }
            }
            .padding()
            
            // Search Bar
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(.gray)
                TextField("Search...", text: $searchText)
                Button(action: {
                    // Filter action
                }) {
                    Image(systemName: "slider.horizontal.3")
                        .foregroundColor(.black)
                }
            }
            .padding()
            .background(Color.gray.opacity(0.1))
            .cornerRadius(10)
            .padding(.horizontal)
            
            // Category Tabs
            ScrollView(.horizontal, showsIndicators: false) {
                HStack {
                    ForEach(categories, id: \.self) { category in
                        CategoryButton(title: category, isSelected: selectedCategory == category) {
                            selectedCategory = category
                        }
                    }
                }
                .padding(.horizontal)
            }
            
            // Favorite Courses
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    FavoriteCourseSection(date: "May 12, 2023")
                    FavoriteCourseSection(date: "May 08, 2023")
                }
                .padding()
            }
            
            Spacer()
            
            // Bottom Navigation
            CustomTabBar(selectedTab: $selectedTab)
        }
        .navigationBarHidden(true)
    }
}
}
struct CategoryButton: View {
let title: String
let isSelected: Bool
let action: () -> Void
var body: some View {
    Button(action: action) {
        Text(title)
            .padding(.horizontal, 16)
            .padding(.vertical, 8)
            .background(isSelected ? Color.purple : Color.gray.opacity(0.1))
            .foregroundColor(isSelected ? .white : .black)
            .cornerRadius(20)
    }
}
}
struct FavoriteCourseSection: View {
let date: String
var body: some View {
    VStack(alignment: .leading, spacing: 10) {
        HStack {
            Text(date)
                .font(.headline)
            Spacer()
            Button("See All") {
                // Handle see all action
            }
            .foregroundColor(.blue)
        }
        
        NavigationLink(destination: CourseDetailView()) {
            FavoriteCourseCard(
                title: "Expert Wireframing for Mobile Design",
                category: "Graphic Design",
                instructor: "Jerremy Mamika",
                price: "$48"
            )
        }
        
        if date == "May 12, 2023" {
            NavigationLink(destination: CourseDetailView()) {
                FavoriteCourseCard(
                    title: "Bootstrapping Principles",
                    category: "Development",
                    instructor: "Alexander Be",
                    price: ""
                )
            }
        }
    }
}
}
struct FavoriteCourseCard: View {
let title: String
let category: String
let instructor: String
let price: String
var body: some View {
    HStack(spacing: 16) {
        Image("courseImage")
            .resizable()
            .aspectRatio(contentMode: .fill)
            .frame(width: 100, height: 100)
            .cornerRadius(10)
            .overlay(
                Button(action: {
                    // Toggle favorite
                }) {
                    Image(systemName: "heart.fill")
                        .foregroundColor(.red)
                        .padding(8)
                        .background(Color.white.opacity(0.8))
                        .clipShape(Circle())
                }
                .padding(8),
                alignment: .topTrailing
            )
        
        VStack(alignment: .leading, spacing: 4) {
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
    }
    .padding()
    .background(Color.white)
    .cornerRadius(15)
    .shadow(radius: 5)
}
}
struct CustomTabBar: View {
@Binding var selectedTab: Int
var body: some View {
    HStack {
        TabBarItem(imageName: "house", title: "Home", isSelected: selectedTab == 0)
            .onTapGesture { selectedTab = 0 }
        TabBarItem(imageName: "chart.bar", title: "Statistic", isSelected: selectedTab == 1)
            .onTapGesture { selectedTab = 1 }
        TabBarItem(imageName: "heart.fill", title: "Favorites", isSelected: selectedTab == 2)
            .onTapGesture { selectedTab = 2 }
        TabBarItem(imageName: "person", title: "Profile", isSelected: selectedTab == 3)
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
struct CourseDetailView: View {
var body: some View {
Text("Course Detail View")
}
}
struct FavoritesView_Previews: PreviewProvider {
static var previews: some View {
FavoritesView()
}
}