import './WorkEx.css'

export default function Project(props){
    var link = "https://github.com/"
    var title = props.user
    link += props.user
    if (props.repo !== undefined){
        link += "/"
        title += "/"
        link += props.repo
        title += props.repo
    }
    return(
        <div className='project'>
            <a className='repo' href={link}>{title}</a>
            <p className='blurb'>{props.blurb}</p>
        </div>
    );
}