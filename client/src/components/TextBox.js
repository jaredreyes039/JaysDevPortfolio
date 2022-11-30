import '../styles/Home.scss'

export default function TextBox(props){
    return (
        <div key={props.keyv} className="textBox">
            <h1>{props.header}</h1>
            <p>{props.brief_desc}</p>
            <br></br>
            <ul className='textBox-list'>
            {props.points.map((point, idx)=>{
                return (
                <li key={idx} className='textBox-list-item'>
                    {point}
                </li>
                )
            })}
            </ul>
            <p>{props.follow_up_text}</p>
        </div>
    )
}