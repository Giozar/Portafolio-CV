import { changeSlide} from './portfolio/move-gallery';
import { project } from './portfolio/render-project';

export const init = ( direction )=>{
    changeSlide( direction );
}

export const renderProject = (element)=>{
    project(element);
}

