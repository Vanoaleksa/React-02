import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const Dialogitem = (props) => {
    let path = '/dialogs/' + props.id;
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>

    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = (props) => {

    let dialogs = [
        { id: '1', name: 'Lionel' },
        { id: '2', name: 'Suares' },
        { id: '3', name: 'Neymar' },
        { id: '4', name: 'Ronaldinho' },
        { id: '5', name: 'Ter Stegen' },
        { id: '6', name: 'Griezman' }
    ]

    let messages = [
        { id: '1', message: 'F*ck Real!' },
        { id: '2', message: 'We are champions!' },
        { id: '3', message: 'Do you smoke?' }
    ]


    let dialogsElements = dialogs.map(d => < Dialogitem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => < Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;