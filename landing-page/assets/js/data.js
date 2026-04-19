// Sample Club Data
const clubsData = [
    // Academic Clubs
    {
        id: 1,
        name: 'ULIS Coding Club',
        category: 'academic',
        status: true,
        shortDescription: 'Câu lạc bộ lập trình với các workshop về Web, Mobile, AI.',
        fullDescription: 'ULIS Coding Club là nơi quy tụ những sinh viên yêu thích lập trình. Chúng tôi tổ chức các buổi workshop định kỳ về Web Development, Mobile Development, AI/Machine Learning và các công nghệ mới nhất. Cộng đồng chúng tôi không chỉ là nơi học code mà còn là nơi networking với các engineer từ các công ty lớn.',
        president: 'Nguyễn Văn A',
        vicePresident: 'Trần Thị B',
        schedule: 'Thứ 5 hàng tuần, 18:30-20:00 tại nhà D',
        activities: '• Weekly coding workshops\n• Hackathon events\n• Project collaboration\n• Guest talks from industry\n• Code review sessions',
        requirements: 'Đam mê lập trình, sẵn sàng học hỏi',
        benefits: 'Cơ hội thực tập, mentor từ senior developers, networking',
        formLink: 'https://forms.gle/example1',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1633356713697-4f48e1c01890?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
        ],
        rating: 4.8,
        members: 150,
        years: 5
    },
    {
        id: 2,
        name: 'ULIS English Club',
        category: 'academic',
        status: true,
        shortDescription: 'Phát triển kỹ năng tiếng Anh thông qua các hoạt động tương tác.',
        fullDescription: 'English Club là nơi giúp sinh viên cải thiện kỹ năng tiếng Anh một cách tự nhiên và vui vẻ. Chúng tôi tổ chức các buổi giao lưu nói tiếng Anh, xem phim tiếng Anh, thi tranh luận và hội thảo về kỹ năng presentation. Tất cả các hoạt động đều được thiết kế để giúp bạn vượt qua các kỳ thi IELTS, TOEIC.',
        president: 'Phạm Thị C',
        vicePresident: 'Lê Văn D',
        schedule: 'Thứ 6 hàng tuần, 16:00-17:30 tại nhà A',
        activities: '• English speaking practice\n• Movie discussion\n• Debate competition\n• Presentation skills\n• IELTS/TOEIC preparation',
        requirements: 'Muốn cải thiện tiếng Anh, không cần trình độ cao',
        benefits: 'Đạt IELTS/TOEIC tốt hơn, tự tin giao tiếp',
        formLink: 'https://forms.gle/example2',
        image: 'https://images.unsplash.com/photo-1543269865-cbdf26861551?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1543269865-cbdf26861551?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1543269865-cbdf26861551?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&h=400&fit=crop'
        ],
        rating: 4.6,
        members: 200,
        years: 4
    },
    {
        id: 3,
        name: 'ACE Club - Mathematics',
        category: 'academic',
        status: false,
        shortDescription: 'Chuyên sâu toán học với các lớp học cao cấp.',
        fullDescription: 'ACE Club tập trung vào nâng cao kỹ năng toán học ở mức độ chuyên sâu. Chúng tôi cung cấp các bài giảng nâng cao, hướng dẫn giải bài tập khó, chuẩn bị cho các kỳ thi và luận văn. Cộng đồng các sinh viên yêu thích toán học quy tụ tại đây để trao đổi kiến thức.',
        president: 'Hoàng Văn E',
        vicePresident: 'Đỗ Thị F',
        schedule: 'Thứ 4 hàng tuần, 18:00-19:30 tại nhà C',
        activities: '• Advanced math lessons\n• Problem solving\n• Math competitions\n• Thesis workshops\n• Study groups',
        requirements: 'Tối thiểu toán lớp 11, yêu thích toán',
        benefits: 'Chuẩn bị cho kỳ thi, nâng cao kỹ năng',
        formLink: 'https://forms.gle/example3',
        image: 'https://images.unsplash.com/photo-1599941176672-b0b8dbf2edef?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1599941176672-b0b8dbf2edef?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1599941176672-b0b8dbf2edef?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
        ],
        rating: 4.7,
        members: 80,
        years: 3
    },

    // Skill Clubs
    {
        id: 4,
        name: 'Leadership & Communication',
        category: 'skill',
        status: true,
        shortDescription: 'Phát triển kỹ năng lãnh đạo và giao tiếp hiệu quả.',
        fullDescription: 'Club này giúp bạn phát triển kỹ năng lãnh đạo, thuyết trình công khai và giao tiếp hiệu quả. Thông qua các buổi workshop, roleplay và case study, bạn sẽ học cách quản lý team, xử lý conflict và thuyết phục người khác.',
        president: 'Ngô Văn G',
        vicePresident: 'Bùi Thị H',
        schedule: 'Thứ 2 hàng tuần, 18:00-19:30 tại nhà B',
        activities: '• Leadership training\n• Public speaking\n• Team building\n• Case study discussion\n• Mock interviews',
        requirements: 'Muốn phát triển bản thân, sẵn sàng tham gia',
        benefits: 'CV sáng, cơ hội trở thành leader, networking',
        formLink: 'https://forms.gle/example4',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
        ],
        rating: 4.5,
        members: 120,
        years: 2
    },
    {
        id: 5,
        name: 'Entrepreneurship Club',
        category: 'skill',
        status: true,
        shortDescription: 'Hướng dẫn khởi nghiệp từ ý tưởng đến triển khai.',
        fullDescription: 'Entrepreneurship Club là nơi giúp bạn chuyển ý tưởng thành sản phẩm thực tế. Chúng tôi tổ chức các buổi pitch competition, workshop về business model, và kết nối bạn với các mentor, investor và founder.',
        president: 'Vũ Văn I',
        vicePresident: 'Đinh Thị J',
        schedule: 'Thứ 6 hàng tuần, 17:00-18:30 tại nhà E',
        activities: '• Startup pitch\n• Business model workshop\n• Mentor mentoring\n• Pitch competition\n• Networking event',
        requirements: 'Có ý tưởng kinh doanh hoặc muốn học',
        benefits: 'Funding info, mentor connections, pitch experience',
        formLink: 'https://forms.gle/example5',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
        ],
        rating: 4.9,
        members: 95,
        years: 2
    },

    // Art Clubs
    {
        id: 6,
        name: 'AC4U - Art Club',
        category: 'art',
        status: true,
        shortDescription: 'Câu lạc bộ nghệ thuật cho các bạn yêu thích vẽ, sáng tạo.',
        fullDescription: 'AC4U là nơi quy tụ các tín đồ của hội họa. Từ vẽ tranh dầu, acrylic, đến vẽ digital, chúng tôi có các khóa học cho mọi trình độ. Hàng năm chúng tôi tổ chức triển lãm để trưng bày tác phẩm của các thành viên.',
        president: 'Mạc Văn K',
        vicePresident: 'Giang Thị L',
        schedule: 'Thứ 3, 5 hàng tuần, 18:00-20:00 tại studio',
        activities: '• Painting workshop\n• Drawing class\n• Art exhibition\n• Collaboration project\n• Sketch session',
        requirements: 'Đam mê nghệ thuật, không cần kỹ năng sơ bộ',
        benefits: 'Học kỹ thuật vẽ, trưng bày tác phẩm',
        formLink: 'https://forms.gle/example6',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1582353657197-7bea0d0b394f?w=600&h=400&fit=crop'
        ],
        rating: 4.8,
        members: 110,
        years: 6
    },
    {
        id: 7,
        name: 'Music Club',
        category: 'art',
        status: true,
        shortDescription: 'Câu lạc bộ nhạc - nơi hợp xướng, học nhạc cụ.',
        fullDescription: 'Music Club là nơi tuyệt vời để học nhạc, hợp xướng và biểu diễn. Chúng tôi có các giáo viên hướng dẫn chuyên nghiệp, hỗ trợ học các nhạc cụ khác nhau từ guitar, piano đến violin.',
        president: 'Trương Văn M',
        vicePresident: 'Lý Thị N',
        schedule: 'Thứ 4 hàng tuần, 18:30-20:00 tại nhà âm nhạc',
        activities: '• Singing lessons\n• Instrument training\n• Choir practice\n• Concert performance\n• Music theory',
        requirements: 'Yêu thích nhạc, không cần kỹ năng trước',
        benefits: 'Học nhạc miễn phí, biểu diễn, kết bạn',
        formLink: 'https://forms.gle/example7',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop'
        ],
        rating: 4.7,
        members: 85,
        years: 7
    },
    {
        id: 8,
        name: 'Photography Club',
        category: 'art',
        status: false,
        shortDescription: 'Khám phá thế giới nhiếp ảnh qua các bài học thực hành.',
        fullDescription: 'Photography Club hướng dẫn bạn từ những kiến thức cơ bản về máy ảnh đến kỹ thuật chỉnh sửa hình ảnh chuyên nghiệp. Chúng tôi tổ chức các buổi thực địa chụp ảnh và triển lãm để trưng bày tác phẩm của các thành viên.',
        president: 'Quý Văn O',
        vicePresident: 'Hiền Thị P',
        schedule: 'Thứ 7 hàng tuần, 15:00-17:00',
        activities: '• Photography basics\n• Photo editing\n• Field trip\n• Exhibition\n• Camera technique',
        requirements: 'Có máy ảnh hoặc smartphone, đam mê',
        benefits: 'Kỹ năng nhiếp ảnh chuyên nghiệp, portfolio',
        formLink: 'https://forms.gle/example8',
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop'
        ],
        rating: 4.6,
        members: 60,
        years: 3
    },

    // Sport Clubs
    {
        id: 9,
        name: 'Badminton Club',
        category: 'sport',
        status: true,
        shortDescription: 'Câu lạc bộ cầu lông - rèn luyện sức khỏe, giao lưu.',
        fullDescription: 'Badminton Club là nơi rèn luyện sức khỏe và kỹ năng cầu lông. Chúng tôi tổ chức các buổi tập luyện thường xuyên, giải đấu và giao lưu với các CLB khác.',
        president: 'Thạch Văn Q',
        vicePresident: 'Nhi Thị R',
        schedule: 'Thứ 3, 6 hàng tuần, 17:00-18:30 tại sân cầu lông',
        activities: '• Training session\n• Friendly match\n• Tournament\n• Team building\n• Coaching',
        requirements: 'Yêu thích cầu lông, sẵn sàng tập luyện',
        benefits: 'Rèn luyện sức khỏe, kỹ năng cầu lông, tình bạn',
        formLink: 'https://forms.gle/example9',
        image: 'https://images.unsplash.com/photo-1626895961352-7f15a89acf08?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1626895961352-7f15a89acf08?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1626895961352-7f15a89acf08?w=600&h=400&fit=crop'
        ],
        rating: 4.8,
        members: 140,
        years: 8
    },
    {
        id: 10,
        name: 'Football Club',
        category: 'sport',
        status: true,
        shortDescription: 'Câu lạc bộ bóng đá ULIS - cộng đồng cầu thủ mê bóng đá.',
        fullDescription: 'Football Club là nơi quy tụ những đam mê bóng đá. Chúng tôi có các buổi tập luyện định kỳ, tham gia các giải đấu, giao lưu với các trường khác và tổ chức các sự kiện về bóng đá.',
        president: 'Tiến Văn S',
        vicePresident: 'Anh Thị T',
        schedule: 'Thứ 2, 5 hàng tuần, 17:30-19:00 tại sân bóng',
        activities: '• Training\n• Match practice\n• Tournament\n• Social event\n• Skill workshop',
        requirements: 'Yêu thích bóng đá, thể lực tốt',
        benefits: 'Kỹ năng bóng đá, sức khỏe, cơ hội thi đấu',
        formLink: 'https://forms.gle/example10',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517836357463-d25ddf470e0d?w=600&h=400&fit=crop'
        ],
        rating: 4.9,
        members: 180,
        years: 10
    },
    {
        id: 11,
        name: 'Yoga & Wellness',
        category: 'sport',
        status: true,
        shortDescription: 'Câu lạc bộ yoga - luyện tập yoga, thiền, sức khỏe tâm thần.',
        fullDescription: 'Yoga & Wellness Club tập trung vào sức khỏe toàn diện - cơ thể, tâm trí và tinh thần. Chúng tôi cung cấp các lớp yoga từ cơ bản đến nâng cao, thiền định và các seminar về sức khỏe.',
        president: 'Hùng Văn U',
        vicePresident: 'Lan Thị V',
        schedule: 'Thứ 2, 4, 6 hàng tuần, 06:30-07:30 tại sân vụ trường',
        activities: '• Yoga practice\n• Meditation\n• Health seminar\n• Wellness workshop\n• Breathing exercise',
        requirements: 'Muốn cải thiện sức khỏe, không cần kinh nghiệm',
        benefits: 'Yoga, thiền định, sức khỏe tâm thần',
        formLink: 'https://forms.gle/example11',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop'
        ],
        rating: 4.7,
        members: 75,
        years: 3
    },

    // Volunteer Clubs
    {
        id: 12,
        name: 'Community Service Club',
        category: 'volunteer',
        status: true,
        shortDescription: 'Tình nguyện phục vụ cộng đồng, giáo dục trẻ em.',
        fullDescription: 'Community Service Club là nơi những sinh viên tâm huyết tình nguyện quy tụ. Chúng tôi giảng dạy cho trẻ em vùng sâu, tổ chức các hoạt động từ thiện và góp phần cải thiện cuộc sống cộng đồng.',
        president: 'Khoa Văn W',
        vicePresident: 'Nước Thị X',
        schedule: 'Thứ 7 hàng tuần, 08:00-11:00',
        activities: '• Teaching children\n• Community cleaning\n• Charity event\n• Social project\n• Care visit',
        requirements: 'Tâm huyết tình nguyện, sẵn sàng giúp đỡ',
        benefits: 'Kinh nghiệm tình nguyện, cải thiện xã hội',
        formLink: 'https://forms.gle/example12',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop'
        ],
        rating: 4.8,
        members: 125,
        years: 9
    },
    {
        id: 13,
        name: 'Environmental Club',
        category: 'volunteer',
        status: true,
        shortDescription: 'Câu lạc bộ môi trường - bảo vệ thiên nhiên, phát triển bền vững.',
        fullDescription: 'Environmental Club cam kết bảo vệ môi trường và phát triển bền vững. Chúng tôi tổ chức các chiến dịch vệ sinh môi trường, trồng cây xanh, giảm chất thải và nâng cao ý thức cộng đồng.',
        president: 'Bội Văn Y',
        vicePresident: 'Minh Thị Z',
        schedule: 'Thứ 3 hàng tuần, 18:00-19:30 tại nhà B',
        activities: '• Environmental campaign\n• Tree planting\n• Waste reduction\n• Green project\n• Awareness seminar',
        requirements: 'Quan tâm môi trường, sẵn sàng hành động',
        benefits: 'Đóng góp bảo vệ môi trường, networking xanh',
        formLink: 'https://forms.gle/example13',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
        backgroundImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=400&fit=crop',
        galleryImages: [
            'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop'
        ],
        rating: 4.6,
        members: 100,
        years: 4
    },
];

