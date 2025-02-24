// src/components/FAQ.js

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { faqStyles } from '../styles';

const FAQ = () => {
  const faqData = [
    {
      question: "איך מתבצעים השיעורים?",
      answer: "השיעורים מתקיימים בזום, בבית הלקוח או אצל המורה, והם מותאמים אישית לכל תלמיד בהתאם לצרכיו ולרמתו."
    },
    {
      question: "האם השיעורים מתאימים לכל הרמות?",
      answer: "כן, אני מלמד החל מתלמידי יסודי ועד לסטודנטים באוניברסיטה, כאשר לכל תלמיד ניתנת התייחסות אישית ומעמיקה."
    },
    {
      question: "מה צריך להכין לפני השיעור?",
      answer: "מומלץ להגיע עם מחברת, כלי כתיבה וחומרי עזר רלוונטיים. בשיעורים בזום, ודאו חיבור אינטרנט יציב ושימוש במיקרופון איכותי."
    },
    {
      question: "איך קובעים שיעור?",
      answer: "ניתן ליצור קשר טלפוני או דרך הטופס באתר, ולאחר מכן נתאם מועד שנוח לשני הצדדים."
    },
    {
      question: "האם אפשר לבטל שיעור?",
      answer: "כן, ניתן לבטל או לדחות שיעור בהודעה מוקדמת של לפחות 24 שעות, בהתאם להסדרים אישיים."
    },
    {
      question: "מה כוללת תוכנית הליווי האישי?",
      answer: "התוכנית כוללת מעקב שוטף, תרגול מותאם אישית ומתן משוב מתמיד לשיפור ההישגים והבנת החומר."
    },
    {
      question: "האם ניתן לשלב בין מתמטיקה למדעי המחשב בשיעור אחד?",
      answer: "בהחלט! ניתן לשלב תכנים משני התחומים בהתאם לצרכי התלמיד ולמבנה השיעור."
    },
    {
      question: "מה אורך השיעור?",
      answer: "בדרך כלל שיעור נמשך בין 60 ל-90 דקות, אך ניתן להתאים את אורך השיעור לצרכי התלמיד."
    },
    {
      question: "האם יש שיעורים קבוצתיים?",
      answer: "כן, קיימת אפשרות לשיעורים קבוצתיים בקבוצות קטנות, מה שמאפשר למידה שיתופית במחיר אטרקטיבי לכל משתתף."
    },
    {
      question: "אילו שיטות הוראה אתם משתמשים?",
      answer: "אני משלב בין שיטות הוראה מסורתיות לשיטות מתקדמות, תוך שימוש בכלים דיגיטליים ואינטרקטיביים להמחשת החומר ולהעצמת הלמידה."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div style={faqStyles.container}>
      {faqData.map((item, index) => (
        <div key={index} style={faqStyles.item}>
          <div
            style={faqStyles.question}
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <FaChevronDown
              style={{
                transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s'
              }}
            />
          </div>
          <div
            style={{
              ...faqStyles.answer,
              maxHeight: activeIndex === index ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease'
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
