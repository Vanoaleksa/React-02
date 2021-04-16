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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialogitem name='Lionel' id='1' />
                <Dialogitem name='Suares' id='2' />
                <Dialogitem name='Neymar' id='3' />
                <Dialogitem name='Ronaldinho' id='4' />
                <Dialogitem name='Ter Stegen' id='5' />
                <Dialogitem name='Griezman' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='F*ck Real!' />
                <Message message='We are champions!' />
                <Message message='Do you smoke?' />
                <Message message='Do you smoke?' />
                <Message message='Do you smoke?' />
                <Message message='Do you smoke?' />
            </div>
        </div>
    );
}


export default Dialogs;