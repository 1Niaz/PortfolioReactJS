import './style.css';

import imgGitHub from './gitHub-black.svg';

const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" class="btn-outline">
            <img src={imgGitHub} alt="" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;











