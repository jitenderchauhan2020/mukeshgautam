'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Updates = () => {
  return (
    <section id="updates" className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              समाचार अपडेट
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            नवीनतम घटनाएं और महत्वपूर्ण क्षण
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* First Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/updates/imageupdate1.jpeg"
                alt="शंकराचार्य श्री अविमुक्तेश्वरानंद जी के साथ डॉ. मुकेश गौतम"
                width={600}
                height={400}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            {/* Second Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/updates/imageupdate2.jpeg"
                alt="हरित-अमृत पुस्तक विमोचन समारोह"
                width={600}
                height={400}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Headline */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                हास्य कलाकार समाज की बड़ी जरूरत - शंकराचार्य श्री अविमुक्तेश्वरानंद जी
              </h3>
              
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6"></div>
              
              {/* Content Paragraphs */}
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  समाज में हंसी बांटने का काम बहुत महत्वपूर्ण है। जो हास्य कवि-कलाकार हंसी बांटने का कार्य कर रहे हैं वे बधाई के पात्र हैं। शंकराचार्य श्री अविमुक्तेश्वरानंद जी महाराज ने यह बात आज हास्य कवि और पर्यावरण कार्यकर्ता डॉ.मुकेश गौतम की ताजा पुस्तक "हरित-अमृत" की प्रथम प्रति उन्हें भेंट करने के अवसर पर कही।
                </p>
                
                <p>
                  हास्य कवियों के बारे में अपने विचार व्यक्त करते हुए उन्होंने कहा कि हास्य के बिना जीवन अधूरा है। लाखों में से कोई एक व्यक्ति ऐसा होता है जिसके मुख से हास्य निकलता है और जो व्यक्ति उनकी प्रस्तुति पर खुलकर हंस लेता है वह अवसाद मुक्त हो जाता है। उन्होंने कहा कि संसार में आज हास्य कवि और कलाकारों की बहुत जरूरत है।
                </p>
                
                <p>
                  शंकराचार्य श्री अविमुक्तेश्वरानंद जी महाराज ने कहा कि मुकेश गौतम लाखों लोगों के चेहरे पर हंसी बांटने का कार्य लगातार कर रहे हैं इसलिए वे प्रशंसा के पात्र है। उन्होंने कहां कि क्योंकि मुकेश गौतम पर्यावरण संरक्षण के क्षेत्र में भी बड़ा कार्य कर रहे हैं इसलिए वे विशेष बधाई के पात्र है।
                </p>
                
                <p>
                  जिस प्रकार से एक पौधे को पानी देने पर पानी और पौधा मुस्कुराने लगते हैं ठीक वैसा ही कार्य मुकेश गौतम का है, वे लोगों को हंसा भी रहे हैं और वृक्ष लगाकर समाज के लिए अच्छा कार्य भी कर रहे हैं।
                </p>
                
                <p>
                  शंकराचार्य श्री अविमुक्तेश्वरानंद जी महाराज ने मुकेश गौतम की नवीनतम पुस्तक "हरित-अमृत" की प्रशंसा करते हुए पर्यावरण संरक्षण कार्यों को समाज के लिए बहुत जरूरी कार्य बताया। इस अवसर पर वरिष्ठ पत्रकार शैलेन्द्र श्रीवास्तव, प्रदीप कुमार सिंह, श्रीमती विमला गौतम, अनिरुद्ध पांडे जी को शंकराचार्य श्री अविमुक्तेश्वरानंद जी महाराज ने अपना आशीर्वाद देते हुए हमेशा समाज के लिए अच्छे कार्य करते रहने की बात कही।
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className="mt-8 flex items-center justify-center">
                <div className="flex items-center space-x-2 text-orange-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Updates;