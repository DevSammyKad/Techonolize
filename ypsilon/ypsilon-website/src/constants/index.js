import Avatar1 from '../assets/images/Avatar1.png';
import Avatar2 from '../assets/images/Avatar2.png';
import Course_04 from '../assets/images/course-04.png';
import InstructorAvatar from '../assets/images/Avatar2.jpg';

export const Navlinks = [
  { href: '/', lable: 'Home' },
  { href: '/about-us', lable: 'About' },
  { href: '/events', lable: 'Events' },
  { href: '/courses', lable: 'Course' },
  { href: '/contact', lable: 'Contact' },
];

export const FeedbackData = [
  {
    Image: Avatar1,
    FullName: 'Pankaj Singh',
    Designation: 'Marketing Manager',
    FeedBack:
      'Y.A.S.H. completely changed my career trajectory! The AI-focused curriculum is practical and engaging, and the instructors are industry experts who truly care about your success. I feel confident and prepared to take on any AI-related challenge in my field. Highly recommend!',
  },
  {
    Image: Avatar2,
    FullName: 'Priyanka Deshpande',
    Designation: 'Project Manager',
    FeedBack:
      'The Y.A.S.H. program was a great way to upskill myself in the world of AI. The course material was comprehensive and well-organized, but I found the online format a bit limiting for interactive learning. However, I still gained valuable knowledge and feel more comfortable integrating AI into my work.',
  },
  {
    Image: Avatar1,
    FullName: 'Sameer Pande',
    Designation: 'Software Engineer',
    FeedBack:
      'Y.A.S.H. offers a solid foundation in AI concepts. However, I would have preferred a more in-depth focus on specific applications relevant to my industry. The program felt a bit broad at times. Overall, a good starting point for beginners in AI',
  },
  {
    Image: Avatar2,
    FullName: 'Sakshi Singhaniya',
    Designation: 'Data Analyst',
    FeedBack:
      "I'm incredibly grateful to Y.A.S.H. for helping me bridge the skill gap in AI. After completing the program, I landed a coveted position at a top tech company. Thank you for empowering me to become an irreplaceable asset in the AI age!",
  },
  {
    Image: Avatar2,
    FullName: 'Pooja Patil',
    Designation: 'Business Consultan',
    FeedBack:
      "Y.A.S.H. is a must for any professional looking to stay ahead of the curve in the AI-driven world. You won't regret investing in your future!",
  },
];

export const PopularCourseData = [
  {
    ID: '1',
    ImagePath: Course_04,
    CourseTitle: 'Instructional System Design Training Course',
    CourseOverview:
      'Ypsilon Advanced Skills Hub offers a 12-day course in Instructional System Design (ISD). Gain expertise in crafting effective instructional systems from expert trainers.',
    CourseDescription:
      'Ypsilon Advanced Skills Hub (YASH) presents a comprehensive 12-day professional training course in Instructional System Design (ISD).This course will equip participants with the knowledge and skills necessary to design effective instructional systems for various educational and training contexts. Expert trainers will guide participants through essential concepts.',
    CourseContentSchedule: '  ',
    CourseFees: '5999',
    DiscountedCourseFees: '2950/-',
    Lessons: '12',
    StudentsEnrollCount: '300',
    Timing: 'Daily Batch from 7.00 PM to 8.30 PM',
    InstructorImage: InstructorAvatar,
    Instructor: 'Dr. Anjali Jagtap',
    Experience: '14+ Years',
    Field: 'System Design',
    Language: 'English/Hindi',
    Certification: 'Cerfified Course',
    ReviewsCount: '15',
    CourseReview: {
      Participant2: 'The course was well-structured and easy to follow.',
      Participant1: 'The instructor was knowledgeable and engaging.',
    },
  },
];