// Sample Reviews
const reviewsData = [
    {
        id: 1,
        author: 'Ẩn danh - Cựu thành viên Coding Club',
        rating: 5,
        text: 'Tham gia Coding Club giúp tôi học được rất nhiều công nghệ mới. Các anh chị trong CLB rất tâm huyết và giúp đỡ. Sau khi ra trường, tôi đã được thực tập tại một công ty lớn nhờ kinh nghiệm ở CLB này.'
    },
    {
        id: 2,
        author: 'Ẩn danh - Cựu thành viên English Club',
        rating: 4,
        text: 'Môi trường nói tiếng Anh rất tốt để cải thiện kỹ năng. Bạn bè cũng thân thiện và hỗ trợ lẫn nhau. Nhờ CLB mà IELTS của tôi tăng lên 1.5 band.'
    },
    {
        id: 3,
        author: 'Ẩn danh - Hiện tại ở Football Club',
        rating: 5,
        text: 'Không chỉ về bóng đá mà còn về tình bạn, kỷ luật. Giờ tôi có thêm nhiều người bạn từ các ngành khác nhau. Trải nghiệm thi đấu ở các giải đấu rất quý báu.'
    },
    {
        id: 4,
        author: 'Ẩn danh - Cựu thành viên Art Club',
        rating: 5,
        text: 'Art Club giúp tôi phát triển tài năng vẽ. Cộng đồng ở đây rất supportive và creative. Tác phẩm của tôi được trưng bày ở triển lãm lớn.'
    },
    {
        id: 5,
        author: 'Ẩn danh - Hiện tại ở Leadership Club',
        rating: 4,
        text: 'Học được rất nhiều về lãnh đạo và giao tiếp. Dù hơi căng vì workshop nhiều nhưng rất bổ ích. Bây giờ tôi tự tin hơn khi nói chuyện trước công chúng.'
    },
    {
        id: 6,
        author: 'Ẩn danh - Cựu thành viên Community Service',
        rating: 5,
        text: 'Tham gia tình nguyện ở CLB giúp tôi có ý nghĩa trong cuộc sống. Thấy mình có thể giúp được người khác là tuyệt vời. Đây là một trong những trải nghiệm quý giá nhất ở đại học.'
    },
    {
        id: 7,
        author: 'Ẩn danh - Hiện tại ở Music Club',
        rating: 4,
        text: 'Học nhạc với CLB rất vui. Mặc dù các bài hát đôi khi khó nhưng mọi người giúp nhau hoàn thành. Biểu diễn ở hòa nhạc năm cuối là điểm nhấn của năm.'
    },
    {
        id: 8,
        author: 'Ẩn danh - Cựu thành viên Entrepreneurship',
        rating: 5,
        text: 'Cơ hội pitch startup của tôi và nhận feedback từ các mentor. CLB này thật sự giúp tôi khởi nghiệp. Bây giờ startup của tôi đã lớn mạnh.'
    },
    {
        id: 9,
        author: 'Ẩn danh - Hiện tại ở Yoga & Wellness',
        rating: 4,
        text: 'Yoga ở sáng sớm giúp tôi bắt đầu ngày mới tươi tả. Không chỉ về yoga mà còn cả sức khỏe tâm thần. Tôi cảm thấy bình yên và cân bằng hơn.'
    },
];

