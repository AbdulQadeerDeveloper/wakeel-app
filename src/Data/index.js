import { AiFillWechat } from "react-icons/ai"
import { GrStatusGood, GrSecure } from "react-icons/gr"
import { ImUserTie } from "react-icons/im"
import { RiAccountCircleFill } from "react-icons/ri"
import { BiSupport } from "react-icons/bi"
import { MdPayment, MdQueryStats } from "react-icons/md"
import { PiChatsCircleBold } from 'react-icons/pi'
import { FaUserTie } from 'react-icons/fa'
import { GiPayMoney } from 'react-icons/gi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

import { Emoji, messageImage, imageTwo, chat, UserProfile, WakeelList, Shedule, Shedule2 } from "../Images"


const SecondaryNavbar = {
    line: 'Download the latest version of ',
    link: 'https://play.google.com/store/apps',
    appname: 'Wakiel-App',
    emoji: Emoji,
}

const PrimaryNavbar = [
    {
        id: 0,
        title: 'Home',
        link: '#hero'
    },
    {
        id: 1,
        title: 'About',
        link: '#about'
    },
    {
        id: 2,
        title: 'Feature',
        link: '#features'
    },
    {
        id: 3,
        title: 'Services',
        link: '#services'
    },
    {
        id: 4,
        title: 'Online Dealings',
        link: '#online-dealings'
    },
    {
        id: 5,
        title: 'Connect With Us',
        link: '#connect-with-us'
    },
]

const ServicesData = [
    {
        title: "Live Chats with Lawyers",
        description: "Real-time Solutions, Right at Your Fingertips!",
        image: <PiChatsCircleBold />,
    },
    {
        title: "Watch Status of Your Case",
        description: "Stay Informed, Stay Confident!",
        image: <MdQueryStats />,
    },
    {
        title: "Hiring Available Lawyers",
        description: "Your Perfect Legal Match Awaits.",
        image: <FaUserTie />,
    },
    {
        title: "Manage Your Account in Secure Form",
        description: "Your Data, Your Control.",
        image: <GrSecure />,
    },
    {
        title: "Payments Method Integration",
        description: "Hassle-free Transactions, Total Peace of Mind",
        image: <GiPayMoney />,
    },
    {
        title: "Customer Support",
        description: "Our Team, Your Advocates, Always by Your Side",
        image: <TfiHeadphoneAlt />,
    },
]

const featureSection = [
    {
        title: 'Message',
        greenTitle: 'Privately',
        detail: 'Your privacy is our priority. With end-to-end encryption,you can be sure that your personal messages stay between you and your lawyer, to ensure the privacy and securiy of the communication.',
        img: messageImage,
    },
    {
        title: 'Easy',
        greenTitle: 'To Hire',
        detail: 'Hiring a lawyer through Wakeel is simple and efficient.You can begin by providing essential details about your legal situation within a few clicks.Our intuitive case evaluation feature helps match you with lawyers who have expertise in handling cases similar to yours,ensuring you receive tailored legal assistance.',
        img: imageTwo,
    },
    {
        title: 'Find The',
        greenTitle: 'Best lawyer',
        detail: "With Wakiel's smart search and filtering options, users can quickly narrow down their search for the best lawyer. Whether it's based on specialization, location, ratings, or fee structure, the app's intuitive interface simplifies the process of finding the most suitable legal expert.",
        img: messageImage,
    }
]

const FooterLink = {
    title: 'Important Links',
    items: ['Privacy Policy', 'FAQs', 'Terms & Conditions'],
}

const OnlineDealingsData = [
    {
        id: 1,
        icon: <AiFillWechat />,
        text: "Live chats with Wakiel",
        detail: "Step into a world of knowledge and inspiration with 'Live chats with Wakiel.' Engage, learn, and grow as Wakiel sparks enlightening conversations, igniting your curiosity.",
    },
    {
        id: 2,
        icon: <GrStatusGood />,
        text: "Watch Status of you case",
        detail: "Track your case effortlessly. Stay updated with real-time status updates, ensuring peace of mind and a smooth journey.",
    },
    {
        id: 3,
        icon: <ImUserTie />,
        text: "Hiring Available Wakiels",
        detail: "Unlock excellence: hiring available Wakiels. Embrace brilliance, expertise, and innovation with our exceptional team of Wakiels ready to conquer challenges.",
    },
    {
        id: 4,
        icon: <RiAccountCircleFill />,
        text: "Manage your account in secure form",
        detail: "Safeguard your account with ease. Manage it securely, ensuring peace of mind and complete control over your valuable information.",
    },
    {
        id: 5,
        icon: <MdPayment />,
        text: "Payments Method integration",
        detail: "Effortless, secure payments. Seamless method integration for your convenience.",
    },
    {
        id: 6,
        icon: <BiSupport />,
        text: "Customer Support",
        detail: "Reliable assistance, always there. Exceptional customer support, your satisfaction our priority.",
    },
]

