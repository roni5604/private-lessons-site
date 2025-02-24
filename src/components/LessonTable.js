// src/components/LessonTable.js

import React, { useState } from 'react';
import { lessonTable } from '../styles';

const LessonTable = () => {
  // מגדירים מערך של שיעורים עם שני עמודות בלבד: סוג השיעור ותיאור
  const lessons = [
    { id: 1, type: 'שיעורים בזום', description: 'לימוד מקוון עם כלים מתקדמים' },
    { id: 2, type: 'שיעורים בבית הלקוח', description: 'שיעור פנים אל פנים בסביבתכם' },
    { id: 3, type: 'שיעורים אצל המורה', description: 'למידה בסביבת לימוד מקצועית אצל המורה' },
    { id: 4, type: 'ליווי אישי', description: 'תכנית לימוד מותאמת אישית עם מעקב ופידבק רציף' }
  ];

  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={lessonTable.table}>
        <thead>
          <tr>
            <th style={lessonTable.cell}>סוג השיעור</th>
            <th style={lessonTable.cell}>תיאור</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr 
              key={lesson.id} 
              style={{
                ...lessonTable.cell,
                transform: hoveredRow === lesson.id ? 'scale(1.05)' : 'scale(1)',
                backgroundColor: hoveredRow === lesson.id ? '#cce6ff' : ''
              }}
              onMouseEnter={() => setHoveredRow(lesson.id)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td style={lessonTable.cell}>{lesson.type}</td>
              <td style={lessonTable.cell}>{lesson.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LessonTable;
