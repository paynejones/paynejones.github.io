import './WorkEx.css';

export default function WorkEx(props){
    return(
        <div className='work'>
            <h3 className='title'>{props.title}</h3>
            <h3 className='workplace'>{props.name}</h3> 
            <p className='dates'>{props.dates}</p>
            <p className='blurb'>{props.blurb}</p>
        </div>
    );
}