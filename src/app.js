import { changeSlide} from './portfolio/move-gallery';
import { project } from './portfolio/render-project';

export const init = ( direction, slides )=>{
    changeSlide( direction, slides );
}

export const renderProject = (element, op)=>{
    project(element, op);
}

