/* eslint-disable quotes */
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import FAQs from '../Pages/FAQs';
import TermsAndCondition from '../Pages/TermsAndCondition';

const FooterLinkData = [
  {
    id: 1,
    title: 'Privacy Policy',
    link: 'privacy-policy',
    page: <PrivacyPolicy />,
  },
  {
    id: 2,
    title: 'FAQs',
    link: 'faqs',
    page: <FAQs />,
  },
  {
    id: 3,
    title: 'Terms & Conditions',
    link: 'terms-and-conditions',
    page: <TermsAndCondition />,
  },
];

export default FooterLinkData;
