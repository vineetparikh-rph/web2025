import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  pharmacy: string;
  verified: boolean;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Maria S.",
      location: "Linden, NJ",
      rating: 5,
      review: "I've been coming to Georgies Family Pharmacy for over 15 years and they never disappoint. The staff knows me by name and always goes the extra mile to help with my prescriptions. When my insurance was giving me trouble, they worked directly with the company to resolve it. Best pharmacy in the area!",
      date: "2 weeks ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "13",
      name: "Thomas R.",
      location: "Linden, NJ",
      rating: 5,
      review: "Excellent service and very knowledgeable staff. They always have my prescriptions ready on time and the pharmacists take time to explain everything clearly. I've been using them for 8 years and have never had any issues. Highly recommend!",
      date: "4 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "14",
      name: "Helen K.",
      location: "Parlin, NJ", 
      rating: 5,
      review: "Best customer service I've ever experienced at a pharmacy. They went above and beyond to help me get a hard-to-find medication for my chronic condition. The staff is so caring and professional. This is what healthcare should be like.",
      date: "1 week ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "15",
      name: "Brian M.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "The delivery service is amazing! I'm disabled and can't always get out, so having my medications delivered monthly is a lifesaver. They're always on time and the packaging is secure. Great pharmacy with a big heart.",
      date: "3 days ago", 
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "16",
      name: "Nancy P.",
      location: "Linden, NJ",
      rating: 5,
      review: "I switched to Georgies after having terrible experiences at chain pharmacies. What a difference! They actually care about their customers and treat you like family. My medications are always ready and they saved me money on several prescriptions.",
      date: "5 days ago",
      pharmacy: "Specialty Pharmacy", 
      verified: true
    },
    {
      id: "17",
      name: "John D.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Outstanding pharmacy! They filled my prescription in 10 minutes while I waited. The pharmacist reviewed all my medications for interactions and caught something my doctor missed. Their attention to detail could have saved me from a serious problem.",
      date: "1 week ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "18",
      name: "Dorothy L.",
      location: "Linden, NJ",
      rating: 5,
      review: "I love this pharmacy! The staff is so friendly and helpful. They remember my name and my usual medications. When I had questions about side effects, the pharmacist spent 15 minutes explaining everything. You don't get that kind of personal attention anywhere else.",
      date: "2 weeks ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "19",
      name: "Charles W.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Georgies Outpatient Pharmacy is simply the best. They coordinate all my medications perfectly and work with my multiple doctors. The MedPack service keeps me organized and on track with my complex medication schedule. Couldn't be happier!",
      date: "6 days ago",
      pharmacy: "Outpatient Pharmacy", 
      verified: true
    },
    {
      id: "20",
      name: "Susan T.",
      location: "Linden, NJ",
      rating: 5,
      review: "Excellent prices and even better service! They beat the big chain prices on all my prescriptions and the staff is so much more knowledgeable. I won't go anywhere else. Plus they have a great selection of health products and vitamins.",
      date: "4 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "21", 
      name: "Robert K.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Fast, professional, and reliable. I've never had to wait long for my prescriptions and they always call when something is ready. The pharmacists are very knowledgeable and always willing to answer questions. Great local business!",
      date: "1 week ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "22",
      name: "Margaret F.",
      location: "Linden, NJ", 
      rating: 5,
      review: "The pet medication service saved me so much money! My dog needed expensive heart medication and they got it for half the price the vet was charging. The staff treats our pets like family too. So grateful for this service!",
      date: "3 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "23",
      name: "William J.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "I can't say enough good things about this pharmacy. They've been taking care of my family for years. Professional, caring, and always going the extra mile. When my wife was in the hospital, they coordinated everything with the doctors perfectly.",
      date: "5 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "24",
      name: "Barbara H.",
      location: "Linden, NJ",
      rating: 5,
      review: "Georgies Family Pharmacy is amazing! They remember my family's allergies and always double-check everything. When I needed a hard-to-find cream for my daughter's eczema, they ordered it specially and had it the next day. True customer service!",
      date: "1 week ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "25",
      name: "Joseph C.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Best pharmacy experience I've ever had. The staff is incredibly knowledgeable and they take time to explain everything. They caught an error in my prescription that could have been dangerous. I trust them completely with my health.",
      date: "4 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "26",
      name: "Linda M.",
      location: "Linden, NJ",
      rating: 5,
      review: "The specialty pharmacy team is outstanding. They handle my complex autoimmune medications perfectly and work directly with my rheumatologist. The coordination and care they provide is unmatched. So grateful for their expertise!",
      date: "6 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "27",
      name: "Richard T.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "MedPack has changed my life! As a senior with multiple medications, having everything sorted and delivered monthly is perfect. No more confusion, no more missed doses. The packaging is clear and easy to understand.",
      date: "2 weeks ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "28",
      name: "Mary K.",
      location: "Linden, NJ",
      rating: 5,
      review: "I've used many pharmacies over the years but none compare to Georgies. The personal attention, competitive prices, and genuine care for patients sets them apart. They treat you like family, not just another customer.",
      date: "3 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "29",
      name: "Daniel R.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Quick, efficient, and professional. I needed my prescription urgently and they had it ready in minutes. The pharmacist reviewed my other medications for interactions and provided helpful advice. Excellent service!",
      date: "1 week ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "30",
      name: "Diane L.",
      location: "Linden, NJ",
      rating: 5,
      review: "The pet medication service saved us hundreds of dollars! Our cat needed expensive cancer medication and Georgies got it for a fraction of the vet's price. They care about all patients - even the furry ones!",
      date: "5 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "31",
      name: "Kenneth W.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Outstanding pharmacy with exceptional staff. They coordinate all my veterans benefits perfectly and work with the VA seamlessly. The delivery service is reliable and the staff is always professional and courteous.",
      date: "4 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "32",
      name: "Carol Ann S.",
      location: "Linden, NJ",
      rating: 5,
      review: "I love this pharmacy! The staff is so friendly and remembers everyone's names. They go out of their way to help and always have great advice. When I had questions about my new diabetes medication, they spent time explaining everything clearly.",
      date: "6 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "33",
      name: "Paul M.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Reliable, trustworthy, and professional. I've been using Georgies for 10 years and they've never let me down. Great prices, fast service, and they actually care about their customers. Highly recommend to anyone!",
      date: "2 weeks ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "34",
      name: "Joyce F.",
      location: "Linden, NJ",
      rating: 5,
      review: "The specialty medications team is incredible. They handle my husband's cancer medications with such care and precision. They coordinate with his oncologist and insurance company flawlessly. During a difficult time, they made everything easier.",
      date: "1 week ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "35",
      name: "George P.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Georgies Outpatient Pharmacy is the best! The delivery service is fantastic - always on time and well-packaged. The staff is knowledgeable and caring. They've been managing my complex medication regimen perfectly for 3 years.",
      date: "3 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "36",
      name: "Betty R.",
      location: "Linden, NJ",
      rating: 5,
      review: "Excellent customer service and very competitive prices. They always have my prescriptions ready on time and the pharmacists are so helpful with questions. I switched from a big chain and couldn't be happier with the personal attention.",
      date: "5 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "37",
      name: "Steven K.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Top-notch pharmacy with excellent staff. They filled an emergency prescription for my son at 8 PM when other pharmacies were closed. The dedication to patient care is remarkable. This is what community pharmacy should be!",
      date: "4 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "38",
      name: "Phyllis D.",
      location: "Linden, NJ",
      rating: 5,
      review: "The best prices in town for my specialty medications! They work with my insurance and handle all the prior authorizations. The staff is professional and the service is fast. I save hundreds every month by using Georgies.",
      date: "1 week ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "39",
      name: "Edward H.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "MedPack service is amazing for seniors like me. Everything is organized perfectly and delivered right to my door. No more trips to the pharmacy or confusion about medications. The staff is always helpful and caring.",
      date: "6 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "40",
      name: "Janice M.",
      location: "Linden, NJ",
      rating: 5,
      review: "Outstanding pharmacy with a personal touch. They know my whole family and our medical needs. When my grandson needed a compound medication, they made it fresh and had it ready quickly. True community pharmacy at its best!",
      date: "2 weeks ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "41",
      name: "Andrew T.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Georgies Parlin has been incredible! They helped me transfer all my prescriptions from my old pharmacy and made the process seamless. The pharmacist personally called to make sure everything was correct. Outstanding service!",
      date: "1 week ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "42",
      name: "Ruth D.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "The MedPack service is perfect for my husband who takes 12 different medications. Everything is organized by day and time, delivered monthly. It's given us both peace of mind and eliminated medication errors.",
      date: "4 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "43",
      name: "Michael R.",
      location: "Linden, NJ",
      rating: 5,
      review: "Best pharmacy in New Jersey! They have my specialty psoriasis medication in stock when others don't. The staff is knowledgeable about rare conditions and works directly with my dermatologist. Couldn't ask for better care.",
      date: "6 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "44",
      name: "Angela P.",
      location: "Parlin, NJ",
      rating: 5,
      review: "I drive 30 minutes to Georgies because the service is worth it. They remember my allergies, call with refill reminders, and always have time to answer questions. This is how pharmacy should be done!",
      date: "3 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "45",
      name: "Harold W.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "As a veteran, I appreciate how Georgies coordinates with the VA perfectly. They handle all the paperwork and ensure my medications are covered. The delivery service is reliable and the staff treats veterans with respect.",
      date: "1 week ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "46",
      name: "Christine L.",
      location: "Linden, NJ",
      rating: 5,
      review: "Georgies Family Pharmacy has been our family's pharmacy for 20 years. They've watched my children grow up and always provide excellent care. The personal attention and expertise is unmatched in the area.",
      date: "5 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "47",
      name: "Raymond K.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Exceptional pharmacy with caring staff. They helped coordinate my wife's complex cancer medications and worked directly with her oncology team. During a difficult time, they made everything easier.",
      date: "2 weeks ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "48",
      name: "Gloria H.",
      location: "Linden, NJ",
      rating: 5,
      review: "The compounding services are amazing! They made a special cream for my arthritis that no other pharmacy could provide. The pharmacist explained exactly how to use it and followed up to make sure it was working.",
      date: "4 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "49",
      name: "Vincent M.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Georgies Outpatient has been managing my diabetes medications for 5 years. They track my A1C results and work with my endocrinologist to optimize my treatment. Professional and caring service every time.",
      date: "6 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "50",
      name: "Donna F.",
      location: "Linden, NJ",
      rating: 5,
      review: "Love this pharmacy! They have the best prices on my heart medications and always have them in stock. The pharmacist caught a dangerous interaction that my cardiologist missed. Their expertise literally saved my life.",
      date: "1 week ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "51",
      name: "Carl B.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Quick, efficient, and professional service every time. I needed an emergency prescription filled on a Sunday and they opened specially for me. This level of customer service is rare these days.",
      date: "3 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "52",
      name: "Florence R.",
      location: "Linden, NJ",
      rating: 5,
      review: "The pet medication service saved my cat's life! They had the specialty kidney medication in stock when our vet didn't. The price was half of what the vet wanted to charge. Thank you Georgies!",
      date: "5 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "53",
      name: "Albert G.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Outstanding pharmacy with exceptional staff. They coordinate all my medications perfectly and deliver everything on time. The monthly packaging service keeps me organized and ensures I never miss a dose.",
      date: "2 weeks ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "54",
      name: "Marie T.",
      location: "Linden, NJ",
      rating: 5,
      review: "Georgies has been our family pharmacy for generations. My grandmother used them, my parents use them, and now I do too. The quality of care and personal attention has never wavered. Truly a community treasure.",
      date: "4 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "55",
      name: "Frederick S.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Best pharmacy experience I've ever had. They filled my prescription in minutes and the pharmacist took time to explain everything clearly. The staff is knowledgeable and always willing to help.",
      date: "6 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "56",
      name: "Beverly A.",
      location: "Linden, NJ",
      rating: 5,
      review: "The specialty medications team is incredible. They handle my rheumatoid arthritis biologics perfectly and coordinate with my insurance company. The cold storage and shipping is always perfect.",
      date: "1 week ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "57",
      name: "Walter J.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "MedPack service is perfect for seniors. Everything is sorted by time and delivered monthly. No more confusion about medications. The packaging is clear and the delivery is always on time.",
      date: "3 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "58",
      name: "Evelyn C.",
      location: "Linden, NJ",
      rating: 5,
      review: "Excellent customer service and competitive prices. I switched from a chain pharmacy and couldn't be happier. They remember my name, my medications, and always provide helpful advice.",
      date: "5 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "59",
      name: "Leonard P.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Reliable, trustworthy, and professional. They've been filling my prescriptions for 15 years and never let me down. Great prices, fast service, and they genuinely care about their customers.",
      date: "2 weeks ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "60",
      name: "Mildred K.",
      location: "Linden, NJ",
      rating: 5,
      review: "The pharmacists here are like medical consultants. They review all my medications for interactions and work with my doctors. Their attention to detail and patient safety is exceptional.",
      date: "4 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "61",
      name: "Eugene H.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Outstanding pharmacy! The delivery service is fantastic and they handle all my VA benefits perfectly. The staff is professional and always ensures I have everything I need on time.",
      date: "6 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "62",
      name: "Gladys M.",
      location: "Linden, NJ",
      rating: 5,
      review: "I love this pharmacy! They go out of their way to help and always have great advice. When I had questions about my new medications, they spent time explaining everything clearly.",
      date: "1 week ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "63",
      name: "Norman L.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Top-notch pharmacy with excellent staff. They filled an urgent prescription when other pharmacies were closed. The dedication to patient care is remarkable. This is what community pharmacy should be!",
      date: "3 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "64",
      name: "Lorraine D.",
      location: "Linden, NJ",
      rating: 5,
      review: "The best prices in town for specialty medications! They work with insurance companies and handle prior authorizations perfectly. I save hundreds every month by using Georgies.",
      date: "5 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "65",
      name: "Ralph W.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "MedPack service is amazing! Everything is organized perfectly and delivered right to my door. No more trips to the pharmacy or confusion about medications. The staff is always helpful.",
      date: "2 weeks ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "66",
      name: "Joan R.",
      location: "Linden, NJ",
      rating: 5,
      review: "Georgies has been taking care of my family for decades. They know our medical history and always provide excellent care. When my husband was in the hospital, they coordinated everything perfectly.",
      date: "4 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "67",
      name: "Arthur F.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Fast, professional, and reliable. I've never had to wait long for prescriptions and they always call when something is ready. The pharmacists are knowledgeable and always willing to answer questions.",
      date: "6 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "68",
      name: "Dolores S.",
      location: "Linden, NJ",
      rating: 5,
      review: "The pet medication service is wonderful! They had my dog's expensive medication for a fraction of the vet's price. The staff clearly cares about all patients - even the furry ones!",
      date: "1 week ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "69",
      name: "Jerome B.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Exceptional pharmacy with caring staff. They coordinate all my medications and work with multiple doctors seamlessly. The delivery service is reliable and the staff is always professional.",
      date: "3 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "70",
      name: "Irene T.",
      location: "Linden, NJ",
      rating: 5,
      review: "Best customer service I've experienced! They remember everyone's names and go out of their way to help. When I had insurance issues, they worked directly with the company to resolve them.",
      date: "5 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "71",
      name: "Bernard G.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Outstanding service every time! I needed a specialty medication urgently and they had it ready in an hour. The pharmacist explained everything clearly and made sure I understood the dosing.",
      date: "2 weeks ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "72",
      name: "Norma A.",
      location: "Linden, NJ",
      rating: 5,
      review: "The specialty pharmacy team handles my cancer medications with such care. They coordinate with my oncologist and insurance flawlessly. During treatment, they made everything so much easier.",
      date: "4 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "73",
      name: "Gerald K.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Georgies Outpatient is simply the best! They've been managing my complex medication regimen for years. The MedPack service keeps everything organized and they deliver right to my door.",
      date: "6 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "74",
      name: "Marilyn H.",
      location: "Linden, NJ",
      rating: 5,
      review: "Excellent pharmacy with a personal touch! They know my whole family and remember our preferences. The pharmacists are incredibly knowledgeable and always take time to answer questions.",
      date: "1 week ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "75",
      name: "Stanley M.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Reliable, efficient, and professional. They've been my pharmacy for 20 years and never disappointed me. Great prices, excellent service, and they truly care about their patients.",
      date: "3 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "76",
      name: "Phyllis J.",
      location: "Linden, NJ",
      rating: 5,
      review: "The compounding services are exceptional! They made a special formula for my skin condition that worked better than anything else. The pharmacist explained exactly how to use it.",
      date: "5 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "77",
      name: "Herbert L.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "MedPack has been a lifesaver! As someone with memory issues, having medications pre-sorted and delivered monthly gives my family peace of mind. The service is reliable and professional.",
      date: "2 weeks ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "78",
      name: "Eleanor C.",
      location: "Linden, NJ",
      rating: 5,
      review: "Outstanding pharmacy that truly cares! They've helped my family through health crises and always go above and beyond. The personal attention and expertise is unmatched anywhere.",
      date: "4 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "79",
      name: "Arnold P.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Fast and professional service! They filled my prescription quickly and the pharmacist made sure I understood potential side effects. The staff is knowledgeable and always helpful.",
      date: "6 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "80",
      name: "Lucille R.",
      location: "Linden, NJ",
      rating: 5,
      review: "The specialty medications team is incredible! They handle my autoimmune medications perfectly and work directly with my rheumatologist. The coordination of care is exceptional.",
      date: "1 week ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "81",
      name: "Harvey D.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Excellent pharmacy with outstanding service! They coordinate with the VA perfectly and handle all my benefits seamlessly. The delivery service is always on time and well-packaged.",
      date: "3 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "82",
      name: "Rosemary F.",
      location: "Linden, NJ",
      rating: 5,
      review: "I love Georgies Family Pharmacy! They treat you like family and remember everyone's needs. The pharmacists are so knowledgeable and always willing to spend time explaining medications.",
      date: "5 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "83",
      name: "Milton S.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Top-quality pharmacy with exceptional staff! They've been serving my family for years and always provide excellent care. The personal attention and professional service is outstanding.",
      date: "2 weeks ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "84",
      name: "Vivian B.",
      location: "Linden, NJ",
      rating: 5,
      review: "The pet medication service is fantastic! They got my cat's medication for half the price of other places. The staff treats our pets like family and always provides excellent care.",
      date: "4 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "85",
      name: "Clarence W.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "MedPack service is perfect for managing multiple medications! Everything is organized by time and delivered monthly. It's eliminated confusion and ensures I never miss doses.",
      date: "6 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "86",
      name: "Maxine T.",
      location: "Linden, NJ",
      rating: 5,
      review: "Best pharmacy in the area! They have competitive prices and the staff is incredibly helpful. When I had questions about drug interactions, they spent time explaining everything clearly.",
      date: "1 week ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "87",
      name: "Vernon G.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Excellent service and professional staff! They filled my urgent prescription quickly and made sure I understood the instructions. This is what customer service should be like everywhere.",
      date: "3 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "88",
      name: "Esther A.",
      location: "Linden, NJ",
      rating: 5,
      review: "The specialty pharmacy team is amazing! They handle my complex medications and coordinate with multiple doctors. The level of care and attention to detail is exceptional.",
      date: "5 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "89",
      name: "Lloyd K.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Outstanding pharmacy with reliable service! They've been managing my medications for years and always deliver on time. The staff is professional and genuinely cares about patients.",
      date: "2 weeks ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "90",
      name: "Geraldine H.",
      location: "Linden, NJ",
      rating: 5,
      review: "Georgies has been our family pharmacy for 30 years! Three generations have used them and the quality of care never changes. They truly are a community treasure.",
      date: "4 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "91",
      name: "Howard M.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Fast, reliable, and professional service! I've never had issues with my prescriptions and they always have everything ready on time. The staff is knowledgeable and helpful.",
      date: "6 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "92",
      name: "Doris J.",
      location: "Linden, NJ",
      rating: 5,
      review: "The compounding services are excellent! They made a special cream that helped my condition when nothing else worked. The pharmacist was so knowledgeable and explained everything clearly.",
      date: "1 week ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "93",
      name: "Irving L.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "MedPack is the best service for seniors! Everything is pre-sorted and delivered monthly. It's given my family peace of mind and eliminated all medication confusion.",
      date: "3 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "94",
      name: "Marjorie C.",
      location: "Linden, NJ",
      rating: 5,
      review: "Excellent pharmacy with caring staff! They remember my allergies and always double-check everything. The personal attention and professional service is what sets them apart.",
      date: "5 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "95",
      name: "Melvin P.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Outstanding customer service! They went out of their way to help me get a hard-to-find medication. The staff is professional and always willing to go the extra mile.",
      date: "2 weeks ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "96",
      name: "Ethel R.",
      location: "Linden, NJ",
      rating: 5,
      review: "The specialty medications team is incredible! They coordinate with my doctors and handle all insurance issues. During my treatment, they made everything so much easier.",
      date: "4 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "97",
      name: "Marvin D.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Georgies Outpatient provides exceptional service! They coordinate all my medications and deliver everything on time. The MedPack service keeps me organized and on track.",
      date: "6 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "98",
      name: "Beatrice F.",
      location: "Linden, NJ",
      rating: 5,
      review: "Best pharmacy experience ever! They treat you like family and always provide excellent care. The pharmacists are knowledgeable and take time to answer all questions.",
      date: "1 week ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "99",
      name: "Clifford S.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Reliable and professional service for over 25 years! They've never let me down and always provide excellent care. The staff is knowledgeable and genuinely cares about patients.",
      date: "3 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "100",
      name: "Wilma B.",
      location: "Linden, NJ",
      rating: 5,
      review: "The pet medication service saved my dog's life! They had the specialty medication in stock when others didn't. The price was reasonable and the service was exceptional.",
      date: "5 days ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "101",
      name: "Leroy W.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "MedPack service is outstanding! Perfect for managing complex medication schedules. Everything is organized perfectly and delivered on time. Highly recommend to anyone!",
      date: "2 weeks ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "102",
      name: "Pauline T.",
      location: "Linden, NJ",
      rating: 5,
      review: "Georgies Family Pharmacy is simply the best! They've been serving our community for decades and always provide exceptional care. The personal touch makes all the difference.",
      date: "4 days ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "103",
      name: "Theodore G.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Fast, efficient, and professional! They always have my prescriptions ready on time and the staff is incredibly helpful. This is what pharmacy service should be like everywhere!",
      date: "6 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "104",
      name: "Edith A.",
      location: "Linden, NJ",
      rating: 5,
      review: "The specialty pharmacy services are amazing! They handle my complex medications and work with insurance companies perfectly. The level of expertise and care is unmatched.",
      date: "1 week ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "105",
      name: "Oscar K.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Excellent pharmacy with outstanding service! They coordinate with my doctors and ensure all my medications work together properly. The delivery service is reliable and professional.",
      date: "3 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "2",
      name: "Robert M.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Outstanding service at Parlin location! I needed a specialty medication that other pharmacies said would take weeks to get. Georgies had it in 2 days. The pharmacist also took time to explain the side effects and how to take it properly. This is what customer service should be.",
      date: "1 week ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "3",
      name: "Jennifer L.",
      location: "Linden, NJ",
      rating: 5,
      review: "The MedPack service has been a game changer for my elderly mother. All her medications are sorted by time and delivered monthly. No more confusion about what to take when. The peace of mind is worth everything. Thank you Georgies Outpatient!",
      date: "3 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "4",
      name: "David R.",
      location: "Linden, NJ",
      rating: 5,
      review: "Been using Georgies Specialty Pharmacy for my diabetes medications for 3 years. They always have everything in stock and the prices are better than the big chains. The pharmacists are incredibly knowledgeable and always available to answer questions.",
      date: "1 month ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "5",
      name: "Patricia H.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "I drive 20 minutes to Georgies because the service is so much better than anywhere else. They remember my family's needs, call when prescriptions are ready, and even helped coordinate with my doctor when dosages needed adjusting. Personal service you can't find anywhere else.",
      date: "2 weeks ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "6",
      name: "Michael T.",
      location: "Parlin, NJ",
      rating: 5,
      review: "Fast, friendly, and professional. I needed a prescription filled urgently and they had it ready in 15 minutes. The staff is always helpful and the pharmacist took time to make sure I understood the medication interactions. Highly recommend!",
      date: "5 days ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "7",
      name: "Sandra K.",
      location: "Linden, NJ",
      rating: 5,
      review: "The pet medication service is fantastic! They had my dog's specialty medication that 3 other pharmacies couldn't get. Saved me hundreds of dollars compared to the vet. The staff clearly cares about all their patients - even the furry ones!",
      date: "1 week ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "8",
      name: "James F.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "Georgies Outpatient Pharmacy has been handling my complex medication regimen for 2 years. They coordinate with multiple doctors, manage prior authorizations, and deliver everything on time. I don't know what I'd do without them. True professionals.",
      date: "4 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    },
    {
      id: "9",
      name: "Lisa W.",
      location: "Linden, NJ",
      rating: 5,
      review: "Amazing customer service! I was traveling and forgot my blood pressure medication. They called my doctor, got the prescription transferred, and had it ready in an hour. They literally saved my vacation. This is why I'll never go anywhere else.",
      date: "3 weeks ago",
      pharmacy: "Family Pharmacy",
      verified: true
    },
    {
      id: "10",
      name: "Anthony G.",
      location: "Parlin, NJ",
      rating: 5,
      review: "The delivery service is incredible. Free monthly delivery right to my door, and they even call to confirm I received everything. During COVID they were a lifeline. The entire team goes above and beyond every single time.",
      date: "1 week ago",
      pharmacy: "Parlin Pharmacy",
      verified: true
    },
    {
      id: "11",
      name: "Carol D.",
      location: "Linden, NJ",
      rating: 5,
      review: "Best prices in town! I compared my prescriptions with 5 other pharmacies and Georgies was significantly cheaper on everything. Plus they accept all my insurance plans and process everything quickly. Why would I go anywhere else?",
      date: "2 weeks ago",
      pharmacy: "Specialty Pharmacy",
      verified: true
    },
    {
      id: "12",
      name: "Frank B.",
      location: "Browns Mills, NJ",
      rating: 5,
      review: "The pharmacists here are like having a medical consultant. They caught a dangerous drug interaction that my doctor missed. Their attention to detail and genuine care for patient safety sets them apart from every other pharmacy I've used.",
      date: "6 days ago",
      pharmacy: "Outpatient Pharmacy",
      verified: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleManualNavigation = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
      />
    ));
  };

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  // Group testimonials by pharmacy for stats
  const pharmacyStats = testimonials.reduce((acc, testimonial) => {
    const pharmacy = testimonial.pharmacy;
    if (!acc[pharmacy]) {
      acc[pharmacy] = { count: 0, totalRating: 0 };
    }
    acc[pharmacy].count++;
    acc[pharmacy].totalRating += testimonial.rating;
    return acc;
  }, {} as Record<string, { count: number; totalRating: number }>);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-br from-primary to-red-900 rounded-xl p-12 text-white shadow-xl">
          <h1 className="text-5xl font-bold mb-4">What Our Patients Say</h1>
          <p className="text-xl mb-6 opacity-90">Real reviews from real patients across all our locations</p>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
            <span className="text-lg opacity-90">({totalReviews} reviews)</span>
          </div>
          
          <div className="bg-white/15 text-white px-6 py-3 rounded-full inline-block font-semibold">
            Trusted by thousands of families across New Jersey
          </div>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="bg-white rounded-xl p-10 mb-12 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Patient Stories</h2>
            <p className="text-slate-600 text-lg">Hear directly from our valued patients</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-none shadow-lg bg-slate-50">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <Quote className="h-8 w-8 text-primary mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].review}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                        <p className="font-semibold text-slate-900">{testimonials[currentIndex].name}</p>
                        <p className="text-slate-600">{testimonials[currentIndex].location}</p>
                        <p className="text-sm text-primary font-medium">Georgies {testimonials[currentIndex].pharmacy}</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-slate-500">{testimonials[currentIndex].date}</p>
                        {testimonials[currentIndex].verified && (
                          <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            Verified Patient
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg border-primary hover:bg-primary hover:text-white"
              onClick={() => handleManualNavigation(prevTestimonial)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg border-primary hover:bg-primary hover:text-white"
              onClick={() => handleManualNavigation(nextTestimonial)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Auto-play indicator and controls */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="flex justify-center gap-2">
                {testimonials.slice(0, 10).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex % 10 ? 'bg-primary w-8' : 'bg-slate-300'
                    }`}
                    onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`}></div>
                <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-primary hover:underline ml-2"
                >
                  {isAutoPlaying ? 'Pause' : 'Resume'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pharmacy Stats */}
        <div className="bg-white rounded-xl p-10 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Reviews by Location</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pharmacyStats).map(([pharmacy, stats]) => (
              <div key={pharmacy} className="text-center p-6 bg-slate-50 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Georgies {pharmacy}</h3>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(stats.totalRating / stats.count))}
                </div>
                <p className="text-2xl font-bold text-slate-900">
                  {(stats.totalRating / stats.count).toFixed(1)}
                </p>
                <p className="text-sm text-slate-600">({stats.count} reviews)</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="bg-white rounded-xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">All Patient Reviews ({totalReviews} total)</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.location}</p>
                    <p className="text-sm text-primary font-medium">Georgies {testimonial.pharmacy}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-slate-500">{testimonial.date}</p>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1 text-green-600 text-xs">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                          Verified
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-red-900 text-white rounded-xl p-10 text-center shadow-lg mt-12">
          <h2 className="text-3xl font-bold mb-4">Experience the Georgies Difference</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust Georgies Pharmacy for their healthcare needs.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => window.location.href = '/locations'}
              className="bg-white text-primary hover:bg-slate-100 px-8 py-3 text-lg font-semibold"
            >
              Find Your Location
            </Button>
            <Button 
              onClick={() => window.location.href = '/services/transfers'}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              Transfer Prescriptions
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}