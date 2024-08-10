import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome to Walmart India": "Welcome to Walmart India",
        "Register Now": "Register Now",
        "Employee Login": "Employee Login",
        "Why Choose Walmart India?": "Why Choose Walmart India?",
        "We provide a direct platform...": "We provide a direct platform for suppliers to connect with Walmart, bypassing intermediaries and ensuring fair trade practices.",
        "© 2024 Walmart India. All Rights Reserved.": "© 2024 Walmart India. All Rights Reserved.",
            "Registration": "Registration",
            "Login": "Login",
            "Name": "Name",
            "Mobile Number": "Mobile Number",
            "Enter OTP": "Enter OTP",
            "Verify OTP": "Verify OTP",
            "Profile Form": "Profile Form",
            "Address": "Address",
            "State": "State",
            "City": "City",
            "Pincode": "Pincode",
            "Select State": "Select State",
            "Select Store": "Select Store",
            "Submit": "Submit",
            "Registered Successfully!": "Registered Successfully!",
            // Add more translations as needed
        }
    },
    hi: {
        translation: {
          "Welcome to Walmart India": "वेलकम टू वॉलमार्ट इंडिया",
        "Register Now": "अभी रजिस्टर करें",
        "Employee Login": "कर्मचारी लॉगिन",
        "Why Choose Walmart India?": "वॉलमार्ट इंडिया क्यों चुनें?",
        "We provide a direct platform...": "हम वॉलमार्ट के साथ सीधे जुड़ने के लिए आपूर्तिकर्ताओं को एक सीधा प्लेटफॉर्म प्रदान करते हैं, बिचौलियों को दरकिनार करते हुए और निष्पक्ष व्यापार प्रथाओं को सुनिश्चित करते हैं।",
        "© 2024 Walmart India. All Rights Reserved.": "© 2024 वॉलमार्ट इंडिया। सभी अधिकार सुरक्षित।",
            "Registration": "पंजीकरण",
            "Login": "लॉगिन",
            "Name": "नाम",
            "Mobile Number": "मोबाइल नंबर",
            "Enter OTP": "ओटीपी दर्ज करें",
            "Verify OTP": "ओटीपी सत्यापित करें",
            "Profile Form": "प्रोफ़ाइल फॉर्म",
            "Address": "पता",
            "State": "राज्य",
            "City": "शहर",
            "Pincode": "पिनकोड",
            "Select State": "राज्य चुनें",
            "Select Store": "स्टोर चुनें",
            "Submit": "प्रस्तुत",
            "Registered Successfully!": "सफलतापूर्वक पंजीकृत!",
            // Add more translations as needed
        }
    }
  },
  lng: savedLanguage, // Set default language to saved language or 'en'
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;