export const CourseDetails = [
  [
    {
      Id: '1',
      ImagePath: Course_04,
      CourseTitle: 'Instructional System Design Training Course',
      CourseOverview:
        'Ypsilon Advanced Skills Hub offers a 12-day course in Instructional System Design (ISD). Gain expertise in crafting effective instructional systems from expert trainers.',
      CourseDescription:
        'Ypsilon Advanced Skills Hub (YASH) presents a comprehensive 12-day professional training course in Instructional System Design (ISD).This course will equip participants with the knowledge and skills necessary to design effective instructional systems for various educational and training contexts. Expert trainers will guide participants through essential concepts.',
      CourseFees: '5999',
      DiscountedCourseFees: '2950',
      Lessons: '12',
      Quizzes: '10',
      StudentsEnrollCount: '300',
      Timing: 'Daily Batch from 7.00 PM to 8.30 PM',
      StartDate: '12 March 2024',
      InstructorImage: InstructorAvatar,
      Instructor: 'Dr.Anjali Jagtap',
      Experience: '14+ Years',
      InstructorInfo:
        "25 years of experience in curriculum development, instruction design, teachers' training and skill development",
      Field: 'System Design',
      Language: 'English/Hindi',
      Certification: 'Cerfified Course',
      IsCertificateAvailable: 'Yes',
      ReviewsCount: '15',
      CourseReview: {
        Participant2: 'The course was well-structured and easy to follow.',
        Participant1: 'The instructor was knowledgeable and engaging.',
      },
      CourseContent: [
        {
          id: 1,
          Title: 'Module 1 - Instructional System: Concept, Structure',
          Content:
            'Introduction to ISD - Understanding the structure of instructional systems',
        },
        {
          id: 2,
          Title:
            "Module 2 - Curriculum Development, Instruction Plans, Bloom's Taxonomy, Educational Implications",
          Content:
            "Curriculum development process - Instructional planning - Bloom's Taxonomy and its implications",
        },
        {
          id: 3,
          Title:
            "Module 3 - Curriculum Development, Instruction Plans, Bloom's Taxonomy, Educational Implications",
          Content:
            'Curriculum development process (continued) - Instructional planning (continued) - Educational implications of ISD',
        },
        {
          id: 4,
          Title:
            'Module 4 - Evaluation Approaches: Formative, Summative, Criterion Referenced',
          Content:
            'Understanding formative evaluation - Exploring summative evaluation - Implementing criterion-referenced evaluation',
        },
        {
          id: 5,
          Title:
            'Module 5 - Evaluation Approaches: Formative, Summative, Criterion Referenced',
          Content: 'Evaluation approaches in ISD (continued)',
        },
        {
          id: 6,
          Title: 'Module 6 - Assessment tools',
          Content:
            'Types of assessment tools - Developing effective assessment strategies and Hands-on practice with assessment tools',
        },
        {
          id: 7,
          Title:
            'Module 7 - Use of AI and e-content tools for content creation',
          Content:
            'Integrating AI in content creation - Leveraging e-content tools for instructional design',
        },
        {
          id: 8,
          Title:
            'Module 8 - Use of AI and e-content tools for content creation',
          Content: 'Practical applications of AI and e-content tools',
        },
        {
          id: 9,
          Title: 'Module 9 - Review and Application',
          Content:
            'Review of key concepts and methodologies learned - Application exercises and case studies',
        },
        {
          id: 10,
          Title: 'Module 10 - Review and Application',
          Content:
            'Review of key concepts and methodologies learned (continued) - Application exercises and case studies (continued)',
        },
      ],
      CourseOutline: [
        {
          id: '1',
          Title: 'Introduction to Instructional Design',
          Lessons: [
            'What is Instructional Design',
            'ADDIE Model overview',
            'Design strategies and approaches',
          ],
        },
        {
          id: '2',
          Title: 'Learner Analysis',
          Lessons: [
            'Conducting learner analysis',
            'Understanding learner goals',
            'Creating learner personas',
          ],
        },
        {
          id: '3',
          Title: 'Writing Learning Objectives',
          Lessons: [
            "Bloom's Taxonomy",
            'Components of learning objectives',
            'Writing SMART goals',
          ],
        },
      ],
      CourseHighlights: [
        { li: '100% live virtual classes.' },
        { li: 'Experienced and trained faculty.' },
        { li: '30+ hours of live sessions.' },
        { li: '20+ hours projects.' },
        {
          li: 'Completion certificate from Ypsilon Advanced Skills Hub Accredited by N.I.S.T. and ICWA in India.',
        },
      ],
      "What's In It for You?": [
        {
          list: 'Implement sound educational techniques to improve overall planning and teaching of any kind of content.',
        },
        {
          list: 'Understand and analyse pedagogical aspects of instructional designing.',
        },
        {
          list: 'Assess learning outcomes of instruction.',
        },
        {
          list: 'Identify and prioritize high demand areas of training.',
        },
        {
          list: 'Lead your team to optimize educational content with suitable methodologies and technology.',
        },
      ],

      'Who Is This Course For?': [
        {
          list: 'Teachers, Trainers, and E-Content Developers: Enhance your skills and knowledge in delivering engaging and impactful learning experiences.',
        },
        {
          list: 'Course Creators: Gain the necessary expertise to create compelling and effective courses across various domains.',
        },
        {
          list: 'Professionals in Specific Fields: Specialize in your chosen fields, such as:',
        },
        {
          list: 'Information Technology',
        },
        {
          list: 'School Subjects',
        },
        {
          list: 'IIT/NEET Coaching',
        },
        {
          list: 'Competitive Examinations Coaching',
        },
        {
          list: 'Higher Education Courses',
        },
        {
          list: 'Specific Training Purposes',
        },
      ],
    },
  ],
];
