import React from 'react';

import { GitHub, Instagram, WebOutlined, AssignmentOutlined, GestureOutlined } from '@material-ui/icons';

import resume from '../assets/images/resume.jpg';

import cv from '../assets/cv/luke_cv.pdf';

const ResumeData = {
    name: "Kil-soon Kim",
    title: "Full stack developer",

    address: 'Seoul, Korea',
    birthday: "11th November 1992",
    email: "dyobi.92@gmail.com",
    phone: "(+82)10 4449 4369",
    kakao: "dyobi_",

    coverLetter: cv,

    socials: {
        GitHub: {
            link: "https://www.github.com/dyobi",
            text: "my github",
            icon: <GitHub />
        },
        Instagram: {
            link: "https://www.instagram.com/dyobi_",
            text: "my instagram",
            icon: <Instagram />
        }
    },

    about: "    As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high-growth company.",

    experiences: [
        {
            title: 'Mechanical Designer',
            date: '2017.8 - 2018.4',
            description: 'Designing pressure vessels & heat exchangers for factories.'
        }
    ],

    educations: [
        {
            title: 'Gachon University',
            date: '2011.3 - 2017.8',
            description: 'Majored in Mechanical Engineering'
        }, {
            title: '42SilliconValley',
            date: '2019.7 - 2021.7',
            description: 'As a student at a coding school located in Fremont'
        }, {
            title: 'KGITBANK',
            date: '2021.10 ~',
            description: 'Bootcamp located in Seoul'
        }
    ],

    services: [
        {
            title: 'Web Development',
            icon: <WebOutlined />
        }, {
            title: 'Branding Identity',
            icon: <AssignmentOutlined />
        }, {
            title: 'Illustrator',
            icon: <GestureOutlined />
        }
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                'React',
                'ReactNative',
                'JavaScript',
                'TypeScript'
            ]
        }, {
            title: 'BACK-END',
            description: [
                'NodeJS',
                'Java'
            ]
        }, {
            title: 'DATABASES',
            description: [
                'MySQL',
                'MongoDB',
                'Oracle'
            ]
        }, {
            title: 'SOURCE CONTROL',
            description: [
                'Git',
                'GitHub'
            ]
        }
    ],

    projects: [
        {
            tag: 'React',
            images: [resume],
            title: 'Resume',
            caption: 'Responsive Web Application for Portfolio',
            description: 'A web project for portfolio [ FE: JS, React ]',
            links: [
            ]
        }
    ]
}

export default ResumeData;