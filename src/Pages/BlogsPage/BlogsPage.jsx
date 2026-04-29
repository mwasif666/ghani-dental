import React from 'react';
import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import { GdBlogsSection } from '../../Components/HomeClone/HomeCloneSections';

const headingData = {
  title: 'Blog Page',
};

const BlogsPage = () => {
  return (
    <>
      <Section
        className={'cs_page_heading cs_service_inner_banner cs_bg_filed cs_center'}
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80"
      >
        <PageHeading data={headingData} />
      </Section>
      <GdBlogsSection />
    </>
  );
};

export default BlogsPage;