const connectWithUs = [
    {
        heading: 'Wakiel: Your one-to-one brilliance partner!',
        paragraph: "Discover your true brilliance with Wakiel, your one-to-one partner in unlocking your potential! Our service connects you with dedicated brilliance partners who will guide and inspire you on your journey to success.",
        detail: "With Wakiel, you're not just embarking on a coaching or mentoring journey – you're entering a transformative partnership designed to unleash your inner genius. Our handpicked brilliance partners are more than just experts; they are visionaries, motivators, and catalysts for growth. Through personalized one-on-one sessions, our brilliance partners will delve deep into your unique strengths and challenges, helping you cultivate skills, break barriers, and exceed expectations. Whether you're aiming to excel in your career, nurture creativity, or foster personal development, Wakiel's brilliance partners will provide unwavering support and guidance, ensuring you achieve your goals with unwavering confidence. Experience the unparalleled impact of having a trusted brilliance partner at your side, propelling you towards greatness, one brilliant step at a time. Wakiel: Your one-to-one brilliance partner!",
        link: '/one-to-one-messages',
        img: chat,
    },
    {
        heading: "Delve into Wakiel's profile for insights into his illustrious career and a trail of successful cases.",
        paragraph: "Meet Wakiel, your one-to-one brilliance partner! Unleash your full potential with a dedicated guide who will inspire and support you on your journey to greatness",
        detail: "With Wakiel by your side, you're not just getting a mentor; you're gaining access to a remarkable individual with a wealth of experience and a track record of success. Wakiel's profile is a testament to an illustrious career spanning various industries, where he has achieved exceptional feats and made a lasting impact. As you delve deeper into his profile, you'll discover a trail of successful cases and inspiring stories of individuals who have flourished under his guidance. With an unwavering commitment to empowering others, Wakiel's approach is rooted in personalized strategies tailored to your unique aspirations and challenges. From startup entrepreneurs to seasoned executives, Wakiel has nurtured countless talents, helping them navigate complexities and emerge victorious. Don't miss the opportunity to partner with Wakiel and experience the transformative journey that has earned him a reputation as a true brilliance partner. Delve into Wakiel's profile for insights into his illustrious career and a trail of successful cases.",
        link: '/wakiel-profile',
        img: UserProfile,
    },
    {
        heading: 'Simplify hiring! Choose from a range of available Wakiels and their services online with ease.',
        paragraph: "Simplify success with Wakiel, your one-to-one partner! Connect with passionate Wakiels for goal-oriented guidance.",
        detail: "When you choose Wakiel, you're choosing convenience and efficiency. Our user-friendly platform allows you to explore a wide selection of available Wakiels, each with a comprehensive profile showcasing their skills, experience, and areas of specialization. Say goodbye to the lengthy hiring processes and enjoy the ease of selecting your ideal brilliance partner from the comfort of your home or office. With transparent pricing and service options, you can effortlessly compare the Wakiels' offerings, ensuring you find the perfect match for your specific needs. Whether you're seeking career guidance, personal development insights, or entrepreneurial expertise, Wakiel's platform empowers you to make informed decisions and take charge of your journey to success. Simplify hiring! Choose from a range of available Wakiels and their services online with ease. Let the brilliance unfold as you embark on a transformative partnership, driving you towards a future of limitless possibilities.",
        link: '/easy-hiring',
        img: WakeelList,
    },
    {
        heading: 'Empower your schedule: Wakiels offer online consultations and physical meetings!',
        paragraph: "Unleash your brilliance with Wakiel, your one-to-one partner! Connect with dedicated brilliance partners for transformative guidance towards success.",
        detail: "We understand that your time is valuable, and flexibility is key to your success. With Wakiel, you have the freedom to choose between convenient online consultations and face-to-face meetings to suit your schedule and preferences. Need a quick brainstorming session during your lunch break? Opt for a virtual chat with your brilliance partner. Prefer a more in-depth discussion over a cup of coffee? Arrange a physical meeting at a location that works best for you. Our platform empowers you to take control of your journey, making it seamless and hassle-free to connect with your brilliance partner whenever and wherever you need guidance. With Wakiel, your schedule becomes a tool for growth, allowing you to maximize productivity and achieve exceptional results. Empower your schedule: Wakiels offer online consultations and physical meetings! Embrace the freedom to learn and thrive on your own terms, with a brilliance partner who adapts to your unique rhythm and helps you shine brighter with each interaction.",
        link: '/manage-schedules',
        img: Shedule,

    },
    {
        heading: 'Seamless, secure online transactions: complete payments with confidence and convenience.',
        paragraph: 'Transform with Wakiel, your one-to-one brilliance partner! Connect with handpicked brilliance partners dedicated to guiding you towards success.',
        detail: "At Wakiel, we prioritize your peace of mind, and that extends to our payment process. With our seamless and secure online transaction system, you can complete payments with confidence and convenience. Whether you're booking a single session or committing to a long-term partnership with your brilliance partner, our platform ensures that your financial transactions are protected with state-of-the-art security measures. Say goodbye to worries about data breaches or unauthorized access; our encrypted payment gateway guarantees the utmost privacy for your sensitive information. Embrace the simplicity of managing payments online, allowing you to focus on what truly matters – your growth and development with your trusted brilliance partner. With Wakiel, every step of your journey is designed to empower and uplift you, and our secure payment system is just one more way we make your experience exceptional. Seamless, secure online transactions: complete payments with confidence and convenience. Trust in our commitment to your success, and embark on a journey of self-discovery and achievement with your brilliance partner by your side.",
        link: '/online-transactions',
        img: Shedule2,
    },
]


export {
    SecondaryNavbar,
    PrimaryNavbar,
    ServicesData,
    FooterLink,
    OnlineDealingsData,
    connectWithUs,
    featureSection,
}