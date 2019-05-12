import React from 'react'
import {
  Icon,
  Message,
} from 'semantic-ui-react'
import { Timeline as Timelined, TimelineItem }  from 'vertical-timeline-component-for-react';

// Style
import './Timeline.scss'

class Timeline extends React.Component {

  render() {

    return(
      <div
      >
        <Timelined lineColor={'#ddd'}>
          <TimelineItem
            className="timeline-item"
            key="001"
            dateText="October 2018"
            style={{ color: '#e86971' }}
          >
            <Icon
              className="timeline-date-icon"
              color='red'
              name='briefcase'
            /> Works@
            <div className="timeline-item-content">
              <h3>Virtual Web Assist Inc</h3>
              <h4>Front-End Web Developer.</h4>
              <p>
                Worked as ReactJS Front-End Developer. Collaborated with different developers
                to work on client systems, with the use of development languages and tools such as React,
                Javascript, MySQL, CSS/SASS, HTML, Redux, UI Frameworks (Material UI, Semantic UI, React Bootstrap) Webpack, ESLINT, JSX, VS Code, Atom, Docker, npm and GIT.
              </p>
            </div>
          </TimelineItem>
          <TimelineItem
            className="timeline-item"
            key="002"
            dateText="June 2018"
            dateInnerStyle={{ background: '#61b8ff' }}
            // bodyContainerStyle={{
            //   background: '#ddd',
            //   padding: '20px',
            //   borderRadius: '8px',
            //   boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            // }}
          >
            <Icon
              className="timeline-date-icon"
              color='blue'
              name='graduation cap'
            /> Graduated
            <div className="timeline-item-content">
              <h3>Bachelor of Science in Information Technology</h3>
              <h4>Saint Louis University</h4>
              <p>
                Alumnus of Batch 2018. Software Engineering. Web Development. Networks Technology.
              </p>
            </div>
          </TimelineItem>
          <TimelineItem
            className="timeline-item"
            key="003"
            dateText="May 2017"
            dateInnerStyle={{ background: 'rgb(224, 123, 83)' }}
            style={{ color: '#e6e6e6' }}
          >
            <Icon
              className="timeline-date-icon"
              color='orange'
              name='suitcase'
            /> Internship@
            <div className="timeline-item-content">
              <h3>Linkage Web Development</h3>
              <h4>Front-End Developer</h4>
              <p>
                Intern as Front-End Developer and Designer with use of Adobe Products (Fireworks, Photoshop, Illustrator)
                Wordpress, Javascript, HTML, CSS/SASS, MySQL.
              </p>
            </div>
          </TimelineItem>
          <TimelineItem
            className="timeline-item"
            key="004"
            dateText="August 2014"
            dateInnerStyle={{ background: '#5bbd72' }}
            style={{ color: '#e6e6e6' }}
          >
            <Icon
              className="timeline-date-icon"
              color='green'
              name='book'
            /> Primary and Secondary@         
            <h3>Mil-An National High</h3>
          </TimelineItem>
        </Timelined>
      </div>
    )
  }
}

export default Timeline