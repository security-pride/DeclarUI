import SwiftUI
struct StatisticsView: View {
@State private var selectedTimeFrame = "Weekly"
@State private var selectedTab = 1
var body: some View {
    NavigationView {
        VStack(spacing: 0) {
            // Header
            HStack {
                Text("Statistic")
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
            
            ScrollView {
                VStack(spacing: 20) {
                    // Learning Progress
                    VStack(alignment: .leading, spacing: 10) {
                        HStack {
                            Text("Learning Progress")
                                .font(.headline)
                            Spacer()
                            Picker("Time Frame", selection: $selectedTimeFrame) {
                                Text("Weekly").tag("Weekly")
                                Text("Monthly").tag("Monthly")
                            }
                            .pickerStyle(MenuPickerStyle())
                        }
                        
                        LearningProgressChart()
                    }
                    .padding()
                    .background(Color.white)
                    .cornerRadius(15)
                    .shadow(radius: 5)
                    
                    // Course Progress
                    VStack(alignment: .leading, spacing: 15) {
                        Text("Course Progress (4)")
                            .font(.headline)
                        
                        CourseProgressCard(
                            category: "Programing",
                            title: "Bootstrapping Fundamental Principles",
                            rating: 4.7,
                            reviewCount: 1242,
                            progress: 0.74,
                            image: "codingImage"
                        )
                        
                        CourseProgressCard(
                            category: "Interface Design",
                            title: "User interface for beginners",
                            rating: nil,
                            reviewCount: nil,
                            progress: nil,
                            image: "uiDesignImage"
                        )
                    }
                    .padding()
                }
                .padding(.horizontal)
            }
            
            CustomTabBar(selectedTab: $selectedTab)
        }
        .navigationBarHidden(true)
    }
}
}
struct LearningProgressChart: View {
let data: [CGFloat] = [6, 8, 6, 7, 3, 5, 7]
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var body: some View {
    VStack {
        HStack(alignment: .bottom, spacing: 12) {
            ForEach(0..<7) { index in
                VStack {
                    ZStack(alignment: .bottom) {
                        Rectangle()
                            .fill(Color.gray.opacity(0.2))
                            .frame(width: 30, height: 100)
                        
                        Rectangle()
                            .fill(Color.purple)
                            .frame(width: 30, height: data[index] * 10)
                    }
                    Text(days[index])
                        .font(.caption)
                        .foregroundColor(.gray)
                }
            }
        }
        .frame(height: 120)
        
        Text("3 Class")
            .font(.caption)
            .padding(5)
            .background(Color.black)
            .foregroundColor(.white)
            .cornerRadius(5)
            .offset(x: -30, y: -60)
    }
}
}
struct CourseProgressCard: View {
let category: String
let title: String
let rating: Double?
let reviewCount: Int?
let progress: Double?
let image: String
var body: some View {
    HStack(spacing: 15) {
        VStack(alignment: .leading, spacing: 5) {
            Text(category)
                .font(.caption)
                .foregroundColor(.gray)
            Text(title)
                .font(.headline)
                .lineLimit(2)
            if let rating = rating, let reviewCount = reviewCount {
                HStack {
                    Image(systemName: "star.fill")
                        .foregroundColor(.yellow)
                    Text("\(rating, specifier: "%.1f") (\(reviewCount) Reviews)")
                        .font(.caption)
                        .foregroundColor(.gray)
                }
            }
            if let progress = progress {
                ProgressView(value: progress)
                    .accentColor(.purple)
                Text("\(Int(progress * 100))%")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
        }
        
        Spacer()
        
        Image(image)
            .resizable()
            .aspectRatio(contentMode: .fill)
            .frame(width: 80, height: 80)
            .cornerRadius(10)
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
        TabBarItem(imageName: "chart.bar.fill", title: "Statistic", isSelected: selectedTab == 1)
            .onTapGesture { selectedTab = 1 }
        TabBarItem(imageName: "heart", title: "Favorites", isSelected: selectedTab == 2)
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
struct StatisticsView_Previews: PreviewProvider {
static var previews: some View {
StatisticsView()
}
}