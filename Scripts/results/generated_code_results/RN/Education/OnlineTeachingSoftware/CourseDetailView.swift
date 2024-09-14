import SwiftUI
struct CourseDetailView: View {
@Environment(.presentationMode) var presentationMode
@State private var isFavorite = false
var body: some View {
    GeometryReader { geometry in
        ScrollView {
            VStack(spacing: 0) {
                ZStack {
                    Image("courseImage")
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(height: geometry.size.height * 0.3)
                        .clipped()
                        .cornerRadius(16)
                    
                    VStack {
                        HStack {
                            Text("UI Design")
                                .font(.caption)
                                .padding(.horizontal, 8)
                                .padding(.vertical, 4)
                                .background(Color.white.opacity(0.8))
                                .cornerRadius(8)
                            
                            Spacer()
                            
                            Button(action: {
                                isFavorite.toggle()
                            }) {
                                Image(systemName: isFavorite ? "heart.fill" : "heart")
                                    .foregroundColor(isFavorite ? .red : .white)
                                    .padding(8)
                                    .background(Color.white.opacity(0.8))
                                    .clipShape(Circle())
                            }
                        }
                        .padding()
                        
                        Spacer()
                    }
                }
                .frame(height: geometry.size.height * 0.3)
                
                VStack(alignment: .leading, spacing: 16) {
                    Text("Expert Wireframing for Webiste Design theme food")
                        .font(.title2)
                        .fontWeight(.bold)
                    
                    HStack {
                        Image("profileImage")
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                            .frame(width: 40, height: 40)
                            .clipShape(Circle())
                        
                        VStack(alignment: .leading) {
                            Text("Jerremy Mamika")
                                .font(.subheadline)
                                .fontWeight(.medium)
                            
                            Text("4.6")
                                .font(.caption)
                                .padding(.horizontal, 8)
                                .padding(.vertical, 4)
                                .background(Color.yellow.opacity(0.2))
                                .cornerRadius(8)
                        }
                    }
                    
                    Text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,")
                        .font(.body)
                        .foregroundColor(.secondary)
                    
                    HStack {
                        StatView(value: "30+", label: "Lessons")
                        Spacer()
                        StatView(value: "4.5", label: "Rating")
                        Spacer()
                        StatView(value: "1.4K", label: "Student")
                    }
                    
                    HStack {
                        VStack(alignment: .leading) {
                            Text("Price")
                                .font(.caption)
                                .foregroundColor(.secondary)
                            Text("$129")
                                .font(.title3)
                                .fontWeight(.bold)
                        }
                        
                        Spacer()
                        
                        Button(action: {
                            // Handle buy action
                        }) {
                            Text("Buy Now")
                                .fontWeight(.semibold)
                                .foregroundColor(.white)
                                .frame(width: 200, height: 50)
                                .background(Color.purple)
                                .cornerRadius(25)
                        }
                    }
                }
                .padding()
            }
        }
        .edgesIgnoringSafeArea(.top)
        .navigationBarItems(
            leading: Button(action: {
                presentationMode.wrappedValue.dismiss()
            }) {
                Image(systemName: "chevron.left")
                    .foregroundColor(.black)
            },
            trailing: Button(action: {
                // Handle menu action
            }) {
                Image(systemName: "ellipsis")
                    .foregroundColor(.black)
            }
        )
        .navigationBarBackButtonHidden(true)
    }
}
}
struct StatView: View {
let value: String
var body: some View {
    VStack {
        Text(value)
            .font(.headline)
            .fontWeight(.bold)
        Text(label)
            .font(.caption)
            .foregroundColor(.secondary)
    }
}
}
struct CourseDetailView_Previews: PreviewProvider {
static var previews: some View {
NavigationView {
CourseDetailView()
}
}
}