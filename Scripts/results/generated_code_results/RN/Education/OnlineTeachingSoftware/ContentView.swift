import SwiftUI

struct ContentView: View {
    @State private var selectedTab = 0
    
    var body: some View {
        NavigationView {
            TabView(selection: $selectedTab) {
                DiscoverView()
                    .tabItem {
                        Image(systemName: "house")
                        Text("Home")
                    }
                    .tag(0)
                
                StatisticsView()
                    .tabItem {
                        Image(systemName: "chart.bar")
                        Text("Statistic")
                    }
                    .tag(1)
                
                FavoritesView()
                    .tabItem {
                        Image(systemName: "heart")
                        Text("Favorites")
                    }
                    .tag(2)
                
                ProfileView()
                    .tabItem {
                        Image(systemName: "person")
                        Text("Profile")
                    }
                    .tag(3)
            }
            .accentColor(.purple)
            .navigationBarHidden(true)
        }
    }
}

struct DiscoverView: View {
    var body: some View {
        VStack {
            HStack {
                Text("Discover")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                Spacer()
                NavigationLink(destination: NotificationsView()) {
                    Image(systemName: "bell")
                        .foregroundColor(.black)
                }
            }
            .padding()
            
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    Text("Study what you want anytime anywhere")
                        .font(.title2)
                        .fontWeight(.semibold)
                    
                    FeaturedCourseView()
                    
                    Text("Popular Courses")
                        .font(.headline)
                    
                    ForEach(0..<2) { _ in
                        NavigationLink(destination: CourseDetailView()) {
                            PopularCourseView()
                        }
                    }
                }
                .padding()
            }
        }
    }
}

struct FeaturedCourseView: View {
    var body: some View {
        VStack(alignment: .leading) {
            Text("Interface Design")
                .font(.subheadline)
                .foregroundColor(.secondary)
            Text("User interface for beginners")
                .font(.headline)
            HStack {
                Image(systemName: "star.fill")
                    .foregroundColor(.yellow)
                Text("4.7 (1,242 Reviews)")
                    .font(.caption)
            }
            ProgressView(value: 0.48)
        }
        .padding()
        .background(Color.gray.opacity(0.1))
        .cornerRadius(10)
    }
}

struct PopularCourseView: View {
    var body: some View {
        HStack {
            RoundedRectangle(cornerRadius: 10)
                .fill(Color.gray.opacity(0.3))
                .frame(width: 100, height: 100)
            
            VStack(alignment: .leading) {
                Text("Expert Wireframing for Mobile Design")
                    .font(.headline)
                Text("Jerremy Mamika")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                Text("$48")
                    .font(.headline)
                    .foregroundColor(.blue)
            }
        }
    }
}

struct CourseDetailView: View {
    var body: some View {
        Text("Course Detail View")
    }
}

struct NotificationsView: View {
    var body: some View {
        Text("Notifications View")
    }
}

struct FavoritesView: View {
    var body: some View {
        VStack {
            HStack {
                Text("Favorites")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                Spacer()
                NavigationLink(destination: NotificationsView()) {
                    Image(systemName: "bell")
                        .foregroundColor(.black)
                }
            }
            .padding()
            
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    ForEach(0..<2) { _ in
                        NavigationLink(destination: CourseDetailView()) {
                            PopularCourseView()
                        }
                    }
                }
                .padding()
            }
        }
    }
}

struct StatisticsView: View {
    var body: some View {
        Text("Statistics View")
    }
}

struct ProfileView: View {
    var body: some View {
        Text("Profile View")
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}