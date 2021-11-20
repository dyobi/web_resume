import React from 'react';
import { Typography } from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import GetAppIcon from '@material-ui/icons/GetApp';

import CustomTimeline, { CustomTimelineSeparator } from '../Timeline';
import DisplayImage from '../../assets/images/displayImage.jpg';
import resumeData from '../../utils/resumeData';

import CustomButton from '../Button';
import './index.css';

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>
            {link ? (<Typography className='timelineItem_text'>
                <span>{title}:</span> <a href={link} target='_blank' rel="noreferrer">
                    {text}
                </a>
            </Typography>) : (
                <Typography className='timelineItem_text'><span>{title}:</span> {text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>

            <figure className="profile_image">
                <img src={DisplayImage} alt="" />
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomTimelineItem title='Name' text={resumeData.name} />
                    <CustomTimelineItem title='Title' text={resumeData.title} />
                    <CustomTimelineItem title='E-mail' text={resumeData.email} />
                    <CustomTimelineItem title='Phone' text={resumeData.phone} />
                    <CustomTimelineItem title='Kakao' text={resumeData.kakao} />

                    {/* {Object.keys(resumeData.socials).map(key => (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                    ))} */}
                </CustomTimeline>
                <div className='button_container'>
                    <a href={resumeData.coverLetter} download='LukeKim.pdf'>
                        <CustomButton text={'Download Cv'} icon={<GetAppIcon />} />
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Profile;