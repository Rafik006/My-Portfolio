import React from 'react';
import Template from '../../animation/Test.jsx';
import Cards from '../../animation/project_card/Cards';
import RBK_Website from '../../assets/Rbk_website.png';
import E_commerce from '../../assets/E-commerce.png';

const Projects = () => {
  return (
    <section className="container mx-auto">
      <Template info={'My Projects'} className={'text-3xl font-bold mb-7'} type="paragraph" />
      <div className="container flex flex-wrap gap-6 justify-center items-center md:py-10 md:px-0 md:max-[500px]:flex-col projects">
        <Cards img_src={RBK_Website} project_name={'RebootKamp Website'} className="w-full md:w-auto" />
        <Cards img_src={E_commerce} project_name={'E-commerce Website'} className="w-full md:w-auto" />
        <Cards img_src={E_commerce} project_name={'E-commerce Website'} className="w-full md:w-auto" />
        <Cards img_src={RBK_Website} project_name={'RebootKamp Website'} className="w-full md:w-auto" />
      </div>
    </section>
  );
};

export default Projects;