// Tips & Knowledge Base
const tipsData = [
    {
        id: 1,
        title: '📌 Bí kíp vượt qua vòng phỏng vấn CLB',
        content: `• Hãy thật tự nhiên, không cần nạo nước quá
• Chuẩn bị câu hỏi về bản thân bạn, sở thích của bạn
• Đặt câu hỏi ngược lại để hiểu rõ CLB
• Mặc quần áo gọn gàng, tươi sáng
• Đến sớm 10 phút trước cuộc phỏng vấn`
    },
    {
        id: 2,
        title: '⏰ Cân bằng thời gian giữa học tập và CLB',
        content: `• Sắp xếp thời gian hợp lý cho cả học tập lẫn CLB
• Chọn CLB hợp với thời biểu của bạn
• Nếu bận học, thể báo cho CLB trước
• Ưu tiên học tập, CLB là để giải tỏa stress
• Tìm bạn cùng CLB rồi học cùng nhau`
    },
    {
        id: 3,
        title: '🔑 Cách chọn CLB phù hợp với bạn',
        content: `• Suy nghĩ về sở thích thực sự của bạn
• Tham khảo ý kiến của những người bạn cũ
• Nếu có thể, hãy tham dự sự kiện khới động trước
• Không nên tham gia quá nhiều CLB lúc đầu
• Thử 2-3 tuần rồi quyết định tiếp tục hay không`
    },
    {
        id: 4,
        title: '🌟 Làm sao để trở thành thành viên tích cực',
        content: `• Tham dự các hoạt động đều đặn
• Tình nguyện giúp đỡ trong các sự kiện
• Tương tác với các thành viên khác
• Đóng góp ý kiến xây dựng
• Hỗ trợ các thành viên mới, kém kinh nghiệm`
    },
    {
        id: 5,
        title: '💡 Sâu sắc hơn: Từ thành viên đến leader',
        content: `• Thể hiện trách nhiệm cao trong công việc được giao
• Tích cực trong các hoạt động, sự kiện
• Xây dựng mối quan hệ tốt với các thành viên
• Đề xuất ý tưởng mới, sáng tạo
• Chuẩn bị sẵn cho những vai trò lãnh đạo nếu có cơ hội`
    },
    {
        id: 6,
        title: '🤝 Cách mở rộng mạng lưới (Networking)',
        content: `• Tham gia các sự kiện cross-club
• Kết bạn với người từ các CLB khác
• Tham gia workshop, seminar ngoài CLB
• Giữ liên lạc với các cộng sự sau khi rời CLB
• Sử dụng LinkedIn để duy trì kết nối`
    },
];
