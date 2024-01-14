import { useParams } from 'react-router-dom';

// import img from './../img/projects/02-big.jpg';
import {projects} from './../helpers/project-list';

import BtnGitHub from './../components/btnGitHub/BtnGitHub';

const Project = () => {

    const {id} = useParams();
    const project = projects[id];

    return (
        <main class="section">
            <div class="container">
                <div class="project-details">

                    <h1 class="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} class="project-details__cover"/>

                        <div class="project-details__desc">
                            <p>{project.skills}</p>
                        </div>

                        {project.gitHubLink && (
                            <BtnGitHub link='https://github.com'/>
                        )}


                </div>
            </div>
        </main>
    );
}

export default Project;