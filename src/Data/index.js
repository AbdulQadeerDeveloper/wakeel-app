import { AiFillWechat } from "react-icons/ai"
import { GrStatusGood } from "react-icons/gr"
import { ImUserTie } from "react-icons/im"
import { RiAccountCircleFill } from "react-icons/ri"
import { BiSupport } from "react-icons/bi"
import { MdPayment } from "react-icons/md"
import { Check, ChildCustody, Criminal, Divorce, Emoji, Property, Supremecourt, messageImage, imageTwo } from "../Images"
// Login, Profile, Services,
const SecondaryNavbar = {
    line: 'Download the latest version of ',
    link: 'https://www.google.com',
    appname: 'Wakeel-App',
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
        title: "Cheque Bounce",
        description: "We provide expert legal advice for family-related matters.",
        image: Check,
    },
    {
        title: "Criminal",
        description: "Get professional assistance for your business's legal needs.",
        image: Criminal,
    },
    {
        title: "Child Custody",
        description: "Navigating real estate transactions is easy with our help.",
        image: ChildCustody,
    },
    {
        title: "Divorce",
        description: "Navigating real estate transactions is easy with our help.",
        image: Divorce,
    },
    {
        title: "Property",
        description: "Navigating real estate transactions is easy with our help.",
        image: Property,
    },
    {
        title: "Supreme Court",
        description: "Navigating real estate transactions is easy with our help.",
        image: Supremecourt,
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
        detail: "With Wakeel's smart search and filtering options, users can quickly narrow down their search for the best lawyer. Whether it's based on specialization, location, ratings, or fee structure, the app's intuitive interface simplifies the process of finding the most suitable legal expert.",
        img: messageImage,
    }
]

const FooterLink = {
    title: 'Important Links',
    items: ['Privacy Policy', 'FAQs', 'Terms & Conditions'],
}

// const OnlineDealingsData = [
//     {
//         image: Login,
//         heading: "Login Name",
//         text: "Description Text for Service",
//     },
//     {
//         image: Profile,
//         heading: "Profile Name",
//         text: "Description Text for Service",
//     },
//     {
//         image: Services,
//         heading: "Service Name",
//         text: "Description Text for Service",
//     },
// ]


const OnlineDealingsData = [
    {
        id: 1,
        icon: <AiFillWechat />,
        text: "Live chats with Wakeel",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio non, iure corporis ullam dolor repellend ex id dolorum totam etc.",
    },
    {
        id: 2,
        icon: <GrStatusGood />,
        text: "Watch Status of you case",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio non, iure corporis ullam dolor repellendus laborum fugiat beatae quam maiores nisi facilis iste ex id dolorum totam etc.",
    },
    {
        id: 3,
        icon: <ImUserTie />,
        text: "Hiring Available Wakeels",
        detail: "Lorem ipsum dolor sit amet, consectetur Odio non, iure corporis ullam dolor repellendus laborum fugiat beatae quam maiores nisi facilis iste ex id dolorum totam etc.",
    },
    {
        id: 4,
        icon: <RiAccountCircleFill />,
        text: "Manage your account in secure form",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio non, iure corporis ullam dolor repellendus laborum fugiat beatae quam",
    },
    {
        id: 5,
        icon: <MdPayment />,
        text: "Payments Method integration",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio non, ",
    },
    {
        id: 6,
        icon: <BiSupport />,
        text: "Customer Support",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
]

const connectWithUs = [
    {
        heading: 'Introducing Instant Video Messages',
        paragraph: 'Voice messages on WhatsApp changed the way people communicate by providing a quick and secure way to share your voice. We’re excited to build on this feature with new instant video messages. Now you can record and share short personal videos directly in the chat.',

        detail: 'Voice messages on WhatsApp changed the way people communicate by providing a quick and secure way to share your voice. We’re excited to build on this feature with new instant video messages. Now you can record and share short personal videos directly in the chat. Voice messages on WhatsApp changed the way people communicate by providing a quick and secure way to share your voice. We’re excited to build on this feature with new instant video messages. Now you can record and share short personal videos directly in the chat.Voice messages on WhatsApp.',
        link: '/instant-messages'
    },
    {
        heading: 'New Privacy Features: Silence Unknown Callers and Privacy Checkup',
        paragraph: 'Protecting the privacy of your messages remains the driving force behind what we’re building at WhatsApp. While End-to-end encryption.',
        detail: 'Protecting the privacy of your messages remains the driving force behind what we’re building at WhatsApp. While End-to-end encryptionProtecting the privacy of your messages remains the driving force behind what we’re building at WhatsApp. While End-to-end encryptionProtecting the privacy of your messages remains the driving force behind what we’re building at WhatsApp. While End-to-end encryptionProtecting the privacy of your messages remains the driving force behind what we’re building at WhatsApp. While End-to-end encryptionProtecting the privacy of your messages remains the driving force behind what we’re building at WhatsApp. While End-to-end encryption.',
        link: '/new-privacy',

    },
    {
        heading: 'Introducing Wakeel Channels. A Private Way to Follow What Matters',
        paragraph: 'Today we’re excited to introduce Channels: a simple, reliable, and private way to receive important updates from people and organizations.',
        detail: 'Today we’re excited to introduce Channels: a simple, reliable, and private way to receive important updates from people and organizationsToday we’re excited to introduce Channels: a simple, reliable, and private way to receive important updates from people and organizationsToday we’re excited to introduce Channels: a simple, reliable, and private way to receive important updates from people and organizationsToday we’re excited to introduce Channels: a simple, reliable, and private way to receive important updates from people and organizations',
        link: '/wakeel-channel'
    },
    {
        heading: 'Now you can edit your WhatsApp message',
        paragraph: 'For the moments when you make a mistake, or simply change your mind, you can now edit your sent messages',
        detail: 'For the moments when you make a mistake, or simply change your mind, you can now edit your sent messagesFor the moments when you make a mistake, or simply change your mind, you can now edit your sent messagesFor the moments when you make a mistake, or simply change your mind, you can now edit your sent messagesFor the moments when you make a mistake, or simply change your mind, you can now edit your sent messagesFor the moments when you make a mistake, or simply change your mind, you can now edit your sent messagesFor the moments when you make a mistake, or simply change your mind, you can now edit your sent messagesFor the moments when you make a mistake, or simply change your mind, you can now edit your sent messagesFor the moments when you make a mistake, or simply change your mind, you can now edit your sent messages',
        link: '/edit-message'

    },
    {
        heading: 'Chat Lock: Making your most intimate conversations even more private',
        paragraph: 'Our passion is to find new ways to help keep your messages private and secure. Today, we’re excited to bring to you a new feature we’re calling Chat',
        detail: 'Our passion is to find new ways to help keep your messages private and secure. Today, we’re excited to bring to you a new feature we’re calling ChatOur passion is to find new ways to help keep your messages private and secure. Today, we’re excited to bring to you a new feature we’re calling ChatOur passion is to find new ways to help keep your messages private and secure. Today, we’re excited to bring to you a new feature we’re calling ChatOur passion is to find new ways to help keep your messages private and secure. Today, we’re excited to bring to you a new feature we’re calling ChatOur passion is to find new ways to help keep your messages private and secure. Today, we’re excited to bring to you a new feature we’re calling Chat',
        link: '/chat-lock'

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